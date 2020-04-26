import React, { Fragment, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

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
  } from 'antd';

export const PlayerTable = () => {
    const { players, getPlayers } = useContext(GlobalContext);
    const { deletePlayer } = useContext(GlobalContext);


    useEffect(() => {
        getPlayers();
    });

    const columns = [
      {
        title: '',
        key: 'avatar',
        render: (player) => (
          <Avatar size='large'>
            {`${player.firstName.charAt(0).toUpperCase()}${player.lastName.charAt(0).toUpperCase()}`}
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
              placement='topRight'
              title={`Are you sure to delete ${record.playerId}`} 
              onConfirm={() => deletePlayer(record.playerId)} okText='Yes' cancelText='No'
              onCancel={e => e.stopPropagation()}>
              <Button type='danger' onClick={(e) => e.stopPropagation()}>Delete</Button>
            </Popconfirm>
            <Button style={{marginLeft: '5px'}} type='primary' onClick={() => this.editUser(record)}>Edit</Button>
          </Fragment>
        ),
      }
    ];


    return (
        <Container>
          <Table 
          style={{marginBottom: '100px'}}
            dataSource={players} 
            columns={columns} 
            pagination={false}
            rowKey='playerId'/
            >
        </Container>
    )
}

