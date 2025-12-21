import Image from "next/image";

interface TestimonialCardProps {
  image: string;
  names: string;
  quote: string;
  author: string;
  index: number;
}

function TestimonialCard({ image, names, quote, author, index }: TestimonialCardProps) {
  return (
    <article 
      className={`card-hover bg-white rounded-3xl overflow-hidden shadow-lg stagger-${index + 1}`}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden img-zoom">
        <Image
          src={image}
          alt={`${names} - success story`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-primary">
          {names}
        </h3>
        
        <blockquote className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
          &ldquo;{quote}&rdquo;
          <footer className="mt-2 text-primary/80 font-medium">
            ~ {author}
          </footer>
        </blockquote>

        {/* Read Story Button */}
        <a
          href="#"
          className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group"
        >
          <span>Read their story</span>
          <svg 
            className="w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      image: "/images/7.jpg",
      names: "Adam & Sandy",
      quote: "I finally feel free to be myself without the pressure of perfection",
      author: "Sandy, 36",
    },
    {
      image: "/images/10.jpg",
      names: "Andres & Tara",
      quote: "Finding real connection in this ultra-connected world is not easy, but AM4M made it happen for us!",
      author: "Andres, 26",
    },
    {
      image: "/images/12.jpg",
      names: "Maria & Drew",
      quote: "The community is so welcoming, and I love connecting with others who value authenticity just like I do.",
      author: "Drew, 21",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
            Real Lives, Real
            <br />
            <span className="text-primary/80">Stories</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how AM4M has helped thousands find meaningful connections and lasting relationships.
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

        {/* View All Stories CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary text-lg font-semibold hover:gap-3 transition-all duration-300 group"
          >
            <span>View all success stories</span>
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


