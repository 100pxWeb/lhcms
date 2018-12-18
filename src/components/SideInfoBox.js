import * as React from "react";

export class SideInfoBox extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        };

        this.box = null;
    }

    componentDidUpdate() {
        this.props.showBox && this.showBox();
    }

    showBox = () => {
        this.box.classList.remove("slide-rotate-ver-right-back");
        this.box.classList.add("slide-rotate-ver-right");
    };

    closeBox = () => {
        this.box.classList.remove("slide-rotate-ver-right");
        this.box.classList.add("slide-rotate-ver-right-back");
    };

    render() {
        const data = this.props.showBox;

        return (
            <div ref={(e) => this.box = e}
                 className={"lh-side-info-box"}
                 onClick={() => {
                     this.closeBox();
                     this.props.closeBox()
                 }}
            >
                <div className={"lh-side-info-box-bg"}></div>
                <div className={"lh-side-info-box-close"}
                    onClick={() => {
                        this.closeBox();
                        this.props.closeBox()
                    }}
                >X</div>

                <div className={"lh-side-info-box-title"}>{data.title}</div>
                <div className={"lh-side-info-box-desc"}>{data.desc}</div>

                {data &&
                <div className={"lh-side-info-box-tech"}>
                    <div className={"lh-side-info-box-tech-title"}>Languages which I using and are highly recommended
                        for me:
                    </div>

                    <ul className={"lh-side-info-box-tech-list"}>
                        {data.techLangs.map((e, k) => {
                            return (
                                <li className={"lh-side-info-box-tech-listItem"} key={k}>{e}</li>
                            )
                        })}
                    </ul>
                </div>
                }
            </div>
        );
    }
}