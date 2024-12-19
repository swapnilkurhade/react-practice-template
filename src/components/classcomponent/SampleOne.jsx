import { Component } from "react";

class SampleOne extends Component{

    constructor(props){
        console.log('constructor');
        super(props)
        this.state = {
            count : 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    // Lifecycle methods

    // Mounting
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps');
        // Defualt state updatation
    }

    componentDidMount(){
        console.log('componentDidMount');
        // some api calls 
    }

    // Updating
    // First it will call getDerivedStateFromProps , same as mouting phase
    
    shouldComponentUpdate(nextProp, nextState){
        console.log('shouldComponentUpdate');
        return nextProp.count != this.state.count;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        return null;
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate, Something is updated');
    }



    // Unmounting
    componentWillUnmount(){
        console.log('componentWillUnmount, componenet unmounted');
    }
    
    // Error handling phase
    static getDerivedStateFromError(error){
        console.log('getDerivedStateFromError');
        return { hasError: true };
    }

    // End 

    increment(){
        this.setState((prevState)=>({
            count : prevState.count + 1
        }))
    }

    decrement(){
        this.setState((prevState)=>({
            count : prevState.count - 1
        }))
    }

    render(){
        return (
            <>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                
            </>
        )
    }
}

export default SampleOne;