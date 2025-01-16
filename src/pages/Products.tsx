import { Heading } from "../components/heading"
import { Button } from '../components/button'

const products = [
    {
        "name": "Pencil Case",
        "description": "Compact case to organize pencils, pens, and other stationery.",
        "stock": 100,
        "price": 1200
    },
    {
        "name": "Ballpoint Pen",
        "description": "Smooth-writing ballpoint pen, pack of 5.",
        "stock": 200,
        "price": 500
    },
    {
        "name": "Wooden Ruler",
        "description": "12-inch sturdy wooden ruler for accurate measurements.",
        "stock": 150,
        "price": 300
    },
    {
        "name": "Notebook",
        "description": "A5 notebook with 200 pages for notes and doodles.",
        "stock": 80,
        "price": 1500
    },
    {
        "name": "Eraser",
        "description": "Soft eraser for clean corrections.",
        "stock": 300,
        "price": 100
    },
    {
        "name": "Shampoo Bottle",
        "description": "500ml bottle of daily-use shampoo for shiny hair.",
        "stock": 60,
        "price": 3500
    },
    {
        "name": "Toothpaste",
        "description": "150g tube of mint-flavored toothpaste for fresh breath.",
        "stock": 90,
        "price": 250
    },
    {
        "name": "Backpack",
        "description": "Durable backpack with multiple compartments for daily use.",
        "stock": 40,
        "price": 8000
    },
    {
        "name": "Lunch Box",
        "description": "Leak-proof lunch box with separate compartments.",
        "stock": 75,
        "price": 4500
    },
    {
        "name": "Water Bottle",
        "description": "1-liter reusable water bottle with a secure cap.",
        "stock": 100,
        "price": 2000
    }
];


export default function Products() {
    return (
        <div class="min-h-screen w-full">

            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <Heading>Products</Heading>
                </div>
                <div className="flex w-full justify-end items-center py-2">
                    <div className="flex relative w-1/5 bg-gray-100 rounded-lg mr-2">
                        <input
                            type="text"
                            placeholder="Search product..."
                            className="w-full bg-transparent py-1 pl-10 text-medium font-normal text-gray-900 focus:outline-none"
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
                            href=""
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
                                    <th scope="col" className="py-3 text-left text-medium font-semibold text-gray-900">
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
                                {products.map((product, index) => (
                                    <tr
                                        key={product.name}
                                        className={index % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                                    >
                                        <td className="whitespace-nowrap py-1.5 text-sm text-gray-900">{product.name}</td>
                                        <td className="whitespace-nowrap py-1.5 text-sm text-gray-900">{product.description}</td>
                                        <td className="whitespace-nowrap py-1.5 text-sm text-gray-600">{product.price}</td>
                                        <td className="whitespace-nowrap py-1.5 text-sm text-gray-600">{product.stock}</td>
                                        <td className="relative whitespace-nowrap py-1.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <button
                                                href="#"
                                                className="inline-flex items-center text-zinc-500 hover:text-zinc-900 p-4"
                                                aria-label={`View details of ${product.name}`}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                </svg>

                                                <span className="sr-only">{`, ${product.name}`}</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="6" className=" py-3 text-sm text-gray-600">
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
