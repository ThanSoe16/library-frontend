import { css } from '@emotion/react'
import UserLayout from '@/components/layouts/userLayout'
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Index = () => {
  return (
    <UserLayout>
      <div css={styles.libraries}>
        <h3
          className="subTitle text-center"
          css={{
            color: 'var(--textColor-black)',
          }}
        >
          Contact Us
        </h3>
        <h4 className="subText text-center">We are here for you</h4>
        <div className="d-flex justify-content-center">
          <div className="col-3" css={styles.contactContainer}>
            <MdLocationOn
              size={35}
              color="var(--primaryColor)"
              style={{ marginTop: '10px', height: '40px' }}
            />
            <div className="title">Address</div>
            <div className="value">
              Lorem ipsum, lorem ipsum , Lorem ipsum, Lorem ipsum, lorem ipsum ,
              Lorem ipsum
            </div>
          </div>
          <div className="col-3" css={styles.contactContainer}>
            <MdPhone
              size={35}
              color="var(--primaryColor)"
              style={{ marginTop: '10px', height: '40px' }}
            />
            <div className="title">Call Us</div>
            <div className="value">
              <div>09 - 9899494795</div>
              <div>09 - 9899494795</div>
              <div>09 - 9899494795</div>
            </div>
          </div>
          <div className="col-3" css={styles.contactContainer}>
            <MdEmail
              size={35}
              color="var(--primaryColor)"
              style={{ marginTop: '10px', height: '40px' }}
            />
            <div className="title">Email Us</div>
            <div className="value">
              <div>tso@gmail.com</div>
              <div>tso@gmail.com</div>
              <div>tso@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div css={styles.socialContainer}>
            <FaFacebookF size={18} />
          </div>
          <div css={styles.socialContainer}>
            <FaInstagram size={18} />
          </div>
          <div css={styles.socialContainer}>
            <FaTwitter size={18} />
          </div>
        </div>
      </div>
    </UserLayout>
  )
}
export default Index
const styles = {
  libraries: css`
    padding: 80px 0px;
    .subTitle {
      font-size: 25px;
    }
    .subText {
      font-size: 20px;
      color: var(--textColor-black);
      font-weight: lighter;
      margin-bottom: 45px;
    }
  `,
  contactContainer: css`
    display: flex;
    flex-direction: column;
    border-top: 6px solid var(--primaryColor);
    padding: 20px;
    background-color: var(--secondaryColor);
    margin-right: 15px;
    align-items: center;
    .title {
      margin-top: 20px;
      font-size: 20px;
      color: var(--primaryColor);
    }
    .value {
      margin-top: 20px;
      font-size: 16px;
      color: var(--textColor-black);
      text-align: center;
    }
  `,
  socialContainer: css`
    width: 45px;
    height: 45px;
    padding: 10px;
    margin-right: 30px;
    border-radius: 25px;
    align-items: center;
    text-align: center;
    background-color: var(--secondaryColor);
  `,
}
