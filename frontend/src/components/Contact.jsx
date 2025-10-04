import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message saved successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to save message');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error occurred while sending');
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-white to-indigo-400 text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <p className="text-center text-gray-300 mb-12">
          I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1 transition-all"
          >
            Send Message
          </button>

          {status && <p className="text-center text-gray-400 mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
