import Image from 'next/image'
import Hero from '../../components/hero'
import Services from '../../components/ui/services'
import Promotions from '../../components/ui/promotions'
import Categories from '../../components/ui/categories'
import BestSelling from '../../components/ui/bestSelling'
import FeaturedProducts from '../../components/featuredProducts'
export default function Home() {
  return (
    <div>
      <Hero />
     <FeaturedProducts />
      <Promotions />
      <Categories />
      <BestSelling />
      <Services />
      </div>
    
    
  )
}
