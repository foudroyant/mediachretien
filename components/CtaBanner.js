import Link from "next/link";

const CtaBanner = ({ textColor = "text-white" }) => {
  return (
    <section
      className="cta-banner-section bg-cover section-padding"
      style={{ backgroundImage: 'url("assets/img/banner/01.jpg")' }}
    >
      <div className="container">
        <div className="cta-banner-wrapper section-padding pt-0">
          <div className="section-title mb-0">
            <span className={`${textColor} wow fadeInUp`}>
              Dans +50 pays à travers le monde
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Vous désirez des prédications ? <br />
              Contactez:{" "}
              <a href="tel:+242064837637" className={textColor}>
                (+242) 06 483 76 37
              </a>
            </h2>
          </div>
          <Link
            href="contact"
            className="theme-btn hover-white wow fadeInUp"
            data-wow-delay=".5s"
          >
            <span>
              Demander un entretien
              <i className="fas fa-chevron-right" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CtaBanner;
