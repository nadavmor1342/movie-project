import M from "./m";
const Table = (props) => {
  const firstMovieIndex = props.pageIndex * props.moviesPerPage;
  const moviesToShow = props.movies.slice(
    firstMovieIndex,
    firstMovieIndex + props.moviesPerPage
  );
  return (
    <table className="table">
      <thead>
        <tr className="text-white">
          <th>Name</th>
          <th>Id</th>
          <th>Genre</th>
          <th>rating</th>
          <th>delete</th>
          <th>like</th>
        </tr>
      </thead>
      <tbody>
        {moviesToShow.map((movie) => (
          <M
            movie={movie}
            deletee={(rr) => props.removeItem(rr)}
            likeornot={props.likeornot}
            key={movie.id}
          ></M>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
