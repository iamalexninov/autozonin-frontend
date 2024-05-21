import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { GlobalIcon } from "../../global/GlobalIcon";

export const FooterTop = () => {
  const mockdata = {
    company: {
      header: "Company",
      links: [
        { path: "/", text: "Home" },
        { path: "/about", text: "About Us" },
        { path: "/blog", text: "Blog" },
        { path: "/catalogue", text: "Listing" },
        { path: "/about", text: "Services" },
        { path: "/contact", text: "Contact Us" },
      ],
    },
    quickLinks: {
      header: "Quick Links",
      links: [
        { path: "/contact", text: "Get In Touch" },
        { path: "/", text: "Help Center" },
        { path: "/", text: "Live Chat" },
        { path: "/", text: "How it works" },
      ],
    },
    brands: {
      header: "Our Brands",
      links: [
        { path: "/catalogue", text: "Toyota" },
        { path: "/catalogue", text: "Porsche" },
        { path: "/catalogue", text: "Audi" },
        { path: "/catalogue", text: "BMW" },
        { path: "/catalogue", text: "Ford" },
        { path: "/catalogue", text: "Nissan" },
        { path: "/catalogue", text: "Peugeot" },
        { path: "/catalogue", text: "Volkswagen" },
      ],
    },
    types: {
      header: "Vehicles Type",
      links: [
        { path: "/catalogue", text: "Sedan" },
        { path: "/catalogue", text: "Hatchback" },
        { path: "/catalogue", text: "SUV" },
        { path: "/catalogue", text: "Hybrid" },
        { path: "/catalogue", text: "Electric" },
        { path: "/catalogue", text: "Coupe" },
        { path: "/catalogue", text: "Truck" },
        { path: "/catalogue", text: "Convertible" },
      ],
    },
  };

  return (
    <div className={styles.footer_top}>
      <RenderFooterSection section={mockdata.company} />
      <RenderFooterSection section={mockdata.quickLinks} />
      <RenderFooterSection section={mockdata.brands} />
      <RenderFooterSection section={mockdata.types} />
      <ConnectWithUs />
    </div>
  );
};

const RenderFooterSection = ({ section }) => {
  return (
    <div className={styles.footer_section}>
      <p className={styles.footer_section_header}>{section.header}</p>
      <ul className={styles.footer_section_links}>
        <RenderFooterSectionLinks links={section.links} />
      </ul>
    </div>
  );
};

const RenderFooterSectionLinks = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <li className={styles.footer_section_link} key={link.text}>
          <Link to={link.path}>{link.text}</Link>
        </li>
      ))}
    </>
  );
};

const ConnectWithUs = () => {
  return (
    <div className={styles.footer_connect}>
      <p className={styles.footer_connect_header}>Connect With Us</p>
      <div className={styles.footer_connect_icons}>
        <div className={styles.footer_connect_icon}>
          <GlobalIcon type="facebook" />
        </div>
        <div className={styles.footer_connect_icon}>
          <GlobalIcon type="twitter" />
        </div>
        <div className={styles.footer_connect_icon}>
          <GlobalIcon type="pinterest" />
        </div>
        <div className={styles.footer_connect_icon}>
          <GlobalIcon type="linkedin" />
        </div>
      </div>
    </div>
  );
};
