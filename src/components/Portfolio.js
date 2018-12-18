import * as React from "react";
import {ContactForm} from "./ContactForm";
import {PortfolioBox} from "./PortfolioBox";

export class Portfolio extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        };

        this.canvas = null;
        this.box = null;
    }

    draw() {
        if (this.canvas) {
            const canvas = this.canvas;
            const ctx = canvas.getContext("2d");

            ctx.moveTo(400, 100);
            ctx.lineTo(700,150);
            ctx.lineWidth = 0.1;

            ctx.strokeStyle = '#ff34d0';
            ctx.stroke();

            console.log(this.box.clientWidth, "Here");
        }
    }

    componentDidUpdate() {
    }

    render() {
        this.draw()
        return (
            <div className={"portfolio-handler"} ref={(e) => this.box = e}>
                {this.box &&
                <canvas ref={(e) => this.canvas = e}
                        width={this.box.clientWidth}
                        height={this.box.clientHeight}
                        style={{background: "#fff", position: "absolute", left: 0, top: 0}}
                />
                }
                <div className={"box-aligner"}>
                <PortfolioBox/>

                <PortfolioBox/>

                </div>

            </div>
        );
    }
}