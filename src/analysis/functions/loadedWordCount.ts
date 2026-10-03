import { LOADED_WORDS } from "../lexicons/loadedWords"; 

// Counts emotionally or strongly loaded words found in an article.
export function getLoadedWordCount(content: string): number {
  const words = content.toLowerCase().match(/\b[a-z]+\b/g) ?? [];

  let loadedWordCount = 0;

  for (const word of words) {
      if(LOADED_WORDS.has(word)){
        loadedWordCount ++;
      }
  }

  console.log("lodedWords : " + loadedWordCount);
  return loadedWordCount;
}

// getLoadedWordCount("The shocking decision caused a devastating reaction.");

/**
     \b       → start at a word boundary
    [a-z]    → lowercase English letter
    +        → one or more letters
    \b       → end at a word boundary
    g        → find all matches(global)
 */
