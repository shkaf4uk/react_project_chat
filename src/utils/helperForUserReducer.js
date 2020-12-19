export const objectInArray = (users, userId, followedObj) => {
    return users.map(u => {
        if (u.id === userId) {
            return {...u, ...followedObj}
        }
        return u;
    })
}