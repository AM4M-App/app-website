import Image from "next/image";
import Link from "next/link";
import AppStoreButtons from "./AppStoreButtons";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass background */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Image
                src="/logo/AM4M-no-text-PNG.png"
                alt="AM4M"
                width={44}
                height={44}
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <span className="hidden sm:block font-bold text-xl text-gray-900 tracking-tight">
              AM4M
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: "Features", href: "#features" },
              { label: "Stories", href: "#stories" },
              { label: "About", href: "/about" },
            ].map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100/80 transition-all duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100/80 transition-all duration-200"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* App Store Buttons - Hidden on smaller screens */}
            <div className="hidden lg:flex">
              <AppStoreButtons size="small" variant="dark" />
            </div>

            {/* Mobile/Tablet CTA */}
            <a
              href="#download"
              className="lg:hidden btn-primary bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Get App
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
