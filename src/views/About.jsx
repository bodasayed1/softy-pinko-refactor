import AboutRow from '../components/aboutPage/AboutRow'
import left from '../assets/images/left-image.png'
import right from '../assets/images/right-image.png'

const About = () => (
  <>
    <AboutRow
      id="about"
      animation="fade-right"
      image={left}
      title="Let’s discuss about your project"
      text="Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper."
    />

    <hr className="container mt-48 w-[70%] border-line" />

    <AboutRow
      animation="fade-left"
      reverse
      image={right}
      title="We can help you to grow your business"
      text="Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit."
    />
  </>
)

export default About
