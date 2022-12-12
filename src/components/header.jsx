import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header className="sticky-top p-3  bg-info text-dark">
      <div className="d-flex justify-content-between">
        <h1 onClick={() => props.reset()}>moviely</h1>
        <Link to="/addMovie" className="link-dark">
          <h3>add a movie</h3>
        </Link>
        <input
          style={{ width: "5%" }}
          type="number"
          placeholder="items in page?"
          value={props.moviesPerPage}
          onChange={(e) => props.setMoviesPerPage(e)}
        />
      </div>
    </header>
  );
};

export default Header;
