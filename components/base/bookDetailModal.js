import React from 'react'
import { Modal } from 'reactstrap'
import { css } from '@emotion/react'
import { MdClose } from 'react-icons/md'
import BaseButton from './baseButton'

const BookDetailModal = ({
  isOpen = false,
  close = () => {},
  selectedBook = {},
}) => {
  console.log(selectedBook)
  return (
    <Modal size="lg" isOpen={isOpen} toggle={close} css={styles.modal}>
      <div css={styles.headerContainer}>
        <div style={{ cursor: 'pointer' }} onClick={() => close()}>
          <MdClose />
        </div>
      </div>
      <div css={styles.bodyContainer}>
        <div css={styles.bodyTitle}>{selectedBook.title}</div>
        <div style={{ margin: '15px 0px' }}>
          <div css={styles.subTitle}>Author</div>
          <div css={styles.subValue}>{selectedBook.author}</div>
        </div>
        <div className="d-flex justify-content-center w-100">
          <img
            src={selectedBook.image}
            alt="images"
            height="300"
            width={'60%'}
          />
        </div>
        <div className="d-flex">
          <div style={{ margin: '15px 0px', width: '50%' }}>
            <div css={styles.subTitle}>Published Year</div>
            <div css={styles.subValue}>{selectedBook.publishedYear}</div>
          </div>
          <div style={{ margin: '15px 0px', width: '50%' }}>
            <div css={styles.subTitle}>Published</div>
            <div css={styles.subValue}>{selectedBook.publisher}</div>
          </div>
        </div>
        <div className="d-flex">
          <div style={{ margin: '15px 0px', width: '50%' }}>
            <div css={styles.subTitle}>Published House</div>
            <div css={styles.subValue}>{selectedBook.publishedHouse}</div>
          </div>
          <div style={{ margin: '15px 0px', width: '50%' }}>
            <div css={styles.subTitle}>Price</div>
            <div css={styles.subValue}>{selectedBook.price} Ks</div>
          </div>
        </div>
        <div style={{ margin: '15px 0px' }}>
          <div css={styles.subTitle}>Category</div>
          <div css={styles.subValue}>
            {selectedBook.category?.map((item) => {
              return item.name + ','
            })}
          </div>
        </div>
        <div style={{ margin: '15px 0px' }}>
          <div css={styles.subTitle}>Description</div>
          <div css={styles.subValue}>{selectedBook.description}</div>
          <div className="d-flex justify-content-center mt-4">
            <BaseButton
              label={'Close'}
              height={40}
              radius={8}
              onClick={() => close()}
            />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default BookDetailModal
const styles = {
  modal: css`
    .modal-content {
      border-radius: 0px;
    }
  `,
  headerContainer: css`
    background: var(--textColor-white);
    width: 100%;
    padding-top: 15px;
    padding-right: 30px;
    display: flex;
    justify-content: end;
    align-items: center;
  `,
  bodyContainer: css`
    padding: 30px;
  `,
  imageContainer: css`
    height: 200px;
    width: 300px;
    background-color: yellow;
    margin-bottom: 20px;
  `,
  bodyTitle: css`
    text-align: center;
    font-size: 24px;
    margin-bottom: 30px;
  `,
  subTitle: css`
    font-size: 18px;
    border-left: 4px solid var(--primaryColor);
    padding: 5px 10px;
    margin-bottom: 7px;
  `,
  subValue: css`
    font-size: 14px;
  `,
}
