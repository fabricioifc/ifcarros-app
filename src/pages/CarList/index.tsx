import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Car } from "../../store/ducks/cars/types";
import * as CarActions from "../../store/ducks/cars/actions";
import { ApplicationState } from "../../store";
import { View, FlatList, ActivityIndicator, RefreshControl } from "react-native";
// import { Container } from "./styles";
import { styles } from "./styles";
import CarItem from "../../components/CarItem";

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
// interface OwnProps {}

type Props = StateProps & DispatchProps;

class CarList extends Component<Props> {
  state = {
    isRefreshing: false
  }

  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { loadRequest } = this.props;
    const { loading, data } = this.props.cars;
    return (
      <View style={styles.container}>
        {loading ? 
          <ActivityIndicator size="large" color="#0000ff" style={{ padding: 20 }} /> : 
          <FlatList
            data={data}
            renderItem={({ item }) => <CarItem car={item} />}
            keyExtractor={item => String(item.url)}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={() => loadRequest()}
              />
            }
          />}
        
      </View>
    );
  }

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
