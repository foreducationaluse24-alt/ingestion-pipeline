import { Worker } from "bullmq";
import IORedis from "ioredis";
import { prisma } from "../lib/prisma";
import { analyzeArticle } from "../analysis/functions/analyzeArticle";


const connection = new IORedis(process.env.REDIS_URL!, {
  maxRetriesPerRequest: null,
});

const articleAnalysisWorker = new Worker(
  "article-level-analysis",
  async (job) => {
    const { articleId } = job.data;
    console.log(`Analyzing Article : ${articleId}`);

    const article = await prisma.article.findUnique({
      where: {
        id: articleId,
      },
      select: {
        title: true,
        content: true,
      },
    });

    if (!article) {
      throw new Error(`Article not found of id: ${articleId}`);
    }
    if (!article.content) {
      throw new Error(`Article has no content of id: ${articleId}`);
    }

    const analysis = analyzeArticle(article.title, article.content);

    await prisma.article.update({
      where: {
        id: articleId,
      },
      data: {
        loadedWordCount: analysis.loadedWordCount,
        emotionalWordCount: analysis.emotionalWordCount,
        sensationalWordCount: analysis.SensationalHeadlineWordCount,
        attributionQuality: analysis.attributionQuality,
        authorOpinion: analysis.autherOpinion,
      },
    });
  },
  {
    connection,
    concurrency: 5,
  },
);

articleAnalysisWorker.on("completed", (job) => {
  console.log(`Analysis job ${job.id} completed`);
  console.log("-----------------------------");
});

articleAnalysisWorker.on("failed", (job, err) => {
  console.log(`Analysis job ${job?.id} failed with Error ${err}`);
  console.log("-----------------------------");
});
