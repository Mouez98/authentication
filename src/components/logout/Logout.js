import React from 'react'

function Logout() {
    const logoutHandler = async() => {
        try {
            const response = await fetch("http://51.38.36.98:8020/logout", {
                method: "POST",
                headers: {
                    Authenticate: `'Bearer' ${localStorage.getItem('token')}`
                }
            })
            if(!response.ok) {
                throw new Error('you aren\'t logged in')
            }
            window.alert('Loged out')
        } catch(err) {
            window.alert('Failed to logut')
        }
    }
  return (
    <>
    <h2>Logout</h2>
    <button onClick={logoutHandler}>
        Logout
    </button>
    </>
  )
}

export default Logout