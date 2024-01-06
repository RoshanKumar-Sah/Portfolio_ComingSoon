import Image from 'next/image'
import { Alegreya } from 'next/font/google'

const alegreya = Alegreya({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex justify-center items-center min-h-screen flex-col  bg-gradient-to-r from-slate-400 to-slate-900 ${alegreya.className}`}
    >
      <h1 className={`text-gray-300 text-4xl`}>Coming Soon!</h1>
    </main>
  )
}
