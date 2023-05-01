// import { useRouter } from "next/router"

function Post({ post }) {
    // const router = useRouter()

    // if(router.isFallback){
    //     return(
    //         <h1>Loading...</h1>
    //     )
    // }

    return (
        <>
            <br />
            <h2>{post.id} {post.title}</h2>
            <br/>
            <p>{post.body}</p>
            {/* <p>hello world</p> */}
            <br />
        </>
    )
}

export async function getStaticPaths() {
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    // const posts = await response.json()

    // const paths = posts.map(post=>{
    //     return {
    //         params: { 
    //             postId: `${post.id}` 
    //         }
    //     }
    // })

    return {
        paths: [
            {
                params: { postId: '1' }
            },
            {
                params: { postId: '2' }
            },
            {
                params: { postId: '3' }
            }
        ],
        // paths,   
        fallback: "blocking"
    }

    // fallback: false
    /*
        1. The paths returned from getStaticPaths will be render 
        at build time by getStaticProps

        2. Any path not returned by getStaticPaths will result in a 404 page.

        when use it:
        -if you have a application with a small number of parts to pre-render and new pages
        are not added often.
        -a blog site with few articles is a good example.


        fallback: true.
        1. The paths returned from getStaticPaths will be render 
        at build time by getStaticProps

        2. The paths that have not been generated at build time will 
        not result in a 404 page. Instead next js serve a "fallback" version of the page
        on the first request to such a path.

        3. In the background, next.js will statically generate the requested path HTML 
        and JSON. This includes running getStaticProps.

        4. When that`s done, the browser recieves the JSON for the path. 
        This will be used to automatically render the page with the required props. 
        From the user's perspective, the page wil be swapped from the fallback  page
        to the full page.

        5. At the same time, Next.js keeps track of the new list of pre-render pages.
        Subsequent request to the same path will serve the generated page, just like
        others pages pre--rendered at build time.

        when use it?
        - when your page has a very large number of static pages that depend on data.
        - a large e-commerce site.

        fallback: Blocking.

        1. Step 1 in fallback true.
        
        2. The paths that have not been generated at build time will 
        not result in a 404 page. Instead, on the first request, Next.js will
        render the page in the server and return the generated HTML.

        3. When that's done, the browser recieves the HTML for the generated path.
        From the user's perspective, it will transition from "the browser is requesting 
        the page" to "the full page is loaded".
        There is no flash of loading/fallback state.

        4. Step 5 in fallback true.

        when use it?
        technical reason, some crawlers dont support javascript.
        use fallback in true unless it has problems.
    */
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const post = await response.json()

    if(!post.id){
        return {
            notFound:true
        }
    }
    
    console.log(`Generating page for /posts/${params.postId}`)

    return {
        props: {
            post
        }
    }
}

export default Post