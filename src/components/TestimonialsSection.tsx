import Image from "next/image";

interface TestimonialCardProps {
  image: string;
  names: string;
  quote: string;
  author: string;
  location: string;
  index: number;
}

function TestimonialCard({ image, names, quote, author, location, index }: TestimonialCardProps) {
  const colors = [
    "from-primary to-purple-600",
    "from-rose-500 to-pink-600", 
    "from-amber-500 to-orange-600",
  ];
  
  return (
    <article 
      className={`group card-hover relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 stagger-${index + 1}`}
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden img-zoom">
        <Image
          src={image}
          alt={`${names} - success story`}
          fill
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Names on image */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">
                {names}
              </h3>
              <p className="text-white/70 text-sm">{location}</p>
            </div>
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[index % 3]} flex items-center justify-center text-white shadow-lg`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Quote */}
        <div className="relative">
          <svg className="absolute -top-2 -left-1 w-8 h-8 text-gray-100" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="relative z-10 pl-6">
            <p className="text-gray-700 text-lg leading-relaxed italic">
              {quote}
            </p>
            <footer className="mt-4 flex items-center gap-3">
              <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${colors[index % 3]}`} />
              <p className="text-gray-900 font-semibold">
                {author}
              </p>
            </footer>
          </blockquote>
        </div>

      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      image: "/images/7.jpg",
      names: "Adam & Sandy",
      quote: "I finally feel free to be myself without the pressure of perfection. AM4M helped us find each other when we least expected it.",
      author: "Sandy, 36",
      location: "New York, NY",
    },
    {
      image: "/images/10.jpg",
      names: "Andres & Tara",
      quote: "Finding real connection in this ultra-connected world isn't easy, but AM4M made it happen for us! We bonded over our shared values.",
      author: "Andres, 26",
      location: "Miami, FL",
    },
    {
      image: "/images/12.jpg",
      names: "Maria & Drew",
      quote: "The community is so welcoming. I love connecting with others who value authenticity just like I do. We're now planning our wedding!",
      author: "Drew, 21",
      location: "Los Angeles, CA",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="badge badge-accent mb-4">Success Stories</span>
          <h2 className="heading-lg text-4xl sm:text-5xl lg:text-6xl text-gray-900">
            Real lives,{" "}
            <span className="gradient-text-warm">real love</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how AM4M has helped thousands find meaningful connections 
            and lasting relationships built on authenticity.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              index={index}
              {...testimonial}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-left">
              <p className="text-gray-900 font-bold text-lg">Ready to find your person?</p>
              <p className="text-gray-500 text-sm">Join thousands who found love on AM4M</p>
            </div>
            <a
              href="#download"
              className="btn-primary bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
