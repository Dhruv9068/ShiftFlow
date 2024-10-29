import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Header = () => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const closeNavigation = () => {
    enablePageScroll();
    setOpenNavigation(false);
  };

  useEffect(() => {
    setShowLinks(true);
  }, []);

  return (
    <div className="w-full z-50 transition-all duration-300 ease-in-out bg-transparent text-white">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10">
        <Link to="/" className="w-[250px] h-[100px] xl:mr-8 flex items-center justify-center transform transition-transform hover:scale-110 font-fredoka font-bold">
        <div>
      <span className="text-[#E0E0E0] text-4xl font-bold relative inline-block lightning-effect" data-text="ShiftFlow">
        ShiftFlow
      </span>

      <style >{`
        .lightning-effect {
          position: relative;
          display: inline-block;
          animation: lightning 3s infinite alternate;
        }

        .lightning-effect:before {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          text-shadow: 
            0 0 10px rgba(0, 204, 255, 0.5),
            0 0 20px rgba(0, 204, 255, 0.5),
            0 0 30px rgba(0, 204, 255, 0.5);
          z-index: -1;
          filter: blur(5px);
          animation: flicker 1.5s infinite alternate;
        }

        @keyframes lightning {
          0% {
            text-shadow: 
              0 0 10px rgba(0, 204, 255, 0.5),
              0 0 20px rgba(0, 204, 255, 0.5),
              0 0 30px rgba(0, 204, 255, 0.5);
          }
          50% {
            text-shadow: 
              0 0 20px rgba(0, 204, 255, 1),
              0 0 30px rgba(0, 204, 255, 1),
              0 0 40px rgba(0, 204, 255, 1);
          }
        }

        @keyframes flicker {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  
        </Link>

        <div className="flex items-center ml-auto space-x-10 lg:space-x-20">
          <button
            className="lg:hidden px-3 py-2 transition-transform hover:scale-105 z-60"
            onClick={toggleNavigation}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <nav
            className={`${openNavigation ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row fixed top-0 left-0 right-0 bottom-0 ${openNavigation ? 'bg-gradient-to-r from-blue-800 to-blue-800' : 'bg-gradient-to-r from-gray-800 to-blue-900'} lg:bg-transparent border-spacing-1 lg:relative lg:w-auto w-full items-center z-50`}
            style={{
              width: openNavigation ? '100vw' : 'auto',
              height: openNavigation ? '100vh' : 'auto',
              top: openNavigation ? '0' : 'auto',
              left: openNavigation ? '0' : 'auto',
              right: openNavigation ? '0' : 'auto',
              bottom: openNavigation ? '0' : 'auto',
            }}
          >
            <button
              className="lg:hidden absolute top-4 right-10 p-3 transition-transform hover:scale-105 z-60 bg-white rounded-full shadow-lg"
              onClick={closeNavigation}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div
              className={`flex flex-col lg:flex-row items-center justify-center lg:space-x-6 py-10 lg:py-0 transition-opacity duration-500 ease-out ${showLinks ? 'opacity-100' : 'opacity-0'}`}
            >
              <Link
                to="/#home"
                onClick={closeNavigation}
                className={`relative block text-2xl lg:text-xs uppercase font-semibold transition-all duration-300 transform hover:scale-110 px-6 py-3 ${location.pathname === '/' ? 'text-yellow-300' : 'lg:text-white text-gray-200'}`}
              >
                Home
                <span className="absolute inset-0 border border-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
              </Link>

              <a
                href="#how-to-use"
                onClick={closeNavigation}
                className={`relative block text-2xl lg:text-xs uppercase font-semibold transition-all duration-300 transform hover:scale-110 px-6 py-3 ${location.hash === '#how-to-use' ? 'text-yellow-300' : 'lg:text-white text-gray-200'}`}
              >
                How to Use
                <span className="absolute inset-0 border border-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
              </a>

              <a
                href="#features"
                onClick={closeNavigation}
                className={`relative block text-2xl lg:text-xs uppercase font-semibold transition-all duration-300 transform hover:scale-110 px-6 py-3 ${location.hash === '#features' ? 'text-yellow-300' : 'lg:text-white text-gray-200'}`}
              >
                Features
                <span className="absolute inset-0 border border-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
              </a>

              <Link
                 to="/VisualiseCanvas"
                onClick={closeNavigation}
                className={`relative block text-2xl lg:text-xs uppercase font-semibold transition-all duration-300 transform hover:scale-110 px-6 py-3 ${location.pathname === '/' && location.hash === '#interactive-demo' ? 'text-yellow-300' : 'lg:text-white text-gray-200'}`}
              >
                Get Started
                <span className="absolute inset-0 border border-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
