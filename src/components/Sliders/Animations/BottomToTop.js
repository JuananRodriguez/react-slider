import StyledComponent from "styled-components";
import Slide from './Base';

export const Opacity = StyledComponent(Slide)`
    &.slide-enter {
        /*transform: translateX(100%) translateY(100%);*/
        /*transform: translate(100%);*/
        opacity: 0;
        transition: transform 500ms;
    }
    &.slide-enter-active {
        opacity: 1;
        transition: opacity 500ms;
        /*transform: translate(0%);*/
        /*transition: transform 500ms ease-out;*/
    }
    &.slide-exit {
        opacity: 1;
        transition: opacity 500ms;
        /*transform: translate(0%);*/
    }
    &.slide-exit-active {
        opacity: 0;
        transition: opacity 500ms;
        /*transform: translateX(-100%) translateY(-100%);*/
        /*transition: transform 500ms ease-out;*/
    }
    
    &.slide-exit-done {
        opacity: 0;
    }
    
    `;