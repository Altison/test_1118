input.onPinPressed(TouchPin.P0, function () {
    Q3(0, 0)
    Q3(0, 4)
    Q3(4, 0)
    Q3(4, 4)
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    for (let I = 0; I <= 4; I++) {
        for (let j = 0; j <= 4; j++) {
            x = -1
            x = x ** j * I + 2
            if (j % 3 == 0) {
                led.plot(x, 2)
            } else {
                led.plot(2, x)
            }
        }
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
function Q3 (x: number, y: number) {
    basic.clearScreen()
    for (let I = 0; I <= 2; I++) {
        for (let j = 0; j <= I; j++) {
            led.plot(Math.abs(x - I), Math.abs(y - j))
            led.plot(Math.abs(x - j), Math.abs(y - I))
        }
        basic.pause(100)
    }
}
let x = 0
radio.setGroup(5)
