import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-6">
        <hr className="absolute top-0 left-0 w-full h-[4px] bg-gray-900 border-none" />
        
      {/* Background Image with Slight Blur */}
      <div
        
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/img/aboutus.jpg')",
          filter: "blur(3px)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-300 drop-shadow-[2px_2px_10px_rgba(0,0,0,0.8)]">
          ABOUT US
        </h1>
        <p className="text-xl md:text-2xl font-extrabold mb-6 text-black drop-shadow-[2px_2px_10px_rgba(0,0,0,0.8)]">
          <span className="text-[#ffff]">PreppedUP</span> is an AI-powered
          interview preparation platform designed to help job seekers master
          their skills.
        </p>

        <ul className="list-none space-y-3 text-xl font-extrabold text-black drop-shadow-[2px_2px_10px_rgba(0,0,0,0.8)]">
          <li>
            🚀 <span className="text-[#ffff]">AI-driven feedback</span> for
            better performance
          </li>
          <li>
            🎯 <span className="text-[#ffff]">Tailored mock interview</span>{" "}
            sessions
          </li>
          <li>
            📊{" "}
            <span className="text-[#ffff]">
              Data-backed improvement tracking
            </span>
          </li>
        </ul>

        <Link to="/generate">
          <Button className="mt-6 px-8 py-4 bg-[#ffff] hover:bg-[#b1abab] text-black font-extrabold rounded-lg shadow-xl transition-all text-lg cursor-pointer">
            Get Started <Sparkles className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
