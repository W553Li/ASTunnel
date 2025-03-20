import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const threeSign = new GestureDescription('Three');
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
threeSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
threeSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);

//Index
threeSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
threeSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
threeSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
threeSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
threeSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
threeSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
threeSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
threeSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);