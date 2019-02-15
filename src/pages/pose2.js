import React, { Component } from 'react'
import Layout from './../components/layout'
import Drip from '../components/Transitions/PaintDrip/index'
import CONFIGURATION from "../../CONFIGURATION";

class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <Layout theme="white">
                    <h1>React pose 2</h1>
                    <Drip
                        to="/pose1"
                        hex={CONFIGURATION.backgroundColor}
                        duration={0.7}
                    >
                        <p>Pose 1</p>
                    </Drip>
                </Layout>
        )
    }
}

export default Index