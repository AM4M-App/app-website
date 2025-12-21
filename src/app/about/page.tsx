import { Metadata } from "next";
import Link from "next/link";
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
        <section className="bg-gradient-to-br from-primary/5 via-white to-purple-50 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                About{" "}
                <span className="gradient-text">AM4M</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                Accept Me 4 Me — isn&apos;t this what we all want?
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg prose-gray max-w-none">
              <div className="animate-fade-in-up stagger-1">
                <p className="text-xl leading-relaxed text-gray-700">
                  Tired of trying to decide which app is right for you? Check out the app where everybody is welcome – <strong>Accept Me 4 Me!</strong>
                </p>
              </div>

              <div className="animate-fade-in-up stagger-2 mt-8">
                <p className="text-gray-600 leading-relaxed">
                  In a world that can feel so divided, where people often feel they have to wear masks (literally and figuratively), hide parts of who they are, share only filtered pictures, outdated pictures, or headshots only, just to feel accepted, we wanted to build something different — a <strong className="text-primary">COMMUNITY</strong> where authenticity is desired and appreciated.
                </p>
              </div>

              <div className="animate-fade-in-up stagger-3 mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Purpose</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our purpose is to create a space where all people, regardless of race, beliefs, lifestyle, identity, can feel comfortable to be authentic and find that person who accepts them for who they are. We&apos;re passionate about bringing people together, fostering connections that aren&apos;t based on perfection or curated personas, but on genuine understanding and acceptance.
                </p>
              </div>

              <div className="animate-fade-in-up stagger-4 mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Keep It Real</h2>
                <p className="text-gray-600 leading-relaxed">
                  Isn&apos;t misrepresentation getting old on dating apps? We believe in a world where people can connect based on who they truly are, in all their beautiful, complex, and unique ways – one reason we highly encourage our members to upload an introductory video along with pictures.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  No need to guess whether someone is being sincere when you can see what they look and sound like in a real life video. We are just asking our members to please keep it real. <strong>Keep it real with yourself first, and it will be easier for others to keep it real with you!</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-2xl p-8 mt-12 animate-fade-in-up stagger-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Celebrate Who You Are</h2>
                <p className="text-gray-600 leading-relaxed">
                  Get on video and celebrate who you are right now! Use everything you&apos;ve got – your voice, your passion, your best feature – even if it&apos;s your pinky finger! Love who you are and feel confident in knowing that there are others out here who will love all your perfect imperfections.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  There really is someone for everyone, no matter what it is you&apos;re looking for. Don&apos;t limit yourself by presenting anything other than the real you, which only sets unrealistic expectations, and unnecessary pressure on yourself and other members to be unauthentic.
                </p>
              </div>

              <div className="animate-fade-in-up stagger-6 mt-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">The AM4M Community</h2>
                <p className="text-gray-600 leading-relaxed">
                  In the AM4M community, you can be yourself unapologetically. It&apos;s a space where your identity is honored, your story can be heard if you choose to share it, and where you can meet others who value you just as you are. It&apos;s about real connections, shared experiences, and the freedom to explore relationships, friendships, and networks that nourish and uplift.
                </p>
              </div>

              <div className="text-center mt-16 p-8 bg-gray-900 text-white rounded-2xl animate-fade-in-up">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">This Isn&apos;t Just Another Dating App</h2>
                <p className="text-white/80 leading-relaxed text-lg">
                  Accept Me 4 Me is a lifestyle, a <strong className="text-primary-light">MOVEMENT</strong> to remind us all that we don&apos;t have to change to find belonging. We are enough as we are, and in the right space, our true selves can shine and connect!
                </p>
                <Link
                  href="/#download"
                  className="inline-block mt-8 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Join the Movement
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

