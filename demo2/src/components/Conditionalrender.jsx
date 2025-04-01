import React from 'react'

const Conditionalrender = ({isLogin}) => {
    // if (isLogin) {
    //     return <h1>Welcome</h1>
    // } else {
    //     return <h1>Login again</h1>
    // }
  return (
    <div>
    {/* isLogin ? <h1>Welcome</h1> : <h1>Failed</h1> */}
    {isLogin && <h1>Welcome</h1>}
    </div>
  )
}

export default Conditionalrender
