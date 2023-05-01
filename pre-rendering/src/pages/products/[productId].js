import { useRouter } from "next/router"


function Product({ product }) {
    const router = useRouter()
    
    if(router.isFallback){
        return <div>Loading...</div>
    }
    return (
        <>
            <br />
            <h2>{product.id} {product.title} {product.price}</h2>
            <br/>
            <p>{product.description }</p>
            <p>hello dick</p>
            <br />
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { productId: '1' }
            }
        ],  
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context
    console.log(params)
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const product = await response.json()
    console.log(product)

    // if(!product.id){
    //     return {
    //         notFound:true
    //     }
    // }
    
    console.log(`Generating page for /posts/${params.productId}`)

    return {
        props: {
            product
        }
    }
}

export default Product