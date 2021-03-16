import React, { useState } from "react";
import PotentialJob from "./PotentialJob/PotentialJob";

const dummydata = [
  {
    company: "a",
    salary: "$44,444",
    source: "github.com/listing1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod explicabo officiis corporis minus totam commodi, id debitis neque consequuntur alias repudiandae distinctio nihil iure quae a laboriosam labore obcaecati dolore vel. Asperiores facilis amet ad incidunt iste laudantium delectus itaque inventore sed voluptates similique est cumque ex reprehenderit, dolor magnam excepturi. Nobis voluptatum harum iure.",
    id: 12,
    title: "Jr. JavaScript Developer",
  },
  {
    company: "b",
    salary: "$55,555",
    source: "github.com/listing2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod explicabo officiis corporis minus totam commodi, id debitis neque consequuntur alias repudiandae distinctio nihil iure quae a laboriosam labore obcaecati dolore vel. Asperiores facilis amet ad incidunt iste laudantium delectus itaque inventore sed voluptates similique est cumque ex reprehenderit, dolor magnam excepturi. Nobis voluptatum harum iure.",
    id: 23,
    title: "Jr. JavaScript Developer",
  },
  {
    company: "c",
    salary: "$66,666",
    source: "github.com/listing3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod explicabo officiis corporis minus totam commodi, id debitis neque consequuntur alias repudiandae distinctio nihil iure quae a laboriosam labore obcaecati dolore vel. Asperiores facilis amet ad incidunt iste laudantium delectus itaque inventore sed voluptates similique est cumque ex reprehenderit, dolor magnam excepturi. Nobis voluptatum harum iure.",
    id: 34,
    title: "Jr. JavaScript Developer",
  },
  {
    company: "d",
    salary: "$77,777",
    source: "github.co/listing4",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod explicabo officiis corporis minus totam commodi, id debitis neque consequuntur alias repudiandae distinctio nihil iure quae a laboriosam labore obcaecati dolore vel. Asperiores facilis amet ad incidunt iste laudantium delectus itaque inventore sed voluptates similique est cumque ex reprehenderit, dolor magnam excepturi. Nobis voluptatum harum iure.",
    id: 45,
    title: "Jr. JavaScript Developer",
  },
];

const EndpointPage = (props) => {
  const [selectedListings, setSelectedListings] = useState([]);

  const selectedJobHandler = (e) => {
    if (e.target.checked === true) {
      setSelectedListings([...selectedListings, e.target.id]);
    } else {
      const newArray = selectedListings.filter((item) => item !== e.target.id);
      setSelectedListings([...newArray]);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert(
      `You have added the following jobs: ${selectedListings.join(", ")}`
    );
  };

  const potentialJobs = dummydata.map((job) => {
    return (
      <PotentialJob
        data={job}
        key={job.id}
        id={job.id}
        onChange={selectedJobHandler}
      />
    );
  });

  const fireHandler = () => {
    alert("scraping, crawling, and calling the internet, be right back!");
  };

  return (
    <div>
      <div className="EndpointPageTop">
        <h1>GitHub</h1> {/*props.site*/}
        <button className="EndpointPageFireBtn" onClick={fireHandler}>
          FIRE AWAY! (trigger scrape/api call)
        </button>
      </div>
      <form className="EndpointPagePotentialListings" onSubmit={submitHandler}>
        {potentialJobs}
        <div className="EndpointPageFooter">
          <button className="EndpointPageSubmitBtn" disabled={!selectedListings.length}>
            {
              selectedListings.length?
              `Add the ${selectedListings.length} jobs you have selected to database`:
              'You can\'t submit zero of something.' 
            }
            
          </button>
        </div>
      </form>
    </div>
  );
};

export default EndpointPage;
