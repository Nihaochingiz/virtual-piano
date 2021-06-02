
const PIANO_KEY = ['z','x','c','v','b','n','m']
const PIANO_KEY_SHARP= ['s','d','g','h','g']




const keys = document.querySelectorAll('.key');
const pianoKeys = document.querySelectorAll('.key.piano-key');
const pianoKeysSharp = document.querySelectorAll('.key.piano-key sharp');

keys.forEach(key => {
	key.addEventListener('click', () => playNote(key))

})


document.addEventListener('keydown', e => {
	const key = e.key
	const PianoKeyIndex = PIANO_KEY.indexOf(key)
	const PianoKeyIndexSharp = PIANO_KEY_SHARP.indexOf(key)


	if (PianoKeyIndex > -1) playNote(pianoKeys [PianoKeyIndex ])
		if (PianoKeyIndexSharp > -1) playNote(pianoKeysSharp [PianoKeyIndexSharp ])
})


 function playNote(key ) {
 	const noteAudio = document.getElementById(key.dataset.note)
 	noteAudio.currentTime = 0
 	noteAudio.play()
 	key.classList.add('active')
 }