export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start justify-between gap-8">
        
        {/* kiri: logo / brand */}
        <div className="md:w-1/2">
          <div className="font-semibold text-lg text-blue-600">
            DisabilityMap
          </div>
          <p className="font-light text-xs text-black-600 mt-4">
            We connect you with cafés, restaurants, shops, and more that are designed to be accessible and inclusive. Our mission is to make it easier for everyone to find places where comfort and accessibility come first.
          </p>
        </div>

        {/* tengah: navigation */}
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Navigation</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="/about" className="hover:text-blue-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-600 transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* kanan: connect with us */}
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Connect with us</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* bawah: copyright */}
      <div className="text-sm text-gray-500 text-center mt-12">
        © {new Date().getFullYear()} DisabilityMap. All rights reserved.
      </div>
    </footer>
  );
}