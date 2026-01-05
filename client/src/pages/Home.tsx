import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Terminal, Code, Zap, Shield, ChevronRight } from "lucide-react";
import { SyllabusModal } from "@/components/SyllabusModal";
import { ContactForm } from "@/components/ContactForm";
import { PRODUCTS } from "../../../shared/products";
import { toast } from "sonner";

export default function Home() {
  const handleEnroll = async () => {
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: PRODUCTS[0].id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to start checkout. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2 font-mono text-xl font-bold text-primary">
            <Terminal className="h-6 w-6" />
            <span>CURSE_PROGRAM</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#curriculum" className="hover:text-primary transition-colors">Modules</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </div>
          <Button variant="outline" className="font-mono border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Login
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Coding Environment" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="outline" className="border-primary text-primary px-4 py-1 text-sm font-mono animate-pulse">
              v2.0 NOW AVAILABLE
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              MASTER THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
                FULL STACK
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Become an elite developer with our intensive curriculum covering React, Python, and advanced CSS. No fluff, just code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 h-14 shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                Start Hacking <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <SyllabusModal />
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono pt-4">
              <span className="flex items-center gap-1"><Check className="h-4 w-4 text-primary" /> Lifetime Access</span>
              <span className="flex items-center gap-1"><Check className="h-4 w-4 text-primary" /> Project Based</span>
            </div>
          </div>
          
          {/* Code Terminal Visual */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30"></div>
            <div className="relative bg-[#0d1117] rounded-lg border border-white/10 shadow-2xl overflow-hidden font-mono text-sm">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-muted-foreground">curse_program.tsx</div>
              </div>
              <div className="p-6 space-y-2 text-blue-300">
                <div className="flex">
                  <span className="text-gray-500 w-8">1</span>
                  <span><span className="text-purple-400">import</span> <span className="text-yellow-300">{`{ useState }`}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">2</span>
                  <span><span className="text-purple-400">import</span> <span className="text-yellow-300">{`{ Python }`}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'./backend'</span>;</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">3</span>
                  <span></span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">4</span>
                  <span><span className="text-purple-400">const</span> <span className="text-blue-400">Developer</span> = () ={`>`} {`{`}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">5</span>
                  <span className="pl-4"><span className="text-purple-400">const</span> [skills, setSkills] = <span className="text-blue-400">useState</span>([</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">6</span>
                  <span className="pl-8"><span className="text-green-400">'React 19'</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">7</span>
                  <span className="pl-8"><span className="text-green-400">'Python 3.11'</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">8</span>
                  <span className="pl-8"><span className="text-green-400">'Tailwind CSS'</span></span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">9</span>
                  <span className="pl-4">]);</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">10</span>
                  <span className="pl-4"><span className="text-purple-400">return</span> <span className="text-yellow-300">{`<Success />`}</span>;</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">11</span>
                  <span>{`}`}</span>
                </div>
                <div className="flex mt-4 animate-pulse">
                  <span className="text-primary">{`>`} _</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="curriculum" className="py-20 bg-card/30 border-y border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">THE ARSENAL</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Master the three most powerful tools in modern web development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* React Card */}
            <Card className="bg-background border-white/10 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
              <div className="h-48 overflow-hidden relative bg-black/50 flex items-center justify-center">
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors"></div>
                <img src="/images/react-icon.png" alt="React" className="w-32 h-32 object-contain z-10 drop-shadow-[0_0_15px_rgba(0,123,255,0.5)]" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">React JS</CardTitle>
                <CardDescription>Frontend Architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-secondary" /> Hooks & Context API</li>
                  <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-secondary" /> Server Components</li>
                  <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-secondary" /> State Management</li>
                </ul>
              </CardContent>
            </Card>

            {/* Python Card */}
            <Card className="bg-background border-white/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
              <div className="h-48 overflow-hidden relative bg-black/50 flex items-center justify-center">
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors"></div>
                <img src="/images/python-icon.png" alt="Python" className="w-32 h-32 object-contain z-10 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Python</CardTitle>
                <CardDescription>Backend Logic</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-accent" /> Data Structures</li>
                  <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-accent" /> API Development</li>
                  <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-accent" /> Automation Scripts</li>
                </ul>
              </CardContent>
            </Card>

            {/* CSS Card */}
            <Card className="bg-background border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
              <div className="h-48 overflow-hidden relative bg-black/50 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
                <img src="/images/css-icon.png" alt="CSS" className="w-32 h-32 object-contain z-10 drop-shadow-[0_0_15px_rgba(0,255,65,0.5)]" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Modern CSS</CardTitle>
                <CardDescription>Visual Mastery</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Flexbox & Grid</li>
                  <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Animations</li>
                  <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Responsive Design</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="container max-w-4xl">
          <Card className="bg-black/40 backdrop-blur-xl border-primary/30 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 space-y-6">
                <h2 className="text-3xl font-bold font-mono">INITIALIZE_CAREER</h2>
                <p className="text-muted-foreground">
                  Get full access to the entire curriculum, source code, and community.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="bg-primary/20 p-1 rounded text-primary"><Check className="h-4 w-4" /></div>
                    <span>50+ Hours of Video</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-primary/20 p-1 rounded text-primary"><Check className="h-4 w-4" /></div>
                    <span>Real-world Projects</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-primary/20 p-1 rounded text-primary"><Check className="h-4 w-4" /></div>
                    <span>Certificate of Completion</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-primary/20 p-1 rounded text-primary"><Check className="h-4 w-4" /></div>
                    <span>Discord Community Access</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary/5 p-8 md:p-12 flex flex-col justify-center items-center text-center border-l border-white/5">
                <div className="text-sm text-muted-foreground mb-2 uppercase tracking-widest">One-time Payment</div>
                <div className="flex items-start justify-center gap-1 mb-6">
                  <span className="text-2xl font-bold mt-2 text-muted-foreground">CAD</span>
                  <span className="text-6xl font-bold text-white tracking-tighter">4.99</span>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 shadow-lg shadow-primary/20"
                  onClick={handleEnroll}
                >
                  ENROLL NOW
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  30-day money-back guarantee. Secure payment.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 container max-w-2xl">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/20">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-mono font-bold text-muted-foreground">
            <Terminal className="h-5 w-5" />
            <span>CURSE_PROGRAM</span>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; 2026 Curse Program. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Code className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Shield className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
