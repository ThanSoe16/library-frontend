import React from 'react'
import { css } from '@emotion/react'
import UserLayout from '@/components/layouts/userLayout'
import DashboardPage from './dashboard/DashboardPage'

const Index = () => {
  return (
    <UserLayout>
      <DashboardPage />
    </UserLayout>
  )
}
export default Index
const styles = {
  main: css`
    .header {
      background-color: var(--primaryColor);
    }
    .navbar-nav a {
      color: var(--textColor-white);
    }
    .navbar-nav a:hover,
    .navbar-nav a.active {
      color: var(--secondaryColor);
    }

    .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: 30px;
      padding-left: 30px;
    }
    .banner .libraryButton {
      display: inline;
      color: var(--textColor-black);
      background: var(--secondaryColor);
    }
    .banner .libraryButton:hover {
      color: var(--primaryColor);
      background: var(--textColor-white);
    }

    .Librarynavbar .form-control {
      border-radius: 0;
      border: 1px solid var(--textColor-white);
      background: transparent;
      width: 280px;
      max-width: 100%;
    }
    .Librarynavbar .form-control::placeholder {
      color: var(--textColor-white);
    }
    .navbar-brand {
      margin-right: 60px;
    }
    .banner .banner-title {
      margin-bottom: 45px;
      width: 420px;
      max-width: 100;
      color: var(--textColor-white);
    }
    .banner {
      padding-top: 130px;
      padding-bottom: 180px;
      line-height: 54px;
    }
    .left-banner,
    .right-banner {
      width: 50%;
      z-index: 1;
    }
    .left-banner .main-title {
      width: 400px;
      max-width: 100%;
      margin-bottom: 45px;
    }
    .left-banner .sub-title {
      width: 410px;
      max-width: 100%;
      margin-bottom: 45px;
      color: var(--textColor-white);
    }
    .banner-img {
      width: 500px;
      right: 16px;
      z-index: 0;
      top: 120px;
      /* bottom: -120px; */
    }
    .right-banner-library,
    .right-banner-store {
      background: var(--secondaryColor);
      width: 240px;
      height: 80px;
      border-radius: 10px;
      top: -10px;
      left: -50px;
    }
    .right-banner-store {
      top: 100px;
      left: 50px;
      width: 260px;
    }
    .right-banner-library img,
    .right-banner-store img {
      margin-right: 15px;
    }
    .right-banner-library p,
    .right-banner-store p {
      color: var(--textColor-black);
    }
    /* header */

    /* Why Choose Us */
    .why-choose-us {
      margin-top: 50px;
    }
    .why-choose-us .sub-title {
      color: var(--textColor-black);
      border-bottom: 1px solid var(--textColor-black);
      padding-bottom: 20px;
      margin-bottom: 0;
    }
    .why-choose-us .wrapper {
      background: var(--secondaryColor);
      padding: 30px 50px;
      border-radius: 25px;
    }
    .why-choose-us .choose-item {
      width: 33.3%;
      border-right: 1px solid var(--textColor-black);
      margin-top: 15px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .why-choose-us .choose-item:last-child {
      border-right: none;
    }
    .why-choose-us .choose-item-icon {
      background: var(--primaryColor);
      border-radius: 50%;
      width: 65px;
      height: 65px;
      margin: 0 auto;
    }
    .why-choose-us i {
      font-size: 24px;
      color: var(--secondaryColor);
    }
    .why-choose-us p {
      color: var(--textColor-black);
      width: 205px;
      margin: 0 auto;
      padding-top: 30px;
    }
    /* Why Choose Us */

    /* latest-libraries */
    .latest-libraries {
      padding-top: 80px;
    }
    .latest-libraries .libraryButton {
      margin-left: auto;
      margin-right: auto;
      margin-top: 45px;
    }
    /* latest-libraries */

    /* latest-book-store */

    .book-store-bg-img {
      width: 120px;
      opacity: 0.5;
    }
    .first-book-store-img {
      top: 10px;
      left: 10px;
    }
    .second-book-store-img {
      bottom: 10px;
      right: 10px;
    }
    /* latest-book-store */

    /* our partners */
    section.our-partners {
      padding-top: 80px;
    }
    .our-partners .wrapper {
      background: var(--secondaryColor);
      margin-top: 40px;
    }
    .our-partner-left {
      padding: 46px 40px;
      text-align: center;
    }
    .our-partner-left .libraryButton {
      background-color: var(--primaryColor);
      color: var(--textColor-white);
    }
    .our-partner-left .libraryButton:hover {
      background-color: var(--primaryColor);
      color: var(--textColor-white);
    }
    .our-partner-left h5,
    .our-partner-left p {
      margin-bottom: 25px;
      color: var(--textColor-black);
    }
    .partner-logo {
      width: 33.33%;
    }
    .partner-logo img {
      width: 50%;
    }
    .our-partner-right {
      padding: 80px 40px;
    }
    .our-partner-right .partner-logo-wrapper:first-child {
      margin-bottom: 30px;
    }
    /* our partners */
    @media (max-width: 992px) {
      .latest-libraries {
        padding-top: 40px;
      }
      .banner-img {
        display: none;
      }
      .right-banner {
        display: none;
      }
      .left-banner {
        width: 100%;
        text-align: center;
      }
      .left-banner .main-title {
        width: 100%;
      }
      .banner .banner-title {
        margin-left: auto;
        margin-right: auto;
      }
      .why-choose-us .wrapper {
        background: transparent;
        padding: 0px;
      }
      .why-choose-us .sub-title {
        border-bottom: none;
        margin-bottom: 30px;
      }
      .why-choose-us i {
        font-size: 24px;
        color: var(--textColor-white);
      }
      .why-choose-us {
        margin-bottom: 50px;
      }
    }
  `,
}
