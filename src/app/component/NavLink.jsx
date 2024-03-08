
import Link from 'next/link'

const NavLink=({href,title})=>{
    return(
        <Link href={href} className='block py-2 t pl-3 pr-8 text-[#ADB7BE] sm:text-base mr-7 rounded md:p-0 hover:text-white'>{title}</Link>
    )
}

export default NavLink