import React from 'react'
import { Container} from '@material-ui/core'

export const Bio = ({pallete, fonts}) => { 
    return (
        <>
            <h1 style={{fontFamily: fonts.title, color: pallete.contrastText}}>
                Bio
            </h1>
        </>
        
    )
};

export default Bio