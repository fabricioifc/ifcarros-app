import React from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import { SearchBar, ListItem } from "react-native-elements";

class CarListComponent extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      search: ''
    }
  }
  render() {
    const {dataFilter} = this.props
    return (
      <SafeAreaView>
        <FlatList
          data={dataFilter}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.marca} ${item.modelo}`}
              subtitle={`${item.ano} - ${item.km}\n${item.descricao}`}
              leftAvatar={{source: {uri: item.imagem}}}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.url}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmptyContainer}
        />
      </SafeAreaView>
    )
  }


renderHeader = () => {
  return (<SearchBar placeholder="Filtrar..." 
    onChangeText={text => this.SearchFilterFunction(text)}
    value={this.state.search}
    lightTheme />
  );
};

renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "86%",
        backgroundColor: "#F0F0F0",
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

SearchFilterFunction = (text: string) => {
  this.setState({
    search: text
  });
  const {data} = this.props.cars

  const newData = data.filter(item => {
    const itemData = `${item.marca.toUpperCase()} ${item.modelo.toUpperCase()}`;
    const textData = text.toUpperCase();
    return itemData.includes(textData);
  });
  // this.props.cars.dataFilter = newData
  this.props.updateFilter(newData)
}
}


  export default CarListComponent