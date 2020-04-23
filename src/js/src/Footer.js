import React from 'react';
import Container from './Container';
import { Button, Avatar } from 'antd';
import './Footer.css';

const Footer = (props) => (
    <div className='footer'>
        <Container>
            {props.numberOfPlayers !== undefined ?
                <Avatar 
                    style={{backgroundColor: '#f56a00', marginRight: '5px'}}
                    size='large'>{props.numberOfPlayers}</Avatar> : null
            }
            <Button onClick={() => props.handleAddPlayerClickEvent()} type='primary'>Add new player +</Button>
        </Container>
    </div>
);

export default Footer;