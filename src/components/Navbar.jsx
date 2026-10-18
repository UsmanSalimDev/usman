import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useLayoutEffect(() => {
    const menu = menuRef.current
    if (!menu) return

    const items = menu.querySelectorAll('[data-menu-item]')
    gsap.killTweensOf([menu, items])

    if (isOpen) {
      gsap.set(menu, { visibility: 'visible' })
      gsap.fromTo(
        menu,
        { height: 0, autoAlpha: 0 },
        { height: 'auto', autoAlpha: 1, duration: 0.65, ease: 'power4.out' },
      )
      gsap.fromTo(
        items,
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.08, delay: 0.12, ease: 'power3.out' },
      )
    } else {
      gsap.to(menu, {
        height: 0,
        autoAlpha: 0,
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => gsap.set(menu, { visibility: 'hidden' }),
      })
    }
  }, [isOpen])

  const links = ['Home', 'About', 'Projects', 'Contact']

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="relative mx-auto w-[91%]  py-3">
        <div className="flex items-center justify-between">
          <a href="#home" aria-label="Go to home" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Logo" className="h-14 w-auto object-contain md:h-16" />
          </a>
          <button
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="navbar-menu"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white transition-colors hover:bg-zinc-950 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
          >
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
              <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${isOpen ? 'translate-y-[3.5px] rotate-45' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${isOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        <nav
          id="navbar-menu"
          ref={menuRef}
          aria-label="Main navigation"
          aria-hidden={!isOpen}
          className="absolute left-0 right-0 top-full overflow-hidden rounded-3xl bg-zinc-950 text-white shadow-2xl shadow-black/20"
          style={{ height: 0, visibility: 'hidden' }}
        >
          <div className="grid gap-8 px-7 py-8 sm:grid-cols-[1fr_auto] sm:px-12 sm:py-10">
            <div>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/45">Explore</p>
              <ul className="space-y-1">
                {links.map((link, index) => (
                  <li key={link} data-menu-item>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-baseline gap-4 py-1 text-3xl font-semibold tracking-tight transition-colors hover:text-white/60 sm:text-4xl"
                    >
                      <span className="text-xs font-normal text-white/35">0{index + 1}</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p data-menu-item className="self-end text-sm text-white/50 sm:max-w-40 sm:text-right">
              Let’s make something worth remembering.
            </p>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
