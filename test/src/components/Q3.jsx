import React, { useState } from 'react'

const Q3 = () => {
    const [darkmode, setDarkmode] = useState(false); // Use boolean for better logic

    return (
        <div style={{backgroundColor : darkmode ? '#000' : '#fff'}}>
            <button onClick={() => setDarkmode(true)}>Dark mode</button>
        </div>
    );
}

export default Q3
