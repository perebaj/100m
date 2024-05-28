import { Check, Circle, Plus, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <Card className="mx-auto w-full max-w-xl">
      <CardHeader>
        <CardTitle>Define your tasks</CardTitle>
        <CardDescription>
          Add the tasks you need to complete and estimate how long they will
          take.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 px-6 pb-2">
        <div className="flex items-center gap-4">
          <Circle className="h-4 w-4 text-gray-500" />
          <Input className="flex-1" placeholder="Task name" />
          <Input className="w-24" placeholder="Time Est(min)" type="number" />
          <Button className="ml-auto h-6 w-6" size="icon" variant="outline">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove task</span>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Circle className="h-4 w-4 text-gray-500" />
          <Input className="flex-1" placeholder="Task name" />
          <Input className="w-24" placeholder="Time Est(min)" type="number" />
          <Button className="ml-auto h-6 w-6" size="icon" variant="outline">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove task</span>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Circle className="h-4 w-4 text-gray-500" />
          <Input className="flex-1" placeholder="Task name" />
          <Input className="w-24" placeholder="Time Est(min)" type="number" />
          <Button className="ml-auto h-6 w-6" size="icon" variant="outline">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove task</span>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Circle className="h-4 w-4 text-gray-500" />
          <Input className="flex-1" placeholder="Task name" />
          <Input className="w-24" placeholder="Time Est(min)" type="number" />
          <Button className="ml-auto h-6 w-6" size="icon" variant="outline">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove task</span>
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <Button className="" variant={'link'} size={'sm'}>
            <Plus className="mr-2 h-4 w-4" />
            Add task
          </Button>
          <div className="py-2">
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" />
              Generate google meeting link
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
