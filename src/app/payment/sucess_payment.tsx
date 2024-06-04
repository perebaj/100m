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

export default function SuccessPayment() {
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

  //   useEffect(() => {
  //     if (isDialogOpen) {
  //       const timer = setTimeout(() => {
  //         setIsDialogOpen(false)
  //       }, 5000) // Close the dialog after 5 seconds

  //       return () => clearTimeout(timer) // Clean up the timer on component unmount or dialog close
  //     }
  //   }, [isDialogOpen])

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
            Seu pagamento de R$99,99 feito no fornecedor Acme Circles foi
            processado com sucesso. Obrigado por usar FlexPay!
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  )
}
