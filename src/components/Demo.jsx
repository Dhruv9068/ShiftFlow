import React, { useRef, useState } from 'react';

const Demo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullScreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="flex justify-center items-center bg-black m-0 p-0 overflow-hidden 
                    h-[50vh] md:h-screen lg:h-screen sm:h-[50vh] min-h-[50vh]">
      <div className="relative w-11/12 md:w-9/12 lg:w-9/12 border-8 border-blue-950 rounded-lg shadow-lg"
           style={{
             borderWidth: '10px',
             backgroundColor: '#101828',
             boxShadow: '0px 0px 15px 5px rgba(0, 30, 60, 0.5)',
           }}>
        
        {/* Browser dots */}
        <div className="absolute top-2 left-2 flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-lg"
          src="/ShiftFlowDemo.mp4"
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        >
          Your browser does not support the video tag.
        </video>

        {/* Play Button */}
        {!isPlaying && (
          <button
            onClick={handlePlayPause}
            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-full p-4"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-16 w-16 text-white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}

        {/* Video Controls */}
        <div className="absolute bottom-4 right-4 flex space-x-4">
          {/* Play/Pause Button */}
          <button onClick={handlePlayPause} className="bg-white bg-opacity-70 p-2 rounded-full">
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Mute/Unmute Button */}
          <button onClick={handleMuteToggle} className="bg-white bg-opacity-70 p-2 rounded-full">
            {isMuted ? (
              <img src="https://www.svgrepo.com/show/361390/unmute.svg" className="h-8 w-8 text-black" viewBox="0 0 24 24"/ >
                
              
            ) : (
              <img src="https://www.svgrepo.com/show/134645/mute.svg" className="h-8 w-8 text-black" viewBox="0 0 24 24"/>
              
              
            )}
          </button>

          {/* Fullscreen Button */}
          <button onClick={handleFullScreen} className="bg-white bg-opacity-70 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" viewBox="0 0 24 24">
              <path d="M5 5h4v4h-4v-4zm10 0h4v4h-4v-4zm0 10h4v4h-4v-4zm-10 0h4v4h-4v-4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Demo;
