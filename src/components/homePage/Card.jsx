import icon from '../../assets/images/featured-item-01.png'

const cards = [
  { title: 'Modern Strategy', text: 'Customize anything in this template to fit your website needs' },
  { title: 'Best Relationship', text: 'Contact us immediately if you have a question in mind' },
  { title: 'Ultimate Marketing', text: 'You just need to tell your friends about our free templates' },
]

const Card = () => (
  <section className="container relative z-10 -mt-220 grid gap-30 pb-30 pt-30 md:grid-cols-2 lg:grid-cols-3">
    {cards.map(({ title, text }) => (
      <div
        key={title}
        className="group rounded-card bg-white p-30 text-center shadow-soft transition-all hover:-translate-y-10"
      >
        <div className="mx-auto mb-30 h-90 w-90 rounded-full bg-main p-20 transition-all group-hover:bg-accent">
          <img src={icon} alt="" />
        </div>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    ))}
  </section>
)

export default Card
