import { Container } from "@/components/container";
import { MarqueImg } from "@/components/marquee-img";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-900 text-white">
      <Container>
        {/* Hero Section */}
        <div className="my-12 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold">
            <span className="text-cyan-300 md:text-8xl drop-shadow-lg">
              PreppedUp
            </span>
            <span className="text-gray-400 font-extrabold">&nbsp; A Smarter Way</span>
            <br />
            to Ace Interviews
          </h2>

          <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-2xl">
            Boost your interview skills and success rate with AI-driven insights.
            Prepare, practice, and stand out with confidence.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full mt-6 rounded-xl bg-gray-800 shadow-lg overflow-hidden relative">
          <img
            src="/assets/img/herosection.jpg"
            alt="Interview Preparation"
            className="w-full h-[420px] object-cover opacity-100 hover:opacity-100 transition-all"
          />

          <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/20 backdrop-blur-md text-gray-900 font-semibold">
            PreppedUp Interviews&copy;
          </div>

          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-4 rounded-md bg-white/20 backdrop-blur-md">
            <h2 className="text-black font-semibold text-xl">Developer</h2>
            <p className="text-sm text-gray-900">
              Take your coding interviews to the next level with real-time AI feedback.
              Get insights, improve responses, and boost your confidence.
            </p>
            <Link to="/generate">
          <Button className="mt-6 px-8 py-4 bg-[#ffff] hover:bg-[#b1abab] text-black font-extrabold rounded-lg shadow-xl transition-all text-lg cursor-pointer">
            Get Started <Sparkles className="ml-2" />
          </Button>
        </Link>
          </div>
        </div>
      </Container>

      {/* Marquee Section */}
      <div className="w-full my-12">
        <Marquee pauseOnHover gradient>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
        </Marquee>
      </div>

      {/* AI Insights Section */}
      <Container className="py-12 space-y-8">
        <h2 className="tracking-wide text-2xl md:text-3xl font-semibold text-center text-gray-300">
          Unleash your potential with personalized AI insights and targeted interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-3">
            <img
              src="/assets/img/office.jpg"
              alt="Office Environment"
              className="w-full max-h-96 rounded-md object-cover shadow-lg"
            />
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center text-center space-y-6">
            <p className="text-gray-300 text-lg">
              Unlock your full potential with AI-driven insights. Prepare, practice, and
              gain the confidence to ace your interviews!
            </p>

            {/* Start Button */}
            <Link to="/generate">
          <Button className="mt-6 px-8 py-4 bg-[#ffff] hover:bg-[#b1abab] text-black font-extrabold rounded-lg shadow-xl transition-all text-lg cursor-pointer">
            Get Started <Sparkles className="ml-2" />
          </Button>
        </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
