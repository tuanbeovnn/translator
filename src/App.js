import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import routes from './routes';



class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: '',
    //         translated: '',
    //         isMouseover: false
    //     }
    // }

    // setTextData=(text) =>{
    //     this.setState({
    //         text
    //     })
    // }

    // setTranslated = (translated) => {
    //     this.setState({
    //         translated
    //     })
    // }


    render() {
        return (
            <Router>


                <Header />
               
                
                    <Switch>
                        {routes.map((route, index) => {
                            return (
                            
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}

                                />
                            )
                        })}
                    </Switch>
        


            </Router>
        );
    }
    showContentMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}

                    />
                )
            });
        }
        return result;
    }


}

export default (App);
