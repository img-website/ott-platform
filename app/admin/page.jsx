"use client"
import { auth } from '@/app/firebase/config';
import { AuthContext } from '@/context/AuthContext';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader, Divider, Input } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { FiEdit2 } from 'react-icons/fi';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { RxReset } from 'react-icons/rx';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const router = useRouter()
    const { authData, setAuthData } = useContext(AuthContext)

    const handleSignIn = async () => {
        try {
            const res = await signInWithEmailAndPassword(email, password)
            if (res) {
                setAuthData(pre => ({ ...pre, userId: res?.user?.uid, userData: res?.user, isAuthenticated: true }))
                // localStorage.setItem('token', res?.user?.uid)
                setEmail('')
                setPassword('')
                router.push('/')
            }
        } catch (error) {
            console.error("error", error);
        }
    }
    if (authData?.isAuthenticated) {
        router.push('/');
        return null;
    }
    return (
        <div className='min-h-dvh flex items-center justify-center bg-gray-900'>
                <Card as={"form"} onSubmit={handleSignIn} className="w-96 bg-gray-800 text-white mx-auto has-[[aria-label=Loading]]:!pointer-events-none [&_label]:has-[[aria-label=Loading]]:!pointer-events-none">
                    <CardHeader className="flex gap-3">
                        <FiEdit2 className="size-6" />
                        <div className="flex flex-col">
                            <p className="text-lg font-bold">Sign In</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody className="bg-gray-900 grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-3">
                        <div className="mb-4">
                            <Input
                                classNames={{
                                    base: "",
                                    inputWrapper: "border-gray-400 data-[hover=true]:border-gray-300 group-data-[focus=true]:border-gray-200",
                                    label: "group-data-[filled-within=true]:text-gray-300",
                                    innerWrapper: "",
                                    input: "text-gray-200 text-sm",
                                }}
                                label="Email ID"
                                isRequired
                                size="lg"
                                variant="bordered"
                                startContent={<MdDriveFileRenameOutline size={18} />}
                                type="email"
                                id="email"
                                value={email}
                                onValueChange={setEmail}
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                classNames={{
                                    base: "",
                                    inputWrapper: "border-gray-400 data-[hover=true]:border-gray-300 group-data-[focus=true]:border-gray-200",
                                    label: "group-data-[filled-within=true]:text-gray-300",
                                    innerWrapper: "",
                                    input: "text-gray-200 text-sm",
                                }}
                                label="Password"
                                isRequired
                                size="lg"
                                variant="bordered"
                                startContent={<MdDriveFileRenameOutline size={18} />}
                                type="password"
                                id="password"
                                value={password}
                                onValueChange={setPassword}
                            />
                        </div>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <div className="flex gap-4 items-center w-full">
                            {
                                !isLoading ?
                                    <Button type="submit" variant="solid" size="lg" className="!w-1/2 bg-purple-700 text-white font-semibold [&_svg]:has-[[aria-label=Loading]]:hidden [&_[aria-label=Loading]>*]:size-4" startContent={<IoMdAddCircleOutline />}>
                                        Sign In
                                    </Button>
                                    :
                                    <Button type="submit" variant="solid" isLoading size="lg" className="!w-1/2 bg-purple-700 text-white font-semibold [&_svg]:has-[[aria-label=Loading]]:hidden [&_[aria-label=Loading]>*]:size-4" startContent={<IoMdAddCircleOutline />}>
                                        Loging
                                    </Button>
                            }
                            <div>
                                <Link className='text-white' href={'/sign-up'}>I&apos;m New Here</Link>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
        </div>
    )
}

export default SignIn