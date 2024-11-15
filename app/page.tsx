import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, BarChart2, CloudRain, Cpu , Droplets, LaptopMinimal} from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">AgroTech</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1 mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Precision Agriculture for the Future
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Optimize your farm&apos;s potential with cutting-edge technology and data-driven insights.
                </p>
              </div>
              <Link href="/form">
                <Button className="bg-green-600 hover:bg-green-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-gray-100 rounded-2xl px-10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <BarChart2 className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
                <p className="text-gray-500">Advanced analytics to optimize crop yield and resource usage.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Droplets className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Smart Irrigation</h3>
                <p className="text-gray-500">Efficient water management systems for sustainable farming.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <LaptopMinimal className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Simple UI</h3>
                <p className="text-gray-500">Seamless integration with easy to use website for easy access.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 AgroTech Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}