import React, { Fragment, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

import Container from '../Container'

import {
    Table,
    Avatar,
    Spin,
    Icon,
    Modal,
    Empty,
    PageHeader,
    Button,
    notification,
    Popconfirm
} from 'antd'

export const PlayerTable = () => {
    const { players, getPlayers } = useContext(GlobalContext)
    const { deletePlayer } = useContext(GlobalContext)

    const openNotificationWithIcon = (type, message, description) =>
        notification[type]({ message, description })

    const deletePlayerAction = (playerId) => {
        deletePlayer(playerId)
            .then(() => {
                openNotificationWithIcon(
                    'success',
                    'Player deleted',
                    `${playerId} was deleted`
                )
                getPlayers()
            })
            .catch((err) => {
                openNotificationWithIcon(
                    'error',
                    'error',
                    `(${err.error.status}) ${err.error.error}`
                )
            })
    }

    useEffect(() => {
        getPlayers()
    }, [])

    const columns = [
        {
            title: '',
            key: 'avatar',
            render: (player) => (
                <Avatar size="large">
                    {`${player.firstName
                        .charAt(0)
                        .toUpperCase()}${player.lastName
                        .charAt(0)
                        .toUpperCase()}`}
                </Avatar>
            )
        },
        {
            title: 'Player Id',
            dataIndex: 'playerId',
            key: 'playerId'
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName'
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName'
        },
        {
            title: 'Batting Average',
            dataIndex: 'battingAverage',
            key: 'battingAverage'
        },
        {
            title: 'Player Type',
            dataIndex: 'playerType',
            key: 'playerType'
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Fragment>
                    <Popconfirm
                        placement="topRight"
                        title={`Are you sure to delete ${record.playerId}`}
                        onConfirm={() => deletePlayerAction(record.playerId)}
                        okText="Yes"
                        cancelText="No"
                        onCancel={(e) => e.stopPropagation()}
                    >
                        <Button
                            type="danger"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Delete
                        </Button>
                    </Popconfirm>
                    {/* <Button
            style={{ marginLeft: "5px" }}
            type="primary"
            onClick={() => editUser(record)}
          >
            Edit
          </Button> */}
                </Fragment>
            )
        }
    ]

    return (
        <Container>
            <Table
                style={{ marginBottom: '100px' }}
                dataSource={players.filter((player) =>
                    player.playerType.includes('HITTER')
                )}
                columns={columns}
                pagination={false}
                rowKey="playerId"
            />
            <Table
                style={{ marginBottom: '100px' }}
                dataSource={players.filter((player) =>
                    player.playerType.includes('PITCHER')
                )}
                columns={columns}
                pagination={false}
                rowKey="playerId"
            />
        </Container>
    )
}
