import React, { useState } from "react";
import UserService from "../services/publication.service";
import { Container} from "react-bootstrap";

import { useNavigate ,Link} from "react-router-dom";

const AddTutorial = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [degree, setDegree] = useState("");

  const [adviser, setAdviser] = useState("");
  const [year, setYear] = useState("");

  const [published, setPublished] = useState(false);


  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDegree = (e) => {
    setDegree(e.target.value);
  };
  const onChangeAdviser = (e) => {
    setAdviser(e.target.value);
  };

  const onChangeYear = (e) => {
    setYear(e.target.value);
  };


  const onChangePublished = (e) => {
    setPublished(e.target.checked);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("degree", degree);
    formData.append("adviser", adviser);
    formData.append("year", year);
    formData.append("published", published);

   
   
      UserService.create(formData)
      .then((response) => {
        console.log(response);
        navigate("/publication_list");
      })
      .catch((error) => {
        console.log(error);
        navigate("/publication_list");
      });
  };





  return (
    <div className="login-container">
    <Container>
    <Link to="/publication_list">
                <button      className="m-3 btn btn-sm btn-primary"> Back</button>
               </Link>
      <h3>Add CLSD Publication</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-4">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={onChangeTitle}
            required
          />
        </div>

        <div className="form-group mt-4">
          <label>Degree</label>
          <textarea
            className="form-control"
            value={degree}
            onChange={onChangeDegree}
            required
          ></textarea>
        </div>


        <div className="form-group mt-4">
          <label>Adviser</label>
          <textarea
            className="form-control"
            value={adviser}
            onChange={onChangeAdviser}
            required
          ></textarea>
        </div>

        <div className="form-group mt-4" >
          <label>Year</label>
          <textarea
            className="form-control"
            value={year}
            onChange={onChangeYear}
            required
          ></textarea>
        </div>



      
    
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
      </Container>
    </div>
  );
};

export default AddTutorial;
