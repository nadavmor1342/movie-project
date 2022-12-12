import React, { Component } from "react";
import M from "./m";
import Sidebar from "./sidebar";
import { Link, Route, Routes } from "react-router-dom";
import Master from "./master";
import AddMovie from "./addMovie";

const initialMovies = [
  {
    id: 1,
    name: "die hard",
    genre: "Action",
    rating: "7.7",
    bool: true,
    like: true,
  },
  {
    id: 2,
    name: "ice age",
    genre: "comedy",
    rating: "8.5",
    bool: true,
    like: true,
  },
  {
    id: 3,
    name: "fast five",
    genre: "drama",
    rating: "9.1",
    bool: true,
    like: true,
  },
  {
    id: 4,
    name: "Taken",
    genre: "fantasy",
    rating: "10",
    bool: true,
    like: true,
  },
  {
    id: 5,
    name: "shrek",
    genre: "fantasy",
    rating: "2.5",
    bool: true,
    like: true,
  },
  {
    id: 6,
    name: "cars",
    genre: "comedy",
    rating: "3.4",
    bool: true,
    like: true,
  },
  {
    id: 7,
    name: "frozen",
    genre: "drama",
    rating: "5.1",
    bool: true,
    like: true,
  },
  {
    id: 8,
    name: "harry potter",
    genre: "fantasy",
    rating: "7.6",
    bool: true,
    like: true,
  },
  {
    id: 9,
    name: "the last dance",
    genre: "horror",
    rating: "9.5",
    bool: true,
    like: true,
  },
  {
    id: 10,
    name: "f&f 7",
    genre: "Action",
    rating: "4.7",
    bool: true,
    like: true,
  },
  {
    id: 11,
    name: "ice age 4",
    genre: "comedy",
    rating: "8.2",
    bool: true,
    like: true,
  },
  {
    id: 12,
    name: "cars 2",
    genre: "comedy",
    rating: "10",
    bool: true,
    like: true,
  },
  {
    id: 13,
    name: "the note book",
    genre: "horror",
    rating: "7.6",
    bool: true,
    like: true,
  },
  {
    id: 14,
    name: "the note book",
    genre: "horror",
    rating: "7.6",
    bool: true,
    like: true,
  },
];
class Movie extends Component {
  state = {
    movies: initialMovies,
    moviely: initialMovies,
    moviesPerPage: initialMovies.length,
    pageIndex: 0,
  };
  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route
            path="/"
            element={
              <Master
                movies={this.state.movies}
                moviely={this.state.moviely}
                moviesPerPage={this.state.moviesPerPage}
                pageIndex={this.state.pageIndex}
                initialMovies={this.initialMovies}
                removeItem={(id) => this.removeItem(id)}
                SortMovies={(id) => this.SortMovies(id)}
                likeornot={(id) => this.likeornot(id)}
                setMoviesPerPage={(id) => this.setMoviesPerPage(id)}
                reset={() => this.reset()}
                setPageIndex={(id) => this.setPageIndex(id)}
              ></Master>
            }
          ></Route>
          <Route
            path="/addMovie"
            element={
              <AddMovie
                onsubmitmaster={(e, vlaues) => this.onsubmitmaster(e, vlaues)}
              ></AddMovie>
            }
          ></Route>
        </Routes>
      </React.Fragment>
    );
  }
  removeItem = (id) => {
    this.state.movies = this.state.movies.filter((movie) => movie.id != id);
    this.setState({ movies: this.state.movies });
  };
  SortMovies = (genre) => {
    this.state.movies = this.state.movies.filter(
      (movie) => movie.genre === genre
    );
    this.setState({ movies: this.state.movies });
  };
  likeornot = (id) => {
    this.state.movies.map((ev) => {
      ev.id == id ? (ev.like = !ev.like) : (ev.like = ev.like);
    });
    this.setState({ movies: this.state.movies });
  };
  reset = () => {
    let movies = this.state.moviely;
    this.setState({ movies });
  };
  setMoviesPerPage = (e) => {
    this.state.moviesPerPage = e.target.value;
    this.setState({
      moviesPerPage: this.state.moviesPerPage,
      pageIndex: 0,
    });
  };
  setPageIndex = (index) => {
    this.setState({ pageIndex: index });
  };
  onsubmitmaster = (e, vlaues) => {
    e.preventDefault();
    let idmovie = this.state.movies[this.state.movies.length - 1].id + 1;
    const movieToAdd = {
      id: idmovie,
      name: vlaues.moviename,
      genre: vlaues.moviegenre,
      rating: vlaues.movierating,
      bool: true,
      like: true,
    };
    alert(vlaues.moviename + "is added to the movie list");
    this.state.movies.push(movieToAdd);
    this.setState({ movies: this.state.movies });
  };
}
export default Movie;
