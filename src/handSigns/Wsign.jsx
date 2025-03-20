import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const wSign = new GestureDescription('W');
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
wSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
wSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.70);
wSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);

//Index
wSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
wSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);
wSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
wSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
wSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
wSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
wSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
wSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.70);
wSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.70);

//Pinky
wSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
wSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 0.70);
wSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);

