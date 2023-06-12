import React from 'react'
import { css } from '@emotion/react'
import LibraryItems from '../base/libraryItems'
import BaseButton from '../base/baseButton'
import { FaFilter } from 'react-icons/fa'
import { useRouter } from 'next/router'

const LibraryList = () => {
  const router = useRouter()
  const libraryItems = [
    {
      id: 1,
      title: 'A-Library',
      image: '.././libraryImg.png',
      description:
        'Lorem, Ipsum, Lorem Ipsum Lorem IpsumLorem Lorem IpsumLorem Ipsum Lorem…..',
    },
    {
      id: 2,
      title: 'B-Library',
      image: '.././libraryImg.png',
      description:
        'Lorem, Ipsum, Lorem Ipsum Lorem IpsumLorem Lorem IpsumLorem Ipsum Lorem…..',
    },
    {
      id: 3,
      title: 'C-Library',
      image: '.././libraryImg.png',
      description:
        'Lorem, Ipsum, Lorem Ipsum Lorem IpsumLorem Lorem IpsumLorem Ipsum Lorem…..',
    },
    {
      id: 4,
      title: 'D-Library',
      image: '.././libraryImg.png',
      description:
        'Lorem, Ipsum, Lorem Ipsum Lorem IpsumLorem Lorem IpsumLorem Ipsum Lorem…..',
    },
  ]

  const handleViewDetail = (id) => {
    router.push({
      pathname: `/user/libraries`,
      query: { id: id, mode: 'detail' },
    })
  }
  return (
    <div css={styles.libraries}>
      <h3
        className="subTitle text-center"
        css={{
          color: 'var(--textColor-black)',
        }}
      >
        Our Library Lists
      </h3>
      <h4 className="subText text-center">
        Today a reader, tomorrow a leader.
      </h4>

      <div
        className="d-flex mb-3 justify-content-between"
        style={{ paddingLeft: '25px' }}
      >
        <BaseButton
          label={'Popular'}
          height={40}
          radius={8}
          enableIcon={true}
          icon={() => <FaFilter />}
        />
        <BaseButton
          label={'Filter'}
          height={40}
          radius={8}
          enableIcon={true}
          icon={() => <FaFilter />}
        />
      </div>

      <div
        style={{
          justifyContent: libraryItems.length < 3 ? 'start' : 'space-between',
        }}
        css={styles.listContainer}
      >
        {libraryItems.map((item, index) => (
          <LibraryItems
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            onClick={() => handleViewDetail(item.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default LibraryList
const styles = {
  libraries: css`
    padding: 60px;
    padding-left: 35px;
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
  listContainer: css`
    display: flex;
    flex-wrap: wrap;
  `,
}
