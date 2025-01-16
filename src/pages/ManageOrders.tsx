import { Heading } from '../components/heading'
import { Divider } from '../components/divider'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

const orders = [
  {
    number: 'WU88191111',
    datetime: '2021-01-22',
    total: '$104.00',
    user: 'John Doe', // Added user
    products: [
      {
        id: 1,
        name: "Men's 3D Glasses Artwork Tee",
        price: '$36.00',
        imageSrc: '/src/img/bottle.jpeg',
        description: "A stylish 3D glasses artwork design printed on a high-quality tee for a unique look."
      },
      {
        id: 2,
        name: "Women's Casual Striped Shirt",
        price: '$68.00',
        imageSrc: '/src/img/bottle.jpeg',
        description: "A comfortable and casual striped shirt perfect for everyday wear, made with soft fabric."
      },
    ],
  },
  {
    number: 'WU88192222',
    datetime: '2021-02-15',
    total: '$130.00',
    user: 'Jane Smith', // Added user
    products: [
      {
        id: 3,
        name: "Unisex Pullover Hoodie",
        price: '$70.00',
        imageSrc: '/src/img/bottle.jpeg',
        description: "A warm and cozy pullover hoodie designed for both men and women, perfect for chilly days."
      },
      {
        id: 4,
        name: "Classic Baseball Cap",
        price: '$60.00',
        imageSrc: '/src/img/bottle.jpeg',
        description: "A classic, adjustable baseball cap with a timeless design that complements any casual outfit."
      },
    ],
  },
  {
    number: 'WU88193333',
    datetime: '2021-03-10',
    total: '$95.00',
    user: 'Alice Johnson', // Added user
    products: [
      {
        id: 5,
        name: "Men's Athletic Running Shoes",
        price: '$55.00',
        imageSrc: '/src/img/bottle.jpeg',
        description: "Men's athletic running shoes designed for maximum comfort and support during workouts or daily use."
      },
      {
        id: 6,
        name: "Wireless Earbuds",
        price: '$40.00',
        imageSrc: '/src/img/bottle.jpeg',
        description: "High-quality wireless earbuds that provide excellent sound and a comfortable fit for all-day use."
      },
    ],
  },
];

export default function ManageOrders() {
  return (
    <div>
      <main>
        <div className="mx-auto max-w-7xl pb-2">
          <Heading>Orders</Heading>
        </div>
        <Divider></Divider>

        <section className="mt-8">
          <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-5xl lg:px-0">
              {orders.map((order) => (
                <div
                  key={order.number}
                  className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
                >

                  <div className="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6 bg-zinc-50">
                    <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                      <div>
                        <dt className="font-medium text-gray-900">Order number</dt>
                        <dd className="mt-1 text-gray-900">{order.number}</dd>
                      </div>
                      <div className="hidden sm:block">
                        <dt className="font-medium text-gray-900">Date placed</dt>
                        <dd className="mt-1 text-gray-500">
                          <time>{order.datetime}</time>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">User</dt>
                        <dd className="mt-1 font-medium text-gray-500">{order.user}</dd>
                      </div>
                    </dl>

                    <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 ml-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Reject
                      </button>
                    </div>
                  </div>

                  {/* Products */}
                  <h4 className="sr-only">Items</h4>
                  <ul role="list" className="divide-y divide-gray-200">
                    {order.products.map((product) => (
                      <li key={product.id} className="p-4 sm:p-6 bg-zinc-50">
                        <div className="flex items-center sm:items-start">
                          <div className="size-20 shrink-0 overflow-hidden rounded-lg border-2 bg-gray-200 sm:size-32">
                            <img src={product.imageSrc} className="size-full object-cover" />
                          </div>
                          <div className="ml-6 flex-1 text-sm">
                            <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                              <h5>{product.name}</h5>
                              <p className="mt-2 sm:mt-0">{product.price}</p>
                            </div>
                            <p className="hidden text-gray-500 sm:mt-2 sm:block">{product.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 sm:p-6 bg-zinc-50">
                    <p className="text-right text-sm font-medium text-gray-900">Total: {order.total}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}