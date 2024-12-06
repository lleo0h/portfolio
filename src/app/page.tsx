import NavBar from "@/components/navbar"

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center">
        <div className="p-24">
          <h1 className="text-stone-400 text-xl pb-1">Leonardo Araujo</h1>
          <h2 className="text-white text-5xl font-bold">Programador Backend TypeScript</h2>
          <p className="text-stone-400 text-xl pt-4">
            — Especializado em criar aplicações robustas e eficientes, focando em soluções inteligentes para desafios complexos, ou não.
          </p>
        </div>
      </div>
    </>
  )
}