import { Heading } from "../components/heading"
import { Button } from '../components/button'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, Radio, RadioGroup } from '@headlessui/react'
import { Field, Label } from '../components/fieldset'
import { Input } from '../components/input'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

const products = [
    {
        id: 1,
        name: 'Zip Tote Basket',
        description: 'A stylish zip tote bag made of white canvas with black straps and handle.',
        href: '#',
        imageSrc: '/src/img/Zip_Tote_Basket.png',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
        stock: 85,
    },
    {
        id: 2,
        name: 'Water Bottle',
        description: 'A durable blue water bottle perfect for staying hydrated on the go.',
        href: '#',
        imageSrc: '/src/img/bottle.jpeg',
        imageAlt: 'Blue water bottle.',
        price: '$20',
        stock: 72,
    },
    {
        id: 3,
        name: 'Coffee Mug',
        description: 'A sleek black coffee mug for your favorite hot beverages.',
        href: '#',
        imageSrc: '/src/img/Coffee Mug.png',
        imageAlt: 'Black coffee mug.',
        price: '$15',
        stock: 40,
    },
    {
        id: 4,
        name: 'Notebook',
        description: 'A premium brown notebook ideal for journaling and note-taking.',
        href: '#',
        imageSrc: '/src/img/Notebook.png',
        imageAlt: 'Brown notebook.',
        price: '$10',
        stock: 90,
    },
    {
        id: 5,
        name: 'Pen',
        description: 'A high-quality red pen with smooth ink flow for writing.',
        href: '#',
        imageSrc: '/src/img/Pen.png',
        imageAlt: 'Red pen.',
        price: '$5',
        stock: 65,
    },
    {
        id: 6,
        name: 'Backpack',
        description: 'A spacious green backpack with multiple compartments for travel and daily use.',
        href: '#',
        imageSrc: '/src/img/Backpack.png',
        imageAlt: 'Green backpack.',
        price: '$50',
        stock: 77,
    },
    {
        id: 7,
        name: 'Sunglasses',
        description: 'Stylish black sunglasses with UV protection for outdoor activities.',
        href: '#',
        imageSrc: '/src/img/Sunglasses.png',
        imageAlt: 'Black sunglasses.',
        price: '$25',
        stock: 58,
    },
    {
        id: 8,
        name: 'Hat',
        description: 'A comfortable and breathable white hat for sunny days.',
        href: '#',
        imageSrc: '/src/img/Hat.png',
        imageAlt: 'White hat.',
        price: '$30',
        stock: 33,
    },
    {
        id: 9,
        name: 'Shoes',
        description: 'A pair of gray shoes designed for comfort and durability.',
        href: '#',
        imageSrc: '/src/img/Shoes.png',
        imageAlt: 'Gray shoes.',
        price: '$60',
        stock: 49,
    },
    {
        id: 10,
        name: 'Watch',
        description: 'A sleek silver watch with a modern design and reliable performance.',
        href: '#',
        imageSrc: '/src/img/Watch_backgr(1).png',
        imageAlt: 'Silver watch.',
        price: '$100',
        stock: 92,
    },
];


export default function Products() {
    const [searchQuery, setSearchQuery] = useState('')
    let [isOpen, setIsOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    return (
        <div className="min-h-screen w-full">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto px-4">
                    <Heading>Products</Heading>
                </div>
                <div className="flex w-full justify-end items-center py-2">
                    <div className="flex relative w-1/5 bg-gray-100 rounded-lg mr-2">
                        <input
                            type="text"
                            placeholder="Search product..."
                            className="w-full bg-transparent py-1 pl-10 text-medium font-normal text-gray-900 focus:outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute -left-0.5 top-1/2 transform -translate-y-1/2 h-5 w-5 ml-2 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35m1.9-6.15a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <Button
                            color="blue"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            onClick={() => {
                                setSelectedProduct(products[0]); // Store the selected product
                                setIsOpen(true); // Open the dialog
                            }}
                        >
                            Add Product...
                        </Button>
                    </div>

                </div>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-2">
                    <div className="block min-w-full py-1 align-middle">
                        <table className="min-w-full">
                            <div className="mb-2">
                            </div>
                            <thead className="border border-t-0 border-x-0">
                                <tr>
                                    <th scope="col" className="py-3 px-4 text-left text-medium font-semibold text-gray-900">
                                        Product Name
                                    </th>
                                    <th scope="col" className="py-3 pl-4 pr-3 text-left text-medium font-semibold text-gray-900 sm:pl-0">
                                        Description
                                    </th>
                                    <th scope="col" className="py-3 text-left text-medium font-semibold text-gray-900">
                                        Price
                                    </th>
                                    <th scope="col" className="py-3 text-left text-medium font-semibold text-gray-900">
                                        Stock
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 px-2">
                                {filteredProducts.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="py-4 text-center text-sm text-gray-500">
                                            No products matching your search query
                                        </td>
                                    </tr>
                                ) : (
                                    filteredProducts.map((product, index) => (
                                        <tr
                                            key={product.name}
                                            className={index % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                                        >
                                            <td className="whitespace-nowrap lg:px-4 py-1.5 text-sm text-gray-900">{product.name}</td>
                                            <td className="whitespace-nowrap py-1.5 text-sm text-gray-900">{product.description}</td>
                                            <td className="whitespace-nowrap py-1.5 text-sm text-gray-600">{product.price}</td>
                                            <td className="whitespace-nowrap py-1.5 text-sm text-gray-600">{product.stock}</td>
                                            <td className="relative whitespace-nowrap py-1.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                <button
                                                    className="inline-flex items-center text-zinc-500 hover:text-zinc-900 p-4"
                                                    aria-label={`View details of ${product.name}`}
                                                    onClick={() => {
                                                        setSelectedProduct(product); // Store the selected product
                                                        setIsOpen(true); // Open the dialog
                                                    }}

                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                    </svg>

                                                    <span className="sr-only">{`, ${product.name}`}</span>
                                                </button>
                                                <Dialog open={isOpen} onClose={setIsOpen} className="relative z-10">

                                                    <DialogBackdrop
                                                        transition
                                                        className="fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-500/15 px-2 py-2 transition duration-100 focus:outline-0 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-zinc-950/50"
                                                    />
                                                    {selectedProduct && (
                                                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                                            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                                                                {/* This element is to trick the browser into centering the modal contents. */}
                                                                <span aria-hidden="true" className="hidden md:inline-block md:h-screen md:align-middle">
                                                                    &#8203;
                                                                </span>
                                                                <DialogPanel
                                                                    transition
                                                                    className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl"
                                                                >
                                                                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => setIsOpen(false)}
                                                                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                                                        >
                                                                            <span className="sr-only">Close</span>
                                                                            <XMarkIcon aria-hidden="true" className="size-6" />
                                                                        </button>

                                                                        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:items-center lg:gap-x-8">
                                                                            <img
                                                                                src={selectedProduct.imageSrc}
                                                                                className="my-4 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
                                                                            />
                                                                            <div className="sm:col-span-8 lg:col-span-7">
                                                                                <h2 className="text-xl font-medium text-gray-900 sm:pr-12 mb-2">{selectedProduct.name}</h2>
                                                                                <p className="text-gray-500 sm:pr-12 mb-2">{selectedProduct.description}</p>
                                                                                <section aria-labelledby="information-heading" className="mt-1">
                                                                                    <h2 className="text-l text-gray-900 sm:pr-12 mb-2">Price</h2>
                                                                                    <p className="text-gray-500 mb-2">{selectedProduct.price}</p>
                                                                                    <Field>
                                                                                        <h2 className="text-l text-gray-900 sm:pr-12 mb-2">Stock</h2>
                                                                                        <Input className="w-[9%]" name="stock" placeholder={selectedProduct.stock.toString()} />
                                                                                    </Field>
                                                                                </section>

                                                                                <section aria-labelledby="options-heading" className="mt-8">
                                                                                    <form>
                                                                                        <button
                                                                                            type="submit"
                                                                                            className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                                                        >
                                                                                            Update
                                                                                        </button>
                                                                                    </form>
                                                                                </section>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </DialogPanel>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Dialog>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={6} className="py-3 text-sm text-gray-600">
                                        <div className="flex justify-between items-center">
                                            <p>Showing 1 to 8 out of 20 results</p>
                                            <div className="flex items-center gap-2">
                                                <button className="inline-flex items-center p-4 text-sm text-zinc-500 hover:text-zinc-900 font-medium">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="2"
                                                        stroke="currentColor"
                                                        className="w-5 h-5 mr-2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15.75 19.5L8.25 12l7.5-7.5"
                                                        />
                                                    </svg>
                                                </button>
                                                <div className="flex items-center gap-1">
                                                    {[1, 2, 3, "...", 5].map((page, index) => (
                                                        <button
                                                            key={index}
                                                            className={`px-3 py-1.5 text-sm font-medium text-zinc-500 hover:text-white hover:bg-blue-600 rounded-md ${typeof page === "number" ? "cursor-pointer" : "cursor-default"
                                                                }`}
                                                            disabled={typeof page !== "number"}
                                                        >
                                                            {page}
                                                        </button>
                                                    ))}
                                                </div>
                                                <button className="inline-flex items-center p-4 text-sm text-zinc-500 hover:text-zinc-900 font-lg">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="2"
                                                        stroke="currentColor"
                                                        className="w-5 h-5 ml-2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
