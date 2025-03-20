import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const eSign = new GestureDescription('E');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Half Curl",
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
//       "Vertical Up"
//     ]
//   ]

//Thumb
eSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.7);
eSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.50);
eSign.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.50);

//Index
eSign.addCurl(Finger.Index, FingerCurl.FullCurl, 0.7);
eSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
eSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.7);
eSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
eSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.7);
eSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
eSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.7);
eSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

