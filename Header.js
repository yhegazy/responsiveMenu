import { useState } from "preact/hooks";

//'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css
const menuItems = [
    {
        id: 1,
        title: 'Home',
        exact: true,
        to: '/',
        icon: 'bx bx-home-alt',
    },
    {
        id: 2,
        title: 'Portfolio',
        exact: true,
        to: '/portfolio',
        icon: 'bx bx-briefcase',
    },
    {
        id: 3,
        title: 'Concepts',
        exact: true,
        to: '/concepts',
        icon: 'bx bx-bracket ',
    },
    {
        id: 4,
        title: 'Contact',
        exact: true,
        to: '/contact',
        icon: 'bx bx-comment-detail',
    },
];

export default function Header(props) {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

	return <>
        <div className="w-screen z-10 bg-zinc-100  drop-show-lg ">
            <div className="px-2 flex justify-between items-center w-full h-full">
                
                {/* Desktop */}
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl md:flex hidden">Me.</h1>
                    <ul className="md:flex hidden  ">
                        {menuItems.map((item) => 
                            <li key={item.id} className="p-4">
                                <a href={item.to}>
                                <div>
                                    <h2 className="text-lg font-semibold sm:text-xl">
                                        <i className={`${props.dMode} ${item.icon} sm:px-1`} ></i>
                                        {item.title}
                                    </h2>
                                </div>
                            </a>
                        </li>)}
                    </ul>
                </div>

                {/* Mobile */}
                
                <div className={`md:hidden flex ${nav && 'h-[180px]'}`} onClick={handleClick}>
                   {!nav ?  <i class='bx bx-menu text-3xl' /> :  <i class='bx bx-x text-3xl'></i>}
                </div>
                {nav && <ul className="md:hidden absolute w-full px-8 bg-zinc-100">
                    {menuItems.map((item) =>
                        <li key={item.id} className="border border-b-2 border-zinc-100 w-full">
                            <a href={item.to}>
                            <div>
                                <h2 className="text-lg font-semibold sm:text-xl">
                                    <i className={`${props.dMode} ${item.icon} sm:px-1`} ></i>
                                    {item.title}
                                </h2>
                            </div>
                        </a>
                    </li>)}
                </ul>}
            </div>
        </div>
	</>
}
