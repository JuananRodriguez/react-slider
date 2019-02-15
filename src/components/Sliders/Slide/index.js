import React from 'react'
import Background from './Background'
import { Opacity, BottomToTop } from '../Animations'

class Index extends React.PureComponent{
    render(){
        const { background, to, content, title } = this.props.content;
        const { time, active } = this.props;
        return(
            <BottomToTop
                time={time}
                active = {active}
            >
                { background && <Background img={background}/> }
                <h2>{title}</h2>
                <p>{content}</p>
                <button>{to}</button>
            </BottomToTop>
        )
    }
}

export default Index