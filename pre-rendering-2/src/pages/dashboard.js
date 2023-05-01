import { useState, useEffect } from "react";
function Dashboard(){
    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)

    useEffect(()=>{
        async function fetchDashboarData(){
            const response = await fetch(`http://localhost:4000/dashboard`)
            const userMetrics = await response.json()
            setDashboardData(userMetrics)
            setIsLoading(false)
        }
        fetchDashboarData()
    }, [])

    if(isLoading){
        return <h2>Loading...</h2>
    }

    return(
        <>
            <h1>User information</h1>
            <h2>posts {dashboardData.posts}</h2>
            <h2>likes {dashboardData.likes}</h2>
            <h2>followers {dashboardData.followers}</h2>
            <h2>following {dashboardData.following}</h2>
        </>
    )
}

export default Dashboard