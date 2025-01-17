import { Heading } from '../components/heading'
import { Divider } from '../components/divider'
import ZipToteImg from '../img/Zip_Tote_Basket.png'
import BottleImg from '../img/bottle.jpeg'
import CoffeeMugImg from '../img/Coffee Mug.png'
import NotebookImg from '../img/Notebook.png'
import PenImg from '../img/Pen.png'
import BackpackImg from '../img/Backpack.png'
import SunglassesImg from '../img/Sunglasses.png'
import HatImg from '../img/Hat.png'
import ShoesImg from '../img/Shoes.png'
import WatchImg from '../img/Watch_backgr(1).png'

const products = [
  {
    id: 1,
    name: 'Zip Tote Basket',
    description: 'A stylish zip tote bag made of white canvas with black straps and handle.',
    href: '#',
    imageSrc: ZipToteImg,
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
    stock: 85,
  },
  {
    id: 2,
    name: 'Water Bottle',
    description: 'A durable blue water bottle perfect for staying hydrated on the go.',
    href: '#',
    imageSrc: BottleImg,
    imageAlt: 'Blue water bottle.',
    price: '$20',
    stock: 72,
  },
  {
    id: 3,
    name: 'Coffee Mug',
    description: 'A sleek black coffee mug for your favorite hot beverages.',
    href: '#',
    imageSrc: CoffeeMugImg,
    imageAlt: 'Black coffee mug.',
    price: '$15',
    stock: 40,
  },
  {
    id: 4,
    name: 'Notebook',
    description: 'A premium brown notebook ideal for journaling and note-taking.',
    href: '#',
    imageSrc: NotebookImg,
    imageAlt: 'Brown notebook.',
    price: '$10',
    stock: 90,
  },
  {
    id: 5,
    name: 'Pen',
    description: 'A high-quality red pen with smooth ink flow for writing.',
    href: '#',
    imageSrc: PenImg,
    imageAlt: 'Red pen.',
    price: '$5',
    stock: 65,
  },
  {
    id: 6,
    name: 'Backpack',
    description: 'A spacious green backpack with multiple compartments for travel and daily use.',
    href: '#',
    imageSrc: BackpackImg,
    imageAlt: 'Green backpack.',
    price: '$50',
    stock: 77,
  },
  {
    id: 7,
    name: 'Sunglasses',
    description: 'Stylish black sunglasses with UV protection for outdoor activities.',
    href: '#',
    imageSrc: SunglassesImg,
    imageAlt: 'Black sunglasses.',
    price: '$25',
    stock: 58,
  },
  {
    id: 8,
    name: 'Hat',
    description: 'A comfortable and breathable white hat for sunny days.',
    href: '#',
    imageSrc: HatImg,
    imageAlt: 'White hat.',
    price: '$30',
    stock: 33,
  },
  {
    id: 9,
    name: 'Shoes',
    description: 'A pair of gray shoes designed for comfort and durability.',
    href: '#',
    imageSrc: ShoesImg,
    imageAlt: 'Gray shoes.',
    price: '$60',
    stock: 49,
  },
  {
    id: 10,
    name: 'Watch',
    description: 'A sleek silver watch with a modern design and reliable performance.',
    href: '#',
    imageSrc: WatchImg,
    imageAlt: 'Silver watch.',
    price: '$100',
    stock: 92,
  },
];


export default function Minimart() {
  return (
    <div>
      <div className='flex items-center justify-between pb-2'>
        <div>
          <Heading>Minimart</Heading>
        </div>

        <form className="max-w-md w-80">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Products..." required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>

      </div>
      <Divider></Divider>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img alt={product.imageAlt} src={product.imageSrc} className="size-full object-cover" />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">{product.price}</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={product.href}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Add to bag<span className="sr-only">, {product.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
