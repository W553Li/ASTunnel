import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const eightSign = new GestureDescription('Eight');
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
eightSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
eightSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.70);

//Index
eightSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
eightSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
eightSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
eightSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
eightSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
eightSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
eightSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
eightSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);