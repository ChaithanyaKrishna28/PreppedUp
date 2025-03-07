import { Linkedin, Github, Twitter } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-gray-900 text-white">
      {/* Top Separator Line */}
      

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-[2px_2px_10px_rgba(255,255,255,0.8)]">
        Contact Us
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-300 font-semibold mb-6 text-center max-w-2xl">
        Connect with us on professional platforms and explore our projects.
      </p>

      {/* Social Links */}
      <div className="flex space-x-8 text-3xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/chaithanya-krishna28/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
        >
          <Linkedin size={50} />
          <span className="text-xl font-bold hidden md:inline">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/chaithanyakrishna28"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-300 hover:text-gray-400 transition-all duration-300 transform hover:scale-110"
        >
          <Github size={50} />
          <span className="text-xl font-bold hidden md:inline">GitHub</span>
        </a>

        {/* Twitter (X) */}
        <a
          href="https://x.com/Chaithanya1082"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-300 hover:text-gray-400 transition-all duration-300 transform hover:scale-110"
        >
          <Twitter size={50} />
          <span className="text-xl font-bold hidden md:inline">Twitter</span>
        </a>
      </div>
      {/* Developer Credit */}
      <footer className="mt-8 text-sm text-gray-400">
        <p>Developed by <span className="font-semibold text-white">K.Chaithanya Krishna</span></p>
      </footer>
    </div>
  );
};

export default ContactUs;
