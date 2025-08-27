import React, {Component} from 'react'
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

class News extends Component {
    /*articles = [
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Bellan",
            "title": "Why a new anti revenge porn law has free speech experts alarmed  | TechCrunch",
            "description": "The newly signed Take It Down Act makes it illegal to publish nonconsensual explicit images – real or AI generated – and gives platforms just 48 hours to comply with a victim’s takedown request or face liability. While widely praised as a long overdue win for…",
            "url": "https://techcrunch.com/2025/05/24/why a new anti revenge porn law has free speech experts alarmed/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/GettyImages 2215952907.jpg?resize=1200,804",
            "publishedAt": "2025 05 24T18:41:11Z",
            "content": "Privacy and digital rights advocates are raising alarms over a law that many would expect them to cheer: a federal crackdown on revenge porn and AI generated deepfakes. \r\nThe newly signed Take It Dow… [+6794 chars]"
        },
        {
            "source": {
                "id": "the next web",
                "name": "The Next Web"
            },
            "author": "Megan Carnegie",
            "title": "The digital nomad dream has a dark side",
            "description": "Sophie Rucker had been living and working in London for five years when a trip to a yoga training school in Bali presented her with an alternative to the rat race. Despite enjoying life in London, witnessing digital nomads balance work with sun, sea, and rela…",
            "url": "https://thenextweb.com/news/digital nomads struggle costs red tape geopolitics",
            "urlToImage": "https://img cdn.tnwcdn.com/image/tnw blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp content%2Fblogs.dir%2F1%2Ffiles%2F2025%2F05%2FUntitled design 47.jpg&signature=73ddf9234fdcbb87e7a40b83358d96c1",
            "publishedAt": "2025 05 24T18:30:29Z",
            "content": "Sophie Rucker had been living and working in London for five years when a trip to a yoga training school in Bali presented her with an alternative to the rat race. Despite enjoying life in London, wi… [+11624 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Karyne Levy",
            "title": "Week in Review: Notorious hacking group tied to the Spanish government | TechCrunch",
            "description": "Welcome back to Week in Review! Tons of news from this week for you, including a hacking group that's linked to the Spanish government; CEOs using AI",
            "url": "https://techcrunch.com/2025/05/24/notorious hacking group tied to the spanish government/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2016/07/generic_code_hack_security.png?w=1130",
            "publishedAt": "2025 05 24T17:07:04Z",
            "content": "Welcome back to Week in Review! Tons of news from this week for you, including a hacking group that’s linked to the Spanish government; CEOs using AI avatars to deliver company earnings; Pocket shutt… [+4452 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Jagmeet Singh",
            "title": "Naukri exposed recruiter email addresses, researcher says | TechCrunch",
            "description": "Naukri exposed recruiter email addresses, researcher says | TechCrunchtechcrunch.com",
            "url": "https://techcrunch.com/2025/05/23/naukri exposed recruiter email addresses researcher says/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/naukri app techcrunch.jpg?resize=1200,800",
            "publishedAt": "2025 05 24T02:31:31Z",
            "content": "Naukri.com, a popular Indian employment website, has fixed a bug that exposed the email addresses of recruiters using its platform to search and hire talent online.\r\nThe issue, discovered by security… [+1488 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Marina Temkin",
            "title": "Khosla Ventures among VCs experimenting with AI infused roll ups of mature companies | TechCrunch",
            "description": "VC firms are pioneering a new investment strategy: acquiring established businesses and optimizing them with AI to boost efficiency and customer reach.",
            "url": "https://techcrunch.com/2025/05/23/khosla ventures among vcs experimenting with ai infused roll ups of mature companies/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2022/01/Samir Kaul 15381 e1641503941608.jpg?w=398",
            "publishedAt": "2025 05 23T22:01:32Z",
            "content": "Venture capitalists have always focused on investing in companies that leverage technology to either disrupt established industries or create entirely new business categories.\r\nBut some VCs are start… [+2640 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Bellan",
            "title": "Zoox issues second robotaxi software recall in a month following collision  | TechCrunch",
            "description": "Amazon owned autonomous vehicle company Zoox has issued its second voluntary software recall in a month, following a collision between one of its",
            "url": "https://techcrunch.com/2025/05/23/zoox issues second robotaxi software recall in a month following collision/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/03/zoox robotaxi driving down a road in las vegas.jpg?resize=1200,800",
            "publishedAt": "2025 05 23T20:39:00Z",
            "content": "Amazon owned autonomous vehicle company Zoox has issued its second voluntary software recall in a month, following a collision between one of its robotaxis and an e scooter rider in San Francisco on … [+2274 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Mary Ann Azevedo",
            "title": "Landa promised real estate investing for $5. Now it's gone dark.",
            "description": "The idea of becoming a real estate investor for as little as $5 may seem too good to be true. And for many users of Landa, a proptech company that The idea of becoming a real estate investor for as little as $5 may seem too good to be true.And for many users …",
            "url": "https://techcrunch.com/2025/05/23/landa promised real estate investing for 5 now its gone dark/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2022/08/IMG_9761 5.jpg?resize=1200,895",
            "publishedAt": "2025 05 23T19:24:05Z",
            "content": "The idea of becoming a real estate investor for as little as $5 may seem too good to be true.\r\nAnd for many users of Landa, a proptech company that promised just that — it has been.\r\nLandaemerged fro… [+6417 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anna Heim",
            "title": "What is Mistral AI? Everything to know about the OpenAI competitor | TechCrunch",
            "description": "Mistral AI, the French company behind AI assistant Le Chat and several foundational models, is officially regarded as one of France’s most promising tech",
            "url": "https://techcrunch.com/2025/05/23/what is mistral ai everything to know about the openai competitor/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/05/GettyImages 2147859992 e1713960898378.webp?resize=1200,676",
            "publishedAt": "2025 05 23T19:16:50Z",
            "content": "Mistral AI, the French company behind AI assistant Le Chat and several foundational models, is officially regarded as one of Frances most promising tech startups and is arguably the only European com… [+6812 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "Kesha is now a startup founder | TechCrunch",
            "description": "Kesha may have taken the dollar sign out of her name, but now, the singer is thinking about money again    not for herself, but to fund the seed round of Kesha may have taken the dollar sign out of her name, but now, the singer is thinking about money again  …",
            "url": "https://techcrunch.com/2025/05/23/kesha is now a startup founder/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/GettyImages 2155557514.jpg?resize=1200,800",
            "publishedAt": "2025 05 23T19:14:51Z",
            "content": "Kesha may have taken the dollar sign out of her name, but now, the singer is thinking about money again — not for herself, but to fund the seed round of her new startup, Smash.\r\nAccording to Kesha’s … [+1492 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Dominic Madori Davis",
            "title": "Apple CEO reportedly urged Texas’ governor to ditch online child safety bill",
            "description": "Apple CEO Tim Cook reportedly called Texas Gov. Greg Abbott to make changes to or veto a newly passed law in the state that would require the company to verify the ages of device owners, according to The Wall Street Journal. Abbott has yet to sign the bill. B…",
            "url": "https://techcrunch.com/2025/05/23/apple ceo reportedly urged texas governor to ditch online child safety bill/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/02/GettyImages 2188459297.jpg?w=1024",
            "publishedAt": "2025 05 23T19:11:12Z",
            "content": "Apple CEO Tim Cook reportedly called Texas Gov. Greg Abbott to make changes to or veto a newly passed law in the state that would require the company to verify the ages of device owners, according to… [+1043 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "Marjorie Taylor Greene picked a fight with Grok | TechCrunch",
            "description": "Elon Musk's AI Grok told Rep. Marjorie Taylor Greene (R GA) that her political actions do not reflect Christian values.",
            "url": "https://techcrunch.com/2025/05/23/marjorie taylor greene picked a fight with grok/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/GettyImages 2206476117.jpg?resize=1200,800",
            "publishedAt": "2025 05 23T18:10:29Z",
            "content": "Last week, Elon Musk’s AI chatbot Grok experienced a “bug” that made it tell users about the “white genocide” conspiracy theory in South Africa, even when prompted with questions that had nothing to … [+1339 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "OpenAI upgrades the AI model powering its Operator agent | TechCrunch",
            "description": "OpenAI is updating the AI model powering Operator, its AI agent that can autonomously browse the web and use certain software within a cloud hosted virtual machine.",
            "url": "https://techcrunch.com/2025/05/23/openai upgrades the ai model powering its operator agent/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/01/GettyImages 2170386424.jpg?w=1024",
            "publishedAt": "2025 05 23T17:44:41Z",
            "content": "OpenAI is updating the AI model powering Operator, its AI agent that can autonomously browse the web and use certain software within a cloud hosted virtual machine to fulfill users’ requests.\r\nSoon, … [+1819 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anna Heim",
            "title": "Startups Weekly: Cutting through Google I/O noise | TechCrunch",
            "description": "Google I/O didn't stop startups from taking their chances and announcing some big deals this week.",
            "url": "https://techcrunch.com/2025/05/23/startups weekly cutting through google i o noise/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2022/12/GettyImages 1443200899.jpg?resize=1200,798",
            "publishedAt": "2025 05 23T17:08:31Z",
            "content": "Welcome to Startups Weekly your weekly recap of everything you cant miss from the world of startups. Want it in your inbox every Friday? Sign up here.\r\nDespite Google I/O capturing as much attention … [+3788 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Microsoft says its Aurora AI can accurately predict air quality, typhoons, and more | TechCrunch",
            "description": "One of Microsoft's latest AI models can accurately predict air quality, hurricanes, typhoons, and other weather related phenomena, the company claims.",
            "url": "https://techcrunch.com/2025/05/23/microsoft says its aurora ai can accurately predict air quality typhoons and more/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2015/10/shutterstock_269301602.jpg?resize=1200,675",
            "publishedAt": "2025 05 23T17:03:49Z",
            "content": "One of Microsoft’s latest AI models can accurately predict air quality, hurricanes, typhoons, and other weather related phenomena, the company claims. \r\nIn a paper published in the journal Nature and… [+1610 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "Discord seeks to solve a problem that it created | TechCrunch",
            "description": "Conversations on Discord can be hard to follow. Discord SVP Peter Sellis proposes making forum like features, or using AI summaries.",
            "url": "https://techcrunch.com/2025/05/23/discord seeks to solve a problem that it created/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/09/discord app logo.jpg?resize=1200,800",
            "publishedAt": "2025 05 23T16:15:10Z",
            "content": "Discord is entering its second decade as a company and seeking to go public. Along the way, it’s changed the way that online communities interact, turning groups that may have previously existed as f… [+1432 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Digg founder Kevin Rose offers to buy Pocket from Mozilla",
            "description": "The deal could be interesting if it went through, as Digg could leverage Pocket's existing user base to fuel interest in its relaunch.",
            "url": "https://techcrunch.com/2025/05/23/digg founder kevin rose offers to buy pocket from mozilla/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/GettyImages 1255251858.jpg?resize=1200,900",
            "publishedAt": "2025 05 23T15:59:43Z",
            "content": "Digg, the Web 2.0 era link aggregator that’s now being given a second chance at life, is open to buying Mozilla’s read it later app, Pocket. \r\nOn Thursday, Mozilla announced it would shut down Pocket… [+1631 chars]"
        },
        {
            "source": {
                "id": "the next web",
                "name": "The Next Web"
            },
            "author": "Thomas Macaulay",
            "title": "Builder.ai collapse exposes dangers of ‘FOMO investing’ in AI",
            "description": "The collapse of Builder.ai exposes the growing threat of “FOMO investing,” according to an expert in tech growth intelligence. Builder had become one of Britain’s best funded startups, but is now filing for bankruptcy due to financial problems. The insolvency…",
            "url": "https://thenextweb.com/news/builder ai collapse exposes fomo investing",
            "urlToImage": "https://img cdn.tnwcdn.com/image/tnw blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F08%2FUntitled design 9 1.jpg&signature=7e8b838df607dd6d1a8cbbf070c273ea",
            "publishedAt": "2025 05 23T15:09:45Z",
            "content": "The collapse of Builder.ai exposes the growing threat of FOMO investing, according to an expert in tech growth intelligence.\r\nBuilder had become one of Britains best funded startups, but is now filin… [+2501 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "ChatGPT: Everything you need to know about the AI chatbot",
            "description": "Here's a ChatGPT guide to help understand Open AI's viral text generating system. We outline the most recent updates and answer your FAQs.",
            "url": "https://techcrunch.com/2025/05/23/chatgpt everything to know about the ai chatbot/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2023/03/GettyImages 1462188043 e1686340799615.jpg?w=1200",
            "publishedAt": "2025 05 23T14:56:28Z",
            "content": "ChatGPT, OpenAIs text generating AI chatbot, has taken the world by storm since its launch in November 2022. What started as a tool to supercharge productivity through writing essays and code with sh… [+33597 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Tim De Chant",
            "title": "California prepares to sue feds after Senate revokes the state's EV rule | TechCrunch",
            "description": "The state was to require increasing sales of zero emissions cars and passenger trucks starting in 2026.",
            "url": "https://techcrunch.com/2025/05/23/california prepares to sue feds after senate revokes the states ev rule/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2018/07/GettyImages 921944624.jpg?resize=1200,801",
            "publishedAt": "2025 05 23T14:44:28Z",
            "content": "California is preparing to sue the federal government to recover its right to set vehicle emissions standards, Rob Bonta, the states attorney general, told TechCrunch in a statement.\r\nSenate Republic… [+2579 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "TechCrunch Events",
            "title": "At TechCrunch Sessions: AI, Artemis Seaford and Ion Stoica confront the ethical crisis — when AI crosses the line",
            "description": "As generative AI becomes faster, cheaper, and more convincing, the ethical stakes are no longer theoretical. What happens when the tools to deceive become widely accessible? And how do we build systems that are powerful — but safe enough to trust? At TechCrun…",
            "url": "https://techcrunch.com/2025/05/23/when ai crosses the line artemis seaford and ion stoica confront the ethical crisis at techcrunch sessions ai/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/11/54106133629_67a9f848cb_o.jpg?resize=1200,800",
            "publishedAt": "2025 05 23T14:20:00Z",
            "content": "As generative AI becomes faster, cheaper, and more convincing, the ethical stakes are no longer theoretical. What happens when the tools to deceive become widely accessible? And how do we build syste… [+2230 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "X continues to suffer bugs following Thursday outage | TechCrunch",
            "description": "For over 24 hours, many X users, including this reporter, have been experiencing issues with the site's basic functionality.",
            "url": "https://techcrunch.com/2025/05/23/x continues to suffer bugs following thursday outage/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2023/08/twitter x musk graffiti.jpg?resize=1200,675",
            "publishedAt": "2025 05 23T14:16:35Z",
            "content": "For over 24 hours, many X users, including this reporter, have been experiencing issues with the site’s basic functionality. Some messages won’t load, timelines won’t update, and certain posts can’t … [+2041 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Techcrunch Events",
            "title": "Iliana Quinonez of Google Cloud on scaling AI startups at Sessions: AI | TechCrunch",
            "description": "Iliana Quinonez of Google Cloud on AI agents, infrastructure, and democratization at TechCrunch Sessions: AI. Register to join the discussion on June 5.",
            "url": "https://techcrunch.com/2025/05/23/founders first iliana quinonez of google cloud on ai agents infrastructure and democratization at techcrunch sessions ai/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/11/google cloud builders stage 54100851862_1ba5bb525e_k.jpg?resize=1200,800",
            "publishedAt": "2025 05 23T14:16:35Z",
            "content": "In the startup world, access to cutting edge tools isnt the biggest obstacle its knowing how to wield them with precision. At TechCrunch Sessions: AI, taking place on June 5 at UC Berkeleys Zellerbac… [+2569 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "TechCrunch Events",
            "title": "Tick tock: Just 3 days left to save up to $900 on your TechCrunch Disrupt 2025 pass",
            "description": "Time’s almost up — save big before prices jump in 3 days!  You’ve got until May 25 at 11:59 p.m. PT to save up to $900 on individual tickets to TechCrunch Disrupt 2025. Or double your impact — grab one Early Bird pass and get another for your +1 at 90% off. T…",
            "url": "https://techcrunch.com/2025/05/23/tick tock just 3 days left to save up to 900 on your techcrunch disrupt 2025 pass/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/10/GettyImages 2181599313.jpg?resize=1200,800",
            "publishedAt": "2025 05 23T14:00:00Z",
            "content": "Times almost up save big before prices jump in 3 days! \r\nYouve got until May 25 at 11:59 p.m. PT to save up to $900 on individual tickets to TechCrunch Disrupt 2025. Or double your impact grab one Ea… [+2658 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Dominic Madori Davis",
            "title": "Apple could launch AI powered smart glasses in 2026",
            "description": "Apple is reportedly looking to release a pair of smart glasses by the end of next year in a bid to compete with Meta’s AI powered glasses, the Ray Ban Meta. Apple’s wearable will have all the components one would expect in smart glasses, including a camera an…",
            "url": "https://techcrunch.com/2025/05/23/apple could launch ai powered smart glasses in 2026/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/04/apple logo pedestrian.jpg?resize=1200,798",
            "publishedAt": "2025 05 23T13:37:07Z",
            "content": "Apple is reportedly looking to release a pair of smart glasses by the end of next year in a bid to compete with Metas AI powered glasses, the Ray Ban Meta. \r\nApples wearable will have all the compone… [+685 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Dominic Madori Davis",
            "title": "Trump threatens 25% tariffs on iPhones made outside the US",
            "description": "President Trump lashed out at Apple on Friday, threatening the company with a 25% tariff on iPhones unless it moves production to the U.S. “I have long ago informed Tim Cook of Apple that I expect their iPhone’s [sic] that will be sold in the United States of…",
            "url": "https://techcrunch.com/2025/05/23/trump threatens 25 tariffs on iphones made outside the us/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/04/GettyImages 2208185431.jpg?resize=1200,800",
            "publishedAt": "2025 05 23T13:21:11Z",
            "content": "President Trump lashed out at Apple on Friday, threatening the company with a 25% tariff on iPhones unless it moves production to the U.S.\r\n“I have long ago informed Tim Cook of Apple that I expect t… [+1197 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Lorenzo Franceschi bicchierai",
            "title": "Mysterious hacking group Careto was run by the Spanish government, sources say | TechCrunch",
            "description": "The elusive hacking group Careto was never publicly linked to a specific government, but TechCrunch has learned researchers concluded privately that the Spanish government was behind the group.",
            "url": "https://techcrunch.com/2025/05/23/mysterious hacking group careto was run by the spanish government sources say/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/spain flag glitch.jpg?resize=1200,633",
            "publishedAt": "2025 05 23T10:04:45Z",
            "content": "More than a decade ago, researchers at antivirus company Kaspersky identified suspicious internet traffic of what they thought was a known government backed group, based on similar targeting and its … [+13453 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ivan Mehta",
            "title": "After Klarna, Zoom's CEO also uses an AI avatar on quarterly call | TechCrunch",
            "description": "After Klarna CEO, Zoom's CEO opts to use AI avatar for initial comments during the earnings call",
            "url": "https://techcrunch.com/2025/05/22/after klarna zooms ceo also uses an ai avatar on quarterly call/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/Screenshot 2025 05 23 at 11.33.28AM.jpg?resize=1200,654",
            "publishedAt": "2025 05 23T06:36:28Z",
            "content": "CEOs are now so immersed in AI, they’re sending their avatars to address quarterly earnings calls instead of themselves, at least partially.\r\nAfter the Klarna CEO’s AI avatar appeared on an investor … [+1010 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Anthropic CEO claims AI models hallucinate less than humans | TechCrunch",
            "description": "Anthropic CEO Dario Amodei claims that AI models hallucinate at a lower rate than humans do, but in more surprising ways.",
            "url": "https://techcrunch.com/2025/05/22/anthropic ceo claims ai models hallucinate less than humans/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/Dario.jpg?resize=1200,900",
            "publishedAt": "2025 05 22T22:49:41Z",
            "content": "Anthropic CEO Dario Amodei believes today’s AI models hallucinate, or make things up and present them as if they’re true, at a lower rate than humans do, he said during a press briefing at Anthropic’… [+3285 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Bluesky will begin verifying ‘notable’ users",
            "description": "Bluesky on Thursday quietly opened the doors to those who want to become verified on its social networking service. In a post published by the Bluesky Safety account, the company announced that “notable and authentic” accounts can now apply for verification t…",
            "url": "https://techcrunch.com/2025/05/22/bluesky will begin verifying notable users/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/01/bluesky GettyImages 2185142051.jpg?resize=1200,800",
            "publishedAt": "2025 05 22T21:28:56Z",
            "content": "Bluesky on Thursday quietly opened the doors to those who want to become verified on its social networking service. In a post published by the Bluesky Safety account, the company announced that “nota… [+3568 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Anthropic's latest flagship AI sure seems to love using the 'cyclone' emoji | TechCrunch",
            "description": "Anthropic's new AI model, Claude Opus 4, is a strong programmer and writer, the company claims. When talking to itself, it's also a prolific emoji user.",
            "url": "https://techcrunch.com/2025/05/22/anthropics latest flagship ai sure seems to love using the cyclone emoji/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/04/tc databricks anthropic 1600x900 copy.png?w=688",
            "publishedAt": "2025 05 22T20:15:05Z",
            "content": "Anthropic’s new flagship AI model, Claude Opus 4, is a strong programmer and writer, the company claims. When talking to itself, it’s also a prolific emoji user.\r\nThat’s according to a technical repo… [+1133 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Dominic madori Davis",
            "title": "Tinder CEO to step down in July | TechCrunch",
            "description": "Faye Iosotaluno, the CEO of Tinder, will step down from her role in July, according to a post she published on LinkedIn.  Isootaluno served less than",
            "url": "https://techcrunch.com/2025/05/22/tinder ceo to step down in july/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/01/Match_Group_Faye_Iosotaluno.jpg?resize=1200,800",
            "publishedAt": "2025 05 22T19:23:41Z",
            "content": "Faye Iosotaluno, the CEO of Tinder, will step down from her role in July, according to a post she published on LinkedIn. \r\nIsootaluno served less than a year in the role, and spent nearly eight years… [+1255 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Tim De Chant",
            "title": "Senate votes to revoke California’s ability to set air pollution standards | TechCrunch",
            "description": "The state was to require increasing sales of zero emissions cars and passenger trucks starting in 2026.",
            "url": "https://techcrunch.com/2025/05/22/senate votes to revoke californias ability to set air pollution standards/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2018/07/GettyImages 921944624.jpg?resize=1200,801",
            "publishedAt": "2025 05 22T18:41:40Z",
            "content": "Senate Republicans have voted 51 to 44 to overturn a waiver that allowed California to set stricter air pollution standards for vehicles. The state has received waivers more than 100 times since fede… [+1915 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "A safety institute advised against releasing an early version of Anthropic's Claude Opus 4 AI model | TechCrunch",
            "description": "A third party research institute Anthropic partnered with to test Claude Opus 4 recommended against deploying an early version because it tends to \"scheme.\"",
            "url": "https://techcrunch.com/2025/05/22/a safety institute advised against releasing an early version of anthropics claude opus 4 ai model/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/02/GettyImages 2153561878.jpg?w=1024",
            "publishedAt": "2025 05 22T18:34:38Z",
            "content": "A third party research institute that Anthropic partnered with to test one of its new flagship AI models, Claude Opus 4, recommended against deploying an early version of the model due to its tendenc… [+2811 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Zack Whittaker",
            "title": "Microsoft says Lumma password stealer malware found on 394,000 Windows PCs | TechCrunch",
            "description": "Microsoft says Lumma password stealer malware found on 394,000 Windows PCs | TechCrunchtechcrunch.com",
            "url": "https://techcrunch.com/2025/05/22/microsoft says lumma password stealer malware found on 394000 windows pcs/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/msft heatmap lumma doj.jpg?resize=1200,735",
            "publishedAt": "2025 05 22T18:11:27Z",
            "content": "Microsoft and law enforcement have announced a court authorized takedown of Lumma, a prolific info stealer malware operation found on more than 394,000 Windows PCs globally, mostly in Brazil, Europe,… [+782 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Aisha Malik",
            "title": "Mozilla is shutting down read it later app Pocket",
            "description": "Mozilla announced on Thursday that it’s shutting down Pocket, a read it later app it acquired in 2017, on July 8. The company is also shutting down Fakespot, its browser extension that helps users identify unreliable reviews. “Pocket has helped millions save …",
            "url": "https://techcrunch.com/2025/05/22/mozilla is shutting down read it later app pocket/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/04/Pocket app.png?resize=1200,795",
            "publishedAt": "2025 05 22T18:06:21Z",
            "content": "Mozilla announced on Thursday that it’s shutting down Pocket, a read it later app it acquired in 2017, on July 8. The company is also shutting down Fakespot, its browser extension that helps users id… [+1578 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Maxwell Zeff",
            "title": "Anthropic's new AI model turns to blackmail when engineers try to take it offline | TechCrunch",
            "description": "Anthropic says its Claude Opus 4 model frequently tries to blackmail software engineers when they try to take it offline.",
            "url": "https://techcrunch.com/2025/05/22/anthropics new ai model turns to blackmail when engineers try to take it offline/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/DarioAndMike.jpg?resize=1200,900",
            "publishedAt": "2025 05 22T17:48:48Z",
            "content": "Anthropic’s newly launched Claude Opus 4 model frequently tries to blackmail developers when they threaten to replace it with a new AI system and give it sensitive information about the engineers res… [+1796 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Open social web browser Surf makes it easier for anyone to build custom feeds",
            "description": "With Starter Sets, Surf is simplifying the process of building those custom feeds, personalizing them, and even publishing them off platform, if you choose.",
            "url": "https://techcrunch.com/2025/05/22/open social web browser surf makes it easier for anyone to build custom feeds/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2010/02/surfing1.png?w=326",
            "publishedAt": "2025 05 22T17:39:58Z",
            "content": "Surf, the new app from Flipboard for browsing the open social web, is making it easier for people to create and discover their own custom feeds focused on their interests. Instead of getting stuck in… [+3007 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Tim De Chant",
            "title": "Meta adds another 650 MW of solar power to its AI push | TechCrunch",
            "description": "The company already has more than 12 gigawatts of capacity in its renewable power portfolio.",
            "url": "https://techcrunch.com/2025/05/22/meta adds another 650 mw of solar power to its ai push/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/GettyImages 182939200.jpeg?resize=1200,800",
            "publishedAt": "2025 05 22T16:52:11Z",
            "content": "Meta signed another big solar deal on Thursday, securing 650 megawatts across projects in Kansas and Texas.\r\nAmerican utility and power generation company AES is currently developing the solar only p… [+1595 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Anthropic’s new Claude 4 AI models can reason over many steps",
            "description": "During its inaugural developer conference Thursday, Anthropic launched two new AI models that the startup claims are among the industry’s best, at least in terms of how they score on popular benchmarks. Claude Opus 4 and Claude Sonnet 4, part of Anthropic’s n…",
            "url": "https://techcrunch.com/2025/05/22/anthropics new claude 4 ai models can reason over many steps/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/06/YouTube Thumb Text 2 3.png?resize=1200,675",
            "publishedAt": "2025 05 22T16:45:00Z",
            "content": "During its inaugural developer conference Thursday, Anthropic launched two new AI models that the startup claims are among the industry’s best, at least in terms of how they score on popular benchmar… [+5559 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Vercel debuts an AI model optimized for web development | TechCrunch",
            "description": "The team behind Vercel's V0, an AI powered platform for web creation, has developed an AI model it claims excels at certain website development tasks.",
            "url": "https://techcrunch.com/2025/05/22/vercel debuts an ai model optimized for web development/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2018/08/GettyImages 512903968.jpg?resize=1200,952",
            "publishedAt": "2025 05 22T15:44:58Z",
            "content": "The team behind Vercel’s V0, an AI powered platform for web creation, has developed an AI model it claims excels at certain website development tasks. \r\nAvailable through an API, the model, called “v… [+1968 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "RevenueCat raises $50M as it expands beyond mobile app monetization | TechCrunch",
            "description": "Key to the company's growth are the next products RevenueCat has on its roadmap, the company's founder says.",
            "url": "https://techcrunch.com/2025/05/22/revenuecat raises 50m as it expands beyond mobile app monetization/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/IMG_5834.jpg?resize=1200,857",
            "publishedAt": "2025 05 22T15:35:45Z",
            "content": "RevenueCat, a company so tied to the mobile economy that now one in three new subscription apps launch with its software under the hood, is preparing to expand its business. Capitalizing on its marke… [+5724 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Techcrunch Events",
            "title": "The complete Side Events lineup at TechCrunch Sessions: AI | TechCrunch",
            "description": "Get ready to amplify your TechCrunch Sessions: AI experience with the electrifying lineup of Side Events taking Boston by storm during",
            "url": "https://techcrunch.com/2025/05/22/the complete side events lineup at techcrunch sessions ai/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/54102787213_82f47aab5b_o 1.jpg?resize=1200,800",
            "publishedAt": "2025 05 22T15:04:11Z",
            "content": "Get ready to amplify your TechCrunch Sessions: AI experience with the electrifying lineup of Side Events taking Boston by storm during the week of June 1 7.\r\nAs the countdown to TC Sessions: AI begin… [+3236 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "OpenAI teams up with Cisco, Oracle to build UAE data center | TechCrunch",
            "description": "As rumored, OpenAI is expanding its ambitious Stargate data center project to the Middle East.",
            "url": "https://techcrunch.com/2025/05/22/openai teams up with cisco oracle to build uae data center/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/11/GettyImages 2153474303 e.jpg?resize=1200,800",
            "publishedAt": "2025 05 22T14:40:51Z",
            "content": "As rumored, OpenAI is expanding its ambitious Stargate data center project to the Middle East. \r\nOn Thursday, the company announced Stargate UAE, which will bring a 1GW data center cluster to Abu Dha… [+821 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "TechCrunch Events",
            "title": "4 days left: Up to $900 off your ticket and 90% off for your +1 at TechCrunch Disrupt 2025",
            "description": "Here’s the deal: Only 4 days left to save up to $900 on your TechCrunch Disrupt 2025 ticket — and an additional 90% off for your +1. From October 27–29, San Francisco’s Moscone West transforms into the epicenter of tech innovation as 10,000 tech, startup, and…",
            "url": "https://techcrunch.com/2025/05/22/4 days left up to 900 off your ticket and 90 off for your 1 at techcrunch disrupt 2025/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/01/Disrupt 2024 main stage.jpg?resize=1200,800",
            "publishedAt": "2025 05 22T14:00:00Z",
            "content": "Heres the deal: Only 4 days left to save up to $900 on your TechCrunch Disrupt 2025 ticket and an additional 90% off for your +1.\r\nFrom October 2729, San Franciscos Moscone West transforms into the e… [+2948 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "Strava is buying up athletic training apps – first Runna, and now The Breakaway",
            "description": "The social fitness app Strava has made two acquisitions over the last month and change: on Thursday, Strava’s acquired cycling app The Breakaway, following its acquisition of Runna last month. Incubated in Y Combinator’s Summer 2021 class, The Breakaway uses …",
            "url": "https://techcrunch.com/2025/05/22/strava is buying up athletic training apps first runna and now the breakaway/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/orange shoes strava.jpg?resize=1200,800",
            "publishedAt": "2025 05 22T13:56:19Z",
            "content": "The social fitness app Strava has made two acquisitions over the last month and change: on Thursday, Strava’s acquired cycling app The Breakaway, following its acquisition of Runna last month.\r\nIncub… [+2270 chars]"
        },
        {
            "source": {
                "id": "the next web",
                "name": "The Next Web"
            },
            "author": "Siôn Geschwindt",
            "title": "Startup uses ancient bacteria to turn Texas CO2 into green chemicals",
            "description": "Again, the German Danish startup using ancient bacteria to turn CO2 into new chemicals, is building a new bioreactor plant in Texas. The facility will be located at Texas City, a major petrochemicals park located on the Gulf Coast. The industrial centre is ru…",
            "url": "https://thenextweb.com/news/startup uses ancient bacteria to turn texas co2 into green chemicals",
            "urlToImage": "https://img cdn.tnwcdn.com/image/tnw blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp content%2Fblogs.dir%2F1%2Ffiles%2F2025%2F05%2Fagain co2 startup tech.jpg&signature=e8edad77f3b48ab04e2184313dc2492d",
            "publishedAt": "2025 05 22T11:15:35Z",
            "content": "Again, the German Danish startup using ancient bacteria to turn CO2 into new chemicals, is building a new bioreactor plant in Texas.\r\nThe facility will be located at Texas City, a major petrochemical… [+2160 chars]"
        },
        {
            "source": {
                "id": "the next web",
                "name": "The Next Web"
            },
            "author": "Thomas Macaulay",
            "title": "How to thrive with AI agents — tips from an HP strategist",
            "description": "The rapid rise of AI agents is sparking both excitement and alarm. Their power lies in their ability to complete tasks with increasing autonomy. Many can already pursue multi step goals, make decisions, and interact with external systems — all with minimal hu…",
            "url": "https://thenextweb.com/news/tips on ai agents",
            "urlToImage": "https://img cdn.tnwcdn.com/image/tnw blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp content%2Fblogs.dir%2F1%2Ffiles%2F2025%2F05%2FUntitled design 46.jpg&signature=9a18fc34b2db241f56cd1c108fc3ce1f",
            "publishedAt": "2025 05 22T09:29:53Z",
            "content": "The rapid rise of AI agents is sparking both excitement and alarm.\r\nTheir power lies in their ability to complete tasks with increasing autonomy. Many can already pursue multi step goals, make decisi… [+6259 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ivan Mehta",
            "title": "Signal’s new Windows update prevents the system from capturing screenshots of chats",
            "description": "Signal said today that it is updating its Windows app to prevent the system from capturing screenshots, thereby protecting the content that is on display. The company said that this new “screen security” setting is enabled by default on Windows 11. Signal sai…",
            "url": "https://techcrunch.com/2025/05/22/signals new windows update prevents the system from capturing screenshots of chats/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/recall header.jpeg?resize=1200,788",
            "publishedAt": "2025 05 22T07:28:46Z",
            "content": "Signal said today that it is updating its Windows app to prevent the system from capturing screenshots, thereby protecting the content that is on display.\r\nThe company said that this new “screen secu… [+1597 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Connie Loizos",
            "title": "OpenAI’s next big bet won’t be a wearable: report | TechCrunch",
            "description": "OpenAI pushed generative AI into the public consciousness. Now, it could be developing a very different kind of AI device. According to a WSJ report,",
            "url": "https://techcrunch.com/2025/05/21/openais next big bet wont be a wearable report/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/12/GettyImages 2188228027_e26224.jpg?resize=1200,917",
            "publishedAt": "2025 05 22T04:39:10Z",
            "content": "OpenAI pushed generative AI into the public consciousness. Now, it could be developing a very different kind of AI device.\r\nAccording to a WSJ report, OpenAI CEO Sam Altman told employees Wednesday t… [+1081 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Jagmeet Singh",
            "title": "Alt Carbon scores $12M seed to scale carbon removal in India | TechCrunch",
            "description": "From a struggling family tea estate to an innovative climate venture, Alt Carbon has raised $12 million in a seed round as it plans to scale its carbon",
            "url": "https://techcrunch.com/2025/05/21/alt carbon scores 12m seed to scale carbon removal in india/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/sparsh alt carbon darjeeling.jpg?resize=1200,800",
            "publishedAt": "2025 05 22T03:04:47Z",
            "content": "From a struggling family tea estate to an innovative climate venture, Alt Carbon has raised $12 million in a seed round as it plans to scale its carbon dioxide removal work in the South Asian nation.… [+5173 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kirsten Korosec",
            "title": "Luminar secures up to $200M following CEO departure and layoffs | TechCrunch",
            "description": "Lidar company Luminar reached a deal with Yorkville Advisors Global and another unnamed investor that could bring another $200 million into its coffers",
            "url": "https://techcrunch.com/2025/05/21/luminar secures up to 200m following ceo departure and layoffs/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2023/04/Screenshot 2023 04 18 at 11.23.28 AM.png?w=1026",
            "publishedAt": "2025 05 22T00:33:04Z",
            "content": "Lidar company Luminar reached a deal with Yorkville Advisors Global and another unnamed investor that could bring another $200 million into its coffers through the sale of convertible preferred stock… [+2502 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Julie Bort",
            "title": "Klarna used an AI avatar of its CEO to deliver earnings, it said",
            "description": "Other than AI Siemiatkowski admission, it wasn't obvious that this was AI. There were only a few subtle signs.",
            "url": "https://techcrunch.com/2025/05/21/klarna used an ai avatar of its ceo to deliver earnings it said/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/Klarna CEO Sebastian Siemiatkowski AI avatar.png?resize=1200,698",
            "publishedAt": "2025 05 21T22:36:31Z",
            "content": "Sebastian Siemiatkowski is leaning all the way into the idea that his buy now pay later, IPO bound startup Klarna is an AI company. When Klarna delivered updated quarterly earnings on Monday, it was … [+2247 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Spotify says support for external payments on iOS has already boosted subscriptions",
            "description": "Spotify says its ability to direct its customers to external payment links in its iOS app has already had a positive impact on sales. In a newly filed amicus brief in support of Epic Games in its ongoing legal battle with Apple over external payments on the A…",
            "url": "https://techcrunch.com/2025/05/21/spotify says support for external payments on ios has already boosted subscriptions/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/05/spotify thumb no play.png?resize=1200,675",
            "publishedAt": "2025 05 21T19:20:36Z",
            "content": "Spotify says its ability to direct its customers to external payment links in its iOS app has already had a positive impact on sales. In a newly filed amicus brief in support of Epic Games in its ong… [+3411 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "LM Arena, the organization behind popular AI leaderboards, lands $100M | TechCrunch",
            "description": "LM Arena, a crowdsourced benchmarking project major AI labs rely on to test and market their AI models, has raised $100 million in a seed funding round that values the organization at $600 million, according to Bloomberg.",
            "url": "https://techcrunch.com/2025/05/21/lm arena the organization behind popular ai leaderboards lands 100m/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2020/02/GettyImages 115805871.jpg?resize=1200,867",
            "publishedAt": "2025 05 21T18:56:08Z",
            "content": "LM Arena, a crowdsourced benchmarking project that major AI labs rely on to test and market their AI models, has raised $100 million in a seed funding round that values the organization at $600 milli… [+820 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Lorenzo Franceschi bicchierai",
            "title": "Wyden: AT&T, T Mobile, and Verizon weren't notifying senators of surveillance requests | TechCrunch",
            "description": "Sen. Ron Wyden said in a letter that one U.S. phone carrier turned over Senate data to law enforcement without notifying the target.",
            "url": "https://techcrunch.com/2025/05/21/wyden att t mobile and verizon werent notifying senators of surveillance requests/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/senator ron wyden.jpg?resize=1200,800",
            "publishedAt": "2025 05 21T18:44:13Z",
            "content": "Sen. Ron Wyden sent a letter to fellow Senators on Wednesday, revealing that three major U.S. cellphone carriers did not have provisions to notify lawmakers about government surveillance requests, de… [+3715 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Jony Ive to lead OpenAI's design work following $6.5B acquisition of his company | TechCrunch",
            "description": "Jony Ive to lead OpenAI's design work following $6.5B acquisition of his company | TechCrunchtechcrunch.com",
            "url": "https://techcrunch.com/2025/05/21/jony ive to lead openais design work following 6 5b acquisition of his company/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/portrait.jpg?w=1000",
            "publishedAt": "2025 05 21T18:03:32Z",
            "content": "Famed Apple product designer Jony Ive will now lead creative and design work at OpenAI, the result on an unusual deal announced on Wednesday. OpenAI is acquiring io, the device startup that CEO Sam A… [+2402 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Aisha Malik",
            "title": "Spotify’s new ‘Upcoming Releases’ hub highlights future albums you may like",
            "description": "Spotify is launching a new hub dedicated to keeping users informed about soon to be released albums, the company announced on Wednesday. The hub, called “Upcoming Releases,” will feature personalized recommendations based on a user’s listening history. Users …",
            "url": "https://techcrunch.com/2025/05/21/spotifys new upcoming releases hub highlights future albums you may like/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/02/GettyImages 1783835425 crop e1717409949317.jpg?resize=1200,676",
            "publishedAt": "2025 05 21T18:00:28Z",
            "content": "Spotify is launching a new hub dedicated to keeping users informed about soon to be released albums, the company announced on Wednesday. The hub, called “Upcoming Releases,” will feature personalized… [+2206 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Dominic madori Davis",
            "title": "Field raises $17M to automate the drudgery of tax prep | TechCrunch",
            "description": "There is a new accounting software in town, coming in with a fresh $17.2 million raise and a desire to shake things up. The company, Filed, hopes to Filed, which uses AI to complete the lifecycle of a tax return, raised $17.2 million led by Northzone.",
            "url": "https://techcrunch.com/2025/05/21/filed raises 17m to automate the drudgery of tax prep/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/Filed Founders 4 1.jpg?resize=1200,808",
            "publishedAt": "2025 05 21T17:28:33Z",
            "content": "There is a new accounting software in town, coming in with a fresh $17.2 million raise and a desire to shake things up. The company, Filed, hopes to automate the grunt work.\r\nThe tax industry is faci… [+3093 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Meta launches program to encourage startups to use its Llama AI models | TechCrunch",
            "description": "Meta is launching a new program, Llama for Startups, to incentivize startups to adopt its Llama AI models.",
            "url": "https://techcrunch.com/2025/05/21/meta launches program to encourage startups to use its llama ai models/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/01/GettyImages 2173579488.jpg?resize=1200,799",
            "publishedAt": "2025 05 21T17:26:12Z",
            "content": "Meta is launching a new program to incentivize startups to adopt its Llama AI models. \r\nThe program, Llama for Startups, provides companies “direct support” from Meta’s Llama team, as well as funding… [+2392 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Tim De Chant",
            "title": "Trump administration may sell deep sea mining leases at startup’s urging | TechCrunch",
            "description": "Impossible Metals, a deep sea mining startup, submitted a formal request to the Department of the Interior to sell leases to mine the ocean floor.",
            "url": "https://techcrunch.com/2025/05/21/trump administration may sell deep sea mining leases at startups urging/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2022/06/Impossible Mining AUV.jpg?resize=1200,675",
            "publishedAt": "2025 05 21T17:01:52Z",
            "content": "The U.S. Department of the Interior said Tuesday that its beginning the process of selling deep sea mining leases after a request from startup Impossible Metals.\r\nThe agency said the process would ev… [+2309 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Szkutak",
            "title": "Tensions flare between the US and China over Huawei's AI chips | TechCrunch",
            "description": "China is threatening legal action against anyone enforcing the U.S.' recent guidelines against using Huawei's AI chips.",
            "url": "https://techcrunch.com/2025/05/21/tensions flare between the us and china over huaweis ai chips/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2020/07/GettyImages 1197009920.jpg?w=1024",
            "publishedAt": "2025 05 21T16:40:57Z",
            "content": "Just a few weeks after the U.S. and China made significant steps to de escalate the growing trade war between the two countries, tensions are flaring again  this time over semiconductors.\r\nChina’s Co… [+784 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Aisha Malik",
            "title": "Amazon rolls out short form AI powered audio product summaries for select items | TechCrunch",
            "description": "Amazon is testing short form AI powered audio product summaries on select product pages, the company announced on Wednesday. The audio summaries are",
            "url": "https://techcrunch.com/2025/05/21/amazon rolls out short form ai powered audio product summaries for select items/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2019/07/GettyImages 1062870692.jpg?resize=1200,800",
            "publishedAt": "2025 05 21T16:07:29Z",
            "content": "Amazon is testing short form AI powered audio product summaries on select product pages, the company announced on Wednesday. The audio summaries are voiced by what Amazon calls “AI powered shopping e… [+1762 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Google is bringing ads to AI Mode | TechCrunch",
            "description": "Google has detailed its plans to bring ads to AI Mode, the company's AI powered experience in Google Search.",
            "url": "https://techcrunch.com/2025/05/21/google is bringing ads to ai mode/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/ai mode rug shopping.jpeg?resize=1200,702",
            "publishedAt": "2025 05 21T16:03:29Z",
            "content": "Google on Wednesday detailed its plans to bring ads to AI Mode, the company’s AI powered experience in Google Search. \r\nAds may appear “where relevant” below and “integrated into” AI Mode responses a… [+2545 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Lauren Forristal",
            "title": "TED’s app launches a short form video feature ahead of potential TikTok ban",
            "description": "With TikTok still facing the possibility of a ban in the U.S., the popularity of short form video content continues to grow. The latest company to enter this space is TED, the non profit best known for its TED Talks featuring prominent figures like Bill Gates…",
            "url": "https://techcrunch.com/2025/05/21/teds app launches a short form video feature ahead of potential tiktok ban/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/TEDshortvideo.png?w=1200",
            "publishedAt": "2025 05 21T16:00:00Z",
            "content": "With TikTok still facing the possibility of a ban in the U.S., the popularity of short form video content continues to grow. The latest company to enter this space is TED, the non profit best known f… [+3631 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ivan Mehta",
            "title": "Siro lands $50M to expand its AI powered coaching for sales reps",
            "description": "An increasing number of meetings have an AI note taker present that transcribes the call and provides action items. Siro wants to do the same for sales folks who are on the ground and talking to customers face to face. The company on Wednesday announced it ha…",
            "url": "https://techcrunch.com/2025/05/21/siro lands 50m from signalfire to expand its ai powered coaching solution for on ground sales reps/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/Siro_productimage1.jpeg?w=1200",
            "publishedAt": "2025 05 21T16:00:00Z",
            "content": "An increasing number of meetings have an AI note taker present that transcribes the call and provides action items. Siro wants to do the same for sales folks who are on the ground and talking to cust… [+2389 chars]"
        },
        {
            "source": {
                "id": "the next web",
                "name": "The Next Web"
            },
            "author": "Siôn Geschwindt",
            "title": "Meta AI chief: ‘Inferiority complex’ is stunting European tech",
            "description": "Europe’s not lacking talent — it’s lacking confidence. That’s the verdict from Meta’s chief AI scientist Yann LeCun, who says an “inferiority complex” among European media and investors is holding back the continent’s tech industry. “The main reason why the E…",
            "url": "https://thenextweb.com/news/european tech struggle meta ai chief yann lecun",
            "urlToImage": "https://img cdn.tnwcdn.com/image/tnw blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp content%2Fblogs.dir%2F1%2Ffiles%2F2020%2F08%2FUntitled design 2020 08 14T190320.489.png&signature=6c5d0369fae3e5a1600b2e6ae46fd752",
            "publishedAt": "2025 05 21T15:59:09Z",
            "content": "Europes not lacking talent its lacking confidence.\r\nThats the verdict from Metas chief AI scientist Yann LeCun, who says an inferiority complex among European media and investors is holding back the … [+2968 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Connie Loizos",
            "title": "In a crowded VC landscape, Elizabeth Weil's Scribble Ventures shows that networks still matter | TechCrunch",
            "description": "In an era where hundreds of new venture funds have emerged, only to face a narrowing market as exits prove slippery, Elizabeth Weil's Scribble Ventures",
            "url": "https://techcrunch.com/2025/05/21/in a crowded vc landscape elizabeth weils scribble ventures shows that networks still matter/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/Screenshot 2025 05 09 at 12.40.52PM.png?resize=1200,519",
            "publishedAt": "2025 05 21T15:32:28Z",
            "content": "In an era where hundreds of new venture funds have emerged, only to face a narrowing market as exits prove slippery, Elizabeth Weil’s Scribble Ventures stands out as a case study in the importance of… [+3555 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Zack Whittaker",
            "title": "US student agrees to plead guilty to hack affecting tens of millions of students | TechCrunch",
            "description": "Prosecutors say the hacker stole information on 60 million students, an incident that matches the data breach at PowerSchool.",
            "url": "https://techcrunch.com/2025/05/21/us student agrees to plead guilty to hack affecting tens of millions of students/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/01/poweschool dark photo tc 3.jpg?resize=1200,837",
            "publishedAt": "2025 05 21T15:17:25Z",
            "content": "A Massachusetts student has agreed to plead guilty to federal charges relating to hacking and extorting one of the largest U.S. education tech companies, prosecutors confirmed Tuesday. \r\nMatthew D. L… [+2268 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Cody Corrall",
            "title": "A comprehensive list of 2025 tech layoffs | TechCrunch",
            "description": "A complete list of all the known layoffs in tech, from Big Tech to startups, broken down by month throughout 2024 and 2025.",
            "url": "https://techcrunch.com/2025/05/21/tech layoffs 2025 list/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2023/02/layoffs e1684946575831.jpg?w=1200",
            "publishedAt": "2025 05 21T15:14:52Z",
            "content": "The tech layoff wave is still kicking in 2025. Last year saw more than 150,000 job cuts across 549 companies, according to independent layoffs tracker Layoffs.fyi. So far this year, more than 22,000 … [+17885 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Bellan",
            "title": "Einride founder steps down as CEO amid push to scale electric, autonomous trucks | TechCrunch",
            "description": "Robert Falck, the founder of electric and autonomous trucking startup Einride, is stepping down from the role of CEO as the company works towards scaling its technology, raising more funds, and exploring the possibility of an IPO.",
            "url": "https://techcrunch.com/2025/05/21/einride founder steps down as ceo amid push to scale electric autonomous trucks/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/robert falck.jpg?resize=1200,801",
            "publishedAt": "2025 05 21T15:07:32Z",
            "content": "Robert Falck, the founder of electric and autonomous trucking startup Einride, is stepping down from the role of CEO as the company works toward scaling its technology, raising more funds, and explor… [+2112 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Mistral's new Devstral model was designed for coding | TechCrunch",
            "description": "AI startup Mistral has announced a new AI model focused on coding: Devstral. The company claims it's competitive on at least one programming benchmark.",
            "url": "https://techcrunch.com/2025/05/21/mistrals new devstral model was designed for coding/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/05/GettyImages 2147859992 e1713960898378.webp?resize=1200,676",
            "publishedAt": "2025 05 21T14:39:08Z",
            "content": "AI startup Mistral on Wednesday announced a new AI model focused on coding: Devstral. \r\nDevstral, which Mistral says was developed in partnership with AI company All Hands AI, is openly available und… [+3488 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Maxwell Zeff",
            "title": "Google's AI agents will bring you the web now | TechCrunch",
            "description": "Google I/O 2025 was largely dominated by AI agents that will parse the web for users, representing a new paradigm that could replace Search.",
            "url": "https://techcrunch.com/2025/05/21/googles ai agents will bring you the web now/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/GettyImages 2215577882.jpg?resize=1200,800",
            "publishedAt": "2025 05 21T14:18:24Z",
            "content": "For the last two decades, Google has brought people a list of algorithmically selected links from the web for any given search query. At I/O 2025, Google made clear that the concept of Search is firm… [+5283 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Techcrunch Events",
            "title": "TechCrunch Sessions: AI welcomes Tanka CEO Kisson Lin to talk AI native startups | TechCrunch",
            "description": "We're ecstatic to announce that Kisson Lin, founder and CEO of Tanka, will be joining us at TechCrunch Sessions: AI for a provocative — and instructive —",
            "url": "https://techcrunch.com/2025/05/21/techcrunch sessions ai welcomes tanka ceo kisson lin to talk ai native startups/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/Kisson Lin TechCrunch Sessions AI.jpg?resize=1200,675",
            "publishedAt": "2025 05 21T14:17:26Z",
            "content": "We’re ecstatic to announce that Kisson Lin, founder and CEO of Tanka, will be joining us at TechCrunch Sessions: AI for a provocative and instructive interview titled “Your Next Co Founder Will Be AI… [+2774 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Lauren Forristal",
            "title": "Shopify launches an AI powered store builder as part of its latest update | TechCrunch",
            "description": "Shopify is giving its merchants a slew of new AI powered tools designed to help them enhance the online shopping experience for their customers. This Shopify debuts an AI powered store builder for merchants along with other AI features.",
            "url": "https://techcrunch.com/2025/05/21/shopify launches an ai powered store builder as part of its latest update/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2020/09/GettyImages 1169040174.jpg?resize=1200,800",
            "publishedAt": "2025 05 21T14:02:27Z",
            "content": "Shopify is giving its merchants a slew of new AI powered tools designed to help them enhance the online shopping experience for their customers. This includes an AI store builder for users to set up … [+2382 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "TechCrunch Events",
            "title": "TechCrunch Disrupt 2025 Early Bird savings end on May 25",
            "description": "The early bird sees the future first — and saves the most. The old saying goes, “the early bird gets the worm.” But in tech — and in life — it’s not really about the worm. It’s about spotting what’s next before the crowd rushes in and the price goes up. TechC…",
            "url": "https://techcrunch.com/2025/05/21/techcrunch disrupt 2025 early bird savings end on may 25/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2023/05/disrupt expo hall crop.jpeg?resize=1200,753",
            "publishedAt": "2025 05 21T14:00:00Z",
            "content": "The early bird sees the future first and saves the most. The old saying goes, the early bird gets the worm. But in tech and in life its not really about the worm. Its about spotting whats next before… [+2385 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Zack Whittaker",
            "title": "Coinbase says its data breach affects at least 69,000 customers",
            "description": "The crypto giant said the unauthorized access to customer data dates back to late December 2024.",
            "url": "https://techcrunch.com/2025/05/21/coinbase says its data breach affects at least 69000 customers/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2022/04/GettyImages 1312540542.jpg?resize=1200,843",
            "publishedAt": "2025 05 21T13:24:13Z",
            "content": "Coinbase said at least 69,461 customers had personal and financial information stolen during a months long data breach that it disclosed last week.\r\nThe crypto giant confirmed the number of affected … [+825 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "Apollo for Reddit dev Christian Selig to join Digg as an advisor",
            "description": "Christian Selig, the iOS developer who ran the beloved third party Reddit client Apollo, is joining the new iteration of Digg as an advisor. Earlier this year, Digg’s original founder Kevin Rose and Reddit co founder Alexis Ohanian acquired what was left of D…",
            "url": "https://techcrunch.com/2025/05/21/apollo for reddit dev christian selig to join digg as an advisor/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/GettyImages 1183048050.jpg?resize=1200,800",
            "publishedAt": "2025 05 21T13:00:00Z",
            "content": "Christian Selig, the iOS developer who ran the beloved third party Reddit client Apollo, is joining the new iteration of Digg as an advisor.\r\nEarlier this year, Digg’s original founder Kevin Rose and… [+1917 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sean O'kane",
            "title": "Uber Freight bets big on AI tools to grow its business",
            "description": "Three years ago, as the pandemic caused chaos for companies big and small, Colgate Palmolive’s chief supply chain officer Luciano Sieber orchestrated a",
            "url": "https://techcrunch.com/2025/05/21/uber freight bets big on ai tools to grow its business/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/Copy of Static_Chat_1_Insights_AI.jpg?resize=1200,675",
            "publishedAt": "2025 05 21T11:02:12Z",
            "content": "Three years ago, as the pandemic caused chaos for companies big and small, Colgate Palmolives chief supply chain officer Luciano Sieber orchestrated a logistics blitz. \r\nThe result gave Sieber a bett… [+6638 chars]"
        },
        {
            "source": {
                "id": "the next web",
                "name": "The Next Web"
            },
            "author": "Siôn Geschwindt",
            "title": "US shoplifting ‘epidemic’ sparks demand for French AI cameras",
            "description": "Paris based AI startup Veesion has secured €38mn to fuel expansion to the US — where it looks to help cure the country’s shoplifting “epidemic.” Veesion’s AI based computer vision software is trained to spot gestures in security camera feeds, such as a shoppe…",
            "url": "https://thenextweb.com/news/us shoplifting epidemic veesion french ai cameras startup funding",
            "urlToImage": "https://img cdn.tnwcdn.com/image/tnw blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp content%2Fblogs.dir%2F1%2Ffiles%2F2025%2F05%2Fveesion ai security camera 1.jpg&signature=56a89f7414b061dc00d164a83df8eb2d",
            "publishedAt": "2025 05 21T07:00:12Z",
            "content": "Paris based AI startup Veesion has secured 38mn to fuel expansion to the US where it looks to help cure the countrys shoplifting epidemic.\r\nVeesions AI based computer vision software is trained to sp… [+2745 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ivan Mehta",
            "title": "Fortnite returns to the US App Store after a five year gap",
            "description": "Popular battle royale game Fortnite has finally returned to the U.S. App Store amid game maker Epic Games’ lengthy legal skirmish with Apple. As of Tuesday, Fortnite is also available on the Epic Games Store and AltStore in the EU. It’ll show up in App Store …",
            "url": "https://techcrunch.com/2025/05/20/fortnite returns to the us app store after a five year gap/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/Fortnite App Store.jpg?resize=1200,674",
            "publishedAt": "2025 05 21T05:11:29Z",
            "content": "Popular battle royale game Fortnite has finally returned to the U.S. App Store amid game maker Epic Games’ lengthy legal skirmish with Apple.\r\nAs of Tuesday, Fortnite is also available on the Epic Ga… [+976 chars]"
        },
        {
            "source": {
                "id": "the next web",
                "name": "The Next Web"
            },
            "author": "Thomas Macaulay",
            "title": "TNW Backstage dives into the mind bending world of brain computer interfaces",
            "description": "TNW Backstage returns this week to explore one of tech’s most fascinating frontiers: brain computer interfaces (BCIs). The capabilities of these neural devices are rapidly expanding. They’ve been implanted in skulls and worn as headbands. They’ve measured foc…",
            "url": "https://thenextweb.com/news/tnw backstage brain computer interfaces bcis",
            "urlToImage": "https://img cdn.tnwcdn.com/image/tnw blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp content%2Fblogs.dir%2F1%2Ffiles%2F2025%2F05%2FUntitled design 45.jpg&signature=f82fc697457788b546aee0b87d105ae8",
            "publishedAt": "2025 05 21T05:00:53Z",
            "content": "TNW Backstage returns this week to explore one of techs most fascinating frontiers: brain computer interfaces (BCIs).\r\nThe capabilities of these neural devices are rapidly expanding. Theyve been impl… [+2050 chars]"
        },
        {
            "source": {
                "id": "the next web",
                "name": "The Next Web"
            },
            "author": "Siôn Geschwindt",
            "title": "Belgian AI startup says it can automate 80% of work at ‘expert firms’",
            "description": "Belgium based Ravical has secured €7.3mn in pre seed funding to bring AI agents to professional services firms in tax, legal, accounting, and insurance.  Joris Van Der Gucht, Ravical’s CEO and co founder, said the “virtual employees” could do 80% of the work …",
            "url": "https://thenextweb.com/news/belgian ai agent startup ravical funding",
            "urlToImage": "https://img cdn.tnwcdn.com/image/tnw blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp content%2Fblogs.dir%2F1%2Ffiles%2F2025%2F05%2FRavical founder AI agents.jpg&signature=3b96591a9d294651e61b97e2b0418b4c",
            "publishedAt": "2025 05 21T03:00:21Z",
            "content": "Belgium based Ravical has secured 7.3mn in pre seed funding to bring AI agents to professional services firms in tax, legal, accounting, and insurance. \r\nJoris Van Der Gucht, Ravicals CEO and co foun… [+1884 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kirsten Korosec",
            "title": "Luminar kicks off another round of layoffs amid CEO’s sudden resignation | TechCrunch",
            "description": "Luminar, the lidar company founded by recently replaced CEO Austin Russell, is going through another restructuring, according to a recent regulatory",
            "url": "https://techcrunch.com/2025/05/20/luminar kicks off another round of layoffs amid ceos sudden resignation/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2018/11/Luminar City Streets 8.png?resize=1200,683",
            "publishedAt": "2025 05 20T23:58:56Z",
            "content": "Luminar, the lidar company founded by recently replaced CEO Austin Russell, is going through another restructuring, according to a recent regulatory filing. \r\nThis new round of layoffs, which the com… [+1581 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Maxwell Zeff",
            "title": "Google's Sergey Brin: 'I made a lot of mistakes with Google Glass' | TechCrunch",
            "description": "Google co founder Sergey Brin said he \"made a lot of mistakes with Google Glass\" during an onstage interview at Google I/O 2025 on Tuesday.",
            "url": "https://techcrunch.com/2025/05/20/googles sergey brin i made a lot of mistakes with google glass/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/DemisAndSergey.jpg?resize=1200,900",
            "publishedAt": "2025 05 20T23:19:31Z",
            "content": "Google co founder Sergey Brin said he “made a lot of mistakes with Google Glass” during an onstage interview at Google I/O 2025 on Tuesday. Brin was a surprise addition to an interview with Google De… [+2127 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Maxwell Zeff",
            "title": "Google commits $150M to develop AI glasses with Warby Parker | TechCrunch",
            "description": "Google is committing up to $150 million in Warby Parker to develop smart glasses powered by Gemini, and is investing in the eyewear company.",
            "url": "https://techcrunch.com/2025/05/20/google commits 150m to develop ai glasses with warby parker/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/glasses_2745f1.jpg?resize=1200,716",
            "publishedAt": "2025 05 20T21:38:55Z",
            "content": "Google says it will commit up to $150 million to the consumer eyewear company Warby Parker to jointly develop AI powered smart glasses based on Android XR, the companies said on Tuesday during Google… [+1243 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Amanda Scales, a Musk hire who helped lead DOGE, has returned to xAI | TechCrunch",
            "description": "Amanda Scales, the former xAI HR exec who helped lead billionaire Elon Musk's Department of Government Efficiency (DOGE) initiative while working at the U.S. Office of Personnel Management, recently returned to xAI, according to The New York Times.",
            "url": "https://techcrunch.com/2025/05/20/amanda scales a musk hire who helped lead doge has returned to xai/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/02/GettyImages 2198970101.jpg?resize=1200,800",
            "publishedAt": "2025 05 20T21:24:11Z",
            "content": "Amanda Scales, the former xAI HR exec who helped lead billionaire Elon Musk’s Department of Government Efficiency initiative while working at the U.S. Office of Personnel Management, recently returne… [+795 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sean O'kane",
            "title": "Musk says Tesla's self driving tests will be geofenced to 'the safest' parts of Austin | TechCrunch",
            "description": "The first test of Tesla's long promised robotaxi service in Austin, Texas next month will initially be limited to specific areas the company deems \"the",
            "url": "https://techcrunch.com/2025/05/20/musk says teslas self driving tests will be geofenced to the safest parts of austin/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/07/GettyImages 2152767708.jpg?resize=1200,857",
            "publishedAt": "2025 05 20T21:16:32Z",
            "content": "The first test of Tesla’s long promised robotaxi service in Austin, Texas next month will initially be limited to specific areas the company deems “the safest,” CEO Elon Musk told CNBC in an intervie… [+2069 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Techcrunch Events",
            "title": "Last Week to exhibit your startup at Sessions: AI | TechCrunch",
            "description": "Last day to exhibit your startup at TechCrunch Sessions: AI is May 23. Showcase your brand to 1000+ AI leaders. Secure your table here.",
            "url": "https://techcrunch.com/2025/05/20/exhibit your startup at techcrunch sessions ai while you still can/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/01/Google Exhibit Disrupt 2025.jpg?resize=1200,800",
            "publishedAt": "2025 05 20T19:54:27Z",
            "content": "If youve been waiting for the right moment to showcase your newest innovation to a massive AI community, this is it! You have until this Friday, May 23 at 11:59 p.m. PT, to secure one of the few rema… [+1459 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Techcrunch Events",
            "title": "Host a tailored Side Event at All Stage 2025 in Boston | TechCrunch",
            "description": "Looking to make a splash at TechCrunch All Stage 2025? Our Side Events initiative is a fantastic opportunity to engage with Boston's tech community in a",
            "url": "https://techcrunch.com/2025/05/20/host a tailored side event at all stage 2025 in boston/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/53198644537_2d538ce554_o.jpg?resize=1200,800",
            "publishedAt": "2025 05 20T18:56:35Z",
            "content": "Looking to make a splash at TechCrunch All Stage 2025? Our Side Events initiative is a fantastic opportunity to engage with Boston’s tech community in a dynamic and memorable manner. Plus, we’ll assi… [+1757 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Szkutak",
            "title": "Intel is reportedly exploring a sale for its networking and edge unit | TechCrunch",
            "description": "Intel CEO Lip Bu Tan wants the semiconductor company to refocus on its core business units: PCs and data center chips.",
            "url": "https://techcrunch.com/2025/05/20/intel is reportedly exploring a sale for its networking and edge unit/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2021/07/GettyImages 1230712303.jpg?w=1024",
            "publishedAt": "2025 05 20T18:44:55Z",
            "content": "Intel CEO Lip Bu Tan continues to consider ways to help semiconductor giant refocus on its core business.\r\nIntel is allegedly considering selling its networking and edge unit, according to reporting … [+674 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "TechCrunch Events",
            "title": "You’ve got 6 days to save $900 on TechCrunch Disrupt 2025 tickets",
            "description": "Less than one week left to save big on TechCrunch Disrupt 2025 passes! Disrupt 2025 prices increase on May 25 at 11:59 p.m. PT. Grab your pass now and: The clock is ticking — lock in your massive savings here. Why attend TechCrunch Disrupt 2025? From October …",
            "url": "https://techcrunch.com/2025/05/20/youve got 6 days to save 900 on techcrunch disrupt 2025 tickets/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/10/54106164443_a40d659cce_k.jpg?resize=1200,800",
            "publishedAt": "2025 05 20T18:05:00Z",
            "content": "Less than one week left to save big on TechCrunch Disrupt 2025 passes!\r\nDisrupt 2025 prices increase on May 25 at 11:59 p.m. PT. Grab your pass now and:\r\n<ul><li>Save up to $900 on your ticket</li><l… [+1941 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Maxwell Zeff",
            "title": "Google rolls out Project Mariner, its web browsing AI agent | TechCrunch",
            "description": "Google is rolling out Project Mariner, an AI agent born out of Google DeepMind that browses and uses websites on a user's behalf.",
            "url": "https://techcrunch.com/2025/05/20/google rolls out project mariner its web browsing ai agent/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2018/09/GettyImages 956088114.jpg?w=1024",
            "publishedAt": "2025 05 20T17:55:41Z",
            "content": "Google announced during Google I/O 2025 that it’s rolling out Project Mariner, the company’s experimental AI agent that browses and uses websites, to more users and developers. Google also says it’s … [+3271 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers, Karyne Levy",
            "title": "Google I/O 2025: Everything announced at this year’s developer conference",
            "description": "Google I/O, Google's biggest developer conference of the year, is nearly upon us. Here's what to expect, including updates to Gemini and Android.",
            "url": "https://techcrunch.com/2025/05/20/google i o 2025 everything announced at this years developer conference/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/05/Screenshot 2025 05 20 at 10.49.31.png?resize=1200,641",
            "publishedAt": "2025 05 20T17:52:37Z",
            "content": "Google I/O 2025, Google’s biggest developer conference of the year, takes place Tuesday and Wednesday at the Shoreline Amphitheatre in Mountain View. We’re on the ground bringing you the latest updat… [+9225 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Maxwell Zeff",
            "title": "Google updates the Gemini app with real time AI video, Deep Research, and more | TechCrunch",
            "description": "Google announced a slew of updates to the Gemini app, including a rollout of its Gemini Live video and screen sharing features.",
            "url": "https://techcrunch.com/2025/05/20/google updates the gemini app with real time ai video deep research and more/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2025/03/GettyImages 2197065135.jpg?resize=1200,800",
            "publishedAt": "2025 05 20T17:51:34Z",
            "content": "Google announced several updates to the Gemini AI chatbot app during Google I/O 2025, including more broadly available multimodal AI features, updated AI models, and deeper integrations with Google’s… [+3107 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Google Play adds topic pages, audio previews, and new subscription tools for developers",
            "description": "Google is rolling out a series of upgrades to its Play Store to help Android app developers better market their software and services to consumers. Among the highlights are new tools for managing subscription apps, topic pages that let users explore a specifi…",
            "url": "https://techcrunch.com/2025/05/20/google play adds topic pages audio previews and subscription tools for developers/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2022/03/GettyImages 1235737290.jpeg?w=1024",
            "publishedAt": "2025 05 20T17:50:28Z",
            "content": "Google is rolling out a series of upgrades to its Play Store to help Android app developers better market their software and services to consumers. Among the highlights are new tools for managing sub… [+5045 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ivan Mehta",
            "title": "Google shows off Android XR based glasses, announces Warby Parker team up | TechCrunch",
            "description": "Google is taking on Meta's Ray Ban Meta glasses by announcing new partnerships at Google I/O 2025 with Gentle Monster and Warby Parker to create smart glasses based on Android XR.",
            "url": "https://techcrunch.com/2025/05/20/google shows off android xr based glasses announces warby parker team up/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/05/google io header.jpeg?resize=1200,800",
            "publishedAt": "2025 05 20T17:49:43Z",
            "content": "Google is taking on Meta’s Ray Ban Meta glasses by announcing new partnerships at Google I/O 2025 with Gentle Monster and Warby Parker to create smart glasses based on Android XR.\r\nGoogle launched th… [+1191 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Veo 3 can generate videos — and soundtracks to go along with them | TechCrunch",
            "description": "Google's latest video generating AI model, Veo 3, can create audio to go along with the clips that it generates.",
            "url": "https://techcrunch.com/2025/05/20/googles veo 3 can generate videos and soundtracks to go along with them/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/05/ETB2801.jpg?resize=1200,800",
            "publishedAt": "2025 05 20T17:49:31Z",
            "content": "Google’s latest video generating AI model, Veo 3, can create audio to go along with the clips that it generates.\r\nOn Tuesday during the Google I/O 2025 developer conference, Google unveiled Veo 3, wh… [+3050 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Imagen 4 is Google's newest AI image generator | TechCrunch",
            "description": "Google is rolling out a new image generating AI model, Imagen 4, that the company claims delivers higher quality results than its previous image generator, Imagen 3.",
            "url": "https://techcrunch.com/2025/05/20/imagen 4 is googles newest ai image generator/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2020/06/GettyImages 1207206244.jpg?resize=1200,800",
            "publishedAt": "2025 05 20T17:49:29Z",
            "content": "Google is rolling out a new image generating AI model, Imagen 4, that the company claims delivers higher quality results than its previous image generator, Imagen 3. \r\nUnveiled at Google I/O 2025 on … [+1290 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Google's 3D teleconferencing platform, now called Beam, will ship later in 2025 | TechCrunch",
            "description": "Google is rebranding Project Starline, its corporate focused teleconferencing platform that uses 3D imaging, and recommitting to shipping it this year.",
            "url": "https://techcrunch.com/2025/05/20/googles 3d teleconferencing platform now called beam will ship later in 2025/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2024/05/starline.jpg?resize=1200,675",
            "publishedAt": "2025 05 20T17:49:29Z",
            "content": "Google announced at Google I/O 2025 that it is rebranding Project Starline, its corporate focused teleconferencing platform that uses 3D imaging, and recommitting to shipping it this year.\r\nStarline,… [+1934 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Google's new SynthID Detector can help spot AI slop | TechCrunch",
            "description": "Google is launching a way to quickly check whether an image, video, audio file, or snippet of text was created using one of its AI tools.",
            "url": "https://techcrunch.com/2025/05/20/googles new synthid detector can help spot ai slop/",
            "urlToImage": "https://techcrunch.com/wp content/uploads/2015/10/486234008.jpg?resize=1200,801",
            "publishedAt": "2025 05 20T17:49:27Z",
            "content": "Google is launching a way to quickly check whether an image, video, audio file, or snippet of text was created using one of its AI tools. \r\nSynthID Detector, announced Tuesday at Google I/O 2025, is … [+1132 chars]"
        }
    ]*/
    /*results = [
 {
    "source": {
        "id": "bbc news",
            "name": "BBC News"
    },
    "author": "BBC News",
        "title": "Odisha: Indian teacher gets life sentence for deadly 'wedding bomb' murders",
            "description": "The bomb, disguised as a wedding gift killed a software engineer and his great aunt just days after his wedding in 2018.",
                "url": "https://www.bbc.co.uk/news/results/c071myeve25o",
                    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/a55b/live/25f8b0f0 3b90 11f0 ab2d a33f931f78dd.jpg",
                        "publishedAt": "2025 05 28T09:52:21.2132987Z",
                            "content": "While acknowledging the prosecution's argument that it was a \"heinous\" crime, the court declined to classify it as a \"rarest of the rare\" case deserving the death penalty.\r\nThe BBC covered the incide… [+2761 chars]"
},
{
    "source": {
        "id": "bbc news",
            "name": "BBC News"
    },
    "author": "BBC News",
        "title": "Giant's Causeway visitors urged not to jam coins into rocks",
            "description": "The coins are damaging the renowned rock formations of one of Northern Ireland's most famous sites.",
                "url": "https://www.bbc.co.uk/news/results/c14kn1ekvymo",
                    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/f8d6/live/39ccb600 3238 11f0 bbd7 d7ac0a5cd218.jpg",
                        "publishedAt": "2025 05 28T08:22:23.058796Z",
                            "content": "Signs will also be put up and visitors are already warned not to insert the coins by tour guides at the Giant's Causeway, like Mark Adams.\r\n\"I think it's a simple thing of wanting to leave something … [+635 chars]"
},
{
    "source": {
        "id": "bbc news",
            "name": "BBC News"
    },
    "author": "BBC News",
        "title": "How nitrous oxide became a deadly   but legal   American addiction",
            "description": "Nitrous oxide overdoses have increased in the US, but the substance is still legal as a \"culinary product\".",
                "url": "https://www.bbc.co.uk/news/results/cly36n88n56o",
                    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/340d/live/0a3d8ca0 3a3c 11f0 9fe7 6dcc0a293de1.jpg",
                        "publishedAt": "2025 05 28T06:52:24.9723115Z",
                            "content": "In a worst case scenario, inhalation of nitrous oxide can lead to hypoxia, where the brain does not get enough oxygen. This can result in death. Regular inhalation can also lead to a Vitamin B12 defi… [+3658 chars]"
},
{
    "source": {
        "id": "bbc news",
            "name": "BBC News"
    },
    "author": "BBC News",
        "title": "Thames Water fined £122.7m in biggest ever penalty",
            "description": "The company has been fined for breaching rules over wastewater operations and dividend payments.",
                "url": "https://www.bbc.co.uk/news/results/cgeg5vy9q8eo",
                    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/9bd9/live/d5f2f220 35ca 11f0 96c3 cf669419a2b0.jpg",
                        "publishedAt": "2025 05 28T06:52:21.098275Z",
                            "content": "Thames Water has been fined £122.7m for breaching of rules relating to its wastewater operations and dividends payments.\r\nIt is the biggest ever penalty issued by the water regulator Ofwat.\r\nThe regu… [+265 chars]"
},
{
    "source": {
        "id": "bbc news",
            "name": "BBC News"
    },
    "author": "BBC News",
        "title": "US halts student visa appointments and plans expanded social media vetting",
            "description": "The state department says the policy will have \"significant implications\" for embassies and consulates.",
                "url": "https://www.bbc.co.uk/news/results/cy75eenl46eo",
                    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/73c2/live/b01b7440 3b7f 11f0 864e f9e10943d317.jpg",
                        "publishedAt": "2025 05 28T05:37:21.9406893Z",
                            "content": "The state department memo, viewed by the BBC's US partner CBS News, directed US embassies on Tuesday to remove any unfilled appointments from their calendars for students seeking visas, but said thos… [+737 chars]"
},
{
    "source": {
        "id": "bbc news",
            "name": "BBC News"
    },
    "author": "BBC News",
        "title": "Met Police: Call handler resigns over colleague's reinstatement",
            "description": "Izzy Vine reported a colleague who made discriminatory remarks but resigned after he was reinstated.",
                "url": "https://www.bbc.co.uk/news/results/c14ke41yg18o",
                    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/655b/live/97dda310 38bb 11f0 8c94 950112f6e649.jpg",
                        "publishedAt": "2025 05 28T05:37:19.769354Z",
                            "content": "Ms Vine said his reinstatement had left her \"outraged and upset\".\r\n\"Everything I signed up to be and wanted to be was shattered,\" she said. \"It left me feeling like a fraud, because I had to go back … [+514 chars]"
},
{
    "source": {
        "id": "bbc news",
            "name": "BBC News"
    },
    "author": "BBC News",
        "title": "A1 Northumberland: Homes 'left to rot' on cancelled road route",
            "description": "Three families speak of the \"utter hell\" of losing their homes to a road scheme that was cancelled.",
                "url": "https://www.bbc.co.uk/news/results/cly8yl2rv0jo",
                    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/0c3d/live/0f834cb0 3869 11f0 bcaf 43da72a549d2.jpg",
                        "publishedAt": "2025 05 28T02:37:18.7857254Z",
                            "content": "The A1 scheme stalled for a few years, alternating between ready to start and still on hold until, in May 2024, Rishi Sunak's government approved the Development Consent Order which gave the final go… [+507 chars]"
},
{
    "source": {
        "id": "bbc news",
            "name": "BBC News"
    },
    "author": "BBC News",
        "title": "Newspaper headlines: 'Drug drive arrest' and 'Worried about Trump?'",
            "description": "The driver in the Liverpool incident is suspected of acting while using drugs and the King visits Canada.",
                "url": "https://www.bbc.co.uk/news/results/c87j44rdjvzo",
                    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/2e41/live/0d4ef100 3b5d 11f0 b0d7 71720076f013.png",
                        "publishedAt": "2025 05 28T01:37:18.0342595Z",
                            "content": "Image caption, The King \"insists\" Canada is \"strong and free\" as he smiles at the country's Prime Minister, Mark Carney, in The Daily Telegraph's front page splash. A Matt cartoon further down the pa… [+443 chars]"
},
{
    "source": {
        "id": "bbc news",
            "name": "BBC News"
    },
    "author": "BBC News",
        "title": "Thousands in line for payouts over forced meter fitting scandal",
            "description": "More than £70m is being paid to customers who were forced to switch to prepaying for energy.",
                "url": "https://www.bbc.co.uk/news/results/c308vzqj975o",
                    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/692b/live/6809c870 3b41 11f0 b0d7 71720076f013.png",
                        "publishedAt": "2025 05 28T00:37:28.4259011Z",
                            "content": "Eligible customers could receive payments starting at £40, rising to £250 or £500, depending on the way they were treated by their energy supplier, or where processes were not followed adequately.\r\nT… [+994 chars]"
},
{
    "source": {
        "id": "bbc news",
            "name": "BBC News"
    },
    "author": "BBC News",
        "title": "Tesco shoppers mock 'VAR' style cameras at self checkout",
            "description": "The supermarket's latest use of technology to crack down on shoplifting has led to both jokes and complaints.",
                "url": "https://www.bbc.co.uk/news/results/c20q5q92y2yo",
                    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/27dc/live/dd2d52e0 3b21 11f0 aeea fdc959b41973.jpg",
                        "publishedAt": "2025 05 28T00:37:25.3954067Z",
                            "content": "Tesco said it had rolled out the technology across some of its stores in a bid to help customers using self service checkouts to identify if an item hasn't scanned properly.\r\nThe supermarket said it … [+628 chars]"
}
]*/

    /*results = [
        {
            "id": "tv3",
            "name": "tv3",
            "url": "https://www.tv3.lt",
            "icon": "https://n.bytvi.com/tv3.png",
            "priority": 522167,
            "description": "tv3.lt Naujienų portale rasite svarbiausias šiandienos naujienas, išskirtinius TV3 žinių video reportažus, Lietuvos žmonių istorijas ir TV3 televizijos video turinį.",
            "category": [
                "health",
                "sports",
                "top",
                "science",
                "technology",
                "business"
            ],
            "language": [
                "lithuanian"
            ],
            "country": [
                "lithuania"
            ],
            "total_article": 107207,
            "last_fetch": "2025-05-28 13:16:49"
        },
        {
            "id": "technologyreview",
            "name": "Technologyreview",
            "url": "https://www.technologyreview.com",
            "icon": "https://n.bytvi.com/technologyreview.png",
            "priority": 15074,
            "description": "Emerging technology news & insights | AI, Climate Change, BioTech, and more",
            "category": [
                "top"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 1617,
            "last_fetch": "2025-05-29 10:02:10"
        },
        {
            "id": "thenewage",
            "name": "The New Age",
            "url": "https://sashares.co.za/the-new-age/#gs.lyagtd",
            "icon": "https://n.bytvi.com/thenewage.png",
            "priority": 826718,
            "description": "The New Age newspaper was a South African national daily newspaper, owned and operated by TNA Media (Pty) Ltd. TNA Media was established in June",
            "category": [
                "business"
            ],
            "language": [
                "english"
            ],
            "country": [
                "south africa"
            ],
            "total_article": 882,
            "last_fetch": "2025-05-29 03:18:00"
        },
        {
            "id": "yahoo",
            "name": "Yahoo! News",
            "url": "https://news.yahoo.com",
            "icon": "https://n.bytvi.com/yahoo.png",
            "priority": 17,
            "description": "The latest news and headlines from Yahoo! News. Get breaking news stories and in-depth coverage with videos and photos.",
            "category": [
                "sports",
                "entertainment",
                "top",
                "world",
                "science",
                "environment",
                "business",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "canada",
                "united kingdom",
                "united states of america",
                "india",
                "australia"
            ],
            "total_article": 1911255,
            "last_fetch": "2025-05-29 10:00:36"
        },
        {
            "id": "telugu_samayam",
            "name": "Samayam Telugu",
            "url": "https://telugu.samayam.com",
            "icon": "https://n.bytvi.com/telugu_samayam.png",
            "priority": 20287,
            "description": "Telugu News: Read latest telugu varthalu of Andhra Pradesh, Telangana, Cinema, TV, Sports, Business and more on Telugu Samayam News Website. u0c26u0c47u0c36u0c02, u0c30u0c3eu0c37u0c4du0c1fu0c4du0c30u0c02, u0c2au0c4du0c30u0c2au0c02u0c1au0c02, u0c15u0c4du0c30u0c40u0c21u0c32u0c41, u0c35u0c4du0c2fu0c3eu0c2au0c3eu0c30u0c02, u0c35u0c3fu0c28u0c4bu0c26u0c02, u0c35u0c3fu0c26u0c4du0c2f u0c35u0c02u0c1fu0c3f u0c35u0c3eu0c30u0c4du0c24u0c32u0c28u0c41 u0c1au0c26u0c35u0c02u0c21u0c3f",
            "category": [
                "sports",
                "entertainment",
                "tourism",
                "top",
                "other",
                "lifestyle",
                "technology",
                "business"
            ],
            "language": [
                "telugu"
            ],
            "country": [
                "india"
            ],
            "total_article": 10,
            "last_fetch": "2025-05-29 09:47:41"
        },
        {
            "id": "e15",
            "name": "E15",
            "url": "https://www.e15.cz",
            "icon": "https://n.bytvi.com/e15.png",
            "priority": 1944834,
            "description": "Ekonomick",
            "category": [
                "top"
            ],
            "language": [
                "czech"
            ],
            "country": [
                "czech republic"
            ],
            "total_article": 10887,
            "last_fetch": "2025-05-29 09:52:11"
        },
        {
            "id": "robesonian",
            "name": "Robesonian",
            "url": "https://www.robesonian.com",
            "icon": "https://n.bytvi.com/robesonian.png",
            "priority": 52101,
            "description": "Headlines from The Robesonian and robesonian.com   serving Lumberton and all of Robeson County, N.C.",
            "category": [
                "sports",
                "top",
                "other",
                "business",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 2961,
            "last_fetch": "2025-05-29 09:39:44"
        },
        {
            "id": "jornalggn",
            "name": "Jornal GGN",
            "url": "https://jornalggn.com.br",
            "icon": "https://n.bytvi.com/jornalggn.jpg",
            "priority": 3866117,
            "description": "Ver todos os Stories",
            "category": [
                "health",
                "world",
                "environment",
                "politics"
            ],
            "language": [
                "portuguese"
            ],
            "country": [
                "brazil"
            ],
            "total_article": 5020,
            "last_fetch": "2025-05-29 00:18:46"
        },
        {
            "id": "thechronicle",
            "name": "The Chronicle",
            "url": "https://www.thechronicle.com",
            "icon": "https://n.bytvi.com/thechronicle.jpg",
            "priority": 159634,
            "description": "As the unrivaled leader in higher education journalism, we serve our readers with indispensable real-time news and deep insights",
            "category": [
                "top",
                "sports",
                "other"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 11641,
            "last_fetch": "2025-05-28 12:42:59"
        },
        {
            "id": "yale",
            "name": "Yalenews",
            "url": "https://news.yale.edu",
            "icon": "https://n.bytvi.com/yale.png",
            "priority": 1037,
            "description": "Yale University news from the Office of Public Affairs &amp; Communications.",
            "category": [
                "health",
                "other",
                "education",
                "world",
                "science",
                "environment",
                "business",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 368,
            "last_fetch": "2025-05-29 09:01:17"
        },
        {
            "id": "internetprotocol",
            "name": "The Internet Protocol",
            "url": "https://internetprotocol.co",
            "icon": "https://n.bytvi.com/internetprotocol.png",
            "priority": 3543602,
            "description": "The Internet Protocol is a safe harbor where our readers can feel tech-savvy, stay up to date, and simply enjoy refined news.",
            "category": [
                "technology",
                "health",
                "entertainment"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united kingdom"
            ],
            "total_article": 3161,
            "last_fetch": "2025-05-29 08:07:37"
        },
        {
            "id": "necn",
            "name": "NECN",
            "url": "https://www.necn.com",
            "icon": "https://n.bytvi.com/necn.png",
            "priority": 19199,
            "description": "Welcome to NECN, the place for news, lifestyle tips, weather and everything New England!",
            "category": [
                "world",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 34097,
            "last_fetch": "2025-05-28 13:39:05"
        },
        {
            "id": "pinstripealley",
            "name": "Pinstripe Alley",
            "url": "https://www.pinstripealley.com",
            "icon": "https://n.bytvi.com/pinstripealley.png",
            "priority": 2887,
            "description": "Your best source for quality New York Yankees news, rumors, analysis, stats, and scores from the fan perspective.",
            "category": [
                "sports"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 11163,
            "last_fetch": "2025-05-29 10:01:01"
        },
        {
            "id": "suomenkuvalehti",
            "name": "Etusivu   Suomenkuvalehti.fi",
            "url": "https://suomenkuvalehti.fi",
            "icon": "https://n.bytvi.com/suomenkuvalehti.jpg",
            "priority": 4662737,
            "description": "Suomen Kuvalehti ja Suomenkuvalehti.fi",
            "category": [
                "top"
            ],
            "language": [
                "finnish"
            ],
            "country": [
                "finland"
            ],
            "total_article": 3474,
            "last_fetch": "2025-05-29 03:04:38"
        },
        {
            "id": "ventspils",
            "name": "Ventspils",
            "url": "https://www.ventspils.lv",
            "icon": "https://n.bytvi.com/ventspils.png",
            "priority": 231725,
            "description": "",
            "category": [
                "top",
                "business"
            ],
            "language": [
                "latvian"
            ],
            "country": [
                "latvia"
            ],
            "total_article": 5347,
            "last_fetch": "2025-05-27 21:24:08"
        },
        {
            "id": "telegraflv",
            "name": "Telegraflv",
            "url": "https://telegraf.bb.lv",
            "icon": "https://n.bytvi.com/telegraflv.png",
            "priority": 1721566,
            "description": "",
            "category": [
                "top"
            ],
            "language": [
                "russian"
            ],
            "country": [
                "latvia"
            ],
            "total_article": 3160,
            "last_fetch": "2025-05-29 08:51:16"
        },
        {
            "id": "cope_es",
            "name": "COPE",
            "url": "https://www.cope.es",
            "icon": "https://n.bytvi.com/cope_es.png",
            "priority": 130249,
            "description": "Emisora de radio española. La Radio en directo y a la carta con Herrera en COPE, Tiempo de Juego, El Partidazo de COPE y el resto de programas con el mejor entretenimiento.",
            "category": [
                "sports",
                "entertainment",
                "other",
                "top",
                "world",
                "technology",
                "business"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "spain"
            ],
            "total_article": 66430,
            "last_fetch": "2025-05-29 10:05:15"
        },
        {
            "id": "diariolibre_dr",
            "name": "Diario Libre",
            "url": "https://www.diariolibre.com",
            "icon": "https://n.bytvi.com/diariolibre_dr.png",
            "priority": 25139,
            "description": "Diario Libre: el periódico líder en noticias de República Dominicana y la comunidad dominicana global.",
            "category": [
                "top",
                "sports",
                "world",
                "business"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "dominican republic"
            ],
            "total_article": 65576,
            "last_fetch": "2025-05-29 09:17:21"
        },
        {
            "id": "timesofisrael",
            "name": "The Times of Israel",
            "url": "https://www.timesofisrael.com",
            "icon": "https://n.bytvi.com/timesofisrael.png",
            "priority": 3381,
            "description": "The Times of Israel is your one-stop site for news, features, live blogs, and more   on Israel, the region & the Jewish world.",
            "category": [
                "top"
            ],
            "language": [
                "english",
                "french",
                "arabic",
                "persian"
            ],
            "country": [
                "israel"
            ],
            "total_article": 52406,
            "last_fetch": "2025-05-28 09:17:52"
        },
        {
            "id": "wvnews",
            "name": "WV News",
            "url": "https://www.wvnews.com",
            "icon": "https://n.bytvi.com/wvnews.jpg",
            "priority": 23920,
            "description": "News, Sports, Marketing and Events for West Virginia including WVU, High School, Education, Politics, Business, local government, state government, technology, law, and more",
            "category": [
                "sports",
                "entertainment",
                "top",
                "other",
                "world",
                "business",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 88083,
            "last_fetch": "2025-05-29 07:02:22"
        },
        {
            "id": "mashriqtv",
            "name": "Mashriq News",
            "url": "https://mashriqtv.pk",
            "icon": "https://n.bytvi.com/mashriqtv.png",
            "priority": 1579509,
            "description": "Mashriq Latest Urdu News Provides Latest Breaking News in Urdu from Pakistan, Khyber Pakhtunkhwa, Peshawar &amp; all over the world",
            "category": [
                "health",
                "entertainment",
                "sports",
                "top",
                "world",
                "politics"
            ],
            "language": [
                "urdu"
            ],
            "country": [
                "pakistan"
            ],
            "total_article": 6,
            "last_fetch": "2025-05-29 08:36:12"
        },
        {
            "id": "maganguehoy",
            "name": "MagangueHoy",
            "url": "https://maganguehoy.co",
            "icon": null,
            "priority": 6182325,
            "description": "Magangue Hoy y sus Regiones",
            "category": [
                "health",
                "entertainment",
                "sports",
                "top",
                "other",
                "crime",
                "world",
                "technology",
                "business",
                "politics"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "colombia"
            ],
            "total_article": 278,
            "last_fetch": "2025-05-20 04:22:56"
        },
        {
            "id": "keymodelworld",
            "name": "Hornby Magazine",
            "url": "https://www.keymodelworld.com",
            "icon": "https://n.bytvi.com/keymodelworld.png",
            "priority": 1253847,
            "description": "Key Publishing's model railway magazine written for modellers by modellers. New issue available on the first Thursday of every month featuring all the latest model railway news, reviews, features and more.",
            "category": [
                "top"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united kingdom"
            ],
            "total_article": 1692,
            "last_fetch": "2025-05-28 12:15:38"
        },
        {
            "id": "agroportal",
            "name": "Agroportal Pt",
            "url": "https://www.agroportal.pt",
            "icon": "https://n.bytvi.com/agroportal.png",
            "priority": 442377,
            "description": "Agricultura, desenvolvimento rural, política agrícola (pac), biológica, agroalimentar, cereais, fruticultura, hortícolas, floresta, pecuária, notícias",
            "category": [
                "other",
                "environment"
            ],
            "language": [
                "portuguese"
            ],
            "country": [
                "portugal"
            ],
            "total_article": 822,
            "last_fetch": "2025-05-29 10:06:55"
        },
        {
            "id": "lateja_cr",
            "name": "La Teja",
            "url": "https://www.lateja.cr",
            "icon": "https://n.bytvi.com/lateja_cr.png",
            "priority": 196334,
            "description": "La Teja es el medio digital más leído de todo Costa Rica, infórmese aquí de las últimas noticias nacionales e internaciones de sucesos, farándula, deportes y política.",
            "category": [
                "top"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "costa rica"
            ],
            "total_article": 25932,
            "last_fetch": "2025-05-28 12:57:50"
        },
        {
            "id": "guatemala",
            "name": "Guatemala",
            "url": "https://www.guatemala.com",
            "icon": "https://n.bytvi.com/guatemala.png",
            "priority": 184563,
            "description": "En Guatemala.com encontrarás noticias del país; los mejores eventos de música, deportes y cultura; guía de lugares más visitados y un directorio completo.",
            "category": [
                "top",
                "sports",
                "technology",
                "food"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "guatemala"
            ],
            "total_article": 2438,
            "last_fetch": "2025-05-28 21:33:35"
        },
        {
            "id": "varsity",
            "name": "Varsity",
            "url": "https://www.varsity.co.uk",
            "icon": "https://n.bytvi.com/varsity.jpg",
            "priority": 141700,
            "description": "Home of the University of Cambridge’s student newspaper, Varsity. Get the latest News, Comment, Sport, Features, Videos, Culture, Reviews and more from the University and beyond.",
            "category": [
                "top",
                "sports",
                "entertainment"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united kingdom"
            ],
            "total_article": 1974,
            "last_fetch": "2025-05-28 12:10:54"
        },
        {
            "id": "lexpress_fr",
            "name": "Lexpress Fr",
            "url": "https://www.lexpress.fr",
            "icon": "https://n.bytvi.com/lexpress_fr.png",
            "priority": 1003057,
            "description": "Information à la Une : l'actualité et l'information en direct sur LExpress.fr. Infos politiques, internationales, économiques, sportives et culturelles.",
            "category": [
                "health",
                "entertainment",
                "sports",
                "other",
                "top",
                "lifestyle",
                "world",
                "environment",
                "business",
                "politics"
            ],
            "language": [
                "french"
            ],
            "country": [
                "france"
            ],
            "total_article": 9557,
            "last_fetch": "2025-05-28 13:01:00"
        },
        {
            "id": "risingnepaldaily",
            "name": "The Rising Nepal",
            "url": "https://risingnepaldaily.com",
            "icon": "https://n.bytvi.com/risingnepaldaily.png",
            "priority": 775627,
            "description": "The Rising Nepal is a Nepal's first English broadsheet daily published by the Gorkhapatra Corporation, an undertaking of the Government of Nepal. The risingnepaldaily.com is online edition of daily newspaper.",
            "category": [
                "top"
            ],
            "language": [
                "english"
            ],
            "country": [
                "nepal"
            ],
            "total_article": 15335,
            "last_fetch": "2025-05-28 12:27:23"
        },
        {
            "id": "dailyjournalonline",
            "name": "Daily Journal Online",
            "url": "https://dailyjournalonline.com",
            "icon": "https://n.bytvi.com/dailyjournalonline.png",
            "priority": 74191,
            "description": "The Daily Journal is a daily newspaper in Park Hills, Missouri, United States.It covers local news in the counties of St. Francois, Ste.",
            "category": [
                "other",
                "top",
                "business"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 2566,
            "last_fetch": "2025-05-28 11:38:51"
        },
        {
            "id": "expresscomputer",
            "name": "Express Computer",
            "url": "https://www.expresscomputer.in",
            "icon": "https://n.bytvi.com/expresscomputer.png",
            "priority": 190419,
            "description": "Get all the latest Information technology (IT) News &amp; Updates, Latest Tech News &amp; Updates, Enterprise IT, Tech &amp; Technology News for CIO &amp; Tech Community from Express Computer",
            "category": [
                "top",
                "science",
                "technology",
                "business",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "india"
            ],
            "total_article": 6487,
            "last_fetch": "2025-05-29 08:49:05"
        },
        {
            "id": "vneconomy",
            "name": "VnEconomy",
            "url": "https://vneconomy.vn",
            "icon": "https://n.bytvi.com/vneconomy.png",
            "priority": 970596,
            "description": "Vietnam Economic Times   G&#243;c nh&#236;n to&#224;n cảnh về nền kinh tế Việt Nam",
            "category": [
                "top",
                "world",
                "business",
                "technology"
            ],
            "language": [
                "vietnamese"
            ],
            "country": [
                "vietnam"
            ],
            "total_article": 17,
            "last_fetch": "2025-05-29 09:36:48"
        },
        {
            "id": "lefigaro",
            "name": "LE FIGARO",
            "url": "https://www.lefigaro.fr",
            "icon": "https://n.bytvi.com/lefigaro.png",
            "priority": 17866,
            "description": "A la Une : Retrouvez toute l'actualité en France, à l'international, l'actualité économique et politique avec Le Figaro",
            "category": [
                "health",
                "sports",
                "entertainment",
                "top",
                "other",
                "lifestyle",
                "science",
                "technology",
                "environment",
                "business",
                "politics"
            ],
            "language": [
                "french"
            ],
            "country": [
                "france"
            ],
            "total_article": 144700,
            "last_fetch": "2025-05-28 20:42:10"
        },
        {
            "id": "galiciadigital",
            "name": "GaliciaDigital",
            "url": "https://www.galiciadigital.com",
            "icon": "https://n.bytvi.com/galiciadigital.jpg",
            "priority": 5434933,
            "description": "GaliciaDigital es una plataforma en Internet formada por 25 portales dedicados a todo tipo de temas relacionados con Galicia. En octubre de 2012 recibe m&aacute;s de 35.000 visitas diarias en el conjunto de sus portales.",
            "category": [
                "top"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "spain"
            ],
            "total_article": 173,
            "last_fetch": "2025-05-28 01:21:00"
        },
        {
            "id": "citywireasia",
            "name": "Citywireasia",
            "url": "https://citywire.com/asia",
            "icon":"https://n.bytvi.com/informador_mx.png",
            "priority": 43119,
            "description": "News and analysis for private bankers and fund selection professionals.",
            "category": [
                "business"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united kingdom"
            ],
            "total_article": 485,
            "last_fetch": "2025-05-28 09:22:02"
        },
        {
            "id": "losandespe",
            "name": "Los Andes",
            "url": "https://www.losandes.com.pe",
            "icon": "https://n.bytvi.com/losandespe.png",
            "priority": 5869788,
            "description": "Diario referente del sur del Perú, espacio de reflexión sobre el desarrollo humano y su relación con el medio ambiente, la sociedad y la economía.",
            "category": [
                "top"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "peru"
            ],
            "total_article": 3790,
            "last_fetch": "2025-05-29 05:06:57"
        },
        {
            "id": "hyperallergic",
            "name": "Hyperallergic",
            "url": "https://hyperallergic.com",
            "icon": "https://n.bytvi.com/hyperallergic.png",
            "priority": 17112,
            "description": "A forum for serious, playful, and radical thinking about art in the world today. Founded in 2009, Hyperallergic is headquartered in Brooklyn, New York.",
            "category": [
                "other",
                "entertainment",
                "top",
                "education"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 4350,
            "last_fetch": "2025-05-28 20:03:37"
        },
        {
            "id": "inc",
            "name": "Inc",
            "url": "https://www.inc.com",
            "icon": "https://n.bytvi.com/inc.png",
            "priority": 2675,
            "description": "Successfully start, grow, innovate, and lead your business today: Ideas, resources, advice, support, tools, strategies, real stories, and real business examples. Visit https://inc.com. Subscribe to Inc. magazine. Attend Inc. events.",
            "category": [
                "business"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 10875,
            "last_fetch": "2025-05-28 13:05:46"
        },
        {
            "id": "lapresse",
            "name": "La Presse de Tunisie",
            "url": "https://lapresse.tn",
            "icon": "https://n.bytvi.com/lapresse.png",
            "priority": 126856,
            "description": "LaPesse.tn   Site d&#039;information et d&#039;actualité . Les results du journal et toute l&#039;actualité en continu : International, Politique, Société, Economie, Culture ...",
            "category": [
                "sports",
                "entertainment",
                "top",
                "world",
                "business"
            ],
            "language": [
                "french"
            ],
            "country": [
                "tunisia"
            ],
            "total_article": 19931,
            "last_fetch": "2025-05-29 10:05:05"
        },
        {
            "id": "nu",
            "name": "NU.nl",
            "url": "https://www.nu.nl",
            "icon": "https://n.bytvi.com/nu.png",
            "priority": 171863,
            "description": "Het laatste nieuws het eerst op NU.nl",
            "category": [
                "entertainment",
                "sports",
                "top",
                "technology",
                "business"
            ],
            "language": [
                "dutch"
            ],
            "country": [
                "netherland"
            ],
            "total_article": 143202,
            "last_fetch": "2025-05-28 13:29:54"
        },
        {
            "id": "vz",
            "name": "VZ",
            "url": "http://www.vz.lt",
            "icon": "https://n.bytvi.com/vz.png",
            "priority": 43066,
            "description": "Verslo ir politikos aktualijos, įvykių analizė, ekspertų komentarai ir prognozės, tendencijos, akcijos, valiutų kursai, įmonės ir žmonės, foto, sprendimai",
            "category": [
                "top",
                "business"
            ],
            "language": [
                "lithuanian"
            ],
            "country": [
                "lithuania"
            ],
            "total_article": 30015,
            "last_fetch": "2025-05-28 13:27:21"
        },
        {
            "id": "electrive",
            "name": "electrive",
            "url": "https://www.electrive.com",
            "icon": "https://n.bytvi.com/electrive.png",
            "priority": 50335,
            "description": "electrive.com is a news service for decision makers in the electric mobility industry. The industry-facing website builds on the email briefing we publish every workday since 2013. Our mail-out and online service cover a wide range of relevant stories and developments in electric transport across rope and beyond",
            "category": [
                "top",
                "technology",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "germany"
            ],
            "total_article": 6887,
            "last_fetch": "2025-05-29 10:04:20"
        },
        {
            "id": "newsofnepal",
            "name": "News of Nepal",
            "url": "https://newsofnepal.com",
            "icon": "https://n.bytvi.com/newsofnepal.png",
            "priority": 572812,
            "description": "Reporting, analysis, and commentary on Nepal's politics, economy and society.",
            "category": [
                "sports",
                "entertainment",
                "top",
                "other",
                "world",
                "business"
            ],
            "language": [
                "nepali"
            ],
            "country": [
                "nepal"
            ],
            "total_article": 610,
            "last_fetch": "2025-05-29 02:03:05"
        },
        {
            "id": "bigbangnews",
            "name": "Big Bang! News",
            "url": "https://www.bigbangnews.com",
            "icon": "https://n.bytvi.com/bigbangnews.png",
            "priority": 2472367,
            "description": "Plataforma de noticias que va a cambiar el concepto de informar | Big Bang! News",
            "category": [
                "sports",
                "top",
                "world",
                "technology",
                "politics"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "argentina"
            ],
            "total_article": 2892,
            "last_fetch": "2025-05-28 18:52:53"
        },
        {
            "id": "elcolombiano",
            "name": "Elcolombiano",
            "url": "https://www.elcolombiano.com",
            "icon": "https://n.bytvi.com/elcolombiano.jpg",
            "priority": 18468,
            "description": "Las principales noticias de Medellín, Antioquia, Colombia y el Mundo. Manténte al día con información confiable de Deportes, Cultura, Entretenimiento, Política, Economía y mucho más.",
            "category": [
                "entertainment",
                "sports",
                "top",
                "world",
                "technology"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "colombia"
            ],
            "total_article": 36543,
            "last_fetch": "2025-05-28 13:25:14"
        },
        {
            "id": "a96fm",
            "name": "96FM Perth",
            "url": "https://www.96fm.com.au",
            "icon": "https://n.bytvi.com/a96fm.png",
            "priority": 759518,
            "description": "Clairsy & Lisa for breakfast and Real Music all day.",
            "category": [
                "entertainment"
            ],
            "language": [
                "english"
            ],
            "country": [
                "australia"
            ],
            "total_article": 646,
            "last_fetch": "2025-05-28 05:09:17"
        },
        {
            "id": "mobil",
            "name": "mobil",
            "url": "https://www.mobil.se",
            "icon": "https://n.bytvi.com/mobil.png",
            "priority": 6467909,
            "description": "Mobil är Sveriges ledande tidning och sajt inom området mobil kommunikation. Tidningen och sajten riktar sig till den som skall köpa nya mobila prylar eller tjänster.",
            "category": [
                "technology"
            ],
            "language": [
                "swedish"
            ],
            "country": [
                "sweden"
            ],
            "total_article": 3344,
            "last_fetch": "2025-05-28 05:40:28"
        },
        {
            "id": "ltl24",
            "name": "L24lt",
            "url": "http://l24.lt/en",
            "icon": null,
            "priority": 833982,
            "description": "Skaityk tikras ir bešališkas žinias apie Lietuvos ir pasaulio gyvenimą   lietuviškai, lenkiškai rusiškai ir angliškai   tik www.l24.lt. Tikslinė mūsų skaitytojų auditorija – visa Lietuva. Be to, internetinį laikraštį galės skaityti viso pasaulio internautai. Laikraščio turinys – aktualios žinios iš Lietuvos ir pasaulio politinio, ekonominio, kultūrinio, sportinio gyvenimo. Leidinys nepriklauso jokiai partijai, yra savarankiškas, įsteigtas iš privačių kūrėjo lėšų.",
            "category": [
                "health",
                "world",
                "science",
                "business",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "lithuania"
            ],
            "total_article": 1307,
            "last_fetch": "2025-05-21 09:12:47"
        },
        {
            "id": "ceylontoday",
            "name": "Ceylon Today",
            "url": "https://ceylontoday.lk",
            "icon": "https://n.bytvi.com/ceylontoday.png",
            "priority": 785388,
            "description": "ceylontoday.lk is the website of the Ceylon Today newspaper which catapulted into the national print media industry of Sri Lanka on 18 November 2011, with full-fledged Sunday Editions as well as five dailies, the first-ever English newspaper to so.",
            "category": [
                "health",
                "sports",
                "entertainment",
                "top",
                "other",
                "education",
                "world",
                "technology",
                "environment",
                "business",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "sri lanka"
            ],
            "total_article": null,
            "last_fetch": null
        },
        {
            "id": "e_grammes",
            "name": "Ελληνικές Γραμμές",
            "url": "https://www.e-grammes.gr",
            "icon": null,
            "priority": 39480967,
            "description": "National Conservative online magazine",
            "category": [
                "top"
            ],
            "language": [
                "greek"
            ],
            "country": [
                "greece"
            ],
            "total_article": 66,
            "last_fetch": "2025-05-25 22:38:52"
        },
        {
            "id": "webdunia",
            "name": "हिन्दी समाचार",
            "url": "https://webdunia.com",
            "icon": "https://n.bytvi.com/webdunia.jpg",
            "priority": 19669,
            "description": "Breaking News, today hindi news, hindi news, Latest Hindi News, Hindi Samachar हिंदी समाचार,  Daily News, hindi news today, Hindi News India.आज की ताजा न्यूज  पढ़ें हिंदी में  Webdunia   वेबदुनिया पर,   पढ़ें भारत और दुनिया की ताज़ा ख़बर। मुख्य समाचार, राजनीति, बॉलीवुड, मनोरंजन, खेल जगत के समाचार",
            "category": [
                "top",
                "other"
            ],
            "language": [
                "hindi"
            ],
            "country": [
                "india"
            ],
            "total_article": 19064,
            "last_fetch": "2025-05-29 10:03:18"
        },
        {
            "id": "ethiopianmonitor",
            "name": "Ethiopian Monitor",
            "url": "https://ethiopianmonitor.com",
            "icon": "https://n.bytvi.com/ethiopianmonitor.png",
            "priority": 1405812,
            "description": "Ethiopian Monitor – Daily News from Ethiopia",
            "category": [
                "health",
                "entertainment",
                "tourism",
                "sports",
                "top",
                "other",
                "education",
                "crime",
                "world",
                "science",
                "environment",
                "business",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "ethiopia"
            ],
            "total_article": 514,
            "last_fetch": "2025-05-28 17:07:21"
        },
        {
            "id": "epicentrochile",
            "name": "Epicentro Chile",
            "url": "https://www.epicentrochile.com",
            "icon": "https://n.bytvi.com/epicentrochile.jpg",
            "priority": 1163442,
            "description": "Epicentro Chile   Diario Online Chile · Donde nace la noticia",
            "category": [
                "entertainment",
                "sports",
                "top",
                "other",
                "world",
                "business",
                "politics"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "chile"
            ],
            "total_article": 6240,
            "last_fetch": "2025-05-29 03:18:31"
        },
        {
            "id": "miyoca",
            "name": "みよか −関西のええとこ、知って”みよか",
            "url": "https://miyoca.jp",
            "icon": "https://n.bytvi.com/miyoca.png",
            "priority": 98682035,
            "description": "「関西のええとこ、知ってみよか」マガジン。わくわく・ドキドキするような関西の情報がてんこ盛り。新しい発見してみよか！",
            "category": [
                "top"
            ],
            "language": [
                "japanese"
            ],
            "country": [
                "japan"
            ],
            "total_article": 1,
            "last_fetch": "2025-05-29 03:19:15"
        },
        {
            "id": "swindonadvertiser",
            "name": "Swindon Advertiser",
            "url": "https://www.swindonadvertiser.co.uk",
            "icon": "https://n.bytvi.com/swindonadvertiser.png",
            "priority": 597968,
            "description": "Swindon and Wiltshire news, sport, weather, travel, jobs, events, and more from the Swindon Advertiser newspaper, covering Wiltshire.",
            "category": [
                "health",
                "entertainment",
                "tourism",
                "sports",
                "other",
                "top",
                "lifestyle",
                "crime",
                "technology",
                "business",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united kingdom"
            ],
            "total_article": 17062,
            "last_fetch": "2025-05-28 13:17:01"
        },
        {
            "id": "extra_ie",
            "name": "Extra.ie",
            "url": "https://extra.ie",
            "icon": "https://n.bytvi.com/extra_ie.png",
            "priority": 269671,
            "description": "Get the inside track on all of Ireland's top Extra news stories. Get all the latest Irish News and News from around The World. Read Extra.ie NOW.",
            "category": [
                "sports",
                "entertainment",
                "top",
                "other",
                "lifestyle",
                "crime",
                "world",
                "environment",
                "domestic",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "ireland"
            ],
            "total_article": 18268,
            "last_fetch": "2025-05-28 22:30:53"
        },
        {
            "id": "prospect",
            "name": "The American Prospect",
            "url": "https://prospect.org",
            "icon": "https://n.bytvi.com/prospect.png",
            "priority": 16940,
            "description": "Informed analysis of public policy and the politics of power, from a progressive perspective",
            "category": [
                "health",
                "entertainment",
                "top",
                "world",
                "technology",
                "environment",
                "business",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 2518,
            "last_fetch": "2025-05-29 09:32:36"
        },
        {
            "id": "ambito",
            "name": "ambito",
            "url": "https://www.ambito.com",
            "icon": "https://n.bytvi.com/ambito.png",
            "priority": 37705,
            "description": "",
            "category": [
                "entertainment",
                "sports",
                "top",
                "world",
                "technology",
                "business",
                "politics"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "argentina"
            ],
            "total_article": 133093,
            "last_fetch": "2025-05-29 09:26:35"
        },
        {
            "id": "concordmonitor",
            "name": "Concord Monitor",
            "url": "https://www.concordmonitor.com",
            "icon": "https://n.bytvi.com/concordmonitor.png",
            "priority": 27989,
            "description": "The Concord Monitor is a Pulitzer Prize winning daily newspaper and website located in the capital city of New Hampshire. The Concord Monitor is Central NH's dominant media with more than 70 percent household penetration. The Monitor is a key source of news and information for Concord, NH.",
            "category": [
                "sports",
                "entertainment",
                "top",
                "other",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 2766,
            "last_fetch": "2025-05-29 06:16:21"
        },
        {
            "id": "kommersant_ru",
            "name": "Kommersant Ru",
            "url": "https://www.kommersant.ru",
            "icon": "https://n.bytvi.com/kommersant_ru.jpg",
            "priority": 79471,
            "description": "Актуальные новости, объективный анализ и эксклюзивные комментарии о важнейших событиях и трендах",
            "category": [
                "top",
                "other",
                "business"
            ],
            "language": [
                "russian"
            ],
            "country": [
                "russia"
            ],
            "total_article": 68852,
            "last_fetch": "2025-05-28 13:28:53"
        },
        {
            "id": "southernminn",
            "name": "Southernminn",
            "url": "https://www.southernminn.com",
            "icon": "https://n.bytvi.com/southernminn.png",
            "priority": 105551,
            "description": "Get all of the latest news from southernminn.com. Providing a fresh perspective for online news.",
            "category": [
                "sports",
                "top",
                "other",
                "business",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 13682,
            "last_fetch": "2025-05-28 18:04:27"
        },
        {
            "id": "dominionpost",
            "name": "Dominionpost",
            "url": "https://www.dominionpost.com",
            "icon": "https://n.bytvi.com/dominionpost.jpg",
            "priority": 325752,
            "description": "Morgantown Area News",
            "category": [
                "health",
                "sports",
                "entertainment",
                "other",
                "lifestyle",
                "education",
                "crime",
                "business",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 3607,
            "last_fetch": "2025-05-29 02:18:02"
        },
        {
            "id": "madagate",
            "name": "Madagate",
            "url": "https://madagate.org",
            "icon": null,
            "priority": 4512828,
            "description": "Madagate.com Madagascar information presse en ligne",
            "category": [
                "world"
            ],
            "language": [
                "french"
            ],
            "country": [
                "madagascar"
            ],
            "total_article": 235,
            "last_fetch": "2025-05-26 05:53:17"
        },
        {
            "id": "telegraph",
            "name": "The Telegraph",
            "url": "https://www.telegraph.co.uk",
            "icon": "https://n.bytvi.com/telegraph.png",
            "priority": 482,
            "description": "Latest news, business, sport, comment, lifestyle and culture from the Daily Telegraph and Sunday Telegraph newspapers and video from Telegraph TV.",
            "category": [
                "health",
                "sports",
                "tourism",
                "entertainment",
                "food",
                "top",
                "other",
                "lifestyle",
                "technology",
                "domestic",
                "business",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united kingdom",
                "united states of america"
            ],
            "total_article": 17505,
            "last_fetch": "2025-05-25 03:00:18"
        },
        {
            "id": "jornalnoticias",
            "name": "Jornal Notícias",
            "url": "https://jornalnoticias.co.mz",
            "icon": null,
            "priority": 3281917,
            "description": "Property of Sociedade do Notícias",
            "category": [
                "sports",
                "top",
                "world",
                "business",
                "politics"
            ],
            "language": [
                "portuguese"
            ],
            "country": [
                "mozambique"
            ],
            "total_article": 5309,
            "last_fetch": "2025-05-28 13:53:52"
        },
        {
            "id": "israelnationalnews",
            "name": "Israelnationalnews",
            "url": "https://www.israelnationalnews.com",
            "icon": "https://n.bytvi.com/israelnationalnews.png",
            "priority": 10196,
            "description": "Arutz Sheva English (Israel National News): The largest news conglomerate in the Jewish world. News from the MiddleEast, Israel, and around the world.",
            "category": [
                "top"
            ],
            "language": [
                "english"
            ],
            "country": [
                "israel"
            ],
            "total_article": 33757,
            "last_fetch": "2025-05-29 10:01:48"
        },
        {
            "id": "a5dariyanews",
            "name": "5 Dariya News",
            "url": "http://www.5dariyanews.com",
            "icon": "https://n.bytvi.com/a5dariyanews.jpg",
            "priority": 418779,
            "description": "Online Punjabi news in Punjabi and Hindi covering Punjab, Haryana, Himachal Pradesh, Jammu and Kashmir. Latest news from Punjab in Punjabi",
            "category": [
                "top"
            ],
            "language": [
                "english",
                "punjabi",
                "hindi"
            ],
            "country": [
                "india"
            ],
            "total_article": 32440,
            "last_fetch": "2025-05-28 18:35:43"
        },
        {
            "id": "epohi",
            "name": "Εφημερίδα η Εποχή",
            "url": "https://www.epohi.gr",
            "icon": "https://n.bytvi.com/epohi.png",
            "priority": 23400882,
            "description": "Κυριακάτικη εφημερίδα της Ανανεωτικής Αριστεράς",
            "category": [
                "top"
            ],
            "language": [
                "greek"
            ],
            "country": [
                "greece"
            ],
            "total_article": 2455,
            "last_fetch": "2025-04-24 06:26:42"
        },
        {
            "id": "vietstock",
            "name": "Vietstock",
            "url": "https://vietstock.vn",
            "icon": "https://n.bytvi.com/vietstock.png",
            "priority": 44041,
            "description": "Tin tu1ee9c v",
            "category": [
                "technology",
                "business",
                "food"
            ],
            "language": [
                "vietnamese"
            ],
            "country": [
                "vietnam"
            ],
            "total_article": 10,
            "last_fetch": "2025-05-29 09:34:46"
        },
        {
            "id": "news_star",
            "name": "Shawnee News-Star",
            "url": "https://www.news-star.com",
            "icon": "https://n.bytvi.com/news_star.jpg",
            "priority": 124862,
            "description": "Sports April 29, 2024 Fire goes to 13-0 with road win against Texas 7ers By Chris Cox Potawatomi Fire and KGFF Radio GREENVILLE, TX &ndash;",
            "category": [
                "sports",
                "top",
                "other",
                "lifestyle",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 2983,
            "last_fetch": "2025-05-27 16:08:15"
        },
        {
            "id": "netokracija",
            "name": "Netokracija",
            "url": "https://www.netokracija.com",
            "icon": "https://n.bytvi.com/netokracija.png",
            "priority": 522182,
            "description": "Vodeu0107i nezavisni, regionalni magazin za sve koji u017eive za, na i od interneta u2013 posveu0107en digitalnom poslovanju (i startupima), marketingu i kulturi.",
            "category": [
                "top"
            ],
            "language": [
                "croatian"
            ],
            "country": [
                "croatia"
            ],
            "total_article": 813,
            "last_fetch": "2025-05-28 11:42:30"
        },
        {
            "id": "tokushima",
            "name": "Tokushima",
            "url": "https://www.topics.or.jp",
            "icon": "https://n.bytvi.com/tokushima.png",
            "priority": 6432667,
            "description": "Electronic version of the Tokushima Shimbun. You can find news and breaking news about Tokushima Prefecture, domestic and overseas accidents, politics, economy, education, sports, etc., Vortis, fishing, medical care, health, event information, etc.",
            "category": [
                "top"
            ],
            "language": [
                "japanese"
            ],
            "country": [
                "japan"
            ],
            "total_article": 6460,
            "last_fetch": "2025-05-29 08:52:54"
        },
        {
            "id": "mediaplusnews",
            "name": "Media Plus News",
            "url": "https://www.mediaplusnews.com",
            "icon": "https://n.bytvi.com/informador_mx.png",
            "priority": 3805086,
            "description": "വാര്‍ത്തകളുടെ ലോകത്ത് ചൂട്ട് കത്തിച്ച് വഴികാട്ടിയായി മീഡിയ പ്ലസ്.... മലയാളിക്ക് വാര്‍ത്തകളോടുള്ള ഹരം ലോകത്ത് മറ്റൊരു സമൂഹത്തിനുമുണ്ടാവില്ല. എത്രയോ പത്രങ്ങള്‍, ഓണ്‍ലൈന്‍ മാധ്യമങ്ങള്‍, പത്രങ്ങള്‍ എല്ലാം വായിച്ച് വിലയിരുത്തി തള്ളേണ്ടത് തള്ളിയും കൊള്ളേണ്ടതും കൊണ്ടും മലയാളിയുടെ വാര്‍ത്താ പ്രഭാതങ്ങള്‍ക്ക് മിഴി തുറന്ന് നിരവധി വാര്‍ത്താ മാധ്യമങ്ങളുണ്ട്.",
            "category": [
                "top"
            ],
            "language": [
                "malayalam"
            ],
            "country": [
                "india"
            ],
            "total_article": 15,
            "last_fetch": "2025-05-28 10:46:15"
        },
        {
            "id": "inverse",
            "name": "Inverse",
            "url": "https://www.inverse.com",
            "icon": "https://n.bytvi.com/inverse.png",
            "priority": 7443,
            "description": "Inverse is for the superfan in all of us.",
            "category": [
                "health",
                "entertainment",
                "sports",
                "tourism",
                "food",
                "top",
                "science",
                "technology",
                "business"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 9952,
            "last_fetch": "2025-05-29 00:02:16"
        },
        {
            "id": "adslzone",
            "name": "ADSLZone",
            "url": "https://www.adslzone.net",
            "icon": "https://n.bytvi.com/adslzone.png",
            "priority": 73790,
            "description": "Tu web de referencia con información, tutoriales y análisis sobre tecnología, fibra óptica, tarifas y operadores. Foros de ayuda y soporte oficial",
            "category": [
                "technology"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "mexico"
            ],
            "total_article": 20242,
            "last_fetch": "2025-05-29 09:04:14"
        },
        {
            "id": "guineenews",
            "name": "Guinéenews",
            "url": "https://guineenews.org",
            "icon": "https://n.bytvi.com/guineenews.png",
            "priority": 121790,
            "description": "Dernières Nouvelles de la Guinée par les Guinéens",
            "category": [
                "top",
                "other",
                "business",
                "politics"
            ],
            "language": [
                "french"
            ],
            "country": [
                "guinea"
            ],
            "total_article": 9848,
            "last_fetch": "2025-05-29 06:04:00"
        },
        {
            "id": "slashgear",
            "name": "SlashGear",
            "url": "https://www.slashgear.com",
            "icon": "https://n.bytvi.com/slashgear.png",
            "priority": 10233,
            "description": "SlashGear covers technology, science, automotive, gaming, and entertainment, bringing thought-provoking and independent insight since 2005.",
            "category": [
                "health",
                "entertainment",
                "top",
                "science",
                "technology"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united kingdom",
                "united states of america",
                "singapore"
            ],
            "total_article": 30386,
            "last_fetch": "2025-05-29 00:15:57"
        },
        {
            "id": "thetelegraphandargus",
            "name": "Telegraph & Argus",
            "url": "https://www.thetelegraphandargus.co.uk",
            "icon": "https://n.bytvi.com/thetelegraphandargus.png",
            "priority": 364054,
            "description": "Local news, sports, leisure, houses, jobs, cars, what's on and live travel information from The Telegraph & Argus, Bradford.",
            "category": [
                "top",
                "sports",
                "business"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united kingdom"
            ],
            "total_article": 36657,
            "last_fetch": "2025-05-29 10:06:40"
        },
        {
            "id": "english_jagran",
            "name": "Jagran English",
            "url": "https://english.jagran.com",
            "icon": "https://n.bytvi.com/english_jagran.png",
            "priority": 10561,
            "description": "Top English News Headline   Find latest breaking news from India and world about politics, entertainment, movie review, Sports, business and more at Jagran English",
            "category": [
                "top"
            ],
            "language": [
                "english"
            ],
            "country": [
                "india"
            ],
            "total_article": 48534,
            "last_fetch": "2025-05-28 13:07:29"
        },
        {
            "id": "reporteconfidencial",
            "name": "Reporte Confidencial",
            "url": "https://www.reporteconfidencial.info",
            "icon": "https://n.bytvi.com/reporteconfidencial.jpg",
            "priority": 1010125,
            "description": "Las Mejores y Últimas Noticias de Venezuela y del Mundo las 24 horas del dia. Sucesos,Regionales,Nacionales,Internacionales,Entretenimiento.",
            "category": [
                "health",
                "entertainment",
                "sports",
                "top",
                "technology",
                "business",
                "politics"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "venezuela"
            ],
            "total_article": 35997,
            "last_fetch": "2025-05-28 21:05:27"
        },
        {
            "id": "grimsbytetelegraph",
            "name": "Grimsby Live",
            "url": "https://www.grimsbytelegraph.co.uk",
            "icon": "https://n.bytvi.com/grimsbytetelegraph.png",
            "priority": 300121,
            "description": "GrimsbyLive is the digital news channel of The Grimsby Telegraph, Lincolnshire’s only daily newspaper, and the Scunthorpe Telegraph",
            "category": [
                "sports",
                "entertainment",
                "food",
                "top",
                "other",
                "environment"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united kingdom"
            ],
            "total_article": 13613,
            "last_fetch": "2025-05-29 07:34:26"
        },
        {
            "id": "tv9marathi",
            "name": "TV9 Marathi",
            "url": "https://www.tv9marathi.com",
            "icon": "https://n.bytvi.com/tv9marathi.png",
            "priority": 13465,
            "description": "Marathi News, मराठी बातम्या: latest Marathi news and breaking news in Marathi, Maharashtra news live updates on tv9marathi.com. Read today’s ताज्या बातम्या, मुंबई, पुणे, नाशिक, कोकण, Top headline from Maharashtra, India and the world.",
            "category": [
                "health",
                "sports",
                "entertainment",
                "other",
                "top",
                "lifestyle",
                "education",
                "crime",
                "world",
                "technology",
                "business",
                "politics"
            ],
            "language": [
                "marathi"
            ],
            "country": [
                "india"
            ],
            "total_article": 60,
            "last_fetch": "2025-05-29 05:02:16"
        },
        {
            "id": "independentuk",
            "name": "The Independent",
            "url": "https://www.independent.co.uk",
            "icon": "https://n.bytvi.com/independentuk.png",
            "priority": 290,
            "description": "We work hard to answer queries and ensure your experience of The Independent is as good as we can possibly make it.",
            "category": [
                "health",
                "sports",
                "entertainment",
                "tourism",
                "top",
                "world",
                "science",
                "environment",
                "business",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united kingdom",
                "united states of america"
            ],
            "total_article": 194431,
            "last_fetch": "2025-05-28 13:34:53"
        },
        {
            "id": "valdostadailytimes",
            "name": "Valdosta Daily Times",
            "url": "https://www.valdostadailytimes.com",
            "icon": "https://n.bytvi.com/valdostadailytimes.jpg",
            "priority": 41597,
            "description": "The Valdosta Daily Times is printed four days a week, Tuesday, Wednesday, Friday and Sunday, and provides online news seven days a week. In addition to The Valdosta Daily Times print edition, The Times also publishes Valdosta Scene magazine each month and Ag Scene bimonthly.",
            "category": [
                "top",
                "sports"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 27525,
            "last_fetch": "2025-05-27 22:32:46"
        },
        {
            "id": "venturebeat",
            "name": "VentureBeat",
            "url": "https://venturebeat.com",
            "icon": "https://n.bytvi.com/venturebeat.jpg",
            "priority": 24504,
            "description": "VentureBeat is the leader in covering transformative tech. We help business leaders make smarter decisions with our industry-leading AI and gaming coverage.",
            "category": [
                "technology",
                "science",
                "business",
                "politics"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 18826,
            "last_fetch": "2025-05-29 06:38:33"
        },
        {
            "id": "febp",
            "name": "صحيفة فبراير",
            "url": "https://febp.ly",
            "icon": "https://n.bytvi.com/febp.png",
            "priority": 3749424,
            "description": "صحيفة فبراير إسبوعية إخبارية شاملة",
            "category": [
                "health",
                "entertainment",
                "sports",
                "top",
                "world",
                "science",
                "business",
                "politics"
            ],
            "language": [
                "arabic"
            ],
            "country": [
                "libya"
            ],
            "total_article": 1562,
            "last_fetch": "2025-05-29 05:07:05"
        },
        {
            "id": "aftenbladet",
            "name": "Stavanger Aftenbladet",
            "url": "https://www.aftenbladet.no",
            "icon": "https://n.bytvi.com/aftenbladet.png",
            "priority": 1566457,
            "description": "Nyheter fra verdens beste fylke   Rogaland! Siste nytt innen lokalt, sport, innenriks, utenriks og kultur.",
            "category": [
                "top",
                "sports",
                "business"
            ],
            "language": [
                "norwegian"
            ],
            "country": [
                "norway"
            ],
            "total_article": 44349,
            "last_fetch": "2025-05-29 09:36:45"
        },
        {
            "id": "lehighvalleylive",
            "name": "Lehighvalleylive",
            "url": "https://www.lehighvalleylive.com",
            "icon": "https://n.bytvi.com/lehighvalleylive.jpg",
            "priority": 7850,
            "description": "Get the latest Lehigh Valley PA Local News, Easton, Bethlehem, Allentown, Phillipsburg, Warren County, Slate Belt, Upper Bucks news, sports &amp; US breaking News.",
            "category": [
                "top"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united states of america"
            ],
            "total_article": 17497,
            "last_fetch": "2025-05-28 13:23:15"
        },
        {
            "id": "elcierredigital",
            "name": "El Cierre Digital",
            "url": "https://elcierredigital.com",
            "icon": "https://n.bytvi.com/elcierredigital.jpg",
            "priority": 2018156,
            "description": "Periódico Digital de Investigación Español que Analiza las grandes Noticias. La Calidad de la Información y su Actualidad, es nuestra Prioridad.",
            "category": [
                "health",
                "sports",
                "entertainment",
                "food",
                "top",
                "other",
                "education",
                "crime",
                "environment"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "spain"
            ],
            "total_article": 10904,
            "last_fetch": "2025-05-29 10:08:35"
        },
        {
            "id": "diamond",
            "name": "ダイヤモンド・オンライン",
            "url": "https://diamond.jp",
            "icon": "https://n.bytvi.com/diamond.png",
            "priority": 6778,
            "description": "ダイヤモンド・オンラインはダイヤモンド社が提供するグローバルなビジネスメディアです。ビジネスパーソンに必要な経営・戦略、経済、金融、国際の情報をはじめ、オフビジネスの記事もご提供。",
            "category": [
                "top"
            ],
            "language": [
                "japanese"
            ],
            "country": [
                "japan"
            ],
            "total_article": 1,
            "last_fetch": "2025-05-29 09:01:58"
        },
        {
            "id": "spidersweb",
            "name": "SPIDER'S WEB",
            "url": "https://spidersweb.pl",
            "icon": "https://n.bytvi.com/spidersweb.png",
            "priority": 1429151,
            "description": "Spider’s Web to największy niezależny technologiczno-lifestylowy blog w Polsce. Kilkunastu blogerów regularnie tworzy felietony, opiniotwórcze teksty, tłumaczy zagadnienia ze świata nauki i doradza w zakupach elektroniki.",
            "category": [
                "technology"
            ],
            "language": [
                "polish"
            ],
            "country": [
                "poland"
            ],
            "total_article": 1,
            "last_fetch": "2025-05-28 13:32:03"
        },
        {
            "id": "huelvainformacion_es",
            "name": "Huelvainformacion Es",
            "url": "https://www.huelvainformacion.es",
            "icon": "https://n.bytvi.com/huelvainformacion_es.png",
            "priority": 113575,
            "description": "Noticias de Huelva y su provincia. Toda la actualidad de Huelva, ",
            "category": [
                "health",
                "sports",
                "entertainment",
                "top",
                "other",
                "world",
                "technology",
                "domestic",
                "business",
                "politics"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "spain"
            ],
            "total_article": 47328,
            "last_fetch": "2025-05-28 21:59:37"
        },
        {
            "id": "artforum",
            "name": "Artforum",
            "url": "https://www.artforum.com",
            "icon": "https://n.bytvi.com/artforum.png",
            "priority": 27892,
            "description": "Established in 1962, Artforum delivers informed and inspired criticism and analyses concerning the latest developments in modern and contemporary art and culture, both in print and online.",
            "category": [
                "top",
                "entertainment"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united kingdom",
                "united states of america",
                "australia"
            ],
            "total_article": 1120,
            "last_fetch": "2025-05-29 00:41:53"
        },
        {
            "id": "ign_it",
            "name": "IGN Italia",
            "url": "https://it.ign.com",
            "icon": "https://n.bytvi.com/ign_it.png",
            "priority": 121,
            "description": "IGN, il sito per i videogiocatori PC, PS4, Xbox One, Switch, PS5, Xbox Series X, Mobile. Recensioni, notizie, anteprime, video, commenti e tutto ciò che ruota intorno al mondo dei videogiochi.",
            "category": [
                "entertainment",
                "sports",
                "other",
                "top",
                "technology"
            ],
            "language": [
                "italian"
            ],
            "country": [
                "italy",
                "san marino"
            ],
            "total_article": 7959,
            "last_fetch": "2025-05-29 09:30:54"
        },
        {
            "id": "tatler",
            "name": "Tatler   The original social media",
            "url": "https://www.tatler.com",
            "icon": "https://n.bytvi.com/tatler.png",
            "priority": 8213,
            "description": "First published in 1709, Tatler is a powerful mix of glamour, fashion, society and features",
            "category": [
                "top"
            ],
            "language": [
                "english"
            ],
            "country": [
                "united kingdom"
            ],
            "total_article": 4091,
            "last_fetch": "2025-05-29 09:15:52"
        },
        {
            "id": "nyjtoday",
            "name": "남양주투데이",
            "url": "https://www.nyjtoday.com",
            "icon": "https://n.bytvi.com/nyjtoday.png",
            "priority": 12340711,
            "description": "남양주투데이는 빠르고 정확하며 공정한 뉴스를 표방하며 2006년 9월 지역신생언론사로 출발해 독자들의 성원을 받으며 성장해 왔습니다.",
            "category": [
                "top"
            ],
            "language": [
                "korean"
            ],
            "country": [
                "south korea"
            ],
            "total_article": 23,
            "last_fetch": "2025-05-29 08:22:33"
        },
        {
            "id": "francetvinfo",
            "name": "Franceinfo",
            "url": "https://www.francetvinfo.fr",
            "icon": "https://n.bytvi.com/francetvinfo.png",
            "priority": 50698,
            "description": "Pour savoir ce qui se passe maintenant   Toutes les infos livrées minute par minute par la rédaction de Franceinfo. Photos, vidéos, tweets et vos interventions",
            "category": [
                "health",
                "sports",
                "entertainment",
                "top",
                "science",
                "technology",
                "environment",
                "business",
                "politics"
            ],
            "language": [
                "french"
            ],
            "country": [
                "france"
            ],
            "total_article": 177273,
            "last_fetch": "2025-05-29 09:48:14"
        },
        {
            "id": "diarioviregion_cl",
            "name": "Diario VI Región",
            "url": "https://diarioviregion.cl",
            "icon": "https://n.bytvi.com/diarioviregion_cl.jpg",
            "priority": 2144817398,
            "description": "Diario VI Región es un periódico matutino chileno, de carácter regional, distribuido en la Región del Libertador Bernardo O'Higgins. Fue fundado el 1 de mayo de 1952 por el sanfernandino Ramón Morales Moraga como La Región. El 17 de mayo de 1997 cambió su nombre a Diario VI Región.",
            "category": [
                "top",
                "sports",
                "other",
                "politics"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "chile"
            ],
            "total_article": 623,
            "last_fetch": "2025-05-28 13:34:11"
        },
        {
            "id": "bratislavskenoviny",
            "name": "Bratislavske",
            "url": "https://www.bratislavskenoviny.sk",
            "icon": "https://n.bytvi.com/informador_mx.png",
            "priority": 5953903,
            "description": "",
            "category": [
                "top",
                "entertainment",
                "sports",
                "politics"
            ],
            "language": [
                "slovak"
            ],
            "country": [
                "slovakia"
            ],
            "total_article": 21,
            "last_fetch": "2025-05-29 08:52:25"
        },
        {
            "id": "informador_mx",
            "name": "Informador Mx",
            "url": "https://www.informador.mx",
            "icon": "https://n.bytvi.com/informador_mx.png",
            "priority": 27025,
            "description": "Las noticias más relevantes de Jalisco, México, Deportes, Entretenimiento & Tecnología",
            "category": [
                "top",
                "world",
                "other",
                "business"
            ],
            "language": [
                "spanish"
            ],
            "country": [
                "mexico"
            ],
            "total_article": 66373,
            "last_fetch": "2025-05-28 13:39:11"
        }
    ]*/
    articles = [
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anthony Ha",
            "title": "Elon Musk tries to stick to spaceships | TechCrunch",
            "description": "Elon Musk’s interview with CBS Sunday Morning seemed to get off to an awkward start, as reporter David Pogue asked the SpaceX CEO about his thoughts on",
            "url": "https://techcrunch.com/2025/06/01/elon-musk-tries-to-stick-to-spaceships/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/11/GettyImages-2183887189.jpg?resize=1200,800",
            "publishedAt": "2025-06-01T23:07:28Z",
            "content": "Elon Musks interview with CBS Sunday Morning seemed to get off to an awkward start, as reporter David Pogue asked the SpaceX CEO about his thoughts on his ally Donald Trumps policies, including growi… [+1957 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anthony Ha",
            "title": "Thousands of Netflix fans gather for Tudum | TechCrunch",
            "description": "Netflix released a flurry of announcements and trailers around high-profile projects including “Squid Game,” “Wednesday,” and “Stranger Things 5” last",
            "url": "https://techcrunch.com/2025/06/01/thousands-of-netflix-fans-gather-for-tudum/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/06/GettyImages-2218004766.jpg?w=1024",
            "publishedAt": "2025-06-01T21:02:06Z",
            "content": "Netflix released a flurry of announcements and trailers around high-profile projects including Squid Game, Wednesday, and Stranger Things 5 last night at its annual Tudum marketing event.\r\nWhile this… [+949 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Connie Loizos",
            "title": "Early AI investor Elad Gil finds his next big bet: AI-powered rollups | TechCrunch",
            "description": "Elad Gil started betting on AI before most of the world took notice. By the time investors began grasping the implications of ChatGPT, Gil had already",
            "url": "https://techcrunch.com/2025/06/01/early-ai-investor-elad-gil-finds-his-next-big-bet-ai-powered-rollups/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/06/Screenshot-2025-06-01-at-11.23.09AM.png?resize=1200,940",
            "publishedAt": "2025-06-01T19:02:59Z",
            "content": "Elad Gil started betting on AI before most of the world took notice. By the time investors began grasping the implications of ChatGPT, Gil had already written seed checks to startups like Perplexity,… [+6661 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anthony Ha",
            "title": "Sam Altman biographer Keach Hagey explains why the OpenAI CEO was ‘born for this moment’ | TechCrunch",
            "description": "In “The Optimist: Sam Altman, OpenAI, and the Race to Invent the Future,” Wall Street Journal reporter Keach Hagey examines our AI-obsessed moment through",
            "url": "https://techcrunch.com/2025/06/01/sam-altman-biographer-keach-hagey-explains-why-the-openai-ceo-was-born-for-this-moment/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/04/GettyImages-2198353376.jpg?resize=1200,800",
            "publishedAt": "2025-06-01T15:44:59Z",
            "content": "In The Optimist: Sam Altman, OpenAI, and the Race to Invent the Future, Wall Street Journal reporter Keach Hagey examines our AI-obsessed moment through one of its key figures Sam Altman, co-founder … [+14067 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Techcrunch Events",
            "title": "TC Sessions: AI Trivia Countdown — score big on tickets | TechCrunch",
            "description": "TechCrunch Sessions: AI Countdown Trivia is still in full effect. Take your shot at the trivia for a chance to win 2 tickets for the price of one. Play now.",
            "url": "https://techcrunch.com/2025/06/01/day-4-of-techcrunch-sessions-ai-trivia-countdown-flex-your-brain-score-big-on-tickets/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/07/gettyimages-2148009809-594x594-1.jpg?w=594",
            "publishedAt": "2025-06-01T14:16:04Z",
            "content": "TechCrunch Sessions: AI hits UC Berkeleys Zellerbach Hall on June 5 and todays your shot at AI trivia glory and two tickets for the price of one.\r\nAnswer a few brain-busting questions on artificial i… [+700 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anthony Ha",
            "title": "Video game union announces first contract with Microsoft | TechCrunch",
            "description": "Unionized quality assurance testers at video game holding company ZeniMax announced Friday that they have reached a tentative contract agreement with",
            "url": "https://techcrunch.com/2025/06/01/video-game-union-announces-first-contract-with-microsoft/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/07/microsoft-logo-office.jpg?resize=1200,798",
            "publishedAt": "2025-06-01T14:06:25Z",
            "content": "Unionized quality assurance testers at video game holding company ZeniMax announced Friday that they have reached a tentative contract agreement with Microsoft, which acquired ZeniMax in 2021.\r\nThis … [+901 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Techcrunch Events",
            "title": "4 days to go: TC Sessions: AI is almost in session | TechCrunch",
            "description": "TechCrunch Sessions: AI kicks off in 4 days   June 5   at UC Berkeley's Zellerbach Hall. 2 for 1 ticket deals before doors open. Register now.",
            "url": "https://techcrunch.com/2025/06/01/4-days-to-go-techcrunch-sessions-ai-is-almost-in-session/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/06/tc-sessions-climate-2022-recycling-panel.jpg?resize=1200,801",
            "publishedAt": "2025-06-01T14:00:57Z",
            "content": "Artificial intelligence has no shortage of visionariesbut the ones who matter are executing. In 4 days, TechCrunch Sessions: AI brings those builders, researchers, funders, and enthusiasts under one … [+1429 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anthony Ha",
            "title": "Left-leaning influencers embrace Bluesky without abandoning X, Pew says | TechCrunch",
            "description": "It’s no surprise that many big, left-leaning social media accounts have recently joined Bluesky — but a new analysis from the Pew Research Center attempts",
            "url": "https://techcrunch.com/2025/05/31/left-leaning-influencers-embrace-bluesky-without-abandoning-x-pew-says/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/11/GettyImages-2185895875.jpg?resize=1200,800",
            "publishedAt": "2025-05-31T21:03:27Z",
            "content": "Its no surprise that many big, left-leaning social media accounts have recently joined Bluesky but a new analysis from the Pew Research Center attempts to quantify that shift.\r\nThis comes as an updat… [+1638 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anthony Ha",
            "title": "NAACP calls on Memphis officials to halt operations at xAI’s ‘dirty data center’ | TechCrunch",
            "description": "The NAACP is calling on local officials to halt operations at Colossus, the “supercomputer” facility operated by Elon Musk’s xAI in South Memphis. As",
            "url": "https://techcrunch.com/2025/05/31/naacp-calls-on-officials-to-halt-operations-at-xais-dirty-data-center-in-memphis/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/02/GettyImages-2194754542.jpg?w=1024",
            "publishedAt": "2025-05-31T20:08:53Z",
            "content": "The NAACP is calling on local officials to halt operations at Colossus, the supercomputer facility operated by Elon Musks xAI in South Memphis.\r\nAs reported in NBC News, leaders from the civil rights… [+1930 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anthony Ha",
            "title": "Meta plans to automate many of its product risk assessments | TechCrunch",
            "description": "An AI-powered system could soon take responsibility for evaluating the potential harms and privacy risks of up to 90% of updates made to Meta apps like",
            "url": "https://techcrunch.com/2025/05/31/meta-plans-to-automate-many-of-its-product-risk-assessments/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/02/GettyImages-2195497483.jpg?resize=1200,800",
            "publishedAt": "2025-05-31T17:53:28Z",
            "content": "An AI-powered system could soon take responsibility for evaluating the potential harms and privacy risks of up to 90% of updates made to Meta apps like Instagram and WhatsApp, according to internal d… [+1068 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Karyne Levy",
            "title": "Week in Review: Perplexity Labs wants to do your work | TechCrunch",
            "description": "We've got a ton of stories for you this week, including a new AI-powered browser from Arc; not one but TWO hacks; Gemini email summaries; and much more.",
            "url": "https://techcrunch.com/2025/05/31/week-in-review-perplexity-labs-wants-to-do-your-work/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/12/GettyImages-1215417068-1.jpg?resize=1200,467",
            "publishedAt": "2025-05-31T17:08:08Z",
            "content": "Welcome back to Week in Review! We’ve got a ton of stories for you this week, including a new AI-powered browser from Arc; not one but TWO hacks; Gemini email summaries; and much more. Have a great w… [+3677 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anna Heim",
            "title": "Space Forge raises $30M Series A to make chip materials in space | TechCrunch",
            "description": "Space Forge, a U.K. startup headquartered in Cardiff, Wales, recently raised a £22.6 million (approximately $30 million) Series A to make wafer materials in space, where unique conditions unlock new possibilities.",
            "url": "https://techcrunch.com/2025/05/31/space-forge-raises-30m-series-a-to-make-chip-materials-in-space/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/Space-Forge-Joshua-Western-CEO-and-Co-Founder-Andrew-Bacon-CTO-and-Co-Founder.jpg?resize=1200,800",
            "publishedAt": "2025-05-31T16:02:25Z",
            "content": "From AI to EVs, demand for semiconductors is exploding, but silicon is hitting its limits. Making more efficient chips requires new materials, ones far less ubiquitous than sand, but the solution mig… [+5407 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Techcrunch Events",
            "title": "TC Sessions: AI Trivia Countdown — Your next shot at winning big | TechCrunch",
            "description": "TechCrunch Sessions: AI Countdown Trivia still going. Answer a few AI-focused questions, and you could win two tickets for just $200 total. Play now.",
            "url": "https://techcrunch.com/2025/05/31/day-3-of-the-techcrunch-sessions-ai-trivia-countdown-your-next-shot-at-winning-big/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/02/Anthropic-Dario-Amodei.jpeg?w=1182",
            "publishedAt": "2025-05-31T14:16:29Z",
            "content": "TechCrunch Sessions: AI hits UC Berkeleys Zellerbach Hall on June 5, and were kicking Day 3 of AI trivia into high gear. This is your chance to prove you know your stuff and score a major ticket deal… [+656 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Google quietly released an app that lets you download and run AI models locally",
            "description": "Last week, Google quietly released an app that lets users run a range of openly available AI models from the AI dev platform Hugging Face on their phones. Called Google AI Edge Gallery, the app is available for Android and will soon come to iOS. It allows use…",
            "url": "https://techcrunch.com/2025/05/31/google-quietly-released-an-app-that-lets-you-download-and-run-ai-models-locally/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/02/GettyImages-2199793091.jpg?w=1024",
            "publishedAt": "2025-05-31T14:04:46Z",
            "content": "Last week, Google quietly released an app that lets users run a range of openly available AI models from the AI dev platform Hugging Face on their phones. \r\nCalled Google AI Edge Gallery, the app is … [+1807 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Techcrunch Events",
            "title": "The conversations that count start in 5 days at TC Sessions: AI | TechCrunch",
            "description": "5 days until TechCrunch Sessions: AI launches in UC Berkeley's Zellberbach Hall. June 5 will have real AI conversations on the main stage, breakouts, and more.",
            "url": "https://techcrunch.com/2025/05/31/serious-about-ai-the-conversations-that-count-start-in-5-days-at-techcrunch-sessions-ai/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/03/TC-Sessions-Robotics-breakouts.jpg?resize=1200,800",
            "publishedAt": "2025-05-31T14:01:08Z",
            "content": "In just 5 days, the sharpest minds in artificial intelligence will gather at UC Berkeleys Zellerbach Hall for TechCrunch Sessions: AIa one-day summit built for real insight, not recycled soundbites. … [+1879 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Aisha Malik",
            "title": "A guide to using Edits, Meta’s new CapCut rival for short-form video editing",
            "description": "Meta shared that it was working on Edits in January after ByteDance-owned CapCut was removed from U.S. app stores.",
            "url": "https://techcrunch.com/2025/05/31/a-guide-to-using-edits-metas-new-capcut-rival-for-short-form-video-editing/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/meta-edits.png?resize=1200,704",
            "publishedAt": "2025-05-31T14:00:00Z",
            "content": "Meta recently released a new video editing app for creators called Edits. The new app is designed to rival ByteDances CapCut, a popular short-form video-editing app used by many creators. \r\nMeta firs… [+3480 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kirsten Korosec",
            "title": "Elon Musk is lobbying lawmakers on driverless vehicle rules | TechCrunch",
            "description": "Musk and others in his orbit have been calling members of Congress directly, according to Bloomberg.",
            "url": "https://techcrunch.com/2025/05/30/elon-musk-is-lobbying-lawmakers-on-driverless-vehicle-rules/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/02/GettyImages-2198970101.jpg?resize=1200,800",
            "publishedAt": "2025-05-30T23:30:33Z",
            "content": "Elon Musk may have stepped away from his duties as the lead of the Department of Government Efficiency and adviser to President Trump, but he’s still active in D.C. circles. This time, he’s on the ot… [+869 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Yep, X was down again | TechCrunch",
            "description": "People reported that photos weren't loading, its banking service XMoney wasn't working, and search wasn't returning any results, among other things.",
            "url": "https://techcrunch.com/2025/05/30/yep-x-was-down-again/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/twitter-x-musk-graffiti.jpg?resize=1200,675",
            "publishedAt": "2025-05-30T20:56:13Z",
            "content": "Elon Musk’s X experienced an outage on Friday, according to user reports and crowdsourced data from sites like Downdetector. From what TechCrunch staff has witnessed firsthand, the X website and app … [+1585 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kirsten Korosec",
            "title": "TechCrunch Mobility: A ride-sharing pioneer comes for Uber, Tesla loses more ground, and dog-like delivery robots land in Texas",
            "description": "TechCrunch Mobility: A ride-sharing pioneer comes for Uber, Tesla loses more ground, and dog-like delivery robots land in Texastechcrunch.com",
            "url": "https://techcrunch.com/2025/05/30/techcrunch-mobility-a-ride-sharing-pioneer-comes-for-uber-tesla-loses-more-ground-and-dog-like-delivery-robots-land-in-texas/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/Hero-Image.jpg?resize=1200,675",
            "publishedAt": "2025-05-30T20:18:59Z",
            "content": "Welcome back to TechCrunch Mobility your central hub for news and insights on the future of transportation. Sign up here for free just click TechCrunch Mobility!\r\nIt might have been a short week, but… [+6340 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sean O'kane",
            "title": "DOGE left United States Institute of Peace office with water damage, rats, and roaches | TechCrunch",
            "description": "The chief executive of the United States Institute of Peace (USIP) says Elon Musk's DOGE left the nonprofit's Washington, D.C., headquarters in disarray.",
            "url": "https://techcrunch.com/2025/05/30/doge-left-united-states-institute-of-peace-office-with-water-damage-rats-and-roaches/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/02/GettyImages-2198697259.jpg?resize=1200,800",
            "publishedAt": "2025-05-30T19:38:51Z",
            "content": "The chief executive of the United States Institute of Peace (USIP) says Elon Musk’s Department of Government Efficiency left the nonprofit’s Washington, D.C., headquarters in disarray, full of water … [+2148 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Julie Bort",
            "title": "It’s not your imagination: AI is speeding up the pace of change | TechCrunch",
            "description": "Venture capitalist Mary Meeker just dropped a 340-page report to describe the speed at which AI is being developed, adopted, spent on, and used.",
            "url": "https://techcrunch.com/2025/05/30/its-not-your-imagination-ai-is-speeding-up-the-pace-of-change/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/12/GettyImages-1163715561.jpg?resize=1200,900",
            "publishedAt": "2025-05-30T19:21:10Z",
            "content": "If the adoption of AI feels different from any tech revolution you may have experienced before mobile, social, cloud computing it actually is.\r\nVenture capitalist Mary Meeker just dropped a 340-page … [+2731 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Tim De Chant",
            "title": "Trump administration to claw back $3.7B in clean energy and manufacturing awards | TechCrunch",
            "description": "Large corporations and growing startups were wrapped up in the latest move by the Trump administration to undo Biden-era contracts.",
            "url": "https://techcrunch.com/2025/05/30/trump-administration-to-claw-back-3-7b-in-clean-energy-and-manufacturing-awards/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/12/GettyImages-51643861.jpg?resize=1200,804",
            "publishedAt": "2025-05-30T18:48:58Z",
            "content": "The Department of Energy announced today that it would be clawing back $3.7 billion worth of awards made under the Biden administration for clean energy and manufacturing. Large corporations and grow… [+2474 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Automattic says it will start contributing to WordPress again after pause",
            "description": "WordPress.com parent company Automattic is changing direction… again. In a blog post titled “Returning to Core” published Thursday evening, Automattic announced it will unpause its contributions to the WordPress project. This is despite having said only last …",
            "url": "https://techcrunch.com/2025/05/30/automattic-says-it-will-start-contributing-to-wordpress-again-after-pause/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/11/wordpress-automattic-v1.jpg?resize=1200,800",
            "publishedAt": "2025-05-30T17:25:44Z",
            "content": "WordPress.com parent company Automattic is changing direction… again.\r\nIn a blog post titled “Returning to Core” published Thursday evening, Automattic announced it will unpause its contributions to … [+3149 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anna Heim",
            "title": "Startups Weekly: AMD acquisition and other moves to scale AI startups | TechCrunch",
            "description": "Welcome to Startups Weekly — your weekly recap of everything you can’t miss from the world of startups.",
            "url": "https://techcrunch.com/2025/05/30/startups-weekly-amd-acquisition-and-other-moves-to-scale-ai-startups/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/08/GettyImages-1350793901.jpg?resize=1200,800",
            "publishedAt": "2025-05-30T17:06:49Z",
            "content": "Welcome to Startups Weekly your weekly recap of everything you cant miss from the world of startups. Want it in your inbox every Friday? Sign up here.\r\nThis week brought more than just Nvidias earnin… [+4045 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kirsten Korosec",
            "title": "How a decade-old patent dispute could upend Uber's business | TechCrunch",
            "description": "Carma Technology has sued Uber for alleged patent infringement, a dispute that has been brewing for nearly a decade.",
            "url": "https://techcrunch.com/2025/05/30/how-a-decade-old-patent-dispute-could-upend-ubers-business/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/carma-car.jpg?resize=1200,800",
            "publishedAt": "2025-05-30T17:04:31Z",
            "content": "A little-known patent infringement lawsuit could have big implications for Uber and potentially dozens of other companies.\r\nCarma Technology, a company formed in 2007 by serial entrepreneur and SOSV … [+9086 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Lorenzo Franceschi-bicchierai",
            "title": "Eight things we learned from WhatsApp vs. NSO Group spyware lawsuit | TechCrunch",
            "description": "Eight things we learned from WhatsApp vs. NSO Group spyware lawsuit | TechCrunchtechcrunch.com",
            "url": "https://techcrunch.com/2025/05/30/eight-things-we-learned-from-whatsapp-vs-nso-group-spyware-lawsuit/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/12/whatsapp-toxic.jpg?resize=1200,675",
            "publishedAt": "2025-05-30T16:26:06Z",
            "content": "On May 6, WhatsApp scored a major victory against NSO Group when a jury ordered the infamous spyware maker to pay more than $167 million in damages to the Meta-owned company.\r\nThe ruling concluded a … [+7255 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Zack Whittaker",
            "title": "White House investigating how Trump's chief of staff's phone was hacked | TechCrunch",
            "description": "White House investigating how Trump's chief of staff's phone was hacked | TechCrunchtechcrunch.com",
            "url": "https://techcrunch.com/2025/05/30/white-house-investigating-how-trumps-chief-of-staffs-phone-was-hacked/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/susie-wiles-iphone-2198715883.jpg?resize=1200,816",
            "publishedAt": "2025-05-30T15:48:24Z",
            "content": "The White House is investigating after one or more people reportedly accessed the contacts from the personal phone of White House chief of staff Susie Wiles, and used the information to contact other… [+1989 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "X's new DM feature, XChat, is rolling out in beta | TechCrunch",
            "description": "XChat, a more advanced version of X's existing messaging system, is beginning to roll out to select users in beta.",
            "url": "https://techcrunch.com/2025/05/30/xs-new-dm-feature-xchat-is-rolling-out-in-beta/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/twitter-x-logo-musk-1.jpg?resize=1200,675",
            "publishedAt": "2025-05-30T15:43:51Z",
            "content": "X’s new DMs feature, XChat, has begun rolling out to beta testers. Some X users who pay for the platform’s subscription product have reported that they can access XChat, while reverse engineer Nima O… [+1062 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Gemini will now automatically summarize your long emails unless you opt out | TechCrunch",
            "description": "Google's AI assistant, Gemini, is gaining a more prominent place in your inbox with the launch of email summary cards, which will appear at the top of",
            "url": "https://techcrunch.com/2025/05/30/gemini-will-now-automatically-summarize-your-long-emails-unless-you-opt-out/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/gmail-icon-2020-ios.jpg?resize=1200,675",
            "publishedAt": "2025-05-30T14:44:16Z",
            "content": "Google’s AI assistant, Gemini, is gaining a more prominent place in your inbox with the launch of email summary cards, which will appear at the top of your emails. The company announced Thursday that… [+1853 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "TechCrunch Events",
            "title": "Your last opportunity to vote on the TechCrunch Disrupt 2025 agenda lineup",
            "description": "We’re thrilled by the overwhelming response to our call for speakers at TechCrunch Disrupt 2025, taking place October 27–29 at Moscone West in San Francisco. After a careful selection process, we’ve narrowed it down to 20 impressive finalists—10 breakout sess…",
            "url": "https://techcrunch.com/2025/05/30/your-last-opportunity-to-vote-on-the-techcrunch-disrupt-2025-agenda-lineup/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/TC25_Disrupt_Audience-Choice_Article_Header_1920x1080.png?resize=1200,675",
            "publishedAt": "2025-05-30T14:30:00Z",
            "content": "Were thrilled by the overwhelming response to our call for speakers at TechCrunch Disrupt 2025, taking place October 2729 at Moscone West in San Francisco.\r\nAfter a careful selection process, weve na… [+3051 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Techcrunch Events",
            "title": "TC Sessions: AI Trivia Countdown — Test your AI knowledge | TechCrunch",
            "description": "Play the TechCrunch Sessions: AI Trivia Countdown challenge for a chance to win two tickets for the price of one. Last day to play is June 4.",
            "url": "https://techcrunch.com/2025/05/30/tc-sessions-ai-trivia-countdown-ready-to-test-your-ai-knowledge/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/04/GettyImages-2197366846.jpg?resize=1200,800",
            "publishedAt": "2025-05-30T14:21:16Z",
            "content": "As we count down the final days to TechCrunch Sessions: AI on June 5 at UC Berkeleys Zellerbach Hall, were offering one last chance to score a special deal.\r\nWeve launched the TC Sessions: AI Trivia … [+954 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Techcrunch Events",
            "title": "Last Week: Few exhibit tables left to claim at TC All Stage | TechCrunch",
            "description": "Exhibit tables for TechCrunch All Stage — happening July 15 in Boston — are almost gone. Deadline is June 6. Reserve your table now.",
            "url": "https://techcrunch.com/2025/05/30/last-week-few-exhibit-tables-left-to-claim-at-techcrunch-all-stage/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/03/Early-Stage-2024-Fidelity-exhibit.jpg?resize=1200,800",
            "publishedAt": "2025-05-30T14:16:31Z",
            "content": "Exhibit tables for TechCrunch All Stage happening July 15 in Boston are almost gone. If your product can help founders scale or your innovation can supercharge startups, this is your moment to shine.… [+1240 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "TechCrunch Events",
            "title": "Just 6 days left — ready for some unfiltered AI truths at TechCrunch Sessions: AI?",
            "description": "June 5 is almost here — bringing real, unfiltered AI conversations… and higher ticket prices. Lock in your savings now. Register now to save $300 on your TechCrunch Sessions: AI pass — and get 50% off for your +1. Don’t wait for rates to spike when event door…",
            "url": "https://techcrunch.com/2025/05/30/just-6-days-left-ready-for-some-unfiltered-ai-truths-at-techcrunch-sessions-ai/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/06/52147949692_f1b21ecd20_4k.jpg?resize=1200,800",
            "publishedAt": "2025-05-30T14:00:00Z",
            "content": "June 5 is almost here bringing real, unfiltered AI conversations and higher ticket prices. Lock in your savings now.\r\nRegister now to save $300 on your TechCrunch Sessions: AI pass and get 50% off fo… [+2207 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Bellan",
            "title": "Report: Elon Musk's drug use ramped up during the 2024 presidential campaign | TechCrunch",
            "description": "Elon Musk increased his drug taking during the 2024 presidential campaign in which he donated around $270 million to help elect Donald Trump.",
            "url": "https://techcrunch.com/2025/05/30/report-elon-musks-drug-use-ramped-up-during-the-2024-presidential-campaign/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/04/GettyImages-2210001139.jpg?w=1024",
            "publishedAt": "2025-05-30T13:28:34Z",
            "content": "Elon Musk reportedly increased his drug use during the 2024 presidential campaign in which he donated around $270 million to help elect Donald Trump, according to sources who spoke to The New York Ti… [+1268 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ivan Mehta",
            "title": "US imposes new rules to curb semiconductor design software sales to China | TechCrunch",
            "description": "Siemens EDA, Cadence and Synopsys have received notices from the U.S. Commerce Department about new export controls on chip design software to China.",
            "url": "https://techcrunch.com/2025/05/30/us-imposes-new-rules-to-curb-semiconductor-design-software-sales-to-china/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/02/unnamed-1.png?w=1024",
            "publishedAt": "2025-05-30T12:03:49Z",
            "content": "It appears the Trump administration has imposed new export controls on chip design software as it seeks to further undermine China’s ability to make and use advanced AI chips. \r\nSiemens EDA, Cadence … [+2090 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Lauren Forristal",
            "title": "Grocery platform Misfits Market acquires The Rounds to further its mission of reducing food waste | TechCrunch",
            "description": "Misfits Market, the online platform that delivers imperfect groceries to help minimize waste, announced the acquisition of household restocking service Misfits Market, the platform that delivers imperfect groceries, announced the acquisition of The Rounds, a …",
            "url": "https://techcrunch.com/2025/05/30/grocery-platform-misfits-market-acquires-the-rounds-to-further-its-mission-of-reducing-food-waste/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/MisfitMarket.png?w=1200",
            "publishedAt": "2025-05-30T12:01:53Z",
            "content": "Misfits Market, the online platform that delivers imperfect groceries to help minimize waste, announced the acquisition of household restocking serviceThe Rounds on Friday. \r\nAs a result of the deal,… [+2158 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ivan Mehta",
            "title": "Google fixes bug that led AI Overviews to say it's now 2024 | TechCrunch",
            "description": "Google has fixed a bug that led AI Overviews to say it's 2024 when it was asked if this year is 2025.",
            "url": "https://techcrunch.com/2025/05/30/google-fixes-bug-that-led-ai-overviews-to-say-its-now-2024/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/02/GettyImages-2196352264.jpg?w=1024",
            "publishedAt": "2025-05-30T10:44:58Z",
            "content": "AI tools are touted as capable helpers that can easily help you research, code, summarize, write and bring you knowledge of any kind. But sometimes simple questions befuddle them. Google’s AI Overvie… [+1667 chars]"
        },
        {
            "source": {
                "id": "the-next-web",
                "name": "The Next Web"
            },
            "author": "Siôn Geschwindt",
            "title": "Opinion: Europe must warm up to geothermal before it’s too late",
            "description": "While Europe races to phase out fossil fuels and electrify everything from cars to heating systems, it’s turning a blind eye to a reliable and proven source of clean energy lying right beneath our feet.  Geothermal energy offers exactly what the continent nee…",
            "url": "https://thenextweb.com/news/europe-geothermal-energy",
            "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F02%2FUntitled-design-2023-02-06T164144.385.jpg&signature=d051b2788a1a2e5abedc6b7ea9e35886",
            "publishedAt": "2025-05-30T07:00:54Z",
            "content": "While Europe races to phase out fossil fuels and electrify everything from cars to heating systems, its turning a blind eye to a reliable and proven source of clean energy lying right beneath our fee… [+3785 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Marina Temkin",
            "title": "Grammarly secures $1B in non-dilutive funding from General Catalyst | TechCrunch",
            "description": "Grammarly secures $1B in non-dilutive funding from General Catalyst | TechCrunchtechcrunch.com",
            "url": "https://techcrunch.com/2025/05/29/grammarly-secures-1b-in-non-dilutive-funding-from-general-catalyst/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/11/Grammarly-Abstract.jpg?resize=1200,632",
            "publishedAt": "2025-05-30T00:38:52Z",
            "content": "Grammarly has secured a $1 billion commitment from General Catalyst. The 14-year-old writing assistant startup will use the new funds for its sales and marketing efforts, freeing up existing capital … [+1753 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Cindy Zackney",
            "title": "Top 30 startups announced for VivaTech 2025 Innovation of the Year Award | TechCrunch",
            "description": "The Innovation of the Year Award celebrates the boldest and most visionary startups exhibiting at VivaTech 2025. Open to all exhibiting companies, the",
            "url": "https://techcrunch.com/2025/05/29/top-30-startups-announced-for-vivatech-2025-innovation-of-the-year-award/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/medium_vt23-s1-d2-17-25-africatech-awards_125_NM.jpg?w=750",
            "publishedAt": "2025-05-29T22:01:32Z",
            "content": "The Innovation of the Year Award celebrates the boldest and most visionary startups exhibiting at VivaTech 2025. Open to all exhibiting companies, the award honors those pushing boundaries and redefi… [+3093 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Cindy Zackney",
            "title": "Inside the AI revolution: Top insights and breakthroughs from our partners at TechCrunch Sessions: AI | TechCrunch",
            "description": "At TechCrunch Sessions: AI, the spotlight is on the future of artificial intelligence and the startups shaping it. This high-energy event brings together",
            "url": "https://techcrunch.com/2025/05/29/inside-the-ai-revolution-top-insights-and-breakthroughs-from-our-partners-at-techcrunch-sessions-ai/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/02/tc-backlight-e1689786273147.png?w=1200",
            "publishedAt": "2025-05-29T21:00:38Z",
            "content": "At TechCrunch Sessions: AI, the spotlight is on the future of artificial intelligence and the startups shaping it. This high-energy event brings together founders, investors, and technologists to exp… [+2635 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Szkutak",
            "title": "Hugging Face unveils two new humanoid robots | TechCrunch",
            "description": "Hugging Face hopes to start shipping two new open-source humanoid robots by the end of 2025.",
            "url": "https://techcrunch.com/2025/05/29/hugging-face-unveils-two-new-humanoid-robots/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/11f5fd43-3e13-4313-a003-9d36a81e3fde.png?resize=1200,602",
            "publishedAt": "2025-05-29T19:28:56Z",
            "content": "AI dev platform Hugging Face continued its push into robotics on Thursday with the release of two new humanoid robots.\r\nThe company announced a pair of open-source robots, HopeJR and Reachy Mini. Hop… [+1820 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Maxwell Zeff",
            "title": "Delaware attorney general reportedly hires a bank to evaluate OpenAI's restructuring plan | TechCrunch",
            "description": "Delaware's attorney general is hiring an investment bank to advise on OpenAI's for-profit conversion, the Wall Street Journal reported.",
            "url": "https://techcrunch.com/2025/05/29/delaware-attorney-general-reportedly-hires-a-bank-to-evaluate-openais-restructuring-plan/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/12/GettyImages-2188251582.jpg?resize=1200,800",
            "publishedAt": "2025-05-29T19:28:44Z",
            "content": "Delaware’s attorney general is hiring an investment bank to advise on OpenAI’s for-profit conversion, the Wall Street Journal reported on Wednesday. The independent evaluation could prolong the trans… [+784 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Black Forest Labs' Kontext AI models can edit pics as well as generate them | TechCrunch",
            "description": "Black Forest Labs, the AI startup whose models once powered the image generation features of X's Grok chatbot, has released a new suite of image-generating models — some of which can both create and edit pics.",
            "url": "https://techcrunch.com/2025/05/29/black-forest-labs-kontext-ai-models-can-edit-pics-as-well-as-generate-them/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/08/ai-gen-unfiltered.jpg?resize=1200,675",
            "publishedAt": "2025-05-29T19:20:27Z",
            "content": "Black Forest Labs, the AI startup whose models once powered the image generation features of X’s Grok chatbot, on Thursday released a new suite of image-generating models some of which can both creat… [+2880 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Tinder tests letting users set a ‘height preference’",
            "description": "Tinder Gold and Premium subscribers in the test group will have access to the feature, but not free users.",
            "url": "https://techcrunch.com/2025/05/29/tinder-tests-letting-users-set-a-height-preference/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/09/tinder-icon-ios.jpg?resize=1200,674",
            "publishedAt": "2025-05-29T19:16:35Z",
            "content": "Tinder is leaning into dating apps’ reputation for superficiality with the launch of a new feature that lets paid subscribers add their height preferences to their profiles.\r\nAfter a Reddit user post… [+3054 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Perplexity's new tool can generate spreadsheets, dashboards, and more | TechCrunch",
            "description": "Perplexity, the AI-powered search engine gunning for Google, has released Perplexity Labs, a tool for subscribers to Perplexity's $20-per-month Pro plan that can craft reports, spreadsheets, dashboards, and more.",
            "url": "https://techcrunch.com/2025/05/29/perplexitys-new-tool-can-generate-spreadsheets-dashboards-and-more/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/07/GettyImages-1917904267.jpg?resize=1200,800",
            "publishedAt": "2025-05-29T18:04:44Z",
            "content": "Perplexity, the AI-powered search engine gunning for Google, on Thursday released Perplexity Labs, a tool for subscribers to Perplexity’s $20-per-month Pro plan that can craft reports, spreadsheets, … [+2035 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Tim De Chant",
            "title": "Tesla alum’s Heron Power closes $38M Series A to transform key grid technology | TechCrunch",
            "description": "Tesla alum’s Heron Power closes $38M Series A to transform key grid technology | TechCrunchtechcrunch.com",
            "url": "https://techcrunch.com/2025/05/29/tesla-alums-heron-power-closes-38m-series-a-to-transform-key-grid-technology/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2017/05/gettyimages-173791238.jpg?resize=1200,797",
            "publishedAt": "2025-05-29T17:55:33Z",
            "content": "Heron Power, the electrical grid-focused startup founded by former Tesla executive Drew Baglino, announced Thursday it has raised $38 million in a Series A funding round. \r\nHeron Power is developing … [+815 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Julie Bort",
            "title": "In a victory for Palmer Luckey, Meta and Anduril work on mixed reality headsets for the military | TechCrunch",
            "description": "Anduril and Meta plan to build VR/AR extended reality headsets for the military as part of the the contract that Anduril took over from Microsoft.",
            "url": "https://techcrunch.com/2025/05/29/in-a-victory-for-palmer-luckey-meta-and-anduril-work-on-mixed-reality-headsets-for-the-military/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/11/GettyImages-1728513468-e.jpg?resize=1200,799",
            "publishedAt": "2025-05-29T17:49:48Z",
            "content": "On Thursday, Anduril and Meta announced news that feels like a fairy tale ending for Anduril co-founder, Palmer Luckey. The two companies are working together to build extended reality (XR) devices f… [+2877 chars]"
        },
        {
            "source": {
                "id": "the-next-web",
                "name": "The Next Web"
            },
            "author": "Siôn Geschwindt",
            "title": "UK trial shows space robots could build solar farms in orbit",
            "description": "Remote-controlled robots could one day build giant solar farms in space, according to a recent trial in the UK. British startup Space Solar conducted the test at the UK Atomic Energy Authority’s (UKAEA) facilities on the University of Oxford’s Culham Campus, …",
            "url": "https://thenextweb.com/news/uk-trial-space-robots-could-build-solar-farms-in-orbit",
            "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2024%2F04%2Fspace-Solar-Power-Satellite.jpg&signature=189aaa5d339265d4c5990e3d9e1d99dc",
            "publishedAt": "2025-05-29T17:37:36Z",
            "content": "Remote-controlled robots could one day build giant solar farms in space, according to a recent trial in the UK.\r\nBritish startup Space Solar conducted the test at the UK Atomic Energy Authoritys (UKA… [+2756 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Aisha Malik",
            "title": "YouTube will soon let viewers use Google Lens to search what they see while watching Shorts",
            "description": "YouTube announced on Thursday that it’s bringing Google Lens to YouTube Shorts in the coming weeks. With this integration, viewers will soon be able to use Google Lens to search what they see while watching Shorts. For example, if you’re watching a Short film…",
            "url": "https://techcrunch.com/2025/05/29/youtube-will-soon-let-viewers-use-google-lens-to-search-what-they-see-while-watching-shorts/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/04/youtube-ios-app.webp?w=1024",
            "publishedAt": "2025-05-29T17:05:58Z",
            "content": "YouTube announced on Thursday that it’s bringing Google Lens to YouTube Shorts in the coming weeks. With this integration, viewers will soon be able to use Google Lens to search what they see while w… [+1795 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "DeepSeek's distilled new R1 AI model can run on a single GPU | TechCrunch",
            "description": "DeepSeek's distilled new R1 AI model can run on a single GPU, putting it within reach of hobbyists.",
            "url": "https://techcrunch.com/2025/05/29/deepseeks-distilled-new-r1-ai-model-can-run-on-a-single-gpu/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/01/GettyImages-2196223480.jpg?resize=1200,825",
            "publishedAt": "2025-05-29T17:03:30Z",
            "content": "DeepSeek’s updated R1 reasoning AI model might be getting the bulk of the AI community’s attention this week. But the Chinese AI lab also released a smaller, “distilled” version of its new R1, DeepSe… [+1361 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Lorenzo Franceschi-bicchierai",
            "title": "US government sanctions tech company involved in cyber scams | TechCrunch",
            "description": "The Treasury said FUNNULL was involved in providing infrastructure for pig butchering crypto scams.",
            "url": "https://techcrunch.com/2025/05/29/us-government-sanctions-tech-company-involved-in-cyber-scams/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/funnull-polyfill-macau-skyline.jpg?w=1200",
            "publishedAt": "2025-05-29T16:58:41Z",
            "content": "The U.S. government imposed sanctions on FUNNULL, a company accused of providing infrastructure for cybercriminals running so-called “pig butchering” crypto scams that have led to $200 million in los… [+3101 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Tim De Chant",
            "title": "Tesla pleads for Senate to spare its booming energy business | TechCrunch",
            "description": "If the Senate were to pass it with those repeals in tact, it could have a devastating impact on Tesla’s energy division.",
            "url": "https://techcrunch.com/2025/05/29/tesla-pleads-for-senate-to-spare-its-booming-energy-business/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/01/GettyImages-1296608191.jpeg?resize=1200,801",
            "publishedAt": "2025-05-29T16:04:38Z",
            "content": "Tesla is a business built, in part, on government regulations and incentives, from a Department of Energy loan guarantee in 2009 to the regulatory credits it sells to other automakers, which have dri… [+2438 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Apple’s US App Store topped $400B in developer billings and sales in 2024",
            "description": "Just ahead of its Worldwide Developers Conference next month, Apple on Thursday announced new figures related to the U.S. App Store’s financial success. The company says its U.S. App Store ecosystem has generated $406 billion in developer billings and sales i…",
            "url": "https://techcrunch.com/2025/05/29/apples-us-app-store-topped-400b-in-developer-billings-and-sales-in-2024/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/03/apple-app-store-ios-2021.jpg?w=1180",
            "publishedAt": "2025-05-29T15:59:37Z",
            "content": "Just ahead of its Worldwide Developers Conference next month, Apple on Thursday announced new figures related to the U.S. App Store’s financial success. The company says its U.S. App Store ecosystem … [+3569 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "DeepSeek's updated R1 AI model is more censored, test finds | TechCrunch",
            "description": "DeepSeek's updated R1 AI model is more censored than the AI lab's previously releases, one test found — in particular when it comes to criticism of the Chinese government.",
            "url": "https://techcrunch.com/2025/05/29/deepseeks-updated-r1-ai-model-is-more-censored-test-finds/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/01/deepseek-2.jpg?resize=1200,800",
            "publishedAt": "2025-05-29T14:44:52Z",
            "content": "Chinese AI startup DeepSeek’s newest AI model, an updated version of the company’s R1 reasoning model, achieves impressive scores on benchmarks for coding, math, and general knowledge, nearly surpass… [+2667 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Zack Whittaker",
            "title": "A decade in, bootstrapped Thinkst Canary reaches $20M in ARR without VC funding | TechCrunch",
            "description": "Reflecting on 10 years since its launch, the honeypot maker explains why the company did not take on any VC funding.",
            "url": "https://techcrunch.com/2025/05/29/a-decade-in-bootstrapped-thinkst-canary-reaches-20m-in-arr-without-vc-funding/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/canary-tools-getty-1732944703.jpg?resize=1200,1173",
            "publishedAt": "2025-05-29T14:13:45Z",
            "content": "This month, cybersecurity company Thinkst will mark its 10th anniversary since the launch of its now-flagship product, Canary. The company debuted Canary after seeing companies spend millions of doll… [+4697 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Techcrunch Events",
            "title": "7 days until doors open at Sessions: AI | TechCrunch",
            "description": "TechCrunch Sessions: AI kicks off in just 7 days. Main stage and breakout sessions. Connect, learn, and network at high velocity. June 5 at UC Berkeley.",
            "url": "https://techcrunch.com/2025/05/29/7-days-until-doors-open-at-techcrunch-sessions-ai/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/02/TC-Sessions-Robotics_Zellerbach-Hall-2.jpg?resize=1200,800",
            "publishedAt": "2025-05-29T14:05:05Z",
            "content": "Were on the final stretch! TechCrunch Sessions: AI kicks off in just 7 days. Main stage and breakout sessions feature AI leaders from Google Cloud, Anthropic, OpenAI, Twelve Labs, and more. Its your … [+3592 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Aisha Malik",
            "title": "Meta AI now has 1B monthly active users",
            "description": "Meta AI now has one billion monthly active users across its apps, CEO Mark Zuckerberg said at the company’s annual shareholder meeting on Wednesday, as first reported by CNBC. The new milestone doubles the 500 million monthly active users Meta AI had back in …",
            "url": "https://techcrunch.com/2025/05/29/meta-ai-now-has-1b-monthly-active-users/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/01/GettyImages-2173579488.jpg?resize=1200,799",
            "publishedAt": "2025-05-29T14:02:43Z",
            "content": "Meta AI now has one billion monthly active users across its apps, CEO Mark Zuckerberg said at the companys annual shareholder meeting on Wednesday, as first reported by CNBC. The new milestone double… [+794 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Tim De Chant",
            "title": "Volteras wants to connect to more EVs than anyone else | TechCrunch",
            "description": "Volteras has raised $11.1 million to expand its connected car offerings to automakers and companies that want to interact with EVs.",
            "url": "https://techcrunch.com/2025/05/29/volteras-wants-to-connect-to-more-evs-than-anyone-else/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/02/tesla-ford-charger.jpg?resize=1200,674",
            "publishedAt": "2025-05-29T13:49:24Z",
            "content": "For years, people have been worried both rightly and otherwise  that electric vehicles could strain the grid to the breaking point. But as they spread, and as EV technology advances, some think these… [+3063 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Dominic-Madori Davis",
            "title": "Apple to change the way it names operating systems, report says",
            "description": "Apple will reportedly change the way it names its operating systems, per a Bloomberg report.  Operating systems will now be named by year, meaning the update after the current iOS 18 will be iOS 26 rather than, say, iOS 19. The change paves the way for a less…",
            "url": "https://techcrunch.com/2025/05/29/apple-to-change-the-way-it-names-operating-systems-report-says/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/03/GettyImages-692648270.jpg?resize=1200,800",
            "publishedAt": "2025-05-29T13:46:35Z",
            "content": "Apple will reportedly change the way it names its operating systems, per a Bloomberg report. \r\nOperating systems will now be named by year, meaning the update after the current iOS 18 will be iOS 26 … [+611 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Bellan",
            "title": "The New York Times and Amazon ink AI licensing deal | TechCrunch",
            "description": "Nearly two years after suing OpenAI and Microsoft for copyright infringement, The New York Times has agreed to license its editorial content to Amazon to train the tech giant’s AI platforms.",
            "url": "https://techcrunch.com/2025/05/29/the-new-york-times-and-amazon-ink-ai-licensing-deal/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/GettyImages-458591263.jpg?resize=1200,800",
            "publishedAt": "2025-05-29T13:21:13Z",
            "content": "Nearly two years after suing OpenAI and Microsoft for copyright infringement, The New York Times has agreed to license its editorial content to Amazon to train the tech giants AI platforms. \r\nThe agr… [+1052 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Dominic-madori Davis",
            "title": "Zeal Capital Partners announces close of $82M Fund II | TechCrunch",
            "description": "Zeal Capital Partners announced on Wednesday the close of its second fund, raising $82 million. Limited partners in the fund include Citi Impact Fund,",
            "url": "https://techcrunch.com/2025/05/29/zeal-capital-partners-announces-close-of-82m-fund-ii/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/GettyImages-1398190408.jpg?w=1024",
            "publishedAt": "2025-05-29T13:08:18Z",
            "content": "Zeal Capital Partners announced on Wednesday the close of its second fund, raising $82 million. Limited partners in the fund include Citi Impact Fund, M&amp;T Bank, Wells Fargo, and Spelman College. … [+1905 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Buildots raises $45M to help companies track construction progress | TechCrunch",
            "description": "Buildots, a startup developing an AI-powered construction management platform, has raised $45 million in a Series D round led by Qumra Capital with participation from OG Venture Partners, TLV Partners, Poalim Equity, Future Energy Ventures, and Viola Growth.",
            "url": "https://techcrunch.com/2025/05/29/buildots-raises-45m-to-help-companies-track-construction-progress/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/06/GettyImages-1327336423-e1687951117537.jpg?resize=1200,675",
            "publishedAt": "2025-05-29T11:01:08Z",
            "content": "In the construction industry, managers can easily become disconnected from whats happening on-site. Among the many tasks to juggle are staying apprised of costs, communicating with all stakeholders, … [+2351 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Lauren Forristal",
            "title": "Meet LoveJack, the dating app designed for users to find love using just five words",
            "description": "As Kevin Malone from “The Office” once said, “Why waste time say lot word when few word do trick?”  For Julia LeStage and Lisa Le, the creators of a new dating app called LoveJack, finding love online doesn’t have to feel like filling out a mountain of paperw…",
            "url": "https://techcrunch.com/2025/05/29/meet-lovejack-the-dating-app-designed-for-users-to-find-love-using-just-five-words/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/lovejack1.png?resize=1200,677",
            "publishedAt": "2025-05-29T11:00:00Z",
            "content": "As Kevin Malone from The Office once said, “Why waste time say lot word when few word do trick?” \r\nFor Julia LeStage and Lisa Le, the creators of a new dating app called LoveJack, finding love online… [+4907 chars]"
        },
        {
            "source": {
                "id": "the-next-web",
                "name": "The Next Web"
            },
            "author": "Siôn Geschwindt",
            "title": "‘Little evidence’ that EU laws aided criminals in crypto kidnappings",
            "description": "Earlier this month, the father of a wealthy cryptocurrency entrepreneur was abducted in Paris while walking his dog. The attackers, wearing balaclavas, forced him into a van, later severing one of his fingers and sending a video of the mutilation to his son a…",
            "url": "https://thenextweb.com/news/eu-law-criminals-crypto-kidnappings-france",
            "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2025%2F05%2Fcrypto-kidnappings-eu.jpg&signature=a7d1ab672b3331f991804f34fc82015f",
            "publishedAt": "2025-05-29T10:30:02Z",
            "content": "Earlier this month, the father of a wealthy cryptocurrency entrepreneur was abducted in Paris while walking his dog. The attackers, wearing balaclavas, forced him into a van, later severing one of hi… [+3751 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ivan Mehta",
            "title": "X hits pause on its encrypted DMs feature | TechCrunch",
            "description": "X said it will work on \"making some improvements\" to the encrypted DMs feature. It didn't mention when the feature might be available again.",
            "url": "https://techcrunch.com/2025/05/29/x-hits-pause-on-its-encrypted-dms-feature/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/08/getty-keys-red-background-locks.jpg?resize=1200,800",
            "publishedAt": "2025-05-29T10:14:47Z",
            "content": "Social network X said on Thursday that it is pausing its encrypted DMs feature as it works to make some improvements.\r\nIn a post on X, the company’s engineering account said users will be able to acc… [+659 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ram Iyer",
            "title": "Elon Musk's stint in the US government is coming to an end | TechCrunch",
            "description": "Elon Musk confirmed on Wednesday that he's ending his stint as a U.S. special government employee and as the de-facto head of DOGE.",
            "url": "https://techcrunch.com/2025/05/29/elon-musks-stint-in-the-us-government-is-coming-to-an-end/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/GettyImages-2207245107-1.jpg?resize=1200,765",
            "publishedAt": "2025-05-29T09:44:17Z",
            "content": "Tech mogul and billionaire Elon Musk confirmed on Wednesday that he’s ending his stint as a U.S. special government employee, a move that implies he’ll also step down as the de-facto head of the Depa… [+1090 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ivan Mehta",
            "title": "NVIDIA, AMD may soon start selling new AI chips in China to comply with US restrictions | TechCrunch",
            "description": "NVIDIA and AMD will soon begin selling new GPUs made for AI workloads in China to comply with US chip export restrictions.",
            "url": "https://techcrunch.com/2025/05/29/nvidia-amd-may-soon-start-selling-new-ai-chips-in-china-to-comply-with-us-restrictions/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/01/GettyImages-1223301957.jpg?resize=1200,646",
            "publishedAt": "2025-05-29T07:23:27Z",
            "content": "To comply with the U.S.’ restrictions on exporting advanced semiconductor technology to China, chipmakers NVIDIA and AMD will soon begin selling new GPUs made for AI workloads in China, Taiwanese tec… [+966 chars]"
        },
        {
            "source": {
                "id": "the-next-web",
                "name": "The Next Web"
            },
            "author": "Thomas Macaulay",
            "title": "Bioprinted organs ‘10–15 years away,’ says startup regenerating dog skin",
            "description": "Human organs could be bioprinted for transplants within 10 years, according to Lithuanian startup Vital3D. But before reaching human hearts and kidneys, the company is starting with something simpler: regenerating dog skin. Based in Vilnius, Vital3D is alread…",
            "url": "https://thenextweb.com/news/bioprinting-human-organs-in-10-years",
            "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2025%2F05%2FUntitled-design-52.jpg&signature=41de7a0589566e6cbe7ba845f34ab1ba",
            "publishedAt": "2025-05-29T07:00:44Z",
            "content": "Human organs could be bioprinted for transplants within 10 years, according to Lithuanian startup Vital3D. But before reaching human hearts and kidneys, the company is starting with something simpler… [+6017 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Jagmeet Singh",
            "title": "Lightspeed backs Indian home services startup Snabbit as the next big consumer trend | TechCrunch",
            "description": "Home services in India — whether it is cleaning, dishwashing, or laundry — have traditionally been offline and informally run. This has often resulted in",
            "url": "https://techcrunch.com/2025/05/28/lightspeed-backs-indian-home-services-startup-snabbit-as-the-next-big-consumer-trend/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/snabbit.jpg?resize=1200,679",
            "publishedAt": "2025-05-29T01:03:34Z",
            "content": "Home services in India whether it is cleaning, dishwashing, or laundry have traditionally been offline and informally run. This has often resulted in delays and uncertainties for consumers, as well a… [+6746 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Julie Bort",
            "title": "Founder Sahil Lavingia says he was booted from DOGE after just 55 days  | TechCrunch",
            "description": "Sahil Lavingia has published a diary recounting his time as a member of Elon Musk’s DOGE workforce. It's a short read — Lavingia's DOGE stint lasted just Well-known startup founder and angel investor has published a diary of his short-lived time at DOGE, show…",
            "url": "https://techcrunch.com/2025/05/28/founder-sahil-lavingia-says-he-was-booted-from-doge-after-just-55-days/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/03/doge-vc-lede.jpg?resize=1200,824",
            "publishedAt": "2025-05-28T22:16:38Z",
            "content": "Sahil Lavingia has published a diary recounting his time as a member of Elon Musks DOGE workforce. It’s a short read Lavingia’s DOGE stint lasted just 55 days but it is does provide new details on th… [+4028 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Jagmeet Singh",
            "title": "Security startup Horizon3.ai is raising $100M in new round",
            "description": "Horizon3.ai is raising a $100M round led by NEA at a valuation of upwards of $750M, according to a filing and sources.",
            "url": "https://techcrunch.com/2025/05/28/security-startup-horizon3-ai-is-raising-100m-in-new-round/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/09/GettyImages-1370218759.jpg?resize=1200,800",
            "publishedAt": "2025-05-28T21:33:43Z",
            "content": "Horizon3.ai, a cybersecurity startup that provides tools like autonomous penetration testing, is seeking to raise $100 million in a new funding round and has locked down at least $73 million, the com… [+1825 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Szkutak",
            "title": "Nvidia expects to lose billions in revenue due to H20 chip licensing requirements | TechCrunch",
            "description": "Nvidia incurred a $4.5 billion charge due to H20 licensing requirements in Q1 alongside an additional $2.5 billion in lost revenue.",
            "url": "https://techcrunch.com/2025/05/28/nvidia-expects-to-lose-billions-in-revenue-due-to-h20-chip-licensing-requirements/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/GettyImages-2216028442.jpg?w=1024",
            "publishedAt": "2025-05-28T21:03:57Z",
            "content": "As Nvidia reports earnings for the first quarter of its fiscal year 2026, which closed on April 28, the company has released numbers on how the Trump administration’s recent chip export restrictions … [+1176 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Zack Whittaker",
            "title": "Victoria's Secret hit by outages as it battles security incident | TechCrunch",
            "description": "Victoria's Secret hit by outages as it battles security incident | TechCrunchtechcrunch.com",
            "url": "https://techcrunch.com/2025/05/28/victorias-secret-hit-by-outages-as-it-battles-security-incident/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/victoria-secret-2207321089.jpg?resize=1200,800",
            "publishedAt": "2025-05-28T20:22:42Z",
            "content": "Fashion retail giant Victoria’s Secret said it is addressing a “security incident,” as its website and online orders face ongoing disruption. \r\nVictoria’s Secret posted the brief statement on its web… [+671 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "GameStop bought $500 million of Bitcoin | TechCrunch",
            "description": "GameStop announced on Wednesday that it bought 4,710 Bitcoin, which is worth over $500 million at the time of the purchase. The video game retail chain",
            "url": "https://techcrunch.com/2025/05/28/gamestop-bought-500-million-of-bitcoin/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1230829761.jpeg?w=1024",
            "publishedAt": "2025-05-28T19:59:00Z",
            "content": "GameStop announced on Wednesday that it bought 4,710 Bitcoin, which is worth over $500 million at the time of the purchase.\r\nThe video game retail chain has struggled to stay relevant in a time when … [+2624 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kirsten Korosec",
            "title": "Stellantis pivots to Google's Android as in-car partnership with Amazon ends | TechCrunch",
            "description": "Stellantis pivots to Google's Android as in-car partnership with Amazon ends | TechCrunchtechcrunch.com",
            "url": "https://techcrunch.com/2025/05/28/stellantis-pivots-to-googles-android-as-in-car-partnership-with-amazon-ends/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/stellantis-GettyImages-1233767570.jpg?resize=1200,795",
            "publishedAt": "2025-05-28T19:35:21Z",
            "content": "Three years ago, Stellantis announced it was pairing up with Amazon to create in-car software that would bring a slew of connected products and services to vehicles by 2024 as part of the automakers … [+2101 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "DeepSeek: Everything you need to know about the AI chatbot app | TechCrunch",
            "description": "DeepSeek has gone viral. Chinese AI lab DeepSeek broke into the mainstream consciousness this week after its chatbot app rose to the top of the Apple",
            "url": "https://techcrunch.com/2025/05/28/deepseek-everything-you-need-to-know-about-the-ai-chatbot-app/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/01/deepseek-2.jpg?resize=1200,800",
            "publishedAt": "2025-05-28T19:13:44Z",
            "content": "DeepSeek has gone viral.\r\nChinese AI lab DeepSeek broke into the mainstream consciousness this week after its chatbot app rose to the top of the Apple App Store charts (and Google Play, as well). Dee… [+6573 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "DeepSeek updates its R1 reasoning AI model, releases it on Hugging Face | TechCrunch",
            "description": "Chinese startup DeepSeek has released an updated version of its R1 reasoning AI model on the developer platform Hugging Face after announcing it in a WeChat message Wednesday morning.",
            "url": "https://techcrunch.com/2025/05/28/deepseek-updates-its-r1-reasoning-ai-model-releases-it-on-hugging-face/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/01/GettyImages-2196333417_75e106.jpg?resize=1200,901",
            "publishedAt": "2025-05-28T19:12:37Z",
            "content": "Chinese startup DeepSeek has released an updated version of its R1 reasoning AI model on the developer platform Hugging Face after announcing it in a WeChat message Wednesday morning.\r\nThe updated R1… [+774 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "Karat Financial is bringing business banking to creators",
            "description": "Karat Financial, the company known for its credit cards for creators, is launching a creator-focused business banking product. Powered by digital bank Grasshopper, Karat’s banking product is a natural extension of its credit card offering with Visa. “Six year…",
            "url": "https://techcrunch.com/2025/05/28/karat-financial-is-bringing-business-banking-to-creators/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/Karat-Landing-Page_Mobile_1.2.jpg?resize=1200,1200",
            "publishedAt": "2025-05-28T19:00:00Z",
            "content": "Karat Financial, the company known for its credit cards for creators, is launching a creator-focused business banking product. Powered by digital bank Grasshopper, Karat’s banking product is a natura… [+2719 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "Odyssey’s new AI model streams 3D interactive worlds",
            "description": "Odyssey, a startup founded by self-driving pioneers Oliver Cameron and Jeff Hawke, has developed an AI model that lets users “interact” with streaming video. Available on the web in an “early demo,” the model generates and streams video frames every 40 millis…",
            "url": "https://techcrunch.com/2025/05/28/odysseys-new-ai-model-streams-3d-interactive-worlds/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/11/ODYSSEY-INTHEWILD-974_Retouched_V1.00.jpg?resize=1200,800",
            "publishedAt": "2025-05-28T18:34:17Z",
            "content": "Odyssey, a startup founded by self-driving pioneers Oliver Cameron and Jeff Hawke, has developed an AI model that lets users “interact” with streaming video. \r\nAvailable on the web in an “early demo,… [+4100 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Spotify amps up podcast discovery with new features",
            "description": "Spotify will begin recommending podcasts on its Home page and provide a Following feed for staying up-to-date with the latest episodes.",
            "url": "https://techcrunch.com/2025/05/28/spotify-amps-up-podcast-discovery-with-new-features/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/FTR-Header-2880x1640-2-1-1920x733-1.png?resize=1200,458",
            "publishedAt": "2025-05-28T18:17:49Z",
            "content": "Spotify on Wednesday announced a handful of new features designed to give podcasts a more prominent position in its app as it battles with Apple and YouTube to become users’ preferred podcast streami… [+2360 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Aisha Malik",
            "title": "Google Photos debuts redesigned editor with new AI tools",
            "description": "The redesign adds new AI features, Reimagine and Auto Frame, which were previously only available on Pixel devices.",
            "url": "https://techcrunch.com/2025/05/28/google-photos-debuts-redesigned-editor-with-new-ai-tools/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/02/GettyImages-2199793091.jpg?w=1024",
            "publishedAt": "2025-05-28T18:07:23Z",
            "content": "Google is celebrating 10 years of Google Photos with the launch of a redesigned editor. The redesign adds new AI features, Reimagine and Auto Frame, which were previously only available on Pixel devi… [+1302 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "Meta wants to open more retail stores | TechCrunch",
            "description": "Meta reportedly wants to expand its brick-and-mortar retail footprint to sell devices like the Quest VR headset and its Ray Ban glasses.",
            "url": "https://techcrunch.com/2025/05/28/meta-wants-to-open-more-retail-stores/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1395406112.jpg?resize=1200,675",
            "publishedAt": "2025-05-28T17:34:09Z",
            "content": "Meta wants to grow its retail footprint, Business Insider reported on Wednesday. \r\nAs Meta continues to invest in wearables, these stores would ideally help Meta boost the sales of hardware like the … [+676 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Maxwell Zeff",
            "title": "Netflix co-founder Reed Hastings joins Anthropic's board | TechCrunch",
            "description": "Netflix co-founder Reed Hastings was appointed by Anthropic's Long-Term Benefit Trust to serve on the startup's board of directors.",
            "url": "https://techcrunch.com/2025/05/28/netflix-co-founder-reed-hastings-joins-anthropics-board/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2017/10/gettyimages-488944602.jpg?resize=1200,801",
            "publishedAt": "2025-05-28T17:29:09Z",
            "content": "Netflix co-founder Reed Hastings is joining Anthropic’s board of directors, the company announced on Wednesday.\r\nHastings’ appointment adds a veteran big tech executive to one of OpenAI’s largest and… [+753 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Kyle Wiggers",
            "title": "AMD buys silicon photonics startup Enosemi to fuel its AI ambitions | TechCrunch",
            "description": "AMD has acquired Enosemi, a startup designing custom materials to support silicon photonics product development.",
            "url": "https://techcrunch.com/2025/05/28/amd-buys-silicon-photonics-startup-enosemi-to-fuel-its-ai-ambitions/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/GettyImages-2213364357.jpg?resize=1200,800",
            "publishedAt": "2025-05-28T17:25:06Z",
            "content": "AMD has acquired Enosemi, a startup designing custom materials to support silicon photonics product development. The terms of the deal, announced Wednesday, weren’t disclosed. \r\nSilicon photonics use… [+2027 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Bellan",
            "title": "Dozens of unsold Tesla Cybertrucks are piling up at Detroit parking lot | TechCrunch",
            "description": "A Detroit landowner is in violation of city codes for storing unsold Tesla Cybertrucks in his parking lot.",
            "url": "https://techcrunch.com/2025/05/28/dozens-of-unsold-tesla-cybertrucks-are-piling-up-at-detroit-parking-lot/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/GettyImages-2193740363.jpg?resize=1200,800",
            "publishedAt": "2025-05-28T16:34:30Z",
            "content": "Teslas Cybertruck sales dropped significantly in recent quarters, leading to a rapid buildup of unsold inventory. And it looks like the company is resorting to unconventional storage sites for the ex… [+931 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Family safety app Life360 adds Tile’s lost-item trackers, years after its acquisition",
            "description": "Over three and a half years after family locator app Life360 acquired lost item tracker Tile for $205 million, the two services are finally fully integrated. On Wednesday, Life360 announced that the item-finding capabilities of Tile, a competitor to Apple’s A…",
            "url": "https://techcrunch.com/2025/05/28/family-safety-app-life360-adds-tiles-lost-item-trackers-years-after-its-acquisition/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/Brand_Integration_Blog_Hero_Asset_1.jpg?w=1008",
            "publishedAt": "2025-05-28T16:13:56Z",
            "content": "Over three and a half years after family locator app Life360 acquired lost item tracker Tile for $205 million, the two services are finally fully integrated. On Wednesday, Life360 announced that the … [+2461 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Aisha Malik",
            "title": "Microsoft starts testing Copilot for Gaming in Xbox app for iOS and Android",
            "description": "Microsoft announced on Wednesday that it has started rolling out the beta version of its Copilot for Gaming experience. Beta testers can access the experience in the Xbox app on iOS and Android. The early version of the experience allows the assistant to answ…",
            "url": "https://techcrunch.com/2025/05/28/microsoft-starts-testing-copilot-for-gaming-in-xbox-app-for-ios-and-android/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/xbox-copilot.jpg?resize=1200,675",
            "publishedAt": "2025-05-28T16:09:40Z",
            "content": "Microsoft announced on Wednesday that it has started rolling out the beta version of its Copilot for Gaming experience. Beta testers can access the experience in the Xbox app on iOS and Android. \r\nTh… [+1876 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ivan Mehta",
            "title": "Context gets $11M to build an AI-powered office suite",
            "description": "Context, a startup building an AI-powered office suite, announced that it raised $11 million in a seed round led by Lux Capital with participation from Qualcomm Ventures and General Catalyst.",
            "url": "https://techcrunch.com/2025/05/28/context-gets-11m-to-build-an-ai-powered-office-suite/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/IMG_9520.jpeg?resize=1200,754",
            "publishedAt": "2025-05-28T16:00:00Z",
            "content": "Context, a startup building an AI-powered office suite, on Wednesday announced that it raised $11 million in a seed round led by Lux Capital with participation from Qualcomm Ventures and General Cata… [+2753 chars]"
        },
        {
            "source": {
                "id": "the-next-web",
                "name": "The Next Web"
            },
            "author": "Siôn Geschwindt",
            "title": "5 ways the EU’s bold new startup plan could boost its tech ecosystem",
            "description": "The European Commission has unveiled ambitious plans to cut red tape and make the EU a more attractive place for tech businesses to scale.  Launched today, the EU Startup and Scaleup Strategy comes as the bloc scrambles to attract and retain tech startups ami…",
            "url": "https://thenextweb.com/news/europe-startup-strategy-tech-ecosystem-funding",
            "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F09%2FUntitled-design-1-2.jpg&signature=6fcef80d4f74a324c5d28c7838e2a87f",
            "publishedAt": "2025-05-28T15:58:41Z",
            "content": "The European Commission has unveiled ambitious plans to cut red tape and make the EU a more attractive place for tech businesses to scale. \r\nLaunched today, the EU Startup and Scaleup Strategy comes … [+4713 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Marina Temkin",
            "title": "Rillet raises $25M from Sequoia to automate general ledger systems using AI",
            "description": "Rillet directly pulls data from their customers' banks and platforms to generate financial statements, including the balance sheet and income statement.",
            "url": "https://techcrunch.com/2025/05/28/rillet-raises-25m-from-sequoia-to-automate-general-ledger-systems-using-ai/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/Nicolas-Kopp-Founder-and-CEO-3.jpg?resize=1200,800",
            "publishedAt": "2025-05-28T15:57:00Z",
            "content": "For accounting departments, no software is more important than the general ledger system. It’s the central hub that summarizes all financial transactions, providing the essential data needed to creat… [+3159 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Szkutak",
            "title": "Why export restrictions aren't the only thing to pay attention to in Nvidia's earnings | TechCrunch",
            "description": "Nvidia started shipping its new GB200 NVL72 units this quarter and it isn't clear what the demand for these units looks like yet.",
            "url": "https://techcrunch.com/2025/05/28/why-export-restrictions-arent-the-only-thing-to-pay-attention-to-in-nvidias-earnings/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/11/GettyImages-2183848501.jpg?resize=1200,800",
            "publishedAt": "2025-05-28T15:42:47Z",
            "content": "After the market closes on Wednesday, Nvidia will report earnings for the first quarter of its fiscal year 2026, which ended on April 27.\r\nWhile many in the industry are likely eager to hear how the … [+3088 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Lauren Forristal",
            "title": "Discord explores virtual rewards for its ad product as it prepares for a potential IPO",
            "description": "Discord announced on Wednesday that it’s experimenting with a new virtual reward system aimed at encouraging more users to engage with its interactive ads. This new feature, called “Orbs,” comes on the heels of the company preparing for a potential IPO.  User…",
            "url": "https://techcrunch.com/2025/05/28/discord-explores-virtual-rewards-for-its-ad-product-as-it-prepares-for-a-potential-ipo/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/DiscordOrbs.png?w=1200",
            "publishedAt": "2025-05-28T14:57:51Z",
            "content": "Discord announced on Wednesday that its experimenting with a new virtual reward system aimed at encouraging more users to engage with its interactive ads. This new feature, called Orbs, comes on the … [+1483 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "With iOS 19 on the way, Apple looks toward mobile gaming",
            "description": "With Apple’s flagship Worldwide Developers Conference (WWDC) event a few weeks away, the company is signaling that it’s paying attention to the opportunity of mobile gaming. Apple already has a subscription-based Arcade product for iOS, which gives users acce…",
            "url": "https://techcrunch.com/2025/05/28/with-ios-19-on-the-way-apple-looks-toward-mobile-gaming/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/05/GettyImages-1196692235.jpg?resize=1200,800",
            "publishedAt": "2025-05-28T14:50:55Z",
            "content": "With Apple’s flagship Worldwide Developers Conference (WWDC) event a few weeks away, the company is signaling that it’s paying attention to the opportunity of mobile gaming.\r\nApple already has a subs… [+1222 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "TechCrunch Events",
            "title": "Help shape TechCrunch Disrupt 2025: Vote for your favorite sessions",
            "description": "We were blown away by the incredible interest in speaking at TechCrunch Disrupt 2025, happening October 27–29 at Moscone West in San Francisco.  After a thorough review, we’ve narrowed it down to 20 standout finalists—10 for breakout sessions and 10 for round…",
            "url": "https://techcrunch.com/2025/05/28/help-shape-techcrunch-disrupt-2025-vote-for-your-favorite-sessions/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/breakout_1200x600_a9107e.png?w=1200",
            "publishedAt": "2025-05-28T14:30:00Z",
            "content": "We were blown away by the incredible interest in speaking at TechCrunch Disrupt 2025, happening October 2729 at Moscone West in San Francisco. \r\nAfter a thorough review, weve narrowed it down to 20 s… [+2928 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Techcrunch Events",
            "title": "Compete with an incumbent, with Linear Cristina Cordova at Sessions: AI | TechCrunch",
            "description": "Compete with an incumbent, with Linear COO Cristina Cordova at TechCrunch Sessions: AI on June 5 in UC Berkeley's Zellerbach Hall.",
            "url": "https://techcrunch.com/2025/05/28/how-to-seize-the-opportunity-and-compete-with-an-incumbent-with-linear-coo-cristina-cordova-at-techcrunch-sessions-ai/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/10/Battlefield-crowd.jpg?resize=1200,800",
            "publishedAt": "2025-05-28T14:15:00Z",
            "content": "A familiar problem is facing new entrants in the AI industry: how do you break through when the incumbents are so entrenched? Thats just one of the questions were tackling at TechCrunch Sessions: AI,… [+2205 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Zack Whittaker",
            "title": "Data broker giant LexisNexis says breach exposed personal information of over 364,000 people | TechCrunch",
            "description": "Data broker giant LexisNexis says breach exposed personal information of over 364,000 people | TechCrunchtechcrunch.com",
            "url": "https://techcrunch.com/2025/05/28/data-broker-giant-lexisnexis-says-breach-exposed-personal-information-of-over-364000-people/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/04/social-security-cards-ssn.jpg?resize=1200,800",
            "publishedAt": "2025-05-28T14:08:09Z",
            "content": "LexisNexis Risk Solutions, a data broker that collects and uses consumers’ personal data to help its paying corporate customers detect possible risk and fraud, has disclosed a data breach affecting m… [+2256 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Techcrunch Events",
            "title": "How startups win with agentic AI, Tkxel Umair Javed at Sessions: AI | TechCrunch",
            "description": "Umair Javed of Tkxel will lead a breakout at TechCrunch Sessions: AI on June 5, exploring the power and potential of agentic AI to help startups thrive.",
            "url": "https://techcrunch.com/2025/05/28/how-small-businesses-can-actually-benefit-from-agentic-ai-with-tkxel-ceo-umair-javed-at-techcrunch-sessions-ai/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/breakout_1200x600_a9107e.png?w=1200",
            "publishedAt": "2025-05-28T14:01:05Z",
            "content": "TechCrunch Sessions: AI takes over UC Berkeleys Zellerbach Hall in just one week join us June 5 for a full day of networking, learning sessions, satellite events, and more. And were adding another ex… [+1813 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Aisha Malik",
            "title": "Apple expands Self Service Repair to iPads",
            "description": "Apple’s Self Service Repair program is expanding to the iPad, the tech giant announced on Wednesday. The program will give iPad owners the tools they need to repair their devices at home. They can get access to repair manuals, genuine Apple parts, Apple Diagn…",
            "url": "https://techcrunch.com/2025/05/28/apple-expands-self-service-repair-to-ipads/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/03/apple-ipad-air-m3.jpg?resize=1200,675",
            "publishedAt": "2025-05-28T13:31:05Z",
            "content": "Apple’s Self Service Repair program is expanding to the iPad, the tech giant announced on Wednesday. The program will give iPad owners the tools they need to repair their devices at home. They can ge… [+1665 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ivan Mehta",
            "title": "xAI to pay Telegram $300M to integrate Grok into the chat app",
            "description": "Telegram CEO Pavel Durov on Wednesday said Elon Musk's AI company, xAI, is investing $300 million worth of cash and equity in the chat app.",
            "url": "https://techcrunch.com/2025/05/28/xai-to-pay-300m-in-telegram-integrate-grok-into-app/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/06/telegram-app-cellphone.jpg?resize=1200,800",
            "publishedAt": "2025-05-28T13:25:29Z",
            "content": "Telegram has struck a partnership with Elon Musk’s AI company, xAI, to distribute the latter’s chatbot, Grok, via Telegram and integrate it into apps available on the chat app’s platform for one year… [+962 chars]"
        }
    ]
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            articles: this.articles,
            totalResults:0
        };
        document.title = `${this.props.category} - PrimeTime`;
    }

    handlenextclick = async () => {
        let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=073e261a2f8a4300b8a8f5e9895fb1c1`;
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata); // Debugging output

        this.setState({
            page: this.state.page + 1,
            articles: parseddata.results || [] // fallback to empty array if undefined
        });
    };

    handleprevclick = async () => {
        let url = ` https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${this.props.apiKey}`;
        let data = await fetch(url);
        let parseddata = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parseddata.results || []
        });
    };

    componentDidMount = async () => {
        // Initial fetch
        this.props.setProgress(10);
        let url = ` https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${this.props.apiKey}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        let parseddata = await data.json();
        this.props.setProgress(50);
        console.log(parseddata);

        this.setState({
            articles: parseddata.articles || [],
            totalResults:parseddata.totalResults
        });
        this.props.setProgress(100);
    };
    fetchMoreData = async() => {
    this.setState({page:this.state.page + 1})
    this.componentDidMount = async () => {
        // Initial fetch
        let url = ` https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${this.props.apiKey}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);

        this.setState({
            articles: this.state.articles.concat(parseddata.articles || []),
            totalResults:parseddata.totalResults
        });
    };
    };
    render(){
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{ color: 'white', fontStyle: 'italic', textDecoration: 'underline', fontFamily: 'fantasy', textAlign: 'center'}}>
                    PrimeTime-Top {this.props.category} Headlines</h1>
            

                <div className="row">
                    {this.state.articles.map((element, index) => (
                        <div className="col-md-4" key={element.link || element.url || index}>
                            <NewsItem title={element.title || "No Title"} description={element.description || "No Description"} imageurl={element.urlToImage || "https://techcrunch.com/wp-content/uploads/2024/11/GettyImages-2183887189.jpg"} newsUrl={element.link || element.url || "#"} author={element.author} date={element.publishedAt} />
                        </div>
                    ))}
                </div>
                {/* <div className="container d-flex justify-content-between my-3">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handleprevclick}>&larr; Previous</button>
                    <button type="button" className="btn btn-primary" onClick={this.handlenextclick}>  Next &rarr;</button>
                    </div> */}
             </div>
        );
    }
}
export default News;
