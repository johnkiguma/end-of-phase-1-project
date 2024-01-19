
const apiKey = 'https://fortnite-api.com/v1/playlists';
const maps = ['desert', 'forest','slurpy forest','slurpy slurps', 'craggy cliffs'];
const examplePlayerData = [
    { "id": 1, "username": "John", "contact": "john@fortnite.com", "gameMode": "solos", "maps": ["desert", "forest"] },
    { "id": 2, "username": "James", "contact": "james@fortnite.com", "gameMode": "duos", "maps": ["slurpy slurps"] },
    { "id": 3, "username": "leilana", "contact": "leilana@fortnite.com", "gameMode": "trios", "maps": ["craggy cliffs"] },
    { "id": 4, "username": "efra", "contact": "efra@fortnite.com", "gameMode": "squads", "maps": ["slurpy forest"] }
];

document.addEventListener('DOMContentLoaded', function () {
    const profileForm = document.getElementById('profile-form');
    const playersList = document.getElementById('players');
    const mapDropdown = document.getElementById('maps');
    const selectedMapImage = document.getElementById('selected-map-image');

    async function fetchMaps() {
        try {
            const response = await fetch(apiKey);

            if (!response.ok) {
                throw new Error(`Failed to fetch maps: ${response.status}`);
            }

            const data = await response.json();
            const mapData = data.data.playlists;

            mapData.forEach(map => {
                const option = document.createElement('option');
                option.value = map.name;
                option.textContent = map.name;
                option.setAttribute('data-image', map.imageUrl);
                mapDropdown.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching map data:', error);
        }
    }

    fetchMaps(); 

    function fetchPlaylists() {
        examplePlayerData.forEach(player => addPlayerToList(player));
    }

    fetchPlaylists();

    profileForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const contact = document.getElementById('contact').value;
        const gameMode = document.getElementById('game-mode').value;
        const maps = document.getElementById('maps').value.split(',').map(map => map.trim());

        const newPlayer = { username, contact, gameMode, maps };
        addPlayerToList(newPlayer);

        try {
            const response = await fetch(apiKey, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPlayer),
            });
            console.log('Player added successfully:', newPlayer);
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
