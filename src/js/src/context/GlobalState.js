import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';



// Initial State
const initialState = {
    players: [],
    selectedPlayer: {},
    loading: false,
    isAddPlayerModalVisible: false
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

async function getPlayers() {
    try {
        const res = await axios.get('/players');
        dispatch({
            type: 'GET_PLAYERS',
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: 'PLAYER_ERROR',
            payload: err.response.error
        });
    }
}

async function deletePlayer(playerId) {
    try {
        await axios.delete(`/players/${playerId}`);
        dispatch({
            type: 'DELETE_PLAYER',
            payload: playerId
        });
    } catch (err) {
        dispatch({
            type: 'PLAYER_ERROR',
            payload: err.response.data.error
        })
    }
}

async function addPlayer(player) {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post('/players', player, config);
        dispatch({
            type: 'ADD_PLAYER',
            payload: res.data.data
        })
    } catch (err) {
        dispatch({
            type: 'PLAYER_ERROR',
            payload: err.response.data.error
        });
    }
}

return (
    <GlobalContext.Provider
    value={{
        players: state.players,
        deletePlayer,
        addPlayer,
        getPlayers,
        error: state.error,
        loading: state.loading
    }}
    >
        {children}
    </GlobalContext.Provider>
)




}

// Actions