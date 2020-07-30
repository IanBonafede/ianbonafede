import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'




export const NavBar = () => {
    return (
            <AppBar position="static" >
                <ToolBar>
                    <Grid container direction="row" alignItems="flex-end" spacing={1}>
                        <Grid item >
                            <button name= "home" type="button" onClick={}>HOME</button>
                            <button name= "bio" type="button" onClick={}>BIO</button>
                            <button name= "projects" type="button" onClick={}>PROJECTS</button>
                        </Grid>
                    </Grid>
                </ToolBar>
            </AppBar>
    )
}
   


export default NavBar;