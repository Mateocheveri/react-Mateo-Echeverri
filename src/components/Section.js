import React from 'react';


const Section = ({id, title, Children}) => {
    return(
        <section id={id}>
            <h2>{title}</h2>
            <div>{Children}</div>
        </section>
    );
};

export default Section;