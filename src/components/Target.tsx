import React from 'react'
import styled from 'styled-components'
import { FaCrosshairs } from 'react-icons/fa'

const TargetIcon = styled.div`
  font-size: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #333333;
  padding: 0 7px;
  margin-left: 8px;
  cursor: pointer;
`

const Target: React.FC = () => {
  return (
    <TargetIcon data-testid="target">
      <FaCrosshairs />
    </TargetIcon>
  )
}

export default Target
