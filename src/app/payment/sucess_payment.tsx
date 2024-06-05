import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface SuccessPaymentProps {
  merchantName: string // Define a propriedade merchantName como uma string
  transactionAmount: number
}

export default function SuccessPayment({
  merchantName,
  transactionAmount,
}: SuccessPaymentProps) {
  const [loadingPayment, setLoadingPaymentPix] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handlePaymentConfirm = () => {
    setLoadingPaymentPix(true)
    // Simulate an async API call with setTimeout
    setTimeout(() => {
      setLoadingPaymentPix(false)
      setIsDialogOpen(true)
    }, 2000) // Simulate a 2-second API call
  }

  return (
    <div>
      <Button
        className="w-full"
        onClick={handlePaymentConfirm}
        variant="default"
      >
        {loadingPayment ? 'Confirmando...' : 'Confirmar pagamento'}
      </Button>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Pagamento feito com sucesso!</DialogTitle>
          </DialogHeader>
          <Image
            src="/successpayment.svg"
            alt="success payment"
            width={400}
            height={300}
          />
          <DialogDescription className="py-4">
            Seu pagamento de R${transactionAmount} feito no fornecedor{' '}
            {merchantName} foi processado com sucesso. Obrigado por usar
            Single-player!
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  )
}
