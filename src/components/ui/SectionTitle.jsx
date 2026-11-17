const SectionTitle = ({ title, text, light = false }) => (
  <div className={`text-center ${light ? 'text-white' : ''}`}>
    <h3>{title}</h3>
    <p className={`mx-auto mt-24 w-full max-w-[600px] ${light ? '' : 'text-muted'}`}>{text}</p>
  </div>
)

export default SectionTitle
