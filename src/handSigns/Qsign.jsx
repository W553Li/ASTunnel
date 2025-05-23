import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const qSign = new GestureDescription('Q');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Vertical Down"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Middle",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Down Left"
//     ]
//   ]

//Thumb
qSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
qSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.70);

//Index
qSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
qSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
qSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
qSign.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.70);
qSign.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 0.70);

//Ring
qSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
qSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.70);
qSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 0.70);

//Pinky
qSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
qSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);
qSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 0.70);
