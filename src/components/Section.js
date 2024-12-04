import React from 'react';


const Section = ({id, title, Children}) => {
    return(
        <Section id={id}>
            <h2>{title}</h2>
            <div>{Children}</div>
        </Section>
    );
};

export default Section;