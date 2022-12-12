import React, { Component } from "react";

class Pagination extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav aria-label="..." className="d-flex justify-content-center">
          <ul className="pagination pagination-sm  ">
            {this.props.moviesPerPage > 0 &&
              Array.from(
                Array(
                  Math.ceil(this.props.movies.length / this.props.moviesPerPage)
                ),
                (e, i) => {
                  return (
                    <li
                      className={`page-item  ${
                        i === this.props.pageIndex && "disabled"
                      }`}
                      key={i}
                    >
                      <a
                        className="page-link list-group-item-info"
                        onClick={() => this.props.setPageIndex(i)}
                      >
                        {i + 1}
                      </a>
                    </li>
                  );
                }
              )}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
