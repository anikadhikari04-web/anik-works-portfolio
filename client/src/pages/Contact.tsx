import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({
        title: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    // Format WhatsApp message
    const text = `Hello, my name is ${name}%0AMy email is ${email}%0AMessage: ${message}`;
    const url = `https://wa.me/919434190516?text=${text}`;
    
    // Open WhatsApp
    window.open(url, "_blank");
    
    toast({
      title: "Opening WhatsApp...",
      description: "Redirecting you to send the message.",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Get In <span className="text-gradient">Touch</span></h1>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-white/5 shadow-xl">
              <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a 
                  href="tel:+919434190516" 
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone Number</p>
                    <p className="text-lg font-medium">+91 9434190516</p>
                  </div>
                </a>

                <a 
                  href="mailto:glisticgamerofficial@gmail.com" 
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email Address</p>
                    <p className="text-lg font-medium break-all">glisticgamerofficial@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-lg font-medium">West Bengal, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="font-bold mb-4">Follow Socials</h4>
                <div className="flex gap-4">
                  <a href="https://www.youtube.com/@GlisticGamer" target="_blank" rel="noopener noreferrer" className="bg-secondary p-3 rounded-full hover:bg-red-600 hover:text-white transition-all">
                    <MessageSquare className="w-5 h-5" />
                  </a>
                  {/* Add more social icons here */}
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 bg-card border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
              
              <h3 className="text-2xl font-heading font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium ml-1">Your Name</label>
                  <Input 
                    id="name"
                    placeholder="John Doe" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-secondary/50 border-white/10 focus:border-primary/50 h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium ml-1">Email Address</label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-secondary/50 border-white/10 focus:border-primary/50 h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-secondary/50 border-white/10 focus:border-primary/50 min-h-[150px] resize-none"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full text-lg h-12 shadow-lg shadow-primary/20">
                  Send via WhatsApp <Send className="ml-2 w-5 h-5" />
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By clicking send, you will be redirected to WhatsApp to send your message directly.
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
