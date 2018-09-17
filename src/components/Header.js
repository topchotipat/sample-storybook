import React from 'react'
import styled from 'styled-components'

const SampleHeader = styled.h1.attrs({
    isbig: props => props.isbig ? '3em' : '2em'
})`
    font-size: ${props => props.isbig};
  `

const Header = (props: Props) => {
    const { text } = props
    return (
        <SampleHeader>
            <p>{text}</p>
        </SampleHeader>
    )
}

export default Header;