import React from 'react'
import Background,{IMG} from './Background'
import StyledComponent from 'styled-components'
import { Opacity } from '../Animations/Opacity'

const Slide = StyledComponent('section')`
    height: 100%;
    width: 100%;
    overflow:hidden;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    // transform: translateY(${p=>p.active ? 0 : 100}%);
    // transition: transform 0.5ms;
    *:not(div){
        color: #fff;
        position: relative
        z-index: 2
     }
`;


class Index extends React.Component{

    state={
        title: null,
        content: null,
        background: null,
        to: null,
    };

    componentWillMount(){
        this.setState({...this.props.content})
    }

    render(){
        const { background, to, content, title } = this.state;
        return(
            <Opacity active = {this.props.active}>
                { background && <Background img={background}/> }
                <h2>{title}</h2>
                <p>{content}</p>
                <button>{to}</button>
            </Opacity>

        )
    }
}

export default Index