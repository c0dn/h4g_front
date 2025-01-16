const products = [
  {
    id: 1,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: '/src/img/bottle.jpeg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 2,
    name: 'Water Bottle',
    color: 'Blue',
    href: '#',
    imageSrc: '/src/img/bottle.jpeg',
    imageAlt: 'Blue water bottle.',
    price: '$20',
  },
  {
    id: 3,
    name: 'Coffee Mug',
    color: 'Black',
    href: '#',
    imageSrc: '/src/img/bottle.jpeg',
    imageAlt: 'Black coffee mug.',
    price: '$15',
  },
  {
    id: 4,
    name: 'Notebook',
    color: 'Brown',
    href: '#',
    imageSrc: '/src/img/bottle.jpeg',
    imageAlt: 'Brown notebook.',
    price: '$10',
  },
  {
    id: 5,
    name: 'Pen',
    color: 'Red',
    href: '#',
    imageSrc: '/src/img/bottle.jpeg',
    imageAlt: 'Red pen.',
    price: '$5',
  },
  {
    id: 6,
    name: 'Backpack',
    color: 'Green',
    href: '#',
    imageSrc: '/src/img/bottle.jpeg',
    imageAlt: 'Green backpack.',
    price: '$50',
  },
  {
    id: 7,
    name: 'Sunglasses',
    color: 'Black',
    href: '#',
    imageSrc: '/src/img/bottle.jpeg',
    imageAlt: 'Black sunglasses.',
    price: '$25',
  },
  {
    id: 8,
    name: 'Hat',
    color: 'White',
    href: '#',
    imageSrc: '/src/img/bottle.jpeg',
    imageAlt: 'White hat.',
    price: '$30',
  },
  {
    id: 9,
    name: 'Shoes',
    color: 'Gray',
    href: '#',
    imageSrc: '/src/img/bottle.jpeg',
    imageAlt: 'Gray shoes.',
    price: '$60',
  },
  {
    id: 10,
    name: 'Watch',
    color: 'Silver',
    href: '#',
    imageSrc: '/src/img/bottle.jpeg',
    imageAlt: 'Silver watch.',
    price: '$100',
  },
]

export default function Minimart() {
  return (
    <div className="bg-white mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id}>
            <div className="relative">
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <img alt={product.imageAlt} src={product.imageSrc} className="size-full object-cover" />
              </div>
              <div className="relative mt-4">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                />
                <p className="relative text-lg font-semibold text-white">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}