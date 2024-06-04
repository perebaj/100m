'use client'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// import { useToast } from '@/components/ui/use-toast'
import SuccessPayment from './sucess_payment'

export default function Payment() {
  const [isAcceptedPix, setIsAcceptedPix] = useState(true)
  const [loadingPix, setLoadingPix] = useState(false)
  const [isAcceptedBoleto, setIsAcceptedBoleto] = useState(true)
  const [loadingBoleto, setLoadingBoleto] = useState(false)

  // const [isPaymentConfirmedPix, setIsPaymentConfirmedPix] = useState(false)
  // const [loadingPaymentPix, setLoadingPaymentPix] = useState(false)
  // const handlePaymentConfirmPix = () => {
  //   setLoadingPaymentPix(true)
  //   setTimeout(() => {
  //     setLoadingPaymentPix(false)
  //     setIsPaymentConfirmedPix(!isPaymentConfirmedPix)
  //   }, 1000)
  // }

  // const [isPaymentConfirmedBoleto, setIsPaymentConfirmedBoleto] =
  //   useState(false)
  // const [loadingPaymentBoleto, setLoadingPaymentBoleto] = useState(false)
  // const handlePaymentConfirmBoleto = () => {
  //   setLoadingPaymentBoleto(true)
  //   setTimeout(() => {
  //     setLoadingPaymentBoleto(false)
  //     setIsPaymentConfirmedBoleto(!isPaymentConfirmedBoleto)
  //   }, 1000)
  // }

  const handleAcceptPix = () => {
    setLoadingPix(true)
    setTimeout(() => {
      setLoadingPix(false)
      setIsAcceptedPix(!isAcceptedPix)
    }, 500)
  }

  const handleAcceptBoleto = () => {
    setLoadingBoleto(true)
    setTimeout(() => {
      setLoadingBoleto(false)
      setIsAcceptedBoleto(!isAcceptedBoleto)
    }, 500)
  }

  return (
    <Tabs className="mx-auto w-full max-w-md" defaultValue="pix">
      <TabsList className="grid grid-cols-2 gap-2">
        <TabsTrigger value="pix">PIX</TabsTrigger>
        <TabsTrigger value="boleto">Boleto</TabsTrigger>
      </TabsList>
      <TabsContent value="pix">
        <Card className="space-y-4 p-6">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="pixcode">Entre com o código do PIX</Label>
            <Input type="text" id="pixcode" placeholder="Código PIX" />
          </div>
          {isAcceptedPix && (
            <Button className="w-full" onClick={handleAcceptPix}>
              {loadingPix ? 'Carregando...' : 'Continuar'}
            </Button>
          )}
          {!isAcceptedPix && (
            <>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Pagamento via PIX</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Escolha a melhor opção de parcelamento para você.
                </p>
              </div>
              <RadioGroup className="grid gap-4" defaultValue="weekly">
                <div>
                  <RadioGroupItem
                    className="peer sr-only"
                    id="pix-weekly"
                    value="weekly"
                  />
                  <Label
                    className="flex items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 [&:has([data-state=checked])]:border-gray-900 dark:[&:has([data-state=checked])]:border-gray-50"
                    htmlFor="pix-weekly"
                  >
                    <div className="flex items-center gap-3">
                      <div className="font-semibold">Semanal</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        4 parcelas de R$25,00
                      </div>
                    </div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    className="peer sr-only"
                    id="pix-biweekly"
                    value="biweekly"
                  />
                  <Label
                    className="flex items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 [&:has([data-state=checked])]:border-gray-900 dark:[&:has([data-state=checked])]:border-gray-50"
                    htmlFor="pix-biweekly"
                  >
                    <div className="flex items-center gap-3">
                      <div className="font-semibold">Quinzenal</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        2 parcelas de R$50,00
                      </div>
                    </div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    className="peer sr-only"
                    id="pix-monthly"
                    value="monthly"
                  />
                  <Label
                    className="flex items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 [&:has([data-state=checked])]:border-gray-900 dark:[&:has([data-state=checked])]:border-gray-50"
                    htmlFor="pix-monthly"
                  >
                    <div className="flex items-center gap-3">
                      <div className="font-semibold">Mensal</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        1 parcela de R$100,00
                      </div>
                    </div>
                  </Label>
                </div>
                <SuccessPayment />
              </RadioGroup>
            </>
          )}
        </Card>
      </TabsContent>
      <TabsContent value="boleto">
        <Card className="space-y-4 p-6">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="boletocode">Entre com o código do Boleto</Label>
            <Input type="text" id="boletocode" placeholder="Código Boleto" />
          </div>
          {isAcceptedBoleto && (
            <Button className="w-full" onClick={handleAcceptBoleto}>
              {loadingBoleto ? 'Carregando...' : 'Continuar'}
            </Button>
          )}
          {!isAcceptedBoleto && (
            <>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Pagamento via Boleto</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Escolha a melhor opção de parcelamento para você.
                </p>
              </div>
              <RadioGroup className="grid gap-4" defaultValue="weekly">
                <div>
                  <RadioGroupItem
                    className="peer sr-only"
                    id="boleto-weekly"
                    value="weekly"
                  />
                  <Label
                    className="flex items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 [&:has([data-state=checked])]:border-gray-900 dark:[&:has([data-state=checked])]:border-gray-50"
                    htmlFor="boleto-weekly"
                  >
                    <div className="flex items-center gap-3">
                      <div className="font-semibold">Semanal</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        4 parcelas de R$25,00
                      </div>
                    </div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    className="peer sr-only"
                    id="boleto-biweekly"
                    value="biweekly"
                  />
                  <Label
                    className="flex items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 [&:has([data-state=checked])]:border-gray-900 dark:[&:has([data-state=checked])]:border-gray-50"
                    htmlFor="boleto-biweekly"
                  >
                    <div className="flex items-center gap-3">
                      <div className="font-semibold">Quinzenal</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        2 parcelas de R$50,00
                      </div>
                    </div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    className="peer sr-only"
                    id="boleto-monthly"
                    value="monthly"
                  />
                  <Label
                    className="flex items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 [&:has([data-state=checked])]:border-gray-900 dark:[&:has([data-state=checked])]:border-gray-50"
                    htmlFor="boleto-monthly"
                  >
                    <div className="flex items-center gap-3">
                      <div className="font-semibold">Mensal</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        1 parcela de R$100,00
                      </div>
                    </div>
                  </Label>
                </div>
                <SuccessPayment />
              </RadioGroup>
            </>
          )}
        </Card>
      </TabsContent>
    </Tabs>
  )
}
