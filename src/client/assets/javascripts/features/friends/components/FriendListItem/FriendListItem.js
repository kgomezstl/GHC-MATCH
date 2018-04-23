import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './FriendListItem.scss';

export default class FriendListItem extends Component {
  static propTypes = {
    deleteFriend: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starFriend: PropTypes.func.isRequired,
    starred: PropTypes.bool
  };
  renderMatches = () => {
    return !this.props.matches ? null :
      this.props.matches.map(match => {
        return (<div key={match.id}>
          {match.name}
          <div>
            <div style={{ backgroundColor: '#00af9a', width: match.percent*1.5, height: '20px' }}>
              {match.percent}%
            </div>
          </div>
        </div>)
      })
  };
  render() {
    return (
      <li className="friendListItem">
        <img className="friendImg" src={this.props.img} />
        <div className="friendInfos">
          <div><span>{this.props.name}</span></div>
          <div style={{ color: '#00af9a', fontSize: '12px' }}>Matching Fellows!</div>
          {this.renderMatches()}

        </div>
        {/*<div className="friendActions">
          <button className="btn btn-default btnAction" onClick={() => this.props.starFriend(this.props.id)}>
            <i className={classnames('fa', { 'fa-star': this.props.starred }, { 'fa-star-o': !this.props.starred })} />
          </button>
          <button className="btn btn-default btnAction" onClick={() => this.props.deleteFriend(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>*/}
      </li>
    );
  }
}
