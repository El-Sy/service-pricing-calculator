import { Component } from 'preact';
import { Link } from 'preact-router';

const TotalHeaderStyle = {
    display: "flex",
    textAlign:"center",
    borderRadius: "35px",
    background: "#eb7073",
    flexDirection: "column",
    color: "white",
    padding:"0.5rem"
}

class TotalHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header style={TotalHeaderStyle}>
                <span>Total : {"$10"}</span>
                <span>Click for Summary</span>
            </header>
        );
    }
}

export default TotalHeader;