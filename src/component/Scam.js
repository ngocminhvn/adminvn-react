import React from 'react';
import axios from 'axios';

export default class Scam extends React.Component {
  state = {
    scam: []
  }

  componentDidMount() {
    axios.get(`https://checkscam77.com/backend/scam-list.php`)
      .then(res => {
        const scam = res.data;
        this.setState({ scam });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.scam
            .map(person =>
              <div className="scam-item d-flex align-items-center py-3 px-4 border bg-white" key={person.id} >
              <div className="scam-title">
                <span className="scam-title_icon">
                  <i className="fas fa-user" />
                </span>
                <a href={person.url} className="scam-title_link">
                  {person.name}
                </a>
              </div>
              <div className="scam-info ml-auto w-auto">
                <span className="scam-info_time">
                  <i className="fas fa-clock" />
                  {person.time}
                </span>
                <span className="scam-info_phone">
                  <i className="fas fa-money-bill-alt" />
                  {person.stk}
                </span>
              </div>
            </div>
            )
        }
      </ul>
    )
  }
}