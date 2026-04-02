/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ArrowRight, Github, Twitter, Linkedin, Mail, Instagram, ExternalLink } from "lucide-react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-background selection:bg-white/20 selection:text-white">
      {/* Fullscreen Image Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=2000&auto=format&fit=crop" 
          alt="Cinematic Background"
          className="h-full w-full object-cover opacity-60 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/5" : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
          {/* Logo */}
          <div
            className="text-3xl tracking-tight text-foreground cursor-pointer"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Velorah<sup className="text-xs">®</sup>
          </div>

          {/* Nav Links */}
          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-medium text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("studio")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Studio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("journal")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Journal
            </button>
            <button
              onClick={() => scrollToSection("reach-us")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Reach Us
            </button>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection("reach-us")}
            className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium text-foreground transition-transform hover:scale-[1.03]"
          >
            Begin Journey
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-40 text-center">
        <div className="mx-auto max-w-7xl">
          <h1
            className="animate-fade-rise text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Where <em className="not-italic text-muted-foreground">dreams</em> rise{" "}
            <em className="not-italic text-muted-foreground">through the silence.</em>
          </h1>

          <p className="animate-fade-rise-delay mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We're designing tools for deep thinkers, bold creators, and quiet
            rebels. Amid the chaos, we build digital spaces for sharp focus and
            inspired work.
          </p>

          <button 
            onClick={() => scrollToSection("studio")}
            className="liquid-glass animate-fade-rise-delay-2 mt-12 cursor-pointer rounded-full px-14 py-5 text-base font-medium text-foreground transition-transform hover:scale-[1.03]"
          >
            Explore Work
          </button>
        </div>
      </section>

      {/* Studio Section (Projects) */}
      <section id="studio" className="relative z-10 px-8 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-normal tracking-tight md:text-6xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
                The <em className="not-italic text-muted-foreground">Studio</em>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                A collection of digital artifacts, interfaces, and experiments crafted with precision and intent.
              </p>
            </div>
            <button className="flex items-center gap-2 text-sm font-medium text-foreground hover:underline">
              View all projects <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Aether OS",
                category: "Interface Design",
                image: "https://picsum.photos/seed/aether/1200/800",
                description: "A minimalist operating system concept focused on deep work and cognitive clarity."
              },
              {
                title: "Lumina",
                category: "Productivity",
                image: "https://picsum.photos/seed/lumina/1200/800",
                description: "An AI-powered writing assistant that helps you find your voice in the noise."
              },
              {
                title: "Silentium",
                category: "Web Experience",
                image: "https://picsum.photos/seed/silent/1200/800",
                description: "An immersive audio-visual journey through the world's quietest places."
              },
              {
                title: "Vortex",
                category: "Data Visualization",
                image: "https://picsum.photos/seed/vortex/1200/800",
                description: "Visualizing the flow of global information in real-time."
              }
            ].map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 transition-all hover:border-white/20">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{project.category}</span>
                    <ExternalLink size={16} className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-2 text-2xl font-medium" style={{ fontFamily: "'Instrument Serif', serif" }}>{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 px-8 py-32 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10">
              <img 
                src="https://picsum.photos/seed/profile/1000/1000" 
                alt="About Velorah" 
                className="h-full w-full object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div>
              <h2 className="text-4xl font-normal tracking-tight md:text-6xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
                The <em className="not-italic text-muted-foreground">Philosophy</em>
              </h2>
              <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I believe that technology should be a quiet companion, not a loud distraction. In an era of infinite scrolls and constant pings, I build digital sanctuaries.
                </p>
                <p>
                  My work sits at the intersection of brutalist functionality and cinematic elegance. I don't just design interfaces; I design experiences that respect your attention and empower your creativity.
                </p>
                <p>
                  Based in the quiet corners of the digital world, I collaborate with thinkers and rebels who want to leave a meaningful mark.
                </p>
              </div>
              <div className="mt-10 flex gap-6">
                <a href="#" className="text-foreground hover:text-muted-foreground transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-foreground hover:text-muted-foreground transition-colors"><Github size={20} /></a>
                <a href="#" className="text-foreground hover:text-muted-foreground transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-foreground hover:text-muted-foreground transition-colors"><Instagram size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section id="journal" className="relative z-10 px-8 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-normal tracking-tight md:text-6xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
              The <em className="not-italic text-muted-foreground">Journal</em>
            </h2>
            <p className="mt-4 mx-auto max-w-md text-muted-foreground">
              Occasional thoughts on design, philosophy, and the art of quiet rebellion.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { date: "Mar 24, 2026", title: "The Ethics of Attention in Digital Design" },
              { date: "Feb 12, 2026", title: "Why Minimalism is Not Just About Less" },
              { date: "Jan 05, 2026", title: "Building for the Quiet Rebels" },
              { date: "Dec 18, 2025", title: "The Cinematic Web: Motion and Emotion" }
            ].map((post, i) => (
              <div key={i} className="group flex items-center justify-between border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02] px-4 rounded-xl cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{post.date}</span>
                  <h3 className="text-xl md:text-2xl font-medium group-hover:translate-x-2 transition-transform duration-300" style={{ fontFamily: "'Instrument Serif', serif" }}>{post.title}</h3>
                </div>
                <ArrowRight size={20} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reach Us Section */}
      <section id="reach-us" className="relative z-10 px-8 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="liquid-glass p-12 md:p-20 rounded-[40px]">
            <h2 className="text-4xl font-normal tracking-tight md:text-6xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Start a <em className="not-italic text-muted-foreground">Conversation</em>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Have a project in mind or just want to say hello? I'm always open to new ideas and collaborations.
            </p>
            <div className="mt-12 flex flex-col items-center gap-6">
              <a 
                href="mailto:hello@velorah.studio" 
                className="flex items-center gap-3 text-2xl font-medium text-foreground hover:underline"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                <Mail size={24} /> hello@velorah.studio
              </a>
              <button className="liquid-glass mt-4 rounded-full px-12 py-4 text-base font-medium text-foreground transition-transform hover:scale-[1.03]">
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-8 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-2xl tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Velorah<sup className="text-xs">®</sup>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2026 Velorah Studio. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
