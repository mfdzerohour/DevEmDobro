const loadUsers = async (userName) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);

    if (!response.ok) {
        throw new Error(`GitHub API returned status code ${response.status}`);
    };

    const user = await response.json();

    return user;
};

const loadRepositories = async (userName) => {
    const response = await fetch(`https://api.github.com/users/${userName}/repos`);

    if (!response.ok) {
        throw new Error(`GitHub API returned status code ${response.status}`);
    };

    const repositories = await response.json();
    return repositories.map((repo) => ({id: repo.id, name: repo.name}));
};

const loadEvents = async (userName) => {
    const response = await fetch(`https://api.github.com/users/${userName}/events`);

    throw new Error("Error forçado!");

    // if (!response.ok) {
    //     throw new Error(`GitHub API returned status code ${response.status}`);
    // };

    // const events = await response.json();
    // return events.map((event) => ({id: event.id, name: event.type}));

};

const loadAll = async () => {
    try {
        // const results = await Promise.all([
        const results = await Promise.allSettled([
            loadUsers("mfdzerohour"),
            loadRepositories("mfdzerohour"),
            loadEvents("mfdzerohour"),
        ]);

        console.log(results);
    } catch (error) {
        console.log(error);
    }
};

loadAll();