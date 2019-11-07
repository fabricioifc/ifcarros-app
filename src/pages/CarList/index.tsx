import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Car, CarState } from "../../store/ducks/cars/types";
import * as CarActions from "../../store/ducks/cars/actions";
import { ApplicationState } from "../../store";
import { Text } from 'react-native';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles } from "./styles";
import { SearchBar, ListItem } from "react-native-elements";
import CarListComponent from "../../components/CarListComponent";
class CarList extends Component<Props> {
  // state = {
  //   search: '',
  // }
  
  componentDidMount() {
    const { loadRequest } = this.props;
    
    loadRequest();
  }

  render() {
    const {cars, updateFilter} = this.props
    const {dataFilter} = cars
    return (
      <CarListComponent 
        dataFilter={dataFilter}
        cars={cars}
        updateFilter={updateFilter}
      />
    );
  }

  renderEmptyContainer = () => {
    return (
      <View style={styles.empty}>
        <Text>Nenhum dado encontrado.</Text>
      </View>
    )

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

  
}


// const mapStateToProps = ({ cars }: ApplicationState) => ({
  const mapStateToProps = (state: ApplicationState) => ({
    cars: state.cars,
  });
  
  const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(CarActions, dispatch);
  
  interface StateProps {
    cars: CarState[];
  }
  interface DispatchProps {
    loadRequest(): void;
    updateFilter(): void;
  }
  interface OwnProps {
    car: Car;
  }
  
  type Props = StateProps & DispatchProps & OwnProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarList);
