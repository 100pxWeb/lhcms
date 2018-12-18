import * as React from "react";
import {SideNavi} from "./SideNavi";
import {SideInfoBox} from "./SideInfoBox";
import jslogo from "../assets/resources/images/jsicon.png";
import {Portfolio} from "./Portfolio";

export class HoodyAnimation extends React.Component {
    constructor(props){
        super(props);

        this.hoody = null;
        this.state = {
            x: 0,
            y: 0,
        };
    }

    getMousePosition = (e) => {
        this.setState({ x: e.screenX, y: e.screenY });

        //this.hoody.style.backgroundPositionX = -e.nativeEvent.offsetX / 100 + "px";
        //this.hoody.style.backgroundPositionY = -e.nativeEvent.offsetY / 100 + "px";

        //console.log(this.hoody.style.backgroundPositionY);
    };

    render() {
        return (
            <div className={"lh-home-container-animation"}
                 onMouseMove={(e) => this.getMousePosition(e)}
            >
                <div className={"hoody-bg"}></div>
                <div className={"hoody-particles"}></div>
                <div className={"hoody-particles_2"}></div>
                {/*<div ref={(e) => this.hoody = e} className={"hoody"}></div>*/}
                <Portfolio/>

            </div>
        );
    }
}