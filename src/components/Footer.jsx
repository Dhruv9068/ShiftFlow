const Footer = () => {
  return (
    <footer className="relative text-white py-10 px-6">
   
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Left Section: Logo */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-[#f9fafc] mb-4 font-fredoka">ShiftFlow</h1>
        </div>

        
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Bottom Section: Copyright */}
      <div className="text-center text-sm text-lightGray">
        &copy; {new Date().getFullYear()} ShiftFlow. All Rights Reserved.
      </div>
      
      {/* Designed By */}
      <div className="absolute bottom-4 right-6 text-white text-xs italic">
        Designed by Dhruv Chaturvedi
      </div>
     
    </footer>
  );
};

export default Footer;
