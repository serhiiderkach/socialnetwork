import profileReducer, {actions} from "./profile-reducer";
import {PostType, ProfileType} from "../types/types";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ] as Array<PostType>,
    profile: null,
    status: '',
    newPostText: ''
}

test('length of posts should be incremented', () => {
    // 1. test data
    let action = actions.addPostActionCreator('it-kamasutra.com')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect( newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    // 1. test data
    let action = actions.addPostActionCreator('it-kamasutra.com')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect( newState.posts[4].message).toBe('it-kamasutra.com');
});

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = actions.deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect( newState.posts.length).toBe(3)
});

test('after deleting length shouldn`t be decrement', () => {
    // 1. test data
    let action = actions.deletePost(1000)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect( newState.posts.length).toBe(4)
});

