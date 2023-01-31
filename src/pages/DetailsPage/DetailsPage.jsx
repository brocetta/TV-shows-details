import React from "react";
import "./detailspage.scss";
import { useState, useEffect } from "react";
import CastCard2 from "../../components/CastCard2/CastCard2";

function DetailsPage(props) {
  const [fetchData, setFetchData] = useState({});
  const [castData, setCastData] = useState([]);
  const [castList, setCastList] = useState(true);
  useEffect(() => {
    fetch(`//api.tvmaze.com/shows/${props.showId}`)
      .then((res) => res.json())
      .then((data) => setFetchData(data));
  }, []);

  useEffect(() => {
    fetch(`//api.tvmaze.com/shows/${props.showId}/cast`)
      .then((res) => res.json())
      .then((data) => setCastData(data));
  }, []);

  return (
    <>
      <div className="container detailspage">
        <div className="row imgParag">
          <img
            className="col-lg-5 col-md-6 col-sm-12"
            src={fetchData.image?.original}
            alt=""
          />
          <div className="col-7 col-md-6 col-sm-12">
            <h3 className="showName">{fetchData?.name}</h3>
            <div className="spanovi">
              {fetchData.genres &&
                fetchData?.genres.map((e) => <span className="span">{e}</span>)}
            </div>
            <div
              className="col-12 summary"
              dangerouslySetInnerHTML={{ __html: fetchData?.summary }}
            />
          </div>
        </div>
        <h4>CAST</h4>

        <div className="container">
          <div className="row">
            {castData.slice(0, 6).map((e) => (
              <CastCard2 castData={e} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
