import Image from "next/image";
import AppStoreButtons from "./AppStoreButtons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/1.jpg"
          alt="Couple embracing"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
        <div className="max-w-2xl">
          {/* Main Headline */}
          <h1 className="animate-fade-in-up">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary leading-[1.1] tracking-tight">
              Find Love &
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary leading-[1.1] tracking-tight mt-2">
              Acceptance
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-700 max-w-lg animate-fade-in-up stagger-2">
            Connect with others who appreciate you for who you are. 
            Start your journey to meaningful connections today.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
            <AppStoreButtons size="large" className="[&_a]:bg-primary [&_a]:border-primary [&_a]:hover:bg-primary-dark" />
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center gap-8 animate-fade-in-up stagger-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[2, 3, 4].map((num) => (
                  <div key={num} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                    <Image
                      src={`/images/${num}.jpg`}
                      alt="User"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">10K+ Users</p>
                <p className="text-xs text-gray-600">Already connected</p>
              </div>
            </div>
            <div className="hidden sm:block h-10 w-px bg-gray-300" />
            <div className="hidden sm:block">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-1">4.9 App Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs font-medium">Scroll</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
