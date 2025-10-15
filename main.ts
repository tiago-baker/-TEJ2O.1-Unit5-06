/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: oct 2025
 * This program gets distance from object
*/

let distanceToObject:number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// find distance to object
input.onButtonPressed(Button.A, function () {
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
)}
