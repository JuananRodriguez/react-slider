import React from 'react'

const Layout = (Menu, Content, Social) => {

    class inner extends React.Component{
        render(){
            return(
                <>
                    { Menu && <Menu/> }
                    { Content && <Content/> }
                    { Social && <Social/> }
                </>
            )

        }
    }
    return inner

};

export default Layout