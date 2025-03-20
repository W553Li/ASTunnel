import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const nineSign = new GestureDescription('Nine');
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
nineSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
nineSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.70);

//Index
nineSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
nineSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
nineSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
nineSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
nineSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
nineSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
nineSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
nineSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);