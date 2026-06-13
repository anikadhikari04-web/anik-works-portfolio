import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";

// Components
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

// Pages
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Support from "@/pages/Support";
import About from "@/pages/About";
import Editing from "@/pages/Editing";
import Portfolio from "@/pages/Portfolio";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/support" component={Support} />
      <Route path="/about" component={About} />
      <Route path="/editing" component={Editing} />
      <Route path="/portfolio" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />

        <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white relative overflow-x-hidden">

          {/* Global Smooth Ambient Glow */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#8A2BE2]/5 blur-[150px] transform-gpu will-change-transform" />
            <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/5 blur-[150px] transform-gpu will-change-transform" />
            <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#9400D3]/5 blur-[150px] transform-gpu will-change-transform" />
          </div>

          <Navbar />

          <main className="flex-grow relative z-10">
            <Router />
          </main>

          <Footer />

          {/* Floating WhatsApp + Discord Buttons */}
          <FloatingContact />

        </div>

        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
