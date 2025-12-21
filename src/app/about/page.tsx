import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | AM4M - Accept Me 4 Me",
  description:
    "Learn about AM4M - a community where authenticity is desired and appreciated. Find connections based on who you truly are.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gray-50 hero-mesh" />
          <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-[5%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="badge badge-primary mb-4">Our Story</span>
              <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl text-gray-900">
                About{" "}
                <span className="gradient-text">AM4M</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Accept Me 4 Me — isn&apos;t this what we all want?
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="space-y-12">
              {/* Intro */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-700">
                  Tired of trying to decide which app is right for you? Check out the app where everybody is welcome – <span className="font-bold text-primary">Accept Me 4 Me!</span>
                </p>
              </div>

              {/* Card Section */}
              <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-100">
                <p className="text-gray-600 leading-relaxed text-lg">
                  In a world that can feel so divided, where people often feel they have to wear masks (literally and figuratively), hide parts of who they are, share only filtered pictures, outdated pictures, or headshots only, just to feel accepted, we wanted to build something different — a <span className="font-bold text-gray-900">COMMUNITY</span> where authenticity is desired and appreciated.
                </p>
              </div>

              {/* Section: Our Purpose */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h2 className="heading-md text-2xl sm:text-3xl text-gray-900">Our Purpose</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our purpose is to create a space where all people, regardless of race, beliefs, lifestyle, identity, can feel comfortable to be authentic and find that person who accepts them for who they are. We&apos;re passionate about bringing people together, fostering connections that aren&apos;t based on perfection or curated personas, but on genuine understanding and acceptance.
                </p>
              </div>

              {/* Section: Keep It Real */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <h2 className="heading-md text-2xl sm:text-3xl text-gray-900">Keep It Real</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Isn&apos;t misrepresentation getting old on dating apps? We believe in a world where people can connect based on who they truly are, in all their beautiful, complex, and unique ways – one reason we highly encourage our members to upload an introductory video along with pictures.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mt-4">
                  No need to guess whether someone is being sincere when you can see what they look and sound like in a real life video. We are just asking our members to please keep it real. <span className="font-semibold text-gray-900">Keep it real with yourself first, and it will be easier for others to keep it real with you!</span>
                </p>
              </div>

              {/* Highlight Card */}
              <div className="relative bg-gradient-to-br from-primary/5 via-purple-50 to-pink-50 rounded-3xl p-8 sm:p-10 border border-primary/10">
                <div className="absolute top-6 right-6 text-4xl">✨</div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>
                  <h2 className="heading-md text-2xl sm:text-3xl text-gray-900">Celebrate Who You Are</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Get on video and celebrate who you are right now! Use everything you&apos;ve got – your voice, your passion, your best feature – even if it&apos;s your pinky finger! Love who you are and feel confident in knowing that there are others out here who will love all your perfect imperfections.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  There really is someone for everyone, no matter what it is you&apos;re looking for. Don&apos;t limit yourself by presenting anything other than the real you, which only sets unrealistic expectations, and unnecessary pressure on yourself and other members to be unauthentic.
                </p>
              </div>

              {/* Section: The AM4M Community */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <h2 className="heading-md text-2xl sm:text-3xl text-gray-900">The AM4M Community</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  In the AM4M community, you can be yourself unapologetically. It&apos;s a space where your identity is honored, your story can be heard if you choose to share it, and where you can meet others who value you just as you are. It&apos;s about real connections, shared experiences, and the freedom to explore relationships, friendships, and networks that nourish and uplift.
                </p>
              </div>

              {/* CTA Card */}
              <div className="relative bg-gray-900 text-white rounded-3xl p-8 sm:p-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-900/20" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                
                <div className="relative text-center">
                  <h2 className="heading-md text-2xl sm:text-3xl text-white mb-4">
                    This Isn&apos;t Just Another Dating App
                  </h2>
                  <p className="text-white/80 leading-relaxed text-lg max-w-xl mx-auto">
                    Accept Me 4 Me is a lifestyle, a <span className="font-bold text-primary-light">MOVEMENT</span> to remind us all that we don&apos;t have to change to find belonging. We are enough as we are, and in the right space, our true selves can shine and connect!
                  </p>
                  <Link
                    href="/#download"
                    className="inline-flex items-center gap-2 mt-8 bg-white text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
                  >
                    <span>Join the Movement</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
