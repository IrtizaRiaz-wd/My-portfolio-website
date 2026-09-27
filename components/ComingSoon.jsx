import Link from 'next/link';

const themes = {
  nova: {
    section: 'bg-nova-50',
    kicker: 'text-nova-accent',
    heading: 'text-nova-900',
    text: 'text-gray-600',
    badge: 'bg-nova-accent text-white',
    primary: 'bg-nova-900 text-white hover:bg-nova-accent',
    secondary: 'border-2 border-nova-900 text-nova-900 hover:bg-nova-900 hover:text-white',
  },
  vanta: {
    section: 'bg-vanta-900',
    kicker: 'text-vanta-accent',
    heading: 'text-white',
    text: 'text-white/70',
    badge: 'bg-vanta-accent text-white',
    primary: 'bg-vanta-accent text-white hover:bg-red-700',
    secondary: 'border-2 border-white text-white hover:bg-white/10',
  },
  iron: {
    section: 'bg-iron-900',
    kicker: 'text-iron-accent',
    heading: 'text-white',
    text: 'text-white/70',
    badge: 'bg-iron-accent text-white',
    primary: 'bg-iron-accent text-white hover:bg-red-700',
    secondary: 'border-2 border-white text-white hover:bg-white/10',
  },
  northline: {
    section: 'bg-northline-50',
    kicker: 'text-northline-gold',
    heading: 'text-northline-navy',
    text: 'text-gray-600',
    badge: 'bg-northline-navy text-northline-cream',
    primary: 'bg-northline-navy text-white hover:opacity-90',
    secondary: 'border-2 border-northline-navy text-northline-navy hover:bg-northline-navy hover:text-white',
  },
  velocity: {
    section: 'bg-velocity-900',
    kicker: 'text-velocity-accent',
    heading: 'text-white',
    text: 'text-white/70',
    badge: 'bg-velocity-accent text-white',
    primary: 'bg-velocity-accent text-white hover:bg-red-700',
    secondary: 'border-2 border-white text-white hover:bg-white/10',
  },
  northstar: {
    section: 'bg-northstar-900',
    kicker: 'text-northstar-accent',
    heading: 'text-white',
    text: 'text-white/70',
    badge: 'bg-northstar-accent text-white',
    primary: 'bg-northstar-accent text-white hover:bg-indigo-500',
    secondary: 'border-2 border-northstar-accent2 text-white hover:bg-northstar-accent2',
  },
};

export default function ComingSoon({ site, home, page, theme }) {
  const t = themes[theme] || themes.nova;

  return (
    <section className={`${t.section} py-32 md:py-48 text-center`}>
      <div className="max-w-3xl mx-auto px-4">
        <span className={`${t.badge} inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full`}>
          Coming Soon
        </span>
        <h1 className={`text-5xl md:text-6xl font-black mt-8 mb-4 ${t.heading}`}>
          {page}
        </h1>
        <p className={`text-lg font-semibold mb-4 ${t.kicker}`}>{site}</p>
        <p className={`mb-12 ${t.text}`}>
          This page is under construction. Check back soon, or explore the rest of the site.
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <Link
            href={home}
            className={`px-8 py-4 rounded font-bold transition ${t.primary}`}
          >
            Back to {site}
          </Link>
          <Link
            href="/"
            className={`px-8 py-4 rounded font-bold transition ${t.secondary}`}
          >
            Main Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
