import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ExternalLink } from "lucide-react";
import profileImg from "@assets/about_1771741090985.jpg";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          
          {/* LEFT SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_20px_rgba(138,43,226,0.3)] relative z-10">
              <img 
                src={profileImg} 
                alt="Anik Adhikari" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* 🔹 WEBSITE LINK BELOW PHOTO */}
            <div className="mt-6 flex justify-center">
              <a
                href="https://sites.google.com/view/glisticgamer/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary/40 border border-primary/30 hover:border-primary hover:shadow-[0_0_15px_rgba(138,43,226,0.4)] transition-all duration-300 text-sm font-medium"
              >
                Visit My Gaming Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl -z-10 blur-xl" />
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h1>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              My name is <span className="text-white font-bold">ANIK ADHIKARI</span>. I have a gaming channel on YouTube. I create modern, high-quality digital experiences for creators and businesses.
            </p>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I can help you in: <span className="text-primary font-bold">Video Editing, Thumbnail Designing, and Website Building</span>. My approach combines technical precision with artistic flair.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {["Video Editing", "Thumbnail Designing", "Website Building", "Fast Turnaround", "Creative Direction", "24/7 Support"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <a className="btn-premium">Work With Me</a>
            </Link>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-heading font-bold text-center mb-16">My Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard 
              title="Video Editing"
              description="From gaming highlights to cinematic vlogs, I create engaging video content that retains viewers. Proficient in Premiere Pro and After Effects."
              tags={["Premiere Pro", "After Effects", "Sound Design", "Color Grading"]}
            />
            <SkillCard 
              title="Thumbnail Design"
              description="I design thumbnails that stop the scroll. Understanding YouTube psychology and visual hierarchy to maximize Click-Through Rate."
              tags={["Photoshop", "Blender", "Visual Hierarchy", "Color Theory"]}
            />
            <SkillCard 
              title="Web Development"
              description="Building modern, responsive websites that look great on any device. Focusing on performance, SEO, and user experience."
              tags={["React", "Tailwind CSS", "TypeScript", "Responsive Design"]}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="bg-card border border-white/5 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-primary" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">3+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">50+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">100%</h3>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</h3>
              <p className="text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ title, description, tags }: { title: string, description: string, tags: string[] }) {
  return (
    <div className="bg-secondary/30 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
      <h3 className="text-2xl font-heading font-bold mb-4 text-primary">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-xs font-medium bg-white/5 px-3 py-1 rounded-full border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
