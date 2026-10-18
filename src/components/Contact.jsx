import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowUpRight } from 'lucide-react'
import emailJsConfig, { isEmailJsConfigured } from '../config/email'
import './Contact.css'

const Contact = () => {
  const [isSending, setIsSending] = useState(false)
  const [feedback, setFeedback] = useState({ type: '', message: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!isEmailJsConfigured) {
      setFeedback({
        type: 'error',
        message: 'The message service is not configured yet. Please try again later.',
      })
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    setIsSending(true)
    setFeedback({ type: '', message: '' })

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.get('name'),
          reply_to: formData.get('email'),
          message: formData.get('message'),
        },
        { publicKey: emailJsConfig.publicKey },
      )
      form.reset()
      setFeedback({ type: 'success', message: 'Thanks for reaching out. Your message has been sent.' })
    } catch (error) {
      console.error('Unable to send contact form message:', error)
      setFeedback({
        type: 'error',
        message: 'Your message could not be sent. Please try again in a moment.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-orbit contact-orbit--one" aria-hidden="true" />
      <div className="contact-orbit contact-orbit--two" aria-hidden="true" />
      <div className="contact-orbit contact-orbit--three" aria-hidden="true" />
      <span className="contact-dot contact-dot--one" aria-hidden="true" />
      <span className="contact-dot contact-dot--two" aria-hidden="true" />
      <span className="contact-dot contact-dot--three" aria-hidden="true" />

      <div className="contact-shell">
        <p className="contact-eyebrow">HAVE A GOOD ONE IN MIND?</p>
        <h2>Contact Me<span>.</span></h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Name (e.g. Liam)"
            minLength={2}
            maxLength={100}
            required
          />

          <label className="sr-only" htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email (e.g. liam.dev@email.com)"
            maxLength={254}
            required
          />

          <label className="sr-only" htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Message (e.g. project details...)"
            minLength={10}
            maxLength={5000}
            rows={3}
            required
          />

          <div className="contact-form__bottom">
            <p
              className={`contact-feedback ${feedback.type ? `contact-feedback--${feedback.type}` : ''}`}
              role={feedback.type === 'error' ? 'alert' : 'status'}
              aria-live="polite"
            >
              {feedback.message}
            </p>
            <div className="contact-actions">
              <button type="submit" className="contact-submit" disabled={isSending}>
                {isSending ? 'Sending…' : 'Send Message'}
              </button>
              <a className="contact-connect" href="#contact-name">
                <span><ArrowUpRight size={20} aria-hidden="true" /></span>
                Let’s Connect
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
