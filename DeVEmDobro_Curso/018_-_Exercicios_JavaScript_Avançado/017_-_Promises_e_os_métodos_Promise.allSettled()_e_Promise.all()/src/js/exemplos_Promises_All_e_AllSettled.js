// const loadUsers = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 {id: 1, name: "John"},
//                 {id: 2, name: "Jane"},
//             ]);
//         }, 2000);
//     });
// };

// const loadRepositories = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 {id: 1, name: "repo1"},
//                 {id: 2, name: "repo2"},
//             ]);
//         }, 2000);
//     });
// };

// const loadEvents = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve([
//             //     {id: 1, name: "event1"},
//             //     {id: 2, name: "event2"},
//             // ]);

//             reject([
//                 new Error("Erro ao carregar os eventos"),
//             ]);
//         }, 2000);
//     });
// };

// const loadAll = async () => {
//     try {
//         const result = await Promise.all([
//             loadUsers(),
//             loadRepositories(),
//             loadEvents(),
//         ]);

//     console.log(result);

//     } catch (error) {
//         console.log(error);
//     }
// };

// loadAll();



const loadUsers = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, name: "John"},
                {id: 2, name: "Jane"},
            ]);
        }, 2000);
    });
};

const loadRepositories = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, name: "repo1"},
                {id: 2, name: "repo2"},
            ]);
        }, 2000);
    });
};

const loadEvents = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve([
            //     {id: 1, name: "event1"},
            //     {id: 2, name: "event2"},
            // ]);

            reject([
                new Error("Erro ao carregar os eventos"),
            ]);
        }, 2000);
    });
};

const loadAll = async () => {
    try {
        const result = await Promise.allSettled([
            loadUsers(),
            loadRepositories(),
            loadEvents(),
        ]);

    console.log(result);

    } catch (error) {
        console.log(error);
    }
};

loadAll();