```tsx
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Play, Edit, Monitor } from "lucide-react";

// Portfolio images
import project1 from "@assets/squid_game_-_Copy_1771734894675.jpg";
import project2 from "@assets/fire_ball_(1)_1771734894663.jpg";
import project3 from "@assets/justt_reayy_1771734894663.jpg";
import project4 from "@assets/One_Block_3_1771734894673.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f0f1a] text-white font-sans">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">

        <div className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[150px] rounded-full"></div>

        <div className="container relative z-10 flex flex-col items-center text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase italic"
          >
            GLISTIC{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
              WORKS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mb-12"
          >
            Professional Video Editing, Thumbnail Design & Modern Website Building.
          </motion.p>

          <div className="flex gap-6 flex-wrap justify-center">

            <Link href="/contact">
              <a className="btn-premium py-4 px-10 text-lg uppercase flex items-center gap-2">
                Hire Me
                <ArrowRight size={18}/>
              </a>
            </Link>

            <Link href="/portfolio">
              <a className="px-10 py-4 rounded-xl border border-white/20 hover:bg-white/10">
                View Portfolio
              </a>
            </Link>

          </div>

        </div>

      </section>



      {/* SERVICES */}

      <section className="py-24 px-4">

        <div className="container mx-auto grid md:grid-cols-3 gap-8">

          <ServiceCard
            icon={<Play className="w-8 h-8 text-purple-400"/>}
            title="Video Editing"
            description="Cinematic edits and engaging storytelling for creators."
          />

          <ServiceCard
            icon={<Edit className="w-8 h-8 text-purple-400"/>}
            title="Thumbnail Design"
            description="High CTR thumbnails designed to attract viewers."
          />

          <ServiceCard
            icon={<Monitor className="w-8 h-8 text-purple-400"/>}
            title="Website Building"
            description="Modern responsive websites built with the latest technologies."
          />

        </div>

      </section>



      {/* SCROLL TEXT */}

      <section className="py-24 overflow-hidden">

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[80px] font-black text-white/5 whitespace-nowrap"
        >
          VIDEO EDITING • THUMBNAIL DESIGN • WEBSITE BUILDING • VIDEO EDITING • THUMBNAIL DESIGN •
        </motion.div>

      </section>



      {/* PORTFOLIO */}

      <section className="py-24 px-4 bg-black/20">

        <div className="container mx-auto">

          <h2 className="text-4xl md:text-6xl font-black mb-16">
            Latest Work
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[project1, project2, project3, project4].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="rounded-xl overflow-hidden border border-white/10"
              >
                <img
                  src={img}
                  alt="project"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}

          </div>

        </div>

      </section>



      {/* VIDEO SECTION */}

      <section className="py-24 px-4">

        <div className="container mx-auto">

          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center">
            Latest Video
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/GzhQgFYSjmU"
              title="video"
            />

            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/GzhQgFYSjmU"
              title="video"
            />

          </div>

        </div>

      </section>



      {/* CTA */}

      <section className="py-32 text-center">

        <motion.h2
          initial={{ opacity:0, scale:0.9 }}
          whileInView={{ opacity:1, scale:1 }}
          transition={{ duration:0.8 }}
          className="text-5xl md:text-7xl font-black mb-10"
        >
          Let's Build Something Amazing
        </motion.h2>

        <Link href="/contact">
          <a className="btn-premium px-12 py-5 text-xl">
            Start Project
          </a>
        </Link>

      </section>

    </div>
  );
}



function ServiceCard({ icon, title, description }: any) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-10 rounded-2xl bg-[#1a1a2e] border border-white/10 flex flex-col"
    >

      <div className="mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-white/60 mb-8 flex-1">
        {description}
      </p>

      <Link href="/contact">
        <a className="btn-premium px-6 py-2 text-sm text-center">
          Contact to Buy
        </a>
      </Link>

    </motion.div>
  );
}
```
