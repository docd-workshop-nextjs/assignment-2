export type BooksProps = {
    id: string
    no: string
    title: string
    author: string
    shortDesc: string
    status: 'loan' | 'booking' | 'ready' | 'none'
}

const dummyBooksData: BooksProps[] = [
    {
        id: '489e1d42',
        no: 'BOOK#001',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        shortDesc:
            'A Pulitzer Prize-winning novel by Harper Lee, published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.',
        status: 'loan',
    },
    {
        id: '2b3c4d5e',
        no: 'BOOK#002',
        title: '1984',
        author: 'George Orwell',
        shortDesc:
            'A dystopian social science fiction novel by English novelist George Orwell. It was published in 1949, and is set in a dystopian future where critical thought is suppressed under a totalitarian regime.',
        status: 'booking',
    },
    {
        id: '6f7g8h9i',
        no: 'BOOK#003',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        shortDesc:
            'A novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922.',
        status: 'ready',
    },
    {
        id: 'a1b2c3d4',
        no: 'BOOK#004',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        shortDesc:
            'A romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book.',
        status: 'none',
    },
    {
        id: 'd5e6f7g8',
        no: 'BOOK#005',
        title: 'Moby Dick',
        author: 'Herman Melville',
        shortDesc:
            'A novel by Herman Melville, first published in 1851. It is considered one of the greatest works of American literature and contains aspects of a philosophical novel.',
        status: 'loan',
    },
    {
        id: 'h9i1a2b3',
        no: 'BOOK#006',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        shortDesc:
            'A novel by J. D. Salinger, first published in 1951. It follows Holden Caulfield, a teenager who narrates the story from a mental institution.',
        status: 'ready',
    },
    {
        id: 'c4d5e6f7',
        no: 'BOOK#007',
        title: 'To the Lighthouse',
        author: 'Virginia Woolf',
        shortDesc:
            'A novel by Virginia Woolf, first published in 1927. It is set on the Isle of Skye in Scotland and follows the Ramsay family and their guests.',
        status: 'none',
    },
    {
        id: '8h9i1a2b',
        no: 'BOOK#008',
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        shortDesc:
            "A novel by the Russian author Leo Tolstoy, first published serially, then in its entirety in 1869. It is regarded as one of Tolstoy's finest literary achievements.",
        status: 'booking',
    },
    {
        id: '3c4d5e6f',
        no: 'BOOK#009',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        shortDesc:
            'A fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.',
        status: 'ready',
    },
    {
        id: '5e6f7g8h',
        no: 'BOOK#010',
        title: 'Frankenstein',
        author: 'Mary Shelley',
        shortDesc:
            'A novel written by English author Mary Shelley that tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment.',
        status: 'loan',
    },
    {
        id: '9i1a2b3c',
        no: 'BOOK#011',
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        shortDesc:
            "An epic high-fantasy novel by J.R.R. Tolkien, set in the fictional world of Middle-earth. The title refers to the story's main antagonist, the Dark Lord Sauron.",
        status: 'none',
    },
    {
        id: '4d5e6f7g',
        no: 'BOOK#012',
        title: "Alice's Adventures in Wonderland",
        author: 'Lewis Carroll',
        shortDesc:
            'A novel written by English author Lewis Carroll. It tells the story of a young girl named Alice who falls through a rabbit hole into a fantasy world populated by peculiar creatures.',
        status: 'booking',
    },
    {
        id: 'a2b3c4d5',
        no: 'BOOK#013',
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        shortDesc:
            'A Gothic and philosophical novel by Oscar Wilde, first published in 1890. It tells the story of Dorian Gray, a young man who sells his soul for eternal youth and beauty.',
        status: 'ready',
    },
    {
        id: '6f7g8h9i',
        no: 'BOOK#014',
        title: 'The Adventures of Huckleberry Finn',
        author: 'Mark Twain',
        shortDesc:
            'A novel by Mark Twain, first published in the United Kingdom in December 1884 and in the United States in February 1885. It follows the adventures of a boy named Huckleberry Finn and an escaped slave named Jim.',
        status: 'none',
    },
    {
        id: 'c4d5e6f7',
        no: 'BOOK#015',
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel García Márquez',
        shortDesc:
            'A landmark 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the town of Macondo.',
        status: 'loan',
    },
    {
        id: '3c4d5e6f',
        no: 'BOOK#016',
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        shortDesc:
            'An autobiography novel by English writer Charlotte Brontë, published under the pen name "Currer Bell", on 16 October 1847, by Smith, Elder & Co. of London.',
        status: 'ready',
    },
    {
        id: 'e6f7g8h9',
        no: 'BOOK#017',
        title: 'Brave New World',
        author: 'Aldous Huxley',
        shortDesc:
            'A novel by Aldous Huxley, written in 1931 and published in 1932. Set in London in the year AD 2540 (632 A.F. in the book), the novel anticipates developments in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning.',
        status: 'ready',
    },
    {
        id: '4d5e6f7g',
        no: 'BOOK#018',
        title: 'The Odyssey',
        author: 'Homer',
        shortDesc:
            'One of two major ancient Greek epic poems attributed to Homer. It is, in part, a sequel to the Iliad, the other Homeric epic. The Odyssey is fundamental to the modern Western canon; it is the second-oldest extant work of Western literature, while the Iliad is the oldest.',
        status: 'none',
    },
    {
        id: '2b3c4d5e',
        no: 'BOOK#019',
        title: 'Dracula',
        author: 'Bram Stoker',
        shortDesc:
            'An 1897 Gothic horror novel by Irish author Bram Stoker. It introduced the character of Count Dracula and established many conventions of subsequent vampire fantasy.',
        status: 'loan',
    },
    {
        id: '9i1a2b3c',
        no: 'BOOK#020',
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        shortDesc:
            'A Spanish novel by Miguel de Cervantes. It was published in two parts, in 1605 and 1615. It is one of the earliest canonical novels, and is considered the most influential work of literature from the Spanish Golden Age and the entire Spanish literary canon.',
        status: 'booking',
    },
    {
        id: 'h9i1a2b3',
        no: 'BOOK#021',
        title: 'The Scarlet Letter',
        author: 'Nathaniel Hawthorne',
        shortDesc:
            'A novel by Nathaniel Hawthorne, published in 1850. Set in Puritan Massachusetts Bay Colony during the years 1642 to 1649, it tells the story of Hester Prynne, who conceives a daughter through an affair and struggles to create a new life of repentance and dignity.',
        status: 'none',
    },
    {
        id: '5e6f7g8h',
        no: 'BOOK#022',
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
        shortDesc:
            'A novel by Emily Brontë, published in 1847 under her pseudonym "Ellis Bell". It is her only finished novel. It follows the experiences of its characters in the Yorkshire moors.',
        status: 'ready',
    },
    {
        id: 'd5e6f7g8',
        no: 'BOOK#023',
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        shortDesc:
            'A novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It is the second of Dostoevsky\'s full-length novels following his return from ten years of exile in Siberia. It is the first great novel of his "mature" period of writing.',
        status: 'none',
    },
    {
        id: 'a2b3c4d5',
        no: 'BOOK#024',
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoevsky',
        shortDesc:
            'A novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It is the second of Dostoevsky\'s full-length novels following his return from ten years of exile in Siberia. It is the first great novel of his "mature" period of writing.',
        status: 'loan',
    },
    {
        id: '4d5e6f7g',
        no: 'BOOK#025',
        title: 'The Count of Monte Cristo',
        author: 'Alexandre Dumas',
        shortDesc:
            'An adventure novel by French author Alexandre Dumas, first serialized from August 1844 until January 1846. It deals with themes of hope, justice, vengeance, mercy, and forgiveness. It tells the story of a man who is wrongfully imprisoned, escapes from jail, and seeks revenge.',
        status: 'booking',
    },
    {
        id: '3c4d5e6f',
        no: 'BOOK#026',
        title: 'Les Misérables',
        author: 'Victor Hugo',
        shortDesc:
            'A French historical novel by Victor Hugo, first published in 1862, that is considered one of the greatest novels of the 19th century. It follows the lives and interactions of several characters, focusing on the struggles of ex-convict Jean Valjean and his experience of redemption.',
        status: 'ready',
    },
    {
        id: '9i1a2b3c',
        no: 'BOOK#027',
        title: 'The Divine Comedy',
        author: 'Dante Alighieri',
        shortDesc:
            'A long Italian narrative poem by Dante Alighieri, begun c. 1308 and completed in 1320, a year before his death in 1321. It is widely considered to be the preeminent work in Italian literature and one of the greatest works of world literature.',
        status: 'none',
    },
    {
        id: 'h9i1a2b3',
        no: 'BOOK#028',
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        shortDesc:
            'A novel by the Russian author Leo Tolstoy, first published serially, then in its entirety in 1878. It tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky.',
        status: 'loan',
    },
    {
        id: '5e6f7g8h',
        no: 'BOOK#029',
        title: 'The Grapes of Wrath',
        author: 'John Steinbeck',
        shortDesc:
            'A novel by American author John Steinbeck, published in 1939. It is set during the Great Depression and focuses on the Joads, a poor family of tenant farmers driven from their Oklahoma home by drought, economic hardship, agricultural industry changes, and bank foreclosures forcing tenant farmers out of work.',
        status: 'ready',
    },
    {
        id: 'd5e6f7g8',
        no: 'BOOK#030',
        title: 'The Canterbury Tales',
        author: 'Geoffrey Chaucer',
        shortDesc:
            'A collection of 24 stories that runs to over 17,000 lines written in Middle English by Geoffrey Chaucer between 1387 and 1400. It tells the story of a group of pilgrims traveling from London to the shrine of Thomas Becket in Canterbury Cathedral.',
        status: 'none',
    },
]

export default dummyBooksData
