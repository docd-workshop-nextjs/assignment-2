export type Payment = {
    id: string
    amount: number
    status: 'pending' | 'processing' | 'success' | 'failed' | 'completed'
    email: string
}

const datas: Payment[] = [
    {
        id: '489e1d42',
        amount: 125,
        status: 'processing',
        email: 'example@gmail.com',
    },
    {
        id: '2b3c4d5e',
        amount: 200,
        status: 'completed',
        email: 'dummy1@example.com',
    },
    {
        id: '6f7g8h9i',
        amount: 75,
        status: 'pending',
        email: 'dummy2@example.com',
    },
    {
        id: 'a1b2c3d4',
        amount: 150,
        status: 'processing',
        email: 'dummy3@example.com',
    },
    {
        id: 'd5e6f7g8',
        amount: 50,
        status: 'completed',
        email: 'dummy4@example.com',
    },
    {
        id: 'h9i1a2b3',
        amount: 100,
        status: 'processing',
        email: 'dummy5@example.com',
    },
    {
        id: 'c4d5e6f7',
        amount: 300,
        status: 'pending',
        email: 'dummy6@example.com',
    },
    {
        id: '8h9i1a2b',
        amount: 80,
        status: 'completed',
        email: 'dummy7@example.com',
    },
    {
        id: '3c4d5e6f',
        amount: 180,
        status: 'processing',
        email: 'dummy8@example.com',
    },
    {
        id: '5e6f7g8h',
        amount: 220,
        status: 'pending',
        email: 'dummy9@example.com',
    },
    {
        id: '9i1a2b3c',
        amount: 75,
        status: 'processing',
        email: 'dummy10@example.com',
    },
    {
        id: '4d5e6f7g',
        amount: 90,
        status: 'completed',
        email: 'dummy11@example.com',
    },
    {
        id: 'a2b3c4d5',
        amount: 200,
        status: 'pending',
        email: 'dummy12@example.com',
    },
    {
        id: '6f7g8h9i',
        amount: 110,
        status: 'processing',
        email: 'dummy13@example.com',
    },
    {
        id: 'c4d5e6f7',
        amount: 250,
        status: 'completed',
        email: 'dummy14@example.com',
    },
    {
        id: '3c4d5e6f',
        amount: 70,
        status: 'pending',
        email: 'dummy15@example.com',
    },
    {
        id: 'e6f7g8h9',
        amount: 150,
        status: 'processing',
        email: 'dummy16@example.com',
    },
    {
        id: '4d5e6f7g',
        amount: 180,
        status: 'completed',
        email: 'dummy17@example.com',
    },
    {
        id: '2b3c4d5e',
        amount: 300,
        status: 'pending',
        email: 'dummy18@example.com',
    },
    {
        id: '9i1a2b3c',
        amount: 50,
        status: 'processing',
        email: 'dummy19@example.com',
    },
    {
        id: 'h9i1a2b3',
        amount: 120,
        status: 'completed',
        email: 'dummy20@example.com',
    },
    {
        id: '5e6f7g8h',
        amount: 90,
        status: 'pending',
        email: 'dummy21@example.com',
    },
    {
        id: 'd5e6f7g8',
        amount: 180,
        status: 'processing',
        email: 'dummy22@example.com',
    },
    {
        id: 'a2b3c4d5',
        amount: 200,
        status: 'completed',
        email: 'dummy23@example.com',
    },
    {
        id: '4d5e6f7g',
        amount: 60,
        status: 'pending',
        email: 'dummy24@example.com',
    },
    {
        id: '3c4d5e6f',
        amount: 150,
        status: 'processing',
        email: 'dummy25@example.com',
    },
    {
        id: '9i1a2b3c',
        amount: 300,
        status: 'completed',
        email: 'dummy26@example.com',
    },
    {
        id: 'h9i1a2b3',
        amount: 100,
        status: 'pending',
        email: 'dummy27@example.com',
    },
    {
        id: '5e6f7g8h',
        amount: 80,
        status: 'processing',
        email: 'dummy28@example.com',
    },
    {
        id: 'd5e6f7g8',
        amount: 175,
        status: 'completed',
        email: 'dummy29@example.com',
    },
    {
        id: 'a2b3c4d5',
        amount: 130,
        status: 'pending',
        email: 'dummy30@example.com',
    },
    // Add more objects as needed
]

// export const datasBook: BooksProps[] = [
//     {
//         id: '489e1d42',
//         no: 'BOOK#123',
//         title: 'Protestanian',
//         author: 'Martin Luther',
//         shortDesc: 'The Holy Book',
//         status: 'ready',
//     },
// ]

export default datas
