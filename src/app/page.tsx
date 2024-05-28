'use client'
import { motion } from 'framer-motion'

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
          <span className="flex-1 text-2xl text-white">100m</span>
          <Buymeacoffee />
          <div className="flex flex-1 justify-end">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button size={'lg'} className="text-lg text-white">
                Login
              </Button>
            </motion.button>
          </div>
        </nav>
      </header>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        <section className="relative mx-auto flex max-w-7xl flex-col items-center p-8 pb-64 pt-64">
          <h2 className="flex flex-col text-center text-7xl font-medium text-white ">
            Rode seu negócio,{' '}
            <span className="bg-gradient-to-r from-yellow-300 from-20% via-yellow-400 to-yellow-600 to-70% bg-clip-text pb-6 text-transparent">
              sem se preocupar com crédito
            </span>
          </h2>
          <span className="text-3xl font-light text-white">
            Encontre fornecedores, compre, venda e pague só depois!
          </span>
        </section>
      </motion.div>
      <section id="faq">
        <div className="mx-auto flex max-w-7xl flex-row gap-12 px-8 py-32">
          <div className="flex basis-1/2 flex-col text-left">
            <p className="mb-4 inline-block text-2xl font-semibold text-primary">
              FAQ
            </p>
            <p className="text-3xl font-extrabold text-white">
              Perguntas Frequentes
            </p>
          </div>
          <ul className="basis-1/2">
            <Accordion type="single" collapsible className="text-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-start font-bold text-primary">
                  O que é o 100m?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg text-white">
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
                  <p className="text-lg text-white">
                    Simples, basta se cadastrar, passar alguns dados do seu
                    negócio e no máximo em 3 minutos você já tem uma linha de
                    crédito disponível para usar. Compre, venda e pague só
                    depois!
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-start font-bold text-primary">
                  Para qual público o 100m é designado?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg text-white">
                    Para aqueles que querem mais prazo e flexibilidade para
                    rodar seu negócio. Comprei agora, pague só depois!
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-start font-bold text-primary">
                  Quanto o 100m custa?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg text-white">
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
          <h4 className="text-lg text-white">
            Made with ❤️ by{' '}
            <a
              href="https://github.com/perebaj"
              className="no-underline hover:underline"
            >
              J²
            </a>{' '}
          </h4>
        </div>
      </footer>
    </div>
  )
}
