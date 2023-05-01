import Link from "next/link"

function PostList( { posts } ){
    return(
        <>
            <h1>
                List of Posts
            </h1>
            {
                posts.map(post=>{
                    return (
                        <div key={post.id}>
                            <br/>
                            <Link href={`/posts/${post.id}`}>
                                <h2>
                                    {post.id} {post.title}
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
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await response.json()
    // console.log(posts)
    return {
        props:{
            posts
        }
    }
}

export default PostList