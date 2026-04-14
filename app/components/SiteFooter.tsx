export default function SiteFooter() {
  return (
    <footer className="bg-[#f0eeeb] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-11/12 flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <div className="flex-1 text-center sm:text-left">
          © {new Date().getFullYear()} Bizberry Cafe
        </div>
        
        <div className="flex-1 text-center text-xs uppercase tracking-wider">
          MADE BY <span className="font-bold lowercase text-zinc-800">bizberry</span>
        </div>
        
        <div className="flex-1 text-center sm:text-right">
          Built in Next.js
        </div>
      </div>
    </footer>
  );
}
