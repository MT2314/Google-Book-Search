import React, { useState } from "react";
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import API from '../utils/API';
// import booksController from "../controllers/booksController";

// Components
import Searchbar from '../components/Searchbar';

//Pages

function GoogleBooksSearch() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyB_V20DDr3fhU_BPr1kxQ8Y8TLIRSzdqh8")
    const [saved, setSave] = useState();


    function handleChange(event) {
        const book = event.target.value;
        setBook(book);
    }
    function handleSubmit(event) {
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")
            .then(data => {
                console.log(data.data.items);
                setResult(data.data.items);
            })
    }
    function handleSave(id) {
        const selectedSave = result.filter((book) => book.id === id);
        const { authors, description, image, link, title } = selectedSave[0].volumeInfo;
        API.saveBook({
            authors: authors,
            description: description,
            image: image,
            link: link,
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

    return (
        <div>
            <Searchbar handleChange = {handleChange} handleSubmit = {handleSubmit}/>
            <div className="row">
                <div className="col-sm-10 col-md-10 col-xl-10">
                    <div className={'container'}>
                        {result.map(book => (
                            <Card style={{ marginTop: '10px', marginLeft: '30px', marginRight: '10px', }}>
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