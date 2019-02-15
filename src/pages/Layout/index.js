import React from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/Sliders'
import StyledComponent from 'styled-components';

const Wrap = StyledComponent('div')`
    width: 100vw;
    height: 100vh;
`;

const slides = [
    {
        "title": "Hola esto es una prueba 1",
        "content": "Ese es el contenido",
        "background": 'https://images.unsplash.com/photo-1503431128871-cd250803fa41',
        "to": "/contact"
    },
    {
        "title": "Hola esto es una prueba 2",
        "content": "Ese es el contenido",
        "background": 'https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        "to": "/page-2"
    },
    {
        "title": "Hola esto es una prueba 4",
        "content": null,
        "background": 'https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        "to": null
    }
]
const Menu = () => <Wrap><Hero height='100%' width='100%' content={slides}/></Wrap>;
const Content = () => <p>Content</p>;
const Social = () => <p>Social</p>;



const Layout1 =  Layout(Menu, Content, Social);

export default ()=> <Layout1/>