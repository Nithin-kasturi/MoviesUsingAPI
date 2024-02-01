import React from "react";
import Result from "./Result";

function Home({ data }) {
  // Filter out null and missing results
  const validData = data.filter((showData) => showData && showData.show);

  return (
    <div className="container">
      <h2>Movies Listed in Given API</h2>

      <div className="row">
    {data.map((showData) => (
      // Check if the status is not "In Development" before rendering the Result component
      showData.show.status !== "In Development" && (
        <div className="col-12 col-sm-2 col-md-3 col-lg-4" key={showData.show.id}>
          <Result result={showData} />
    </div>
  )
))}

      </div>
    </div>
  );
}

export default Home;
