import React from 'react';



const Mean = (props) => (
    <div>
        <video controls autoPlay>
            <source src={props.image}></source>
        </video>
    </div>
)

export default Mean;