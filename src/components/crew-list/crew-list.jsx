import React, { Component } from "react";
import CrewItem from "../crew-item/crew-item";
import styles from "./crew-list.module.scss";
import axios from "axios";

const BASE_URL = "https://api.spacexdata.com/v4/crew";

class CrewList extends Component {
  state = {
    crew: [],
    isLoading: false,
    error: "",
  };

  constructor() {
    super();
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(BASE_URL)
      .then((response) => {
        this.setState({ crew: response.data, error: "" });
      })
      .catch((error) => {
        this.setState({
          error:
            "An error occurred while trying to load the data. Try Again later.",
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { crew, isLoading, error } = this.state;

    return (
      <div className={styles.crew_list}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {crew.map((crew, index) => (
          <CrewItem
            key={crew.id}
            crew_member_photo={crew.image}
            crew_member_agency={crew.agency}
            crew_member_name={crew.name}
            crew_member_status={crew.status}
            crew_member_wiki={crew.wikipedia}
          />
        ))}
      </div>
    );
  }
}

export default CrewList;
