const AboutRow = ({ id, image, title, text, animation, reverse = false }) => (
  <div id={id} data-aos={animation} className="container mt-48">
    <div className="grid items-center gap-30 px-15 py-15 md:grid-cols-2 md:px-55">
      <img
        src={image}
        alt={title}
        className={`mx-auto md:mx-0 ${reverse ? 'md:order-2 md:ml-auto' : ''}`}
      />
      <div className={reverse ? 'md:order-1' : ''}>
        <h3>{title}</h3>
        <p className="mt-48 text-muted">{text}</p>
      </div>
    </div>
  </div>
)

export default AboutRow
