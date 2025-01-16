import { Heading } from '../components/heading'
import { Divider } from '../components/divider'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon, ClockIcon } from '@heroicons/react/20/solid'
import { Description } from '../components/fieldset'
import { Button } from '../components/button'

const products = [
    {
        id: 1,
        name: 'Pencil Case',
        price: '$35.00',
        description: "Compact case to organize pencils, pens, and other stationery.",
        inStock: true,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
        imageAlt: 'Insulated bottle with white base and black snap lid.',
    },
    {
        id: 2,
        name: 'Ballpoint Blue Pen',
        price: '$32.00',
        description: 'Smooth-writing ballpoint pen, pack of 5',
        inStock: false,
        size: 'Large',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in sienna.",
    },
]

const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
        const price = parseFloat(product.price.replace('$', ''));
        return total + price;
    }, 0).toFixed(2);
};

export default function Cart() {
    return (
        <div className="mx-auto max-w-7xl">
            <div className="flex justify-between">
                <div className="pb-2">
                    <Heading>Cart</Heading>
                </div>
                <div>
                    <p className='font-medium text-gray-700'>Total: ${calculateTotalPrice()}</p>
                </div>
            </div>
            <form>
                <div>

                    <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                        {products.map((product, productIdx) => (
                            <li key={product.id} className="flex py-6 sm:py-10">
                                <div className="shrink-0">
                                    <img
                                        alt={product.imageAlt}
                                        src={product.imageSrc}
                                        className="size-24 rounded-lg object-cover sm:size-32"
                                    />
                                </div>

                                <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                    <div>
                                        <div className="flex justify-between sm:grid sm:grid-cols-2">
                                            <div className="pr-6">
                                                <h3 className="text-sm">
                                                    <a className="font-medium text-gray-700 hover:text-gray-800">
                                                        {product.name}
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                                {product.size ? <p className="mt-1 text-sm text-gray-500">{product.size}</p> : null}
                                            </div>

                                            <p className="text-right text-sm font-medium text-gray-900">{product.price}</p>
                                        </div>

                                        <div className="mt-4 flex items-center sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
                                            <div className="inline-grid w-full max-w-16 grid-cols-1">
                                                <select
                                                    name={`quantity-${productIdx}`}
                                                    aria-label={`Quantity, ${product.name}`}
                                                    className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                >
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                    <option value={6}>6</option>
                                                    <option value={7}>7</option>
                                                    <option value={8}>8</option>
                                                </select>
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                                />
                                            </div>

                                            <button
                                                type="button"
                                                className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
                                            >
                                                <span>Remove</span>
                                            </button>
                                        </div>
                                    </div>

                                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                                        {product.inStock ? (
                                            <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-green-500" />
                                        ) : (
                                            <ClockIcon aria-hidden="true" className="size-5 shrink-0 text-gray-300" />
                                        )}

                                        <span>{product.inStock ? 'In stock' : `Out of Stock`}</span>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="py-5 sm:flex">
                    <dd className="mt-3 flex justify-end gap-x-6 sm:mt-0 sm:flex-auto">
                        <Button color="blue" className="mt-5" href="/app">
                            Checkout
                        </Button>
                    </dd>
                </div>

            </form>
        </div>
    )
}