

const Demo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-8 md:py-16 bg-transparent">
      {/* Left Column: Video */}
      <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your_video_id" // Replace with your demo video URL
          title="Demonstration Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* Right Column: Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="https://www.y42.com/blog/_next/image?url=%2Fblog%2Fimages%2Fdata-pipeline.webp&w=3840&q=75"
          alt="Data Pipeline"
          className="rounded-lg shadow-lg w-full md:w-3/4" // Adjust width as needed
        />
      </div>
    </div>
  );
};

export default Demo;
