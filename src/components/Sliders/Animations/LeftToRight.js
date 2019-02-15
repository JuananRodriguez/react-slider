import StyledComponent from "styled-components";
import Slide from './Base';

export const LeftToRight = StyledComponent(Slide)`
    &.slide-enter,
    &.slide-enter-active,
    &.slide-enter-done
    &.slide-exit,
    &.slide-exit-active,
    &.slide-exit-done {
        // transition: transform ${p=>p.time}ms ease-out;
    }

    &.slide-enter {
        transform: translate(-100%);
    }
    
    &.slide-enter-active {
        transition: transform ${p=>p.time}ms ease-out;
        transform: translate(0%);
    }
    
    &.slide-exit{
        transform: translate(0%);
    }
    
    &.slide-exit-active {
        transition: transform ${p=>p.time}ms ease-out;
        transform: translate(100%);
    }
`;


