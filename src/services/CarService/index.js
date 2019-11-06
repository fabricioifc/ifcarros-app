import api from "../api";

export const getCarList = async () => {
  try {
    const response = await api.get("/cars/");
    console.log(response.data);

    // const { projects } = response.data;

    // this.setState({ projects });
  } catch (err) {
    console.log(err);

    // this.setState({ errorMessage: err.data.error });
  }
};
