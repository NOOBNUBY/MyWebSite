import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className="flex justify-center items-center">
          <div className="flex justify-center bg-[#6277BF] rounded-md w-[280px] h-[566px] drop-shadow-[19px_19px_10px_rgba(0,0,0,0.25)] mt-[7%]">
              <Image
                  src="/profile.png"
                  width={10}
                  height={10}
                  alt="Picture of the author"
              />
          </div>
      </main>
  );
}
