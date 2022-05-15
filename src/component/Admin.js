import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Admin extends React.Component {
  state = {
    service: []
  }
  componentDidMount() {
    axios.get(`https://checkscam77.com/backend/scam-list.php`)
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
            <div className="shield-item">
                <Link to="https://admin.vn/trust-service/le-van-viet-28.html" className="shield-item_link">
                    <img src="https://graph.facebook.com/100041184143723/picture?width=500&height=500&access_token=2712477385668128|b429aeb53369951d411e1cae8e810640" alt={person.name} />
                    {person.name}
                </Link>
            </div>
            )
        }
      </>
    )
  }
}