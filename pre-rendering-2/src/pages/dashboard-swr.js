import useSWR from "swr"

const fetcher = async () => {
    const response = await fetch(`http://localhost:4000/dashboard`)
    const userMetrics = await response.json()
    return userMetrics
}

function DashboardSWR() {
    const { data, error } = useSWR('dashboard', fetcher)

    if(error) return 'An error has ocurred'
    if(!data) return 'Loading...'
    
    return(
        <div>
            <h1>User information</h1>
            <h2>posts {data.posts}</h2>
            <h2>likes {data.likes}</h2>
            <h2>followers {data.followers}</h2>
            <h2>following {data.following}</h2>
        </div>
    )
}

export default DashboardSWR