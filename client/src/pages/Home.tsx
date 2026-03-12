import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

import project1 from "@assets/squid_game_-_Copy_1771734894675.jpg";
import project2 from "@assets/fire_ball_(1)_1771734894663.jpg";
import project3 from "@assets/justt_reayy_1771734894663.jpg";
import project4 from "@assets/One_Block_3_1771734894673.jpg";

export default function Home() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start","end end"]
  });

  const heroScale = useTransform(scrollYProgress,[0,0.3],[1,0.8]);
  const heroOpacity = useTransform(scrollYProgress,[0,0.3],[1,0]);

  return (
    <div ref={ref} className="bg-[#0a0a14] text-white overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center relative px-6">

        {/* glowing background */}
        <div className="absolute w-[900px] h-[900px] bg-purple-600/20 blur-[200px] rounded-full"/>

        <motion.div
        style={{scale:heroScale,opacity:heroOpacity}}
        className="text-center z-10"
        >

          <h1 className="text-6xl md:text-9xl font-black uppercase italic leading-none">

            <span className="block">GLISTIC</span>

            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text">
            WORKS
            </span>

          </h1>

          <p className="mt-8 text-lg text-white/60 max-w-2xl mx-auto">
          Creative studio for Video Editing, Thumbnails and Modern Websites.
          </p>

          <div className="mt-10 flex gap-6 justify-center">

            <Link href="/portfolio">
              <a className="btn-premium px-10 py-4 flex items-center gap-2">
                View Work
                <ArrowRight size={18}/>
              </a>
            </Link>

            <Link href="/contact">
              <a className="px-10 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition">
                Hire Me
              </a>
            </Link>

          </div>

        </motion.div>

      </section>


      {/* BIG SCROLL TEXT */}
      <section className="py-40 px-6 text-center">

        <motion.h2
        initial={{opacity:0,y:80}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        className="text-5xl md:text-7xl font-bold leading-tight"
        >
        I Build <span className="text-purple-400">Modern Digital Experiences</span>
        That Help Creators Grow Faster.
        </motion.h2>

      </section>


      {/* SERVICES */}
      <section className="py-32 px-6">

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

          <Service
          title="Video Editing"
          desc="Cinematic edits, viral pacing and professional storytelling."
          />

          <Service
          title="Thumbnail Design"
          desc="High click-through thumbnails built with YouTube psychology."
          />

          <Service
          title="Website Building"
          desc="High-performance modern websites built with React."
          />

        </div>

      </section>


      {/* PORTFOLIO */}
      <section className="py-40 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl md:text-7xl font-black mb-20">
          Selected Work
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {[project1,project2,project3,project4].map((img,i)=>(
              
              <motion.div
              key={i}
              whileHover={{scale:1.08,rotateY:8}}
              transition={{type:"spring",stiffness:200}}
              className="rounded-2xl overflow-hidden border border-white/10"
              >

                <img src={img} className="w-full h-full object-cover"/>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* SCROLL STATEMENT */}
      <section className="py-40 text-center">

        <motion.h2
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        className="text-6xl md:text-8xl font-black"
        >

        LET'S BUILD  
        <br/>
        SOMETHING  
        <span className="text-purple-500">EPIC</span>

        </motion.h2>

      </section>

    </div>
  );
}


function Service({title,desc}:{title:string,desc:string}){

  return(

    <motion.div
    whileHover={{y:-15,rotateX:6}}
    className="p-12 bg-[#141425] rounded-[30px] border border-white/10"
    >

      <h3 className="text-3xl font-bold mb-6">
      {title}
      </h3>

      <p className="text-white/60">
      {desc}
      </p>

    </motion.div>

  )

}
