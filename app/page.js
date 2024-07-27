"use client";
import AboutSection from "@/components/AboutSection";
import Counter from "@/components/Counter";
import CtaBanner from "@/components/CtaBanner";
import FeatureIconBoxSection from "@/components/FeatureIconBoxSection";
import ServiceSection from "@/components/ServiceSection";
import { TeamSection2 } from "@/components/TeamSection";
import Layout from "@/layouts/Layout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const page = () => {
  return (
    <Layout footer={2} header={4} single={true}>
      {/*<< Hero Section Start >>*/}
      <section className="hero-section hero-1">
        <Slider
          {...sliderProps.heroSliderActive}
          className="hero-slider-active"
        >
          <div>
            <div
              className="slide-bg bg-cover wow zoomIn"
              style={{ backgroundImage: 'url("assets/img/hero/hero-1.jpg")' }}
            >
              <div className="container">
                <div className="row g-4 justify-content-between align-items-center">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <h4
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.2"
                      >
                        Le Message de Matthieu 25:6
                      </h4>
                      <h1
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.5"
                      >
                        La volonté parfaite, c’est Dieu parlant à l’homme sans énigmes et symboles.
                      </h1>
                      <div className="hero-button">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.matth25.prophetekacou"
                          className="theme-btn hover-white fs-lg animated"
                          data-animation-in="fadeInRight"
                          data-delay-in="0.7"
                        >
                          <span>
                            Installer l'application sur Android
                            <i className="fas fa-chevron-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="frame-shape fs-lg animated"
                      data-animation-in="fadeInRight"
                      data-delay-in="0.5"
                    >
                      <img
                        src="assets/img/hero/frame-shape.png"
                        alt="shape-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="slide-bg bg-cover wow zoomIn"
              style={{ backgroundImage: 'url("assets/img/hero/hero-2.jpg")' }}
            >
              <div className="container">
                <div className="row g-4 justify-content-between align-items-center">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <h4
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.2"
                      >
                        Texte intégral
                      </h4>
                      <h1
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.5"
                      >
                        INSTRUCTIONS SUR LES SONGES ET VISIONS
                      </h1>
                      <div className="hero-button">
                        <a
                          href="https://apps.apple.com/us/app/matthew-25-6-text-audio/id1348915504"
                          className="theme-btn hover-white fs-lg animated"
                          data-animation-in="fadeInRight"
                          data-delay-in="0.7"
                        >
                          <span>
                            Tout le message sur Iphone
                            <i className="fas fa-chevron-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="frame-shape fs-lg animated"
                      data-animation-in="fadeInRight"
                      data-delay-in="0.5"
                    >
                      <img
                        src="assets/img/hero/frame-shape.png"
                        alt="shape-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="slide-bg bg-cover wow zoomIn"
              style={{ backgroundImage: 'url("assets/img/hero/hero-3.jpg")' }}
            >
              <div className="container">
                <div className="row g-4 justify-content-between align-items-center">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <h4
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.2"
                      >
                        Le prophétisme
                      </h4>
                      <h1
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.5"
                      >
                        Le Message de Matthieu 25:6
                      </h1>
                      <div className="hero-button">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.matth25.prophetekacou"
                          className="theme-btn hover-white fs-lg animated"
                          data-animation-in="fadeInRight"
                          data-delay-in="0.7"
                        >
                          <span>
                            Télécharger l'application
                            <i className="fas fa-chevron-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="frame-shape fs-lg animated"
                      data-animation-in="fadeInRight"
                      data-delay-in="0.5"
                    >
                      <img
                        src="assets/img/hero/frame-shape.png"
                        alt="shape-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="slide-bg bg-cover wow zoomIn"
              style={{ backgroundImage: 'url("assets/img/hero/hero-1.jpg")' }}
            >
              <div className="container">
                <div className="row g-4 justify-content-between align-items-center">
                  <div className="col-lg-8">
                    <div className="hero-content">
                      <h4
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.2"
                      >
                        Extrait de Kacou 157
                      </h4>
                      <h1
                        className="fs-lg animated"
                        data-animation-in="fadeInRight"
                        data-delay-in="0.5"
                      >
                        La phase actuelle du Cri de minuit est comme la création des anges
                      </h1>
                      <div className="hero-button">
                        <a
                          href="https://apps.apple.com/us/app/matthew-25-6-text-audio/id1348915504"
                          className="theme-btn hover-white fs-lg animated"
                          data-animation-in="fadeInRight"
                          data-delay-in="0.7"
                        >
                          <span>
                            Installer le livre pour IOS
                            <i className="fas fa-chevron-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="frame-shape fs-lg animated"
                      data-animation-in="fadeInRight"
                      data-delay-in="0.5"
                    >
                      <img
                        src="assets/img/hero/frame-shape.png"
                        alt="shape-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="44px"
            height="44px"
            id="circle"
            fill="none"
            stroke="currentColor"
          >
            <circle r={20} cy={22} cx={22} id="translandcircle" />
          </symbol>
        </svg>
      </section>
      {/*<< Feature Section Start >>*/}
      <section className="feature-section fix section-padding">
        <div className="shape-image">
          <img src="assets/img/shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-feature-items">
                <div className="content">
                  <span>Extrait du livre</span>
                  <h3>
                  Instructions sur<br />
                     les songes et visions 
                  </h3>
                </div>
                <div className="icon">
                  <img src="assets/images/2.png" width="50" height="50" alt="icon-img" />
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-feature-items active">
                <div className="content">
                  <span>Extrait du livre</span>
                  <h3>
                  Kacou 160<br />
                  Notre disposition pour le réveil
                  </h3>
                </div>
                <div className="icon">
                  <img src="assets/images/2.png" width="50" height="50" alt="icon-img" />
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-feature-items">
                <div className="content">
                  <span>Extrait du livre</span>
                  <h3>
                  Le prophétisme,<br />
                    les songes et visions
                  </h3>
                </div>
                <div className="icon">
                  <img src="assets/images/2.png" width="50" height="50" alt="icon-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< About Section Start >>*/}

      <section className="about-section fix section-padding pt-0">
        <AboutSection />
      </section>
      {/*<< Service Section Start >>*/}
      <ServiceSection />
      {/*<< Service Section Start >>*/}
      <section className="trusted-client-section fix section-padding pt-0">
        <div className="container">
          <div className="trusted-client-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-5">
                <div
                  className="trusted-client-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/feature/trusted.jpg")',
                  }}
                >
                  <div className="icon-box">
                    <img
                      src="assets/img/circle.png"
                      alt="img"
                      className="text-circle"
                    />
                    <div className="icon">
                      <img src="assets/img/icon.png" alt="icon-img" />
                    </div>
                  </div>
                  <div className="counter-main-area">
                    <div className="counter-area">
                      <div className="counter-items">
                        <h2>
                          <Counter end={100} />+
                        </h2>
                        <h3>Enseignements</h3>
                      </div>
                      <div className="counter-items">
                        <h2>
                          <Counter end={100} />
                          k+
                        </h2>
                        <h3>Téléchargements</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 mt-5 mt-xl-0">
                <div className="trusted-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      Le ministère de la langue inconnue
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Sans prophète vivant<br />
                      Pas de salut.
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  J'ai aussi rétabli la confession publique qu’ils ne
condamnent jamais <br /> et ne pratiquent pourtant pas dans leurs églises et religions
                  </p>
                  <Tab.Container defaultActiveKey={"mission"}>
                    <div className="single-tab-items">
                      <Nav as={"ul"} className="nav mb-4" role="tablist">
                        <Nav.Item
                          as={"li"}
                          className="nav-item wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <Nav.Link as={"a"} href="#mission" eventKey="mission">
                            Le pardon des péchés
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                          as={"li"}
                          className="nav-item wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <Nav.Link
                            as={"a"}
                            href="#strategy"
                            eventKey="strategy"
                          >
                            Le reveil promis
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                          as={"li"}
                          className="nav-item wow fadeInUp"
                          data-wow-delay=".7s"
                        >
                          <Nav.Link as={"a"} href="#vision" eventKey="vision">
                            Les songes & visions
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content className="tab-content">
                        <Tab.Pane eventKey="mission" className="tab-pane fade">
                          <div className="tab-content-items">
                            <ul className="wow fadeInUp" data-wow-delay=".3s">
                              <li>
                                <i className="fas fa-check" />
                                Kacou 17 : La confession publique
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Kacou 146 : Les commandements actuels de Dieu pour l'humanité
                              </li>
                            </ul>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="strategy" className="tab-pane fade">
                          <div className="tab-content-items">
                            <ul>
                              <li>
                                <i className="fas fa-check" />
                                Kacou 158 : Les dons spirituels et leurs manifestations
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Kacou 159 : Le reveil des dix vierges de Matthieu 25
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Kacou 160 : Notre disposition pour le réveil
                              </li>
                            </ul>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="vision" className="tab-pane fade">
                          <div className="tab-content-items">
                            <ul>
                              <li>
                                <i className="fas fa-check" />
                                Kacou 149 : Les rêves et le jeûne dans le plan du salut
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Kacou 154 : L'étape actuelle de ma mission
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Kacou 155 : Instructions sur le prophétisme
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Kacou 156 : Instructions sur les songes et visions
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Kacou 157 : Le prophétisme, les songes et visions
                              </li>
                            </ul>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/*<< Cta Banner Section Start >>*/}
      <CtaBanner />
      
      {/*<< Testimonial Section Start >>*/}
      <section className="testimonial-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">+25K Avis</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Temoignages <br />
              des utilisateurs
            </h2>
          </div>
          <Slider
            {...sliderProps.testimonialCarouselActive}
            className="testimonial-carousel-active"
          >
            <div className="testimonial-card-items">
              <div className="author-items">
                <div
                  className="author-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/testimonial/01.png")',
                  }}
                />
                <div className="author-content">
                  <h5>Edmonde</h5>
                  <span>Cote d'Ivoire</span>
                </div>
              </div>
              <p>
                Cette application contient les paroles de la vie éternelle.Tu es poursuivi en rêve, tu manges en rêv, quand tu dors une force vient t'immobiliser... je te conseille cette application.
              </p>
              <ul>
                <li>07 Juillet 2024</li>
              </ul>
            </div>
            <div className="testimonial-card-items">
              <div className="author-items">
                <div
                  className="author-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/testimonial/03.png")',
                  }}
                />
                <div className="author-content">
                  <h5>Stéphanie Ouraga</h5>
                  <span>Côye d'Ivoire</span>
                </div>
              </div>
              <p>
                Dans cette nouvelle dimension du prophétisme et de révélations,  il vous faut absolument le message de MAtthieu 25:6...
              </p>
              <ul>
                <li>07 Juillet 2024</li>
              </ul>
            </div>
            <div className="testimonial-card-items">
              <div className="author-items">
                <div
                  className="author-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/testimonial/02.png")',
                  }}
                />
                <div className="author-content">
                  <h5>Andrea Lole</h5>
                  <span>Cameroun</span>
                </div>
              </div>
              <p>
                Waouh glorieuse application, pour notre temps, je dis merci à Dieu pour ma délivrance au travers de cette application qui contient les seuls vraies paroles de Dieu.
              </p>
              <ul>
                <li>15 Juillet 2024</li>
              </ul>
            </div>
            <div className="testimonial-card-items">
              <div className="author-items">
                <div
                  className="author-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/testimonial/01.png")',
                  }}
                />
                <div className="author-content">
                  <h5>Melina Tsona</h5>
                  <span>Gabon</span>
                </div>
              </div>
              <p>
                La parole de Dieu se vit au présent et j'ai trouvé cela en ce livre.
              </p>
              <ul>
                <li>07 Juillet 2024</li>
              </ul>
            </div>
          </Slider>
        </div>
      </section>
      {/*<< Cta Chat Section Start >>*/}
      <section className="cta-chat-section section-padding pt-0">
        <div className="container">
          <div className="cta-chat-wrapper">
            <div className="chat-items wow fadeInUp" data-wow-delay=".3s">
              <div className="icon">
                <i className="flaticon-chat" />
              </div>
              <div className="content">
                <h3>Echange ou invitation</h3>
                <p>Nous partageons gratuitement les brochures, prospectus et l'application du message de Matthieu 25:6.
                  Nous nous engageons aussi pour des échanges et entretiens avec quiconque.
                </p>
              </div>
            </div>
            <Link
              href="contact"
              className="theme-btn bg-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span>
                Contacter
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/*<< News Section Start >>*/}
      <section className="news-section fix section-padding pt-0">
        <div className="container">
          <div className="section-title">
            <span className="wow fadeInUp">Le blog Média Chrétien</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Bientot disponible...
            </h2>
          </div>
          {/*<div className="row">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="single-news-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/01.jpg")' }}
                >
                  <Link href="news-details" className="icon">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="news-content">
                  <ul className="post-date">
                    <li>May 28, 2023</li>
                  </ul>
                  <h3>
                    <Link href="news-details">
                      From Newbie to Ninja: 10 Essential IT Skills You Need
                    </Link>
                  </h3>
                  <div className="news-button mt-4">
                    <Link href="news-details" className="link-btn">
                      <span>read more</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="single-news-items active">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/02.jpg")' }}
                >
                  <Link href="news-details" className="icon">
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="news-content">
                  <ul className="post-date">
                    <li>june 28, 2023</li>
                  </ul>
                  <h3>
                    <Link href="news-details">
                      A Complete Guide to Business Insurance perfect
                    </Link>
                  </h3>
                  <div className="news-button mt-4">
                    <Link href="news-details" className="link-btn">
                      <span>read more</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
                </div>*/}
        </div>
      </section>
      
    </Layout>
  );
};
export default page;
