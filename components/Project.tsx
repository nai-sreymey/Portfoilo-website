import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-4"> projects:</h2>
        <p className="mb-10">
          I have worked on many projects over the course of being a Web
          Developer, here are a few of my live, real-world projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              <img src="/weater.png" alt="Weater" className="" />
            </div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Weater
            </h3>
            <p className="mb-4">
              Weater is an advanced weather tracking app that provides real-time
              weather data, forecasts, and alerts for your location.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              <img src="/bike.png" alt="Weater" className="" />
            </div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
             Bicycle
            </h3>
            <p className="mb-4">
  This high-quality bicycle is perfect for daily commuting and weekend rides.
  It features a lightweight frame, smooth gears, and comfortable seating.
  Grab yours today and enjoy the ride!
</p>

          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              <img src="/blog.png" alt="Weater" className="" />
            </div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
            Blog-web
            </h3>
            <p className="mb-4">
  Blog-web is an advanced blogging platform that provides tools for creating, managing, and sharing your blog content with ease.
</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              <img src="/fairy.png" alt="Weater" className="" />
            </div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
             Fairy-tale
            </h3>
            <p className="mb-4">
  Fairy-tale is an enchanting platform that brings magical stories to life, filled with whimsical characters, adventures, and timeless lessons for readers of all ages.
</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              <img src="/survey.png" alt="Weater" className="" />
            </div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
            Build Online Survey and Dashboard Display
            </h3>
            <p className="mb-4">
  Create custom online surveys to gather valuable insights from your users. 
  Use the dashboard display to visualize responses and analyze data in real-time 
  for better decision-making.
</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              <img src="/sala.png" alt="Weater" className="" />
            </div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
            Certificate-generation
            </h3>
            <p className="mb-4">
  Easily generate professional certificates for your events, courses, or achievements. 
  Customize templates and instantly deliver certificates to participants online.
</p>
          </div>
        
          

        
        </div>
      </div>
    </section>
  );
};

export default Projects;
