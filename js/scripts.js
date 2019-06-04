// var addCap = "";
// var L1 = "";
// var L2 = "";
// var sentenceOG = "";
//
//
// function mainFoo() {
//
// sentence = prompt("Please enter a sentence.");
// sentenceOG = sentence;
// function capFL(sentence) {
// 	return sentence.charAt(0).toUpperCase() + sentence.slice(1);
// };
//
// L1 = sentence.charAt(0).toUpperCase();
//
//
// var sentence2 = capFL(sentence);
// var end = sentence.length - 1;
//
//
// /* function capLL(sentence,end){
//   return sentence.charAt(sentence.length).toUpperCase() + 		sentence.slice(sentence.length);
// } */
//
// // function capLL(sentence,end){
// // 	return sentence2.charAt(0).toUpperCase() + sentence2.slice(3);
// //   }
// //
// // confirm("continue?");
// //
// // console.log(capLL(sentence));
//
// // var letter = function(end) {
// //   return sentence2.charAt(end).toUpperCase();
// // }
//
// // console.log(letter);
//
// function LL(end) {
//   return sentence2.slice(0, end) + sentence2.charAt(end).toUpperCase()
// };
//
// L2 = sentence2.charAt(end).toUpperCase();
//
// console.log(L1 + L2);
// console.log(L2 + L1);
//
// var sentence3 = LL(end);
// var twoCaps = L1 + L2;
// var twoCapsR = L2 + L1;
// console.log(sentence3);
// var addCap = sentence + twoCapsR;
// console.log(addCap);
// return sentenceOG;
// };
// mainFoo();
// function fourthFunc(sentenceOG) {
//   var realLength = sentenceOG.length;
//   var midStr = realLength / 2;
//   midStr = Math.floor(midStr);
//   console.log(midStr);
//   console.log(realLength);
//   var midChar = sentenceOG.charAt(midStr);
//   console.log(midChar);
//   console.log(midChar);
// };
// fourthFunc(sentenceOG);
// console.log(addCap);
////////////////////////////////////////////////////////////////////////////////////////

//variables
var sentence = "";
var firstLetter = "";
var lastLetter = "";
var lettersCombined = "";
var lettersCombinedR = "";
var concSentence = "";
var midCharacter = "";

sentence = prompt("Please enter a sentence.");



function firstLastLetterfunc() {
	function firstLetterfunc() {
	 return sentence.charAt(0).toUpperCase();
	};

	firstLetter = firstLetterfunc();

	function LastLetterfunc() {
		return sentence.charAt(sentence.length - 1).toUpperCase();
	};

	lastLetter = LastLetterfunc();

	lettersCombined = firstLetter + lastLetter;

};

function lettersCombinedRfunc() {
	lettersCombinedR = lastLetter + firstLetter;
}

function bothFuncs() {
	firstLastLetterfunc();
	lettersCombinedRfunc();
	concSentence = sentence + lettersCombinedR;

};
function midCharFunc() {
	var midChar = sentence.length / 2;
	var midCharRound = Math.floor(midChar);
	midCharacter = sentence.charAt(midCharRound);
	concSentence = midCharacter + concSentence;
}

// firstLastLetterfunc();
// lettersCombinedRfunc();
bothFuncs();
midCharFunc();

console.log(sentence);
console.log(firstLetter);
console.log(lastLetter);
console.log(lettersCombined);
console.log(lettersCombinedR);
console.log(concSentence);
console.log(midCharacter);
console.log(concSentence);

////////////////////////////
$(document).ready(function() {
	$("h1").click(function() {
		alert(sentence);
	});
	$("h2").click(function() {
		alert(concSentence);
	});
});
