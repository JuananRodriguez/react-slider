import React from 'react'
import Background from './Background'
import * as Animations from '../Animations'

class Index extends React.PureComponent{
    render(){
        const { background, to, content, title } = this.props.content;
        const { time, active, animation } = this.props;
        console.log(animation);
        const Slide = Animations[animation];
        return(
            <Slide
                time={time}
                active = {active}
            >
                { background && <Background img={background}/> }
                <h2>{title}</h2>
                <p>{content}</p>
                <button>{to}</button>
            </Slide>
        )
    }
}

export default Index