import React, { useState, useEffect } from 'react'
import API from "../utils/API";
import { List, ListItem } from "../components/List";



const Saved = () => {

    const [books, setBooks] = useState([])
    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    return (
        <>
            <List>
                {books.map(book => (
                    <ListItem key={book._id}>
                            <strong>
                                {book.title} by {book.authors[0]}
                            </strong>
                        </ListItem>
                ))}
            </List>
        </>
    )
}

export default Saved;