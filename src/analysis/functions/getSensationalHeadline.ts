import { getLoadedWordCount } from "./loadedWordCount"; 

// Checks whether a headline contains enough sensational language signals to be considered sensational.
export function getSensationalHeadlineWordCount(headline: string): number {
    const lowerHeadline = headline.toLowerCase();

    let score = 0;

    const loadedWordCount = getLoadedWordCount(headline);

    if (loadedWordCount >= 2) {
        score++;
    }

    if (lowerHeadline.includes("!!!")) {
        score++;
    }

    if (lowerHeadline.includes("shocking")) {
        score++;
    }

    if (lowerHeadline.includes("breaking")) {
        score++;
    }

    if (lowerHeadline.includes("you won't believe")) {
        score++;
    }

    return score;
}