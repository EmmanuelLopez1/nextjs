function NewsArticleList( { news } ){
    console.log(news)
    return(
        <>
            <h1>List of News Article</h1>
            {
                news.map((_new)=>{
                    return <h2 key={_new.id}>{ _new.tile } { _new.description } | { _new.category }</h2>
                })
            }
        </>
    )
}

export default NewsArticleList 

export async function getServerSideProps(){
    const response = await fetch(`http://localhost:4000/news`)
    const news = await response.json()

    /*
        1. This function only runs in server side.
        2. You can write node js code in the function.
        3. This function is only allowed in a page an not in a regular component.
        4. It needs to return and object with the props key or not found.
        5. This function runs at request time.
    */

    return {
        props:{
            news
        }
    }
}