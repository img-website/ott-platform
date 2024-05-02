"use client"
import { auth } from '@/app/firebase/config';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const router = useRouter()

    const handleSignIn = async () => {
        try {
            const res = await signInWithEmailAndPassword(email, password)
            if(res){
                localStorage.setItem('token', res?.user?.uid)
                setEmail('')
                setPassword('')
                router.push('/')
            }
        } catch (error) {
            console.error("error",error);
        }
    }
    return (
        <div className='min-h-dvh flex items-center justify-center bg-gray-900'>
            <div className='bg-gray-800 p-10 rounded-lg shadow-xl w-96'>
                <h1 className='text-white text-2xl mb-5'>Sign In</h1>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500' />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500' />
                <div>
                    <Link href={'/sign-up'}>I&apos;m New Here</Link>
                </div>
                <div>
                    <Button onClick={handleSignIn} className='w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500'>Sign In</Button>
                </div>
            </div>
        </div>
    )
}

export default SignIn