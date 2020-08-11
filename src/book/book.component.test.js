import React from "react";
import Book from "./book.component";
import { shallow } from "enzyme";

let book = {
  book_author: "test",
  book_title: "test book",
  book_publication_city: "london",
};

const app = shallow(<Book bookdet={book} />);

describe("Book Component Tests", () => {
  it("renders app correctly", () => {
    expect(app).toHaveLength(1);
  });
});
