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


    &.slide-enter {
        /*transform: translateX(100%) translateY(100%);*/
        /*transform: translate(100%);*/
        opacity: 0;
        transition: opacity ${p=>p.time}ms ease-out;
    }
    &.slide-enter-active {
        opacity: 1;
        transition: opacity ${p=>p.time}ms ease-out;
        /*transform: translate(0%);*/
        /*transition: transform ${p=>p.time}ms ease-out;*/
    }
    &.slide-exit {
        opacity: 1;
        transition: opacity ${p=>p.time}ms ease-out;
        /*transform: translate(0%);*/
    }
    &.slide-exit-active {
        opacity: 0;
        transition: opacity ${p=>p.time}ms ease-out;
        /*transform: translateX(-100%) translateY(-100%);*/
        /*transition: transform 500ms ease-out;*/
    }
    
    &.slide-exit-done {
        opacity: 0;
    }
    `;