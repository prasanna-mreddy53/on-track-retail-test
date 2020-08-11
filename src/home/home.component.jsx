import React, { Component } from "react";
import "./home.styles.scss";
import { Row, Col } from "react-bootstrap";
import Book from "../book/book.component";
import PaginationComponent from "../pagination/pagination.component";

const axios = require("axios");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null,
      loading: false,
      totalBooks: 0,
      currentPage: 1,
      itemsPerPage: 20,
      activePage: 1,
    };
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    if (params.page) {
      this.getBooks(params.page);
    } else {
      this.getBooks(this.state.currentPage);
    }
  }
  getBooks = async (currentPage) => {
    const filter = {
      page: currentPage,
      itemsPerPage: this.state.itemsPerPage,
    };
    const response = await axios.post(
      "http://nyx.vima.ekt.gr:3000/api/books",
      filter
    );
    this.setState({
      books: response.data.books,
      totalBooks: response.data.count,
      activePage: currentPage,
      currentPage: currentPage,
    });
    console.log(response);
  };

  nextPage = (pageNumber) => {
    // return <Redirect push to={`/books/${pageNumber}`} />;
    window.location.assign(`/books/${pageNumber}`);

    // this.context.router.push();

    console.log("pagenumber:" + pageNumber);
  };

  render() {
    const { itemsPerPage, totalBooks, activePage, currentPage } = this.state;

    return (
      <div className="App">
        <content>
          <Row className="m-0">
            {this.state.books &&
              this.state.books.map((book) => (
                <Col className="card-col" lg={3} key={book.id}>
                  <Book bookdet={book}></Book>
                </Col>
              ))}
          </Row>
          <PaginationComponent
            getPageNumber={this.getBooks}
            itemsPerPage={itemsPerPage}
            totalBooks={totalBooks}
            activePage={activePage}
            currentPage={currentPage}
            nextPage={() => this.nextPage(Number(this.state.currentPage) + 1)}
            prevPage={() => this.nextPage(this.state.currentPage - 1)}
          ></PaginationComponent>
        </content>
      </div>
    );
  }
}

export default Home;
