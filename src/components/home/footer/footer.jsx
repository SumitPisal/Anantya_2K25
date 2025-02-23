// import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">


      <div className="footer-content flex flex-col items-center text-white">
        <aside className="footer-images flex flex-row items-center mb-6">
          <img src="/alogo.jpg" alt="Image 1" className="footer-image w-24 h-auto mb-4" />
          <img src="/pccoe_logo.png" alt="Image 2" className="footer-image w-24 h-auto" />
        </aside>
        <div className="flex justify-center text-white ">
          <h1 class="text-md font-extrabold text-center">Pimpri Chinchwad College of Engineering</h1>
      </div>
        <div className="border-t border-gray-100 pt-6 flex flex-col items-center">
          <p className='mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500'>Sector -26, Pradhikaran, Nigdi, Near Akurdi Railway Station, Pune - 411 044.</p>
          <br />
          <p className="mt-4 text-sm text-gray-500 sm:order-last sm:mt-0">
            © {new Date().getFullYear()} PCCOE COMPUTER-WEB TEAM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;