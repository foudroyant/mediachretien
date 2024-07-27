import Mouse from "@/layouts/Mouse";
import PreLoader from "@/layouts/PreLoader";
import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/meanmenu.css";
import "@css/slick.css";
import "@css/nice-select.css";
import "@css/main.css";
import "@css/style.css";
import "react-circular-progressbar/dist/styles.css";
import "./globals.css";

export const metadata = {
  title: "Media Chretien",
  description: "Le site officiel de Media Chretien",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <PreLoader />
        {children}
        <Mouse />
      </body>
    </html>
  );
}
