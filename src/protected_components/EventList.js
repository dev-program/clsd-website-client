  import React, { useState, useEffect } from "react";
  import UserService from "../services/event.service";
  import { useNavigate ,Link} from "react-router-dom";
  import AuthService from "../services/auth.service";
  import { CSVLink } from "react-csv";
  import {
    Col,Row,Container
  } from "react-bootstrap";
  import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
  import TagIcon from '@mui/icons-material/Tag';
  import Card from '@mui/material/Card';
  import CardContent from '@mui/material/CardContent';
  import CardMedia from '@mui/material/CardMedia';
  import Typography from '@mui/material/Typography';
  import { Button, CardActionArea, CardActions } from '@mui/material';

  const EventList = () => {
    const navigate = useNavigate();
    const [tutorials, setTutorials] = useState([]);
    const [currentTutorial, setCurrentTutorial] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");
    const [selectedTutorials, setSelectedTutorials] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [sortYear, setSortYear] = useState(false); // Add state for sorting by year
    const [selectedYear, setSelectedYear] = useState(""); // Add state for selected year
    const [selectedTag, setSelectedTag] = useState(""); // Add state for selected year

    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [showUserBoard, setShowUserBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const availableYears = [...new Set(tutorials.map((tutorial) => new Date(tutorial.updatedAt).getFullYear()))];
    const availableTags = [...new Set(tutorials.flatMap((tutorial) => tutorial.tags))];

    useEffect(() => {
      retrieveTutorials();

      const user = AuthService.getCurrentUser();
      if (user) {
        setCurrentUser(user);
        setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
        setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        setShowUserBoard(user.roles.includes("ROLE_USER"));
      }
    }, []);

    const [exportedData, setExportedData] = useState([]);

    const handleExportCSV = () => {
      if (confirmhandleExportCSV()) {
      const dataToExport = selectedTutorials.map((tutorial) => ({
        id: tutorial.id,
        title: tutorial.title,
        description: tutorial.description,
        published: tutorial.published ? "1" : "0",
        fileName: tutorial.fileName,
        tags: tutorial.tags,
        archived: tutorial.archived ? "1" : "0",
        createdAt: tutorial.createdAt,
        updatedAt: tutorial.updatedAt,
      }));
      setExportedData(dataToExport);
    } else {
      // Cancelled, do nothing
      return;
    }

    };

    const onChangeSearchTitle = (e) => {
      const searchTitle = e.target.value;
      setSearchTitle(searchTitle);
    };
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        findByTitle();
      }
    };
    const handleClearSearch = () => {
      setSearchTitle("");
      retrieveTutorials();
    };

  {/*}
    const retrieveTutorials = (year) => {
      UserService.getAll()
        .then((response) => {
          let filteredTutorials = response.data;
          if (year) {
            filteredTutorials = response.data.filter(
              (tutorial) =>
                new Date(tutorial.updatedAt).getFullYear() === year
            );
          }
          setTutorials(filteredTutorials);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
  */}

  const retrieveTutorials = (year, tag) => {
    UserService.getAll(year, tag)
      .then((response) => {
        let filteredTutorials = response.data;
        if (year) {
          filteredTutorials = filteredTutorials.filter(
            (tutorial) => new Date(tutorial.updatedAt).getFullYear() === year
          );
        }
        if (tag) {
          filteredTutorials = filteredTutorials.filter(
            (tutorial) => tutorial.tags.includes(tag)
          );
        }
        setTutorials(filteredTutorials);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

    const refreshList = () => {
      retrieveTutorials();
      setCurrentTutorial(null);
      setCurrentIndex(-1);
    };

    const setActiveTutorial = (tutorial, index) => {
      setCurrentTutorial(tutorial);
      setCurrentIndex(index);
    };
  /*
    const removeAllTutorials = () => {
      if (confirmremoveAllTutorials()) {
      UserService.remove()
        .then((response) => {
          console.log(response.data);
          refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
      } else {
        // Cancelled, do nothing
        return;
      }
    };
  */


  const handleDelete = () => {
    if (confirmRemove()) {
      const selectedTutorialIds = selectedTutorials.map((tutorial) => tutorial.id);
      UserService.remove(selectedTutorialIds)
        .then((response) => {
          console.log(response.data);
          refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      // Cancelled, do nothing
      return;
    }
  };





    const findByTitle = () => {
      UserService.findByTitle(searchTitle)
        .then((response) => {
          setTutorials(response.data);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    const handleSelectAll = () => {
      setSelectAll(!selectAll);
      if (!selectAll) {
        setSelectedTutorials(tutorials);
      } else {
        setSelectedTutorials([]);
      }
    };

    const handleCheckboxChange = (tutorial) => {
      const selected = [...selectedTutorials];
      const index = selected.findIndex((item) => item.id === tutorial.id);
      if (index !== -1) {
        selected.splice(index, 1);
      } else {
        selected.push(tutorial);
      }
      setSelectedTutorials(selected);
    };

    const handleSortByYear = () => {
      setSortYear(!sortYear);
      if (sortYear) {
        const sortedTutorials = [...tutorials];
        sortedTutorials.sort((a, b) =>
          new Date(a.updatedAt).getFullYear() -
          new Date(b.updatedAt).getFullYear()
        );
        setTutorials(sortedTutorials);
      } else {
        retrieveTutorials();
      }
    };

    const handleYearFilter = (year) => {
      setSelectedYear(year);
      retrieveTutorials(year);
    };


    const handleTagFilter = (tag) => {
      setSelectedTag(tag);
      retrieveTutorials(selectedYear, tag);
    };
    



    function confirmhandleExportCSV() {
      return window.confirm("Are you sure you want to export selected item?");
    }

    function confirmRemove() {
      return window.confirm("Are you sure you want to export selected item?");
    }

    function confirmDelete() {
      return window.confirm("Are you sure you want to delete this item?");
    }
  const options = { month: 'long', day: 'numeric' , year: 'numeric'};
    return (

      <>


        <Container sx={{ backgroundColor: 'white' }}>


        <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a >Events</a></li>

    </ol>
  </nav>


          <div className="list row">
            
            <div className="col-md-8">
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by title"
                  value={searchTitle}
                  onChange={onChangeSearchTitle}
                  onKeyDown={handleKeyPress}
                />
                {searchTitle && (
                  <div className="input-group-append">
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={handleClearSearch}
                    >
                      x
                    </button>
                  </div>
                )}
                <div className="input-group-append">
                  <button
                    className="btn btn-info"
                    type="button"
                    onClick={findByTitle}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>


            <div className="col-md-6">
            
        

              <h4>Event List </h4>
        


              <Link to="/event_add">
                <button className="m-3 btn btn-sm btn-primary">
                  Add New Event
                </button>
              </Link>

              {((showAdminBoard || showModeratorBoard) && currentUser) && tutorials.length > 0 && (
                <>
                <button
                    className="m-3 btn btn-sm btn-success"
                    onClick={handleSortByYear}
                  >
                Sort by Year
                </button>
                <CSVLink
                data={exportedData}
                  filename={"events.csv"}
                  className="m-3 btn btn-sm btn-success"
                    onClick={handleExportCSV}
                  >
                            Export to CSV
                </CSVLink>


                  </>
                  )}

                    {((showAdminBoard) && currentUser) && tutorials.length > 0 && (
                <>
                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={() => handleDelete(selectedTutorials.id)}
                  >
                Remove Item
                </button>
        
                  </>
                  )}


  <div className="tag-filter">
    <button
      className={`m-3 btn btn-sm btn-info ${selectedTag === "" ? "active" : ""}`}
      onClick={() => handleTagFilter("")}
    >
      All
    </button>

    {availableTags.map((tag) => (
      <button
        className={`m-3 btn btn-sm btn-info ${selectedTag === tag ? "active" : ""}`}
        onClick={() => handleTagFilter(tag)}
        key={tag}
      >
        {tag}
      </button>
    ))}
  </div>






              <div className="year-filter">
                  <button
                    className={`m-3 btn btn-sm btn-info${selectedYear === "" ? "active" : ""}`}
                    onClick={() => handleYearFilter("")}
                  >
                      All
                  </button>
                

                  {availableYears.map((year) => (
                      <button
                        className={`m-3 btn btn-sm btn-info ${selectedYear === year ? "active" : ""}`}
                          onClick={() => handleYearFilter(year)}
                          key={year}
                        >
                          {year}
                        </button>
                      ))}
              </div>


              <ul className="list-group">
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {(showAdminBoard || showModeratorBoard) && currentUser && (
        <>
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              className="mr-2"
            />
            <label>Select All</label>
          </div>
          <label style={{ color: 'blue' }}>Total # {tutorials.length}</label>
        </>
      )}
    </li>

    {tutorials && tutorials.map((tutorial, index) => (
      <div onClick={() => setActiveTutorial(tutorial, index)} key={index} style={{ cursor: 'pointer' }}>
        <li className={"list-group-item d-flex justify-content-between align-items-center " + (index === currentIndex ? "active" : "")}>
          <div className="d-flex align-items-center">
            {(showAdminBoard || showModeratorBoard) && currentUser && (
              <input
                type="checkbox"
                checked={selectedTutorials.some((item) => item.id === tutorial.id)}
                onChange={() => handleCheckboxChange(tutorial)}
                className="mr-2"
              />
            )}
            <span>{new Date(tutorial.updatedAt).getFullYear()}</span>
            <span style={{ marginLeft: '20px' }}>{tutorial.title}</span>
          </div>
          <div>
            <span style={{ color: tutorial.published ? 'green' : 'red' }}>
              {tutorial.published ? 'Published' : 'Pending'}
            </span>
            <span style={{ color: tutorial.archived ? 'blue' : 'green', marginLeft: '20px' }}>
              {tutorial.archived ? 'Archived' : 'Latest'}
            </span>
          </div>
        </li>
      </div>
    ))}
  </ul>





            </div>
            <div className="col-md-6">
              {currentTutorial ? (
                <div>

  <div className="d-flex justify-content-between align-items-center">
    <div>
      <label>
        <strong>status:</strong>
      </label>{" "}
      <span style={{ color: currentTutorial.published ? "green" : "red", marginLeft: '20px' }}>
        {currentTutorial.published ? "Published" : "Pending"}
      </span>
    </div>

    <div>
      <label>
        <strong>Current Event:</strong>
      </label>{" "}
      <span style={{ color: currentTutorial.archived ? "blue" : "green", marginLeft: '20px' }}>
        {currentTutorial.archived ? "Archived" : "Latest"}
      </span>
    </div>


    {(showAdminBoard || showModeratorBoard) && currentUser && (
      <div>
        <Link
          to={"/event/" + currentTutorial.id}
          className="badge badge-warning  btn-sm"
          style={{ marginLeft: '20px' }}
        >
          Edit Event
        </Link>
      </div>
    )}
  </div>


                  
              

            <Card sx={{ maxWidth: 960 }} className= 'mt-4'>
              <CardMedia
                  component="img"
                  height="450"
                    image={`http://localhost:5001/api/event-content/${currentTutorial.fileName}`}
                    alt="green iguana"
                  />
            </Card>

            <div className= 'mt-4'>
                    {currentTutorial.tags}
                  </div>

          

                  <div className= 'mt-4'>
                    {currentTutorial.updatedAt}  {new Date(currentTutorial.createdAt).toLocaleDateString("en-US",options)}
                  </div>

            

                  <div className= 'mt-4'>
                    {currentTutorial.title}
                  </div>

            

                  <div style={{ textAlign: 'justify', textIndent: '2em'  }} className= 'mt-4' >
                    {currentTutorial.description}
                  </div>
                

                </div>
              ) : (
                <div>
                  <br />
                  <p>Please click any...</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </>
    );
  };

  export default EventList;
