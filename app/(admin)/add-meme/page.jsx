"use client";
import React, { useState } from "react";
import { db, storage } from "@/app/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { Card, CardHeader, CardBody, CardFooter, Divider, Button, Input } from "@nextui-org/react";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { FiEdit2 } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RxReset } from "react-icons/rx";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaRegImages } from "react-icons/fa";

const addDataToFireStore = async (name, downloadURL) => {
    try {
        const docRef = await addDoc(collection(db, "allmemes"), {
            name: name,
            image: downloadURL,
            wishlist: false
        });
        // console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (error) {
        // console.error("Error adding document: ", error);
        return false;
    }
};

const AddMeme = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("")

    const handleSubmit = async (downloadURL) => {
        const added = await addDataToFireStore(name, downloadURL);
        if (added) {
            setName("");
            setImage("");

            alert("Data added to firestore DB!");
        }
    };
    // uploading image to firebase storage
    const upload = (e) => {
        e.preventDefault();
        if (image == null)
            return;
        const storages = ref(storage, `/images/${image.name}`)
        uploadBytes(storages, image)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((downloadURL) => {
                        // console.log("downloadURL", { downloadURL })
                        handleSubmit(downloadURL)
                    })
            })

    }

    return (
        <>
            <div className="overflow-x-hidden overflow-y-auto px-4 md:px-8">
                <Card as={"form"} onSubmit={upload} className="max-w-[400px] bg-gray-800 text-white mx-auto has-[[aria-label=Loading]]:pointer-events-none">
                    <CardHeader className="flex gap-3">
                        <FiEdit2 className="size-6" />
                        <div className="flex flex-col">
                            <p className="text-lg font-bold">Add OTT</p>
                            <p className="text-sm">All Fields Are Mandatory</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody className="bg-gray-900">
                        <div className="mb-4">
                            <Input
                                classNames={{
                                    base: "max-w-full !bg-transparent hover:!bg-transparent",
                                    mainWrapper: "h-full !bg-gray-500/20 hover:!bg-gray-500/20 rounded-xl",
                                    input: "text-small !text-white placeholder:!text-gray-200",
                                    inputWrapper: "h-full font-normal text-gray-200 !bg-gray-500/20 hover:!bg-gray-500/20 border-gray-400 data-[hover=true]:border-gray-300 group-data-[focus=true]:border-gray-200",
                                }}
                                placeholder="Video Title"
                                isRequired
                                size="lg"
                                variant="bordered"
                                startContent={<MdDriveFileRenameOutline size={18} />}
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                classNames={{
                                    base: "max-w-full !bg-transparent hover:!bg-transparent",
                                    mainWrapper: "h-full !bg-gray-500/20 hover:!bg-gray-500/20 rounded-xl",
                                    input: "text-small !text-white placeholder:!text-gray-200",
                                    inputWrapper: "h-full font-normal text-gray-200 !bg-gray-500/20 hover:!bg-gray-500/20 border-gray-400 data-[hover=true]:border-gray-300 group-data-[focus=true]:border-gray-200",
                                }}
                                placeholder="Video Title"
                                isRequired
                                size="lg"
                                variant="bordered"
                                startContent={<FaRegImages size={18} />}
                                type="file"
                                id="image"
                                onChange={(e) => setImage(e.target.files?.[0])}
                            />
                        </div>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <div className="flex gap-4 items-center w-full">
                            <Button type="submit" variant="solid" size="lg" className="!w-1/2 bg-purple-700 text-white font-semibold [&_svg]:has-[[aria-label=Loading]]:hidden [&_[aria-label=Loading]>*]:size-4" startContent={<IoMdAddCircleOutline />}>
                                Add
                            </Button>
                            <Button type="button" onClick={() => { setName(""); setImage(""); }} size="lg" variant="bordered" className="!w-1/2 border-red-600 font-semibold text-white" startContent={<RxReset />}>
                                Reset
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
};

export default AddMeme;
