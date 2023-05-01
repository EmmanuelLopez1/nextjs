import User from "../../components/User"

function userList( { users } ){
    return (
        <>
        <h1>List of users</h1>
        {
            users.map( ( user )=>{
                return (
                <div key={user.id}>
                    <User user={user}/>
                </div>)
            })
        }
        </>
    )
}

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    return {
        props:{
            users
        }
    }
}

export default userList