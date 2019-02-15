import StyledComponent from "styled-components";
import Slide from './Base';

export const Opacity = StyledComponent(Slide)`
    &.slide-enter,
    &.slide-enter-active,
    &.slide-enter-done
    &.slide-exit,
    &.slide-exit-active,
    &.slide-exit-done {
       transition: opacity ${p=>p.time}ms ease-out;
    }

    &.slide-enter,
    &.slide-exit-active,
    &.slide-exit-done{
        opacity: 0;
    }
    
    &.slide-enter-active,
    &.slide-exit{
        opacity: 1;
    }
    `;