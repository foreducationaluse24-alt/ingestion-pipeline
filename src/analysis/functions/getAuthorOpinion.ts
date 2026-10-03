// Detects simple indicators that an article contains opinionated language.
export function getAuthorOpinion(content: string): boolean {
    const opinionPhrases = [
        "i believe",
        "in my view",
        "in our view",
        "we believe",
        "it is clear that",
        "obviously",
        "unfortunately",
        "fortunately",
        "clearly",
    ];

    const lowerContent = content.toLowerCase();

    for (const phrase of opinionPhrases) {
        if (lowerContent.includes(phrase)) {
            return true;
        }
    }

    return false;
}