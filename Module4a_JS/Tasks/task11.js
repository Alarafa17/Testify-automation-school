const books={

    title:'On Becoming Me',
    description: 'Lorem ipsum test',
    numberOfPages: 45,
    authour: 'Maryam Test',
    reading: false,

    toggleReadingStatus: function (){
        books.reading = !books.reading
    }
}
console.log(books.reading)