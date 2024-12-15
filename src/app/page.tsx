"use client"
import NavBar from "@/components/navbar"
import { motion } from "motion/react"

export default function Page() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex flex-col items-center">
          <div className="py-32">
            <h1 className="text-stone-400 text-xl pb-1">Leonardo Araujo</h1>
            <h2 className="text-white text-5xl font-bold">Programador Backend TypeScript</h2>
            <p className="text-stone-400 text-xl pt-4">
              — Especializado em criar aplicações robustas e eficientes, focando em soluções inteligentes para desafios complexos, ou não.
            </p>
          </div>
        </div>
        <div className="pt-36">
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
          </div>
        </div>
      </motion.div>
    </>
  )
}