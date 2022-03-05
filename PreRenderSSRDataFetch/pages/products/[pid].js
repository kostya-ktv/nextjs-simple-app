import { getData } from "../../util/util";

const ProductDetailPage = (props) => {
   //show loading //getStaticPaths falback - true!
   if(!props.loadedProduct) return <h2>Loading...</h2>
   return(
      <><h1>Hi</h1>
         <h1>{props.loadedProduct.title}</h1>
         <p>{props.loadedProduct.description}</p>
      </>
   )
}

//PREGENERATING
export const getStaticProps = async(context) => {
   console.log(context);
   const { params } = context
   
   const productId = params.pid
   const data = await getData()
   const product = data.products.find(product => product.id === productId)

   return {
      props: {
         loadedProduct: product
      }
   }
}
//PREGENERATING
export const getStaticPaths = async() => {
   const data = await getData()
   const ids = data.products.map(product => product.id)
   const pathsWithParams = ids.map(id => ({params: {pid: id}}))
   return { paths: pathsWithParams,
   //false - At runtime, any path that was not generated at build-time from <paths: params...> will 404.
   fallback: false }
}

export default ProductDetailPage