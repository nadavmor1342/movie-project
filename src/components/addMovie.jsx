import { useFormik } from "formik";
import { Link } from "react-router-dom";

const AddMovie = (props) => {
  const formik = useFormik({
    initialValues: {
      moviename: "",
      moviegenre: "",
      moviereting: "",
    },
  });

  console.table(formik.values);

  return (
    <div style={{ backgroundColor: "white", width: "100%", height: "50rem" }}>
      <header className="sticky-top p-3  bg-info text-dark">
        <h1>moviely</h1>
      </header>
      <div
        className="position-absolute top-50 start-50 translate-middle bg-info"
        style={{ width: "40%", borderRadius: "10px" }}
      >
        <form>
          <div>
            <h3>
              Fill the fallowing categories to add your movie of choise to the
              list:
            </h3>
            <label className="form-labe fs-3"> movie name: </label>
            <input
              autoComplete="off"
              className="form-control"
              style={{ width: "60%" }}
              type="text"
              name="moviename"
              id="moviename"
              placeholder="enter your movie name "
              value={formik.moviename}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label className="form-labe fs-3"> movie genre: </label>
            <input
              autoComplete="off"
              className="form-control"
              style={{ width: "60%" }}
              type="text"
              name="moviegenre"
              id="moviegenre"
              placeholder="enter your movie genre"
              value={formik.moviegenre}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label className="form-labe fs-3"> movie rating: </label>
            <input
              autoComplete="off"
              className="form-control"
              style={{ width: "60%" }}
              type="number"
              name="movierating"
              id="movierating"
              placeholder="enter your movie rating 1-10"
              value={formik.moviereting}
              onChange={formik.handleChange}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="submit"
              className=" mt-3 btn btn-dark"
              onClick={(e) => props.onsubmitmaster(e, formik.values)}
            >
              submit
            </button>
            <button className="mt-3 btn btn-dark">reset</button>
            <Link to="/">
              <button className="mt-3 btn btn-dark">back to moviely</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
