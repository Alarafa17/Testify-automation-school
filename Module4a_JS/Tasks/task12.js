const books = [ 
    {
title: 'The Alchemist',
description: 'This is a descriptive text about the Alchemist',
numberOfPages: 100,
author: 'Paulo Coelho',
reading: true
    },
    {
title: 'Love in Colour',
description: 'This is a descriptive text about Love in colour',
numberOfPages: 50,
author: 'Bolu Babalola',
reading: false

    },
    {
title: 'Power of Silence',
description: 'This is a descriptive text about Power of Silence]',
numberOfPages: 40,
author: 'Daniel Carter',
reading: true
    },
{
title: 'Half of a Yellow Sun',
description: 'This is a descriptive text about Half of a Yellow Sun]',
numberOfPages: 28,
author: 'Ngozi Adichie',
reading: false  
}
]

for (let status = 0; status < books.length; status + 1 ){
    if (books[status].reading === true) {
        console.log(books[status]);
    }

}
