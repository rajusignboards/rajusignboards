export type PageId = 'home' | 'services' | 'journey' | 'gallery' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  yearLabel: string;
  shortYear: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  icon: string;
  title: string;
  tag: string;
}

export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface FooterContactItem {
  label: string;
  value: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'journey', label: 'Journey' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_STATS: StatItem[] = [
  { value: '16+', label: 'Years in Business' },
  { value: '2000+', label: 'Projects Completed' },
  { value: '500+', label: 'Happy Clients' },
  { value: '100%', label: 'Made at our Factory' },
];

export const HOME_SERVICES: ServiceItem[] = [
  {
    icon: '&#128161;',
    title: 'LED Channel Letters',
    description: 'Custom illuminated 3D letters for shops and restaurants.',
  },
  {
    icon: '&#129691;',
    title: 'Flex & Vinyl Boards',
    description: 'High-quality flex printing for banners and hoardings.',
  },
  {
    icon: '&#10024;',
    title: 'Neon & Acrylic Signs',
    description: 'Vibrant LED neon signs for cafes, salons, and retail.',
  },
  {
    icon: '&#128250;',
    title: 'Digital LED Displays',
    description: 'Programmable displays for dynamic content and promotions.',
  },
];

export const ALL_SERVICES: ServiceItem[] = [
  {
    icon: '&#127970;',
    title: 'Glass & ACP Cladding',
    description:
      'Durable and stylish cladding solutions for commercial facades.', 
  },
  {
    icon: '&#128161;',
    title: 'Liquid LED Letters',
    description:
      'Bright, smooth & seamless illuminated letters for a modern look on any storefront.',
  },
  {
    icon: '&#128161;',
    title: 'LED Channel Letters',
    description:
      'Custom-cut illuminated 3D letters that stand out on any facade, perfect for shops and restaurants.',
  },
  {
    icon: '&#129691;',
    title: 'Flex & Vinyl Boards',
    description:
      'High-quality flex printing for banners, hoardings, and display boards at competitive prices.',
  },
  {
    icon: '&#10024;',
    title: 'Neon & Acrylic Signs',
    description:
      'Vibrant LED neon and laser-cut acrylic signs for cafes, salons, and modern retail spaces.',
  },
  {
    icon: '&#128250;',
    title: 'Digital LED Displays',
    description: 'Programmable LED boards for running text, promotions, and dynamic content.',
  },
  {
    icon: '&#128679;',
    title: 'Site Boards & Hoardings',
    description: 'Large-format site hoardings and construction boards for builders and developers.',
  },
  {
    icon: '&#128293;',
    title: 'Flex & Vinyl Signage',
    description: 'Slim lightbox signs with even backlighting for malls, clinics, and showrooms.',
  },
  {
    icon: '&#128161;',
    title: 'Interior Branding',
    description:
      'Custom interior signage solutions including wayfinding, wall graphics, and branded decor.',
  }
];

export const WHY_ITEMS: StatItem[] = [
  { value: '16+', label: 'Years of Experience' },
  { value: '2000+', label: 'Projects Delivered' },
  { value: '1 week', label: 'Quick Turnaround' },
  { value: '1yr', label: 'Free Service' },
];

export const WHY_DESCRIPTIONS = [
  'Deep expertise in all types of signage manufacturing.',
  'From small shops to large commercial buildings.',
  'Most sign boards delivered within 1 week.',
  'We stand by our work with a 1-year free service.',
];

export const SERVICE_TICKERS = [
  'Glass & ACP Cladding',
  'Liquid LED Letters',
  'LED Channel Letters',
  'Neon / Acrylic Signs',
  'Digital Displays',
  'Interior Branding',
  'Backlit / Vinyl Boards',
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    shortYear: '2008',
    yearLabel: 'The Beginning',
    title: 'Started from scratch',
    description:
      'Raju Sign Boards was founded with a single machine, converted a room in our home into a workspace, We are the first Sign Board manufacturer in 3-5 districts around Karimnagar and a big dream - to bring quality signage to every business in Karimnagar.',
  },
  {
    shortYear: '2010',
    yearLabel: 'First Milestone',
    title: '100 projects completed',
    description:
      'Word of mouth spread quickly. We crossed our first 100 clients and hired our first team of 5 skilled fabricators.',
  },
  {
    shortYear: '2012',
    yearLabel: 'Expansion',
    title: 'Moved to a bigger workshop',
    description:
      'Growing demand pushed us to expand. We moved into a larger production unit and added LED fabrication equipment.',
  },
  {
    shortYear: '2015',
    yearLabel: '500+ Clients',
    title: 'A trusted name in Karimnagar',
    description:
      'Crossed 500 satisfied clients spanning retail stores, hospitals, schools, and commercial complexes across Karimnagar.',
  },
  {
    shortYear: '2018',
    yearLabel: 'Moved into our own factory',
    title: 'Increased production capacity',
    description:
      'Established our own factory with state-of-the-art machinery, allowing us to take on larger projects and ensure consistent quality control.',
  },
  {
    shortYear: '2020',
    yearLabel: 'Started Glass & ACP Cladding',
    title: 'Diversified services',
    description:
      'Responding to market demand, we added glass and ACP cladding services, becoming a one-stop solution for all signage and facade needs.',
  },
  {
    shortYear: '2024',
    yearLabel: 'Bought Liquid LED, Channel Bending, CNC machines',
    title: 'A large investment in new technology',
    description:
      'To stay ahead of the curve, we invested in the latest liquid LED technology, channel bending machines, and CNC equipment, enhancing our capabilities and efficiency.',
  },
  {
    shortYear: '2025',
    yearLabel: 'Today',
    title: '2000+ projects & still growing',
    description:
      '16+ years in, with 2000+ completed projects, a full-fledged manufacturing unit, and a team committed to quality and after-sales service.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { icon: '&#128161', title: 'Glass & ACP Cladding', tag: 'Glass & ACP Cladding' },
  { icon: '&#128161', title: 'Liquid LED Letters', tag: 'Liquid LED Letters' },
  { icon: '&#128161;', title: 'LED Channel Letters', tag: 'LED Letters' },
  { icon: '&#128292;', title: '3D Acrylic Letters', tag: '3D Letters' },
  { icon: '&#128250;', title: 'Digital LED Display', tag: 'Digital Board' },
  { icon: '&#129691;', title: 'Shop Front Board', tag: 'Shop Boards' },
  { icon: '&#128293;', title: 'Backlit Lightbox', tag: 'Backlit' },
  { icon: '&#127991;&#65039;', title: 'Interior Branding', tag: 'Interior Branding' },
];

export const CONTACT_INFO: ContactInfoItem[] = [
  {
    icon: '&#128205;',
    label: 'Location',
    value: 'Karimnagar, Telangana',
    subtext: 'Update with your full workshop address',
  },
  {
    icon: '&#9993;&#65039;',
    label: 'Email',
    value: 'info@rajusignboards.com',
    subtext: 'We reply within 24 hours',
  },
  {
    icon: '&#128336;',
    label: 'Working Hours',
    value: 'Mon - Sat: 9 AM - 7 PM',
    subtext: 'Sunday: Closed',
  },
];

export const FOOTER_SERVICES = [
  'Glass & ACP Cladding',
  'Liquid LED Letters',
  'LED Channel Letters',
  'Digital LED Displays',
  'Neon / Acrylic Signs',
  'Interior Branding',
];

export const FOOTER_COMPANY = ['Home', 'Our Journey', 'Gallery', 'Contact Us'];

export const FOOTER_CONTACTS: FooterContactItem[] = [
  {
    label: 'Address',
    value: 'Alkapuri Colony, Road no 4,\nKarimnagar - 505001, Telangana',
  },
  { label: 'Email', value: 'rajusignboards@gmail.com' },
  { label: 'Hours', value: 'Mon - Sat: 9 AM - 7 PM\nSunday: Closed' },
];
