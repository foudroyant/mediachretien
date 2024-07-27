"use client";
import Link from "next/link";
import ProgressBar from "./ProgressBar";
const AboutSection = () => {
  return (
    <div className="container">
      <div className="about-wrapper">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-image-items">
              <div className="circle-shape">
                <img
                  src="assets/img/about/circle.png"
                  alt="img"
                  className="text-circle"
                />
                <div className="award-img">
                  <img src="assets/img/about/award.png" alt="img" />
                </div>
              </div>
              <div className="border-shape">
                <img src="assets/img/about/border-shape.png" alt="shape-img" />
              </div>
              <div
                className="about-image bg-cover wow fadeInLeft"
                data-wow-delay=".3s"
                style={{
                  backgroundImage: 'url("assets/images/prophetisme.png")',
                }}
              >
                <div
                  className="about-image-2 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="about-content">
              <div className="section-title">
                <span className="wow fadeInUp">+100 enseignements</span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Disponible en plus 50 langues
                </h2>
              </div>
              <p className=" mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
              🌟 Découvrez le message de Matthieu 25:6 avec 162 prédications écrites et audio. 📖 Plongez dans des textes sacrés et écoutez des messages inspirants, disponibles gratuitement. Rejoignez-nous, abonnez-vous et partagez la lumière !
              </p>
              <div className="circle-progress-bar-wrapper">
                <div
                  className="single-circle-bar wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <ProgressBar value={100} color={"#166FD3"} />
                  <div className="content">
                    <h6>
                      Application <br />
                      Gratuite
                    </h6>
                  </div>
                </div>
                <div
                  className="single-circle-bar wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <ProgressBar value={99} color={"#166FD3"} />
                  <div className="content">
                    <h6>
                      Pratique<br />
                      Facile
                    </h6>
                  </div>
                </div>
              </div>
              <ul className="about-list wow fadeInUp" data-wow-delay=".7s">
                <li>
                  <i className="far fa-check me-2" />
                  La confession publique
                </li>
                <li>
                  <i className="far fa-check me-2" />
                  Le transfert des esprits
                </li>
                <li>
                  <i className="far fa-check me-2" />
                  Dieu visite l'Afrique
                </li>
              </ul>
              <div className="about-author">
                <div className="about-button wow fadeInUp" data-wow-delay=".8s">
                  <a href="https://play.google.com/store/apps/details?id=com.matth25.prophetekacou" className="theme-btn">
                    <span>
                      Application Android
                      <i className="fas fa-chevron-right" />
                    </span>
                  </a>
                </div>
                <div className="author-image wow fadeInUp" data-wow-delay=".9s">
                  <img src="assets/img/about/author.png" alt="author-img" />
                  <div className="content">
                    <img src="assets/img/about/signature.png" alt="signature" />
                    <p>Média Chrétien</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
