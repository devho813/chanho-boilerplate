import { css } from '@emotion/react'
import React from 'react'

export default function Home() {
  return (
    <div css={homeContainer}>
      <h1>👋 Chanho`s Boilerplate</h1>
      <img css={chanho} src="/assets/chanho.jpeg" alt="chanho" />
    </div>
  )
}

const homeContainer = css`
  margin-top: 15px;
  text-align: center;

  h1 {
    color: #f1c40f;
    font-size: 25px;
  }
`

const chanho = css`
  display: inline-block;
  margin-top: 10px;
  width: 100px;
  border-radius: 5px;
`
