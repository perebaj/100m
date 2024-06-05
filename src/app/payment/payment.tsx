'use client'
import { useState } from 'react'
import { toast } from 'sonner'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import SuccessPayment from './sucess_payment'

interface MerchantAccountInformation {
  Tag: string
  Length: string
  Value: string
}

interface PixData {
  PayloadFormatIndicator: string
  PointOfInitiationMethod: string
  MerchantAccountInformation: MerchantAccountInformation[]
  MerchantCategoryCode: string
  TransactionCurrency: string
  TransactionAmount: string
  TipOrConvenienceIndicator: string
  ValueOfConvenienceFeeFixed: string
  ValueOfConvenienceFeePercentage: string
  CountryCode: string
  MerchantName: string
  MerchantCity: string
  PostalCode: string
  AdditionalDataFieldTemplate: string
  MerchantInformation: {
    Language: string
    Name: string
    City: string
    Valid: boolean
  }
  UnreservedTemplates: null
}

interface PaymentResponse {
  transaction_id: string
  pix_data: PixData
}

export default function Payment() {
  const [isAcceptedPix, setIsAcceptedPix] = useState(true)
  const [loadingPix, setLoadingPix] = useState(false)
  const [isAcceptedBoleto, setIsAcceptedBoleto] = useState(true)
  const [loadingBoleto, setLoadingBoleto] = useState(false)
  const [barCode, setBarCode] = useState('')
  const [transactionAmountPix, setTransactionAmountPix] = useState<
    number | null
  >(null)

  const sendPaymentRequestBoleto = async (barCode: string) => {
    setLoadingBoleto(true)
    console.log(barCode)
    if (!barCode) {
      toast.error('Código Boleto inválido')
      setLoadingBoleto(false)
      return
    }
    try {
      const response = await fetch('/pay/boleto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bar_code: barCode }),
      })
      if (response.ok) {
        const data: PaymentResponse = await response.json()

        setIsAcceptedBoleto(false)
        setLoadingBoleto(false)

        console.log('Payment successful:', data)
      } else {
        console.log(response.body)
        console.log(response.headers)
        setLoadingPix(false)
        toast.error('Código Boleto inválido!')
        console.error('Payment failed')
      }
    } catch (error) {
      setLoadingPix(false)
      console.error('Error:', error)
    }
  }

  const [merchantNamePix, setMerchantNamePix] = useState<string | null>('')
  const sendPaymentRequestPix = async (barCode: string) => {
    setLoadingPix(true)
    console.log(barCode)
    if (!barCode) {
      toast.error('Código PIX inválido')
      setLoadingPix(false)
      return
    }
    try {
      const response = await fetch('/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bar_code: barCode }),
      })
      if (response.ok) {
        const data: PaymentResponse = await response.json()
        console.log(data.pix_data.MerchantName)
        console.log(data.pix_data.TransactionAmount)
        setMerchantNamePix(data.pix_data.MerchantName)
        const parsedTransactionAmountPix = parseFloat(
          data.pix_data.TransactionAmount,
        )
        setIsAcceptedPix(false)
        setLoadingPix(false)
        setTransactionAmountPix(Number(parsedTransactionAmountPix.toFixed(2)))

        console.log('Payment successful:', data)
      } else {
        console.log(response.body)
        console.log(response.headers)
        setLoadingPix(false)
        toast.error('Código PIX inválido!')
        console.error('Payment failed')
      }
    } catch (error) {
      setLoadingPix(false)
      console.error('Error:', error)
    }
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
            <Input
              type="text"
              id="pixcode"
              placeholder="Código PIX"
              value={barCode}
              onChange={(e) => setBarCode(e.target.value)}
            />
          </div>
          {isAcceptedPix && (
            <Button
              className="w-full"
              onClick={() => sendPaymentRequestPix(barCode)}
            >
              {loadingPix ? 'Carregando...' : 'Continuar'}
            </Button>
          )}
          {!isAcceptedPix && (
            <>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">Pagamento via PIX</h3>
                <p className="p-4 text-gray-500 dark:text-gray-400">
                  Escolha a melhor opção de parcelamento para você.
                </p>
                <p className="pb-2">
                  Valor original:{' '}
                  <Badge variant="outline">{transactionAmountPix}</Badge>
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
                        4 parcelas de R$
                        {transactionAmountPix
                          ? (transactionAmountPix * 1.02) / 4
                          : 0}
                      </div>
                      <Badge variant="outline">2% sobre o total</Badge>
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
                        2 parcelas de R$
                        {transactionAmountPix
                          ? (transactionAmountPix * 1.025) / 2
                          : 0}
                      </div>
                      <Badge variant="outline">2.5% sobre o total</Badge>
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
                        1 parcela de R$
                        {transactionAmountPix
                          ? (transactionAmountPix * 1.03) / 1
                          : 0}
                      </div>
                      <Badge variant="outline">3% sobre o total</Badge>
                    </div>
                  </Label>
                </div>
                <SuccessPayment
                  merchantName={merchantNamePix ?? ''}
                  transactionAmount={transactionAmountPix ?? 0}
                />
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
            <Button
              className="w-full"
              onClick={() => sendPaymentRequestBoleto(barCode)}
            >
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
                <p className="pb-2">
                  Valor original: <Badge variant="outline">R$100,00</Badge>
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
                      <Badge variant="outline">2% sobre o total</Badge>
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
                      <Badge variant="outline">2.5% sobre o total</Badge>
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
                      <Badge variant="outline">3% sobre o total</Badge>
                    </div>
                  </Label>
                </div>
                <SuccessPayment merchantName="" transactionAmount={0} />
              </RadioGroup>
            </>
          )}
        </Card>
      </TabsContent>
    </Tabs>
  )
}
