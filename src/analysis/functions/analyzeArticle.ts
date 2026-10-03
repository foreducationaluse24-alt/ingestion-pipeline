import { getAttributionQuality } from "./getAttributionQuality";
import { getAuthorOpinion } from "./getAuthorOpinion";
import { getEmotionalWordCount } from "./getEmotionalWordCount";
import { getSensationalHeadlineWordCount } from "./getSensationalHeadline";
import { getLoadedWordCount } from "./loadedWordCount";

// Analyzes an article and returns its basic language metrics.
export function analyzeArticle(title: string, content: string) {
  const loadedWordCount = getLoadedWordCount(content);
  const emotionalWordCount = getEmotionalWordCount(content);
  const SensationalHeadlineWordCount = getSensationalHeadlineWordCount(title);
  const autherOpinion = getAuthorOpinion(content);
  const attributionQuality = getAttributionQuality(content);


//   console.log({loadedWordCount,
//     emotionalWordCount,
//     SensationalHeadlineWordCount,
//     autherOpinion,
//     attributionQuality});

  return {
    loadedWordCount,
    emotionalWordCount,
    SensationalHeadlineWordCount,
    autherOpinion,
    attributionQuality
  };
}

analyzeArticle(
  "Government announces new policy",
  "In my view, this policy is clearly irresponsible.",
);
