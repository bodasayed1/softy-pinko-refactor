import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'

const plans = [
  {
    name: 'Starter',
    price: '14.50',
    badge: 'bg-main',
    included: ['60 GB space', '600 GB transfer', 'Pro Design Panel'],
    excluded: ['15-minute support', 'Unlimited Emails', '24/7 Security'],
  },
  {
    name: 'Premium',
    price: '21.50',
    badge: 'bg-accent',
    included: ['120 GB space', '1200 GB transfer', 'Pro Design Panel', '15-minute support'],
    excluded: ['Unlimited Emails', '24/7 Security'],
  },
  {
    name: 'Advanced',
    price: '42.00',
    badge: 'bg-main',
    included: [
      '250 GB space',
      '5000 GB transfer',
      'Pro Design Panel',
      '15-minute support',
      'Unlimited Emails',
      '24/7 Security',
    ],
    excluded: [],
  },
]

const Price = () => (
  <section id="price" className="mt-48 bg-mist py-55">
    <div className="container">
      <SectionTitle
        title="Pricing Plans"
        text="Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat."
      />

      <div className="mt-48 grid gap-30 md:grid-cols-2 lg:grid-cols-3">
        {plans.map(({ name, price, badge, included, excluded }) => (
          <div
            key={name}
            className="group flex flex-col rounded-card bg-white p-30 text-center shadow-soft transition-all hover:-translate-y-15"
          >
            <p className="text-[1.1rem] font-medium">{name}</p>

            <div className={`mx-auto mb-30 w-[70%] rounded-card py-16 text-white shadow-soft ${badge}`}>
              <p className="mb-0 text-[2.1rem] font-medium leading-none">
                <span className="text-[1.3rem]">$</span> {price}
              </p>
              <small className="mt-8 block text-[0.9rem]">monthly</small>
            </div>

            <ul className="mx-auto mb-30 w-fit flex-1 space-y-12 text-left">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-10">
                  <i className="bx bx-check-circle text-[1.3rem] text-main"></i>
                  <span>{item}</span>
                </li>
              ))}
              {excluded.map((item) => (
                <li key={item} className="flex items-center gap-10 text-muted/60">
                  <i className="bx bx-x-circle text-[1.3rem]"></i>
                  <span className="line-through">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full group-hover:bg-accent">PURCHASE NOW</Button>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Price
