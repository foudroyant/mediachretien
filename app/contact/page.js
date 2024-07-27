import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/layouts/Layout";
const page = () => {
  return (
    <Layout header={4} single={true}>
      <Breadcrumb pageName="Nous contacter" />
      <section className="contact-main-area fix section-padding">
        <div className="container">
          <div className="contact-main-wrapper">
            <div className="row g-4">
              <div className="col-lg-6 offset-lg-3">
                <div className="contact-content">
                  <div className="section-title mb-2">
                    <span className="wow fadeInUp">Au contact de la vérité</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Nous contacter
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                  Quand nous avons découvert la vérité incontestable promise pour notre temps, ce qu'il nous reste c'est de porter cette vérité partout où peut se trouver un enfant de Dieu, qu'il soit riche ou pauvre, loin ou proche. 
                  </p>
                  <div className="row g-4 mt-3">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="content">
                          <h5>Pays d'origine</h5>
                          <p>
                            Congo Brazzaville <br />
                            Brazzaville / Ouesso
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="far fa-phone" />
                        </div>
                        <div className="content">
                          <h5>Telephone</h5>
                          <a href="tel:+242 06 483 76 37">+242 06 483 76 37</a> <br />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fal fa-envelope" />
                        </div>
                        <div className="content">
                          <h5>Email</h5>
                          <a href="mailto:contact@mediachretien.com" className="link">
                          contact@mediachretien.com
                          </a>{" "}
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".9s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fad fa-share-alt" />
                        </div>
                        <div className="content">
                          <h5>Réseaux sociaux</h5>
                          <div className="social-icon d-flex align-items-center">
                            <a href="https://www.facebook.com/profile.php?id=61562269797608&mibextid=ZbWKwL">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="contact-image wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <img src="assets/images/rouleau.jpg" alt="img" />
                  </div>
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
