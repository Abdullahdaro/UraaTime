import styled from 'styled-components';
import Link from "next/link";
import Center from './Center';


const companyLinks = [
  { text: 'About', href: '#' },
  { text: 'Careers', href: '#' },
  { text: 'Mobile', href: '#' }
];

const contactLinks = [
  { text: 'Help/FAQ', href: '#' },
  { text: 'Press', href: '#' },
  { text: 'Affilates', href: '#' }
];

const moreLinks = [
  { text: 'Airlinefees', href: '#' },
  { text: 'Airline', href: '#' },
  { text: 'Low fare tips', href: '#' }
];

const LogoFooter = styled(Link)`
  position: relative;
  width: 25%;
  z-index: 3;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-4 max-md:w-full">
    <h3 className="text-xl font-medium text-gray-500">{title}</h3>
    <ul className="flex flex-col gap-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className="text-gray-500 hover:text-gray-700">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const AppDownload = () => (
  <div className="flex flex-col grow shrink items-start rounded-none max-w-[240px] w-[144px] max-md:items-center">
    <div className="flex gap-6 items-center">
      <a href="#" aria-label="Follow us on Facebook">
        <svg className="w-8 h-8 text-gray-500 hover:text-gray-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
        </svg>
      </a>
      <a href="#" aria-label="Follow us on Instagram">
        <svg className="w-8 h-8 text-gray-500 hover:text-gray-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>
      <a href="#" aria-label="Connect with us on LinkedIn">
        <svg className="w-8 h-8 text-gray-500 hover:text-gray-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
    </div>
    <h2 className="mt-9 text-3xl font-medium tracking-normal leading-none text-gray-500">
      Follow Us
    </h2>
  </div>
);

function Footer() {
  return (
    <footer className="w-full bg-rose-200 py-12 mt-[665px] max-md:mt-10">
      <Center>
        <div className="flex flex-wrap gap-9 justify-between items-center px-6 max-md:px-5">
          <div className="flex flex-wrap justify-end items-end gap-16 w-full max-md:gap-8">
            <LogoFooter href="/" className="max-md:w-full">
              <img src="/logo.svg" alt="logo" className="w-[350px] max-md:mx-auto max-md:w-[250px]" />
            </LogoFooter>

            <nav className="flex justify-between flex-wrap flex-1 max-md:justify-between">
              <FooterColumn title="Company" links={companyLinks} />
              <FooterColumn title="Contact" links={contactLinks} />
              <FooterColumn title="More" links={moreLinks} />
            </nav>

            <AppDownload />
          </div>

          <p className="text-xl font-medium text-gray-500 w-full text-center mt-8">
            All rights abode.morx@gmail.com
          </p>
        </div>
      </Center>
    </footer>
  );
}

export default Footer;