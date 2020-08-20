import React from 'react'

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