import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const fourSign = new GestureDescription('Four');
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
fourSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
fourSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.70);
fourSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);

//Index
fourSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
fourSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
fourSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
fourSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
fourSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
fourSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
fourSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
fourSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);