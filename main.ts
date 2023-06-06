let posx = 0
let posy = 0
let Abstand = 0
let tokx = 0
let toky = 0
input.onButtonPressed(Button.A, function () {
    let y = 0
    let x = 0
    posx = x
    posy = y
    Abstand = Math.abs(tokx - posx) + (toky - posy)
    basic.showNumber(Abstand)
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    toky = randint(0, 4)
    tokx = randint(0, 4)
    led.plot(tokx, toky)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
	
})
