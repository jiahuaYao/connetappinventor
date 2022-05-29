bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . #
        # . . # .
        # . # . .
        # # . . .
        # # # # .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # . . . .
        . # . . #
        . . # . #
        . . . # #
        . # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteNumber(1)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    bluetooth.uartWriteNumber(2)
})
basic.showIcon(IconNames.Heart)
basic.pause(200)
bluetooth.startUartService()
