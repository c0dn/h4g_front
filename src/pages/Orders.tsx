import { Heading } from '../components/heading'
import { Divider } from '../components/divider'
import { Badge } from '../components/badge'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

const statusColors = {
  'Ready to Collect': 'green',
  'Pending Approval': 'orange', 
  'Collected': 'zinc'
}

const orders = [
  {
    number: 'WU88191111',
    datetime: '2021-01-22',
    total: '$104.00',
    status: 'Ready to Collect', // Updated to order status
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
    status: 'Collected', // Updated to order status
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
    status: 'Ready to Collect', // Updated to order status
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


export default function Orders() {
  return (
    <div>
      <main>
        <div className="mx-auto max-w-7xl pb-2">
          <Heading>My Orders</Heading>
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
                        <dt className="font-medium text-gray-900">Status</dt>
                        <dd className="mt-1">
                          <Badge color={statusColors[order.status]}>
                            {order.status}
                          </Badge>
                        </dd>
                      </div>
                    </dl>

                    <Menu as="div" className="relative flex justify-end lg:hidden">
                      <div className="flex items-center">
                        <MenuButton className="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Options for order {order.number}</span>
                          <EllipsisVerticalIcon aria-hidden="true" className="size-6" />
                        </MenuButton>
                      </div>

                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <div className="py-1">
                          <MenuItem>
                            <a
                              href=""
                              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                            >
                              Order Collected
                            </a>
                          </MenuItem>
                          <MenuItem>
                            <a
                              href=""
                              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                            >
                              Invoice
                            </a>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </Menu>

                    <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                      <a
                        href=""
                        className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span>Order Collected</span>
                      </a>
                      <a
                        href=""
                        className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span>View Invoice</span>
                      </a>
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


