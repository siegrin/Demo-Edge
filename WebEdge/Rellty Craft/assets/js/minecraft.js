// Server IP and Port
const serverIp = 'play.relltycraft.my.id';
const serverIpPort = 50030;

// Constructing the server status URL
const serverStatusURL = `https://api.mcsrvstat.us/bedrock/3/${serverIp}:${serverIpPort}`;

// Function to get server status
async function getServerStatus() {
    try {
        const response = await fetch(serverStatusURL);
        const data = await response.json();

        const serverIpElement = document.getElementById('serverIp');
        const serverPortElement = document.getElementById('serverPort');
        const serverStatusElement = document.getElementById('serverStatus');
        const playersOnElement = document.getElementById('playersOn');
        const playersMaxElement = document.getElementById('playersMax');
        const serverVersionElement = document.getElementById('serverVersion');

        // Set IP and Port
        serverIpElement.textContent = serverIp;
        serverPortElement.textContent = serverIpPort;

        // Set Status
        if (data.online) {
            serverStatusElement.textContent = 'Online';
            serverStatusElement.classList.add('status-online');
            serverStatusElement.classList.remove('status-offline');
            playersOnElement.textContent = data.players.online;
            playersMaxElement.textContent = data.players.max;
            serverVersionElement.textContent = data.version;
        } else {
            serverStatusElement.textContent = 'Offline';
            serverStatusElement.classList.add('status-offline');
            serverStatusElement.classList.remove('status-online');
            playersOnElement.textContent = '0';
            playersMaxElement.textContent = '0';
            serverVersionElement.textContent = 'N/A';
        }
    } catch (error) {
        console.error('Failed to load server data', error);
        document.querySelector('.server-status').innerHTML = '❌ Failed to load server data ❌';
    }
}

// Call the function to get server status
getServerStatus();
