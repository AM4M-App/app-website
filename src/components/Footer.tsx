import Image from "next/image";
import Link from "next/link";
import AppStoreButtons from "./AppStoreButtons";

export default function Footer() {
  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "mailto:contact@acceptme4me.com" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer id="download" className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      
      {/* CTA Section */}
      <div className="relative py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-sm font-medium text-white/80 mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Available Now
          </span>
          
          <h2 className="heading-xl text-4xl sm:text-5xl lg:text-6xl text-white">
            Ready to find{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-purple-400">
              your person?
            </span>
          </h2>
          
          <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
            Find meaningful connections on AM4M. Your authentic self deserves 
            to be celebrated.
          </p>
          
          {/* App Store Buttons */}
          <div className="mt-10 flex justify-center">
            <AppStoreButtons size="large" variant="light" />
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span>Built for authentic connections</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>Meaningful matches</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center px-4 sm:px-6 lg:px-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <Image
                  src="/logo/AM4M-no-text-PNG.png"
                  alt="AM4M Logo"
                  width={48}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
                <span className="font-bold text-xl text-white">AM4M</span>
              </Link>
              <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-xs">
                Accept Me 4 Me. A dating app where authenticity is celebrated 
                and real connections thrive. Be yourself, find your person.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-white/90 tracking-wide uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-white/90 tracking-wide uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Accept Me 4 Me, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-white/40 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
