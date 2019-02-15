import React from 'react'
import StyledComponent from 'styled-components'

const IMG = StyledComponent('div')`
    height: 100%;
    width: 100%;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-size: cover;
    background-position: center;
    background-image:url("${p=>p.img}");
    background:${p=>p.color};
`;

class Background extends React.Component{
    state={
        img:null,
        color:null
    };

    componentWillMount(){
        this.setState({
            img: this.props.img,
            color: this.props.color
        })
    }

    render(){
        const {color, img} = this.state;
        return(
            <IMG img={img} color={color}/>
        )
    }
}

export default Background;
export {IMG}