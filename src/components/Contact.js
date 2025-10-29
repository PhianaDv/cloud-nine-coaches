'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const serviceId = 'YOUR_SERVICE_ID'
      const templateId = 'YOUR_TEMPLATE_ID'
      const publicKey = 'YOUR_PUBLIC_KEY'

      await emailjs.send(serviceId, templateId, form, publicKey)
      alert('Thanks, your message was sent!')
      setForm({ user_name: '', user_email: '', user_phone: '', message: '' })
    } catch (error) {
      console.error('Email send error:', error)
      alert('Something went wrong, please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full max-w-screen-md mx-auto px-4 py-10 text-center space-y-6">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">
        Ready to book your luxury ride or have a question? Call or text us today!
      </p>

      {/* Phone Link */}
      <div className="space-y-2 text-xl font-semibold">
        <a
          href="tel:+13066414724"
          className="block text-black/70 hover:underline"
        >
          📞 Call (306) 641-4724
        </a>

        <a
          href="sms:+13066414724"
          className="block text-black/70 hover:underline"
        >
          💬 Text (306) 641-4724
        </a>
      </div>

      {/* Optional second number */}
      
      <p className="text-sm text-black/50">Hwy 52 West, Yorkton, Saskatchewan</p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-md mx-auto space-y-4 text-left"
        autoComplete="on"
      >
        <label className="block">
          Name
          <input
            type="text"
            name="user_name"
            value={form.user_name}
            onChange={handleChange}
            autoComplete="name"
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="Your full name"
          />
        </label>

        <label className="block">
          Email
          <input
            type="email"
            name="user_email"
            value={form.user_email}
            onChange={handleChange}
            autoComplete="email"
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          Phone
          <input
            type="tel"
            name="user_phone"
            value={form.user_phone}
            onChange={handleChange}
            autoComplete="tel"
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="(306) 123-4567"
          />
        </label>

        <label className="block">
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="Your message here"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-black/90 text-white py-2 px-6 rounded hover:bg-[#c4bc91] cursor-pointer transition disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}
