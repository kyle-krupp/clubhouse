import React, { useContext } from 'react';
import Container from '../../Container';
import { Button, Avatar } from 'antd';
import './Footer.css';
import { GlobalContext } from '../../context/GlobalState';

const Footer = () =>  {
    const { players } = useContext(GlobalContext)


    return (
    <div className='footer'>
        <Container>
            {players.numberOfPlayers !== undefined ?
                <Avatar 
                    style={{backgroundColor: '#f56a00', marginRight: '5px'}}
                    size='large'>{players.numberOfPlayers}</Avatar> : null
            }
            <Button onClick={() => players.handleAddPlayerClickEvent()} type='primary'>Add new player +</Button>
        </Container>
    </div>
);
        }
export default Footer;