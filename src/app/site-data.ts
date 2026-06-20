export type PageId = 'home' | 'services' | 'journey' | 'process' | 'contact';

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

export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
  href?: string;
}

export interface FooterContactItem {
  label: string;
  value: string;
}

export interface GalleryItem {
  icon: string;
  title: string;
  images: string[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    icon: '&#127970;',
    title: 'Glass & ACP Cladding',
    images: ['https://res.cloudinary.com/dterfi0mb/image/upload/v1781953750/WhatsApp_Image_2026-06-20_at_14.37.40_bei6nd.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781953751/WhatsApp_Image_2026-06-20_at_14.37.40_1_sxhsut.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781953751/WhatsApp_Image_2026-06-20_at_14.34.03_vho8km.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781953750/WhatsApp_Image_2026-06-20_at_14.34.01_s5rs7s.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781953750/WhatsApp_Image_2026-06-20_at_14.37.38_f1m6jh.jpg'],
  },
  {
    icon: '&#128167;',
    title: 'Liquid LED Letters',
    images: ['https://res.cloudinary.com/dterfi0mb/image/upload/v1781798013/WhatsApp_Image_2026-06-18_at_21.05.45_if1oq7.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781798156/WhatsApp_Image_2026-06-18_at_21.05.47_bxotdi.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781798109/WhatsApp_Image_2026-06-18_at_21.05.46_qtdy1r.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781798110/WhatsApp_Image_2026-06-18_at_21.05.45_1_cwydir.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781798108/WhatsApp_Image_2026-06-18_at_21.05.48_q6ncv9.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781846247/WhatsApp_Image_2026-06-18_at_22.30.00_sd9rhe.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781944141/WhatsApp_Image_2026-06-20_at_13.50.08_p0dqog.jpg'],
  },
  {
    icon: '&#128161;',
    title: 'LED Channel Letters',
    images: ['https://res.cloudinary.com/dterfi0mb/image/upload/v1781846247/WhatsApp_Image_2026-06-18_at_22.30.57_ppdjxz.jpg'],
  },
  {
    icon: '&#128679;',
    title: 'Structure Boards',
    images: ['https://res.cloudinary.com/dterfi0mb/image/upload/v1781942759/IMG-20210426-WA1507_v5dmmx.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781942761/IMG-20210426-WA0434_nmq5nx.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781944141/WhatsApp_Image_2026-06-20_at_13.49.45_z4fbsp.jpg'],
  }, 
  {
    icon: '&#128679;',
    title: 'Pylon Boards',
    images: ['https://res.cloudinary.com/dterfi0mb/image/upload/v1781846247/WhatsApp_Image_2026-06-18_at_22.31.13_qkwux7.jpg'],
  },  
  {
    icon: '&#10024;',
    title: 'Neon & Acrylic Signs',
    images: ['https://res.cloudinary.com/dterfi0mb/image/upload/v1781943217/WhatsApp_Image_2026-06-20_at_13.43.18_dfjjnp.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781942761/IMG-20210427-WA0151_na6uh0.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781942762/20210929_184549_flyezz.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781942762/IMG_20230106_194014_ycpnhm.jpg',''],
  },
  {
    icon: '&#128250;',
    title: 'Digital LED Displays',
    images: ['https://res.cloudinary.com/dterfi0mb/image/upload/v1781871278/LED_Display_1_llyagr.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781871278/LED_Display_2_fv7fva.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781871278/LED_Display_3_syceeu.jpg'],
  },
  {
    icon: '&#128293;',
    title: 'Shop Front Boards',
    images: ['https://res.cloudinary.com/dterfi0mb/image/upload/v1781942759/IMG-20210426-WA1478_gxiage.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781942761/IMG-20210426-WA1382_vshc2d.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781942761/IMG-20210426-WA1320_vks9oi.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781942761/IMG-20210426-WA1322_ujjg3s.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781942760/IMG-20210426-WA1276_q8wcxx.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781942760/IMG-20210426-WA1544_ubj9xe.jpg'],
  },
  {
    icon: '&#129691;',
    title: 'Flex & Vinyl Boards',
    images: ['https://res.cloudinary.com/dterfi0mb/image/upload/v1781942760/IMG-20210426-WA1310_zugxcs.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781943070/WhatsApp_Image_2026-06-18_at_22.29.12_wqfqyn.jpg'],
  },
  {
    icon: '&#128081;',
    title: 'Interior Branding',
    images: ['https://res.cloudinary.com/dterfi0mb/image/upload/v1781942759/IMG-20210426-WA1167_cufnqv.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781942760/IMG-20210426-WA1137_m2xtmm.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781942759/IMG-20210426-WA1174_aegats.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781942760/IMG-20210426-WA1254_oihegv.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781942761/IMG-20210426-WA1432_b3tljp.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781942759/IMG-20210426-WA1139_vuzenp.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781943005/WhatsApp_Image_2026-06-18_at_22.09.04_uttvnm.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781944142/WhatsApp_Image_2026-06-20_at_13.48.41_p7fthd.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781944141/WhatsApp_Image_2026-06-20_at_13.57.14_of6men.jpg','https://res.cloudinary.com/dterfi0mb/image/upload/v1781944141/WhatsApp_Image_2026-06-20_at_13.48.57_y8fan2.jpg'],
  },
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'journey', label: 'Journey' },
  { id: 'process', label: 'Work Process' },
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
  'Deep expertise in LED, ACP, glow signs, neon boards and flex signage manufacturing.',
  'Serving small shops, restaurants, hospitals and large commercial buildings across multiple districts in Telangana.',
  'Most LED sign boards designed, fabricated and installed within 1 week.',
  'Every sign board comes with 12 months of free maintenance and after-sales support.',
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
      'Word of mouth spread quickly. We crossed our first 100 clients and hired our first team of 3 skilled fabricators.',
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
    shortYear: '2026',
    yearLabel: 'Today',
    title: '2000+ projects & still growing',
    description:
      '16+ years in, with 2000+ completed projects, a full-fledged manufacturing unit, and a team committed to quality and after-sales service.',
  },
];

export const CONTACT_INFO: ContactInfoItem[] = [
  {
    icon: '&#128205;',
    label: 'Location',
    value: 'Alkapuri Colony, Road No. 4, Karimnagar — 505001, Telangana',
    subtext: 'Serving Telangana &amp; Andhra Pradesh',
  },
  {
    icon: '&#128222;',
    label: 'Phone',
    value: '+91 99599 22757',
    subtext: 'Call or WhatsApp us',
    href: 'tel:+917702722757',
  },
  {
    icon: '&#9993;&#65039;',
    label: 'Email',
    value: 'rajusignboards@gmail.com',
    subtext: '',
    href: 'mailto:rajusignboards@gmail.com',
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

export const FOOTER_COMPANY = ['Home', 'Our Journey', 'Contact Us'];

export const FOOTER_CONTACTS: FooterContactItem[] = [
  {
    label: 'Address',
    value: 'Alkapuri Colony, Road No. 4,\nKarimnagar — 505001, Telangana',
  },
  { label: 'Phone', value: '+91 99599 22757' },
  { label: 'Email', value: 'rajusignboards@gmail.com' },
  { label: 'Hours', value: 'Mon - Sat: 9 AM - 7 PM\nSunday: Closed' },
];
