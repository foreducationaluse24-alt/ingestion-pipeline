import { emotionalWords } from "../lexicons/emotionalWords";


// Counts emotionally or strongly loaded words found in an article.
export function getEmotionalWordCount(content: string): number {
  const words = content.toLowerCase().match(/\b[a-z]+\b/g) ?? [];

  let emotionalWordCount = 0;

  console.log(words);
  for (const word of words) {
    if (emotionalWords.has(word)) {
      emotionalWordCount = emotionalWordCount + 1;
    }
  }

  console.log("emotionalWordCount : " + emotionalWordCount);
  return emotionalWordCount;
}