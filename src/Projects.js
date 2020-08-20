import React from 'react'

export const Projects = ({pallete, fonts}) => { 
    return (
        <>
            <h1 style={{fontFamily: fonts.title, color: pallete.contrastText}}>
                Projects
            </h1>
        </>
    )
};

export default Projects