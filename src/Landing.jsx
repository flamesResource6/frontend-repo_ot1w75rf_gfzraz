import React from 'react'
import { Link } from 'react-router-dom'

// Core primitives – keep the same disciplined, dark, glass aesthetic
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
            <span className="text-sm text-[#8FA0B1]">Tidya — Adaptive Organization</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#8FA0B1]">
            <a href="#why" className="hover:text-[#E9EEF3] transition-colors">Why Tidya</a>
            <a href="#layouts" className="hover:text-[#E9EEF3] transition-colors">Layouts</a>
            <a href="#how" className="hover:text-[#E9EEF3] transition-colors">How it works</a>
            <a href="#ai" className="hover:text-[#E9EEF3] transition-colors">AI assist</a>
            <a href="#start" className="hover:text-[#E9EEF3] transition-colors">Start</a>
            <Link to="/app" className="text-[#E9EEF3]">Open App</Link>
          </nav>
        </Container>
        <div className="h-px w-full bg-white/6" />
      </header>

      {/* Hero – Flexible by default */}
      <Section>
        <Container className="grid grid-cols-1 gap-8">
          <div className="max-w-[900px]">
            <div className="text-[12px] leading-4 tracking-[0.08em] uppercase text-[#8FA0B1] mb-3">Adaptive organization platform</div>
            <h1 className="text-[#E9EEF3] text-[56px] leading-[64px] font-bold tracking-[-0.02em]">
              Organize anything. View it any way. Switch in an instant.
            </h1>
            <p className="mt-4 text-[16px] leading-[26px] text-[#C7D1DC] max-w-[760px]">
              Start with a blank page in your Deck. Type freely. Turn notes into lists, boards, timelines, or tables — manually or with AI. Tidya adapts to the way you think, not the other way around.
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <PrimaryButton href="#start">Create your first Deck</PrimaryButton>
              <SecondaryButton to="/app">Open the app</SecondaryButton>
            </div>
            <p className="mt-4 text-[14px] leading-[22px] text-[#8FA0B1]">No lock‑in. Switch layouts anytime. Keep your content.</p>
          </div>

          <GlassCard className="mt-8 p-6">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#9FD4FF]/10 blur-3xl" />
            <div className="relative grid grid-cols-12 gap-2 rounded-[12px] border border-white/10 p-4">
              {/* Mini previews: List, Board, Timeline, Table, Grid */}
              {['list','board','timeline','table','grid','list','board','timeline','table','grid','list','board'].map((t,i)=> (
                <div key={i} className="h-48 rounded-[10px] border border-white/5 bg-white/[0.02]">
                  <div className="h-8 border-b border-white/10 bg-white/[0.03] flex items-center px-3 text-[11px] text-[#8FA0B1]">{t}</div>
                  <div className="p-3 space-y-2">
                    <div className="h-2 w-2/3 bg-white/10 rounded" />
                    <div className="h-2 w-1/2 bg-white/10 rounded" />
                    <div className="h-2 w-1/3 bg-white/10 rounded" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-[12px] text-[#8FA0B1]">One set of items → many views. The layout changes, your content doesn’t.</div>
          </GlassCard>
        </Container>
      </Section>

      {/* Why Tidya – benefits */}
      <Section className="pt-0" id="why">
        <Container>
          <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.01em] text-[#E9EEF3]">What makes it different</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: 'Start freeform',
              copy: 'Type naturally. No rigid templates. Structure emerges when you want it.'
            },{
              title: 'Switch views instantly',
              copy: 'List, Kanban, Timeline, Table, Grid. Change formats with zero copy-paste.'
            },{
              title: 'AI when you want it',
              copy: 'Summarize notes, sort by theme, merge duplicates, or auto-format content.'
            }].map((c) => (
              <GlassCard key={c.title} className="p-5">
                <h3 className="text-[22px] leading-[30px] font-semibold text-[#E9EEF3]">{c.title}</h3>
                <p className="mt-2 text-[16px] leading-[26px]">{c.copy}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Layouts – showcase the five core formats */}
      <Section id="layouts">
        <Container>
          <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.01em] text-[#E9EEF3]">One Deck, many layouts</h2>
          <p className="mt-2 text-[14px] leading-[22px] text-[#8FA0B1]">Choose the view that matches the moment. Swap without losing context.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[{t:'List',c:'Rapid capture and sorting.'},{t:'Kanban',c:'Flow work across stages.'},{t:'Timeline',c:'See progression over time.'},{t:'Table',c:'Attributes, filters, and quick edits.'},{t:'Grid',c:'Visual cards for scanning.'},{t:'Mixed',c:'Combine views per section.'}].map(({t,c}) => (
              <GlassCard key={t} className="p-5">
                <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-[12px] border border-white/10 bg-white/5 text-[12px]">{t[0]}</div>
                <h3 className="text-[22px] leading-[30px] font-semibold text-[#E9EEF3]">{t}</h3>
                <p className="mt-2 text-[16px] leading-[26px]">{c}</p>
                <div className="mt-4 h-24 rounded-[12px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02]" />
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* How it works – simple steps centered on the Deck */}
      <Section id="how">
        <Container>
          <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.01em] text-[#E9EEF3]">From blank to organized</h2>
          <div className="mt-6 h-2 w-full rounded-full bg-white/5">
            <div className="h-2 w-2/3 rounded-full bg-[#5FA6D8]" />
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[{
              n: 1, t: 'Create a Deck', c: 'Your flexible workspace. Add notes, ideas, tasks, anything.'
            },{ n: 2, t: 'Add items freely', c: 'Capture without format. Drag, group, or tag as you go.'
            },{ n: 3, t: 'Pick a view', c: 'List, Board, Timeline, Table, or Grid — switch anytime.'
            },{ n: 4, t: 'Use AI (optional)', c: 'Summarize, sort, dedupe, and auto-structure when helpful.'
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

      {/* AI Assist – clear, optional, useful */}
      <Section id="ai">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <GlassCard className="p-6">
              <h3 className="text-[22px] leading-[30px] font-semibold text-[#E9EEF3]">AI that respects your flow</h3>
              <p className="mt-2 text-[16px] leading-[26px]">Keep full control. Ask AI to summarize long notes, group similar items, merge duplicates, or convert text into a structured layout. Accept, tweak, or undo — it’s always your call.</p>
              <div className="mt-6 space-y-3 text-[14px] text-[#8FA0B1]">
                <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-[#5FA6D8]"/> Summarize and highlight key points</div>
                <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-[#5FA6D8]"/> Auto-sort by tags, status, or due dates</div>
                <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-[#5FA6D8]"/> Convert free text into tasks, boards, or tables</div>
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="text-[12px] text-[#8FA0B1] mb-2">Preview</div>
              <div className="rounded-[12px] border border-white/10 overflow-hidden">
                <div className="h-10 bg-white/[0.04] border-b border-white/10 flex items-center px-3 text-[12px]">Deck — Journal</div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-[10px] border border-white/10 bg-white/[0.02] p-3">
                    <div className="h-2 w-2/3 bg-white/10 rounded"/>
                    <div className="mt-2 h-2 w-1/2 bg-white/10 rounded"/>
                  </div>
                  <div className="rounded-[10px] border border-white/10 bg-white/[0.02] p-3">
                    <div className="h-2 w-2/3 bg-white/10 rounded"/>
                    <div className="mt-2 h-2 w-1/3 bg-white/10 rounded"/>
                  </div>
                  <div className="col-span-full mt-2 text-[12px] text-[#8FA0B1]">AI suggestion: “Show as Timeline?” — Apply • Dismiss</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* Built for – audiences */}
      <Section>
        <Container>
          <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.01em] text-[#E9EEF3]">Built for</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              ['Students & researchers','Capture sources, synthesize, and map ideas.'],
              ['Founders & PMs','Roadmaps, specs, and quick boards in one place.'],
              ['Writers & journalists','Draft freely; view as outline or timeline.'],
              ['Personal planning','Goals, habits, and journals that evolve.'],
              ['Small teams','Lightweight projects without the overhead.'],
              ['Creators','Content calendars, ideas, and shoots — any format.'],
            ].map(([t,c]) => (
              <GlassCard key={t} className="p-5">
                <h3 className="text-[18px] leading-[26px] font-semibold text-[#E9EEF3]">{t}</h3>
                <p className="mt-2 text-[14px] leading-[22px] text-[#8FA0B1]">{c}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Gallery – the same content in different skins */}
      <Section id="work">
        <Container>
          <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.01em] text-[#E9EEF3]">Same items, different views</h2>
          <p className="mt-2 text-[14px] leading-[22px] text-[#8FA0B1]">A single Deck rendered as List, Board, Timeline, and Table.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            {['List','Board','Timeline','Table'].map((label) => (
              <div key={label} className="group">
                <GlassCard className="overflow-hidden">
                  <div className="aspect-[4/3] w-full bg-gradient-to-b from-white/[0.04] to-white/[0.02] border-b border-white/10 flex items-end p-3 text-[12px] text-[#8FA0B1]">{label}</div>
                </GlassCard>
                <div className="mt-3 text-[12px] text-[#8FA0B1]">{label} view</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section id="start">
        <Container>
          <GlassCard className="p-8 md:p-12 text-center">
            <h2 className="text-[36px] leading-[44px] font-semibold tracking-[-0.01em] text-[#E9EEF3]">Start with a Deck</h2>
            <p className="mt-2 text-[16px] leading-[26px]">Type freely. Choose a view later — or let AI suggest one.</p>
            <div className="mt-6">
              <PrimaryButton href="/app">Create your first Deck</PrimaryButton>
            </div>
            <div className="mt-3 text-[14px] leading-[22px] text-[#8FA0B1]">Flexible, fast, and private. Upgrade when you need more.</div>
          </GlassCard>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="pt-12">
        <div className="h-px w-full bg-white/6" />
        <Container className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-[#E9EEF3]">Not another notes app — your adaptive layer.</div>
            <div className="text-[12px] text-[#8FA0B1]">Organize any workflow with manual control and intelligent automation.</div>
          </div>
          <nav className="flex items-center gap-6 text-sm text-[#8FA0B1]">
            <a href="#why" className="hover:text-[#E9EEF3] transition-colors">Why Tidya</a>
            <a href="#layouts" className="hover:text-[#E9EEF3] transition-colors">Layouts</a>
            <a href="#how" className="hover:text-[#E9EEF3] transition-colors">How</a>
            <a href="#ai" className="hover:text-[#E9EEF3] transition-colors">AI</a>
            <a href="#start" className="hover:text-[#E9EEF3] transition-colors">Start</a>
          </nav>
        </Container>
      </footer>
    </div>
  )
}
