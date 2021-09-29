import React, { Component } from 'react'
import HighScore from './HighScore'

class Constructor extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0,
            overTen: false
        }
    }

    handleClick = () => {
        console.log('Clicked')
        this.setState({count: this.state.count + 1}) 
    }

    resetCount = (e) => {
        this.setState({
            count: 0,
            overTen: false
        })
    }

    componentDidUpdate(props, state){
        console.log('componentDidUpdate: Updated from ', state, 'to', this.state)
        if(this.state.count > 10
            && this.state.count !== state.count
            && !this.state.overTen){
            console.log('Updating overTen')
            this.setState({overTen: true})
        }
    }

    componentWillMount(props, state){
        console.log('componentWillMount', props, state)
    }

    componentDidMount(props, state){
        console.log('componentDidMount', props, state)
    }

    componentWillReceiveProps(props, state){
        console.log('componentWillReceiveProps', props, state)
    }

    componentWillUpdate(props, state){
        console.log('componentWillUpdate: Updated from ', state, 'to', this.state)
    }

    render() {
        let {count} = this.state;
        return(
        <>
            <HighScore 
                overTen={this.state.overTen}
                onReset={this.resetCount}
            />
            
            <h2>You clicked the button {count} times</h2>
            
            <button onClick={(e) => this.handleClick()}>Click me</button>
        </>
   )}
}

export default Constructor