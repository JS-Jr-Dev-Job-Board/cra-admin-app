import React, { useState, useEffect } from "react";
import axios from "./axios";

const jobState = {
Jobs: []
};

const DashboardCard = () => {

  const [job, setJob] = useState(jobState);


  useEffect(() => {
    axios
      .get(`/`, {})
      .then((res) => {
        const data = res.data;
        setJob(data)
        // console.log(setJob);
      })
      .catch((err) => {
        debugger;
      });
  }, []);


  return (
  
  <div className="dashboardCard">
          <div>
            {Object.keys(job).map((key) => {
              return (
                <div key={key}>
                  {job[key].map((jobs) => {
                    return (
                      <div className="card">
                        <div key={jobs.id}>
                      
                          <h2>{jobs.companyName}</h2>
                          <div>
                            <div>
                              <h3> <span>{jobs.position}</span></h3>
                            </div>
                            <div>
                              <h4>Salary: <span>{jobs.salary}</span></h4>
                            </div>
                            <div>
                              <h4> Location: <span>{jobs.location}</span></h4>
                            </div>
                            <h4>Job Description:</h4>
                            <p>{jobs.description}</p>
                          </div>
                          <div className="JobCardApply">
                            
                          <button href={jobs.applyUrl} target="_blank"> apply-link</button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

  
  )
  
};

export default DashboardCard;
