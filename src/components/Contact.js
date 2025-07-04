import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

function Contact() {
  return (
    <section id="contact" className="p-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left Side - Contact Info */}
        <div>
          <p className="mb-8">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and innovation. Feel free to reach out!
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FiMail className="text-2xl text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p>yerramsettibindu19@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FiPhone className="text-2xl text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p>(667) 802-7331</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FiMapPin className="text-2xl text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p>Baltimore, MD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Tell me about your project or opportunity..."
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            ></textarea>
          </div>

          <button className="flex items-center justify-center space-x-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
            <FiSend />
            <span>Send Message</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
