import { articleAnalysisQueue } from "../articleAnalysisQueue"; 

async function main() {
    await articleAnalysisQueue.add("analyze-article", {
        articleId: "cmuphttzl0003pcydqp3cjcx1",
    });
    console.log("Analysis job added");
}

main();