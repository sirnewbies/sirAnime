import Link from "next/link"

const Header = ({ route, title, href }) => {
    return(
        <div className="flex justify-between h-10 md:p-10 py-10 items-center ">
            <h1 className="px-5 md:font-bold md:text-xl text-sm">{route}</h1>

            {href && title && route ? 
            <Link href={href} className="md:text-md text-sm underline hover:text-color-red transition-all">{title}</Link>
            : null
            }
        </div>
    )
}

export default Header