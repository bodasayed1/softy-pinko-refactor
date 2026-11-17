import CountUp from '../components/ui/CountUp'
import circle from '../assets/images/circle-dec.png'
import background from '../assets/images/fun-facts-bg.png'

const facts = [
  { end: 126, label: 'Projects' },
  { end: 63, label: 'Happy Clients' },
  { end: 126, label: 'Awards Wins' },
  { end: 27, label: 'Countries' },
]

const Count = () => (
  <section
    id="count"
    style={{ backgroundImage: `url(${background})` }}
    className="bg-cover bg-center bg-no-repeat px-15 py-100 text-center md:px-50"
  >
    <div className="container grid gap-y-30 sm:grid-cols-2 md:grid-cols-4">
      {facts.map(({ end, label }, index) => (
        <div key={label} className="group flex items-center justify-center">
          <div className="cursor-pointer text-white transition-all group-hover:-translate-y-15">
            <p className="text-[2.2rem] font-medium tabular-nums">
              <CountUp end={end} />
            </p>
            <span>{label}</span>
          </div>

          {index < facts.length - 1 && (
            <img src={circle} alt="" className="ml-50 hidden lg:block xl:ml-100" />
          )}
        </div>
      ))}
    </div>
  </section>
)

export default Count
