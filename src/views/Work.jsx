import SectionTitle from '../components/ui/SectionTitle'
import rocket from '../assets/images/work-process-item-01.png'
import background from '../assets/images/work-process-bg.png'

const steps = Array(6).fill({ title: 'Get Ideas', text: 'Godard pasbst parism fam cliche.' })

const Work = () => (
  <section
    id="work"
    style={{ backgroundImage: `url(${background})` }}
    className="my-55 bg-cover bg-center bg-no-repeat px-15 py-100 text-center md:px-50"
  >
    <div className="container">
      <SectionTitle
        light
        title="Work Process"
        text="Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam."
      />

      <div className="mt-48 grid gap-x-15 gap-y-30 md:grid-cols-3 lg:grid-cols-6">
        {steps.map(({ title, text }, index) => (
          <div
            key={index}
            className="group relative rounded-card bg-white p-20 shadow-[0_2px_48px_0_rgb(0_0_0/8%)] transition-all after:absolute after:inset-x-0 after:-bottom-10 after:h-full after:rounded-card after:bg-white/15 hover:-translate-y-15"
          >
            <img src={rocket} alt="" className="mx-auto" />
            <h5 className="py-10 transition-all group-hover:text-accent">{title}</h5>
            <p className="text-muted transition-all group-hover:text-ink">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Work
