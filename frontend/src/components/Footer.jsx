import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="p-3 border-t py-10 bg-gray-800 text-gray-300">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Explore</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Latest Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Popular Posts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Trending Topics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Categories
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Connect</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Write for Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Advertise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Newsletters
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Blogging Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Content Planning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Monetization Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blogging Tools
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">About</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      
    </>
  );
};

export default Footer;
