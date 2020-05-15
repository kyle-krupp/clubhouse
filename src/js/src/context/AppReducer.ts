export default (state, action) => {
    switch (action.type) {
        case 'GET_PLAYERS':
            return {
                ...state,
                isFetching: false,
                players: action.payload,
            };
            case 'DELETE_PLAYER':
                return {
                    ...state,
                    players: state.players.filter(
                        (player) => player.id !== action.payload
                    )
                };
            case 'ADD_PlAYER':
                return {
                    ...state,
                    players: [...state.players, action.payload]
                    };
            case 'PLAYER_ERROR':
                return {
                    ...state,
                    error: action.payload,
                 };
                default:
                     return state;
    }
}