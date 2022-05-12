export let users = [
    {
        _id: '6279047a3a19d3b45ac7546c',
        isActive: false,
        age: 30,
        firstName: 'Pickett',
        lastName: 'Bryant',
        gender: 'male',
        email: 'pickettbryant@entogrok.com',
    },
    {
        _id: '6279047adc93a04cb8688cd8',
        isActive: true,
        age: 40,
        firstName: 'Stephens',
        lastName: 'Gallegos',
        gender: 'male',
        email: 'stephensgallegos@entogrok.com',
    },
    {
        _id: '6279047ad88d3ae2ca4eafe4',
        isActive: false,
        age: 15,
        firstName: 'Petra',
        lastName: 'Parker',
        gender: 'female',
        email: 'petraparker@entogrok.com',
    },
    {
        _id: '6279047a7118d9f963587130',
        isActive: true,
        age: 31,
        firstName: 'Stephenson',
        lastName: 'Howell',
        gender: 'male',
        email: 'stephensonhowell@entogrok.com',
    },
    {
        _id: '6279047a033750da5ae0d231',
        isActive: false,
        age: 26,
        firstName: 'Pitts',
        lastName: 'Sanford',
        gender: 'male',
        email: 'pittssanford@entogrok.com',
    },
]

export const getAll = () => {
    return users
}

export const getById = (id: string) => {
    //TODO
}

export const addUser = (user: any) => {
    //TODO
}
export const updateUser = (userId: string, userToUpdate: any) => {
    //TODO
}
