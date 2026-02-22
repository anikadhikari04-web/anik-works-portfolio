import { Link } from "wouter";
import { Youtube, Instagram, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-heading font-bold tracking-tighter mb-4 block">
              ANIK<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional video editing, thumbnail design, and web development services tailored to elevate your brand.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Me</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/editing" className="hover:text-primary transition-colors">Video Editing</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Thumbnail Design</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/support" className="hover:text-primary transition-colors">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:glisticgamerofficial@gmail.com" className="hover:text-primary transition-colors">glisticgamerofficial@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919434190516" className="hover:text-primary transition-colors">+91 9434190516</a>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.youtube.com/@GlisticGamer" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 group">
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Anik Adhikari. All rights reserved.</p>
          <p>Designed & Built by Anik Adhikari</p>
        </div>
      </div>
    </footer>
  );
}
