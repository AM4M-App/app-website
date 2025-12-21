const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Be Authentically You",
    description: "No filters, no facades. Share your real self through video introductions and genuine profiles.",
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Personality-Based Matching",
    description: "Our algorithm connects you based on values, interests, and what truly matters to you.",
    color: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Safe & Inclusive Space",
    description: "A community that honors all identities. Your safety and privacy are our top priorities.",
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Video Introductions",
    description: "See and hear real people before you connect. No more guessing who's behind the profile.",
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Welcoming Community",
    description: "Everyone belongs here. Connect with people who celebrate differences and value inclusion.",
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Real Connections",
    description: "Move beyond swipes. Build meaningful relationships based on genuine compatibility.",
    color: "from-fuchsia-500 to-purple-600",
    bgLight: "bg-fuchsia-50",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="badge badge-primary mb-4">Why AM4M</span>
          <h2 className="heading-lg text-4xl sm:text-5xl lg:text-6xl text-gray-900 text-balance">
            Dating done{" "}
            <span className="gradient-text">differently</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We&apos;re building more than an app — we&apos;re creating a movement where 
            authenticity is celebrated and real connections thrive.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`group card-hover relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm stagger-${index + 1}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${feature.bgLight} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <div className={`bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`}>
                  <div className="text-gray-700">
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient line */}
              <div className={`absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </article>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            {[
              { value: "10K+", label: "Active Members", accent: "text-primary" },
              { value: "89%", label: "Match Success Rate", accent: "text-emerald-600" },
              { value: "50K+", label: "Connections Made", accent: "text-amber-600" },
              { value: "4.9", label: "App Store Rating", accent: "text-rose-600" },
            ].map((stat, index) => (
              <div key={stat.label} className={`stagger-${index + 1}`}>
                <p className={`stat-number text-4xl sm:text-5xl lg:text-6xl ${stat.accent}`}>
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-500 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

