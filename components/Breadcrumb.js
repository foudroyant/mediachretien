import Link from "next/link";

const Breadcrumb = ({ pageName = "About Us" }) => {
  return (
    <div
      className="breadcrumb-wrapper section-padding bg-cover"
      style={{ backgroundImage: 'url("assets/img/breadcrumb.jpg")' }}
    >
      <div className="container">
        <div className="page-heading">
          <h1 className="wow fadeInUp" data-wow-delay=".3s">
            {pageName}
          </h1>
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <i className="fal fa-minus" />
            </li>
            <li>{pageName}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Breadcrumb;
