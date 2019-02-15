import React from "react"
import { Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'

import Layout from "../components/layout"
import SEO from "../components/seo"


export default class Concat extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        // Set delay in milliseconds
        window.pageExitTime = 10000
    }
    render() {
        // A "status" property will be added
        // You can use this to set classes, or trigger animations however you want
        return (
            <TransitionLink
                to="/page-2"
                exit={{
                    trigger: ({ exit, node }) => console.log(exit, node),
                    length: 1
                }}
                entry={{
                    trigger: ({ exit, node }) => console.log(exit, node),
                    delay: 0.6
                }}
            >
                Go to page 2
            </TransitionLink>
        )
    }
}