import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


const isAuthenticate = ()=> localStorage.getItem('Yt')

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
    {...rest}
    render={props => 
        isAuthenticate() ? (
            <Component {...props} />
        ) : (
            <Redirect to ={{
                pathname: "/login",
                state:{from:props.location}
            }}/>
        )
        
    }
 />
);

export default PrivateRoute;