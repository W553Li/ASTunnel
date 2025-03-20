import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sixSign = new GestureDescription('Six');
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
sixSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
sixSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);

//Index
sixSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
sixSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
sixSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
sixSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
sixSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
sixSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
sixSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
sixSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);