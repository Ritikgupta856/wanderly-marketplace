"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="cursor-pointer saturate-200"
    >
      {/* Desktop Logo */}
      <div className="hidden lg:block">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={32}
          className="w-auto h-7 md:h-9"
          priority
        />
      </div>
      <div className="relative w-10 h-10 lg:hidden">
        <Image
          src="/images/favicon.png"
          alt="logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Logo;