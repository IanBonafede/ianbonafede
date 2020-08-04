import React from 'react'


class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            theme : {
                light: '#A3A3A3',
                main: '#828282',
                dark: '#686868',
                contrastText: '#fff'
            }
        }

        //this.handleClick = this.handleClick.bind(this)
    }

    //handleClick(event) {}
    

    render() {
        return (
            <h1>Home</h1>
            
            
            
        );
    }
}

export default Home