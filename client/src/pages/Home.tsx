import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Play, Edit, Monitor } from "lucide-react";
import { useRef } from "react";

import project1 from "@assets/squid_game_-_Copy_1771734894675.jpg";
import project2 from "@assets/fire_ball_(1)_1771734894663.jpg";
import project3 from "@assets/justt_reayy_1771734894663.jpg";
import project4 from "@assets/One_Block_3_1771734894673.jpg";

export default function Home() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div ref={ref} className="flex flex-col min-h-screen bg-[#0f0f1a] text-white font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">

        {/* animated glow background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[900px] h-[900px] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-violet-500/20 blur-[160px] rounded-full"
        />

        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="container relative z-10 text-center"
        >

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black tracking-tight uppercase italic mb-8"
          >
            <span className="text-white">I AM </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
              ANIK ADHIKARI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12"
          >
            Professional Video Editor, Thumbnail Designer & Website Builder.
            I transform ideas into stunning digital reality.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            <Link href="/contact">
              <a className="btn-premium px-10 py-4 text-lg uppercase tracking-wider group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
              </a>
            </Link>

            <Link href="/portfolio">
              <a className="px-10 py-4 border border-white/20 rounded-xl bg-white/5 hover:bg-white/10 transition">
                View Portfolio
              </a>
            </Link>

          </div>
        </motion.div>
      </section>


      {/* SERVICES */}
      <section className="py-32 px-4 relative">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10"/>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          <ServiceCard
            icon={<Play className="w-8 h-8 text-purple-400"/>}
            title="Video Editing"
            description="Cinematic cuts, engaging pacing and professional color grading."
            buttonText="Contact for Editing"
            buttonLink="/contact"
          />

          <ServiceCard
            icon={<Edit className="w-8 h-8 text-purple-400"/>}
            title="Thumbnail Design"
            description="High CTR thumbnails built using YouTube psychology."
            buttonText="Contact for Thumbnails"
            buttonLink="/contact"
          />

          <ServiceCard
            icon={<Monitor className="w-8 h-8 text-purple-400"/>}
            title="Website Building"
            description="Modern responsive websites built with cutting edge technologies."
            buttonText="View Website Pricing"
            buttonLink="/pricing"
          />

        </div>
      </section>


      {/* PORTFOLIO */}
      <section className="py-32 px-4">

        <div className="container mx-auto">

          <div className="flex justify-between items-end mb-14">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic">
              Latest Work
            </h2>

            <Link href="/portfolio">
              <a className="flex items-center gap-2 text-white/70 hover:text-white transition">
                All Projects
                <ArrowRight size={18}/>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[project1, project2, project3, project4].map((img, i) => (

              <motion.div
                key={i}
                whileHover={{
                  rotateX: 8,
                  rotateY: -8,
                  scale: 1.05
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative rounded-2xl overflow-hidden border border-white/10 group perspective"
              >

                <img
                  src={img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                  <Link href="/portfolio">
                    <a className="px-6 py-2 rounded-full bg-white text-black font-bold text-sm">
                      View Project
                    </a>
                  </Link>

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
      whileHover={{
        y: -12,
        rotateX: 6,
        rotateY: -6
      }}
      transition={{ type: "spring", stiffness: 200 }}
      className="p-10 rounded-[28px] bg-[#1a1a2e] border border-white/5 hover:border-purple-400/40 transition relative overflow-hidden flex flex-col"
    >

      <div className="absolute w-40 h-40 bg-purple-500/10 blur-3xl rounded-full top-0 right-0"/>

      <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-8">
        {icon}
      </div>

      <h3 className="text-2xl font-black uppercase italic mb-4">
        {title}
      </h3>

      <p className="text-white/60 mb-8 flex-1">
        {description}
      </p>

      <Link href={buttonLink}>
        <a className="btn-premium px-6 py-2 text-sm uppercase tracking-widest text-center">
          {buttonText}
        </a>
      </Link>

    </motion.div>
  );
}
