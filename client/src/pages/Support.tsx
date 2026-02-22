import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { HelpCircle, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Support() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !problem) {
      toast({
        title: "Missing Information",
        description: "Please fill out all fields to submit a support ticket.",
        variant: "destructive",
      });
      return;
    }

    const text = `SUPPORT REQUEST%0AName: ${name}%0AEmail: ${email}%0AIssue: ${problem}`;
    const url = `https://wa.me/919434190516?text=${text}`;
    window.open(url, "_blank");

    toast({
      title: "Support Request Initiated",
      description: "Redirecting you to WhatsApp Support...",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Support <span className="text-gradient">Center</span></h1>
          <p className="text-muted-foreground text-lg">
            Need help with a delivered project or have questions? I'm here to help you resolve any issues quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-secondary/20 border-white/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Direct Support</h3>
                  <p className="text-sm text-muted-foreground">+91 9434190516</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Call directly for urgent issues.</p>
            </Card>

            <Card className="p-6 bg-secondary/20 border-white/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Response Time</h3>
                  <p className="text-sm text-muted-foreground">Within 24 Hours</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">For emails and form submissions.</p>
            </Card>
          </div>

          <Card className="lg:col-span-2 p-8 bg-card border-white/5 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-heading font-bold">Submit a Ticket</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium ml-1">Your Name</label>
                  <Input 
                    id="name"
                    placeholder="John Doe" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-background/50"
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
                    className="bg-background/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="problem" className="text-sm font-medium ml-1">Describe the Issue</label>
                <Textarea 
                  id="problem"
                  placeholder="Please describe the problem or question in detail..." 
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  className="bg-background/50 min-h-[150px]"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Submit Request
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
