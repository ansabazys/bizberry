import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f0eeeb] px-4 pt-[9.5rem] pb-16 sm:px-6 sm:pt-44 lg:px-8">
        <div className="mx-auto max-w-11/12">
          <h1 className="text-center text-5xl font-medium tracking-tight text-[#941c1e] sm:text-7xl lg:text-left lg:text-8xl">
            about
          </h1>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="bg-[#ebe7e2] p-6">
              <h2 className="text-2xl font-medium text-[#941c1e]">Bizberry Cafe, Pattambi</h2>
              <p className="mt-4 text-zinc-700">
                Bizberry is a youth-friendly cafe known for great coffee, desserts, burgers, and a vibe made for hangouts.
                We serve students, freelancers, and anyone who wants quality food in a clean modern space.
              </p>
            </div>
            <div className="bg-[#ebe7e2] p-6">
              <h2 className="text-2xl font-medium text-[#941c1e]">Our Vibe</h2>
              <p className="mt-4 text-zinc-700">
                Minimal interiors, good playlists, and cozy seating. Whether you are catching up with friends or working
                solo, Bizberry is designed to feel premium but casual.
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
