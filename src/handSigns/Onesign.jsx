import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const oneSign = new GestureDescription('One');
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
oneSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.7);
oneSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);

//Index
oneSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
oneSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
oneSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.7);
oneSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
oneSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.7);
oneSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
oneSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.7);
oneSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);