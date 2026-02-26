import Image from "next/image";
import AppStoreButtons from "./AppStoreButtons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-50">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 hero-mesh" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full glow-orb animate-float-slow" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-accent/15 rounded-full glow-orb animate-float-slow" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 right-[30%] w-[300px] h-[300px] bg-purple-500/10 rounded-full glow-orb animate-float-slow" style={{ animationDelay: '-2s' }} />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Brand Header */}
            <div className="animate-fade-in-up">
              <h2 className="heading-xl text-2xl sm:text-3xl lg:text-4xl tracking-tight">
                <span className="gradient-text">ACCEPT ME 4 ME</span>
              </h2>
            </div>

            {/* Badge */}
            <div className="mt-4 animate-fade-in-up stagger-1">
              <span className="badge badge-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Now Available on iOS & Android
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 animate-fade-in-up stagger-2">
              <span className="block heading-xl text-5xl sm:text-6xl lg:text-7xl text-gray-900">
                Find Love &
              </span>
              <span className="block heading-xl text-5xl sm:text-6xl lg:text-7xl mt-2">
                <span className="gradient-text">Acceptance</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed animate-fade-in-up stagger-3">
              Connect with others who appreciate you for who you are. 
              Be <span className="font-semibold text-gray-900">unapologetically yourself</span> and 
              find your person in a community that celebrates authenticity.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-4">
              <AppStoreButtons size="large" variant="dark" />
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex flex-wrap items-center gap-8 animate-fade-in-up stagger-5">
              {/* User avatars */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {['2', '3', '4', 'new-1'].map((num, i) => (
                    <div 
                      key={num} 
                      className="w-11 h-11 rounded-full border-[3px] border-white overflow-hidden shadow-lg ring-1 ring-gray-100"
                      style={{ zIndex: 4 - i }}
                    >
                      <Image
                        src={`/images/${num}${num.startsWith('new') ? '' : ''}.jpg`}
                        alt="User"
                        width={44}
                        height={44}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">A community built on authenticity</p>
                  <p className="text-xs text-gray-500">Real people, real connections</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Phone Mockup */}
          <div className="order-1 lg:order-2 relative">
            {/* Main image container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
                <Image
                  src="/images/1.jpg"
                  alt="Happy couple connecting through AM4M"
                  width={600}
                  height={700}
                  className="object-cover w-full aspect-[4/5]"
                  priority
                  quality={90}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating card */}
                <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 animate-fade-in-up stagger-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <Image
                        src="/images/6.jpg"
                        alt="User"
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">It&apos;s a match! 💕</p>
                      <p className="text-xs text-gray-600">You both value authenticity</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side floating elements */}
              <div className="absolute -right-4 top-1/4 glass rounded-2xl p-3 shadow-xl animate-float hidden lg:block">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Personality First</p>
                    <p className="text-[10px] text-gray-500">Match style</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 top-1/2 glass rounded-2xl p-3 shadow-xl animate-float hidden lg:block" style={{ animationDelay: '-2s' }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Verified</p>
                    <p className="text-[10px] text-gray-500">Profile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <a href="#features" className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors">
          <span className="text-xs font-medium tracking-wide uppercase">Discover</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
