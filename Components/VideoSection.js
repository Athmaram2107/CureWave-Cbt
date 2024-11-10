import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-[#F0E68C] ">
      <div className="container mx-auto px-4">
        <div className="relative" style={{ paddingBottom: "5%", height: 0 }}>
          <iframe
            className="absolute top-0 left-96 w-3/6 h-1/2"
            src="https://www.youtube.com/embed/FEEmD7ngx6U?autoplay=1&loop=1&playlist=FEEmD7ngx6U" // Replace with your video ID
            title="Cognitive Therapy Video"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            muted // Video will autoplay with mute on to avoid user interaction needed for autoplay
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
