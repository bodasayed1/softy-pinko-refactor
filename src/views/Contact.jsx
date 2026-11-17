import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'

const field =
  'w-full rounded-card border border-[#ced4da] bg-white outline-none transition-all focus:border-main focus:ring-4 focus:ring-main/20'

const Contact = () => (
  <section id="contact" className="mt-100 bg-mist py-100 text-center">
    <div className="container">
      <div className="mb-50">
        <SectionTitle
          title="Talk To Us"
          text="Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat hendrerit semper."
        />
      </div>

      <div className="grid gap-30 md:grid-cols-3">
        <div className="text-left">
          <h3>Contact Info</h3>
          <p className="mt-24 text-muted">
            110-220 Quisque diam odio, maximus ac consectetur eu, 10260 auctor non lorem
          </p>
          <p className="mt-24 text-muted">
            You are NOT allowed to re-distribute Softy Pinko template on any template collection websites. Thank you.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="grid gap-16 sm:grid-cols-2 md:col-span-2">
          <input type="text" name="name" aria-label="Full Name" placeholder="Full Name" required className={`${field} p-10`} />
          <input type="email" name="email" aria-label="Email Address" placeholder="Email Address" required className={`${field} p-10`} />
          <textarea
            name="message"
            aria-label="Your Message"
            placeholder="Your Message"
            required
            className={`${field} h-150 resize-none p-20 sm:col-span-2`}
          />
          <Button type="submit" className="uppercase justify-self-center sm:col-span-2 md:justify-self-start">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  </section>
)

export default Contact
