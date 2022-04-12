function Error_sign () {
    music.playTone(988, music.beat(BeatFraction.Whole))
}
basic.forever(function () {
    if (180 <= input.rotation(Rotation.Roll) && input.rotation(Rotation.Roll) <= 360 || input.rotation(Rotation.Roll) >= -110 && input.rotation(Rotation.Roll) <= -10) {
        music.setTempo(300)
        Error_sign()
    }
})
