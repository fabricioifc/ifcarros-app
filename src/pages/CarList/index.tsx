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
import { SearchBar } from "react-native-elements";

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
    isRefreshing: false,
    localData: []
  }
  arrayholder: [];

  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
    const { loading, data } = this.props.cars;
    this.setState({
      localData: data
    })
  }

  render() {
    const { loadRequest } = this.props;
    const { loading, data } = this.props.cars;
    return (
      <View style={styles.container}>
        {loading ? 
          <ActivityIndicator size="large" color="#0000ff" style={{ padding: 20 }} /> : 
          <FlatList
            data={this.state.localData}
            renderItem={({ item }) => <CarItem car={item} />}
            keyExtractor={item => String(item.url)}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={() => loadRequest()}
              />
            }
            ListHeaderComponent={this.renderHeader}        
          />}
        
      </View>
    );
  }


  renderHeader = () => {
    return (      
      <SearchBar      
        placeholder="Filtrar..."        
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}             
      />    
    );  
  };

  searchFilterFunction = text => {  
    // const { data } = this.props.cars;  
    const newData = this.state.localData.filter(item => {      
      const itemData = `${item.name.title.toUpperCase()}   
      ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      
      const textData = text.toUpperCase();
        
      return itemData.indexOf(textData) > -1;    
    });
    
    this.setState({ localData: newData });  
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarList);
