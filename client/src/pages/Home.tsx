import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Edit, Monitor } from "lucide-react";

// Portfolio images
import project1 from "@assets/squid_game_-_Copy_1771734894675.jpg"; // ✅ Squid Game Special
import project2 from "@assets/fire_ball_(1)_1771734894663.jpg";
import project3 from "@assets/justt_reayy_1771734894663.jpg";
import project4 from "@assets/One_Block_3_1771734894673.jpg";
import profileImg from "@/assets/assetsabout.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full z-0" />
        
        <div className="container relative z-10 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-primary/40 blur-2xl z-0 scale-125" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_rgba(138,43,226,0.4)] relative z-10"
            >
              <img src={profileImg} alt="Anik Adhikari" className="w-full h-full object-cover relative z-0" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md mb-8"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-white/70">
              Available for Hire
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 flex flex-wrap justify-center gap-x-4 uppercase italic"
          >
            <span className="text-white">I AM</span>
            <span className="text-gradient">ANIK ADHIKARI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mb-12 font-medium leading-relaxed px-4"
          >
            Professional Video Editor, Thumbnail Designer & Website Builder. 
            I transform ideas into stunning digital reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto px-4 sm:px-0"
          >
            <Link href="/contact">
              <a className="btn-premium py-4 px-10 text-lg uppercase tracking-wider group w-full sm:w-auto text-center">
                Get Started 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>

            <Link href="/portfolio">
              <a className="relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-lg uppercase tracking-wider w-full sm:w-auto text-center">
                View Portfolio
              </a>
            </Link>
          </motion.div>
        </div>

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
              buttonText="Contact for Website"
              buttonLink="/contact"
            />
          </div>
        </div>
      </section>

      {/* My Skills Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-black/40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-[#8A2BE2]/40 blur-[150px] rounded-full z-0 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/30 blur-[150px] rounded-full z-0 pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-[#8A2BE2] mx-auto rounded-full" />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Picture Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3 lg:sticky lg:top-24"
            >
              <div className="relative group mx-auto max-w-[280px] sm:max-w-sm lg:max-w-none">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#8A2BE2]/40 to-blue-500/40 rounded-[40px] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <div className="aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 bg-card p-2 shadow-2xl relative z-10">
                   <div className="w-full h-full rounded-[24px] overflow-hidden">
                      <img
                        src={profileImg}
                        alt="Anik Adhikari"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Details */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
               <SkillCategory title="Frontend Web Development" items={["HTML5", "CSS3", "Responsive Web Design", "Landing Page Development", "Portfolio Website Development", "Business Website Development", "UI Layout Design", "Website Deployment", "Vercel Hosting"]} delay={0.1} />
               <SkillCategory title="AI & Automation" subtitle="AI Tools" items={["AI Prompt Engineering", "AI-Assisted Content Creation", "AI-Assisted Web Development", "AI-Assisted Design Workflow", "AI Research & Productivity Tools"]} delay={0.2} />
               <SkillCategory title="Creative Skills" subtitle="Video Editing" items={["Gaming Video Editing", "Vlog Editing", "Trading Content Editing", "Short-form Content Editing", "Content Structuring"]} delay={0.3} />
               <SkillCategory title="Creative Skills" subtitle="Graphic Design" items={["Thumbnail Design", "Social Media Graphics", "Banner Design", "Promotional Creatives"]} delay={0.4} />
               <SkillCategory title="Community Management" subtitle="Minecraft" items={["Minecraft Server Setup", "Minecraft Server Configuration", "Minecraft Server Review & Testing", "Community Management"]} delay={0.5} />
               <SkillCategory title="Community Management" subtitle="Discord" items={["Discord Server Setup", "Discord Server Configuration", "Community Moderation", "Role & Permission Management"]} delay={0.6} />
               <SkillCategory title="Marketing & Business" subtitle="Digital Marketing" items={["Social Media Management", "Content Strategy", "Personal Branding", "Client Communication", "Freelance Outreach"]} delay={0.7} />
               <SkillCategory title="Technical Tools" subtitle="Development Tools" items={["GitHub", "Vercel", "AI Development Platforms", "Website Builders", "Browser Developer Tools"]} delay={0.8} />
               <SkillCategory title="Soft Skills" subtitle="Professional Skills" items={["Self-Learning", "Problem Solving", "Research", "Communication", "Client Handling", "Adaptability"]} delay={0.9} />
               <SkillCategory title="Emerging Skills" subtitle="Still Growing" items={["React", "Spring Boot", "Trading Platform Analysis", "UI/UX Design", "Full-Stack Development", "SEO", "Copywriting"]} delay={1.0} />
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 px-4 bg-black/40">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-12 text-center">
            My <span className="text-gradient">Resume</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Image */}
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-xl -z-10" />
              <img
                src="/resume/resume.png"
                alt="Resume"
                className="w-full rounded-xl border border-primary/30 shadow-[0_0_30px_rgba(138,43,226,0.3)] pointer-events-none select-none"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <a 
                href="/resume/resume.png" 
                download="Anik_Adhikari_Resume.png"
                className="btn-premium w-full text-center py-3 block font-bold"
              >
                Download Resume PNG
              </a>
              <a 
                href="/resume/resume.jpg" 
                download="Anik_Adhikari_Resume.jpg"
                className="btn-premium w-full text-center py-3 block font-bold"
              >
                Download Resume JPG
              </a>
              <a 
                href="/resume/resume.pdf" 
                download="Anik_Adhikari_Resume.pdf"
                className="btn-premium w-full text-center py-3 block font-bold"
              >
                Download Resume PDF
              </a>
              <a 
                href="/resume/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg transition-all border border-white/10 hover:border-primary/50 text-center block"
              >
                View In Chrome
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Know More About Me Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-8">
            Know More About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg font-medium leading-relaxed">
            Discover my journey, expertise, and the passion that drives my creative work. From video editing to building modern web experiences, see what makes me stand out.
          </p>
          <div className="flex justify-center">
            <Link href="/about">
              <a className="btn-premium py-4 px-12 text-lg uppercase tracking-wider font-bold">
                About Me
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Quick View */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-4">
                Latest Work
              </h2>
              <div className="w-20 h-1 bg-[#8A2BE2]" />
            </div>
            <Link href="/portfolio">
              <a className="text-white/60 hover:text-white transition-colors p-0 text-lg font-bold group flex items-center">
                All Projects 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                <img 
                  src={img} 
                  alt={`Project ${i+1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                  <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform">
                    <p className="text-[#8A2BE2] font-bold text-xs uppercase tracking-widest mb-2">
                      Project {i+1}
                    </p>
                    <h3 className="text-xl font-bold mb-4">
                      Creative Design
                    </h3>
                    <Link href="/portfolio">
                      <a className="inline-flex px-6 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90">
                        Details
                      </a>
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

function ServiceCard({ icon, title, description, buttonText, buttonLink }: { icon: React.ReactNode, title: string, description: string, buttonText: string, buttonLink: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="p-10 rounded-[32px] bg-card border border-white/5 hover:border-[#8A2BE2]/30 transition-all duration-300 group relative overflow-hidden flex flex-col"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#8A2BE2]/5 blur-3xl rounded-full" />
      <div className="w-14 h-14 rounded-2xl bg-[#8A2BE2]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight">
        {title}
      </h3>
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

function SkillCategory({ title, subtitle, items, delay }: { title: string, subtitle?: string, items: string[], delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group p-6 rounded-[24px] overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:border-[#8A2BE2]/50 hover:shadow-[0_0_40px_rgba(138,43,226,0.6)] hover:-translate-y-1"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#8A2BE2]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <h3 className="text-xl font-black text-white mb-1 relative z-10 drop-shadow-md">{title}</h3>
      {subtitle && <p className="text-[#8A2BE2] text-sm font-bold mb-4 uppercase tracking-wider relative z-10 drop-shadow-[0_0_8px_rgba(138,43,226,0.5)]">{subtitle}</p>}
      {!subtitle && <div className="h-4"></div>}
      <div className="flex flex-wrap gap-2 mt-2 relative z-10">
        {items.map((item, idx) => (
          <span key={idx} className="bg-black/80 border border-white/10 rounded-full px-3 py-1.5 text-xs text-white hover:bg-[#8A2BE2]/60 hover:border-[#8A2BE2]/80 hover:shadow-[0_0_20px_rgba(138,43,226,0.8)] transition-all duration-300 cursor-default font-medium">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
