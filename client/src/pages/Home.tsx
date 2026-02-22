import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Edit, Monitor } from "lucide-react";

// Portfolio images
import project1 from "@assets/done_1771734894662.jpg";
import project2 from "@assets/fire_ball_(1)_1771734894663.jpg";
import project3 from "@assets/justt_reayy_1771734894663.jpg";
import project4 from "@assets/One_Block_3_1771734894673.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f0f1a] text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full z-0" />
        
        <div className="container relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-white/70">Available for Hire</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-8 flex flex-wrap justify-center gap-x-4 uppercase italic"
          >
            <span className="text-white">I AM</span>
            <span className="text-gradient">ANIK ADHIKARI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-3xl mb-12 font-medium leading-relaxed"
          >
            Professional Video Editor, Thumbnail Designer & Website Builder. I transform ideas into stunning digital reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <Link href="/contact">
              <a className="btn-premium py-4 px-10 text-lg uppercase tracking-wider group">
                Get Started <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
            <Link href="/portfolio">
              <a className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-lg uppercase tracking-wider">
                View Portfolio
              </a>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Play className="w-8 h-8 text-[#8A2BE2]" />}
              title="Video Editing"
              description="Cinematic cuts, engaging pacing, and professional color grading for content that stands out."
              buttonText="Contact for Editing"
              buttonLink="/contact"
            />
            <ServiceCard 
              icon={<Edit className="w-8 h-8 text-[#8A2BE2]" />}
              title="Thumbnail Design"
              description="High-CTR thumbnails that grab attention and drive clicks for your YouTube channel or brand."
              buttonText="Contact for Thumbnails"
              buttonLink="/contact"
            />
            <ServiceCard 
              icon={<Monitor className="w-8 h-8 text-[#8A2BE2]" />}
              title="Website Building"
              description="Modern, responsive, and performant websites built with the latest technologies and design trends."
              buttonText="View Website Pricing"
              buttonLink="/pricing"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Quick View */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-4">Latest Work</h2>
              <div className="w-20 h-1 bg-[#8A2BE2]" />
            </div>
            <Link href="/portfolio">
              <a className="text-white/60 hover:text-white transition-colors p-0 text-lg font-bold group flex items-center">
                All Projects <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[project1, project2, project3, project4].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-card"
              >
                <img src={img} alt={`Project ${i+1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                  <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform">
                    <p className="text-[#8A2BE2] font-bold text-xs uppercase tracking-widest mb-2">Project {i+1}</p>
                    <h3 className="text-xl font-bold mb-4">Creative Design</h3>
                    <Link href="/portfolio">
                      <a className="inline-flex px-6 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90">Details</a>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, buttonText, buttonLink }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="p-10 rounded-[32px] bg-[#1a1a2e] border border-white/5 hover:border-[#8A2BE2]/30 transition-all group relative overflow-hidden flex flex-col"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#8A2BE2]/5 blur-3xl rounded-full" />
      <div className="w-14 h-14 rounded-2xl bg-[#8A2BE2]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight">{title}</h3>
      <p className="text-white/50 leading-relaxed font-medium mb-8 flex-1">
        {description}
      </p>
      <div className="flex justify-center">
        <Link href={buttonLink}>
          <a className="btn-premium px-6 py-2 text-sm uppercase tracking-widest">
            {buttonText}
          </a>
        </Link>
      </div>
    </motion.div>
  );
}
