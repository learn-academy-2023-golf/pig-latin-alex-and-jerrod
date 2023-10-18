import React, { useState } from "react"
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
 

export default Functions