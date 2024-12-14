import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Bot, DollarSign, Eye, Shield, Zap } from 'lucide-react'
import DotPattern from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"
import HyperText from "@/components/ui/hyper-text"
import GradualSpacing from "@/components/ui/gradual-spacing"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <Bot className="h-6 w-6 mr-2 text-blue-400" />
          <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">EtherWatch</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#get-started">
            Get Started
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full flex justify-center lg:min-h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold  tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Monitor Ethereum Contracts
                  <span className="flex justify-center">
                    <HyperText
                      className="bg-gradient-to-r  from-blue-400 to-purple-600 text-transparent bg-clip-text"
                      text="in Real-Time"
                    />
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Stay on top of your smart contract balances with our Telegram bot. Get instant notifications when thresholds are met or exceeded.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white" asChild>
                  <Link href="https://t.me/Scrapinggg_bot">Start Monitoring</Link>
                </Button>
                <Button variant="outline" className="text-gray-800 bg-gray-300 border-gray-700 hover:bg-gray-800 hover:text-gray-100" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="md:flex hidden">

            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
              )}
            />
          </div>
        </section>
        <section id="features" className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-black">

          <div className="container px-4 md:px-6">
            <GradualSpacing
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text" text="Features"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <Card className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <Eye className="w-8 h-8 mb-2 text-blue-400" />
                  <CardTitle className="text-gray-100">Real-Time Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Watch Ethereum smart contract balances as they change in real-time.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <AlertCircle className="w-8 h-8 mb-2 text-blue-400" />
                  <CardTitle className="text-gray-100">Instant Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Receive immediate notifications when contract balances meet your specified thresholds.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <Shield className="w-8 h-8 mb-2 text-blue-400" />
                  <CardTitle className="text-gray-100">Secure Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Built on Alchemys robust Ethereum API for reliable and secure blockchain data.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <DollarSign className="w-8 h-8 mb-2 text-blue-400" />
                  <CardTitle className="text-gray-100">Multiple Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Monitor multiple smart contracts simultaneously with ease.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <Zap className="w-8 h-8 mb-2 text-blue-400" />
                  <CardTitle className="text-gray-100">Fast Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Get started in minutes with simple Telegram commands. No complex configuration required.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <Bot className="w-8 h-8 mb-2 text-blue-400" />
                  <CardTitle className="text-gray-100">User-Friendly Bot</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Interact with our intuitive Telegram bot interface for all your monitoring needs.</p>
                </CardContent>
              </Card>
            </div>


          </div>
        </section>

        <section id="how-it-works" className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Start the Bot</h3>
                <p className="text-gray-400">Begin by using /start command with our Telegram bot.</p>
              </div>
              <div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Set Up Monitoring</h3>
                <p className="text-gray-400">Send the amount of Eth to track balances of contracts which are greater than or equal to your amount.</p>
              </div>
              <div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Receive Alerts</h3>
                <p className="text-gray-400">Get notified instantly when the contract balance meets or exceeds your threshold.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="get-started" className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">Start Monitoring Today</h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                  Join our Telegram bot and start monitoring your Ethereum smart contracts in real-time. Its quick, easy, and powerful.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white" asChild>
                  <Link href="https://t.me/Scrapinggg_bot">Launch Telegram Bot</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-500">© 2024 EtherWatch. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-400 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-400 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

