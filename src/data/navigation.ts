export interface NavItem {
  label: string;
  path: string;
}

export const navigationItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Our Work', path: '/our-work' },
  { label: 'Products', path: '/products' },
  { label: 'Contact', path: '/contact' },
];

export const footerLinks = {
  expertise: [
    { label: 'Agentic AI Systems', path: '/services#agentic-ai' },
    { label: 'Bespoke Software', path: '/services#custom-software' },
    { label: 'Product Engineering', path: '/services#saas-product' },
    { label: 'Mobile Applications', path: '/services#mobile-engineering' },
    { label: 'Cloud & Architecture', path: '/services#cloud-architecture' },
  ],
  information: [
    { label: 'About Us', path: '/about' },
    { label: 'Portfolio', path: '/our-work' },
    { label: 'Case Studies', path: '/our-work#case-studies' },
    { label: 'Products Suite', path: '/products' },
    { label: 'Contact Us', path: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/contact' },
    { label: 'Terms of Service', path: '/contact' },
    { label: 'Security & Compliance', path: '/contact' },
  ]
};

export const officeLocations = [
  {
    country: 'United Kingdom',
    title: 'Sci-Tech Daresbury',
    address: 'The Innovation Centre, Keckwick Lane, Daresbury, Cheshire, WA4 4FS',
    icon: 'apartment'
  },
  {
    country: 'United States',
    title: 'Irving, Texas',
    address: '320, Decker Drive, Suite #100, Irving Texas 75062',
    icon: 'location_city'
  },
  {
    country: 'India',
    title: 'New Delhi HQ',
    address: 'Plot No 70 Pocket 1, Jasola Vihar, New Delhi 110025',
    icon: 'corporate_fare'
  }
];

export const companyContact = {
  email: 'info@znsoftech.com',
  phone: '+91 9717 786 450',
  copyright: `© ${new Date().getFullYear()} Copyright by ZNSoftech Pvt. Ltd. All rights reserved.`
};
