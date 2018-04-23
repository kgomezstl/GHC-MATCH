// @flow

import { createStructuredSelector } from 'reselect';
import assign from 'lodash/assign';

import { State } from 'models/friends';

const fellows = [
	{
	 id: 1,
	 name: "Alex Kloos",
	 tags: ["United States","Colorado","Evergreen","Boston College","Bachelor's"],
	 matches: [
		{
			id: 2,
			name: "Beatrice Mujuni",
			percent: 20,
			commonTags: [],
		},
		{
			id: 4,
			name: "Douglas Serwada",
			percent: 20,
			commonTags: [],
		},
		{
			id: 6,
			name: "Elizabeth Magill",
			percent: 40,
			commonTags: [],
		},
	 ],
	 img: "https://jflg440t31r1reow2ng5wrda-wpengine.netdna-ssl.com/wp-content/themes/ghcorps/timthumb.php?src=/wp-content/uploads/2017/06/897.jpg&h=360&w=360&zc=1",
	},
	{
	 id: 2,
	 name: "Beatrice Mujuni",
	 tags: ["Uganda","","","Uganda Christian University","Bachelor's"],
	 matches: [
		{
			id: 1,
			name: "Alex Kloos",
			percent: 20,
			commonTags: [],
		},
		{
			id: 3,
			name: "Cinderella Anena",
			percent: 40,
			commonTags: [],
		},
		{
			id: 4,
			name: "Douglas Serwada",
			percent: 60,
			commonTags: [],
		},
	 ],
	 img: "https://jflg440t31r1reow2ng5wrda-wpengine.netdna-ssl.com/wp-content/themes/ghcorps/timthumb.php?src=/wp-content/uploads/2017/06/891.jpg&h=360&w=360&zc=1",
	},
	{
	 id: 3,
	 name: "Cinderella Anena",
	 tags: ["Uganda","","Kitgum","University of Leeds, Makerere University Kampala","Bachelor's, Master's"],
	 matches: [
		{
			id: 2,
			name: "Beatrice Mujuni",
			percent: 40,
			commonTags: [],
		},
		{
			id: 4,
			name: "Douglas Serwada",
			percent: 40,
			commonTags: [],
		},
		{
			id: 5,
			name: "Edna Nandutu",
			percent: 60,
			commonTags: [],
		},
	 ],
	 img: "https://jflg440t31r1reow2ng5wrda-wpengine.netdna-ssl.com/wp-content/themes/ghcorps/timthumb.php?src=/wp-content/uploads/2017/06/918.jpg&h=360&w=360&zc=1",
	},
	{
	 id: 4,
	 name: "Douglas Serwada",
	 tags: ["Uganda","","Kampala","Uganda Management Institute, Makerere University","Bachelor's"],
	 matches: [
		{
			id: 1,
			name: "Alex Kloos",
			percent: 20,
			commonTags: [],
		},
		{
			id: 2,
			name: "Beatrice Mujuni",
			percent: 60,
			commonTags: [],
		},
		{
			id: 3,
			name: "Cinderella Anena",
			percent: 40,
			commonTags: [],
		},
	 ],
	 img: "https://jflg440t31r1reow2ng5wrda-wpengine.netdna-ssl.com/wp-content/themes/ghcorps/timthumb.php?src=/wp-content/uploads/2017/06/928.jpg&h=360&w=360&zc=1",
	},
	{
	 id: 5,
	 name: "Edna Nandutu",
	 tags: ["Uganda","","Kampala","University of Maryland, University of Glasgow","Bachelor's, Master's"],
	 matches: [
		{
			id: 2,
			name: "Beatrice Mujuni",
			percent: 40,
			commonTags: [],
		},
		{
			id: 3,
			name: "Cinderella Anena",
			percent: 60,
			commonTags: [],
		},
		{
			id: 4,
			name: "Douglas Serwada",
			percent: 60,
			commonTags: [],
		},
	 ],
	 img: "https://jflg440t31r1reow2ng5wrda-wpengine.netdna-ssl.com/wp-content/themes/ghcorps/timthumb.php?src=/wp-content/uploads/2017/06/942.jpg&h=360&w=360&zc=1",
	},
	{
	 id: 6,
	 name: "Elizabeth Magill",
	 tags: ["United States","Minnesota","Minneapolis","Boston College, Northwestern University","Bachelor's"],
	 matches: [
		{
			id: 1,
			name: "Alex Kloos",
			percent: 40,
			commonTags: [],
		},
		{
			id: 2,
			name: "Beatrice Mujuni",
			percent: 20,
			commonTags: [],
		},
		{
			id: 4,
			name: "Douglas Serwada",
			percent: 20,
			commonTags: [],
		},
	 ],
	 img: "https://jflg440t31r1reow2ng5wrda-wpengine.netdna-ssl.com/wp-content/themes/ghcorps/timthumb.php?src=/wp-content/uploads/2017/06/896.jpg&h=360&w=360&zc=1",
	},
	{
	 id: 7,
	 name: "Nicole Weinard",
	 tags: ["United States","","","James Madison University","Bachelor's"],
	 matches: [
		{
			id: 1,
			name: "Alex Kloos",
			percent: 40,
			commonTags: [],
		},
		{
			id: 2,
			name: "Beatrice Mujuni",
			percent: 60,
			commonTags: [],
		},
		{
			id: 3,
			name: "Cinderella Anena",
			percent: 20,
			commonTags: [],
		},
	 ],
	 img: "https://jflg440t31r1reow2ng5wrda-wpengine.netdna-ssl.com/wp-content/themes/ghcorps/timthumb.php?src=/wp-content/uploads/2017/06/919.jpg&h=360&w=360&zc=1",
	},
	{
	 id: 8,
	 name: "Patrick Okwir",
	 tags: ["Uganda","Otuke","Adwari","Makerere University","Bachelor's"],
	 matches: [
		{
			id: 1,
			name: "Alex Kloos",
			percent: 20,
			commonTags: [],
		},
		{
			id: 2,
			name: "Beatrice Mujuni",
			percent: 40,
			commonTags: [],
		},
		{
			id: 3,
			name: "Cinderella Anena",
			percent: 20,
			commonTags: [],
		},
	 ],
	 img: "https://jflg440t31r1reow2ng5wrda-wpengine.netdna-ssl.com/wp-content/themes/ghcorps/timthumb.php?src=/wp-content/uploads/2017/06/920.jpg&h=360&w=360&zc=1",
	},
	{
	 id: 9,
	 name: "Paul Rebman",
	 tags: ["United States","Illinois","Wheaton","Macalester College","Bachelor's"],
	 matches: [
		{
			id: 1,
			name: "Alex Kloos",
			percent: 40,
			commonTags: [],
		},
		{
			id: 2,
			name: "Beatrice Mujuni",
			percent: 20,
			commonTags: [],
		},
		{
			id: 4,
			name: "Douglas Serwada",
			percent: 20,
			commonTags: [],
		},
	 ],
	 img: "https://jflg440t31r1reow2ng5wrda-wpengine.netdna-ssl.com/wp-content/themes/ghcorps/timthumb.php?src=/wp-content/uploads/2017/06/916.jpg&h=360&w=360&zc=1",
	},
	{
	 id: 10,
	 name: "Pauline Namutebi",
	 tags: ["Uganda","","Kampala","Makerere University","Bachelor's"],
	 matches: [
		{
			id: 1,
			name: "Alex Kloos",
			percent: 20,
			commonTags: [],
		},
		{
			id: 2,
			name: "Beatrice Mujuni",
			percent: 60,
			commonTags: [],
		},
		{
			id: 3,
			name: "Cinderella Anena",
			percent: 40,
			commonTags: [],
		},
	 ],
	 img: "https://jflg440t31r1reow2ng5wrda-wpengine.netdna-ssl.com/wp-content/themes/ghcorps/timthumb.php?src=/wp-content/uploads/2017/06/930.jpg&h=360&w=360&zc=1",
	},
	{
	 id: 11,
	 name: "Sheila Kansiime",
	 tags: ["Uganda","Mbarara","","Makerere University","Bachelor's"],
	 matches: [
		{
			id: 1,
			name: "Alex Kloos",
			percent: 20,
			commonTags: [],
		},
		{
			id: 2,
			name: "Beatrice Mujuni",
			percent: 60,
			commonTags: [],
		},
		{
			id: 3,
			name: "Cinderella Anena",
			percent: 20,
			commonTags: [],
		},
	 ],
	 img: "https://jflg440t31r1reow2ng5wrda-wpengine.netdna-ssl.com/wp-content/themes/ghcorps/timthumb.php?src=/wp-content/uploads/2017/06/933.jpg&h=360&w=360&zc=1",
	},
	{
	 id: 12,
	 name: "Emma Bradford",
	 tags: ["United States","","","",""],
	 matches: [
		{
			id: 1,
			name: "Alex Kloos",
			percent: 20,
			commonTags: [],
		},
		{
			id: 2,
			name: "Beatrice Mujuni",
			percent: 40,
			commonTags: [],
		},
		{
			id: 3,
			name: "Cinderella Anena",
			percent: 20,
			commonTags: [],
		},
	 ],
	 img: "https://jflg440t31r1reow2ng5wrda-wpengine.netdna-ssl.com/wp-content/themes/ghcorps/timthumb.php?src=/wp-content/uploads/2017/06/910.jpg&h=360&w=360&zc=1",
	},
	{
	 id: 13,
	 name: "Erinn Kenney",
	 tags: ["United States","Illinois","Evanston","American University","Bachelor's"],
	 matches: [
		{
			id: 1,
			name: "Alex Kloos",
			percent: 40,
			commonTags: [],
		},
		{
			id: 2,
			name: "Beatrice Mujuni",
			percent: 20,
			commonTags: [],
		},
		{
			id: 4,
			name: "Douglas Serwada",
			percent: 20,
			commonTags: [],
		},
	 ],
	 img: "https://jflg440t31r1reow2ng5wrda-wpengine.netdna-ssl.com/wp-content/themes/ghcorps/timthumb.php?src=/wp-content/uploads/2017/06/939.jpg&h=360&w=360&zc=1",
	},
	{
	 id: 14,
	 name: "Geraldine Kauma",
	 tags: ["Uganda","","Kampala","Uganda Christian University","Bachelor's"],
	 matches: [
		{
			id: 1,
			name: "Alex Kloos",
			percent: 20,
			commonTags: [],
		},
		{
			id: 2,
			name: "Beatrice Mujuni",
			percent: 80,
			commonTags: [],
		},
		{
			id: 3,
			name: "Cinderella Anena",
			percent: 40,
			commonTags: [],
		},
	 ],
	 img: "https://jflg440t31r1reow2ng5wrda-wpengine.netdna-ssl.com/wp-content/themes/ghcorps/timthumb.php?src=/wp-content/uploads/2017/06/894.jpg&h=360&w=360&zc=1",
	},
]

// Action Types

// Define types in the form of 'npm-module-or-myapp/feature-name/ACTION_TYPE_NAME'
const ADD_FRIEND = 'redux-app/friends/ADD_FRIEND';
const FILTER_FRIEND = 'redux-app/friends/FILTER_FRIEND';
const STAR_FRIEND = 'redux-app/friends/STAR_FRIEND';
const DELETE_FRIEND = 'redux-app/friends/DELETE_FRIEND';

// This will be used in our root reducer and selectors

export const NAME = 'friends';

// Define the initial state for `friends` module
const ghcFellows = Array.from(Array(14).keys());

const initialState: State = {
  friends: ghcFellows,
  friendsById: fellows

};

// Reducer

/**
 * Another clever approach of writing reducers:
 *
 * export default function(state = initialState, action) {
 *   const actions = {
 *      [ACTION_TYPE]: () => [action.payload.data, ...state]
 *   };
 *
 *   return (_.isFunction(actions[action.type])) ? actions[action.type]() : state
 * }
 */

export default function reducer(state: State = initialState, action: any = {}): State {
  switch (action.type) {
    case ADD_FRIEND: {
      const len = state.friends.length ? state.friends.length : 1;
      const newId = (state.friends[len - 1] + 1) || 0;
      return {
        ...state,
        friends: state.friends.concat(newId),
        friendsById: [
          ...state.friendsById,
          {
            id: newId,
            name: action.name
          }
        ]
      };
    }

    case FILTER_FRIEND: {
      const filteredFriends = initialState.friendsById.filter(friend => friend.name.toLowerCase().indexOf(action.name.toLowerCase()) > -1)
      return {
        ...state,
        friends: Array.from(Array(filteredFriends.length).keys()),
        friendsById: filteredFriends
      };
    }

    case DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter((id) => id !== action.id),
        friendsById: state.friendsById.filter((friend) => friend.id !== action.id)
      };

    case STAR_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.map((friend) => {
          if (friend.id !== action.id) {
            return friend;
          }

          return assign({}, friend, {
            starred: !friend.starred
          });
        })
      };

    default:
      return state;
  }
}

// Action Creators

function addFriend(name: string) {
  return {
    type: ADD_FRIEND,
    name
  };
}

// or in a form of arrow function

const filterFriend = (name: string) => ({
  type: FILTER_FRIEND,
  name
});

function deleteFriend(id: number) {
  return {
    type: DELETE_FRIEND,
    id
  };
}

function starFriend(id: number) {
  return {
    type: STAR_FRIEND,
    id
  };
}

// Selectors

const friends = (state) => state[NAME];

export const selector = createStructuredSelector({
  friends
});

export const actionCreators = {
  addFriend,
  filterFriend,
  deleteFriend,
  starFriend
};
