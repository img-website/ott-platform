"use client"
import { auth } from '@/app/firebase/config';
import { AuthContext } from '@/context/AuthContext';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const router = useRouter()
    const { authData, setAuthData } = useContext(AuthContext)

    const handleSignUp = async () => {
        try {
            const res = await createUserWithEmailAndPassword(email, password)
            if (res) {
                setAuthData(pre => ({ ...pre, userId: res?.user?.uid, userData: res?.user, isAuthenticated: true }))
                // localStorage.setItem('token', res?.user?.uid)
                setEmail('')
                setPassword('')
                router.push('/')
            }
        } catch (error) {
            console.error(error);
        }
    }
    if (authData?.isAuthenticated) {
        router.push('/');
        return null;
    }
    return (
        <div className='min-h-dvh flex items-center justify-center bg-gray-900'>
            <div className='bg-gray-800 p-10 rounded-lg shadow-xl w-96'>
                <h1 className='text-white text-2xl mb-5'>Sign Up</h1>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500' />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500' />
                <div>
                    <Link href={'/sign-in'}>Already I have an account.</Link>
                </div>
                <div>
                    <Button onClick={handleSignUp} className='w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500'>Sign Up</Button>
                </div>
            </div>
        </div>
    )
}

export default SignUp