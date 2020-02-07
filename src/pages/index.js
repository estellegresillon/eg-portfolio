import React, {Component} from "react";
import { connect } from "react-redux";
import AppLayout from "../components/app-layout";
import App from "../components/app";

class Page extends Component {
  render() {
    return (
      <AppLayout>
        <App />
      </AppLayout>
    )
  }
}

Page.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default connect(state => state)(Page);