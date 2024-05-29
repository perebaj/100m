import { UserButton } from '@clerk/nextjs'
import { auth, clerkClient } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  const { userId } = auth().protect()

  const user = await clerkClient.users.getUser(userId)

  if (!user) return null

  return (
    <>
      <main className="mx-auto w-full max-w-[75rem]">
        <div className="grid grid-cols-[1fr_20.5rem] gap-10 pb-10">
          <div>
            <header className="flex h-16 w-full items-center justify-between gap-4">
              <div className="flex gap-4">
                <div aria-hidden className="h-6 w-px bg-[#C7C7C8]" />
              </div>
              <div className="flex items-center gap-2">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: 'size-6',
                    },
                  }}
                />
              </div>
            </header>
          </div>
          <div className="pt-[3.5rem]"></div>
        </div>
      </main>
    </>
  )
}
