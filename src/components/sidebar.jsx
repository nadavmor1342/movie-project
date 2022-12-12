import SideButton from "./sidebutton";

const Sidebar = (props) => {
  const { movies, SortMovies } = props;

  const arr = movies.map((movie) => (movie = movie.genre));
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) {
      arr2.push(arr[i]);
    }
  }

  return (
    <div>
      {arr2.map((genre, index) => (
        <SideButton
          key={index}
          theGenre={genre}
          SortMovies={(genre) => SortMovies(genre)}
          AllMoviesGenre={arr}
        />
      ))}

      {arr2.length === 0 ? <h5>no movie! no genre! </h5> : null}
    </div>
  );
};

export default Sidebar;
