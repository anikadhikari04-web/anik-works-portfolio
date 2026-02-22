import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Film, Scissors, Wand2, Music } from "lucide-react";

export default function Editing() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Professional <span className="text-gradient">Video Editing</span></h1>
          <p className="text-muted-foreground text-lg">
            Transforming your raw footage into engaging stories. I specialize in dynamic editing styles tailored for YouTube creators, gamers, and businesses.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="space-y-8">
            <FeatureItem 
              icon={<Scissors className="w-6 h-6 text-primary" />}
              title="Precise Cutting & Pacing"
              description="Removing dead air, stutters, and mistakes to keep the viewer engaged from start to finish. Perfect pacing is key to retention."
            />
            <FeatureItem 
              icon={<Wand2 className="w-6 h-6 text-primary" />}
              title="Visual Effects & Motion Graphics"
              description="Adding professional transitions, lower thirds, text animations, and special effects to increase production value."
            />
            <FeatureItem 
              icon={<Music className="w-6 h-6 text-primary" />}
              title="Sound Design & Mixing"
              description="Selecting the right copyright-free music and adding sound effects (SFX) to emphasize moments and evoke emotion."
            />
            <FeatureItem 
              icon={<Film className="w-6 h-6 text-primary" />}
              title="Color Grading"
              description="Enhancing the look of your footage with professional color correction and grading to achieve a cinematic or stylized look."
            />
          </div>
          
          <div className="bg-card border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            <h3 className="text-2xl font-bold mb-6 relative z-10">Ready to level up your content?</h3>
            <p className="text-muted-foreground mb-8 relative z-10">
              Stop wasting hours editing. Let me handle the technical side so you can focus on creating.
            </p>
            <div className="flex flex-col w-full gap-4 relative z-10">
              <a href="mailto:glisticgamerofficial@gmail.com" className="w-full">
                <Button variant="outline" className="w-full h-12 text-lg">
                  Email Me
                </Button>
              </a>
              <a href="tel:+919434190516" className="w-full">
                <Button variant="outline" className="w-full h-12 text-lg">
                  Call Now
                </Button>
              </a>
              <Link href="/contact" className="w-full">
                <Button variant="glow" className="w-full h-12 text-lg">
                  Start Project <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex gap-4 p-6 rounded-xl bg-secondary/20 border border-white/5 hover:bg-secondary/40 transition-colors">
      <div className="bg-primary/10 p-3 rounded-lg h-fit">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
