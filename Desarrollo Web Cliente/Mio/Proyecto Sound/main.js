document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const seekBar = document.getElementById('seek-bar');
    const songTitle = document.getElementById('song-title');
    const likeBtn = document.getElementById('like-btn');

    let isPlaying = false;

    // Puedes agregar las canciones dinámicamente a través de JavaScript
    const songList = [
        { title: 'Canción 1', source: 'cancion1.mp3' },
        { title: 'Canción 2', source: 'cancion2.mp3' },
        // Agrega más canciones según sea necesario
    ];

    let currentSongIndex = 0;

    function loadAndPlaySong(index) {
        const selectedSong = songList[index];
        audioPlayer.src = selectedSong.source;
        songTitle.textContent = selectedSong.title;
        audioPlayer.play();
        isPlaying = true;
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }

    function togglePlayPause() {
        if (isPlaying) {
            audioPlayer.pause();
            isPlaying = false;
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            audioPlayer.play();
            isPlaying = true;
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
    }

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % songList.length;
        loadAndPlaySong(currentSongIndex);
    }

    function playPrevSong() {
        currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
        loadAndPlaySong(currentSongIndex);
    }

    function likeSong() {
        // Agrega lógica para manejar la acción de "like"
        // Puedes cambiar el ícono o aplicar algún estilo al botón cuando se haya dado "like"
    }

    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', playPrevSong);
    nextBtn.addEventListener('click', playNextSong);
    likeBtn.addEventListener('click', likeSong);

    // Evento para actualizar la barra de progreso
    audioPlayer.addEventListener('timeupdate', function () {
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        seekBar.value = percent;
    });

    // Evento para cambiar la posición de reproducción al hacer clic en la barra de progreso
    seekBar.addEventListener('input', function () {
        const newPosition = (seekBar.value * audioPlayer.duration) / 100;
        audioPlayer.currentTime = newPosition;
    });

    // Evento para cargar y reproducir la primera canción al cargar la página
    loadAndPlaySong(currentSongIndex);
});
