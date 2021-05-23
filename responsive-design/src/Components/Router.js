import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Principal from './Principal'

class Rutas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Router>
            <Switch> 
            <Route exact path={["/","/Prueba1"]} component={Principal}/>
            </Switch>                
            </Router>
        );
    }
}
 
export default Rutas;