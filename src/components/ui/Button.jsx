const variants = {
  primary: 'bg-main px-20 py-10 hover:bg-accent',
  hero: 'border border-accent bg-accent px-15 py-10 uppercase hover:border-white hover:bg-main',
}

const Button = ({ children, variant = 'primary', type = 'button', className = '' }) => (
  <button
    type={type}
    className={`rounded-card text-white transition-all ${variants[variant]} ${className}`}
  >
    {children}
  </button>
)

export default Button
