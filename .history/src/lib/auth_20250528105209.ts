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
  