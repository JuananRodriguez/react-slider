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
    z-index: ${p=>p.active ? 100 : 0};
    // opacity: ${p=>p.active ? 1 : 0};
    
    *:not(div){
        color: #fff;
        position: relative
        z-index: 2
     }
`;