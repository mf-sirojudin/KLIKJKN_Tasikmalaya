import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Globe,
  Smartphone,
  MessageCircle,
} from "lucide-react";

import {
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import footerContactData from "../../../data/footerContactData";
import footerServiceData from "../../../data/footerServiceData";
import footerSocialMediaData from "../../../data/footerSocialMediaData";
import footerScheduleData from "../../../data/footerScheduleData";

import styles from "./Footer.module.css";

function Footer() {

  // ==========================================
  // SOCIAL MEDIA ICON
  // ==========================================

  const renderSocialIcon = (icon) => {
    switch (icon) {
      case "youtube":
        return <FaYoutube />;

      case "tiktok":
        return <FaTiktok />;

      case "instagram":
        return <FaInstagram />;

      case "channel wa":
        return <FaWhatsapp />;

      case "globe":
        return <Globe size={18} />;

      default:
        return null;
    }
  };

  return (
    <footer className={styles.footer}>

      {/* =====================================
          MAIN FOOTER
      ===================================== */}

      <div className="container">

        <div className={styles.grid}>

          {/* =====================================
              OFFICE
          ===================================== */}

          <div className={styles.column}>

            <img
              src="/images/logo/bpjs-logo.svg"
              alt="BPJS Kesehatan"
              className={styles.logo}
            />

            <h3 className={styles.heading}>
              {footerContactData.officeName}
            </h3>

            <p className={styles.address}>
              {footerContactData.address}
            </p>

            <a
              href={`mailto:${footerContactData.email}`}
              className={styles.contactItem}
            >
              <Mail size={16} />

              <span>
                {footerContactData.email}
              </span>
            </a>

            <div className={styles.socialMedia}>

              {footerSocialMediaData.map((item) => (

                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  {renderSocialIcon(item.icon)}
                </a>

              ))}

            </div>

          </div>

          {/* =====================================
              SERVICES
          ===================================== */}

          <div className={styles.column}>

            <h3 className={styles.heading}>
              Layanan
            </h3>

            {footerServiceData.map((item) => (

              item.external ? (

                <a
                  key={item.id}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {item.title}
                </a>

              ) : (

                <Link
                  key={item.id}
                  to={item.path}
                  className={styles.link}
                >
                  {item.title}
                </Link>

              )

            ))}

          </div>

          {/* =====================================
              CONTACT
          ===================================== */}

          <div className={styles.column}>

            <h3 className={styles.heading}>
              Hubungi Kami
            </h3>

            <a
              href="tel:165"
              className={styles.contactItem}
            >
              <Phone size={16} />

              <span>
                Care Center {footerContactData.careCenter}
              </span>
            </a>

            <a
              href={`mailto:${footerContactData.email}`}
              className={styles.contactItem}
            >
              <Mail size={16} />

              <span>
                {footerContactData.email}
              </span>
            </a>

            <a
              href={footerContactData.website}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <Globe size={16} />

              <span>
                www.bpjs-kesehatan.go.id
              </span>
            </a>

            <a
              href={footerContactData.mobileJkn}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <Smartphone size={16} />

              <span>
                Mobile JKN
              </span>
            </a>

            <a
              href={footerContactData.pandawa}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <MessageCircle size={16} />

              <span>
                PANDAWA
              </span>
            </a>

          </div>

          {/* =====================================
              SCHEDULE
          ===================================== */}

          <div className={styles.column}>

            <h3 className={styles.heading}>
              Jam Pelayanan
            </h3>

            {footerScheduleData.map((item) => (

              <div
                key={item.id}
                className={styles.schedule}
              >

                <strong>
                  {item.day}
                </strong>

                <span>
                  {item.time}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* =====================================
          FOOTER BOTTOM
      ===================================== */}

      <div className={styles.bottom}>

        <div className="container">

          <p>
            © 2026 BPJS Kesehatan Kantor Cabang Tasikmalaya. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;