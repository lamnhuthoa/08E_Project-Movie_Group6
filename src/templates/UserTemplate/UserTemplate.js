import { Fragment, useEffect } from "react";
import { Route } from "react-router";

export const UserTemplate = (props) => { //path, exat, Component
    const { Component, ...restProps } = props;
    
    useEffect(() => {
        window.scrollTo(0,0);
    })

    return <Route {...restProps} render={(propsRoute) => { //props.location, props.history, props.match
        return <Fragment>
                <Component {...propsRoute} />
        </Fragment>
    }} />
}
