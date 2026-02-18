
import React from 'react';
import Link from 'next/link';

const FooterMenu = () => {
  // const footerSections = [
  //   {
  //     title: 'Information',
  //     links: [
  //       { name: 'About Us', href: '#' },
  //       { name: 'About Zip', href: '#' },
  //       { name: 'Privacy Policy', href: '/privacy-policy' },
  //       { name: 'Search', href: '/search' },
  //       { name: 'Terms', href: '/terms' },
  //       { name: 'Orders and Returns', href: '/orders-returns' },
  //       { name: 'Contact Us', href: '/contact-us' },
  //       { name: 'Advanced Search', href: '/advanced-search' },
  //       { name: 'Newsletter Subscription', href: '/newsletter' },
  //     ],
  //   },
  //   {
  //     title: 'PC Parts',
  //     links: [
  //       { name: 'CPU', href: '/pc-parts/cpu' },
  //       { name: 'Add On Cards', href: '/pc-parts/add-on-cards' },
  //       { name: 'Hard Drives (Intel)', href: '/pc-parts/hard-drives' },
  //       { name: 'Graphic Cards', href: '/pc-parts/graphic-cards' },
  //       { name: 'Keyboards / Mice', href: '/pc-parts/keyboards-mice' },
  //       { name: 'Cables / Power Supplies / Cooling', href: '/pc-parts/cables-psu-cooling' },
  //       { name: 'RAM (Memory)', href: '/pc-parts/ram' },
  //       { name: 'Software', href: '/pc-parts/software' },
  //       { name: 'Speakers / Headsets', href: '/pc-parts/speakers-headsets' },
  //       { name: 'Motherboards', href: '/pc-parts/motherboards' },
  //     ],
  //   },
  //   {
  //     title: 'Desktop PCs',
  //     links: [
  //       { name: 'Custom PCs', href: '/desktop-pcs/custom' },
  //       { name: 'Servers', href: '/desktop-pcs/servers' },
  //       { name: 'MSI AI-in-One PCs', href: '/desktop-pcs/msi-aio' },
  //       { name: 'HP/Compaq PCs', href: '/desktop-pcs/hp-compaq' },
  //       { name: 'ASUS PCs', href: '/desktop-pcs/asus' },
  //       { name: 'Tesc PCs', href: '/desktop-pcs/tesc' },
  //     ],
  //   },
  //   {
  //     title: 'Laptops',
  //     links: [
  //       { name: 'Everyday use Notebooks', href: '/laptops/everyday' },
  //       { name: 'MSI Workstation Series', href: '/laptops/msi-workstation' },
  //       { name: 'MSI Prestige Series', href: '/laptops/msi-prestige' },
  //       { name: 'Tablets and Pods', href: '/laptops/tablets-pods' },
  //       { name: 'Networks', href: '/laptops/networks' },
  //       { name: 'Infinity Gaming Notebooks', href: '/laptops/infinity-gaming' },
  //     ],
  //   },
  // ];

  const footerSections = [
    {
      title: 'Information',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'About Zip', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Search', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Orders and Returns', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Advanced Search', href: '#' },
        { name: 'Newsletter Subscription', href: '#' },
      ],
    },
    {
      title: 'PC Parts',
      links: [
        { name: 'CPU', href: '#' },
        { name: 'Add On Cards', href: '#' },
        { name: 'Hard Drives (Intel)', href: '#' },
        { name: 'Graphic Cards', href: '#' },
        { name: 'Keyboards / Mice', href: '#' },
        { name: 'Cables / Power Supplies / Cooling', href: '#' },
        { name: 'RAM (Memory)', href: '#' },
        { name: 'Software', href: '#' },
        { name: 'Speakers / Headsets', href: '#' },
        { name: 'Motherboards', href: '#' },
      ],
    },
    {
      title: 'Desktop PCs',
      links: [
        { name: 'Custom PCs', href: '#' },
        { name: 'Servers', href: '#' },
        { name: 'MSI AI-in-One PCs', href: '#' },
        { name: 'HP/Compaq PCs', href: '#' },
        { name: 'ASUS PCs', href: '#' },
        { name: 'Tesc PCs', href: '#' },
      ],
    },
    {
      title: 'Laptops',
      links: [
        { name: 'Everyday use Notebooks', href: '#' },
        { name: 'MSI Workstation Series', href: '#' },
        { name: 'MSI Prestige Series', href: '#' },
        { name: 'Tablets and Pods', href: '#' },
        { name: 'Networks', href: '#' },
        { name: 'Infinity Gaming Notebooks', href: '#' },
      ],
    },
];

  return (
    <footer className="pt-12 pb-6">
      <div className="container flex mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm hover:text-gray-300 text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
<div className="grid text-white grid-cols-1 gap-4">
  {/* Address Section */}
  <div>
    <h3 className="text-white font-semibold text-lg mb-2">Address</h3>
    <p className="text-sm mb-2">
      1234 Street Address City Address, 1234
    </p>
    <p className="text-sm">
  Phone:{' '}
  <a 
    href="mailto:shop@email.com" 
    className="text-black hover:text-gray-700 transition-colors duration-200"
  >
    (00) 1234 5678
  </a>
</p>
    <p className="text-sm mb-1">We are open:</p>
    <div className="text-sm space-y-1">
      <p>Monday–Thursday: 8:00 AM – 5:30 PM</p>
      <p>Friday: 8:00 AM – 6:00 PM</p>
      <p>Saturday: 11:00 AM – 5:00 PM</p>
    </div>
    <p className="text-sm">
  E-mail:{' '}
  <a 
    href="mailto:shop@email.com" 
    className="text-black hover:text-gray-700 transition-colors duration-200"
  >
    shop@email.com
  </a>
</p>
    <p className="text-sm font-medium">BHD: BHD</p>
  </div>
</div>
      </div>
    </footer>
  );
};

export default FooterMenu;