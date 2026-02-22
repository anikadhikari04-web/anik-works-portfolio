import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Import images
import img1 from "@assets/done_1771734894662.jpg";
import img2 from "@assets/fire_ball_(1)_1771734894663.jpg";
import img3 from "@assets/justt_reayy_1771734894663.jpg";
import img4 from "@assets/One_Block_3_1771734894673.jpg";
import img5 from "@assets/SHADOW_OF_THE_TOMB_RAIDER_1_1771734894674.jpg";
import img6 from "@assets/Snapshot_8_1771734894674.JPG";
import img7 from "@assets/squid_game_-_Copy_1771734894675.jpg";
import img8 from "@assets/tomb_raider_2_1771734894683.jpg";
import img9 from "@assets/Untitlellkd-2_1771734894684.png";
import img10 from "@assets/Screenshot_(251)_1771734811131.png";
import img11 from "@assets/Screenshot_(252)_1771734811132.png";

type Project = {
  id: number;
  image?: string;
  videoUrl?: string;
  title: string;
  category: "editing" | "thumbnail" | "web";
};

const projects: Project[] = [
  { id: 1, image: img1, title: "Mission Complete", category: "thumbnail" },
  { id: 2, image: img2, title: "Fireball Effect", category: "editing" },
  { id: 3, image: img3, title: "Just Ready", category: "thumbnail" },
  { id: 4, image: img4, title: "One Block Challenge", category: "thumbnail" },
  { id: 5, image: img5, title: "Shadow of Tomb Raider", category: "thumbnail" },
  { id: 6, image: img6, title: "Cinematic Snapshot", category: "editing" },
  { id: 7, image: img7, title: "Squid Game Special", category: "thumbnail" },
  { id: 8, image: img8, title: "Tomb Raider Legacy", category: "thumbnail" },
  { id: 9, image: img9, title: "Video Editing", category: "web" },
  { id: 10, image: img10, title: "Web Dashboard UI", category: "web" },
  { id: 11, image: img11, title: "Admin Panel Design", category: "web" },
  // YouTube Videos
  { id: 101, videoUrl: "https://www.youtube.com/embed/Uem1zUKncuE", title: "Premium Edit 1", category: "editing" },
  { id: 102, videoUrl: "https://www.youtube.com/embed/8lO_GYI8K4o", title: "Premium Edit 2", category: "editing" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">My <span className="text-gradient">Portfolio</span></h1>
          <p className="text-muted-foreground text-lg">
            A showcase of my recent work in video editing, graphic design, and web development. Each project represents a unique challenge and a creative solution.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12" onValueChange={setFilter}>
          <div className="flex justify-center">
            <TabsList className="bg-secondary/50 p-1 rounded-full border border-white/5">
              <TabsTrigger value="all" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">All Work</TabsTrigger>
              <TabsTrigger value="editing" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">Video Editing</TabsTrigger>
              <TabsTrigger value="thumbnail" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">Thumbnails</TabsTrigger>
              <TabsTrigger value="web" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">Web Design</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-card border border-white/10 shadow-xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,43,226,0.2)]"
              >
                <div className="aspect-video overflow-hidden bg-black">
                  {project.videoUrl ? (
                    <iframe
                      src={project.videoUrl}
                      className="w-full h-full border-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                </div>
                
                <div className="p-6">
                  <Badge className="w-fit mb-3 bg-primary/20 text-primary hover:bg-primary/30 border-primary/20">
                    {project.category === "web" ? "Web Design" : project.category === "editing" ? "Video Editing" : "Thumbnail"}
                  </Badge>
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No projects found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
