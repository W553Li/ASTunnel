import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sevenSign = new GestureDescription('Seven');
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
sevenSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
sevenSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);

//Index
sevenSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
sevenSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
sevenSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
sevenSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
sevenSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
sevenSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 0.70);

//Pinky
sevenSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
sevenSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);