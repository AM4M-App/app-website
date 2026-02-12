import Image from "next/image";
import Link from "next/link";

export default function ConnectSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gray-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-primary/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
                <Image
                  src="/images/5.jpg"
                  alt="Authentic connection through AM4M"
                  width={700}
                  height={850}
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Quote overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <blockquote className="text-white">
                    <p className="text-lg sm:text-xl font-medium italic leading-relaxed">
                      &ldquo;I finally found someone who loves me for exactly who I am.&rdquo;
                    </p>
                    <footer className="mt-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                        <Image
                          src="/images/8.jpg"
                          alt="User"
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Maria</p>
                        <p className="text-white/60 text-xs">Chicago, IL</p>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>

              {/* Floating stats cards */}
             

              <div className="absolute -left-4 sm:-left-8 bottom-32 bg-white rounded-2xl p-4 shadow-xl animate-float hidden sm:block" style={{ animationDelay: '-3s' }}>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['9', 'new-3', 'new-1'].map((num) => (
                      <div key={num} className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                        <Image
                          src={`/images/${num}.jpg`}
                          alt="User"
                          width={32}
                          height={32}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">New today</p>
                    <p className="text-xs text-gray-500">Join them!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 text-white">
            <span className="badge bg-white/10 border-white/20 text-white/90 mb-6">
              Our Promise
            </span>
            
            <h2 className="heading-xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95]">
              <span className="block text-white">Connect with</span>
              <span className="block text-white/90 mt-2">people who</span>
              <span className="block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-purple-400 to-pink-400">
                  appreciate
                </span>
              </span>
              <span className="block text-white/90 mt-2">you for who</span>
              <span className="block text-white mt-2">you are.</span>
            </h2>

            <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-lg">
              In a world of filters and pretense, AM4M stands for something different. 
              A space where your authentic self is not just accepted — it&apos;s celebrated.
            </p>

            {/* Features list */}
            <div className="mt-10 space-y-4">
              {[
                { icon: "✓", text: "Authentic connections, not endless swipes" },
                { icon: "✓", text: "Community that values the real you" },
                { icon: "✓", text: "Safe, inclusive, and welcoming space" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-primary/30">
                    {item.icon}
                  </div>
                  <span className="text-white/80 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#download"
                className="btn-primary inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/90 shadow-xl"
              >
                <span>Start Your Journey</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white px-6 py-4 font-medium transition-colors"
              >
                <span>Learn more</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
