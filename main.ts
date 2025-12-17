/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Sep 2020
 * This program ...
*/
// setup
radio.setGroup(15)
basic.showIcon(IconNames.Happy)

// receive messages

radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
   
})