import React from 'react'
import { css } from '@emotion/react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const LibraryItems = ({ image, title, description, onClick }) => {
  return (
    <div className="col-lg-3 col-md-6" css={styles.card}>
      <div className="imageContainer">{image}</div>
      <div className="body">
        <h1 className="label">{title}</h1>
        <p className="description">{description}</p>
        <div className="btnView" onClick={() => onClick()}>
          <span className="btnText">View Detail</span>
          <FaAngleDoubleRight />
        </div>
      </div>
    </div>
  )
}
export default LibraryItems
const styles = {
  card: css`
    height: 400px;
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
      background-color: var(--primaryColor);
      height: 50%;
      border-top: 1px solid var(--primaryColor);
    }
    .label {
      height: 20%;
      font-size: 18px;
      color: var(--textColor-white);
    }
    .description {
      font-size: 14px;
      color: var(--textColor-white);
      font-weight: lighter;
      height: 45%;
    }

    .btnView {
      height: 25%;
      display: flex;
      justify-content: end;
      align-items: center;
      cursor: pointer;
      color: var(--textColor-white);
    }
    .btnText {
      font-size: 14px;
      color: var(--textColor-white);
      margin-right: 10px;
    }
  `,
}
