import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const sSign = new GestureDescription('S');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
sSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
sSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);
sSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);

//Index
sSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.70);

//Middle
sSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.70);

//Ring
sSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.70);

//Pinky
sSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
sSign.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.70);

