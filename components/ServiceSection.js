"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const ServiceSection = () => {
  return (
    <section
      className="service-section fix section-padding section-bg"
      id="service"
    >
      <div className="shape-image">
        <img src="assets/img/service/shape.png" alt="shape-img" />
      </div>
      <div className="bottom-shape">
        <img src="assets/img/service/bottom-shape.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="title-section-area">
          <div className="section-title">
            <span className="wow fadeInUp">+100K Téléchargements</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Notre disposition <br />
            pour le réveil
            </h2>
          </div>
          <a
            href="https://apps.apple.com/us/app/matthew-25-6-text-audio/id1348915504"
            className="theme-btn wow fadeInUp"
            data-wow-delay=".5s"
          >
            <span>
              Application pour Iphone
              <i className="fas fa-chevron-right" />
            </span>
          </a>
        </div>
      </div>
      
    </section>
  );
};
export default ServiceSection;

export const ServiceSection2 = ({ showItem = 100 }) => {
  const services = [
    {
      id: 1,
      title: "Customer Software Development",
      icon: "flaticon-coding",
      desc: "We approached WiaTech with complex project deliver",
    },
    {
      id: 2,
      title: "Desktop Computing Services",
      icon: "flaticon-server",
      desc: "We approached WiaTech with complex project deliver",
    },
    {
      id: 3,
      title: "Infrastructure Plan & Business Reform",
      icon: "flaticon-service",
      desc: "We approached WiaTech with complex project deliver",
    },
    {
      id: 4,
      title: "Backup & Recovery Data Services",
      icon: "flaticon-data-science",
      desc: "We approached WiaTech with complex project deliver",
    },
    {
      id: 5,
      title: "Data & Cyber Security Managment",
      icon: "flaticon-technology-1",
      desc: "We approached WiaTech with complex project deliver",
    },
    {
      id: 6,
      title: "Firewall Advancement & Defender System",
      icon: "flaticon-server",
      desc: "We approached WiaTech with complex project deliver",
    },
    {
      id: 7,
      title: "Apps Development & UI/UX Project",
      icon: "flaticon-service",
      desc: "We approached WiaTech with complex project deliver",
    },
    {
      id: 8,
      title: "Data & Cyber Security Managment",
      icon: "flaticon-data-science",
      desc: "We approached WiaTech with complex project deliver",
    },
  ];
  return (
    <div className="container">
      <div className="section-title text-center">
        <span className="wow fadeInUp">our fucusable services</span>
        <h2 className="wow fadeInUp" data-wow-delay=".3s">
          How do we work to help you <br />
          in Startup Business
        </h2>
      </div>
      <div className="row">
        {services.map(
          (service, index) =>
            index < showItem && (
              <div
                key={service.id}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="service-box-items">
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="service-details">{service.title}</Link>
                    </h3>
                    <p>{service.desc}</p>
                    <Link href="service-details" className="arrow-icon">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
