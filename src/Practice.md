import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"


function hasNoVowelsOtherThanY(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== 'y' && vowels.includes(word[i])) {
      return false;
    }
  }
  return true;
}
 
const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    "apple through queen squeal fry fluent"
  )
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" 
          // vowel === "u" // In order to complete the second story "u" could only be refrenced once. i.e with "q" in "qu".
        )
      })
      console.log("vowelsArray:", vowelsArray)

      let translatedWord;

      if (eachWord.toLowerCase().startsWith("qu")) {
        // If the word starts with "qu"
        translatedWord = eachWord.slice(2) + "quay";
      } else if (vowelsArray.length > 0 && vowelsArray[0].toLowerCase() !== 'a') {
        // If there are vowels and the first vowel is not 'a'
        const firstVowelIndex = eachWord.indexOf(vowelsArray[0]);
        translatedWord = eachWord.slice(firstVowelIndex) + eachWord.slice(0, firstVowelIndex) + "ay";
      } else if (vowelsArray.length === 0) {
        // If there are no vowels in the word
        translatedWord = eachWord + "ay";
      } 
      else if (hasNoVowelsOtherThanY(eachWord)) {
        // Use the custom function to check for words with no vowels other than "y"
        translatedWord = eachWord.slice(1) + eachWord[0] + "ay";
      }
      else {
        // If the word starts with a vowel or doesn't have any vowels
        translatedWord = eachWord + 'way';
      }
      // if (vowelsArray.length > 0 && vowelsArray[0].toLowerCase() !== 'a') {
    //   // If there are vowels and the first vowel is not 'a'
    //   const firstVowelIndex = eachWord.indexOf(vowelsArray[0]);
    //   translatedWord = eachWord.slice(firstVowelIndex) + eachWord.slice(0, firstVowelIndex) + "ay";
    // } else {
    //   // If the word starts with a vowel or doesn't have any vowels
    //   translatedWord = eachWord + 'way';
    // }

    return translatedWord;
      // ACTION ITEM: your Pig Latin logic goes here!

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 GOLF! | Coded by: Jerrod & Alex !</footer>
    </div>
  )
}

export default App
