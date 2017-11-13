import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline:'December 25, 2017',
            newDeadline:'',
            days:0,
            hours:0,
            minutes:0,
            seconds:0
        }
    }

    changeDeadline() {
      this.state.newDeadline !== "" ? this.setState({deadline:this.state.newDeadline})  : false;
    }
    render() {
        return (
            <div className="App">
                <div className="appTitle">
                    Countdown to {this.state.deadline}
                </div>

                <Clock deadline={this.state.deadline}/>

                <div>
                    <input
                        type="text"
                        placeholder="new date"
                        onChange={event => this.setState({newDeadline:event.target.value})}
                    />
                    {/*setting an anonimus function allowes to call that func just once, that's way we should use it*/}
                    <button onClick={()=>this.changeDeadline()}>Submit</button>
                </div>
            </div>

        )
    }
}

export default App;