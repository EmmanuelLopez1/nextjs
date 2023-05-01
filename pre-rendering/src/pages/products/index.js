import Link from "next/link"

function ProductList( { products } ){
    return(
        <>
            <h1>
                List of Posts
            </h1>
            {
                products.map(product=>{
                    return (
                        <div key={product.id}>
                            <br/>
                            <Link href={`/products/${product.id}`}>
                                <h2>
                                    {product.id} {product.title}
                                </h2>
                                <br/>
                            </Link>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}


export async function getStaticProps(){
    const response = await fetch(`http://localhost:4000/products`)
    const products = await response.json()
    // console.log(posts)
    return {
        props:{
            products
        }
    }
}

export default ProductList