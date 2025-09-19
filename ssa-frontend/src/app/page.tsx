'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  ChevronRight, 
  Sparkles, 
  Cpu, 
  Zap, 
  Code2, 
  ShieldCheck
} from 'lucide-react'

const LandingPage = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-300 via-slate-900 to-purple-900 text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="navbar px-6 lg:px-12 py-4 relative z-50"
      >
        <div className="navbar-start">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            SolanaTest AI
          </motion.div>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {['Features', 'How it Works', 'Pricing', 'Docs'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.05 }}>
                <a className="font-semibold hover:text-primary transition-colors">{item}</a>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div className="navbar-end">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary btn-outline glass font-bold"
          >
            Connect Wallet
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 py-20 lg:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="badge badge-accent badge-lg font-bold mb-4">
                🏆 Built for Solana Student Hackathon
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                  AI-Powered
                </span>
                <br />
                <span className="text-white">Solana Testing</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Transform natural language into comprehensive Solana tests. 
                Our autonomous AI agents handle everything from wallet creation to transaction execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary btn-lg font-bold text-lg px-8"
              >
                Start Testing
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline btn-lg font-bold text-lg px-8"
              >
                View Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
            >
              {[
                { number: "100%", label: "Autonomous Testing" },
                { number: "⚡", label: "Real-time Results" },
                { number: "🔗", label: "On-Chain Verified" },
                { number: "🤖", label: "AI-Powered" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center space-y-2"
                >
                  <div className="text-3xl lg:text-4xl font-black text-primary">{stat.number}</div>
                  <div className="text-slate-400 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features aligned with judging criteria */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hackathon-Winning
              </span>
              <br />Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built specifically to excel in autonomy, blockchain interaction, and AI intelligence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Agent Intelligence & Autonomy",
                description: "Advanced LLM parsing converts natural language into executable test specs. Autonomous decision-making for wallet management, funding, and transaction orchestration.",
                highlights: ["Natural Language Processing", "Goal-Oriented Behavior", "Sophisticated Decision Making"]
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Blockchain Interaction",
                description: "Direct smart contract deployment and interaction. Autonomous transaction execution with real-time on-chain verification and result recording.",
                highlights: ["On-Chain Transactions", "Smart Contract Interaction", "Autonomous Execution"]
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Agent Coordination",
                description: "Seamless coordination between AI parsing agents, execution agents, and on-chain verification systems with real-time status updates.",
                highlights: ["Multi-Agent System", "Real-time Coordination", "Status Synchronization"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="card bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="card-body p-8">
                  <div className="text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="card-title text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm font-semibold text-slate-200">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="px-6 lg:px-12 py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6">How It Works</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From natural language to on-chain results in minutes
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Describe Your Test",
                description: "Write in plain English what you want to test",
                icon: <Code2 className="w-6 h-6" />
              },
              {
                step: "02", 
                title: "AI Parsing",
                description: "LLM converts your description into structured test specs",
                icon: <Sparkles className="w-6 h-6" />
              },
              {
                step: "03",
                title: "Autonomous Execution", 
                description: "Agent Kit handles wallet creation, funding, and transaction execution",
                icon: <Cpu className="w-6 h-6" />
              },
              {
                step: "04",
                title: "On-Chain Verification",
                description: "Results verified and stored permanently on Solana",
                icon: <ShieldCheck className="w-6 h-6" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-black text-xl">{step.step}</span>
                </div>
                <div className="text-primary mb-2">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-black">
            Ready to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Revolutionize</span><br />
            Solana Testing?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join the future of autonomous blockchain testing. Built by developers, for developers.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary btn-lg font-bold text-lg px-12"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}

export default LandingPage
