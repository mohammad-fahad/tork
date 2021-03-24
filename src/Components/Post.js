import React from "react";
import { useState } from "react";
import Navigation from "./Navigation";
import { useForm } from "react-hook-form";
import { Card, Row, Spinner } from "react-bootstrap";
import { useEffect } from "react";

function Post() {
  const [postData, setPostData] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://examplebd.com/api/live-classes?user_id=10089", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setPostData(result);
        }
      });
  };

  // POST request using fetch inside useEffect React hook

  console.log(postData);

  return (
    <div>
      <Navigation />

      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
          <input name="id" className="form-control" ref={register} />

          <button type="submit" className="btn btn-success px-5 my-3">
            Submit
          </button>
        </form>
        {!postData ? (
          <Spinner animation="border" role="status" style={{ margin: "auto" }}>
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <Row className="container justify-content-between">
            {postData.map((pd) => (
              <h6
                key={pd.id}
                className="col-md-3 m-3 bg-dark text-white p-5"
                style={{
                 
                  borderRadius: "20px",
                  boxShadow: "5px 5px 10px grey",
                }}
              >
                Ending Time: <i>{pd.ending_time}</i> <br /> Id: {pd.id} <br />{" "}
                Live Type:
                {pd.live_type} <br />
                Meeting Id: {pd.meeting_id} <br />
                Meeting Password: {pd.meeting_password} <br /> Starting Time:
                {pd.starting_time} <br /> Title: {pd.title} <br /> Course Title:
                {pd.course_title}
                <br />
                User Id: {pd.user_id}
              </h6>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default Post;
