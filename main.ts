function Error_sign () {
    music.playTone(988, music.beat(BeatFraction.Sixteenth))
}
input.onGesture(Gesture.SixG, function () {
	
})
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) >= 20) {
        music.setTempo(1000)
        Error_sign()
    }
})
