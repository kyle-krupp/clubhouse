import React from 'react'

const containerStyles: React.CSSProperties = {
    width: '1400px',
    margin: '0 auto',
    textAlign: 'center'
}

const Container = (props) => {
    return <div style={containerStyles}>{props.children}</div>
}

export default Container
