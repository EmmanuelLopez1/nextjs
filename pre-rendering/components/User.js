import React from 'react'

const user = ({ user }) => {
    return (
        <div>
            <br />
            <p>{user.name}</p>
            <p>{user.email}</p>
            <br />
        </div>
    )
}

export default user