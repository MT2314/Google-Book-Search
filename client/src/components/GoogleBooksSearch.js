import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import API from '../utils/API';
import { HiOutlineSave } from 'react-icons/hi';
import { IconContext } from "react-icons";


// Components
import Searchbar from '../components/Searchbar';

//Pages

function GoogleBooksSearch() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyB_V20DDr3fhU_BPr1kxQ8Y8TLIRSzdqh8")
    const [searchTitle, setSearchTitle] = useState("Best Seller List -- New York Times")


    useEffect(() => {
        topBooks();
    }, []);

    function handleChange(event) {
        const book = event.target.value;
        setBook(book);
    }
    // New York Times
    function topBooks() {
        axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=694MbzN7OXrK12FTyAjrN8Zoih4ay72d")
            .then(data => {
                const bookFile = JSON.parse(data.request.response);
                const bookList = bookFile.results.books;
                console.log(bookList)
                const list = [];
                (bookList.map((book) => {
                    list.push({
                        "id": Math.floor(Math.random() * 1000),
                        "saveIcon": '0.15',
                        "volumeInfo": {
                            "authors": [book.author],
                            "description": book.description,
                            "imageLinks": {
                                "thumbnail": book.book_image,
                            },
                            "link": book.book_uri,
                            "title": book.title
                        }
                    }
                    )
                }))
                setResult(list);
                console.log(list)
            })
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")
            .then(data => {
                setSearchTitle(book);
                setResult(data.data.items);
            })
    }


    function handleSave(id) {
        console.log(result)
        const selectedSave = result.filter((book) => book.id === id);
        console.log(selectedSave);
        const { authors, description, imageLinks, previewLink, title, saveIcon } = selectedSave[0].volumeInfo;
        console.log(selectedSave[0].volumeInfo)
        API.saveBook({
            authors: authors,
            description: description,
            image: imageLinks.thumbnail,
            link: previewLink,
            title: title
        })
    }

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

    // function showSavedIcon(id) {
    //     const toggleCheck = result.filter(result => result.id === id);
    //     if (toggleCheck.length) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    return (
        <div>
            <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
            <div className="row">
                <div className="col-sm-12 col-md-12 col-xl-12">
                    <h2 style={{ textAlign: 'center', marginTop: 50 }}>{searchTitle}</h2>
                    <div className={'container mt-5'}>
                        {result.map(book => (
                            <Card style={{ marginTop: '10px', marginLeft: '30px', marginRight: '10px', }}>
                                <IconContext.Provider value={{ color: 'green', size: '3em', className: "global-class-name mr-3 mt-3" }}>
                                    <div>
                                        <HiOutlineSave style={{ float: 'right', opacity: 0 }} />
                                    </div>
                                </IconContext.Provider>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: 34 }}>{book.volumeInfo.title}</Card.Title>
                                    <div style={{ display: 'flex' }}>
                                        <Card.Text>
                                            <p>{(book.volumeInfo.description) ? book.volumeInfo.description.substring(0, 250) : 'No Description has been found'}</p>
                                            <h4>Authors</h4>
                                            <GetAuthors {...book.volumeInfo.authors} />
                                        </Card.Text>
                                        <img style={{ marginLeft: '100px', marginRight: '50px', height: '35vh' }} src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />
                                    </div>
                                    <Button variant='primary' onClick={() => handleSave(book.id)}>Save</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GoogleBooksSearch