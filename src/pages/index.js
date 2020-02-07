import React, {Component} from "react";
import { connect } from "react-redux";
import AppLayout from "../components/app-layout";
import App from "../components/app";

class Page extends Component {
    // static getInitialProps({store, isServer, pathname, query}) {
    //     store.dispatch({type: 'FOO', payload: 'foo'}); // component will be able to read from store's state when rendered
    //     return {custom: 'custom'}; // you can pass some custom props to component from here
    // }
    render() {
        return (
          <AppLayout>
            <App />
          </AppLayout>
        )
    }
}

export default connect(state => state)(Page);