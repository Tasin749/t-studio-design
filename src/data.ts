import { LucideIcon, PenTool, LayoutTemplate, Palette, PackageSearch, Video, MonitorPlay } from 'lucide-react';

export type Category = 'Social Media' | 'Advertising' | 'Branding' | 'Packaging' | 'Motion Graphics';

export interface Project {
  id: string;
  title: string;
  category: Category;
  thumbnail: string;
  shortDescription: string;
  industry: string;
  servicesProvided: string[];
  timeline: string;
  clientBackground: string;
  problem: string;
  objective: string;
  researchAnalysis: string;
  creativeStrategy: string;
  designProcess: {
    moodboards?: string[];
    colorChoices?: string[];
    typography?: string;
    layoutExploration?: string;
  };
  finalMockups: string[];
  designSolution: string;
  outcomeImpact: string;
  keyTakeaways: string;
}

export const projects: Project[] = [
  {
    id: 'eco-brew-packaging',
    title: 'EcoBrew Sustainable Packaging',
    category: 'Packaging',
    thumbnail: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Sustainable and modern packaging design for a new organic coffee brand.',
    industry: 'Food & Beverage',
    servicesProvided: ['Packaging Design', 'Brand Identity', 'Illustration'],
    timeline: '6 Weeks',
    clientBackground: 'EcoBrew is an emerging organic coffee company focused on fair-trade sourcing and zero-waste production. They needed a brand identity that communicated their premium quality and environmental commitment.',
    problem: 'The client struggled to stand out on grocery shelves against established, legacy coffee brands that used dark, traditional packaging.',
    objective: 'Create a vibrant, sustainable packaging system that captures the attention of millennial and Gen Z consumers while clearly communicating the brand\'s eco-friendly values.',
    researchAnalysis: 'We analyzed the specialty coffee market and noticed a trend of minimalist, sterile designs. We decided to bridge minimalism with warm, organic illustrations to create a more approachable premium feel.',
    creativeStrategy: 'We opted for unbleached, compostable kraft paper pouches as the substrate, pairing it with bright, earthy spot colors and a clean, modern geometric sans-serif typeface.',
    designProcess: {
      colorChoices: ['#E6D5C3', '#2C4C3B', '#D96C4A'],
      typography: 'Space Grotesk & Inter',
      layoutExploration: 'Explored multi-panel layouts to tell the sourcing story on the back of the packaging without cluttering the front.'
    },
    finalMockups: [
      'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1587049352847-4d4b137a5b3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    designSolution: 'We delivered a completely biodegradable packaging line featuring custom botanical illustrations, clear hierarchy for roast types, and a bold, iconic logo mark that works at any scale.',
    outcomeImpact: 'EcoBrew successfully secured distribution in 40+ independent grocers in its first quarter, citing the packaging design as a primary factor in retail buyer meetings.',
    keyTakeaways: 'Sustainability does not have to mean boring or purely utilitarian design. High-end aesthetics and eco-friendly materials can elevate a product\'s perceived value.'
  },
  {
    id: 'nexus-tech-branding',
    title: 'Nexus Enterprise Branding',
    category: 'Branding',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Complete visual identity system for a B2B SaaS platform.',
    industry: 'Technology / SaaS',
    servicesProvided: ['Logo Design', 'Brand Guidelines', 'Web Design Direction'],
    timeline: '8 Weeks',
    clientBackground: 'Nexus is a fast-growing B2B software company providing data analytics for logistics teams. They had outgrown their initial startup branding and needed an enterprise-ready identity.',
    problem: 'Their previous branding looked fragmented and lacked the authority needed to close six-figure enterprise deals. The visual language was overly playful for their target market.',
    objective: 'Develop a highly professional, trustworthy, and scalable visual identity that appeals to corporate CTOs while retaining a modern tech edge.',
    researchAnalysis: 'Competitor analysis revealed a sea of blue and generic tech lockups. We saw an opportunity to use a stark black and white foundation with precise, neon accent colors for data visualization representation.',
    creativeStrategy: 'The core concept revolves around "clarity from complexity." We designed a grid-based visual system that represents turning raw data into organized insights.',
    designProcess: {
      colorChoices: ['#0A0A0A', '#FFFFFF', '#4F46E5', '#10B981'],
      typography: 'Inter Tight & JetBrains Mono',
    },
    finalMockups: [
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    designSolution: 'A sharp, architectural logo mark paired with an expansive 50-page brand guideline detailing typography, grid systems, data visualization rules, and corporate presentation templates.',
    outcomeImpact: 'The rebrand positioned Nexus confidently for their Series B funding round, which they closed successfully. Sales teams reported increased confidence during enterprise pitches.',
    keyTakeaways: 'Enterprise design requires strict systems and rules. Consistency across touchpoints is paramount for building B2B trust.'
  },
  {
    id: 'aura-skincare-social',
    title: 'Aura Skincare Launch',
    category: 'Social Media',
    thumbnail: 'https://images.unsplash.com/photo-1615397323281-197475fccb36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Aesthetic social media content strategy and templates for a beauty brand.',
    industry: 'Beauty & Cosmetics',
    servicesProvided: ['Social Media Design', 'Content Strategy', 'Art Direction'],
    timeline: '4 Weeks',
    clientBackground: 'Aura is a direct-to-consumer skincare line focusing on minimal, clean ingredients. They were preparing for their big digital launch.',
    problem: 'The client needed to generate hype and build a following of 10k+ before the official store wide open, but had zero existing social presence.',
    objective: 'Create a cohesive, deeply aesthetic 30-day social media rollout campaign that educates, teases, and converts followers into email subscribers.',
    researchAnalysis: 'Audience analysis indicated a preference for "soft-girl" aesthetics, minimal text, and high-quality product textures over aggressive sales pitches.',
    creativeStrategy: 'We established a "less is more" editorial social feed. Using soft beige tones, cinematic lighting, and elegant serif typography, we created educational carousels and product teaser reels.',
    designProcess: {
      colorChoices: ['#FDFBF7', '#E5DCD3', '#1A1A1A'],
      typography: 'Playfair Display & Helvetica Neue'
    },
    finalMockups: [
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    designSolution: 'A set of 40 reusable Figma templates for Instagram/TikTok, along with a comprehensive launch grid plan and motion graphic intro sequences for Reels.',
    outcomeImpact: 'The Instagram account reached 15k followers organically pre-launch, resulting in a sold-out inventory within 48 hours of launch.',
    keyTakeaways: 'In the beauty space, texture and mood communicate quality faster than copy. Strategic pacing of content builds genuine anticipation.'
  },
  {
    id: 'velocity-ad-campaign',
    title: 'Velocity Running Ads',
    category: 'Advertising',
    thumbnail: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'High-energy digital ad creatives for an athletic footwear release.',
    industry: 'Apparel & Sports',
    servicesProvided: ['Advertising Creatives', 'Digital Marketing Design', 'Typography'],
    timeline: '3 Weeks',
    clientBackground: 'Velocity is a challenger brand in the running shoe market, known for their ultra-lightweight marathon shoes.',
    problem: 'Previous ad campaigns had low CTR (click-through rates) because the creatives blended in with standard fitness ads on Instagram and Facebook.',
    objective: 'Design a suite of disruptive, scroll-stopping digital advertisements focused on speed, performance, and aggressive motion.',
    researchAnalysis: 'Fitness ads are heavily saturated. We noticed a lack of typography-driven, raw, brutalist aesthetics in the running shoe space.',
    creativeStrategy: 'We utilized kinetic typography, motion blur effects, and high-contrast neon accents against dark backgrounds to simulate the feeling of extreme speed.',
    designProcess: {
      colorChoices: ['#000000', '#CCFF00', '#FFFFFF'],
      typography: 'Monument Extended'
    },
    finalMockups: [
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538368625907-f1df464ee85f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    designSolution: 'Delivered 25 static ad variations and 5 short-form video ads tailored for Meta and TikTok, using bold, slanted typography and striking action photography.',
    outcomeImpact: 'The campaign achieved a 3.4% CTR (up from 1.1%), reducing their Cost Per Acquisition by 40% over the 3-month holiday quarter.',
    keyTakeaways: 'Sometimes you have to break traditional design rules (like perfect legibility) to evoke a raw emotion like "speed" in advertising.'
  },
  {
    id: 'lumina-motion-brand',
    title: 'Lumina Motion Reel',
    category: 'Motion Graphics',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Dynamic 3D motion graphics and brand video for a creative agency.',
    industry: 'Entertainment & Media',
    servicesProvided: ['Motion Graphics', 'Video Editing', '3D Design'],
    timeline: '5 Weeks',
    clientBackground: 'Lumina is an event production company that creates immersive audio-visual experiences for music festivals.',
    problem: 'They needed a high-impact intro video for their website and presentation decks that immediately showcased their capability with light, sound, and motion.',
    objective: 'Create a 60-second motion graphic reel that feels immersive, futuristic, and rhythmically synced to custom audio.',
    researchAnalysis: 'We looked at architectural lighting and neon art installations to draw inspiration for abstract 3D forms that could animate to music.',
    creativeStrategy: 'We developed a sequence of abstract glass and light simulations that mathematically respond to the beat, showcasing technical prowess and artistic vision.',
    designProcess: {
      colorChoices: ['#050511', '#FF0055', '#00F0FF'],
      typography: 'Helvetica Neue'
    },
    finalMockups: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    designSolution: 'A fluid, high-fidelity 4K motion reel with custom sound design, alongside looping micro-animations for their web headers.',
    outcomeImpact: 'The video increased average time spent on their website homepage from 45 seconds to 2.5 minutes, leading to higher inquiry rates from festival organizers.',
    keyTakeaways: 'Motion graphics must always serve the underlying rhythm; the sync between sound and visual movement is what creates emotional impact.'
  },
  {
    id: 'zest-canned-water',
    title: 'Zest Sparkling Water',
    category: 'Packaging',
    thumbnail: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Vibrant and minimal can design for a new sparkling water startup.',
    industry: 'Food & Beverage',
    servicesProvided: ['Packaging Design', '3D Product Rendering', 'Branding'],
    timeline: '7 Weeks',
    clientBackground: 'Zest is entering the highly competitive sparkling water market with a focus on real fruit extracts and zero artificial sweeteners.',
    problem: 'To compete with massive incumbents, their packaging needed to pop instantly on digital grocery platforms (like Instacart) as well as physical shelves.',
    objective: 'Design a highly recognizable, vibrant can system that clearly distinguishes flavors without relying on literal fruit imagery.',
    researchAnalysis: 'We analyzed the beverage aisle and found that most competitors use thin white cans with scattered fruit illustrations. We decided to go entirely color-blocked.',
    creativeStrategy: 'A bold, solid color-blocking approach. Each flavor gets a striking, unapologetic pantone color. The typography is massive, wrapping around the can for a modern, confident look.',
    designProcess: {
      colorChoices: ['#FF4D00', '#FFD600', '#00D1FF', '#FF00B8'],
      typography: 'Clash Display'
    },
    finalMockups: [
      'https://images.unsplash.com/photo-1631548689556-91ad624831db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1622483767035-777e5621fb7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    designSolution: 'We delivered a suite of 4 flavor pack designs, custom typography wordmarks, and photorealistic 3D renders for their e-commerce storefront.',
    outcomeImpact: 'The distinct look helped Zest secure a viral moment on TikTok upon launch, directly leading to their first production run selling out online.',
    keyTakeaways: 'When shelf space is crowded, extreme simplicity and brutalist typography can be the best form of differentiation.'
  }
];

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof PenTool;
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 'social-media',
    title: 'Social Media Design',
    description: 'Creative content designed to increase engagement, visibility, and conversions on all major platforms.',
    icon: LayoutTemplate,
    benefits: ['Algorithm-friendly formats', 'Consistent brand voice', 'High engagement rates']
  },
  {
    id: 'advertising',
    title: 'Advertising Creatives',
    description: 'High-performing ad designs built for digital marketing campaigns across Meta, Google, and TikTok.',
    icon: MonitorPlay,
    benefits: ['Lower cost per acquisition', 'High click-through rates', 'A/B tested variations']
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    description: 'Professional logos and visual identity systems that build trust, authority, and recognition.',
    icon: Palette,
    benefits: ['Memorable logo design', 'Comprehensive brand guidelines', 'Scalable visual systems']
  },
  {
    id: 'packaging',
    title: 'Packaging Design',
    description: 'Packaging that enhances product appeal, communicates value, and strengthens brand perception.',
    icon: PackageSearch,
    benefits: ['Shelf stand-out impact', 'Unboxing experience design', 'Print-ready mechanicals']
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    description: 'Animated visuals that capture attention, explain complex ideas, and communicate messages effectively.',
    icon: Video,
    benefits: ['Dynamic brand storytelling', 'Scroll-stopping assets', 'High perceived value']
  }
];

export const skills = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe After Effects',
  'Adobe Premiere Pro',
  'Figma'
];

export const testimonials = [
  {
    id: 1,
    client: 'Sarah Jenkins',
    role: 'CMO, EcoBrew',
    content: 'T-Design Studio completely transformed our brand. Their strategic approach to our packaging design directly correlated with our expansion into 40 new retail locations. Absolute professionals.'
  },
  {
    id: 2,
    client: 'David Chen',
    role: 'Founder, Nexus Analytics',
    content: 'We needed a brand that spoke to enterprise clients. T-Design delivered a visual identity that is sharp, modern, and instantly builds trust. The return on investment has been incredible.'
  },
  {
    id: 3,
    client: 'Elena Rodriguez',
    role: 'Marketing Director, Lumina',
    content: 'The motion graphics reel they produced blew us away. Their attention to detail, communication, and creative vision is unmatched. They don\'t just design; they solve business problems.'
  }
]
