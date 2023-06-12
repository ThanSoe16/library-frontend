import React from 'react'
import { css } from '@emotion/react'
import ReactPaginate from 'react-paginate'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const Pagination = ({ page, pageCount, total, handlePageClick }) => {
  return (
    <div css={styles.main}>
      <div css={styles.labelTxt}>
        Showing {1 + 20 * (page - 1)} to {total < 20 ? total : 20 * page} of{' '}
        {total} entries
      </div>
      <ReactPaginate
        css={styles.actionGroup}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel={
          <button className="break-link">
            <span
              style={{
                height: '100%',
                verticalAlign: 'middle',
              }}
            >
              ...
            </span>
          </button>
        }
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        activeClassName="active"
        renderOnZeroPageCount={null}
        nextLabel={<MdArrowForwardIos size={12} />}
        containerClassName="pagination"
        previousLabel={<MdArrowBackIosNew size={12} />}
        forcePage={page - 1}
        onPageChange={(e) => handlePageClick(e.selected + 1)}
      />
    </div>
  )
}

export default Pagination
const styles = {
  main: css`
    width: 100%;
    margin-left: 25px;
    display: flex;
    padding: 0px;
    align-items: center;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    ul {
      list-style: none;
      margin-bottom: 0px;
    }
  `,
  labelTxt: css`
    font-size: 12px;
  `,
  actionGroup: css`
    display: flex;
    align-items: center;
    .page-item.active .page-link {
      background: var(--primaryColor);
      color: #ffffff;
      border-radius: 4px;
    }

    .page-item.disabled::marker {
      color: var(--textColor-white);
      background-color: red;
    }

    .page-item:not(:first-of-type) .page-link {
      margin-left: 5px;
    }
    .page-item:not(:last-of-type) .page-link {
      margin-right: 5px;
    }
    .page-link {
      height: 30px;
      font-weight: 600;
      font-size: 12px;
      border-radius: 4px;
      align-items: center;
      display: inline-flex;
      margin: 0rem 1px;
      color: black;
      justify-content: center;
      border: none;
      background-color: var(--textColor-white);
      padding: 6px 8px;
      &:focus {
        outline: none;
      }
      &:hover {
        background: var(--primaryColor);
        color: #ffffff;
        border-radius: 4px;
      }
    }
    .page-item:first-of-type .page-link,
    .page-item:last-of-type .page-link {
      height: 30px;
      font-weight: 600;
      font-size: 12px;
      border-radius: 4px;
      align-items: center;
      display: inline-flex;
      margin: 0rem 1px;
      color: black;
      justify-content: center;
      border: none;
      background: var(--textColor-white);
      padding: 6px 12px;
      :hover {
        background: var(--secondaryColor);
        color: black;
        border-radius: 4px;
      }
    }
    .break-link {
      width: 2rem;
      height: 2rem;
      display: inline-flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      color: black;
      text-decoration: none;
      background-color: var(--textColor-white);
      border: 0px;
      position: relative;
    }
  `,
}
