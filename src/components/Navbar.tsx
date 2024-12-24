import React from 'react'
import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
  
function Navbar() {
  return (
    <div>
        
        {/* Mobile Menu */}
       <div className='flex lg:hidden absolute right-2 top-2 font-workSans'>
        <Sheet>
  <SheetTrigger><Menu width={32}/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Home</SheetTitle>
      <SheetTitle>Blog</SheetTitle>
      <SheetTitle>Home</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>

    <div className="flex justify-between py-4 w-[80%] mx-auto">
        
        <Image src={'/images/logo.png'} alt='Logo' width={200} height={200} quality={100} className='w-32'></Image>
        
        <ul className='flex gap-6 font-workSans'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/'>Blog</Link></li>
            <li><Link href='/'>Contact</Link></li>
            
        </ul>
        <Link href='/'>Create Blog</Link>
    </div>
    </div>
  )
}

export default Navbar