import { css } from '@emotion/react'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { CgSearch } from 'react-icons/cg'
import { ImLocation2 } from 'react-icons/im'
import { FaFilter } from 'react-icons/fa'
import Banner from '@/assets/banner'
import Library from '@/assets/icons/library'
import BookStore from '@/assets/icons/bookStore'
import BaseButton from '@/components/base/baseButton'
import userRoute from 'routes/userRoute'
import BookItems from '@/components/base/bookItems'
import LibraryItems from '@/components/base/libraryItems'

const DashboardPage = () => {
  const { push } = useRouter()
  return (
    <div css={styles.main}>
      <section className="header">
        <div className="container position-relative">
          <div className="banner-img position-absolute">
            <Banner />
          </div>
        </div>
        <div className="container">
          <div className="banner d-flex justify-content-between">
            <div className="left-banner">
              <h2
                className="title"
                css={{ width: '450px', marginBottom: '45px' }}
              >
                Get Searching Work Done Faster
              </h2>
              <h3
                className="subTitle"
                css={{
                  width: '400px',
                  color: 'var(--textColor-white)',
                  fontWeight: 'lighter',
                  marginBottom: '45px',
                }}
              >
                Reading is an exercise in empathy; an exercise in walking in
                <br /> someone else’s shoes for a while.
              </h3>
              <div
                className="row text-center align-items-center"
                css={{ width: '50%' }}
              >
                <BaseButton
                  primary={false}
                  label={'Get Started'}
                  onClick={() => window.scrollTo(0, 600)}
                />
              </div>
            </div>

            <div className="right-banner position-relative">
              <div className="right-banner-library d-flex justify-content-center align-items-center position-absolute">
                <Library />
                <p className="pt-3 ps-2">100 + Libraries</p>
              </div>
              <div className="right-banner-store d-flex justify-content-center align-items-center position-absolute">
                <BookStore />
                <p className="pt-3 ps-2">100 + Book Stores</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-us position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrapper">
                <h3
                  className="sub-title text-center"
                  css={{
                    color: 'var(--textColor-black)',
                    borderBottom: '1px solid var(--textColor-black)',
                    paddingBottom: '20px',
                  }}
                >
                  Why Choose Us
                </h3>
                <div className="choose-wrapper d-flex">
                  <div className="choose-item">
                    <div className="choose-item-icon d-flex justify-content-center align-items-center pt-1 pe-1">
                      <CgSearch color={'var(--textColor-white)'} size={35} />
                    </div>
                    <p className="text-center">
                      We help you to be quick searching in book{' '}
                    </p>
                  </div>
                  <div className="choose-item">
                    <div className="choose-item-icon d-flex justify-content-center align-items-center">
                      <ImLocation2 color={'var(--textColor-white)'} size={30} />
                    </div>
                    <p className="text-center">
                      We provide addresses of libraries and book store
                    </p>
                  </div>
                  <div className="choose-item">
                    <div className="choose-item-icon d-flex justify-content-center align-items-center pt-2">
                      <FaFilter color={'var(--textColor-white)'} size={25} />
                    </div>
                    <p className="text-center">
                      We provide user friendly filter and search
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-libraries">
        <div className="container">
          <h3
            className="subTitle text-center"
            css={{
              color: 'var(--textColor-black)',
            }}
          >
            Latest Library Lists
          </h3>
          <h4 className="subText text-center">
            Today a reader, tomorrow a leader.
          </h4>
          <div className="justify-content-start" css={styles.listContainer}>
            <LibraryItems
              title={'A-Library'}
              description={
                'Lorem, Ipsum, Lorem Ipsum Lorem IpsumLorem Lorem IpsumLorem Ipsum Lorem…..'
              }
            />
            <LibraryItems
              title={'A-Library'}
              description={
                'Lorem, Ipsum, Lorem Ipsum Lorem IpsumLorem Lorem IpsumLorem Ipsum Lorem…..'
              }
            />
            <LibraryItems
              title={'A-Library'}
              description={
                'Lorem, Ipsum, Lorem Ipsum Lorem IpsumLorem Lorem IpsumLorem Ipsum Lorem…..'
              }
            />
          </div>
          <div
            className="row text-center align-items-center justify-content-center"
            css={{ width: '100%' }}
          >
            <BaseButton
              label={'View More'}
              rightArrow={true}
              onClick={() => push(userRoute[1].path)}
            />
          </div>
        </div>
      </section>
      <section className="latest-libraries">
        <div className="container">
          <h3
            className="subTitle text-center"
            css={{
              color: 'var(--textColor-black)',
            }}
          >
            Latest Book Store Lists
          </h3>
          <h4 className="subText text-center">
            There is more treasure in books than in all the pirate’s loot on
            Treasure Island.
          </h4>
          <div className="justify-content-start" css={styles.listContainer}>
            <BookItems
              title={'English for everyone'}
              description={
                'Lorem, Ipsum, Lorem Ipsum Lorem IpsumLorem  Lorem IpsumLorem Ipsum Lorem…..'
              }
              author={'Alex'}
              price={'3,000'}
            />
            <BookItems
              title={'English for everyone'}
              description={
                'Lorem, Ipsum, Lorem Ipsum Lorem IpsumLorem  Lorem IpsumLorem Ipsum Lorem…..'
              }
              author={'Alex'}
              price={'3,000'}
            />
            <BookItems
              title={'English for everyone'}
              description={
                'Lorem, Ipsum, Lorem Ipsum Lorem IpsumLorem  Lorem IpsumLorem Ipsum Lorem…..'
              }
              author={'Alex'}
              price={'3,000'}
            />
          </div>
          <div
            className="row text-center align-items-center justify-content-center"
            css={{ width: '100%' }}
          >
            <BaseButton
              label={'View More'}
              rightArrow={true}
              onClick={() => push(userRoute[2].path)}
            />
          </div>
        </div>
      </section>
      <section className="our-partners">
        <div className="container">
          <h3 className="subTitle text-center">Our Partners</h3>
          <h4 className="subText text-center">
            A room without books is like a body without a soul.
          </h4>
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div
                className="wrapper our-partner-left"
                css={{ height: '300px' }}
              >
                <h5>Be Our Partners</h5>
                <p>
                  Be a partner of a technologically advancedcompany with
                  products referenced worldwide.
                </p>
                <div
                  className="row text-center align-items-center justify-content-center"
                  css={{ width: '100%' }}
                >
                  <BaseButton
                    label={'Contact Us'}
                    rightArrow={false}
                    background={true}
                    onClick={() => push(userRoute[3].path)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <div
                className="wrapper our-partner-right"
                css={{ height: '300px' }}
              >
                <div className="partner-logo-wrapper d-flex justify-content-between align-items-center"></div>
                <div className="partner-logo-wrapper d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DashboardPage
const styles = {
  libraryButton: ({ primary, background }) => css`
    background-color: ${primary
      ? 'var(--primaryColor)'
      : 'var(--secondaryColor)'};
    font-size: 14px;
    transition: 0.4s ease-in-out;
    padding: 15px 30px;
    width: auto;
    color: ${primary ? 'var(--textColor-white)' : 'var(--textColor-black)'};
    border-radius: 15px;
    text-decoration: none;
    :hover {
      background-color: ${primary
        ? background
          ? 'var(--textColor-white)'
          : 'var(--secondaryColor)'
        : 'var(--textColor-white)'};
      color: var(--textColor-black);
    }
  `,
  main: css`
    .title {
      font-size: 45px;
      color: var(--textColor-white);
    }
    .subTitle {
      font-size: 25px;
    }
    .subText {
      font-size: 20px;
      color: var(--textColor-black);
      font-weight: lighter;
      margin-bottom: 45px;
    }

    .header {
      background-color: var(--primaryColor);
    }
    .banner {
      padding-top: 30px;
      padding-bottom: 100px;
    }
    .left-banner,
    .right-banner {
      width: 50%;
      z-index: 1;
    }

    .banner-img {
      width: 500px;
      right: 16px;
      z-index: 0;
      top: 10%;
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
      width: 240px;
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

    /* latest-libraries */

    /* our partners */
    section.our-partners {
      padding-top: 80px;
    }
    .our-partners .wrapper {
      background: var(--secondaryColor);
    }
    .our-partner-left {
      padding: 46px 40px;
      text-align: center;
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
  listContainer: css`
    display: flex;
    flex-wrap: wrap;
  `,
}
