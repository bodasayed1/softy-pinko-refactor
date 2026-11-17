import SectionTitle from '../components/ui/SectionTitle'
import quote from '../assets/images/testimonial-icon.png'

const testimonials = [
  {
    name: 'Catherine Soft',
    role: 'Managing Director',
    text: 'Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.',
  },
  {
    name: 'Kelvin Wood',
    role: 'Digital Marketer',
    text: 'Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.',
  },
  {
    name: 'David Martin',
    role: 'Website Manager',
    text: 'Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.',
  },
]

const initials = (name) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')

const Testimonials = () => (
  <section id="testi" className="my-48">
    <div className="container">
      <SectionTitle
        title="What do they say?"
        text="Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero."
      />

      <div className="mt-48 grid gap-30 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map(({ name, role, text }) => (
          <article
            key={name}
            className="group relative flex flex-col overflow-hidden rounded-card bg-white p-30 text-left shadow-soft transition-all before:absolute before:inset-x-0 before:top-0 before:h-4 before:bg-brand hover:-translate-y-10"
          >
            <div className="mb-24 flex h-56 w-56 items-center justify-center rounded-full bg-mist transition-all group-hover:bg-accent/15">
              <img src={quote} alt="" className="w-28" />
            </div>

            <p className="flex-1 leading-relaxed text-muted transition-all group-hover:text-ink">{text}</p>

            <div className="mt-24 flex items-center gap-15 border-t border-line pt-24 transition-all group-hover:translate-x-15">
              <span className="flex h-48 w-48 shrink-0 items-center justify-center rounded-full bg-brand font-medium text-white">
                {initials(name)}
              </span>
              <div>
                <h5 className="mb-0 text-[1.1rem]">{name}</h5>
                <p className="mb-0 text-[0.9rem] text-accent">{role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
