interface FeedSource {
  name: string;
  rssUrl: string;
  domain: string;
}


export const feeds: FeedSource[] = [
  {
    name: "Hindustan Times",
    rssUrl: "https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml",
    domain: "hindustantimes.com",
  },
  {
    name: "BBC News",
    rssUrl: "https://feeds.bbci.co.uk/news/world/asia/india/rss.xml",
    domain: "bbc.com",
  },
  {
    name: "The Hindu",
    rssUrl: "https://www.thehindu.com/feeder/default.rss",
    domain: "thehindu.com",
  },
  {
    name: "Indian Express",
    rssUrl: "https://indianexpress.com/section/india/feed/",
    domain: "indianexpress.com",
  },
  {
    name: "Firstpost",
    rssUrl: "https://www.firstpost.com/commonfeeds/v1/mfp/rss/india.xml",
    domain: "firstpost.com",
  },
  {
    name: "NDTV News",
    rssUrl: "https://feeds.feedburner.com/ndtvnews-top-stories",
    domain: "ndtv.com",
  },
  {
    name: "FreepressJournal",
    rssUrl: "https://www.freepressjournal.in/stories.rss",
    domain: "freepressjournal.in",
  },
  {
    name: "Times Of India",
    rssUrl: "https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms",
    domain: "timesofindia.com",
  },
  {
    name: "India TV News",
    rssUrl: "https://www.indiatvnews.com/rssnews/topstory-india.xml",
    domain: "indiatvnews.com",
  },
  {
    name: "Tribune India News",
    rssUrl: "https://publish.tribuneindia.com/newscategory/top-headlines/feed/ ",
    domain: "tribuneindia.com",
  },
];

/*
https://www.firstpost.com/rss/india.xml                 
https://www.firstpost.com/commonfeeds/v1/mfp/rss/india.xml                #200    


https://www.freepressjournal.in/stories.rss                               #128

https://economictimes.indiatimes.com/rssfeedsdefault.cms" 

https://feeds.feedburner.com/ndtvnews-top-stories                          #20
https://feeds.feedburner.com/ndtvnews-india-news        india news

https://www.deccanchronicle.com/feeds.xml                                   #485
https://www.nationalheraldindia.com/stories.rss?section=news                #11
https://www.nationalheraldindia.com/stories.rss                             #11   (prefer)

https://feeds.washingtonpost.com/rss/world                                  #10

http://rss.cnn.com/rss/cnn_world.rss

https://timesofindia.indiatimes.com/rssfeedstopstories.cms          //top stories
https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms       //india specific

https://indianexpress.com/section/india/feed/


https://www.indiatoday.in/rss/1206514          // nation
https://www.indiatoday.in/rss/home            // (home)prefer


https://www.indiatvnews.com/rssnews/topstory.xml     top stories  
https://www.indiatvnews.com/rssnews/topstory-india.xml    india           10


https://publish.tribuneindia.com/newscategory/nation/feed/        india
https://publish.tribuneindia.com/newscategory/top-headlines/feed/       top news

*/