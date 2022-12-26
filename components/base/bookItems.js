import React from 'react'
import { css } from '@emotion/react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const BookItems = ({ image, title, description, author, price, onClick }) => {
  return (
    <div css={styles.card}>
      <div className="imageContainer">{image}</div>
      <div className="body">
        <h1 className="label">{title}</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <span className="subLabel">{author}</span>
          <span className="subLabel">{price} Ks</span>
        </div>
        <p className="description">{description}</p>
        <div className="btnView" onClick={() => onClick()}>
          <span className="btnText">View Detail</span>
          <FaAngleDoubleRight />
        </div>
      </div>
    </div>
  )
}
export default BookItems
const styles = {
  card: css`
    height: 450px;
    border: 1px solid var(--primaryColor);
    width: 30%;
    margin-bottom: 25px;
    margin-right: 25px;
    .imageContainer {
      height: 50%;
      width: 100%;
    }
    .body {
      width: 100%;
      padding: 20px;
      background-color: var(--textColor-white);
      height: 50%;
      border-top: 1px solid var(--primaryColor);
    }
    .label {
      height: 20%;
      font-size: 18px;
      color: var(--textColor-black);
    }
    .description {
      font-size: 14px;
      color: var(--textColor-black);
      font-weight: lighter;
      height: 35%;
    }
    .subLabel {
      font-size: 14px;
      color: var(--textColor-black);
      font-weight: normal;
    }

    .btnView {
      height: 25%;
      display: flex;
      justify-content: end;
      align-items: center;
      cursor: pointer;
      color: var(--textColor-black);
    }
    .btnText {
      font-size: 14px;
      color: var(--textColor-black);
      margin-right: 10px;
    }
  `,
}
