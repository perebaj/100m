'use client'
import { useState } from 'react'

// Define the interfaces
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

export default function Meetings() {
  // const [responseMessage, setResponseMessage] = useState<string>('')
  const [paymentResponse, setPaymentResponse] =
    useState<PaymentResponse | null>(null)

  const sendPaymentRequest = async (barCode: string) => {
    console.log(barCode)
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
        console.log('Payment successful:', data)
        setPaymentResponse(data)
        // setResponseMessage('Payment successful: ' + JSON.stringify(data))
      } else {
        const errorText = await response.text()
        console.error('Payment failed:', errorText)
        // setResponseMessage('Payment failed: ' + errorText)
      }
    } catch (error) {
      console.error('Error:', error)
      // setResponseMessage('Error: ' + error)
    }
  }

  const handleButtonClick = () => {
    const barCode =
      '00020126580014BR.GOV.BCB.PIX01360edec7ce-60dc-43c8-91b0-fdf113d9f3e252040000530398654040.015802BR5925T. M. RONDON CONSULTORIA 6009SAO PAULO61080540900062240520te4kgzf0VYDsKVchsi186304E150' // Replace with your actual barcode value
    sendPaymentRequest(barCode)
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Send Payment Request</button>
      {/* {responseMessage && <p>{responseMessage}</p>} */}
      {paymentResponse && (
        <pre>
          {JSON.stringify(paymentResponse.pix_data.MerchantName, null, 2)}
          {JSON.stringify(paymentResponse.pix_data.MerchantCity, null, 2)}
        </pre>
      )}
    </div>
  )
}
