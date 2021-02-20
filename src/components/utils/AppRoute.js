import React from 'react';
import { Route } from 'react-router-dom';

const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {

  Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} startJoiningCall={props.startJoiningCall} createCall={props.createCall} enableStartButton={props.enableStartButton} showCall={props.showCall}/>
        </Layout>
      )} />
  );
}

export default AppRoute;