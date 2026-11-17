const icons = ['bxl-html5', 'bxl-sass', 'bxl-react', 'bxl-javascript', 'bxs-file-json']

const Footer = () => (
  <footer id="footer" className="bg-brand py-50 text-center text-white">
    <div className="container">
      <div>
        {icons.map((icon) => (
          <i key={icon} className={`bx ${icon} px-10 text-[1.6rem]`}></i>
        ))}
      </div>
      <hr className="my-16 border-white/25" />
      <p>
        COPYRIGHT © 2023 SOFTY PINKO COMPANY - DESIGN: <span>BODA SAYED</span>
      </p>
    </div>
  </footer>
)

export default Footer
