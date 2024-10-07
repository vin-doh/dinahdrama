// JavaScript to handle audio playback
document.querySelectorAll('.audio-button').forEach(button => {
    button.addEventListener('click', function() {
        // Stop all other audios first
        document.querySelectorAll('audio').forEach(audio => audio.pause());

        // Play the specific audio
        const audioId = this.getAttribute('data-audio');
        const audioElement = document.getElementById(audioId);

        // If audio exists, play it and reset only non-played button styles
        if (audioElement) {
            audioElement.play();

            // Change button color to indicate active playing
            if (this.style.backgroundColor !== 'blue') {
                this.style.backgroundColor = '#45a049';  // Dark green while playing
            }

            // When the audio ends, permanently change button color to blue
            audioElement.onended = () => {
                this.style.backgroundColor = 'blue';
            };
        }
    });
});
