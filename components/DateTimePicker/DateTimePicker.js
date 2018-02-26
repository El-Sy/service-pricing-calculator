import { Component } from 'preact';
import flatpickr from "flatpickr";
import { Link } from 'preact-router';

import TotalHeader from './TotalHeader';
import BottomnInput from './BottomInput';
import "flatpickr/dist/flatpickr.min.css";

const calendarViewStyle = {
    background: "#ffece7",
    height: "100%"
}

const calendar_config = {
    inline: true
}

class DateTimePicker extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const fp = flatpickr("#serviceCalendar", calendar_config);
        fp.calendarContainer.className = fp.calendarContainer.className.replace("arrowTop", "");
        fp.calendarContainer.style.width = "auto";
        fp.calendarContainer.style.boxShadow = "none";
        fp.calendarContainer.style.backgroundColor = "#fff";
        fp.calendarContainer.style.margin = "0 -2.0rem 1rem";
        fp.days.style.width = "auto";
        fp.days.style.maxWidth = "none";
        fp.calendarContainer.querySelector("div.flatpickr-month").style.height = "40px";
        fp.calendarContainer.querySelector("div.flatpickr-days").style.width = "100%";
    }

    handleClick(tab) {
        this.props.goBack();
    }

    render() {
        return (
            <div className="container" style={calendarViewStyle}>
                <header className="row" style={{flexDirection: "row", padding: "1rem 0px", textAlign:"center"}}>
                    <div className="column column-20 centerRowItems" style={{textAlign:"center"}}><Link href="/" style={{textAlign:"center", fontWeight:"bold"}}><span>{"<"}</span></Link></div>
                    <div className="column column-60" style={{textAlign:"center"}}>
                    <TotalHeader />
                    </div>
                    <div className="column column-20 centerRowItems" style={{textAlign:"center", fontWeight:"bold"}}><span>X</span></div>
                </header>
                <div id="serviceCalendar"/>
                <BottomnInput duration="3" rate="25"/>
            </div>
        );
    }
}

export default DateTimePicker;