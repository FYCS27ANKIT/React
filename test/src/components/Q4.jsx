
import React, { useState } from 'react';

const Q4 = () => {
    const [login, setLogin] = useState(false);

    return (
        <div>
            <button onClick={() => setLogin(true)}>Login</button>
            {login ? <h5>Welcome</h5> : <h5>Please Login</h5>}
        </div>
    );
};

export default Q4;
