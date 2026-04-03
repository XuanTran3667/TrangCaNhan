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

  // --- BACKGROUND CONFIGURATION ---
  // You can use a URL for an image (jpg, png, gif) or a video (mp4, webm).
  const backgroundUrl = "/TrangCaNhan/bg.mp4"; 
  // Example Video URL: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwlXH07IWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
  
  const isVideo = backgroundUrl.match(/\.(mp4|webm|ogg|mov)$/i) || backgroundUrl.includes("video");

  return (
    <main className="relative min-h-screen w-full bg-background selection:bg-white/20 selection:text-white">
      {/* Fullscreen Media Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {isVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-100 scale-105 transition-opacity duration-1000"
          >
            <source src={backgroundUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={backgroundUrl}
            alt="Cinematic Background"
            className="h-full w-full object-cover opacity-100 scale-105 transition-opacity duration-1000"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-black/20" />
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
            className="text-3xl tracking-tight text-white/80 cursor-pointer drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Xuân Trần<sup className="text-xs">®</sup>
          </div>

          {/* Nav Links */}
          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-medium text-white text-white/80 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("studio")}
              className="text-sm font-medium text-white text-white/70 transition-colors hover:text-white/80"
            >
              Studio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-white text-white/70 transition-colors hover:text-white/80"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("journal")}
              className="text-sm font-medium text-white text-white/70 transition-colors hover:text-white/80"
            >
              Journal
            </button>
            <button
              onClick={() => scrollToSection("reach-us")}
              className="text-sm font-medium text-white text-white/70 transition-colors hover:text-white/80"
            >
              Reach Us
            </button>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection("reach-us")}
            className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium text-white text-white/80 transition-transform hover:scale-[1.03]"
          >
            Begin Journey
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-40 text-center">
        <div className="mx-auto max-w-7xl">
          <h1
            className="animate-fade-rise text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-white/80 sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Xuân <em className="not-italic text-white/70">Trần</em> {" "}
            <em className="not-italic text-white/70"></em>
          </h1>

          <p className="animate-fade-rise-delay mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            We're designing tools for deep thinkers, bold creators, and quiet
            rebels. Amid the chaos, we build digital spaces for sharp focus and
            inspired work.
          </p>

          <button 
            onClick={() => scrollToSection("studio")}
            className="liquid-glass animate-fade-rise-delay-2 mt-12 cursor-pointer rounded-full px-14 py-5 text-base font-medium text-white text-white/80 transition-transform hover:scale-[1.03]"
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
                The <em className="not-italic text-white/70">Studio</em>
              </h2>
              <p className="mt-4 max-w-md text-white/70">
                A collection of digital artifacts, interfaces, and experiments crafted with precision and intent.
              </p>
            </div>
            <button className="flex items-center gap-2 text-sm font-medium text-white text-white/80 hover:underline">
              View all projects <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Aether OS",
                category: "Interface Design",
                image: "https://picsum.photos/seed/aether/1200/800", // REPLACE_WITH_PROJECT_IMAGE_1
                description: "A minimalist operating system concept focused on deep work and cognitive clarity.",
                link: "https://your-project-link-1.com" // REPLACE_WITH_PROJECT_LINK_1
              },
              {
                title: "Lumina",
                category: "Productivity",
                image: "https://picsum.photos/seed/lumina/1200/800", // REPLACE_WITH_PROJECT_IMAGE_2
                description: "An AI-powered writing assistant that helps you find your voice in the noise.",
                link: "https://your-project-link-2.com" // REPLACE_WITH_PROJECT_LINK_2
              },
              {
                title: "Silentium",
                category: "Web Experience",
                image: "https://picsum.photos/seed/silent/1200/800", // REPLACE_WITH_PROJECT_IMAGE_3
                description: "An immersive audio-visual journey through the world's quietest places.",
                link: "https://your-project-link-3.com" // REPLACE_WITH_PROJECT_LINK_3
              },
              {
                title: "Vortex",
                category: "Data Visualization",
                image: "https://picsum.photos/seed/vortex/1200/800", // REPLACE_WITH_PROJECT_IMAGE_4
                description: "Visualizing the flow of global information in real-time.",
                link: "https://your-project-link-4.com" // REPLACE_WITH_PROJECT_LINK_4
              }
            ].map((project, i) => (
              <a 
                key={i} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl bg-white/5 border border-white/10 transition-all hover:border-white/20"
              >
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
                    <span className="text-xs font-medium text-white uppercase tracking-widest text-white/70">{project.category}</span>
                    <ExternalLink size={16} className="text-white/70 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-2 text-2xl font-medium text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>{project.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </a>
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
                src="https://picsum.photos/seed/profile/1000/1000" // REPLACE_WITH_YOUR_PROFILE_IMAGE_URL
                alt="About Velorah" 
                className="h-full w-full object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div>
              <h2 className="text-4xl font-normal tracking-tight md:text-6xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
                The <em className="not-italic text-white/70">Philosophy</em>
              </h2>
              <div className="mt-8 space-y-6 text-lg text-white/70 leading-relaxed">
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
                <a href="https://x.com/xuantran3667" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white/70 transition-colors"><Twitter size={20} /></a>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white/70 transition-colors"><Github size={20} /></a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white/70 transition-colors"><Linkedin size={20} /></a>
                <a href="https://instagram.com/xuantran3667" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white/70 transition-colors"><Instagram size={20} /></a>
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
              The <em className="not-italic text-white/70">Journal</em>
            </h2>
            <p className="mt-4 mx-auto max-w-md text-white/70">
              Occasional thoughts on design, philosophy, and the art of quiet rebellion.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { date: "Mar 24, 2026", title: "The Ethics of Attention in Digital Design", link: "https://your-blog-post-1.com" },
              { date: "Feb 12, 2026", title: "Why Minimalism is Not Just About Less", link: "https://your-blog-post-2.com" },
              { date: "Jan 05, 2026", title: "Building for the Quiet Rebels", link: "https://your-blog-post-3.com" },
              { date: "Dec 18, 2025", title: "The Cinematic Web: Motion and Emotion", link: "https://your-blog-post-4.com" }
            ].map((post, i) => (
              <a 
                key={i} 
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02] px-4 rounded-xl cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                  <span className="text-xs font-mono text-white/70 uppercase tracking-widest">{post.date}</span>
                  <h3 className="text-xl md:text-2xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300" style={{ fontFamily: "'Instrument Serif', serif" }}>{post.title}</h3>
                </div>
                <ArrowRight size={20} className="text-white/70 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Reach Us Section */}
      <section id="reach-us" className="relative z-10 px-8 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="liquid-glass p-12 md:p-20 rounded-[40px]">
            <h2 className="text-4xl font-normal tracking-tight md:text-6xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Start a <em className="not-italic text-white/70">Conversation</em>
            </h2>
            <p className="mt-6 text-lg text-white/70">
              Have a project in mind or just want to say hello? I'm always open to new ideas and collaborations.
            </p>
            <div className="mt-12 flex flex-col items-center gap-6">
              <a 
                href="mailto:hello@velorah.studio" 
                className="flex items-center gap-3 text-2xl font-medium text-white text-white/80 hover:underline"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                <Mail size={24} /> hello@velorah.studio
              </a>
              <button className="liquid-glass mt-4 rounded-full px-12 py-4 text-base font-medium text-white text-white/80 transition-transform hover:scale-[1.03]">
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
            Xuân Trần<sup className="text-xs">®</sup>
          </div>
          <div className="text-sm text-white/70">
            © 2026 Velorah Studio. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-medium text-white text-white/70">
            <a href="#" className="hover:text-white/80 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/80 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/80 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
