import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4/5">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Map Area */}
          <div className="h-[400px] w-full bg-[#e3ded8] sm:h-[500px] lg:col-span-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15663.766347318859!2d76.18342415177995!3d10.80735749442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c8052ab99dc1%3A0xe5495cce28014022!2sPattambi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714488358488!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Details Area */}
          <div className="flex flex-col justify-center lg:col-span-2 lg:pl-8">
            <h2 className="text-5xl font-medium tracking-tight text-zinc-900 sm:text-7xl lg:text-8xl">
              contacts
            </h2>
            
            <p className="mt-8 text-lg font-medium text-zinc-800 sm:text-xl md:max-w-sm">
              served daily from 10 am to 10:30 pm at pattambi, kerala
            </p>

            <div className="mt-8 flex gap-5 text-zinc-800">
              <a href="#" className="transition hover:text-[#941c1e]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="transition hover:text-[#941c1e]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="transition hover:text-[#941c1e]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
            </div>

            <div className="mt-10 flex flex-col items-start gap-4 font-mono text-sm tracking-wider uppercase text-zinc-900">
              <a
                href="tel:+919000000000"
                className="border-b border-dashed border-zinc-500 pb-0.5 transition hover:border-[#941c1e] hover:text-[#941c1e]"
              >
                +91 90000 00000
              </a>
              <a
                href="mailto:hello@bizberry.com"
                className="border-b border-dashed border-zinc-500 pb-0.5 transition hover:border-[#941c1e] hover:text-[#941c1e]"
              >
                HELLO@BIZBERRY.COM
              </a>
            </div>
            
            <div className="mt-14">
               <Link href="/menu" className="font-mono text-sm uppercase text-[#941c1e] transition hover:opacity-75">
                 MENU
               </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
