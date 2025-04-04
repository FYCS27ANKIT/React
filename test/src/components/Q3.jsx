import React, { useState } from 'react'

const Q3 = () => {
    const [darkmode, setDarkmode] = useState(false);

    return (
        <div style={{backgroundColor : darkmode ? '#000' : '#fff'}}>
            <button onClick={() => setDarkmode(true)}>Dark mode</button>
        </div>
    );
}

export default Q3
