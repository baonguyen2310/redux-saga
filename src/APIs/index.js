const fetchUser = () => {
    return fetch("https://reactnative.dev/movies.json")
        .then(res => res.json());
}

export { fetchUser };