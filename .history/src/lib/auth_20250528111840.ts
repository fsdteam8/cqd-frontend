export function getAccessToken(): string | null {
    if (typeof window === "undefined") {
      return null // Server-side rendering
    }
    return localStorage.getItem("accessToken")
  }
  
  export function setAccessToken(token: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", token)
    }
  }
  
  export function removeAccessToken(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken")
    }
  }
  
  export function isAuthenticated(): boolean {
    return getAccessToken() !== null
  }
  
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 2 * 60 * 60, // 2 hours in seconds
    updateAge: 24 * 60 * 60, // 24 hours in seconds
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter email and password");
        }

        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const data = await res.json();
          console.log("Auth API Response:", data);

          if (!res.ok || !data?.token) {
            throw new Error(data.message || "Invalid credentials");
          }

          return {
            id: data?.id,
            name: data?.name,
            email: data?.email,
            token: data?.token,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          throw new Error("Authentication failed. Please try again.");
        }
      },
    }),
  ],
  callbacks: {
    //eslint-disable-next-line
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.accessToken = user.token;
      }
      return token;
    },
    //eslint-disable-next-line
    async session({ session, token }: { session: any; token: JWT }) {
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
        token: token.accessToken,
      };
      return session;
    },
  },
};
