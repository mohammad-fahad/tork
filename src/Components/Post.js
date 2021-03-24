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
        <Row className="mx-5">
          {postData.map((pd) => (
            <p key={pd.id} className="col-md-3 m-3 bg-dark text-white">
              {pd.ending_time} <br /> {pd.id} <br /> {pd.live_type} <br />
              {pd.meeting_id} <br />
              {pd.meeting_password} <br /> {pd.starting_time} <br /> {pd.title}{" "}
              <br />
              {pd.user_id}
            </p>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Post;
