
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { PlayIcon, CheckIcon, ClockIcon } from '@heroicons/react/24/outline'

const DemoSection = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const demoSteps = [
    {
      title: "Natural Language Input",
      description: "User describes their test in plain English",
      code: `"I want to test sending 10 USDC from 5 different wallets to a recipient wallet, then verify the balances"`,
      status: "completed"
    },
    {
      title: "AI Parsing & Spec Generation", 
      description: "LLM converts natural language to structured JSON",
      code: `{
  "type": "token_transfer_batch",
  "token": "USDC", 
  "from_wallets": 5,
  "to_wallet": "auto:generated",
  "amount": "10.0",
  "verify_balances": true
}`,
      status: activeStep >= 1 ? "completed" : "pending"
    },
    {
      title: "Autonomous Agent Execution",
      description: "Agent creates wallets, funds them, executes transactions", 
      code: `✅ Created 5 ephemeral wallets
✅ Funded wallets with SOL + USDC
✅ Executed 5 transfer transactions
✅ Verified recipient balance: +50 USDC`,
      status: activeStep >= 2 ? "completed" : "pending"
    },
    {
      title: "On-Chain Result Recording",
      description: "Results permanently stored on Solana blockchain",
      code: `Transaction Hash: 
2b1kX9...7fN9pQ

On-Chain Account:
TestResult: Success ✅
Fee Used: 0.001 SOL
Execution Time: 2.3s`,
      status: activeStep >= 3 ? "completed" : "pending"
    }
  ]

  const playDemo = () => {
    setIsPlaying(true)
    setActiveStep(0)
    
    const interval = setInterval(() => {
      setActiveStep(prev => {
        if (prev >= 3) {
          clearInterval(interval)
          setIsPlaying(false)
          return 3
        }
        return prev + 1
      })
    }, 2000)
  }

  return (
    <section className="px-6 lg:px-12 py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            See It In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Watch our AI agents autonomously execute a complex Solana test
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={playDemo}
            disabled={isPlaying}
            className="btn btn-primary btn-lg font-bold"
          >
            {isPlaying ? (
              <>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Running Demo...
              </>
            ) : (
              <>
                <PlayIcon className="w-5 h-5" />
                Play Demo
              </>
            )}
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-6">
            {demoSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card bg-slate-900/80 backdrop-blur-xl border transition-all duration-500 ${
                  activeStep >= index 
                    ? 'border-primary/50 bg-primary/5' 
                    : 'border-slate-700/50'
                }`}
              >
                <div className="card-body p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step.status === 'completed' 
                        ? 'bg-primary text-white' 
                        : step.status === 'running'
                        ? 'bg-warning text-slate-900'
                        : 'bg-slate-700 text-slate-400'
                    }`}>
                      {step.status === 'completed' ? (
                        <CheckIcon className="w-5 h-5" />
                      ) : step.status === 'running' ? (
                        <ClockIcon className="w-5 h-5" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{step.title}</h3>
                      <p className="text-slate-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Code Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="sticky top-8"
          >
            <div className="card bg-slate-900 border border-slate-700">
              <div className="card-body p-0">
                <div className="flex items-center justify-between p-4 border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-400 text-sm font-mono">
                    {demoSteps[activeStep]?.title || 'Ready to start...'}
                  </span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <motion.pre
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-slate-300 whitespace-pre-wrap"
                  >
                    {demoSteps[activeStep]?.code || 'Click "Play Demo" to start...'}
                  </motion.pre>
                </div>
              </div>
            </div>

            {/* Execution Stats */}
            {activeStep >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 grid grid-cols-3 gap-4"
              >
                {[
                  { label: "Execution Time", value: "2.3s" },
                  { label: "Success Rate", value: "100%" },
                  { label: "Gas Used", value: "0.001 SOL" }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-primary font-bold text-lg">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection