```tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
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

    const text =
      "Hello, my name is " +
      name +
      ". My email is " +
      email +
      ". Message: " +
      message;

    const url =
      "https://wa.me/919434190516?text=" + encodeURIComponent(text);

    window.open(url, "_blank");

    toast({
      title: "Opening WhatsApp",
      description: "Redirecting you to WhatsApp",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-purple-500">Touch</span>
          </h1>

          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let's discuss it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* CONTACT INFO */}

          <Card className="p-8 bg-card/60 backdrop-blur border border-white/10">

            <h3 className="text-2xl font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4 items-start">
                <Phone className="text-purple-500" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Phone
                  </p>
                  <p className="font-medium">
                    +91 9434190516
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="text-purple-500" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Email
                  </p>
                  <p className="font-medium break-all">
                    glisticgamerofficial@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="text-purple-500" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Location
                  </p>
                  <p className="font-medium">
                    India
                  </p>
                </div>
              </div>

            </div>

          </Card>

          {/* CONTACT FORM */}

          <Card className="p-8 border border-white/10">

            <h3 className="text-2xl font-bold mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <Button type="submit" className="w-full">
                Send via WhatsApp
                <Send className="ml-2 w-4 h-4" />
              </Button>

            </form>

          </Card>

        </div>

        {/* DISCORD BOX */}

        <motion.div
          className="max-w-6xl mx-auto mt-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-2xl
          bg-gradient-to-r from-indigo-500/20 to-purple-500/20
          border border-purple-500/20
          shadow-[0_0_60px_rgba(139,92,246,0.5)]">

            <div className="flex items-center gap-5">

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-16 h-16 flex items-center justify-center rounded-xl
                bg-indigo-600 text-white"
              >
                <MessageCircle className="w-8 h-8" />
              </motion.div>

              <div>

                <h3 className="text-xl font-bold">
                  Discord Support
                </h3>

                <p className="text-muted-foreground">
                  Message me directly on Discord.
                </p>

                <p className="text-indigo-400 font-semibold">
                  @GlisticBoy
                </p>

              </div>

            </div>

            <motion.a
              href="https://discord.com/users/1261207302443241605"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl text-white
              bg-gradient-to-r from-indigo-500 to-purple-600
              shadow-lg"
            >
              DM on Discord
            </motion.a>

          </div>

        </motion.div>

      </div>
    </div>
  );
}
```
