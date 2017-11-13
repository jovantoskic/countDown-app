import React, { Component } from "react";


class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days:0,
            hours:0,
            minutes:0,
            seconds:0
        }
    }

    getTimeUntil(deadline) {
        // new Date() - grabs the current time
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));
    }


    render() {
        return (
            <div>
                <div className="clockDays">{this.state.days} days</div>
                <div className="clockHours">{this.state.hours} hours</div>
                <div className="clockMinutes">{this.state.minutes} minutes</div>
                <div className="clockSec">{this.state.seconds} seconds</div>
            </div>
        )
    }
}


// const Clock = (props) => {
//     console.log(props.days);
//     return (
//         <div>
//             <div className="clockDays">{props.days}</div>
//             <div className="clockHours">{props.hours}</div>
//             <div className="clockMinutes">15 minutes</div>
//             <div className="clockSec">20 seconds</div>
//         </div>
//     );
// };

export default Clock;