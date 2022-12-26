import React from 'react'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'
import { CgSearch } from 'react-icons/cg'
const UserHeader = ({ routes }) => {
  const { push } = useRouter()

  const currentLocation = useRouter().asPath
  const handleClick = (path) => {
    push(path)
  }
  return (
    <div className="row pt-5 pb-5" css={styles.header}>
      <div
        className="col-2 d-flex align-items-center justify-content-center"
        css={{ cursor: 'pointer' }}
        onClick={() => handleClick(routes[0].path)}
      >
        <span>LoGo</span>
      </div>
      <div className="col-6 d-flex align-items-center justify-content-between ps-5 pe-5">
        {routes.map((route) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <span
              css={styles.menu({
                active: currentLocation == route.path ? true : false,
              })}
              onClick={() => handleClick(route.path)}
            >
              {route.name}
            </span>
          )
        })}
      </div>
      <div className="col-3 pe-4" css={{ position: 'relative' }}>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />

        <CgSearch className="icon" />
      </div>
    </div>
  )
}
export default UserHeader
const styles = {
  header: css`
    background-color: var(--primaryColor);
    flex-direction: row;
    .form-control {
      border-radius: 0;
      border: 1px solid var(--textColor-white);
      background: transparent;
      padding: 10px 15px;
      width: 100%;
      color: var(--textColor-white);
    }
    .form-control::placeholder {
      color: var(--textColor-white);
      font-weight: lighter;
    }
    .icon {
      width: 25px;
      height: 30px;
      color: var(--textColor-white);
      position: absolute;
      left: 80%;
      top: 50%;
      transform: translateY(-50%);
    }
  `,
  menu: ({ active }) => css`
    font-size: 16px;
    text-align: left;
    color: ${active ? 'var(--secondaryColor)' : 'var(--textColor-white)'};
    cursor: pointer;

    :hover {
      color: var(--secondaryColor);
    }
  `,
}
