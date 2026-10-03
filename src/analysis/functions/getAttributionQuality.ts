import { AttributionQuality } from "../../../generated/prisma/enums";


export function getAttributionQuality(content: string): AttributionQuality {

    const lowerContent = content.toLowerCase();

    const highQualityPatterns = [
        "according to",
        "said",
        "told reporters",
        "announced by",
        "the report from",
        "researchers at",
    ]

    const mediumQualityPatterns = [
        "experts say",
        "sources say",
        "people familiar with",
        "officials say",
        "analysts say",
    ]

    for(const pattern of highQualityPatterns){
        if(lowerContent.includes(pattern)){
            return AttributionQuality.HIGH;
        }
    }
    for(const pattern of mediumQualityPatterns){
        if(lowerContent.includes(pattern)){
            return AttributionQuality.MEDIUM;
        }
    }

    return AttributionQuality.LOW;
}