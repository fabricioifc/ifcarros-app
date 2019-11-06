import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // flex: 1
  },
  headerContainer: {
    height: 150
  },
  headerText: {
    color: "#222"
  },
  screenContainer: {
    paddingTop: 20,
    width: "100%"
  },
  screenStyle: {
    height: 30,
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },
  screenTextStyle: {
    fontSize: 20,
    marginLeft: 20,
    textAlign: "center"
  },
  selectedTextStyle: {
    fontWeight: "bold",
    color: "#00adff"
  },
  activeBackgroundColor: {
    backgroundColor: "grey"
  },
  profileImage: {
    resizeMode: "center",
    width: 150,
    height: 150,
    borderRadius: 150 / 2
  }
});

export default styles;
