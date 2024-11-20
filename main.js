// Sample data for singers and songs
const singers = {
    singer1: {
        name: "TJ Monterde",
        songs: [
            { title: "Palagi", file: "/musics/Palagi.mp3" },
            { title: "Puhon", file: "/musics/Puhon.mp3" }
        ]
    },
    singer2: {
        name: "Avril Lavigne",
        songs: [
            { title: "When you're Gone", file: "/musics/WYG.mp3" },
            { title: "Wish you were Here", file: "/musics/WYWH.mp3" }
        ]
    },
    singer3: {
        name: "Orange & Lemons",
        songs: [
            { title: "Heaven Knows", file: "/musics/ Heaven Knows.mp3" },
            { title: "Hanggang Kailan", file: "/musics/ Hanggang Kailan.mp3" }
        ]
    }
};

// Function to display songs when a singer is clicked
function showSongs(singerId) {
    const singer = singers[singerId];
    const songList = document.getElementById('songs');
    const singerName = document.getElementById('singer-name');
    const songSection = document.getElementById('song-list');
    const singerList = document.getElementById('singer-list');
    
    // Update singer name
    singerName.textContent = `Songs by ${singer.name}`;

    // Clear previous song list
    songList.innerHTML = '';

    // Add songs dynamically
    singer.songs.forEach(song => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${song.title} <br>
            <audio controls>
                <source src="${song.file}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>`;
        songList.appendChild(li);
    });

    // Hide singer list and show song list
    singerList.classList.add('hidden');
    songSection.classList.remove('hidden');
}

// Function to go back to the singer list
function goBack() {
    document.getElementById('singer-list').classList.remove('hidden');
    document.getElementById('song-list').classList.add('hidden');
}

// Function to open sign-in form
function openSignIn() {
    document.getElementById('signin-form').classList.remove('hidden');
    document.getElementById('singer-list').classList.add('hidden');
    document.getElementById('song-list').classList.add('hidden');
}

// Function to close sign-in form
function closeSignIn() {
    document.getElementById('signin-form').classList.add('hidden');
    document.getElementById('singer-list').classList.remove('hidden');
}
