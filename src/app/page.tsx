'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

import Buymeacoffee from '@/components/coffee'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
export default function Home() {
  return (
    <div>
      <header>
        <nav className="mx-auto flex max-w-7xl items-center justify-center px-32 py-3 text-xl">
          <span className="text-slate flex-1 text-2xl">FlexPay</span>
          <Buymeacoffee />
          <div className="flex flex-1 justify-end">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/dashboard">
                <Button size={'lg'} className="text-slate text-lg">
                  Login
                </Button>
              </Link>
            </motion.button>
          </div>
        </nav>
      </header>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        <section className="relative mx-auto flex max-w-5xl flex-col items-center p-8 pb-64 pt-64">
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
                  O que é o FlexPay?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate text-lg">
                    Somos um meio de pagamento entre lojistas e fornecedores que
                    dá mais prazo e flexibilidade para o comprador.
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
                    envia os dados de pagamento (boleto ou PIX) para o FlexPay.
                    Nos pagamos suas compras e adicionamos o valor em seu
                    próximo vencimento semanal, com uma taxa de apenas 2% sobre
                    cada nota emitida.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-start font-bold text-primary">
                  Para qual público o FlexPay é designado?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate text-lg">
                    Para aqueles que querem mais prazo e flexibilidade para
                    rodar seu negócio. Comprei agora, pague só depois!
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-start font-bold text-primary">
                  Quanto o FlexPay custa?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate text-lg">
                    Nos cobramos uma taxa de 2% ao mês sobre o valor da compra.
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
