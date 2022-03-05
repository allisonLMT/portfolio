import React from 'react';


function Button({ url, btnText }) {

    return (
        <div>
            <a href={ url }>{ btnText }</a>
        </div>
    )
};

export default Button;