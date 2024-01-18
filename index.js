document.addEventListener('DOMContentLoaded', function () {
    const profileForm = document.getElementById('profile-form');
    const playersList = document.getElementById('players');
    const mapDropdown = document.getElementById('map');
    const selectedMapImage = document.getElementById('selected-map-image');

    const Players = [
        { username: 'John', contact: 'john@fortnite.com', gameMode: 'solos', maps:'desert'},
        { username: 'James', contact: 'james@fortnite.com', gameMode:  'duos', maps: 'slurpy slurps'},
        { username: 'leilana', contact: 'leilana@fortnite.com', gameMode: 'trios', maps: 'craggy clifs'},
        { username: 'efra', contact: 'efra@fortnite.com', gameMode: 'squads', maps: 'slurpy forest'},
        
    ];

    Players.forEach(player => addPlayerToList(player));

    profileForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const contact = document.getElementById('contact').value;
        const gameMode = document.getElementById('game-mode').value;
        const maps = document.getElementById('maps').value;

        const newPlayer = { username, contact, gameMode, maps };

        try {
    // const response = await fetch('https://fortnite-api.com/v1/map', {
            const apiEndpoint = 'https://fortnite-api.com/v1/map';
            const apiKey = 'https://fortnite-api.com';
        

            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify(newPlayer)
            });

            if (response.ok) {
                const addedPlayer = await response.json();
                addPlayerToList(addedPlayer.data);
            } else {
                console.error(`Error: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error making API request:', error);
        }

        profileForm.reset();
    });

    mapDropdown.addEventListener('change', function () {
        const selectedMapOption = mapDropdown.options[mapDropdown.selectedIndex];
        const mapImageURL = selectedMapOption.getAttribute('data-image');
        selectedMapImage.src = mapImageURL;
    });

    function addPlayerToList(player) {
        const listItem = document.createElement('li');
        listItem.textContent = `${player.username} - ${player.contact} - ${player.gameMode} - Maps: ${player.maps.join(', ')}`;
        playersList.appendChild(listItem);
    }
});
