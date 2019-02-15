
// This was made using the code borrowed from this beautiful codepen!
// https://codepen.io/osublake/pen/eNrQqV?editors=0010
import React, { Component } from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import fadeInRipple from './fadeInRiple';
import fadeOutRipple from './fadeOutRiple';
import { TimelineMax } from "gsap";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.createRipple = fadeInRipple.bind(this);
        this.deleteRipple = fadeOutRipple.bind(this);
        this.hiddenNode = this.hiddenNode.bind(this);
    }

    // componentWillUnmount() {
    //     window.removeEventListener("resize", this.onResize);
    // }
    //
    // onResize = () => {
    //     this.vw = this.canvas.width = window.innerWidth;
    //     this.vh = this.canvas.height = window.innerHeight;
    // };

    hiddenNode(node){
        node.setAttribute("style", {"display":"none"})
    };

    render() {
        const {
            exit: removedExit,
            entry: removedEntry,
            paintDrip: removedProp,
            duration,
            ...props
        } = this.props;
        const aniLength = duration || 1;
        const aniDelay = aniLength / 1.75;

        return (
            <>
                <TransitionLink
                    exit={{
                        // length: aniLength,
                        // trigger: ({ exit, e, node }) =>
                        //     this.createRipple(exit, e, props.hex, props.color, node)
                        trigger: ({ exit, e, node }) => {
                            this.hiddenNode(node)
                        }
                    }}
                    entry={{
                        delay: aniDelay,
                        length: aniLength,
                        // trigger: ({ entry, node }) => this.slideIn(entry, node, "left")
                        trigger: ({ entry, e, node }) =>
                            this.deleteRipple(entry, e, props.hex, props.color, node)
                    }}
                    {...props}
                >
                    {props.children}
                </TransitionLink>
            </>
        );
    }
}