import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/layouts/Layout";
import Link from "next/link";
const page = () => {
  return (
    <Layout footer={2} header={4} single={true}>
      <Breadcrumb pageName="Le Blog MC" />
      <section className="blog-wrapper news-wrapper section-padding border-bottom">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="blog-posts">
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/images/post-songe.jpg")',
                      }}
                    >
                      {/*<div className="post-date">
                        <h4>
                          08 <br />
                          <span>Juillet</span>
                        </h4>
                    </div>*/}

                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        {/*<span>
                          <i className="fal fa-comments" />
                          35 Comments
                        </span>*/}
                        <span>
                          <i className="fal fa-calendar-alt" />
                          08 Juillet 2023
                        </span>
                      </div>
                      <h2>
                        <Link href="news-details">
                          Instructions sur le prophétisme, les songes et visions
                        </Link>
                      </h2>
                      <p>
                      Les songes et visions sont des codes de la route et des panneaux de signalisation dans la marche des humains vers Dieu. Un songe peut vouloir dire : « Attention sens interdit ! Attention, feu rouge ! Obligation de faire demi-tour avant le panneau ! Attention pont coupé ! Attention route fermée ! Attention fin de route dans un trou ! ».
                      </p>
                      <Link
                        href="news-details"
                        className="theme-btn mt-4 line-height"
                      >
                        <span>
                          LIRE PLUS <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  
                  
                  <div className="single-blog-post quote-post format-quote">
                    <div className="post-content text-white bg-cover">
                      <div className="quote-content">
                        <div className="icon">
                          <i className="fas fa-quote-left" />
                        </div>
                        <div className="quote-text">
                          <h2>
                          Vous ne pouvez pas progresser avec un prophète mort, avec un cadavre. Dieu est vivant !
                          </h2>
                          <div className="post-meta">
                            <span>
                              <i className="fal fa-book" />
                              Le Message de Matthieu 25:6
                            </span>
                            <span>
                              <i className="fal fa-book-alt" />
                              Kacou 66:41
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/*<div className="page-nav-wrap mt-5 text-center">
                  <ul>
                    <li>
                      <a className="page-numbers" href="#">
                        <i className="fal fa-long-arrow-left" />
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        01
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        02
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        ..
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        10
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        11
                      </a>
                    </li>
                    <li>
                      <a className="page-numbers" href="#">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </li>
                  </ul>
                    </div>*/}

              </div>


              <div className="col-12 col-lg-4">
                <div className="main-sidebar">
                  {/*<div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Search</h3>
                    </div>
                    <div className="search_widget">
                      <form action="#">
                        <input type="text" placeholder="Keywords here...." />
                        <button type="submit">
                          <i className="fal fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>*/}

                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Populaires</h3>
                    </div>
                    <div className="popular-posts">
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: 'url("assets/images/post-songe.jpg")',
                          }}
                        />
                        <div className="post-content">
                          <h5>
                            <Link href="news-details">
                            Instructions sur le prophétisme, les songes et visions
                            </Link>
                          </h5>
                          <div className="post-date">
                            <i className="far fa-calendar-alt" />
                            08 Juillet 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*<div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="widget_categories">
                      <ul>
                        <li>
                          <Link href="news">
                            Cloud Service <span>23</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            Web Development <span>24</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            Ui/Ux Designing <span>11</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            IT Management <span>05</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            Data Visualization <span>06</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            Security System <span>10</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                        </div>*/}

                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Ne manquez pas de contenus</h3>
                    </div>
                    <div className="social-link">
                      <a href="https://www.facebook.com/profile.php?id=61562269797608&mibextid=ZbWKwL">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.youtube.com/@lecridematthieu25v6">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>

                  {/*<div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Popular Tags</h3>
                    </div>
                    <div className="tagcloud">
                      <Link href="news">IT Technology</Link>
                      <Link href="news-details">Software</Link>
                      <Link href="news-details">Design</Link>
                      <Link href="news-details">Service</Link>
                      <Link href="news-details">Development</Link>
                      <Link href="news-details">Digital</Link>
                      <Link href="news-details">Cyber</Link>
                    </div>
                      </div>*/}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default page;
