import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/support", label: "Support" },
];

export function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.25)]">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <a className="text-2xl font-bold italic tracking-tight uppercase">
              <span className="text-white">GLISTIC</span>
              <span className="text-purple-500">.WORKS</span>
            </a>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                    location === link.href
                      ? "text-purple-400"
                      : "text-white/70 hover:text-purple-400"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}

            {/* HIRE BUTTON */}
            <Link href="/contact">
              <a className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:scale-110 hover:shadow-[0_0_35px_rgba(236,72,153,0.9)] transition-all duration-300 ease-in-out">
                Hire Me
              </a>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* LEFT SLIDE MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black z-50 transform transition-transform duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 h-20 border-b border-purple-500/20">
          <span className="text-xl font-bold text-purple-400">
            Menu
          </span>
          <button onClick={() => setOpen(false)}>
            <X size={24} className="text-white" />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                onClick={() => setOpen(false)}
                className="text-white text-lg font-semibold hover:text-purple-400 transition-all"
              >
                {link.label}
              </a>
            </Link>
          ))}

          <Link href="/contact">
            <a
              onClick={() => setOpen(false)}
              className="mt-4 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-center shadow-[0_0_20px_rgba(236,72,153,0.6)]"
            >
              Hire Me
            </a>
          </Link>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}
    </>
  );
}
