import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Head from 'next/head'

function github() {
    window.open("https://github.com/noobnuby");
}
function email() {
    window.open("mailto:me@noobnuby.com");
}
function discord() {
    window.open("https://discord.com/users/878092667156856882");
}
function easteregg() {
    alert('Easter Egg!🥚');
}

export default function Home() {
  return (
      <main className="flex justify-center items-center font opacity-80 font['Pretendard']">
          <div className="flex items-center flex-col bg-[#6277BF] rounded-[15px] w-[280px] h-[566px] drop-shadow-[19px_19px_10px_rgba(0,0,0,0.25)] mt-[7%]">
              <Head>
                  <title>Noobnuby Profile Site</title>
                  <link rel="icon" href="/favicon.png" sizes="any"/>
              </Head>
              <Image
                  src="/favicon.png"
                  width={96}
                  height={1}
                  alt=""
                  onClick={easteregg}
                  className="mt-[30px]"
              />
              <p className="text-[56px]">뉴비</p>
              <div className="flex mb-[10px]">
                  <Image
                      src="/image/discord.png"
                      width={25}
                      height={1}
                      alt=""
                      onClick={discord}
                      className="ml-[25px] mr-[25px] hover:cursor-pointer"
                  />
                  <Image
                      src="/image/github.png"
                      width={25}
                      height={1}
                      alt=""
                      onClick={github}
                      className="mr-[25px] hover:cursor-pointer"
                  />
                  <Image
                      src="/image/envelope.png"
                      width={25}
                      height={1}
                      alt=""
                      onClick={email}
                      className="mr-[25px] hover:cursor-pointer"
                  />
              </div>
              <div>
                  <Typewriter
                      onInit={(typewriter) => {
                          typewriter
                              .typeString("#Hello, World!")
                              .pauseFor(2500)
                              .deleteAll()
                              .typeString("#Age 15(14)")
                              .pauseFor(2500)
                              .deleteAll()
                              .typeString("#초보 개발자")
                              .pauseFor(2500)
                              .deleteAll()
                              .typeString("#바부")
                              .pauseFor(2500)
                              .deleteAll()
                              .start();
                      }}
                  />
              </div>
              <div className="mt-[30%] text-[25px]">
                  <p className="">404</p>
                  <p className="">Not Found</p>
              </div>
          </div>
      </main>
  );
}
