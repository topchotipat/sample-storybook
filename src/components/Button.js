import React from 'react'
import styled from 'styled-components'

const SampleButton = styled.button`
  color: red;
`

const Button = (props: Props) => {
    const { text } = props
    return (
        <SampleButton>
            test
        </SampleButton>
    )
}

export default Button;