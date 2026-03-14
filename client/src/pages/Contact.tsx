```tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">

        {/* TITLE */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h1>

          <p className="text-muted-foreground text-lg">
            Contact me for website development or projects.
          </p>
        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* CONTACT INFO */}

          <Card className="p-8">

            <h3 className="text-2xl font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4 items-start">
                <Phone />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 9434190516</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">
                    glisticgamerofficial@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">India</p>
                </div>
              </div>

            </div>

          </Card>

          {/* CONTACT FORM */}

          <Card className="p-8">

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

        {/* DISCORD BUTTON */}

        <div className="max-w-6xl mx-auto mt-16 text-center">

          <Card className="p-8">

            <h3 className="text-2xl font-bold mb-4">
              Contact via Discord
            </h3>

            <p className="text-muted-foreground mb-6">
              You can also message me directly on Discord.
            </p>

            <a
              href="https://discord.com/users/1261207302443241605"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                Message on Discord
              </Button>
            </a>

          </Card>

        </div>

      </div>
    </div>
  );
}
```
