import React from 'react'
import { Container} from '@material-ui/core'

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