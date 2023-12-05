import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white container mx-auto text-white">
      <div className="w-full mx-auto px-4 py-10 md:py-12">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/">
                <span className="flex items-center py-4 px-2 cursor-pointer font-semibold text-black text-lg">Bookka</span>
              </Link>
            <p className="text-gray-400 text-base">
              Simplifying your invoicing and bookkeeping experience.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-600 hover:text-black">Home</a></li>
                  <li><a href="#" className="text-base text-gray-600 hover:text-black">About</a></li>
                  <li><a href="#" className="text-base text-gray-600 hover:text-black">Services</a></li>
                  <li><a href="#" className="text-base text-gray-600 hover:text-black">Contact</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-600 hover:text-black">Privacy Policy</a></li>
                  <li><a href="#" className="text-base text-gray-600 hover:text-black">Terms of Use</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <li><p className="text-base text-gray-600">support@bookka.com</p></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Follow us</h3>
                <div className="mt-4 flex space-x-6">
                  {/* remember: Social media icons... */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-700">
          <p className="text-base text-gray-800 xl:text-center mb-3">Built With Love By Team Pegasus</p>
          <p className="text-base text-gray-800 xl:text-center">

            &copy; {new Date().getFullYear()} Bookka. All rights reserved. <Link href="https://ferratechnologies.com">Team Pegasus</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
