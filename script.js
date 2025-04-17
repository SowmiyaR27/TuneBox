function togglePlay(button) {
	const player = button.closest(".player");
	const audio = player.querySelector(".audio-player");
	const volumeSlider = player.querySelector(".volume-slider");

	// Pause all other audios
	document.querySelectorAll(".audio-player").forEach((a) => {
		if (a !== audio) a.pause();
	});

	// Toggle play/pause
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}

	// Set initial volume
	audio.volume = volumeSlider.value;

	// Volume control
	volumeSlider.addEventListener("input", () => {
		audio.volume = volumeSlider.value;
	});
}

// Function to handle the flip card effect

document.querySelectorAll(".flip-card").forEach((card) => {
	card.addEventListener("click", () => {
		card.classList.toggle("flipped");
	});
});
