import { Component } from "preact";
import { Link } from "preact-router";

const serviceTabStyle = {
    listStyleType: "none",
    padding: "2rem 2rem",
    marginBottom: "0rem"
}

class ServiceTab extends Component {
    render() {
        const tab_style = this.props.style != null ? Object.assign(this.props.style, serviceTabStyle) : serviceTabStyle;

        return (
            <Link href={`/calendar/${this.props.param}`}>
                <li style={tab_style} onClick={() => { this.props.enter(this.props.param) }} >
                    <span>{this.props.title}</span><span style={{float:"right"}}>{">"}</span>
                </li>
            </Link>
        )
    }
}

export default ServiceTab;