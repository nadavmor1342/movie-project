const SideButton = (props) => {
  const { theGenre, SortMovies, AllMoviesGenre } = props;

  const len = AllMoviesGenre.filter((genre) => genre === theGenre).length;

  const style = {
    width: "80%",
  };
  return (
    <div>
      <button
        type="button"
        style={style}
        className="btn btn-info position-relative m-1"
        onClick={() => SortMovies(theGenre)}
      >
        {theGenre}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-black">
          {len}
        </span>
      </button>
    </div>
  );
};

export default SideButton;
