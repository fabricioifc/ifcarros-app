import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Car } from "../../store/ducks/cars/types";
import * as CarActions from "../../store/ducks/cars/actions";
import { ApplicationState } from "../../store";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
// import { Container } from "./styles";
import { ListItem, SearchBar } from "react-native-elements";
import { styles } from "./styles";
import CarItem from "../../components/CarItem";
import { Avatar } from "react-native-elements";

// const mapStateToProps = (state: ApplicationState) => ({});
const mapStateToProps = ({ cars }: ApplicationState) => ({
  cars
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CarActions, dispatch);

interface StateProps {
  cars: Car[];
}
interface DispatchProps {
  loadRequest(): void;
}
interface OwnProps {
  car: Car;
}

type Props = StateProps & DispatchProps & OwnProps;

class CarList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }
  render() {
    const { cars } = this.props;
    const { data } = cars;
    console.log(data);
    return (
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ListItem
              title={`${item.marca} ${item.modelo}`}
              subtitle={item.descricao}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.url}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
        />
      </SafeAreaView>
    );
  }

  renderFooter = () => {
    if (!this.props.cars.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.5, width: "100%", backgroundColor: "#000" }} />
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarList);
