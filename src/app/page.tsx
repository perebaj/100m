'use client'
import { motion } from 'framer-motion'

// import Link from 'next/link'
import Buymeacoffee from '@/components/coffee'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

// import { Button } from '@/components/ui/button'
import Payment from './payment/payment'
export default function Home() {
  return (
    <div>
      <header>
        <nav className="mx-auto flex max-w-7xl px-32 py-3 text-xl">
          <span className="text-slate align-center flex flex-col items-center justify-center text-2xl">
            Single Player
          </span>
          <Buymeacoffee />
        </nav>
      </header>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        <section className="relative mx-auto flex max-w-5xl flex-col items-center p-8 pb-24 pt-24">
          <h2 className="text-slate flex flex-col text-center text-6xl font-medium ">
            Pague seus fornecedores de estoque,{' '}
            <span className="bg-gradient-to-r from-orange-400 from-40% via-orange-500 to-orange-600 to-80% bg-clip-text pb-6 text-5xl text-transparent">
              sem se preocupar com seus boletos.
            </span>
          </h2>
          <span className="text-slate text-3xl font-light">
            Compre, venda e pague só depois!
          </span>
        </section>
      </motion.div>
      {/* <section id="video" className="flex h-screen items-center justify-center">
        <iframe
          class="max-w-full"
          width="640"
          height="400"
          src="https://www.loom.com/embed/b25378a5236b481ab40e475147675ac1?sid=d135da61-f494-44ad-b270-fe50cd7c77ea"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </section> */}

      <section id="payment" className="bg-slate-50 bg-opacity-40 pb-16 pt-16">
        <h1 className="flex flex-col items-center justify-center p-4 text-2xl">
          Escolha como você quer pagar seus fornecedores
        </h1>
        <Payment />
      </section>
      <section id="faq">
        <div className="mx-auto flex max-w-7xl flex-row gap-12 px-8 py-32">
          <div className="flex basis-1/2 flex-col text-left">
            <p className="mb-4 inline-block text-2xl font-semibold text-primary">
              FAQ
            </p>
            <p className="text-slate text-3xl font-extrabold">
              Perguntas Frequentes
            </p>
          </div>
          <ul className="basis-1/2">
            <Accordion type="single" collapsible className="text-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-start font-bold text-primary">
                  O que é o Single Player?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate text-lg">
                    Somos um meio de pagamento entre o lojista e o fornecedor
                    que dá mais prazo e flexibilidade para rodar seu negócio.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-start font-bold text-primary">
                  Como eu começo?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate text-lg">
                    Você faz suas compras de estoque em qualquer fornecedor e
                    envia os dados de pagamento (boleto ou PIX) para o Single
                    Player. Nos pagamos suas compras e adicionamos o valor em
                    seu próximo vencimento, com uma taxa entre 2% e 3%
                    dependendo da forma de pagamento escolhida.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-start font-bold text-primary">
                  Para qual público o Single Player é designado?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate text-lg">
                    Para aqueles que querem mais prazo e flexibilidade para
                    rodar seu negócio. Comprei agora e pague só depois!
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-start font-bold text-primary">
                  Quanto o Single Player custa?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate text-lg">
                    Dependendo da forma de pagamento escolhida, cobramos uma
                    taxa entre 2% e 3% do valor total da compra.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ul>
        </div>
      </section>
      <footer>
        <div className="flex flex-col items-center justify-center pb-4 pt-8 text-sm">
          <h4 className="text-slate">
            Made with ❤️ by{' '}
            <a href="" className="no-underline hover:underline">
              Credit Team
            </a>{' '}
          </h4>
        </div>
      </footer>
    </div>
  )
}
