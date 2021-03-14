import React, { useState, useEffect } from 'react'
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Card, Button } from 'react-bootstrap';



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

    // Mark Book Read
    function markRead(id) {
        API.updateBook(id, {
            read: true
        })
            .then(() => loadBooks())
            .catch(err => console.log(err));
    };

    function GetAuthors(authors) {

        if (Object.keys(authors > 0)) {
            let authorsArr = Object.values(authors)
            const authorsList = authorsArr.map(author => {
                return <p style={{ marginBottom: 0 }}>{author}</p>
            })
            return authorsList
        } else {
            return <p>No Listed Authors</p>
        }
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Your Saved Books</h1>
            <div className="row ml-4 mt-5">
                <div className="col-sm-4 col-md-4 col-xl-4">
                    <h4 className={'mt-3'} >Books I Want To Read</h4>
                    <div className={'container mt-5'}>
                            {books.map(book => (
                                (book.read === false) && <ListItem key={book._id} >
                                    <Card>
                                        <div className = {'d-inline'}>
                                        <img style={{ marginLeft: '100px', width: 100, float:'right' }} src={book.image ? book.image : null} alt={book.title} />
                                            <h2>{book.title}</h2>
                                        <GetAuthors {...book.authors} />
                                        <Button style={{ marginTop:20 }} size="sm" variant="success" onClick={() => markRead(book._id)}>Mark Read</Button>
                                        </div>
                                    </Card>
                                </ListItem>
                            ))}

                    </div>
                </div>

                <div className="col-sm-3 col-md-3 col-xl-3">
                    <h4 className={'mt-3'} >Books I Have Read</h4>
                    <div className={'container mt-3'}>
                        <List>
                            {books.map(book => (
                                (book.read === true) && <ListItem key={book._id}>
                                    <strong>
                                        {book.title}
                                    </strong>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Saved;