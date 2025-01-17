import { Heading } from '../components/heading'
import HatImg from '../img/Hat.png'
import BottleImg from '../img/bottle.jpeg'
import PenImg from '../img/Pen.png'
import ShoesImg from '../img/Shoes.png'

type Mission = {
    id: number;
    name: string;
    description: string;
    points: number;
    status: 0 | 1 | 2; // 0:Uncompledted, 1:Pending, 2:Completed
};

const missions: Mission[] = [
    {
        id: 1,
        name: "Grade B to C",
        description: "Improve your grade from B to C",
        points: 50,
        status: 0,
    },
    {
        id: 4,
        name: "Participate in group discussions",
        description: "Actively contribute to at least three group discussions",
        points: 25,
        status: 0,
    },
    {
        id: 6,
        name: "Achieve top 10% in a quiz",
        description: "Score within the top 10% of a class quiz",
        points: 40,
        status: 0,
    },
    {
        id: 10,
        name: "Prepare revision notes",
        description: "Create comprehensive notes for a subject and share with peers",
        points: 30,
        status: 0,
    },
    {
        id: 14,
        name: "Improve a test score",
        description: "Improve your score in the next test by at least 10 points",
        points: 50,
        status: 0,
    },
];

const products = [
    {
        id: 1,
        name: "Hat",
        image: HatImg,
        price: 19.99,
        available: 10,
    },
    {
        id: 2,
        name: "Bottle",
        image: BottleImg,
        price: 29.99,
        available: 5,
    },
    {
        id: 3,
        name: "Hat",
        image: HatImg,
        price: 19.99,
        available: 10,
    },
    {
        id: 4,
        name: "Bottle",
        image: BottleImg,
        price: 29.99,
        available: 5,
    },
];

const orders = [
    {
        id: 1,
        image: PenImg,
        name: "Pen",
        description: "Blue color pen",
        amountPaid: "$2.50",
        datePurchased: "12/07/2024",
        quantity: 1,
        totalPrice: "$2.50",
    },
    {
        id: 2,
        image: ShoesImg,
        name: "Shoes",
        description: "Shoes",
        amountPaid: "$25.00",
        datePurchased: "1/11/2024",
        quantity: 2,
        totalPrice: "$50.00",
    },
];


export default function DashboardHome() {
    return (
        <div className='max-h-full'>
            <Heading>Home</Heading>
            <div className='h-screen w-full mt-2'>
                <div className='grid grid-cols-5 gap-4 h-full grid-rows-10'>
                <div className='border rounded-md col-span-2 row-span-1 p-2 bg-green-50'>
    <p className='font-bold mb-1 text-lg italic leading-tight'>Welcome back, User XXX</p>
    <p className='text-base leading-tight'>Your remaining voucher balance: <span className='text-blue-600'>1994.20</span></p>
</div>

                    <div className='border rounded-md col-span-3 row-span-4 col-start-3 bg-blue-50 px-4 py-2 overflow-y-auto'>
                        <p className='text-lg font-semibold italic mb-2'>Order history</p>
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className='flex items-center mb-2 rounded-md shadow-md bg-blue-100'
                            >
                                {/* Product Image */}
                                <img
                                    src={order.image}
                                    alt={order.name}
                                    className='w-16 h-16 rounded-lg ml-2'
                                />
                                {/* Product Info */}
                                <div className='ml-4 p-1'>
                                    <h3 className='text-base font-medium text-black'>{order.name}</h3>
                                    <p className='text-sm text-gray-600'>{order.description}</p>
                                    <p className='text-sm text-gray-600'>Amount paid: {order.amountPaid}</p>
                                    <p className='text-sm text-gray-600'>Date purchased: {order.datePurchased}</p>
                                </div>
                                {/* Price and Quantity */}
                                <div className='ml-auto text-right pr-4'>
                                    <p className='text-base font-medium text-black'>{order.amountPaid}</p>
                                    <p className='text-sm text-gray-600'>x {order.quantity}</p>
                                    <p className='text-base font-medium text-orange-600'>
                                        {order.totalPrice}
                                    </p>
                                    <p className='text-sm text-gray-600'>{order.datePurchased}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='border rounded-md col-span-2 row-span-9 bg-orange-50 overflow-y-auto'>
                        <p className='text-lg font-semibold pl-4 pt-2 italic'>Uncompleted missions</p>
                        <div className='grid grid-cols-2'>
                            {missions.map((mission) => (
                                <div
                                    key={mission.id}
                                    className={`relative rounded-lg p-4 shadow-md hover:shadow-md cursor-pointer bg-orange-100 m-4 pb-2 mt-2`}
                                >
                                    <h2 className="text-base font-medium text-gray-900">{mission.name}</h2>
                                    <p className="mt-2 text-sm text-gray-500">{mission.description}</p>
                                    <div className="mt-4 text-sm font-semibold text-red-500">
                                        Points: {mission.points}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='border rounded-md col-span-3 row-span-6 col-start-3 bg-pink-50 px-4 py-2 overflow-y-auto'>
                        <p className='text-lg font-semibold italic mb-2'>Products</p>
                        <div className='grid grid-cols-3 gap-4 h-full'>
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className='relative rounded-lg bg-pink-100 shadow-md p-4 pb-2 flex flex-col justify-between'
                                >
                                    {/* Product Image */}
                                    <div className='relative'>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className='w-full h-40 object-cover rounded-md'
                                        />
                                        {/* Available Amount */}
                                        <span className='absolute left-2 bottom-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded'>
                                            {`Available: ${product.available}`}
                                        </span>
                                    </div>

                                    {/* Product Name and Price */}
                                    <div>
                                        <h2 className='text-base font-semibold text-gray-800'>{product.name}</h2>
                                        <p className='text-sm text-gray-600'>${product.price.toFixed(2)}</p>
                                    </div>

                                    {/* Order Button */}
                                    <button
                                        className='absolute right-2 bottom-2 mb-2 bg-blue-600 text-white text-base px-3 py-1 rounded shadow hover:bg-blue-500'
                                    >
                                        Order
                                    </button>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}
