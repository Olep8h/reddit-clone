'use client'

import { cn } from '@/lib/utils'
import { signIn } from 'next-auth/react'
import * as React from 'react'
import { FC } from 'react'
import { Button } from '@/components/ui/Button'
import { useToast } from '@/hooks/use-toast'
import { Icons } from './Icons'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
    const { toast } = useToast()
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const loginWithGoogle = async () => {
        setIsLoading(true)

        try {
            await signIn('google')
        } catch (error) {
            toast({
                title: 'Error',
                description: 'There was an error logging in with Google',
                variant: 'destructive',
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={cn('flex justify-center', className)} {...props}>
            <Button
                isLoading={isLoading}
                type='button'
                size='sm'
                className='w-full'
                onClick={loginWithGoogle}
                disabled={isLoading}>
                {isLoading ? null : <Icons.google className='h-4 w-4 mr-2' />}
                Google
            </Button>
        </div>
    )
}

export default UserAuthForm

// const UserAuthForm = () => {
//     return (
//         <div className='flex flex-col space-y-4'>
//             <div className='flex flex-col space-y-1'>
//                 <label htmlFor='username' className='text-sm font-semibold'>
//                     Username
//                 </label>
//                 <input
//                     type='text'
//                     id='username'
//                     name='username'
//                     className='border border-gray-300 rounded-sm px-3 py-2 text-sm'
//                 />
//             </div>
//             <div className='flex flex-col space-y-1'>
//                 <label htmlFor='password' className='text-sm font-semibold'>
//                     Password
//                 </label>
//                 <input
//                     type='password'
//                     id='password'
//                     name='password'
//                     className='border border-gray-300 rounded-sm px-3 py-2 text-sm'
//                 />
//             </div>
//             <button className='btn btn-primary'>Sign In</button>
//         </div>
//     )
// }
//
// export default UserAuthForm
