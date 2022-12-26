import { css } from '@emotion/react'
import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer css={styles.footer}>
      <div className="container">
        <div className="row">
          <div className=" col-md-12 footer-link d-flex justify-content-center align-items-center">
            <a href="#">About</a>
            <a href="#">Contact Us</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="mt-5 row align-items-end">
          <div className="col-lg-6 col-md-12 text-white copyright">
            Copyright ©2022 library.com. | All rights reserved.
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="d-flex footer-social-link justify-content-end align-items-center">
              <a
                href="#"
                className="d-flex justify-content-center align-items-center"
              >
                <RiFacebookFill color={'var(--primaryColor)'} size={25} />
              </a>
              <a
                href="#"
                className="d-flex justify-content-center align-items-center"
              >
                <RiInstagramLine color={'var(--primaryColor)'} size={25} />
              </a>
              <a
                href="#"
                className="d-flex justify-content-center align-items-center"
              >
                <RiTwitterFill color={'var(--primaryColor)'} size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
const styles = {
  footer: css`
    background: var(--primaryColor);
    padding: 60px 0;
    margin-top: 80px;

    /* Footer */

    .footer-link a {
      color: var(--textColor-white);
      transition: 0.3s ease-in-out;
      text-decoration: none;
    }
    .footer-link a:hover {
      color: var(--secondaryColor);
      transition: 0.3s ease-in-out;
    }
    .footer-link a::after {
      content: '|';
      padding-left: 20px;
      padding-right: 20px;
    }

    .footer-link a:last-child::after {
      content: '';
    }
    .footer-social-link a {
      background: var(--secondaryColor);
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 20px;
      transition: 0.3s ease-in-out;
    }
    .footer-social-link a:hover {
      background: var(--textColor-white);
      transition: 0.3s ease-in-out;
    }
    .footer-social-link a:hover i {
      color: var(--textColor-black);
    }
    .footer-social-link i {
      color: var(--primaryColor);
    }
    .footer .row:nth-child(1) {
      margin-bottom: 40px;
    }
    .copyright {
      font-weight: lighter;
    }
    /* Footer */
  `,
}
