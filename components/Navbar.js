import Link from "next/link"
import "tailwindcss/tailwind.css";
import tailwindConfig from "tailwind.config";

import { useRouter } from "next/router";

export default function Navbar() {
    const session = true;
    const router = useRouter();
    /*
     <div className="block lg:hidden">
     <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
     <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
     </button>
     </div>
    */
    //{//text-white border-b-4 border-transparent transform hover:-translate-y-1 hover:border-teal-600 mr-4 | OTELLER BUTTON}

    return (

        <nav className={"flex items-center justify-between flex-wrap bg-orange-700 p-6 z-20"}>{/*w-full lg:w-3/4*/}

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div>
                    <Link href="/"><a className={"ml-5 mr-5 transition duration-500 ease-in-out inline-block cursor-pointer text-md px-4 py-2 leading-none border-2 rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"}>Ana sayfa</a></Link>
                </div>
                <div>
                    <Link href="/cozucu"><a className={"ml-5 mr-5 transition duration-500 ease-in-out inline-block cursor-pointer text-md px-4 py-2 leading-none border-2 rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"}>Çözücü</a></Link>
                </div>
                <div>
                    <Link href="/sifreleyici"><a className={"ml-5 mr-5 transition duration-500 ease-in-out inline-block cursor-pointer text-md px-4 py-2 leading-none border-2 rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"}>Şifreleyici</a></Link>
                </div>
                <div>
                    <Link href="/hakkinda"><a className={"ml-5 mr-5 transition duration-500 ease-in-out inline-block cursor-pointer text-md px-4 py-2 leading-none border-2 rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"}>Hakkında</a></Link>
                </div>
                
            </div>

        </nav>

    )
}