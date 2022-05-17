import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Admin extends React.Component {
  state = {
    service: []
  }
  componentDidMount() {
    axios.get(`https://checkscam77.com/backend/api.php?type=getlistservice`)
      .then(res => {
        const service = res.data;
        this.setState({ service });
      })
  }

  render() {
    return (
      <>
        {
          this.state.service
            .map(person =>
            <div className="shield-item" key={person.code}>
                <Link to={`/info/${person.code}`} className="shield-item_link">
                    <img src={`https://graph.facebook.com/${person.facebook}/picture?width=500&height=500&access_token=2712477385668128|b429aeb53369951d411e1cae8e810640`} alt={person.name} />
                    {person.username}
                </Link>
            </div>
            )
        }
      </>
    )
  }
}