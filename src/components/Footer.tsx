import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Uma Oil" className="h-12 w-auto rounded-[50%] object-contain bg-white" />
              <span className="text-2xl font-bold tracking-tight">Uma Oil</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Pure, natural, and healthy groundnut oil for your family. Tradition of quality since generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-3 text-slate-400">
              <li>Owner: Jatin Patel</li>
              <li>Near Vishnudham Temple, Kapadvanj, Modasa Road, Demai, Gujarat - 383330</li>
              <li>+91 94085 00689</li>
              <li></li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61586046502239" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/umagroundnutoil?igsh=MWdkZGk2Y3djdTNp" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Uma Groundnut Oil. All rights reserved. | Owned by Jatin Patel</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
