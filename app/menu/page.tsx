import MenuCategorySection from "../components/MenuCategorySection";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f0eeeb] px-4 pt-[9.5rem] pb-16 sm:px-6 sm:pt-44 lg:px-8">
        <div className="mx-auto max-w-11/12">
          <h1 className="text-center text-5xl font-medium tracking-tight text-[#941c1e] sm:text-7xl lg:text-left lg:text-8xl">
            menu
          </h1>
          <p className="mt-4 text-center text-zinc-700 lg:text-left">
            Explore drinks and bowls curated for the Bizberry vibe.
          </p>
          <MenuCategorySection enablePagination={true} itemsPerPage={18} enableSearch={true} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
