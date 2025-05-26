import Image from "next/image";
import { LoginForm } from "./_components/login-form";

export default function LoginPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      {/* Left side - Image */}
      <div className="hidden md:block md:col-span-1">
        <Image
          src="/images/auth_sidebar.jpg"
          alt="auth sidebar"
          width={720}
          height={1024}
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Right side - form */}
      <div className="md:col-span-1 h-full flex flex-col items-center justify-center">
        <Image
          src="/images/auth__logo.png"
          width={115}
          height={40}
          alt="Logo"
          className="w-[115px] h-[40px] rounded-full"
        />
        <div className="mx-auto w-full max-w-md mt-[60px]">
          {/* Logo */}

          {/* form text */}
          <div className="text-center pb-6">
            <h1 className="text-[#0E2A5C] font-poppins font-semibold text-[32px] leading-[120%] tracking-[0%] pb-2">
              Welcome <span>back</span>
            </h1>
            <p className="text-base font-poppins font-normal leading-[150%] tracking-[0%] text-black">
              Please enter your credentials to continue
            </p>
          </div>

          {/* Login form component */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
