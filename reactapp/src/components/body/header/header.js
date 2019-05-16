import React from 'react';

export default function Header(props){
    return(
        <header className="body-header-wrapper">
            <h1>{props.header}</h1>
        </header>
    )
} 