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
        console.log(setJob);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  return (
  <>
  <h1> Howdy</h1>
  <div className="card">
          <div>
            {Object.keys(job).map((key) => {
              return (
                <div key={key}>
                  {job[key].map((jobs) => {
                    return (
                      <div align="center">
                        <div key={jobs.id} margin="xlarge" pad="large">
                          {" "}
                          <h1>{jobs.companyName}</h1>
                          <div>
                            <div>
                              <h3>Position: {jobs.position}</h3>
                            </div>
                            <div>
                              <h4>Salary: {jobs.salary}</h4>
                            </div>
                            <div>
                              <h4> Location: {jobs.location}</h4>
                            </div>
                            <h4>Job Description:</h4>
                            <p>{jobs.description}</p>
                          </div>
                          <div className="JobCardApply">
                            
                          <button href={job.applyUrl}>apply-link</button>
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

  </>
  )
  
};

export default DashboardCard;
