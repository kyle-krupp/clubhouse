import React, { useContext, useState } from 'react'
import Container from '../Container'
import { Button, Avatar, Modal } from 'antd'
import AddPlayerForm from '../forms/AddPlayerForm'
import './Footer.css'
import { GlobalContext } from '../../context/GlobalState'
import { errorNotification } from '../Notification'

const Footer = () => {
    const { players } = useContext(GlobalContext)
    const [isModalVisible, toggleModal] = useState(false)

    return (
        <div className="footer">
            <Container>
                {players.length !== undefined ? (
                    <Avatar
                        style={{
                            backgroundColor: '#f56a00',
                            marginRight: '5px'
                        }}
                        size="large"
                    >
                        {players.length}
                    </Avatar>
                ) : null}
                <Button
                    onClick={() => toggleModal(!isModalVisible)}
                    type="primary"
                >
                    Add new player +
                </Button>
            </Container>
            <Modal
                title="Add new player"
                visible={isModalVisible}
                onOk={() => toggleModal(!isModalVisible)}
                onCancel={() => toggleModal(!isModalVisible)}
                width={1000}
            >
                <AddPlayerForm
                    onSuccess={() => {
                        toggleModal(!isModalVisible)
                    }}
                    onFailure={(error) => {
                        const message = error.error.message
                        const description = error.error.httpStatus
                        errorNotification(message, description)
                    }}
                />
            </Modal>
        </div>
    )
}
export default Footer
