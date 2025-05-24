import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-4xl font-bold text-gold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-2 rounded" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-2 rounded" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full p-2 rounded" rows="5" required></textarea>
        <button type="submit" className="bg-gold text-black p-2 px-4 rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact;