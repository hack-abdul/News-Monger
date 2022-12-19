import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponent = (props) => {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  //document.title = `${capitalizeFirstLetter(
  // props.category
  // )} - NewsMonger`;



  const [article, setArticle] = useState([])
  // const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResult, setTotalResult] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  // const [bottom, setBottom] = useState(false)




  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    // setLoading(true)
    // c9d71ba8d4fc46eb95dbd0c740a518b8
    props.setProgress(30)
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70)

    setArticle(parsedData.articles)
    setTotalResult(parsedData.totalResults)
    // setLoading(false)
    props.setProgress(100)
  }

  const fetchMoreData = async () => {
    // some logic

    if (article.length >= totalResult) {
      setHasMore(false)
      props.handleFooter(true)
      return;
    }
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category
      }&country=${props.country
      }&apiKey=${props.apiKey}&page=${page + 1
      }&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle(article.concat(parsedData.articles))
    setTotalResult(parsedData.totalResults)

  };



  useEffect(() => {
    updateNews();


  }, [])


  // handlePrev = async () => {
  //   setState({ page: page - 1 });
  //   updateNews();
  // };

  // handleNext = async () => {
  //   setState({ page: page + 1 });
  //   updateNews();
  // };



  return (
    <>
      <div className="container my-3 ">
        <h1 className="h1 d-flex justify-content-center" >
          News Monger - Top{" "}
          {capitalizeFirstLetter(props.category) + " "}
          Headlines
        </h1>
        {/* {loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center", margin: '5em' }}>
              <b>Reached the End! Try that button for going Up</b>
            </p>
          }
        >
          <div className="container row">
            {article.map((element) => {
              // { url, urlToImage, title, description } = element;
              return (
                <div key={element.url} className="col-md-4 my-5">
                  <NewsItem
                    title={
                      element.title
                        ? element.title.slice(0, 60) + "..."
                        : "Title Unknown - News Monger"
                    }
                    description={
                      element.description == null
                        ? "No description found"
                        : element.description.slice(0, 120) + "..."
                    }
                    imageUrl={
                      element.urlToImage == null
                        ? "https://assets3.cbsnewsstatic.com/hub/i/r/2022/08/12/05200404-4380-412f-b4e3-357db14a98e5/thumbnail/1200x630/74974d8e0cfe472fb22443ecfd5aef81/img-2956.jpg"
                        : element.urlToImage
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
        <div className="d-flex justify-content-end m-3 fixed-bottom " >
          <a id="buttonTop" type="button" href="#top" className="btn-small btn-info d-flex justify-content-center align-items-center" style={{ textDecoration: 'none', borderRadius: '70%', width: '2em', height: '2em', fontSize: '2em' }}>
            &uarr;
          </a>
        </div>
        {/* {!loading && (
            <div className="container d-flex justify-content-between">
              <button
                type="button"
                disabled={page <= 1 ? true : false}
                onClick={handlePrev}
                className="btn btn-dark buttons"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                disabled={
                  page + 1 >
                  Math.ceil(totalResult / props.pageSize)
                    ? true
                    : false
                }
                onClick={handleNext}
                className="btn btn-dark buttons"
              >
                Next &rarr;
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="#top"
                ></a>
              </button>
            </div>
          )} */}

      </div>
      {/* {bottom && <Footer />} */}
    </>
  );

}



export default NewsComponent;
