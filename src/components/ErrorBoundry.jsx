import { Component } from "react";

class ErrorBoundry extends Component{
    
    constructor(props){
        super(props)
        this.state =({
            error:false
        })

    }
    componentDidCatch(){
        this.setState({
            error:true
        })
    }
    render(){
        if(this.state.error){
            return <h1>sorry !!</h1>
        }
        else{
            return this.props.children
        }
    }
}
export default ErrorBoundry