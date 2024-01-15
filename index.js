document.addEventListener('DOMContentLoaded', function () {
    // Get the form and player list elements
    const profileForm = document.getElementById('profile-form');
    const playersList = document.getElementById('players');

    // Example players
    const examplePlayers = [
        { username: 'John', contact: 'john@outlook', gameMode: 'duos' },
        { username: 'James', contact: 'james@outlook', gameMode: 'squads' },
        { username: 'Jonah', contact: 'jonah@outlook', gameMode: 'trios' }
    ];

    // Add example players to the list
    examplePlayers.forEach(player => addPlayerToList(player));

    // Event listener for form submission
    profileForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get user input values
        const username = document.getElementById('username').value;
        const contact = document.getElementById('contact').value;
        const gameMode = document.getElementById('game-mode').value;

        // Add the player to the list
        addPlayerToList({ username, contact, gameMode });

        // You can save the player information to a database or perform any other necessary actions here

        // Clear the form fields
        profileForm.reset();
    });

    // Function to add a player to the list
    function addPlayerToList(player) {
        const listItem = document.createElement('li');
        listItem.textContent = `${player.username} - ${player.contact} - ${player.gameMode}`;
        playersList.appendChild(listItem);
    }
});
