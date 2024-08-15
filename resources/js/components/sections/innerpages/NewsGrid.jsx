import { Link } from 'react-router-dom';

const NewsGrid = () => {
  return (
    <>
    <section className="news-section pb-70">
      <div className="auto-container">
        <div className="row">
          <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="images/resource/news-1.jpg" alt=""/></Link></figure>
              </div>
              <div className="content-box">
                <ul className="post-info">
                  <li><i className="fa fa-user-circle"></i> Sowat A</li>
                  <li><i className="fa fa-comments"></i> 256 Comments</li>
                </ul>
                <h4 className="title"><Link href="news-details">How Sustainable Practices Are Reshaping the...</Link></h4>
                <Link href="news-details" className="read-more">Read More <i className="fa fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="images/resource/news-2.jpg" alt=""/></Link></figure>
              </div>
              <div className="content-box">
                <ul className="post-info">
                  <li><i className="fa fa-user-circle"></i> Sowat A</li>
                  <li><i className="fa fa-comments"></i> 256 Comments</li>
                </ul>
                <h4 className="title"><Link href="news-details">How Sustainable Practices Are Reshaping the...</Link></h4>
                <Link href="news-details" className="read-more">Read More <i className="fa fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="images/resource/news-3.jpg" alt=""/></Link></figure>
              </div>
              <div className="content-box">
                <ul className="post-info">
                  <li><i className="fa fa-user-circle"></i> Sowat A</li>
                  <li><i className="fa fa-comments"></i> 256 Comments</li>
                </ul>
                <h4 className="title"><Link href="news-details">How Sustainable Practices Are Reshaping the...</Link></h4>
                <Link href="news-details" className="read-more">Read More <i className="fa fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="images/resource/news-2.jpg" alt=""/></Link></figure>
              </div>
              <div className="content-box">
                <ul className="post-info">
                  <li><i className="fa fa-user-circle"></i> Sowat A</li>
                  <li><i className="fa fa-comments"></i> 256 Comments</li>
                </ul>
                <h4 className="title"><Link href="news-details">How Sustainable Practices Are Reshaping the...</Link></h4>
                <Link href="news-details" className="read-more">Read More <i className="fa fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="images/resource/news-3.jpg" alt=""/></Link></figure>
              </div>
              <div className="content-box">
                <ul className="post-info">
                  <li><i className="fa fa-user-circle"></i> Sowat A</li>
                  <li><i className="fa fa-comments"></i> 256 Comments</li>
                </ul>
                <h4 className="title"><Link href="news-details">How Sustainable Practices Are Reshaping the...</Link></h4>
                <Link href="news-details" className="read-more">Read More <i className="fa fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="news-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="700ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="images/resource/news-1.jpg" alt=""/></Link></figure>
              </div>
              <div className="content-box">
                <ul className="post-info">
                  <li><i className="fa fa-user-circle"></i> Sowat A</li>
                  <li><i className="fa fa-comments"></i> 256 Comments</li>
                </ul>
                <h4 className="title"><Link href="news-details">How Sustainable Practices Are Reshaping the...</Link></h4>
                <Link href="news-details" className="read-more">Read More <i className="fa fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  {/* News Section */}
      
    </>
  );
};
export default NewsGrid
