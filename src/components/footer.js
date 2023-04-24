import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-teal-500 py-8">
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center">
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
          <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
          <p className="text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
          <h3 className="text-white font-semibold text-lg mb-4">Links</h3>
          <ul>
            <li>
              <Link href="/" passHref>
                <div className="text-gray-200 hover:text-white">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/services" passHref>
                <div className="text-gray-200 hover:text-white">Services</div>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <div className="text-gray-200 hover:text-white">Contact Us</div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
          <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
          <p className="text-gray-200">Al Bustan.</p>
          <p className="text-gray-200">Ajman, 0000</p>
          <p className="text-gray-200">(971) 543-46785</p>
          <p className="text-gray-200">ashraf&EzzTech.com</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-200">&copy; 2023 Ajman Computers. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
