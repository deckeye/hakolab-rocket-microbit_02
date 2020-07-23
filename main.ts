let count = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
pins.servoWritePin(AnalogPin.P0, 90)
basic.pause(1000)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 90)
    while (!(input.buttonIsPressed(Button.A))) {
    	
    }
    count = 5
    for (let index = 0; index < 6; index++) {
        basic.pause(500)
        basic.showNumber(count)
        count += -1
    }
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(1000)
})
