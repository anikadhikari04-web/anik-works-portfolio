import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Lock, RotateCcw, ArrowDown, ExternalLink } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // Browser Window & Real Webpage Image
  const browserWindowRef = useRef<HTMLDivElement>(null);
  const webpageImgRef = useRef<HTMLImageElement>(null);
  const dpIndicatorRef = useRef<HTMLDivElement>(null);

  // Hero Animated Elements
  const heroPortraitRef = useRef<HTMLDivElement>(null);
  const heroEmblemRef = useRef<HTMLDivElement>(null);

  // Phase Captions
  const caption1Ref = useRef<HTMLDivElement>(null);
  const caption2Ref = useRef<HTMLDivElement>(null);
  const caption3Ref = useRef<HTMLDivElement>(null);
  const caption4Ref = useRef<HTMLDivElement>(null);

  // Phase 4 Yellow Glowing Link
  const linkContainerRef = useRef<HTMLDivElement>(null);

  // Ambient Glow & Progress Bar
  const ambientGlowRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Respect prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(browserWindowRef.current, { display: "none" });
        gsap.set(heroPortraitRef.current, { x: -110, scale: 0.9, opacity: 1 });
        gsap.set(heroEmblemRef.current, { x: 110, scale: 0.9, opacity: 1 });
        gsap.set(caption4Ref.current, { autoAlpha: 1 });
        gsap.set(linkContainerRef.current, { autoAlpha: 1, pointerEvents: "auto" });
        return;
      }

      const mm = gsap.matchMedia();

      // ========================================================
      // DESKTOP & LARGE MONITORS (>= 1024px)
      // ========================================================
      mm.add("(min-width: 1024px)", () => {
        gsap.set(browserWindowRef.current, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
        });

        // Start image at top of Serververse website
        gsap.set(webpageImgRef.current, { y: 0 });

        // When image scrolls down by -370px, the entire team is in view,
        // Card 10 is completely visible with bottom border, and Card 9 avatar sits at:
        const initialDpX = 113;
        const initialDpY = 12;
        const initialDpScale = 0.16; // ~48px matching card avatar diameter

        // Highlight ring on Anik's card avatar
        gsap.set(dpIndicatorRef.current, {
          x: initialDpX,
          y: initialDpY,
          scale: 1,
          opacity: 0,
        });

        // Hero Portrait starts exactly on top of Anik's avatar in Card 9
        gsap.set(heroPortraitRef.current, {
          x: initialDpX,
          y: initialDpY,
          scale: initialDpScale,
          opacity: 0,
          zIndex: 35,
        });

        // Orange emblem hidden behind portrait
        gsap.set(heroEmblemRef.current, {
          x: 0,
          y: 0,
          scale: 0.6,
          rotation: -20,
          opacity: 0,
          zIndex: 15,
        });

        // Captions: only Caption 1 is visible
        gsap.set(caption1Ref.current, { autoAlpha: 1, y: 0 });
        gsap.set([caption2Ref.current, caption3Ref.current, caption4Ref.current], {
          autoAlpha: 0,
          y: 10,
        });

        // Glowing Link hidden initially
        gsap.set(linkContainerRef.current, {
          autoAlpha: 0,
          y: 15,
          pointerEvents: "none",
        });

        gsap.set(ambientGlowRef.current, { opacity: 0.15 });
        gsap.set(progressBarRef.current, { scaleX: 0 });

        // Master Timeline with ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=2600",
            pin: stageRef.current,
            scrub: 1,
            anticipatePin: 0,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        });

        // Progress bar scrub
        tl.to(
          progressBarRef.current,
          { scaleX: 1, ease: "none", transformOrigin: "left center" },
          0
        );

        // ----------------------------------------------------
        // PHASE 1: Real webpage naturally scrolls down (0 -> 0.28)
        // Scrolls all the way to reveal Card 10 and bottom padding
        // ----------------------------------------------------
        tl.addLabel("phase1", 0);

        tl.to(
          webpageImgRef.current,
          {
            y: -370, // Complete scroll: shows full cards including Row 4
            ease: "power1.inOut",
            duration: 0.28,
          },
          "phase1"
        );

        // Indicator ring pulses around Anik's avatar as it arrives in view
        tl.to(
          dpIndicatorRef.current,
          {
            opacity: 1,
            duration: 0.08,
            ease: "power2.out",
          },
          "phase1+=0.2"
        );

        // ---------------------------------------------------------------------
        // PHASE 2: DP separates/lifts off from the card -> centers (0.28 -> 0.54)
        // ---------------------------------------------------------------------
        tl.addLabel("phase2", 0.28);

        // Fade in hero DP at exact card coordinates
        tl.to(
          heroPortraitRef.current,
          {
            opacity: 1,
            duration: 0.04,
            ease: "none",
          },
          "phase2"
        );

        // Turn off indicator ring
        tl.to(
          dpIndicatorRef.current,
          {
            opacity: 0,
            duration: 0.05,
          },
          "phase2"
        );

        // DP lifts off, scales up and glides to center stage!
        tl.to(
          heroPortraitRef.current,
          {
            x: 0,
            y: 0,
            scale: 1.15,
            ease: "power2.out",
            duration: 0.25,
          },
          "phase2+=0.02"
        );

        // Browser window scales down and fades away into background
        tl.to(
          browserWindowRef.current,
          {
            scale: 0.72,
            opacity: 0,
            y: -25,
            ease: "power2.inOut",
            duration: 0.24,
          },
          "phase2+=0.02"
        );

        // Caption 1 -> Caption 2
        tl.to(
          caption1Ref.current,
          { autoAlpha: 0, y: -10, duration: 0.08, ease: "power1.in" },
          "phase2"
        ).to(
          caption2Ref.current,
          { autoAlpha: 1, y: 0, duration: 0.12, ease: "power1.out" },
          "phase2+=0.1"
        );

        // ----------------------------------------------------
        // PHASE 3: Orange Icon reveals itself (0.54 -> 0.76)
        // ----------------------------------------------------
        tl.addLabel("phase3", 0.54);

        // Portrait shifts slightly left to reveal icon peeking behind right shoulder
        tl.to(
          heroPortraitRef.current,
          {
            x: -85,
            scale: 1.05,
            ease: "power2.inOut",
            duration: 0.22,
          },
          "phase3"
        );

        // Orange Icon emerges from behind portrait (peeking right)
        tl.to(
          heroEmblemRef.current,
          {
            x: 75,
            y: 0,
            scale: 0.95,
            rotation: 0,
            opacity: 0.95,
            ease: "power2.inOut",
            duration: 0.22,
          },
          "phase3"
        );

        // Ambient glow warms up
        tl.to(
          ambientGlowRef.current,
          {
            opacity: 0.55,
            ease: "power1.inOut",
            duration: 0.22,
          },
          "phase3"
        );

        // Caption 2 -> Caption 3
        tl.to(
          caption2Ref.current,
          { autoAlpha: 0, y: -10, duration: 0.08, ease: "power1.in" },
          "phase3"
        ).to(
          caption3Ref.current,
          { autoAlpha: 1, y: 0, duration: 0.12, ease: "power1.out" },
          "phase3+=0.1"
        );

        // ----------------------------------------------------
        // PHASE 4: Symmetrical Side-by-Side & Glowing Link (0.76 -> 1.0)
        // ----------------------------------------------------
        tl.addLabel("phase4", 0.76);

        // Portrait settles into balanced left position
        tl.to(
          heroPortraitRef.current,
          {
            x: -160,
            scale: 0.92,
            ease: "power2.out",
            duration: 0.22,
          },
          "phase4"
        );

        // Emblem settles into matching symmetrical right position
        tl.to(
          heroEmblemRef.current,
          {
            x: 160,
            scale: 0.92,
            opacity: 1,
            ease: "power2.out",
            duration: 0.22,
          },
          "phase4"
        );

        // Glowing Yellow Link appears underneath the two circles!
        tl.to(
          linkContainerRef.current,
          {
            autoAlpha: 1,
            y: 0,
            pointerEvents: "auto",
            duration: 0.18,
            ease: "power2.out",
          },
          "phase4+=0.06"
        );

        // Rich ambient aura
        tl.to(
          ambientGlowRef.current,
          {
            opacity: 0.85,
            ease: "power1.out",
            duration: 0.22,
          },
          "phase4"
        );

        // Caption 3 -> Caption 4
        tl.to(
          caption3Ref.current,
          { autoAlpha: 0, y: -10, duration: 0.08, ease: "power1.in" },
          "phase4"
        ).to(
          caption4Ref.current,
          { autoAlpha: 1, y: 0, duration: 0.12, ease: "power1.out" },
          "phase4+=0.1"
        );

        // Settle before releasing pin
        tl.to({}, { duration: 0.1 });
      });

      // ========================================================
      // TABLET SCREENS (641px - 1023px)
      // ========================================================
      mm.add("(min-width: 641px) and (max-width: 1023px)", () => {
        gsap.set(browserWindowRef.current, { scale: 0.88, opacity: 1, y: 0 });
        gsap.set(webpageImgRef.current, { y: 0 });

        const initialDpX = 88;
        const initialDpY = 10;
        const initialDpScale = 0.18;

        gsap.set(dpIndicatorRef.current, {
          x: initialDpX,
          y: initialDpY,
          opacity: 0,
        });

        gsap.set(heroPortraitRef.current, {
          x: initialDpX,
          y: initialDpY,
          scale: initialDpScale,
          opacity: 0,
          zIndex: 35,
        });

        gsap.set(heroEmblemRef.current, {
          x: 0,
          y: 0,
          scale: 0.55,
          rotation: -20,
          opacity: 0,
          zIndex: 15,
        });

        gsap.set(caption1Ref.current, { autoAlpha: 1, y: 0 });
        gsap.set([caption2Ref.current, caption3Ref.current, caption4Ref.current], {
          autoAlpha: 0,
          y: 10,
        });

        gsap.set(linkContainerRef.current, {
          autoAlpha: 0,
          y: 15,
          pointerEvents: "none",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=2400",
            pin: stageRef.current,
            scrub: 1,
            anticipatePin: 0,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        });

        tl.to(progressBarRef.current, { scaleX: 1, ease: "none" }, 0);

        // Phase 1: Webpage scroll revealing complete cards
        tl.to(webpageImgRef.current, { y: -290, duration: 0.28, ease: "power1.inOut" }, 0);
        tl.to(dpIndicatorRef.current, { opacity: 1, duration: 0.08 }, 0.2);

        // Phase 2: Separate DP and center
        tl.to(heroPortraitRef.current, { opacity: 1, duration: 0.04 }, 0.28)
          .to(dpIndicatorRef.current, { opacity: 0, duration: 0.05 }, 0.28)
          .to(
            heroPortraitRef.current,
            { x: 0, y: 0, scale: 1.05, ease: "power2.out", duration: 0.25 },
            0.3
          )
          .to(browserWindowRef.current, { scale: 0.65, opacity: 0, duration: 0.24 }, 0.3)
          .to(caption1Ref.current, { autoAlpha: 0, duration: 0.08 }, 0.28)
          .to(caption2Ref.current, { autoAlpha: 1, duration: 0.12 }, 0.38);

        // Phase 3: Icon peeks out
        tl.to(heroPortraitRef.current, { x: -65, scale: 0.95, duration: 0.22 }, 0.54)
          .to(
            heroEmblemRef.current,
            { x: 55, scale: 0.85, rotation: 0, opacity: 0.95, duration: 0.22 },
            0.54
          )
          .to(ambientGlowRef.current, { opacity: 0.55, duration: 0.22 }, 0.54)
          .to(caption2Ref.current, { autoAlpha: 0, duration: 0.08 }, 0.54)
          .to(caption3Ref.current, { autoAlpha: 1, duration: 0.12 }, 0.64);

        // Phase 4: Side-by-side & link
        tl.to(heroPortraitRef.current, { x: -115, scale: 0.85, duration: 0.22 }, 0.76)
          .to(heroEmblemRef.current, { x: 115, scale: 0.85, opacity: 1, duration: 0.22 }, 0.76)
          .to(
            linkContainerRef.current,
            { autoAlpha: 1, y: 0, pointerEvents: "auto", duration: 0.18 },
            0.82
          )
          .to(ambientGlowRef.current, { opacity: 0.85, duration: 0.22 }, 0.76)
          .to(caption3Ref.current, { autoAlpha: 0, duration: 0.08 }, 0.76)
          .to(caption4Ref.current, { autoAlpha: 1, duration: 0.12 }, 0.88);

        tl.to({}, { duration: 0.1 });
      });

      // ========================================================
      // MOBILE SCREENS (<= 640px)
      // ========================================================
      mm.add("(max-width: 640px)", () => {
        gsap.set(browserWindowRef.current, { scale: 0.88, opacity: 1, y: 0 });
        gsap.set(webpageImgRef.current, { y: 0 });

        const initialDpX = 52;
        const initialDpY = 8;
        const initialDpScale = 0.22;

        gsap.set(dpIndicatorRef.current, {
          x: initialDpX,
          y: initialDpY,
          opacity: 0,
        });

        gsap.set(heroPortraitRef.current, {
          x: initialDpX,
          y: initialDpY,
          scale: initialDpScale,
          opacity: 0,
          zIndex: 35,
        });

        gsap.set(heroEmblemRef.current, {
          x: 0,
          y: 0,
          scale: 0.45,
          opacity: 0,
          zIndex: 15,
        });

        gsap.set(caption1Ref.current, { autoAlpha: 1, y: 0 });
        gsap.set([caption2Ref.current, caption3Ref.current, caption4Ref.current], {
          autoAlpha: 0,
          y: 8,
        });

        gsap.set(linkContainerRef.current, {
          autoAlpha: 0,
          y: 10,
          pointerEvents: "none",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=2000",
            pin: stageRef.current,
            scrub: 1,
            anticipatePin: 0,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        });

        tl.to(progressBarRef.current, { scaleX: 1, ease: "none" }, 0);

        // Phase 1: Webpage scroll
        tl.to(webpageImgRef.current, { y: -190, duration: 0.28, ease: "power1.inOut" }, 0);
        tl.to(dpIndicatorRef.current, { opacity: 1, duration: 0.08 }, 0.2);

        // Phase 2: Separate DP and center
        tl.to(heroPortraitRef.current, { opacity: 1, duration: 0.04 }, 0.28)
          .to(dpIndicatorRef.current, { opacity: 0, duration: 0.05 }, 0.28)
          .to(
            heroPortraitRef.current,
            { x: 0, y: 0, scale: 0.95, ease: "power2.out", duration: 0.25 },
            0.3
          )
          .to(browserWindowRef.current, { scale: 0.6, opacity: 0, duration: 0.24 }, 0.3)
          .to(caption1Ref.current, { autoAlpha: 0, duration: 0.08 }, 0.28)
          .to(caption2Ref.current, { autoAlpha: 1, duration: 0.12 }, 0.38);

        // Phase 3: Emblem peeks out
        tl.to(heroPortraitRef.current, { x: -35, scale: 0.85, duration: 0.22 }, 0.54)
          .to(heroEmblemRef.current, { x: 32, scale: 0.78, opacity: 0.9, duration: 0.22 }, 0.54)
          .to(ambientGlowRef.current, { opacity: 0.55, duration: 0.22 }, 0.54)
          .to(caption2Ref.current, { autoAlpha: 0, duration: 0.08 }, 0.54)
          .to(caption3Ref.current, { autoAlpha: 1, duration: 0.12 }, 0.64);

        // Phase 4: Side-by-side & link on mobile
        tl.to(heroPortraitRef.current, { x: -70, scale: 0.8, duration: 0.22 }, 0.76)
          .to(heroEmblemRef.current, { x: 70, scale: 0.8, opacity: 1, duration: 0.22 }, 0.76)
          .to(
            linkContainerRef.current,
            { autoAlpha: 1, y: 0, pointerEvents: "auto", duration: 0.18 },
            0.82
          )
          .to(ambientGlowRef.current, { opacity: 0.85, duration: 0.22 }, 0.76)
          .to(caption3Ref.current, { autoAlpha: 0, duration: 0.08 }, 0.76)
          .to(caption4Ref.current, { autoAlpha: 1, duration: 0.12 }, 0.88);

        tl.to({}, { duration: 0.1 });
      });

      const handleLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", handleLoad);
      const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 300);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(refreshTimer);
        mm.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="colabs"
      className="relative z-20 w-full bg-[#08080c] text-white overflow-hidden border-t border-b border-white/5 scroll-mt-20"
      aria-label="Serververse to Glistic Works Interactive Journey"
    >
      <div id="scroll-showcase" className="absolute -top-20 opacity-0 pointer-events-none" />
      {/* Pinned Viewport Stage with safe clearance below the 80px fixed navbar */}
      <div
        ref={stageRef}
        className="h-screen w-full relative z-20 flex flex-col items-center justify-between pt-24 md:pt-28 pb-5 px-4 overflow-hidden select-none"
      >
        {/* Ambient Dark Theme Lighting */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

          {/* Deep Violet Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8A2BE2]/15 blur-[160px] rounded-full pointer-events-none" />

          {/* Dynamic Warm Orange Glow */}
          <div
            ref={ambientGlowRef}
            className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-r from-amber-500/25 to-orange-600/30 blur-[160px] rounded-full opacity-15 pointer-events-none transition-opacity duration-300"
          />
        </div>

        {/* TOP BAR: COLABS HEADING & Captions */}
        <div className="relative z-30 flex flex-col items-center text-center max-w-2xl mx-auto w-full">
          {/* SECTION HEADER: COLABS */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tight text-center drop-shadow-[0_0_35px_rgba(138,43,226,0.6)] mb-1">
            <span className="text-white">CO</span>
            <span className="text-gradient">LABS</span>
          </h2>

          {/* Storyboard Phase Captions with clean cross-fade */}
          <div className="relative h-12 sm:h-14 w-full flex items-center justify-center">
            {/* Caption 1 */}
            <div
              ref={caption1Ref}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            />

            {/* Caption 2 */}
            <div
              ref={caption2Ref}
              className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase italic tracking-tight text-white drop-shadow-md">
                ANIK <span className="text-gradient">ADHIKARI</span>
              </h3>
              <p className="text-[11px] sm:text-xs text-white/60 font-medium mt-0.5">
                Video Editor, Thumbnail Designer & Modern Web Creator
              </p>
            </div>

            {/* Caption 3 */}
            <div
              ref={caption3Ref}
              className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase italic tracking-tight text-white drop-shadow-md">
                BRAND <span className="text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">AWAKENING</span>
              </h3>
              <p className="text-[11px] sm:text-xs text-white/60 font-medium mt-0.5">
                The GLISTIC WORKS lightning emblem enters the composition
              </p>
            </div>

            {/* Caption 4 */}
            <div
              ref={caption4Ref}
              className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase italic tracking-tight text-white drop-shadow-md">
                <span className="text-white">GLISTIC</span>{" "}
                <span className="text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]">WORKS</span>
              </h3>
              <p className="text-[11px] sm:text-xs text-white/60 font-medium mt-0.5">
                United identity — Transforming visionary ideas into reality
              </p>
            </div>
          </div>
        </div>

        {/* CENTER ANIMATION STAGE CANVAS */}
        <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto my-auto min-h-[360px] sm:min-h-[440px]">
          {/* Visual Elements Container */}
          <div className="relative w-full flex items-center justify-center">
            {/* 1. REAL SERVERVERSE WEBPAGE BROWSER MOCKUP */}
            <div
              ref={browserWindowRef}
              className="w-full max-w-[680px] lg:max-w-[760px] h-[350px] sm:h-[410px] md:h-[450px] lg:h-[490px] rounded-2xl overflow-hidden border border-white/15 bg-[#000000] shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(138,43,226,0.2)] flex flex-col will-change-transform z-10 relative"
            >
              {/* Browser Chrome Header */}
              <div className="h-9 bg-[#0c0c0e] border-b border-white/10 px-4 flex items-center justify-between shrink-0 select-none z-20">
                {/* macOS Window Controls */}
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block shadow-sm" />
                </div>

                {/* URL Pill Bar */}
                <div className="flex items-center gap-2 px-3 py-0.5 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-white/60 tracking-wide max-w-xs w-full justify-center">
                  <Lock className="w-2.5 h-2.5 text-emerald-400" />
                  <span className="text-white/80">serververse.com</span>
                  <span className="text-white/40">/team</span>
                  <RotateCcw className="w-2.5 h-2.5 text-white/30 ml-1.5" />
                </div>

                {/* Window controls dummy */}
                <div className="flex items-center gap-1 opacity-30">
                  <div className="w-1 h-1 rounded-full bg-white" />
                  <div className="w-1 h-1 rounded-full bg-white" />
                  <div className="w-1 h-1 rounded-full bg-white" />
                </div>
              </div>

              {/* Inner Real Webpage Image Container with Full-Range Scroll */}
              <div className="relative flex-1 overflow-hidden bg-black">
                <img
                  ref={webpageImgRef}
                  src="/animation-assets/serververse-team.png"
                  alt="Serververse Team Webpage"
                  className="w-full h-auto object-cover object-top will-change-transform select-none pointer-events-none"
                  loading="eager"
                />
              </div>
            </div>

            {/* Glowing Target Ring on Card 9 (Anik's DP) */}
            <div
              ref={dpIndicatorRef}
              className="absolute rounded-full w-12 h-12 border-2 border-primary/90 shadow-[0_0_20px_rgba(138,43,226,0.8)] pointer-events-none z-25 opacity-0 will-change-transform"
            />

            {/* 2. HERO CIRCULAR PORTRAIT (Separates from Card 9, glides to center) */}
            <div
              ref={heroPortraitRef}
              className="absolute rounded-full aspect-square w-48 sm:w-64 md:w-72 lg:w-[320px] will-change-transform z-35"
            >
              {/* Subtle Purple Halo Aura */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#8A2BE2]/40 via-purple-600/30 to-blue-500/20 blur-xl opacity-80 pointer-events-none" />

              {/* Circular Frame matching Reference */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-[#555560] shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(138,43,226,0.35)] bg-black">
                <img
                  src="/animation-assets/portrait-circle.png"
                  alt="Anik Adhikari"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading="eager"
                />
              </div>
            </div>

            {/* 3. ORANGE LIGHTNING EMBLEM (Emerges from behind right shoulder) */}
            <div
              ref={heroEmblemRef}
              className="absolute rounded-full aspect-square w-48 sm:w-64 md:w-72 lg:w-[320px] will-change-transform z-20"
            >
              {/* Warm Amber-Orange Energy Aura */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-500/50 via-orange-500/40 to-yellow-400/30 blur-2xl opacity-90 pointer-events-none" />

              {/* Emblem Circle with Clean Border */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-[#666670] shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(245,158,11,0.5)] bg-black">
                <img
                  src="/animation-assets/lightning-emblem.png"
                  alt="GLISTIC Works Lightning Emblem"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* GLOWING YELLOW WORKING LINK (Appears beneath circles in Phase 4) */}
          <div
            ref={linkContainerRef}
            className="relative z-40 mt-6 sm:mt-8 flex flex-col items-center justify-center opacity-0 will-change-transform"
          >
            <a
              href="https://www.serververs.com/team"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto group inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-amber-400 hover:text-amber-300 transition-all duration-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.95)] hover:drop-shadow-[0_0_25px_rgba(251,191,36,1)] hover:scale-105 px-6 py-2.5 rounded-full border border-amber-400/40 bg-black/60 hover:bg-black/80 backdrop-blur-md shadow-[0_0_30px_rgba(245,158,11,0.25)]"
            >
              <span className="tracking-wide">https://www.serververs.com/team</span>
              <ExternalLink className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
            </a>
          </div>
        </div>

        {/* BOTTOM BAR: Minimal Scroll Scrub Progress Indicator */}
        <div className="relative z-30 flex flex-col items-center gap-2 pb-1">
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-white/50">
            <span>Scroll to advance experience</span>
            <ArrowDown className="w-3 h-3 text-amber-400 animate-bounce" />
          </div>

          {/* Scrub Track */}
          <div className="w-40 sm:w-56 h-1 bg-white/10 rounded-full overflow-hidden relative">
            <div
              ref={progressBarRef}
              className="absolute left-0 top-0 bottom-0 w-full bg-gradient-to-r from-primary via-purple-400 to-amber-400 origin-left scale-x-0 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
