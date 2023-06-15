import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex justify-center'>
        <div className='flex items-center justify-center bg-[#6277BF] rounded-md w-[280px] h-[566px] drop-shadow-[19px_19px_10px_rgba(0,0,0,0.25)]'>
          hello
        </div>
    </main>
  )
}
