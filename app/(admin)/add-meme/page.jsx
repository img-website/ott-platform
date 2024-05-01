"use client";
import React, { useEffect, useRef, useState } from "react";
import { db, storage } from "@/app/firebase/config";
import { addDoc, getDocs, collection } from "firebase/firestore";
import { Card, CardHeader, CardBody, CardFooter, Divider, Button, Input, Select, SelectItem } from "@nextui-org/react";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { FiEdit2 } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RxReset } from "react-icons/rx";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoLink } from "react-icons/io5";
import { FaRegImages } from "react-icons/fa";
import { TbStatusChange } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { toast } from "react-toastify"


const fetchStatusDataFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "status"))

    const statusData = [];
    querySnapshot.forEach((doc) => {
        statusData.push({ id: doc.id, ...doc.data() });
    })
    return statusData;
};

const fetchCategoryDataFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "category"))

    const categoryData = [];
    querySnapshot.forEach((doc) => {
        categoryData.push({ id: doc.id, ...doc.data() });
    })
    return categoryData;
};

const addDataToFireStore = async (name, downloadURL, url, status, category) => {
    try {
        const docRef = await addDoc(collection(db, "allmemes"), {
            name: name,
            image: downloadURL,
            url: url,
            wishlist: false,
            statusID: status,
            categoryID: category
        });
        // console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (error) {
        toast.error(error);
        return false;
    }
};

const AddMeme = () => {
    const [statusGetData, setStatusGetData] = useState();
    const [categoryGetData, setCategoryGetData] = useState();

    const [name, setName] = useState("");
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const [status, setStatus] = useState("2")
    const [category, setCategory] = useState("3")
    const inputFileRef = useRef(null);

    const [isLoading, setIsLoading] = useState(false);

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = async (downloadURL) => {
        setIsLoading(true)
        const added = await addDataToFireStore(name, downloadURL, url, status, category);
        if (added) {
            setName("");
            setImage("");
            setUrl("")
            setStatus("")
            setCategory("")

            // Reset input file
            if (inputFileRef.current) {
                inputFileRef.current.value = ""; // Reset the value to clear the selected file
            }

            toast.success("Meme Added Successfuly!");
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    };
    // uploading image to firebase storage
    const upload = (e) => {
        e.preventDefault();
        if (image == null)
            return;
        
        setIsLoading(true)
        const storages = ref(storage, `/images/${image.name}`)
        uploadBytes(storages, image)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((downloadURL) => {
                        handleSubmit(downloadURL)
                    })
            })

    }

    useEffect(() => {
        const fetchStatusData = async () => {
            try {
                const statusData = await fetchStatusDataFromFirestore();
                setStatusGetData(statusData)
            } catch (error) {
                toast.error(error)
            }

        }
        fetchStatusData();

        const fetchCategoryData = async () => {
            try {
                const categoryData = await fetchCategoryDataFromFirestore();
                setCategoryGetData(categoryData)
            } catch (error) {
                toast.error(error)
            }

        }
        fetchCategoryData();
    }, [])

    return (
        <>
            <div className="overflow-x-hidden overflow-y-auto px-4 md:px-8">
                <Card as={"form"} onSubmit={upload} className="w-full bg-gray-800 text-white mx-auto has-[[aria-label=Loading]]:!pointer-events-none [&_label]:has-[[aria-label=Loading]]:!pointer-events-none">
                    <CardHeader className="flex gap-3">
                        <FiEdit2 className="size-6" />
                        <div className="flex flex-col">
                            <p className="text-lg font-bold">Add OTT</p>
                            <p className="text-sm">All Fields Are Mandatory</p>
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
                                label="Video Title"
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
                                    base: "",
                                    inputWrapper: "border-gray-400 data-[hover=true]:border-gray-300 group-data-[focus=true]:border-gray-200",
                                    label: "group-data-[filled-within=true]:text-gray-300",
                                    innerWrapper: "",
                                    input: "text-gray-200 text-sm",
                                }}
                                label="Video URL"
                                isRequired
                                size="lg"
                                variant="bordered"
                                startContent={<IoLink size={18} />}
                                type="url"
                                id="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <Select
                                classNames={{
                                    base: "",
                                    mainWrapper: "",
                                    trigger: "!border-gray-400 data-[hover=true]:!border-gray-300 group-data-[focus=true]:!border-gray-200",
                                    label: "group-data-[filled=true]:text-gray-300",
                                    innerWrapper: "",
                                    value: "text-gray-200 text-sm",
                                }}
                                label="Select Video Status"
                                isRequired
                                size="lg"
                                variant="bordered"
                                startContent={<TbStatusChange size={18} />}
                                id="status"
                                selectedKeys={[status]}
                                onChange={handleStatusChange}
                            >
                                {statusGetData ? statusGetData?.map((item) => (
                                    <SelectItem className="capitalize font-semibold" key={item?.statusID} value={item?.statusID}>
                                        {item?.statusName}
                                    </SelectItem>
                                )) : ''}
                            </Select>
                        </div>
                        <div className="mb-4">
                            <Select
                                classNames={{
                                    base: "",
                                    mainWrapper: "",
                                    trigger: "!border-gray-400 data-[hover=true]:!border-gray-300 group-data-[focus=true]:!border-gray-200",
                                    label: "group-data-[filled=true]:text-gray-300",
                                    innerWrapper: "",
                                    value: "text-gray-200 text-sm",
                                }}
                                label="Select Video Category"
                                isRequired
                                size="lg"
                                variant="bordered"
                                startContent={<BiCategory size={18} />}
                                id="category"
                                selectedKeys={[category]}
                                onChange={handleCategoryChange}
                            >
                                {categoryGetData ? categoryGetData?.map((item) => (
                                    <SelectItem className="capitalize font-semibold" key={item?.categoryID} value={item?.categoryID}>
                                        {item?.categoryName}
                                    </SelectItem>
                                )) : ''}
                            </Select>
                        </div>
                        <div className="mb-4 sm:col-span-2">
                            <Input
                                classNames={{
                                    base: "cursor-pointer",
                                    inputWrapper: "border-gray-400 data-[hover=true]:border-gray-300 group-data-[focus=true]:border-gray-200 cursor-pointer",
                                    label: "group-data-[filled-within=true]:text-gray-300 cursor-pointer",
                                    innerWrapper: "cursor-pointer",
                                    input: "text-gray-200 text-sm cursor-pointer file:mr-2 file:py-0 file:px-1 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 file:cursor-pointer",
                                }}
                                label="Upload Image"
                                isRequired
                                size="lg"
                                variant="bordered"
                                startContent={<FaRegImages size={18} />}
                                type="file"
                                id="image"
                                ref={inputFileRef}
                                onChange={(e) => setImage(e.target.files?.[0])}
                            />
                        </div>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <div className="flex gap-4 items-center w-full">
                            {
                                !isLoading ?
                                    <Button type="submit" variant="solid" size="lg" className="!w-1/2 bg-purple-700 text-white font-semibold [&_svg]:has-[[aria-label=Loading]]:hidden [&_[aria-label=Loading]>*]:size-4" startContent={<IoMdAddCircleOutline />}>
                                        Add
                                    </Button>
                                    :
                                    <Button type="submit" variant="solid" isLoading size="lg" className="!w-1/2 bg-purple-700 text-white font-semibold [&_svg]:has-[[aria-label=Loading]]:hidden [&_[aria-label=Loading]>*]:size-4" startContent={<IoMdAddCircleOutline />}>
                                        Saving
                                    </Button>
                            }
                            <Button type="button" onClick={() => {
                                setName("");
                                setImage("");
                                setUrl("");
                                setStatus("2");
                                setCategory("3");
                                if (inputFileRef.current) {
                                    inputFileRef.current.value = ""; // Reset the value to clear the selected file
                                }
                            }} size="lg" variant="bordered" className="!w-1/2 border-gray-200/30 font-semibold text-white/70" startContent={<RxReset />}>
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
