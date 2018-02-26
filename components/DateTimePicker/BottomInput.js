import { Component } from 'preact';

const inputStyle = {
    textAlign: "center",
    color: "#eb7073",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100px"
}

const pricePillStyle = {
    height: "79px",
    opacity: "0.3",
    borderRadius: "39.5px",
    border: "solid 1px #42526e"
}

class BottomInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.duration != null) {
            return (
                <section>
                    <div className="row">
                        <div className="column column-100" style={pricePillStyle}>
                        </div>
                    </div>
                    <div className="row" style={{ flexDirection: "row", marginTop:"1rem" }}>
                        <div className="column column-20 centerRowItems">
                            <div className="circle centerRowItems">-</div>
                        </div>

                        <div className="column column-60 centerRowItems">
                            <div className="pill centerRowItems" style={{
                                backgroundColor: "#fed8d4",
                                border: "solid 1px #eb7073",
                                height: "64px",
                                width: "100%",
                                margin:"0px 1rem"
                            }}>{this.props.duration} hours</div>
                        </div>

                        <div className="column column-20 centerRowItems">
                            <div className="circle centerRowItems">+</div>
                        </div>

                    </div>
                </section>
            );
        }
        else {
            return (
                <section style={inputStyle}>
                    <span>CHOOSE A DATE <br />TO CALCULATE PRICE</span>
                </section>
            );
        }
    }
}

export default BottomInput;