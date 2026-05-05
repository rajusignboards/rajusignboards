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
  { value: '100%', label: 'Made in Hyderabad' },
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
    icon: '&#127970;',
    title: 'Glow Sign Boards',
    description: 'Backlit and front-lit glow sign boards for 24/7 brand visibility.',
  },
  {
    icon: '&#128292;',
    title: '3D Lettering & Logos',
    description:
      'Fabricated metal, PVC, and foam 3D letters and logo cutouts with optional LED backlighting.',
  },
  {
    icon: '&#128250;',
    title: 'Digital LED Displays',
    description: 'Programmable LED boards for running text, promotions, and dynamic content.',
  },
  {
    icon: '&#128679;',
    title: 'Site Boards & Hoardings',
    description:
      'Large-format site hoardings and construction boards for builders and developers.',
  },
  {
    icon: '&#127991;&#65039;',
    title: 'Name Plates & Directories',
    description: 'Office name plates, building directories, and door signs in acrylic and metal.',
  },
  {
    icon: '&#128293;',
    title: 'Backlit Signage',
    description:
      'Slim lightbox signs with even backlighting for malls, clinics, and showrooms.',
  },
];

export const WHY_ITEMS: StatItem[] = [
  { value: '16+', label: 'Years of Experience' },
  { value: '2000+', label: 'Projects Delivered' },
  { value: '48hr', label: 'Quick Turnaround' },
  { value: '1yr', label: 'Service Warranty' },
];

export const WHY_DESCRIPTIONS = [
  'Deep expertise in all types of signage manufacturing.',
  'From small shops to large commercial buildings.',
  'Most sign boards delivered within 48 hours.',
  'All LED products come with 1-year after-sales service.',
];

export const SERVICE_TICKERS = [
  'LED Channel Letters',
  'Flex Boards',
  'Neon Signs',
  'Shop Boards',
  '3D Letters',
  'Hoardings',
  'Digital Displays',
  'Backlit Signs',
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    shortYear: '08',
    yearLabel: '2008 - The Beginning',
    title: 'Started from scratch',
    description:
      'Raju Sign Boards was founded with a single machine, a small rented workshop, and a big dream - to bring quality signage to every business in Hyderabad.',
  },
  {
    shortYear: '10',
    yearLabel: '2010 - First Milestone',
    title: '100 projects completed',
    description:
      'Word of mouth spread quickly. We crossed our first 100 clients and hired our first team of 5 skilled fabricators.',
  },
  {
    shortYear: '13',
    yearLabel: '2013 - Expansion',
    title: 'Moved to a bigger workshop',
    description:
      'Growing demand pushed us to expand. We moved into a larger production unit and added LED fabrication equipment.',
  },
  {
    shortYear: '16',
    yearLabel: '2016 - Digital Shift',
    title: 'Embraced LED technology',
    description:
      'We invested in the latest LED channel letter and digital display technology, offering clients energy-efficient modern signage.',
  },
  {
    shortYear: '19',
    yearLabel: '2019 - 500+ Clients',
    title: 'A trusted name in Hyderabad',
    description:
      'Crossed 500 satisfied clients spanning retail stores, hospitals, schools, banks, and commercial complexes across Hyderabad.',
  },
  {
    shortYear: '22',
    yearLabel: '2022 - 3D & Neon Era',
    title: 'Launched 3D & neon sign services',
    description:
      'Added acrylic neon signs and precision 3D letter fabrication, catering to new-age cafes, co-working spaces, and premium retail brands.',
  },
  {
    shortYear: '25',
    yearLabel: '2025 - Today',
    title: '2000+ projects & still growing',
    description:
      '16+ years in, with 2000+ completed projects, a full-fledged manufacturing unit, and a team committed to quality and after-sales service.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { icon: '&#128161;', title: 'LED Channel Letters', tag: 'LED Letters' },
  { icon: '&#10024;', title: 'Neon Glow Sign', tag: 'Neon Signs' },
  { icon: '&#127970;', title: 'Commercial Hoarding', tag: 'Hoardings' },
  { icon: '&#128292;', title: '3D Acrylic Letters', tag: '3D Letters' },
  { icon: '&#128250;', title: 'Digital LED Display', tag: 'Digital Board' },
  { icon: '&#129691;', title: 'Shop Front Board', tag: 'Shop Boards' },
  { icon: '&#128293;', title: 'Backlit Lightbox', tag: 'Backlit' },
  { icon: '&#127991;&#65039;', title: 'Office Name Plate', tag: 'Name Plates' },
  { icon: '&#128679;', title: 'Site Hoarding Board', tag: 'Site Boards' },
];

export const CONTACT_INFO: ContactInfoItem[] = [
  {
    icon: '&#128205;',
    label: 'Location',
    value: 'Hyderabad, Telangana',
    subtext: 'Update with your full workshop address',
  },
  {
    icon: '&#128222;',
    label: 'Phone',
    value: '+91 XXXXX XXXXX',
    subtext: 'Mon - Sat, 9:00 AM to 7:00 PM',
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
  'LED Channel Letters',
  'Glow Sign Boards',
  '3D Letters & Logos',
  'Neon / Acrylic Signs',
  'Digital LED Displays',
];

export const FOOTER_COMPANY = ['Home', 'Our Journey', 'Gallery', 'Contact Us'];

export const FOOTER_CONTACTS: FooterContactItem[] = [
  {
    label: 'Address',
    value: 'Your Workshop Address,\nHyderabad, Telangana - 500XXX',
  },
  { label: 'Phone', value: '+91 XXXXX XXXXX' },
  { label: 'Email', value: 'info@rajusignboards.com' },
  { label: 'Hours', value: 'Mon - Sat: 9 AM - 7 PM\nSunday: Closed' },
];
