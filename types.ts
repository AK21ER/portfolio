export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  images: string[];
  demoUrl?: string;
  repoUrl?: string;
  isGithub?: boolean;
  detailedDescription?: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatarUrl: string;
  content: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
}
