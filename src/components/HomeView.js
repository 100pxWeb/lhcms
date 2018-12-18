import * as React from "react";
import {SideNavi} from "./SideNavi";
import {SideInfoBox} from "./SideInfoBox";
import jslogo from "../assets/resources/images/jsicon.png";
import {HoodyAnimation} from "./HoodyAnimation";
import {BottomBox} from "./BottomBox";

export class HomeView extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showInfoBox: false,
            showBottomBox: false,
        };
    }

    showInfoBox = (data) => {
        this.setState({
            showInfoBox: data,
        })
    };

    showBottomBox = (data) => {
        this.setState({
            showBottomBox: data,
        })
    };

    closeBox = () => {
        this.setState({showInfoBox: false})
    };

    closeBottomBox = () => {
        this.setState({showBottomBox: false})
    };

    render() {
        return (
            <div className={"lh-home-container"}>
                <div className={"lh-home-bg-conatiner"}>
                    <HoodyAnimation/>

                    <div className={"lh-view-page-aligner"}>
                        <SideNavi
                            showBox={(data) => this.showInfoBox(data)}
                            showBottomBox={(data) => this.showBottomBox(data)}
                        />
                        <SideInfoBox
                            showBox={this.state.showInfoBox}
                            closeBox={() => this.closeBox()}
                        />
                    </div>

                    <BottomBox
                        showBottomBox={this.state.showBottomBox}
                        closeBox={() => this.closeBottomBox()}
                    />
                </div>

            </div>
        );
    }
}