import GalleryGrid from "../components/GalleryGrid";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

const galleryItems = [
  {
    title: "Cafe Evenings",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Crafted Coffee",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Dessert Spread",
    image:
      "https://images.unsplash.com/photo-1559622214-74f083a90d90?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Lounge Corner",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Burger Nights",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Work + Chill",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f0eeeb] px-4 pt-[9.5rem] pb-16 sm:px-6 sm:pt-44 lg:px-8">
        <div className="mx-auto max-w-11/12">
          <h1 className="text-center text-5xl font-medium tracking-tight text-[#941c1e] sm:text-7xl lg:text-left lg:text-8xl">
            gallery
          </h1>
          <p className="mt-4 text-center text-zinc-700 lg:text-left">A look inside Bizberry moments.</p>
          <div className="mt-12">
            <GalleryGrid items={galleryItems} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
