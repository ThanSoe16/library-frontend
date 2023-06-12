import React, { useState } from 'react'
import { css } from '@emotion/react'
import BookItems from '../base/bookItems'
import Pagination from '../base/pagination'
import BookDetailModal from '../base/bookDetailModal'

const LibraryDetail = () => {
  const bookItems = [
    {
      id: 1,
      title: 'Milk and Honey',
      author: 'Rupi Kaur',
      price: 3000,
      image: '.././book_simple.jpg',
      publishedYear: 2012,
      publisher: 'Thomas',
      publishedHouse: 'Bright Books',
      category: [
        { name: 'Dictionary' },
        { name: 'Translate' },
        { name: 'Education' },
        { name: 'Fiction' },
        { name: 'Thriller' },
        { name: 'Funny' },
        { name: 'Romance' },
      ],
      description:
        'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,',
    },
    {
      id: 2,
      title: 'A book full of hope',
      author: 'Rupi Kaur',
      price: 3000,
      image: '.././book_simple.jpg',
      publishedYear: 2012,
      publisher: 'Thomas',
      publishedHouse: 'Bright Books',
      category: [
        { name: 'Dictionary' },
        { name: 'Translate' },
        { name: 'Education' },
        { name: 'Fiction' },
        { name: 'Thriller' },
        { name: 'Funny' },
        { name: 'Romance' },
      ],
      description:
        'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,',
    },
    {
      id: 3,
      title: 'RSALMS',
      author: 'Rupi Kaur',
      price: 3000,
      image: '.././book_simple.jpg',
      publishedYear: 2012,
      publisher: 'Thomas',
      publishedHouse: 'Bright Books',
      category: [
        { name: 'Dictionary' },
        { name: 'Translate' },
        { name: 'Education' },
        { name: 'Fiction' },
        { name: 'Thriller' },
        { name: 'Funny' },
        { name: 'Romance' },
      ],
      description:
        'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,',
    },
    {
      id: 4,
      title: '101 Essays that will change...',
      author: 'Rupi Kaur',
      price: 3000,
      image: '.././book_simple.jpg',
      publishedYear: 2012,
      publisher: 'Thomas',
      publishedHouse: 'Bright Books',
      category: [
        { name: 'Dictionary' },
        { name: 'Translate' },
        { name: 'Education' },
        { name: 'Fiction' },
        { name: 'Thriller' },
        { name: 'Funny' },
        { name: 'Romance' },
      ],
      description:
        'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,',
    },
  ]
  const [detailModalOpen, setDetailModalOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState([])
  return (
    <div css={styles.libraries}>
      <div css={styles.libraryDetail}>
        <div className="title">A Library</div>
        <div className="d-flex mt-4">
          <div className="w-50 me-2">
            <img
              src={'.././libraryImg.png'}
              alt="images"
              height="260"
              width={'100%'}
            />
            <div className="txt">
              No(124),Bogyoke Road, Latha Township, Yangon
            </div>
          </div>
          <div className="w-50 ms-2">
            <img
              src={'.././libraryImg.png'}
              alt="images"
              height="260"
              width={'100%'}
            />
            <div className="txt">09 13234344, 09 43232432224, 09 2443434</div>
          </div>
        </div>
        <div className="txt mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.Sunt in culpa
          qui officia deserunt mollit anim id est laborum. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident.
        </div>
      </div>
      <div css={styles.bookList}>
        <div className="title">A Library Book List</div>
        <div className="txt" style={{ textAlign: 'center' }}>
          Today a reader, tomorrow a leader
        </div>
        <div
          className="d-flex"
          style={{
            alignItems: 'center',
            marginLeft: '25px',
            marginTop: '20px',
          }}
        >
          <div className="me-4">Search: </div>
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div
          css={styles.listContainer}
          style={{
            justifyContent: bookItems.length < 4 ? 'start' : 'space-between',
          }}
        >
          {bookItems.map((item) => (
            <BookItems
              title={item.title}
              author={item.author}
              price={item.price}
              image={item.image}
              key={item.id}
              handleView={() => {
                setSelectedBook(item)
                setDetailModalOpen(true)
              }}
            />
          ))}
        </div>

        <Pagination
          page={1}
          total={bookItems.length}
          pageCount={bookItems.length / 20 > 1 ? bookItems.length / 20 : 1}
        />
      </div>
      <BookDetailModal
        isOpen={detailModalOpen}
        selectedBook={selectedBook}
        close={() => setDetailModalOpen(false)}
      />
    </div>
  )
}

export default LibraryDetail
const styles = {
  libraries: css`
    padding: 60px;
    padding-left: 35px;
  `,
  libraryDetail: css`
    margin-left: 25px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(30, 30, 30, 0.2);
    .title {
      font-size: 36px;
      text-align: center;
    }
    .txt {
      font-size: 18px;
      margin-top: 20px;
    }
  `,
  listContainer: css`
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
  `,
  divider: css`
    background-color: red;
    height: 5;
    width: 100%;
  `,
  bookList: css`
    padding: 40px 0px;
    .title {
      font-size: 36px;
      text-align: center;
    }
    .txt {
      font-size: 18px;
      margin-top: 20px;
    }
    .form-control {
      border-radius: 0;
      border: 1px solid #3a2f15;
      background: transparent;
      padding: 5px 15px;
      width: 100%;
      color: #3a2f15;
      max-width: 250px;
    }
    .form-control::placeholder {
      color: #3a2f15;
      font-weight: lighter;
    }
  `,
}
