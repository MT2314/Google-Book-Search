import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { FiDelete, FiHeart } from "react-icons/fi";
import { IconContext } from "react-icons";

const Saved = () => {
  const [books, setBooks] = useState([]);
  const [currentbook, setCurrentBook] = useState();
  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then((res) => {
        console.log(res);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Mark Book Read
  function markRead(id) {
    API.updateRead(id, {
      read: true,
    })
      .then(() => loadBooks())
      .catch((err) => console.log(err));
  }

  // Set Favourite
  function setFavourite(id, currentFavourite) {
    API.updateFavourite(id, {
      favourite: !currentFavourite,
    })
      .then(() => loadBooks())
      .catch((err) => console.log(err));
  }

  // Remove
  function removeSave(id) {
    API.deleteBook(id)
      .then(() => loadBooks())
      .catch((err) => console.log(err));
  }

  function GetAuthors(authors) {
    if (Object.keys(authors > 0)) {
      let authorsArr = Object.values(authors);
      const authorsList = authorsArr.map((author) => {
        return <p style={{ marginBottom: 0 }}>{author}</p>;
      });
      return authorsList;
    } else {
      return <p>No Listed Authors</p>;
    }
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Your Saved Books</h1>
      <div className="row ml-4 mt-5">
        <div className="col-sm-5 col-md-5 col-xl-5">
          <div className={"container mt-2"}>
            <h3 className={"mt-3"}>Books I Want To Read</h3>
            {books.map(
              (book) =>
                book.read === false && (
                  <div>
                    <IconContext.Provider
                      value={{
                        color: "red",
                        size: "1.5em",
                        className: "global-class-name",
                        style: {
                          position: "relative",
                          marginLeft: "98%",
                          top: 15,
                          zIndex: 2,
                        },
                      }}
                    >
                      <div>
                        <FiDelete onClick={() => removeSave(book._id)} />
                      </div>
                    </IconContext.Provider>
                    <ListItem key={book._id}>
                      <Card>
                        <div className={"d-inline"}>
                          <img
                            style={{
                              marginLeft: "100px",
                              width: 100,
                              float: "right",
                            }}
                            src={book.image ? book.image : null}
                            alt={book.title}
                          />
                          <h2>{book.title}</h2>
                          <GetAuthors {...book.authors} />
                          <Button
                            style={{
                              marginTop: 20,
                              width: "100%",
                              color: "white",
                              fontSize: 20,
                            }}
                            size="sm"
                            variant="success"
                            onClick={() => markRead(book._id)}
                          >
                            Mark Read
                          </Button>
                        </div>
                      </Card>
                    </ListItem>
                  </div>
                )
            )}
          </div>
        </div>

        <div className="col-sm-3 col-md-3 col-xl-3">
          <div className={"container mt-3"}>
            <div className={"container mt-3"} style={{ marginBottom: "20%" }}>
              <List>
                <h4 className={"mt-3"}>
                  My Favourites <FaHeart style={{ color: "red" }} />{" "}
                </h4>
                {books.map(
                  (book) =>
                    book.favourite === true && (
                      <ListItem key={book._id}>
                        <strong>{book.title}</strong>
                      </ListItem>
                    )
                )}
              </List>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3 col-xl-3">
          <div className={"container mt-3"}>
            <List>
              <h4 className={"mt-3"}>Books I Have Read</h4>
              {books.map(
                (book) =>
                  book.read === true && (
                    <div>
                      <IconContext.Provider
                        value={{
                          color: "red",
                          size: "1.5em",
                          className: "global-class-name",
                          style: {
                            position: "relative",
                            marginLeft: "98%",
                            top: 15,
                            zIndex: 2,
                          },
                        }}
                      >
                        {book.favourite === false ? (
                          <div>
                            {
                              <FiHeart
                                onClick={() =>
                                  setFavourite(book._id, book.favourite)
                                }
                              />
                            }
                          </div>
                        ) : (
                          <div>
                            <FaHeart
                              onClick={() =>
                                setFavourite(book._id, book.favourite)
                              }
                            />
                          </div>
                        )}
                      </IconContext.Provider>
                      <ListItem key={book._id}>
                        <strong>{book.title}</strong>
                      </ListItem>
                    </div>
                  )
              )}
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default Saved;
