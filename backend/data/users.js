import bcrypt from 'bcryptjs'

const UsersDeatils=[
    {
        name: 'admin user',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: ' phuti',
        email: 'phuti@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'muja',
        email: 'muja@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
]

export default UsersDeatils;