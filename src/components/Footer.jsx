import { ButtonPrimary } from "./Button";


const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Chapters',
    href: '#chapters'
  },
  {
    label: 'Events',
    href: '#events'
  },
  {
    label: 'Execom',
    href: '/execom'
  },
  {
    label: 'Gallery',
    href: '/gallery'
  },
  {
    label: 'Contact us',
    href: '#contact'
  } 
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ieee-student-branch-at-gtbit'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ieeegtbit'
  },
  {
    label: 'Twitter',
    href: '#'
  }
];


const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h2 className="headline-2 font-extrabold mb-8 lg:max-w-[20ch]">
            Advancing Technology for Humanity
            </h2>

            <ButtonPrimary
              href="mailto:ieeegtbit@gmail.com"
              label="Get in touch"
              icon="chevron_right"
              classes=""
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-2">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 mb-8 gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; 2025 <span className="text-zinc-200"><a href="https://www.linkedin.com/company/ieee-student-branch-at-gtbit/posts/?feedView=all" target="_blank" 
      rel="noopener noreferrer">IEEE GTBIT SB.</a></span> All rights reserved
          </p>
          <p className="text-zinc-500 text-sm">
  Developed by <span className="text-zinc-200"><a href="https://www.linkedin.com/in/jas-singh-ajmani"  target="_blank" 
      rel="noopener noreferrer">Jas Singh Ajmani</a></span> and <span className="text-zinc-200"><a href="https://www.linkedin.com/in/manrai-singh"  target="_blank" 
      rel="noopener noreferrer">Manrai Singh</a></span>
</p>

        </div>

      </div>
    </footer>
  )
}

export default Footer