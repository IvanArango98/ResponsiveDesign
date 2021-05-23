import React from 'react';
import {Container,Form,Button,Row,Col} from 'react-bootstrap'
import './Estilos.css'
import NavBarj from './navbar'
import HeroSection from './HeroSection'
import Cards from './Cards'
import Footer from './Footer'
class Principal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <NavBarj/>
                <HeroSection/>
                <Cards/>
                <Footer/>
            </div>
         );
    }
}
 
export default Principal;