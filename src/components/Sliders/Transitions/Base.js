import StyledComponent from "styled-components";

export default StyledComponent('section')`
    height: 100%;
    width: 100%;
    overflow:hidden;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    // transform: translateY(${p=>p.active ? 0 : 100}%);
    // transition: transform 0.5ms;
    *:not(div){
        color: #fff;
        position: relative
        z-index: 2
     }
`;