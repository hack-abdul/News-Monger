import React from "react";

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, author, date, source } =
    props;

  return (
    <>
      <div id="card" className="card ">
        <img
          id="newsImage"
          src={imageUrl}
          className="card-img-top rounded"
          alt="..."
          style={{
            objectFit: "cover",

            maxHeight: "180px",
            minHeight: "180px",
            maxWidth: "100%",
            minWidth: "100%",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <span
            className="position-absolute badge rounded-pill bg-danger"
            style={{ right: "1px", top: "1px" }}
          >
            {source}
          </span>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By <b>{author ? author : "Unknown"}</b> on{" "}
              {new Date(date).toGMTString()}
              {/* date that i am fetching is in iso format, i will convert it
                into a gmt format or utc format,After creating a date
                object, we can use various things on it */}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-small btn-primary buttons"
          >
            Read Me
          </a>
        </div>
      </div>
    </>
  );

}

export default NewsItem;
