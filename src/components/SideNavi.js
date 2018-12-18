import * as React from "react";
import unitylogo from "../assets/resources/images/unityicon.png";
import reactlogo from "../assets/resources/images/reacticon.png";
import jslogo from "../assets/resources/images/jsicon.png";
import codeicon from "../assets/resources/images/codeicon.png";
import abouticon from "../assets/resources/images/abouticon.png";
import contacticon from "../assets/resources/images/contacticon.png";

import {getRandomNumber} from "../helpers/mainHelper";

export class SideNavi extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            logo: jslogo,
            randomTop: 50,
            randomRight: 50,
        };

        this.hugeLogo = null;
    }

    componentDidMount() {
        console.log(window.innerHeight, "there")
    }

    setHugeLogo = (logo = null) => {
        let file = null;

        switch (logo) {
            case "js":
                file = jslogo;
                break;
            case "react":
                file = reactlogo;
                break;
            case "unity":
                file = unitylogo;
                break;
            default:
                return jslogo;
        }

        this.setState({
            logo: file,
            hugeLogoLock: false,
        })
    };

    randomizeTop = () => {
      this.setState({
          randomTop: getRandomNumber(20, window.innerHeight - 400),
          randomRight: getRandomNumber(20, window.innerWidth - 400),
      });
    };

    categorySelect = (selected) => {
        this.hugeLogo.classList.add("slide-rotate-hor-top");

        this.setState({
            hugeLogoLock: true,
        });

        this.props.showBox(selected);
    };

    categorySmallSelect = (selected) => {
        this.props.showBottomBox(selected);
    };

    render() {
        return (
            <div className={"lh-side-navi-container"}>
                <div className={"lh-navi-opt"}
                     onMouseEnter={(e) => {
                         !this.state.hugeLogoLock && this.randomizeTop();
                         this.setHugeLogo("js");
                         this.hugeLogo.classList.remove("slide-rotate-hor-top-back");
                         this.hugeLogo.classList.add("slide-rotate-hor-top");
                     }}
                     onMouseLeave={() => {
                         if (!this.state.hugeLogoLock) {
                             this.hugeLogo.classList.remove("slide-rotate-hor-top");
                             this.hugeLogo.classList.add("slide-rotate-hor-top-back");
                         }
                     }}
                     onClick={() => this.categorySelect({
                         lock: "js",
                         title: "web development",
                         desc: "I tend to code things from scratch, and enjoy bringing ideas to life in the browser.",
                         techLangs: ["HTML (SEO friendly, fully responsive code)", "CSS (with preprocessors)", "JavaScript (my favorite, with ES6 standards)", "ReactJS", "PHP 5/7 (OOP, ORM)", "SQL, mySQL"]
                     })}
                >
                    <div className={"lh-navi-icon"}>
                        <img src={jslogo} className={"lh-navi-logoicon"}/>
                    </div>
                    <div>browser<span className={"lh-navi-span"}>web</span></div>

                </div>
                <div className={"lh-navi-opt"}
                     onMouseEnter={(e) => {
                         !this.state.hugeLogoLock && this.randomizeTop();
                         this.setHugeLogo("react");
                         this.hugeLogo.classList.remove("slide-rotate-hor-top-back");
                         this.hugeLogo.classList.add("slide-rotate-hor-top");
                     }}
                     onMouseLeave={() => {
                         if (!this.state.hugeLogoLock) {
                             this.hugeLogo.classList.remove("slide-rotate-hor-top");
                             this.hugeLogo.classList.add("slide-rotate-hor-top-back");
                         }
                     }}
                     onClick={() => this.categorySelect({
                         lock: "react",
                         title: "mobile applications",
                         desc: "From few months I really like to code mobile apps, it gives me much ways to learn new code structuring",
                         techLangs: ["Native apps using JavaScript", "React native (native xCode/expo cli)"]
                     })}
                >
                    <div className={"lh-navi-icon"}>
                        <img src={reactlogo} className={"lh-navi-logoicon"}/>
                    </div>
                    <div>mobile<span className={"lh-navi-span"}>apps</span></div>

                </div>
                <div className={"lh-navi-opt"}
                     onMouseEnter={(e) => {
                         this.randomizeTop();
                         this.setHugeLogo("unity");
                         this.hugeLogo.classList.remove("slide-rotate-hor-top-back");
                         this.hugeLogo.classList.add("slide-rotate-hor-top");
                     }}
                     onMouseLeave={() => {
                         if (!this.state.hugeLogoLock) {
                             this.hugeLogo.classList.remove("slide-rotate-hor-top");
                             this.hugeLogo.classList.add("slide-rotate-hor-top-back");
                         }
                     }}
                     onClick={() => this.categorySelect({
                         lock: "unity",
                         title: "game development",
                         desc: "Coding games gives me much fun, I doing just for passion, don;t have commercial projects but I have big one own",
                         techLangs: ["C#", "JavaScript", "Unity engine"]
                     })}
                >
                    <div className={"lh-navi-icon"}>
                        <img src={unitylogo} className={"lh-navi-logoicon"}/>
                    </div>
                    <div>game<span className={"lh-navi-span"}>dev</span></div>
                </div>

                <div className={"lh-navi-opt-separator"}></div>

                <div className={"lh-navi-opt-small"}
                     onClick={() => this.categorySmallSelect({
                         title: "gimme some job",
                         icon: require("../assets/resources/images/githubicon.png"),
                         desc: "if you think im a good chooice, i will be happy working for you and i do my best. I coding small and huge apps, shops, single pages and much more.",
                         options: [
                             {type: "contact", text: "Contact me", icon: contacticon},
                             {type: "github", text: "Ask about GitHub", icon: require("../assets/resources/images/githubicon.png"), btnDesc: "Maybe my work inspired you?"},
                             ]
                     })}
                >
                    <div className={"lh-navi-icon"}>
                        <img src={codeicon} className={"lh-navi-logoicon"}/>
                    </div>
                    <div>my code<span className={"lh-navi-span"}>for u</span></div>
                </div>
                <div className={"lh-navi-opt-small"}>
                    <div className={"lh-navi-icon"}>
                        <img src={abouticon} className={"lh-navi-logoicon"}/>
                    </div>
                    <div>about<span className={"lh-navi-span"}>me</span></div>
                </div>
                <div className={"lh-navi-opt-small"}
                     onClick={() => this.categorySmallSelect({
                         title: "How can i help you?",
                         icon: contacticon,
                         desc: "send me an email via form below, i will answer asap",
                         contactForm: true,
                     })}
                >
                    <div className={"lh-navi-icon"}>
                        <img src={contacticon} className={"lh-navi-logoicon"}/>
                    </div>
                    <div>contact<span className={"lh-navi-span"}>options</span></div>
                </div>

                <div style={{top: this.state.randomTop, left: this.state.randomRight}} ref={(e) => this.hugeLogo = e} className={"lh-navi-hugeLogo"}>
                    <img src={this.state.logo} className={"lh-navi-logoicon"}/>
                </div>
            </div>
        );
    }
}