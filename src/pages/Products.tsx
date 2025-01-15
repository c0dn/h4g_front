import { Heading } from "../components/heading"

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
        <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <Heading>Products</Heading>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            type="button"
                            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Add product
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-8 flow-root overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <table className="w-full text-left">
                        <thead className="bg-white">
                            <tr>
                                <th scope="col" className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                    Product Name
                                    <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
                                    <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    Price
                                </th>
                                <th
                                    scope="col"
                                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                                >
                                    Stock
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3">
                                    <span className="sr-only">View</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.name}>
                                    <td className="relative py-4 pr-3 text-sm font-medium text-gray-900">
                                        {product.name}
                                        <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                                        <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                                    </td>
                                    <td className="px-3 py-4 text-sm text-gray-500">{product.price}</td>
                                    <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{product.stock}</td>
                                    <td className="relative py-4 pl-3 text-right text-sm font-medium">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            View<span className="sr-only">, {product.name}</span>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
