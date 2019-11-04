import React, { Component } from "react";
import { ScrollView, Button } from "react-native";
import { logout } from "../../services/auth";

class Logout extends Component {
  _handleSubmit = () => {
    let navigation = this.props.navigation;
    logout().then(() => navigation.navigate("Login"));
  };
  render() {
    let navigation = this.props.navigation;
    return (
      <ScrollView style={{ marginTop: 200 }}>
        <Button
          onPress={() => navigation.navigate("DrawerOpen")}
          title="Open Sidebar"
        />
        <Button
          backgroundColor="#03A9F4"
          title="SIGN OUT"
          onPress={this._handleSubmit}
        />
      </ScrollView>
    );
  }
}
export default Logout;
