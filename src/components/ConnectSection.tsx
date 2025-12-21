import Image from "next/image";
import AppStoreButtons from "./AppStoreButtons";

export default function ConnectSection() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden bg-primary">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl img-zoom">
              <Image
                src="/images/5.jpg"
                alt="Happy couple connection"
                width={700}
                height={800}
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              Connect
              <br />
              <span className="text-white/90">with others</span>
              <br />
              <span className="text-white/80">who</span>
              <br />
              <span className="text-white/90">appreciate</span>
              <br />
              <span className="text-white">you for who</span>
              <br />
              <span className="text-white/90">you are.</span>
            </h2>

            <div className="mt-10 sm:mt-12">
              <a
                href="#download"
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-xl btn-primary animate-pulse-glow"
              >
                <span>Start Now</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Features mini-list */}
            <div className="mt-12 space-y-4">
              {[
                "Authentic connections, not swipes",
                "Community that values you",
                "Safe and inclusive space",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
