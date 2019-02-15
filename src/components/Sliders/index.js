import React from 'react'
import Slide from './Slide'
import StyledComponent from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const Wrap = StyledComponent('div')`
    position: relative;
    height: ${p=>p.height};
    width: ${p=>p.width};
    overflow:hidden;
`;

class Slider extends React.Component{

    static defaultProps = {
        content: [],
        current: 0,
        time: 500,
        timeOut: 3000,
        height: '200px',
        width:'200px',
        animation: 'Opacity'
    };

    state={
        currentSlide: this.props.current,
        slidesData: this.props.content
    };

    interval = null;

    // componentWillMount(){
    //     this.setState({
    //         currentSlide: this.props.current || 0,
    //         slidesData: this.props.content || []
    //     })
    // }
    componentDidMount(){
        //Añadir evento a las teclas de dirección para subir o bajar slide (++ o --)
        this.interval = setInterval(this.upSlide, 4000)
        //cada X segundos, ++ al currentSlide. Controlar interval
    }

    upSlide=()=>{
        if(this.state.currentSlide + 1 < this.state.slidesData.length )
            this.setState({ currentSlide : this.state.currentSlide + 1 });
        else
            this.setState({ currentSlide : 0})
    };

    render(){
        const {slidesData, currentSlide} = this.state;
        const {height, width, timeOut, time, animation} = this.props;
        return(
            <Wrap
                height={ height }
                width={ width }
            >
                {
                    slidesData.map((slide, index)=>
                        <CSSTransition
                            in={currentSlide === index}
                            timeout={timeOut}
                            classNames="slide"
                            unmountOnExit
                        >
                            <Slide
                                className={'slide'}
                                key={`slide-num-${index}`}
                                content={slide}
                                animation={animation}
                                time={time}
                                active={currentSlide === index}
                            />
                        </CSSTransition>
                    )
                }
            </Wrap>
        )
    }
}


export default Slider