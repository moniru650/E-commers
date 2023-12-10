import React from 'react'
import About from '../About/About'
import Banner from '../Banne/Banner'
import SomeAbout from '../SomeAbout/SomeAbout'
import Blog from '../Blog/Blog'
import Blog2 from '../Blog2/Blog2'
import Service from '../Service/Service'
import Item from '../Item/Item'
import Speacial from '../Special/Speacial'
import Pricing from '../Pricing/Pricing'
import SomeCard from '../SomeCard/SomeCard'
import AllSale from '../AllSale/AllSale'
import BlogCard from '../BlogCard/BlogCard'
import LastCard from '../LastCard/LastCard'



export default function Home() {
  return (
   <>
   {/* <About/> */}
   <Banner/>
   <SomeAbout/>
   <Blog/>
   <Blog2/>
   <Service/>
   <Item/>
   <Speacial/>
   <Pricing/>
   <SomeCard/>
   <AllSale/>
   <BlogCard/>
   <LastCard/>
   </>
  )
}
