import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const fiveSign = new GestureDescription('Five');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
fiveSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
fiveSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);

//Index
fiveSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
fiveSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
fiveSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
fiveSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
fiveSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
fiveSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
fiveSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
fiveSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);