import Link from 'next/link'

const HomePage = (props) =>{ 
  const {products} = props

  return(
    <ul>
      {products.map(product => (
      <li key={product.id}>
        <Link
        
        href={`/products/${product.id}`}
        >
        {product.title}
        </Link>       
        </li>
      ))}
    </ul>
  )
}

export const getStaticProps = async (context) => {

  const fs = require('fs/promises')
  const path = require('path')
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const data = JSON.parse(await fs.readFile(filePath))


  return {
    props: {
      products: data.products
    },
    //to do update every 10 sec
    revalidate: 10,
    //return 404 , for example if fetch data is unsuccessful
    // notFound: true,
    // // instead notFound
    // redirect: {
    //   destination: '/no-data'
    // }
  }
}
export default HomePage