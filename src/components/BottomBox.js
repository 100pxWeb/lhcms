import * as React from "react";
import {ContactForm} from "./ContactForm";

export class BottomBox extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            gitHubRequest: false,
            gitHubRequestEmail: null,
        };

        this.avoid = false;
        this.box = null;
    }

    componentDidUpdate() {
        this.props.showBottomBox && this.showBox();
    }

    showBox = () => {
        this.box.classList.remove("slide-bottom");
        this.box.classList.add("slide-top");
    };

    closeBox = () => {
        this.box.classList.remove("slide-top");
        this.box.classList.add("slide-bottom");
    };

    avoidBoxAnimate = () => {
        this.avoid = true;
        setTimeout(() => {
            this.avoid = false;
        }, 100)
    };

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    generateButton = (type, text, icon = null) => {
        switch (type) {
            case "github":
                return (
                    <a className={"lh-btn"}
                       onClick={() => {
                           this.avoidBoxAnimate();
                           this.setState({gitHubRequest: true})
                       }}
                    >
                        {this.state.gitHubRequest ?
                            <div>
                                <input
                                    className={"lh-btn-input"}
                                    onChange={(e) => {
                                        this.setState({
                                            gitHubRequestEmail: e.target.value
                                        });

                                        let lastChars = e.target.value.slice(-4);
                                        if (lastChars.indexOf(".") <= 1 && lastChars.indexOf(".") >= 0) {
                                            this.setState({
                                                gitHubRequestAllowed: true
                                            });
                                        } else {
                                            this.setState({
                                                gitHubRequestAllowed: false
                                            });
                                        }
                                        console.log(lastChars.indexOf("."));
                                    }}
                                />
                                <div>{this.state.gitHubRequestAllowed && "Push the GitHub cat right now! :)"}</div>
                            </div>
                        :
                            <div className={"lh-btn-text"}>{text}</div>
                        }
                        {icon && <div><img className={"lh-btn-icon"} src={icon} alt=""/></div>}
                    </a>
                );
            case "contact":
                return (
                    <a className={"lh-btn"}
                       onClick={() => {
                           this.avoidBoxAnimate();
                       }}
                    >
                        <div className={"lh-btn-text"}>{text}</div>
                        {icon && <div><img className={"lh-btn-icon"} src={icon} alt=""/></div>}
                    </a>
                );
        }
    };

    render() {
        const data = this.props.showBottomBox;

        return (
            <div ref={(e) => this.box = e}
                 className={"lh-bottom-bottom-box"}
                 onClick={() => {
                     if (!this.avoid) {
                         this.closeBox();
                         this.props.closeBox();
                     }
                 }}
            >
                <div className={"lh-bottom-bottom-box-bg"}></div>
                <div className={"lh-bottom-box-huge-icon"}>
                    <img src={data.icon} alt="Localhost43100 bottom box icon"/>
                </div>

                {data &&
                    <div>
                        <div className={"lh-side-info-box-title"}>{data.title}</div>
                        <div className={"lh-side-info-box-desc"}>{data.desc}</div>

                        {data.options &&
                        <div className={"lh-side-info-opt-box"}>
                            {data.options.map((e) => {
                                return (
                                    <div>
                                        {e.btnDesc &&
                                            <div className={"lh-side-info-btn-desc"}>{e.btnDesc}</div>
                                        }
                                        {this.generateButton(e.type, e.text, e.icon)}
                                    </div>
                                );
                            })}
                        </div>
                        }

                        {data.contactForm && <ContactForm avoidParentUpdate={() => this.avoidBoxAnimate()}/>}
                    </div>
                }

            </div>
        );
    }
}