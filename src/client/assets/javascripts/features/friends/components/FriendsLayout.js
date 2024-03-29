import React, { Component, PropTypes } from 'react';

import AddFriendInput from './AddFriendInput';
import FriendList from './FriendList';
import './FriendListApp.scss';

export default class FriendsLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    friends: PropTypes.object.isRequired
  };

  render() {
    const { friends: { friendsById }, actions } = this.props;

    return (
      <div className="friendListApp">
        <h1>GHC Fellows Match!</h1>
        <AddFriendInput filterFriends={actions.filterFriend} />
        <FriendList friends={friendsById} actions={actions} />
      </div>
    );
  }
}
