import React, { useState } from "react";
import axios from 'axios';
import { Card } from 'react-bootstrap';
import API from '../utils/API';
// import booksController from "../controllers/booksController";

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


    return (
        <form onSubmit={handleSubmit}>
            <div className="card-header main-search">
                <div className="row">
                    <div className="col-12 col-md-3 col-xl-3">
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />
                    </div>
                    <div className="ml-auto">
                        <input type="submit" value="Search" className="btn btn-primary search-btn" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {result.map(book => (
                        <div className="col-sm-2">
                            <Card style={{ 'marginTop': '10px' }}>

                                <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />
                                <Card.Body>
                                    <h5 className="card-title">Card title</h5>
                                    <a className="btn btn-primary">Know more</a>
                                </Card.Body>
                                <button onClick={() => handleSave(book.id)}>Save</button>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </form>

    )
}

export default GoogleBooksSearch