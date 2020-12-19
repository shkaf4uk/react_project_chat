import profileReducer, {addPostActionCreator, deletePost} from "./profile_reducer";

let state = {
    posts: [
        {id: 1, massage: 'Hi, how are you?', likesCount: 5},
        {id: 2, massage: "It's my second post", likesCount: 20},
        {id: 3, massage: "It's my first post", likesCount: 14},
    ],
};

test('length newPost should be 3', () => {
    // 1. test initial data
    let action = addPostActionCreator('Hello Maximus');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expect
    expect(newState.posts.length).toBe(4);
});

test('new post massage should be correct', () => {
    // 1. test initial data
    let action = addPostActionCreator('Hello Maximus');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expect
    expect(newState.posts[2].massage).toBe('Hello Maximus');
});

test('after delete length should be decrement', () => {
    // 1. test initial data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expect
    expect(newState.posts.length).toBe(2);
});

test('if you want delete post with not correct ID', () => {
    // 1. test initial data
    let action = deletePost(9);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expect
    expect(newState.posts.length).toBe(3);
});