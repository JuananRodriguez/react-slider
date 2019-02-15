import StyledComponent from "styled-components";
import Slide from './Base';

export const Opacity = StyledComponent(Slide)`
    &.slide-enter,
    &.slide-enter-active,
    &.slide-exit,
    &.slide-exit-active {
       transition: opacity ${p=>p.time}ms ease-out;
    }

    &.slide-enter,
    &.slide-exit-active{
        opacity: 0;
    }
    
    &.slide-enter-active,
    &.slide-exit{
        opacity: 1;
    }
    `;