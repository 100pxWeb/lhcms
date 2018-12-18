import * as React from "react";

export class ContactForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userEmail: null,
            userMsgContent: null,
        };
    }

    sendForm = () => {
        console.log(this.state.userEmail, this.state.userMsgContent);
    };

    validateEmail(email) {
        console.log("Hey there :). I didn't forget about email varify ;)");
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {
        return (
            <div className={"lh-contact-form"}>
                <input
                    className={"lh-contact-form-input"}
                    placeholder={"Enter your e-mail"}
                    onClick={() => this.props.avoidParentUpdate()}
                    onChange={(e) => this.setState({userEmail: e.target.value})}
                />
                <textarea
                    className={"lh-contact-form-textarea"}
                    placeholder={"Your message content"}
                    rows={5}
                    onClick={() => this.props.avoidParentUpdate()}
                    onChange={(e) => this.setState({userMsgContent: e.target.value})}
                />

                <a className={"lh-btn"}
                   onClick={() => {
                       this.props.avoidParentUpdate();

                       const val = this.validateEmail(this.state.userEmail);
                       if (!val) {
                           alert("Email format is not correct.");
                           return false;
                       }
                       this.sendForm();
                   }}
                >
                    <div className={"lh-btn-text"}>Send message</div>
                    <div><img className={"lh-btn-icon"} src={require("../assets/resources/images/contacticon.png")} alt=""/></div>
                </a>
            </div>
        );
    }
}