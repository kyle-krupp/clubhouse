import React from 'react';
import { PlayerTable } from './components/PlayerTable'
import Footer from './components/footer/Footer'
import './App.css';
import { GlobalProvider } from './context/GlobalState';

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

const getIndicatorIcon = () => <Icon type="loading" style={{ fontSize: 24 }} spin />;



const App = () => (
    <GlobalProvider>
       <PlayerTable/>
       <Footer/>
    </GlobalProvider>
  )

// class App extends Component {

//   state = {
//     players: [],
//     isFetching: false,
//     selectedPlayer: {},
//     isAddPlayerModalVisible: false,
//     isEditPlayerModalVisible: false,
//   }

//   componentDidMount () {
//     this.fetchPlayers();
//   }

//   openAddPlayerModal = () => this.setState({isAddPlayerModalVisible: true})

//   closeAddPlayerModal = () => this.setState({isAddPlayerModalVisible: false})

//   openEditPlayerModal = () => this.setState({ isEditPlayerModalVisible: true })
  
//   closeEditPlayerModal = () => this.setState({ isEditPlayerModalVisible: false })

//   openNotificationWithIcon = (type, message, description) => notification[type]({message, description});

  // fetchPlayers = () => {
  //   this.setState({
  //     isFetching: true
  //   });
  //   getAllPlayers()
  //     .then(res => res.json()
  //     .then(players => {
  //       console.log(players);
  //       this.setState({
  //         players,
  //         isFetching: false
  //       });
  //     }))
  //     .catch(error => {
  //       console.log(error.error);
  //       const message = error.error.message;
  //       const description = error.error.error;
  //       errorNotification(message, description);
  //       this.setState({
  //         isFetching: false
  //       });
  //     });
  // }

//   editUser = selectedPlayer => {
//     this.setState({ selectedPlayer });
//     this.openEditPlayerModal();
//   }

//   updatePlayerFormSubmitter = player => {
//     updatePlayer(player.playerId, player).then(() => {
//       this.openNotificationWithIcon('success', 'Player updated', `${player.playerId} was updated`);
//       this.closeEditPlayerModal();
//       this.fetchPlayers();
//     }).catch(err => {
//       console.error(err.error);
//       this.openNotificationWithIcon('error', 'error', `(${err.error.status}) ${err.error.error}`);
//     });
//   }

//   deletePlayer = playerId => {
//     deletePlayer(playerId).then(() => {
//       this.openNotificationWithIcon('success', 'Player deleted', `${playerId} was deleted`);
//       this.fetchPlayers();
//     }).catch(err => {
//       this.openNotificationWithIcon('error', 'error', `(${err.error.status}) ${err.error.error}`);
//     });
//   }

//   render() {

//     const { players, isFetching, isAddPlayerModalVisible } = this.state;

//     const commonElements = () => (
//       <div>
//         <Modal
//           title='Add new player'
//           visible={isAddPlayerModalVisible}
//           onOk={this.closeAddPlayerModal}
//           onCancel={this.closeAddPlayerModal}
//           width={1000}>
//           <AddPlayerForm
//             onSuccess={() => {
//               this.closeAddPlayerModal(); 
//               this.fetchPlayers();
//             }}
//             onFailure={(error) => {
//               const message = error.error.message;
//               const description = error.error.httpStatus;
//               errorNotification(message, description);
//             }}
//           />
//         </Modal>

//         <Modal
//           title='Edit'
//           visible={this.state.isEditPlayerModalVisible}
//           onOk={this.closeEditPlayerModal}
//           onCancel={this.closeEditPlayerModal}
//           width={1000}>
          
//           <PageHeader title={`${this.state.selectedPlayer.playerId}`}/>
          
//           <EditPlayerForm 
//             initialValues={this.state.selectedPlayer} 
//             submitter={this.updatePlayerFormSubmitter}/>
//         </Modal>

//         <Footer
//           numberOfPlayers={players.length}
//           handleAddPlayerClickEvent={this.openAddPlayerModal}
//         />  
//       </div>
//     )

//     if (isFetching) {
//       return (
//         <Container>
//           <Spin indicator={getIndicatorIcon()}/>
//         </Container>
//       );
//     }

//     if (players && players.length) {
//       const columns = [
//         {
//           title: '',
//           key: 'avatar',
//           render: (text, player) => (
//             <Avatar size='large'>
//               {`${player.firstName.charAt(0).toUpperCase()}${player.lastName.charAt(0).toUpperCase()}`}
//             </Avatar>
//           )
//         },
//         {
//           title: 'Player Id',
//           dataIndex: 'playerId',
//           key: 'playerId'
//         },
//         {
//           title: 'First Name',
//           dataIndex: 'firstName',
//           key: 'firstName'
//         },
//         {
//           title: 'Last Name',
//           dataIndex: 'lastName',
//           key: 'lastName'
//         },
//         {
//           title: 'Batting Average',
//           dataIndex: 'battingAverage',
//           key: 'battingAverage'
//         },
//         {
//           title: 'Player Type',
//           dataIndex: 'playerType',
//           key: 'playerType'
//         },
//         {
//           title: 'Action',
//           key: 'action',
//           render: (text, record) => (
//             <Fragment>
//               <Popconfirm
//                 placement='topRight'
//                 title={`Are you sure to delete ${record.playerId}`} 
//                 onConfirm={() => this.deletePlayer(record.playerId)} okText='Yes' cancelText='No'
//                 onCancel={e => e.stopPropagation()}>
//                 <Button type='danger' onClick={(e) => e.stopPropagation()}>Delete</Button>
//               </Popconfirm>
//               <Button style={{marginLeft: '5px'}} type='primary' onClick={() => this.editUser(record)}>Edit</Button>
//             </Fragment>
//           ),
//         }
//       ];

//       return (
//         <Container>
//           <Table 
//             style={{marginBottom: '100px'}}
//             dataSource={players} 
//             columns={columns} 
//             pagination={false}
//             rowKey='playerId'/>
//           {commonElements()}
//         </Container>
//       );

//     }

//     return (
//       <Container>
//         <Empty description={
//           <div className="noData">
//             <h1>Looks like you've got an empty clubhouse 
//             <br />
//             <span role="img" aria-label="frowny face">⚾</span>
//             <br/>
//             Add a new player to get started!
//           </h1>
//           </div>
          
//         }/>
//         {commonElements()}
//       </Container>
//     )
//   }

export default App;
