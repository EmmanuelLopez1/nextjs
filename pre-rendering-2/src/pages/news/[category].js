function ArticleListByCategory( { articles, category } ){
    return(
        <>
            <h1>
                Showing news for category <i>{ category }</i>
            </h1>
            {
                articles.map((article)=>{
                    return(
                        <div key={article.id}>
                            <h2>
                                {article.id} {article.title}
                            </h2>
                            <p>{article.description}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ArticleListByCategory

export async function getServerSideProps(context) {
    const { params, req, res, query } = context
    const  { category } = params
    console.log(req.headers.cookie)
    console.log(query)
    res.setHeader('Set-Cookie', ['name=Vishwas'])
    // json server lets us filter the date passing it by query parameters
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const articles = await response.json()
    console.log(`Pre-rendering News Articles for category ${category}`)
    return {
        props:{
            articles,
            category
        }
    }
}