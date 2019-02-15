import React from 'react'
import Background from './Background'
import { Opacity } from '../Animations/Opacity'

class Index extends React.PureComponent{
    render(){
        const { background, to, content, title } = this.props.content;
        const { time, active } = this.props;
        return(
            <Opacity
                time={time}
                active = {active}
            >
                { background && <Background img={background}/> }
                <h2>{title}</h2>
                <p>{content}</p>
                <button>{to}</button>
            </Opacity>
        )
    }
}

export default Index