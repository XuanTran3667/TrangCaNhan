import { Github, Twitter, Linkedin, Instagram, Facebook, Youtube, Globe } from "lucide-react";

// --- SOCIAL MEDIA CONFIGURATION ---
// Replace these URLs with your actual profile links
export const SOCIAL_LINKS = [
  { name: "Twitter", url: "https://twitter.com/xuantran3667", icon: Twitter },
  { name: "Github", url: "https://github.com/YOUR_USERNAME", icon: Github },
  { name: "Linkedin", url: "https://linkedin.com/in/YOUR_USERNAME", icon: Linkedin },
  { name: "Instagram", url: "https://instagram.com/xuantran3667", icon: Instagram },
  { name: "Facebook", url: "https://facebook.com/xuantran3667", icon: Facebook },
  { name: "Youtube", url: "https://youtube.com/c/YOUR_CHANNEL", icon: Youtube },
];

// --- PROJECT CONFIGURATION ---
// mediaType: "image" or "video"
// url: Link to your image (Unsplash/Picsum) or video (.mp4)
export const PROJECTS = [
  {
    title: "Project Alpha",
    category: "Web Development",
    mediaType: "image",
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    description: "A high-performance web application built with React and Node.js.",
    projectUrl: "https://your-project-link.com"
  },
  {
    title: "Cinematic Motion",
    category: "Video Production",
    mediaType: "video",
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwlXH07IWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
    description: "An experimental short film exploring the relationship between light and shadow.",
    projectUrl: "https://vimeo.com/your-video"
  },
  {
    title: "Brand Identity",
    category: "Graphic Design",
    mediaType: "image",
    url: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=1200&auto=format&fit=crop",
    description: "Complete visual identity system for a modern tech startup.",
    projectUrl: "https://behance.net/your-portfolio"
  },
  {
    title: "Interactive Data",
    category: "Data Science",
    mediaType: "video",
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwlXH07IWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
    description: "Real-time data visualization dashboard for global climate monitoring.",
    projectUrl: "https://your-dashboard.com"
  }
];

// --- JOURNAL / BLOG CONFIGURATION ---
export const JOURNAL_POSTS = [
  { 
    date: "Apr 02, 2026", 
    title: "The Future of Minimalist Web Design",
    link: "https://medium.com/@your-blog/post-1"
  },
  { 
    date: "Mar 15, 2026", 
    title: "How to Master Cinematic Lighting in 3D",
    link: "https://medium.com/@your-blog/post-2"
  },
  { 
    date: "Feb 28, 2026", 
    title: "Why Typography is 90% of Design",
    link: "https://medium.com/@your-blog/post-3"
  },
  { 
    date: "Jan 10, 2026", 
    title: "Building a Personal Brand from Scratch",
    link: "https://medium.com/@your-blog/post-4"
  }
];

// --- CONTACT CONFIGURATION ---
export const CONTACT_INFO = {
  email: "hello@yourdomain.com",
  heroVideo: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwlXH07IWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
  viewAllProjectsUrl: "https://github.com/YOUR_USERNAME?tab=repositories"
};
