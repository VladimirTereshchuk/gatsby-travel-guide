import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h4>
        <span className="title">{title}</span> <span>{subtitle}</span>
      </h4>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  /* border: 1px solid red; */
  text-transform: uppercase;
  font-size: 2.4rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    display: inline-block;
    /* display: block; */
  }
  @media (max-width: 576px) {
    font-size: 1.6rem;
    /* margin-bottom: 0.1rem; */

    /* span {
      display: inline-block;

      margin: 0 0.35rem;
    } */
  }
`

export default Title
