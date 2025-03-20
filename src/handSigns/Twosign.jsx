import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const twoSign = new GestureDescription('Two');
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
twoSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
twoSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);

//Index
twoSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
twoSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
twoSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
twoSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
twoSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
twoSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
twoSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
twoSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);