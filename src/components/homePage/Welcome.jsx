import Button from '../ui/Button'
import banner from '../../assets/images/banner-bg.png'

const Welcome = () => (
  <section
    id="welcome"
    style={{ backgroundImage: `url(${banner})` }}
    className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-15 text-center text-white"
  >
    <div>
      <h1>
        We provide the best <strong>strategy</strong>
      </h1>
      <h2>
        to grow up your <strong>business</strong>
      </h2>
      <p className="mx-auto w-full py-30 md:w-1/2">
        Softy Pinko is a professional Bootstrap 4.0 theme designed by Template Mo for your company at absolutely free of charge
      </p>
      <Button variant="hero">discover more</Button>
    </div>
  </section>
)

export default Welcome
