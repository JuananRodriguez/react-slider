import StyledComponent from "styled-components";
import Slide from './Base';

export const BottomToTop = StyledComponent(Slide)`
    &.slide-enter,
    &.slide-enter-active,
    &.slide-enter-done
    &.slide-exit,
    &.slide-exit-active,
    &.slide-exit-done {
        transition: transform ${p=>p.time}ms ease-out;
    }
    /*
    &.slide-enter{
        transform: translateY(100%);            
    }
    
    &.slide-enter-active{
        transform: translateY(100%);        
    }
    
    &.slide-enter-done {
        transform: translateY(0%);
    }
    
    &.slide-exit{
        transform: translateY(0%);        
    }
    
    &.slide-exit-active{
        transform: translateY(0%);        
    }
    
    &.slide-exit-done{
        transform: translateY(-100%);
    }*/
    
    &.slide-enter {
    transform: translate(100%);
    opacity: 1;
}
&.slide-enter-active {
    transform: translate(0%);
    transition: transform 500ms ease-out;
}
&.slide-exit {
    transform: translate(0%);
}
&.slide-exit-active {
    transform: translate(-100%);
    transition: transform 500ms ease-out;
}

&.slide-exit-done {
    opacity: 0;
}
`;


