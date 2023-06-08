import React, {useEffect, useState} from "react";
// import { connect } from 'react-redux'
import "./ApplicationList.css";

const ApplicationList = (props: any) => {
  const [applicationList, setApplicationList] = useState([]);

  async function fetchElancoApplicationList() {
    let baseUrl = "https://engineering-task.elancoapps.com/api/";
    const response = await fetch(`${baseUrl}applications`);
    const applicationList = await response.json();
    console.log(applicationList);
    setApplicationList(applicationList);
  }

  useEffect(() => {
    fetchElancoApplicationList();
  }, []);

  const handleOnSelect = (e: any) => {
    console.log(e);
  };

  return (
    <div className="application-container">
      <div className="application-wrapper">
        <span className="application-label">Applications :</span>
        <div className="apllication-list">
          {applicationList.length ? (
            <select
              name="application"
              id=""
              placeholder="Application List"
              onChange={handleOnSelect}
            >
              <option value="">Select Application</option>
              {applicationList.map((appName, idx) => (
                <option key={appName} value={appName}>
                  {idx + 1}:{appName}
                </option>
              ))}
            </select>
          ) : (
            "No Data Found"
          )}
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(index)
export default ApplicationList;
