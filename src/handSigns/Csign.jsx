import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const cSign = new GestureDescription('C');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Up Right"
//     ]
//   ]

//Thumb
cSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
cSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.6);
cSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.6);

//Index
cSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
cSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.6);
cSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.6);

//Middle
cSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
cSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.6);
cSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.6);

//Ring
cSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
cSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.6);
cSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.6);

//Pinky
cSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
cSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.6);
cSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.6);