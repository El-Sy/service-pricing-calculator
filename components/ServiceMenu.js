import { Component } from 'preact';

import ServiceTab from './ServiceTab';

const componentStyle = {
    background: '#f7f8fa',
    height: "100%"
}

const listStyle = {
    backgroundColor: "#ffffff",
    border: "solid 1px #e1e3e9",
    margin: "0 -2.0rem 2.5rem"
}

const ServiceTabStyle = {
    borderBottom: "solid 1px #e1e3e9"
}

class ServiceMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        fetch("/config.json")
            .then(res => {
                return res.json();
            })
            .then(json => {
                console.log("json", json);
                console.log(this.state);
                if (Object.keys(this.state).length < 1) {
                    this.setState(json);
                }
            })
    }

    handleClick(tab) {
        this.props.changeView(tab);
    }

    render() {

        let services = [];
        let others = [];
        if (this.state.services != null) {
            this.state.services.map((service, i) => {
                if (i === (this.state.services.length - 1)) {
                    services.push(<ServiceTab enter={(data) => {
                        this.props.changeMode(data)
                    }} key={service.title} title={service.title} param={service.param} />);
                } else {
                    services.push(<ServiceTab enter={(data) => {
                        this.props.changeMode(data)
                    }} style={ServiceTabStyle} key={service.title} title={service.title} param={service.param} />)
                }
            });

            this.state.others.map((service, i) => {
                if (i === (this.state.others.length - 1)) {
                    others.push(<ServiceTab key={service.title} title={service.title} param={service.param} />);
                } else {
                    others.push(<ServiceTab style={ServiceTabStyle} key={service.title} title={service.title} param={service.param} />)
                }

            });

            return (
                <div className="container" style={componentStyle}>
                    <header className="centerRowItems" style={{flexDirection:"column", padding:"2.4rem"}}>
                        <img style={{ height: "64px" }} src="https://cdn.jaga-me.com/logos/v2/logo.pink.small.png" />
                        <h5 style={{color:"#eb7073"}}>Service Price Calculator</h5>
                    </header>
                    <h5>Choose Service to Calculate</h5>
                    <ul style={listStyle}>
                        {services}
                    </ul>
                    <h5>Other Services</h5>
                    <ul style={listStyle}>
                        {others}
                    </ul>
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default ServiceMenu;