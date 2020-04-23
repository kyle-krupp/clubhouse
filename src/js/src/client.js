import fetch from 'unfetch';

const checkStatus = response => {
    if (response.ok) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        response.json().then(e => {
            error.error = e;
        });
        return Promise.reject(error);
    }
}

export const getAllPlayers = () => 
    fetch('/players').then(checkStatus);

export const addNewPlayer = player =>
    fetch('/players', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(player)
    })
    .then(checkStatus);

export const updatePlayer = (playerId, player) =>
    fetch(`/players/${playerId}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(player)
    })
    .then(checkStatus);

export const deletePlayer = playerId =>
    fetch(`/players/${playerId}`, {
        method: 'DELETE'
    })
    .then(checkStatus);

