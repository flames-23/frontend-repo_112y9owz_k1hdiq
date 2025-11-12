import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, CheckCircle2, Code2, Sparkles, Rocket, Shield, Cpu, Clock, Users, Linkedin, Github, Twitter, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Stat({ value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="mt-2 text-zinc-400">{label}</div>
    </motion.div>
  )
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && (
        <div className="text-xs uppercase tracking-widest text-fuchsia-400/80 mb-2">{kicker}</div>
      )}
      <h2 className="text-2xl md:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-3 text-zinc-400">{subtitle}</p>}
    </div>
  )
}

export default function App() {
  return (
    <div id="home" className="bg-black text-white min-h-screen selection:bg-fuchsia-500/30 selection:text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 animate-pulse" />
            <span className="font-semibold tracking-wide">NovaIT</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#statistics" className="text-zinc-300 hover:text-white transition">Statistics</a>
            <a href="#why" className="text-zinc-300 hover:text-white transition">Why Choose Us</a>
            <a href="#expertise" className="text-zinc-300 hover:text-white transition">Expertise</a>
            <a href="#work" className="text-zinc-300 hover:text-white transition">Work</a>
            <a href="#testimonials" className="text-zinc-300 hover:text-white transition">Testimonials</a>
            <a href="#contact" className="text-zinc-900 bg-white hover:bg-zinc-200 transition text-sm px-4 py-2 rounded-md inline-flex items-center gap-2">
              Start a Project <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
          <a href="#contact" className="md:hidden text-zinc-900 bg-white hover:bg-zinc-200 transition text-xs px-3 py-1.5 rounded-md inline-flex items-center gap-1.5">
            Contact <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero with Spline */}
      <section className="relative pt-28 md:pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              We build delightful, scalable digital products.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-zinc-300"
            >
              From concept to launch, our team blends design, engineering, and strategy to ship software that users love.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 flex items-center gap-4"
            >
              <a href="#contact" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition inline-flex items-center gap-2">
                Start your project <Rocket className="h-4 w-4" />
              </a>
              <a href="#work" className="px-5 py-3 rounded-md bg-white/10 text-white border border-white/10 hover:bg-white/15 transition inline-flex items-center gap-2">
                See our work <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
            <div className="mt-16 hidden md:flex items-center gap-2 text-zinc-400">
              <ChevronDown className="h-5 w-5 animate-bounce" />
              Scroll to explore
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section id="statistics" className="relative py-16 md:py-24 border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker="By the numbers" title="Proven impact" subtitle="We measure success by outcomes that matter." />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat value="150+" label="Projects delivered" />
            <Stat value="98%" label="Client satisfaction" delay={0.1} />
            <Stat value="5x" label="Avg. ROI improvement" delay={0.2} />
            <Stat value="24/7" label="Global support" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker="Why choose us" title="We ship with quality and speed" subtitle="Strategy-led, design-driven, engineering-powered." />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Enterprise-grade security', desc: 'Best practices by default: SSO, encryption, audits.' },
              { icon: Cpu, title: 'Future-proof architecture', desc: 'Modern stacks, cloud-native, scalable from day one.' },
              { icon: Clock, title: 'On-time delivery', desc: 'Agile execution with transparent milestones.' },
              { icon: Users, title: 'Dedicated teams', desc: 'Product, design, and engineering under one roof.' },
              { icon: Sparkles, title: 'Delightful UX', desc: 'Micro-interactions and polish your users will notice.' },
              { icon: Code2, title: 'Clean, tested code', desc: 'Maintainable codebases that last and scale.' },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6"
              >
                <f.icon className="h-6 w-6 text-fuchsia-400" />
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker="Our expertise" title="From idea to production" subtitle="Full-stack capabilities across web, mobile, and cloud." />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Product & Strategy', points: ['Discovery & research', 'Roadmapping', 'Analytics & insights'] },
              { title: 'Design & Frontend', points: ['Design systems', 'React / Next.js', 'Motion & accessibility'] },
              { title: 'Backend & Cloud', points: ['FastAPI / Node', 'Databases & DevOps', 'Observability'] },
            ].map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }} className="rounded-xl border border-white/10 p-6 bg-white/[0.02]">
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <ul className="mt-4 space-y-2 text-zinc-400">
                  {b.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-fuchsia-400 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker="Work we have done" title="Selected projects" subtitle="A snapshot of recent collaborations." />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Fintech dashboard', tag: 'Web app', img: 'https://images.unsplash.com/photo-1551281044-8b89a9a5c064?q=80&w=1200&auto=format&fit=crop' },
              { name: 'Healthcare portal', tag: 'Platform', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop' },
              { name: 'AI analytics', tag: 'Data', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop' },
            ].map((p, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -6 }}
                className="group rounded-xl overflow-hidden border border-white/10 bg-white/[0.02]"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-fuchsia-400/90">{p.tag}</div>
                    <div className="font-semibold">{p.name}</div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-zinc-400 group-hover:text-white transition" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker="Testimonials" title="What our clients say" />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Alex Johnson', role: 'VP, Growth at FinBank', quote: 'They shipped a complex MVP in 8 weeks. The polish and performance exceeded expectations.' },
              { name: 'Priya Patel', role: 'CTO, HealthHub', quote: 'A true partner. Clear communication, strong engineering practices, and beautiful UX.' },
              { name: 'Marco Rossi', role: 'Founder, DataWise', quote: 'Their team elevated our product experience and set us up with a scalable architecture.' },
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }} className="rounded-xl border border-white/10 p-6 bg-white/[0.02]">
                <p className="text-zinc-300">“{t.quote}”</p>
                <div className="mt-4 text-sm text-zinc-400">{t.name} • {t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker="Contact" title="Tell us about your project" subtitle="We typically respond within one business day." />
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm text-zinc-300">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-zinc-300">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm text-zinc-300">Project details</label>
                <textarea rows="4" className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="What are you building?" />
              </div>
              <button className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-md font-medium hover:bg-zinc-200 transition">
                Send message <Mail className="h-4 w-4" />
              </button>
            </form>

            <div className="space-y-6">
              <div className="rounded-xl border border-white/10 p-6 bg-white/[0.02]">
                <div className="flex items-center gap-3 text-zinc-300"><Phone className="h-5 w-5 text-fuchsia-400" /> +1 (555) 123-4567</div>
                <div className="flex items-center gap-3 mt-3 text-zinc-300"><Mail className="h-5 w-5 text-fuchsia-400" /> hello@novait.studio</div>
                <div className="flex items-center gap-3 mt-3 text-zinc-300"><MapPin className="h-5 w-5 text-fuchsia-400" /> Remote • Global</div>
              </div>
              <div className="rounded-xl border border-white/10 p-6 bg-white/[0.02]">
                <div className="text-sm text-zinc-400">Follow us</div>
                <div className="mt-3 flex items-center gap-4">
                  <a href="#" aria-label="Twitter" className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition"><Twitter className="h-5 w-5" /></a>
                  <a href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition"><Linkedin className="h-5 w-5" /></a>
                  <a href="#" aria-label="GitHub" className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition"><Github className="h-5 w-5" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-400">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
            <span>© {new Date().getFullYear()} NovaIT. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
