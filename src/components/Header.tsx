import Image from "next/image";
import AppStoreButtons from "./AppStoreButtons";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2a2a2a] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 animate-fade-in-down">
            <Image
              src="/logo/AM4M-with-text-Gray-and-white-PNG.png"
              alt="AM4M Logo"
              width={140}
              height={48}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </a>

          {/* App Store Buttons - Hidden on mobile, shown on larger screens */}
          <div className="hidden sm:flex animate-fade-in-down stagger-2">
            <AppStoreButtons size="small" />
          </div>

          {/* Mobile CTA */}
          <a
            href="#download"
            className="sm:hidden btn-primary bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold animate-fade-in-down"
          >
            Get App
          </a>
        </div>
      </div>
    </header>
  );
}
