import React, {Suspense} from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'
import { selectAppAction } from '../actions'

const dynamicFederation = (scope, module) => {
  window[scope].override(
    Object.assign(
      {
        react: () => {
          return Promise.resolve().then(() => {
            return () => require('react');
          });
        },
        'react-dom': () => {
          return Promise.resolve().then(() => {
            return () => require('react-dom');
          });
        },
      },
      __webpack_require__.O
    )
  );

  return window[scope].get(module).then((factory) => {
    const Module = factory();
    return Module;
  });
};


const RemoteApp = React.lazy(() => dynamicFederation('app2', 'RemoteApp'));
const Widget = React.lazy(() => dynamicFederation('app3', 'Widget'));


const Dashboard = ({ store, userLogin, appBool, selectApp }) => {
  return (
    <div>
     <Header appBool={appBool} selectApp={selectApp}/>  
      <h1>Hi {userLogin}</h1>
    {appBool? 
     <Suspense fallback="Loading...">
       <Widget />
     </Suspense>
      : 
      <Suspense fallback="Loading...">
       <RemoteApp store={store}/>
     </Suspense>
    }  
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
    userLogin: state.root.userLogin,
    appBool: state.root.selectApp  
  })
  
const mapDispatchToProps = (dispatch, ownProps) => ({
  selectApp: (bool) => dispatch(selectAppAction(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)