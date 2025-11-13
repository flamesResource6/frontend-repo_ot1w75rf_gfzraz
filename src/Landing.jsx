import React from 'react'
import { Link } from 'react-router-dom'

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-[1200px] px-5 ${className}`}>{children}</div>
)

const PrimaryButton = ({ children, href }) => (
  href ? (
    <a href={href} className="inline-flex items-center justify-center rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,#173653_0%,#1B3E5F_100%)] text-[#E9EEF3] px-5 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all hover:brightness-110 hover:shadow-[0_10px_28px_rgba(0,0,0,0.45)]">
      {children}
    </a>
  ) : (
    <button className="inline-flex items-center justify-center rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,#173653_0%,#1B3E5F_100%)] text-[#E9EEF3] px-5 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all hover:brightness-110 hover:shadow-[0_10px_28px_rgba(0,0,0,0.45)]">
      {children}
    </button>
  )
)

const SecondaryButton = ({ children, to }) => (
  <Link to={to} className="inline-flex items-center justify-center rounded-[16px] border border-white/10 text-[#C7D1DC] px-5 py-3 bg-white/0 backdrop-blur hover:bg-white/5 transition-colors">
    {children}
  </Link>
)

const GlassCard = ({ children, className = '' }) => (
  <div className={`relative rounded-[16px] border border-white/10 bg-[rgba(12,18,26,0.6)] backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.4)] ${className}`}>
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/6" />
    {children}
  </div>
)

const Section = ({ children, className = '' }) => (
  <section className={`py-24 md:py-24 ${className}`}>{children}</section>
)

const Divider = () => (
  <div className="my-12 h-px w-full bg-white/6" />
)

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#C7D1DC] selection:bg-[#173653] selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[#0B0F14]/70">
        <Container className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-[#173653]" />
            <span className="text-sm text-[#8FA0B1]">AI Website Builder</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#8FA0B1]">
            <a href="#what" className="hover:text-[#E9EEF3] transition-colors">What you get</a>
            <a href="#how" className="hover:text-[#E9EEF3] transition-colors">How it works</a>
            <a href="#work" className="hover:text-[#E9EEF3] transition-colors">Work</a>
            <a href="#start" className="hover:text-[#E9EEF3] transition-colors">Start</a>
            <Link to="/app" className="text-[#E9EEF3]">Open App</Link>
          </nav>
        </Container>
        <div className="h-px w-full bg-white/6" />
      </header>

      {/* Hero */}
      <Section>
        <Container className="grid grid-cols-1 gap-8">
          <div className="max-w-[860px]">
            <div className="text-[12px] leading-4 tracking-[0.08em] uppercase text-[#8FA0B1] mb-3">AI Website Builder</div>
            <h1 className="text-[#E9EEF3] text-[56px] leading-[64px] font-bold tracking-[-0.02em]">
              Build sites with taste. Not templates.
            </h1>
            <p className="mt-4 text-[16px] leading-[26px] text-[#C7D1DC] max-w-[720px]">
              A design-led agent that turns structure into crafted pages—clean spacing, real hierarchy, minimal noise.
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <PrimaryButton href="#start">Start a build</PrimaryButton>
              <SecondaryButton to="/app">See a live example</SecondaryButton>
            </div>
            <p className="mt-4 text-[14px] leading-[22px] text-[#8FA0B1]">No code scaffolding. Real layout decisions.</p>
          </div>

          <GlassCard className="mt-8 p-6">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#9FD4FF]/10 blur-3xl" />
            <div className="relative grid grid-cols-12 gap-2 rounded-[12px] border border-white/10 p-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-48 bg-white/[0.02] rounded-[10px] border border-white/5" />
              ))}
            </div>
            <div className="mt-4 text-[12px] text-[#8FA0B1]">Annotated: Grid • Spacing • Copy blocks</div>
          </GlassCard>
        </Container>
      </Section>

      {/* What you get */}
      <Section className="pt-0" id="what">
        <Container>
          <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.01em] text-[#E9EEF3]">What you get</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: 'Structure-first',
              copy: 'You define intent; it builds a strong hierarchy—pages that read cleanly.',
            },{
              title: 'Layout discipline',
              copy: 'Spacing and grids applied with intention. No bloated sections.',
            },{
              title: 'Real copy',
              copy: 'Concise, human text. No buzzword filler.',
            }].map((c) => (
              <GlassCard key={c.title} className="p-5">
                <h3 className="text-[22px] leading-[30px] font-semibold text-[#E9EEF3]">{c.title}</h3>
                <p className="mt-2 text-[16px] leading-[26px]">{c.copy}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section id="how">
        <Container>
          <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.01em] text-[#E9EEF3]">From idea to live page</h2>
          <div className="mt-6 h-2 w-full rounded-full bg-white/5">
            <div className="h-2 w-2/3 rounded-full bg-[#5FA6D8]" />
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{
              n: 1, t: 'Define intent', c: 'Describe your site in plain language.'
            },{ n: 2, t: 'Shape structure', c: 'Pick what matters. We collapse the rest.'
            },{ n: 3, t: 'Compose sections', c: 'Refine copy, grid, spacing—fast.'
            },{ n: 4, t: 'Publish', c: 'Export clean code or deploy.'
            }].map((s) => (
              <GlassCard key={s.n} className="p-5">
                <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-[12px] border border-white/10 bg-white/5 text-[12px]">{s.n}</div>
                <h3 className="text-[22px] leading-[30px] font-semibold text-[#E9EEF3]">{s.t}</h3>
                <p className="mt-2 text-[16px] leading-[26px]">{s.c}</p>
                <div className="mt-4 h-20 rounded-[12px] border border-white/10 bg-white/5" />
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* The craft */}
      <Section>
        <Container>
          <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.01em] text-[#E9EEF3]">No template vibes</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="p-6">
              <h3 className="text-[22px] leading-[30px] font-semibold text-[#E9EEF3]">Spacing that breathes</h3>
              <p className="mt-2 text-[16px] leading-[26px]">Controlled rhythm—12 / 20 / 32 / 48. Nothing accidental.</p>
              <div className="mt-6 grid grid-cols-4 gap-3">
                <div className="h-24 rounded-[14px] border border-white/10 bg-white/[0.03]" />
                <div className="h-20 rounded-[14px] border border-white/10 bg-white/[0.03]" />
                <div className="h-28 rounded-[14px] border border-white/10 bg-white/[0.03]" />
                <div className="h-16 rounded-[14px] border border-white/10 bg-white/[0.03]" />
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-[22px] leading-[30px] font-semibold text-[#E9EEF3]">Typography with contrast</h3>
              <p className="mt-2 text-[16px] leading-[26px]">Clear levels. Real content, not lorem.</p>
              <div className="mt-6 space-y-4">
                <div className="text-[32px] leading-[40px] font-semibold tracking-[-0.01em] text-[#E9EEF3]">Headlines lead with clarity</div>
                <div className="text-[22px] leading-[30px] font-medium text-white/80">Sections speak in complete thoughts</div>
                <div className="text-[16px] leading-[26px] text-[#C7D1DC] max-w-prose">Copy is short, direct, and human. The page reads like a designer wrote it—because it did.</div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* Built for */}
      <Section>
        <Container>
          <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.01em] text-[#E9EEF3]">Built for</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              ['Indie product launches','Ship a focused story that reads clean.'],
              ['Brand one-pagers','Premium without the corporate glaze.'],
              ['Editorial landing pages','Pace and rhythm over noise.'],
              ['Studio case studies','Show process with clarity.'],
              ['Product updates/changelogs','Legible by design.'],
              ['Lightweight docs','Structure over fluff.'],
            ].map(([t,c]) => (
              <GlassCard key={t} className="p-5">
                <h3 className="text-[18px] leading-[26px] font-semibold text-[#E9EEF3]">{t}</h3>
                <p className="mt-2 text-[14px] leading-[22px] text-[#8FA0B1]">{c}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Work, not words */}
      <Section id="work">
        <Container>
          <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.01em] text-[#E9EEF3]">Work, not words</h2>
          <p className="mt-2 text-[14px] leading-[22px] text-[#8FA0B1]">A few pages built with the agent. Simple. Intentional.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Launch page','Case study','Editorial'].map((label) => (
              <div key={label} className="group">
                <GlassCard className="overflow-hidden">
                  <div className="aspect-[4/3] w-full bg-gradient-to-b from-white/[0.04] to-white/[0.02] border-b border-white/10" />
                </GlassCard>
                <div className="mt-3 text-[12px] text-[#8FA0B1]">{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section id="start">
        <Container>
          <GlassCard className="p-8 md:p-12 text-center">
            <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.01em] text-[#E9EEF3]">Start clean</h2>
            <p className="mt-2 text-[16px] leading-[26px]">Try it. Keep it if it feels right.</p>
            <div className="mt-6">
              <PrimaryButton href="/app">Start a build</PrimaryButton>
            </div>
            <div className="mt-3 text-[14px] leading-[22px] text-[#8FA0B1]">Free to explore. Upgrade when you ship.</div>
          </GlassCard>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="pt-12">
        <div className="h-px w-full bg-white/6" />
        <Container className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-[#E9EEF3]">AI that respects design.</div>
            <div className="text-[12px] text-[#8FA0B1]">Built for people who want actual craftsmanship in their AI tools.</div>
          </div>
          <nav className="flex items-center gap-6 text-sm text-[#8FA0B1]">
            <a href="#" className="hover:text-[#E9EEF3] transition-colors">About</a>
            <a href="#" className="hover:text-[#E9EEF3] transition-colors">Docs</a>
            <a href="#" className="hover:text-[#E9EEF3] transition-colors">Changelog</a>
            <a href="#" className="hover:text-[#E9EEF3] transition-colors">X</a>
            <a href="#" className="hover:text-[#E9EEF3] transition-colors">GitHub</a>
          </nav>
        </Container>
      </footer>
    </div>
  )
}
