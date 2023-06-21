input.onButtonPressed(Button.A, function () {
    basic.showString("correct")
    music.play(music.stringPlayable("G B E D A E B - ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("nearly")
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # # # .
        . # . # .
        `)
    music.play(music.stringPlayable("- D C A G A A - ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("wrong")
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.play(music.stringPlayable("- C E G E G - - ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
