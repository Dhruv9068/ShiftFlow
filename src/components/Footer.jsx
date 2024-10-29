const Footer = () => {
  return (
    <footer className="relative text-white py-10 px-6">
   
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Left Section: Logo */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-[#f9fafc] mb-4 font-fredoka">ShiftFlow</h1>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-lightGray hover:text-neonBlue transition duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-lightGray hover:text-neonBlue transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lightGray hover:text-neonBlue transition duration-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Bottom Section: Copyright */}
      <div className="text-center text-sm text-lightGray">
        &copy; {new Date().getFullYear()} Aconews. All Rights Reserved.
      </div>
      
      {/* Designed By */}
      <div className="absolute bottom-4 right-6 text-white text-xs italic">
        Designed by Dhruv Chaturvedi
      </div>
     
    </footer>
  );
};

export default Footer;
