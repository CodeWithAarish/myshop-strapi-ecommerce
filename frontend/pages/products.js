import Link from 'next/link'
import React from 'react'

const Products = (props) => {
  return (
    <div className='container mx-auto px-4'>
        <section class="text-gray-600 body-font">
  <div class="container px-5 md:py-24 mx-auto">
    <div class="flex flex-wrap w-full md:mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Products List - MyShop</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
      {props.products.data.map((item)=>{
        return (
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-96 rounded m-auto mb-8" src={item.attributes.image.data && item.attributes.image.data.attributes.name} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
          <button class={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`}></button>
          <div className="hidden bg-red-800 bg-blue-800 bg-green-800 bg-yellow-800 bg-black-800 bg-white-800"></div>
          <p class="leading-relaxed text-base">{item.attributes.description}</p>
          <Link href={`/product/${item.attributes.slug}`}><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now</button></Link>
        </div>
      </div>
      )
      })}
    </div>
  </div>
</section>
    </div>
  )
}

export async function getServerSideProps(context) {
  let headers = {Authorization: "Bearer fad7e9de5ac30c20426ddd13b4ca8b79c879f94115a811ccc669f099b8df5daab655b5895d9baffe2b47519aa2c84fd8f4ef13835bac6e9480663dabc323213c9df61c48035d4788b7846419020fcdb8948f3656b51ef900721b3d6976ab9d0d1f2eb085d2e5686099874511c752dc4c17980092bfc09fb709bf47bc0d0c0982"}
  let a = await fetch("http://localhost:1337/api/products?populate=*", {headers:headers})
  let products = await a.json()
  console.log(products)
    return {
      props: {products: products},
    }
  }

export default Products