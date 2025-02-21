const fill = document.getElementById("heart-fill")
const heart_container = document.getElementById("heart-container")
const letter_template = document.getElementById("letter-template").content.cloneNode(true)
const container = document.getElementById("container")
const title = document.getElementById("title")
const spotify = document.getElementById("spotify-bootleg").content.cloneNode(true)
let height = 0
const heart_fill = setInterval(() => {
	height = Math.max(0, height - 0.1)
	fill.style.transform = `translateY(${100-height}%)`
}, 10)
function sus() {
	height = Math.min(height + 10, 100)
	if (height === 100) {
		clearInterval(heart_fill)
		heart_container.classList.add("fade")
	}
	heart_container.ontransitionend = () => {
		heart_container.remove()
		title.remove()
		spotify_bootleg()
	}
}
function spotify_bootleg() {
	let current = spotify.firstElementChild
	if (current !== null) {
		let appended_current = container.appendChild(current)
		appended_current.onanimationend = () => {
			appended_current.remove()
			spotify_bootleg()
		}
	} else {
		container.appendChild(letter_template)
	}
}