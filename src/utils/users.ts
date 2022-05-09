export const users = [
    {
        _id: '6279047a3a19d3b45ac7546c',
        isActive: false,
        age: 30,
        firstName: 'Pickett',
        lastName: 'Bryant',
        gender: 'male',
        email: 'pickettbryant@entogrok.com',
        friends: [
            {
                id: 0,
                firstName: 'Glenda',
                lastName: 'Delgado',
            },
            {
                id: 1,
                firstName: 'Drake',
                lastName: 'Robles',
            },
            {
                id: 2,
                firstName: 'Krista',
                lastName: 'Graham',
            },
        ],
    },
    {
        _id: '6279047adc93a04cb8688cd8',
        isActive: true,
        age: 40,
        firstName: 'Stephens',
        lastName: 'Gallegos',
        gender: 'male',
        email: 'stephensgallegos@entogrok.com',
        friends: [
            {
                id: 0,
                firstName: 'Anna',
                lastName: 'Willis',
            },
            {
                id: 1,
                firstName: 'Fay',
                lastName: 'Jensen',
            },
            {
                id: 2,
                firstName: 'Hernandez',
                lastName: 'Hendricks',
            },
        ],
    },
    {
        _id: '6279047ad88d3ae2ca4eafe4',
        isActive: false,
        age: 15,
        firstName: 'Petra',
        lastName: 'Parker',
        gender: 'female',
        email: 'petraparker@entogrok.com',
        friends: [
            {
                id: 0,
                firstName: 'Peck',
                lastName: 'Hood',
            },
            {
                id: 1,
                firstName: 'Snider',
                lastName: 'Noel',
            },
            {
                id: 2,
                firstName: 'Whitley',
                lastName: 'Giles',
            },
        ],
    },
    {
        _id: '6279047a7118d9f963587130',
        isActive: true,
        age: 31,
        firstName: 'Stephenson',
        lastName: 'Howell',
        gender: 'male',
        email: 'stephensonhowell@entogrok.com',
        friends: [
            {
                id: 0,
                firstName: 'Chambers',
                lastName: 'Harrington',
            },
            {
                id: 1,
                firstName: 'Dora',
                lastName: 'Hayes',
            },
            {
                id: 2,
                firstName: 'Guthrie',
                lastName: 'Floyd',
            },
        ],
    },
    {
        _id: '6279047a033750da5ae0d231',
        isActive: false,
        age: 26,
        firstName: 'Pitts',
        lastName: 'Sanford',
        gender: 'male',
        email: 'pittssanford@entogrok.com',
        friends: [
            {
                id: 0,
                firstName: 'Frost',
                lastName: 'Taylor',
            },
            {
                id: 1,
                firstName: 'Nettie',
                lastName: 'Ferrell',
            },
            {
                id: 2,
                firstName: 'Eula',
                lastName: 'Noble',
            },
        ],
    },
]

export const getAll = () => {
    return users
}

export const getById = (id: string) => {
    return users.filter((user: any) => user._id === id)
}
