import React from 'react'
import { css } from '@emotion/react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const BookItems = ({
  image,
  title,
  description,
  author,
  price,
  handleView,
}) => {
  return (
    <div css={styles.card}>
      <img src={image} alt="images" height="260" width={'100%'} />
      <div className="body">
        <h1 className="label">
          {title.length > 16 ? `${title.substring(0, 16)}...` : title}
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <span className="subLabel">
            {author.length > 16 ? `${author.substring(0, 16)}...` : author}
          </span>
          <span className="subLabel">{price} Ks</span>
        </div>
        <div className="btnView" onClick={() => handleView()}>
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
    height: 400px;
    background-color: var(--secondaryColor);
    padding: 15px;
    width: 22%;
    margin-bottom: 25px;
    margin-left: 25px;
    .imageContainer {
      height: 70%;
      width: 100%;
      background-color: white;
    }
    .body {
      width: 100%;
      height: 30%;
      margin-top: 20px;
      justify-content: space-between;
    }
    .label {
      height: 20%;
      font-size: 18px;
      color: var(--textColor-black);
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
      font-weight: 600;
    }
  `,
}
