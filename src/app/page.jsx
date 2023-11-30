import Header from "./components/Header/page"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header/>
      <main className="max-w-[1920px] w-full m-auto relative border border-solid border-red-600">
          <section className="w-full flex justify-around items-center">
            <div className="h-full text-center">
                <h1 className="text-6xl text-white drop-shadow-shadowText font-bold">Olá, eu sou <br /> <strong>João Leandro</strong></h1>
                <p className="text-white drop-shadow-shadowText2 text-3xl font-semibold">Web Developer</p>
            </div>
            <div>
              <Image
                  className="rounded-[25%] mt-4"
                  src={'/images/joao.png'}
                  width={300}
                  height={300}
                  alt="Eu, João Leandro"
                />
            </div>
          </section>
      </main>
    </>
  )
}
