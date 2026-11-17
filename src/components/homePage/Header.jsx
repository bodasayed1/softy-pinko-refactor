import { useState } from 'react'
import logo from '../../assets/images/logo.png'
import useActiveSection from '../../hooks/useActiveSection'

const links = [
  { id: 'welcome', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work Process' },
  { id: 'testi', label: 'Testimonials' },
  { id: 'price', label: 'Pricing Tables' },
  { id: 'blog', label: 'Blog Entries' },
  { id: 'contact', label: 'Contact Us' },
]

const ids = links.map(({ id }) => id)

const Header = () => {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  return (
    <header className="fixed inset-x-0 top-40 z-[100] mx-auto w-[calc(100%-24px)] max-w-[1140px] rounded-header border border-white/30 bg-white/65 px-25 py-15 shadow-soft backdrop-blur-[4.2px]">
      <div className="flex flex-wrap items-center justify-between">
        <a href="#welcome">
          <img src={logo} alt="Softy Pinko" />
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
          className="text-[1.8rem] text-main lg:hidden"
        >
          <i className={`bx ${open ? 'bx-x' : 'bx-menu'}`}></i>
        </button>

        <nav id="menu" className={`${open ? 'block' : 'hidden'} basis-full lg:block lg:basis-auto`}>
          <ul className="flex flex-col items-center pt-10 lg:flex-row lg:pt-0">
            {links.map(({ id, label }) => (
              <li
                key={id}
                className="relative after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-[70%] after:-translate-x-1/2 after:bg-line last:after:hidden lg:after:hidden"
              >
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block whitespace-nowrap px-10 py-8 text-[0.9rem] transition-all xl:px-12 xl:text-[1rem] ${
                    active === id ? 'text-accent' : 'text-muted hover:text-accent'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
