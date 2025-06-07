import { FaYoutube, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-800 pt-20 pb-10 ">
      {/* Background blob */}
      <div className="absolute left-0 bottom-0 w-60 h-60 bg-blue-100 rounded-full mix-blend-multiply blur-2xl opacity-30 -z-10"></div>
      <div className="absolute left-40 bottom-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply blur-2xl opacity-20 -z-10"></div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-gray-200">
        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-green-400 mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-zin-100">
            <li>Psychiatric Care and Therapy</li>
            <li>Addiction Recovery</li>
            <li>MicroTherapy™</li>
            <li>Group Therapy</li>
            <li>Ongoing Care</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-green-400">Company</h4>
          <ul className="space-y-2 text-sm cursor-pointer ">
            <li className="hover:underline underline-offset-2 ">About</li>
            <li className="hover:underline underline-offset-2 ">Podcasts</li>
            <li className="hover:underline underline-offset-2 ">Blog</li>
            <li className="hover:underline underline-offset-2 ">Refer a Patient</li>
            <li className="hover:underline underline-offset-2 ">Careers</li>
            <li className="hover:underline underline-offset-2 ">Prescription Policy</li>
            <li className="hover:underline underline-offset-2 ">Mindful Care Policies and Informed Consent</li>
            <li className="hover:underline underline-offset-2 ">Terms</li>
            <li className="hover:underline underline-offset-2 ">ASL</li>
            <li className="hover:underline underline-offset-2 ">Privacy</li>
            <li className="hover:underline underline-offset-2 ">Do Not Sell My Personal Information</li>
            <li className="hover:underline underline-offset-2 ">Privacy Notice</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-4xl font-semibold mb-4 text-green-400">Social</h4>
          <div className="flex flex-col space-y-4 text-xl">
            <FaYoutube />
            <FaTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            <FaTiktok />
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 mt-16 px-6">
        <p className="text-center md:text-left">© 2025 Mindspace, Inc.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span>Call us Today: 516-505-7200</span>
          <span className="cursor-pointer">Sign In</span>
          <span className="cursor-pointer">Get Started</span>
        </div>
      </div>
    </footer>
  );
}
