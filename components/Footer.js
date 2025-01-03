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
const Logo = styled(Link)`
  position: relative;
  width: 100px;
  z-index: 3;
`;
function Footer() {
  return (
    <div className="flex flex-wrap gap-9 justify-center items-start px-6 py-8 w-full bg-rose-200 min-h-[323px] mt-[665px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <Center>
        <div className='flex flex-wrap gap-0 justify-center items-start'>
          <Logo href={'/'}>
            <img src="/logo.svg" alt="logo" />
          </Logo>
          <nav className="grow shrink rounded-none min-w-[240px] w-[576px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <p title="Company" links={companyLinks} />
              <p title="Contact" links={contactLinks} />
              <p title="More" links={moreLinks} />
            </div>
          </nav>
          <div className="flex flex-col grow shrink items-start rounded-none min-w-[240px] w-[231px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/acc23c37f56d4f124e9e9f664dee6638e2d6760f55409f2988eae249941e962b?placeholderIfAbsent=true&apiKey=7aacf0f7643c4dbcb219cdce1a623eb9" alt="App discovery illustration" className="object-contain max-w-full aspect-[3.92] w-[235px]" />
              <h2 className="mt-9 text-3xl font-medium tracking-normal leading-none text-gray-500">
                  Discover our app
              </h2>
              <div className="flex gap-2.5 self-stretch mt-6">
                  <a href="#" aria-label="Download on the App Store">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/10c0df708432d55e47973f5a73c99c8864255fc84a9388be84f75f2f84a98849?placeholderIfAbsent=true&apiKey=7aacf0f7643c4dbcb219cdce1a623eb9" alt="" className="object-contain shrink-0 max-w-full rounded-none aspect-[3.04] w-[143px]" />
                  </a>
                  <a href="#" aria-label="Get it on Google Play">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0c1b3f0db3e7db43e06a1f48a1a06bc50de03e32715642d6f01f64b28ea040?placeholderIfAbsent=true&apiKey=7aacf0f7643c4dbcb219cdce1a623eb9" alt="" className="object-contain shrink-0 max-w-full rounded-none aspect-[2.83] w-[133px]" />
                  </a>
              </div>
          </div>
          <p className="text-xl font-medium leading-none text-gray-500">
            All rights reserved@jadoo.co
          </p>
        </div>
      </Center>
    </div>
  );
}

export default Footer;