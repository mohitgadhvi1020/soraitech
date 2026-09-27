import Link from "next/link";
import { CONTACT_EMAIL, services } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink font-grotesk text-[#A9B8BE]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div className="max-w-sm">
          <p className="text-xl font-semibold tracking-[-0.02em] text-paper">Soraaitech</p>
          <p className="mt-3 leading-relaxed">
            AI consulting for growing businesses. We find where AI saves you time and money, then make it happen.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-5 inline-block text-paper underline underline-offset-4">
            {CONTACT_EMAIL}
          </a>
          <p className="mt-2">Rajkot and Bengaluru, India</p>
        </div>
        <nav aria-label="Services">
          <p className="mb-4 text-sm text-paper">Services</p>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={`/#services`} className="hover:text-paper">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <p className="mb-4 text-sm text-paper">Company</p>
          <ul className="space-y-2.5">
            <li><Link href="/about" className="hover:text-paper">About</Link></li>
            <li><Link href="/blog" className="hover:text-paper">Blog</Link></li>
            <li><Link href="/careers" className="hover:text-paper">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-paper">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-white/10 px-5 py-6 text-sm md:flex-row md:justify-between md:px-8">
        <p>© {year} Soraaitech</p>
        <p className="flex gap-6">
          <Link href="/privacy" className="hover:text-paper">Privacy</Link>
          <Link href="/terms" className="hover:text-paper">Terms</Link>
        </p>
      </div>
    </footer>
  );
}
