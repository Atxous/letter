const flap = document.getElementById('flap');
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const content = document.getElementById('content');
const nextPageButton = document.getElementById('nextPage');
const prevPageButton = document.getElementById('prevPage');
let opened = false;
let currentPage = 0;

// Store the pages' content in an array
const pages = [
    {
        header: "My Dearest Lauren,",
        body: "I know this is a little unconventional, because usually I’d send you a wall of text or a written letter, but I’m scared to do either. So I opted for this instead.<br><br>" +
        "Although I’m not certain the exact date we met, the first lecture started last year, September 24th, which was the last week of September. We added each other in Discord on " +
        "10/11/2023, which was the 2nd week of October, on a Wednesday. So I guessed that you were added to our group on the first Sunday of October, which is about today." +
        " I remember asking everyone in the slack channel to add me on Discord as an excuse to get you added too. Getting to know you was so fun, and I loved learning about your interests and passions.<br><br>" +
        "Happy 1 year meeting anniversary.<br><br>" +
        "Over the past year, we connected emotionally and have had a lot of deep talks, both of which I happily enjoyed doing with you. We did work together, and it was refreshing to meet someone who was " 
        + "both fun to work with and someone who engaged in a full on project with me.",
        footer: "You sparkle in my eyes."
    },
    {
        header: "October",
        body: "I found out about your music tastes, and I got to know you better in that 3 way call. I think I smiled each time I found out something about you, including: robotics, your friends, your passion in CS, and your switch from medical to CS. Hearing about your college aspirations, your music tastes, and so much “normal” stuff made such a great impression on me. I truly found everything that you said interesting.",
        footer: "\"Did you do the reading?\"<br><br>\"No, I just ChatGPTed it\"<br><br>\"SAME\""
    },
    {
        header: "November",
        body: "I think most of the things we talked about were the same in November as they were in October. I got to know you better, and we continued to work on the paper. However, Harrison and Cindy ditched us, and it was left up to us to continue working on the paper. You still stuck with me even though no one else did. For that, I was thankful. Do you remember the random meetings and how we’d deviate from working to just talk about life? How the time would pass by so fast simply because we enjoyed finding things out about each other? I truly cherished those moments, even if time was ticking by and I wasn’t necessarily productive.",
        footer: "\"the timezones and the daylight savings thing actually threw me off even though its been a week already<br><br>i thought the lecture was supposed to be 20 min ago 😭\""
    },
    {
        header: "December",
        body: "This was the month we truly locked in and we had to cram to finish that paper. Staying up past midnight working in my chair while my back died due to my position wasn’t pleasant. But working with you made it all the better. Coding for me is a hobby, and I usually pass time so quickly by doing so. But time managed to fly even faster when I worked with you. And compared to working with anyone else, I found fun and excitement staying up and typing away on my keyboard with you. We didn’t submit to the conference, but that time couldn’t have been spent in any better way than locking in with you.",
        footer: "\"literlaly work on ur little tower\""
    },
    {
        header: "January",
        body: "Some more discussions on the paper, but you ghosted me. Not much to write here…",
        footer: "\"kevin wants you to come to the meeting\"<br><br>You: "
    },
    {
        header: "February",
        body: "I contacted you again, and we reconnected. You gave me your number simply because I wasn’t using android, and this is where I was reminded that all girls are good at word games. Well, I guess not all. I did beat you some times, and I made sure to rub it in. But you were better at word games than anyone I’ve ever met. It’s crazy how close we got during this period of time, even though we were still technically co-workers, working on a paper together. I got to know so much about you and your work with FTC. I saw you working all the time for your robot and having fun along the way. You know, I think a big reason why I came back to robotics was because of you. I took that gap year in sophomore year to pursue volleyball, but seeing how much fun you were having and my work in vision pushed me to work harder in my team.<br><br>Working on the paper was fun as always, as long as it was with you. The laughs and smiles you gave me, I think working was fun with you. I know I have fun coding and programming by myself, but there’s something better about working with someone as unique as you.<br><br>You thought we weren’t going to be as close once the paper was done, but I’m glad that turned out to be wrong. I’d say we got even closer.",
        footer: "\"the next time we play this I'm gonna screenshot and use a ruler\"<br><br>\"LOL<br>CHEATER\""
    },
    {
        header: "March",
        body: "It’s kind of a blur to recall everything that has happened, but I remember this was my robotics competition season. And I got to do a lot of work there with my amazing teammates. I joked that we would win regionals (we didn’t :( ) but you were there to comfort more. You were always there for me even if I wasn’t there for myself. I really love and cherish that part of you - it’s never changed.",
        footer: "\"if i gave up one or two needs at the moments you need me I'd still be fine\"<br><br>\"i donf wnat uou to do that<br>genuinely\"<br><br>\"see like<br>you're too caring\"<br><br>...<br><br>\"no but<br>ur tryign tk bend itn again dummy\"<br><br>\"ugh<br>you caught me I guess\""
    },
    {
        header: "April",
        body: "4/10/2024 - One of the worst days ever, yet by the end, it became better. I’ll tell you exactly how I saw it; I was sleeping, and by this point, I had removed your contact name, almost deleted our messages (but I couldn’t bring myself to do it) and more. You called me while I was sleeping, and I checked my calls, and you were calling me endlessly. I recognized your number almost instantly. And so I picked up, and we figured things out.<br><br>This was also the first time we’ve said we love each other. Of course, I still hold the title for being the first person to have said it as part of the i love you game, but you get what I mean. It was… weird. I never met someone who loves as much as you did. And I think having that simple expression was everything to me. Of course I know my friends love me. Of course I know that they have my back. But hearing the words was special. It’s like a latent thing, hidden from sight but there.<br><br>You visited California this month and, although I couldn’t see you, I wished you a good time. You missed me even though you didn’t see me, and, though I didn’t show it at the time, I was appreciative of that. It might seem weird, but being missed by someone shows that I’m valued, especially from someone like you. Someone so loving and caring and sweet and… well anyway, it was a good feeling. I wish I had gotten to see more of you.",
        footer: "\"i was pouring milk in ralphs cereal bc im nice like that<br>and he immediately thought i was tryingt o steal it\""
    },
    {
        header: "May",
        body: "Everything was ending for you, and I extended my heart to you. I felt so bad because you were going through so much and all I could do was sit on the side, watching you suffer. I tried my best to be there for you, to help and extend a shoulder to cry on. You could always talk to me, and I’d do my best to listen.<br><br>I loved you, and I couldn’t bear to see you in pain. It was like a part of me was hurting too when I saw your sadness and grief. I tried to be understanding for you, to be there for you at all times. And looking back, I think I managed to make you happy, and support you as best as I could. I’m thankful past me was able to be there for his princess.",
        footer: "\"I just wanna let you know that you're gonna find so much happiness in the future\""
    },
    {
        header: "June",
        body: "“i can’t ever let you one up me, so here goes. i love you lauren. i love you so so much. i feel a little fake because i know i love you, and there’s so much to love about you because you’re so so lovable, but i can’t pinpoint what it is about you that makes me feel this way. i could start from anything, like your voice, one aspect of you that drew me to you immediately. i’m in love with your voice. it’s so sweet and cute. it makes me want to protect you with everything i have. your love for everyone is so wholesome, and i can see how much you love. it just makes me want to give you more love, more than you’ve ever given out. and your care - i love how much you care about others, including me. and even though it makes you a crybaby. it makes me wanna be by your side even more. you might think it’s a flaw. but in truth, i love that part about you, and i’m so lucky to be able to see that side of you. just your presence is enough to make me feel at home. i feel so warm and cozy when i’m with you. you make me feel special. and i hope that translates through in my behavior. because you’re special to me too. you’re invaluable. i’d crown you as my rose quartz because you love so much, with all your heart. it represents unconditional love in every relationship. your goofiness, even though you might seem dumb at times, i only think of you in a positive light. i think you’re so cute whenever you’re being silly or goofy. it’s so adorable to me. and it makes me feel even more like i belong with you. i want to have fun with you, make memories with you, be by you all the time. i want to spend all my time with you. i love you so much. i’m so madly in love with you. i truly believe you’re the only one for me. you’re just so amazing, sweet, and beautiful in my eyes. and i wish you could see that. i might be lovesick and i’ll probably cringe at myself for being so vulnerable and loving. but it doesn’t change the fact that i love you. and i don’t think this feeling will ever change. i love you forever lauren”<br>Right, “you know. I wrote another letter. There’s another version. But it’s long. like really long. and I think it’s better suited when I give it to you later.”<br>And I did end up giving you that letter on my birthday.",
        footer: ""
    },
    {
        header: "July",
        body: "Probably some of the harder months in this period. Mixed signals were a little difficult to overcome, and it made me take seconds at a time to consider what it was that I was doing. Though, sleeping on call with you every day was some of the most comforting things I did. I never knew how comforting sleeping 1190 miles away from someone I loved over call was.<br><br>I think this was a hard part of this year because I was stuck battling whether or not this was right for me or for you. What I mean is that I wanted you with all my heart, I knew that was right for me. But for you, I wasn’t sure. And how could I keep supporting your interactions when I knew I was indirectly causing your downfall? Yet I continued in spite of everything. Guess it didn’t help in the long run.<br><br>We spent a day together this month. We had our first kiss.<br><br>You told me you regret it, but I don’t. Looking back, I really don’t regret anything. I did the best I could with what I was given, and in that moment, I loved you and I wanted to show that. I wanted to accept your love. The only thing I suppose I wish happened differently was that we didn’t rush it and we loved each other through time and a slow burn, working our way up to these moments. I suppose that would have been healthier. Nonetheless, I loved you, and I don’t regret feeling love.",
        footer: "\"...Sure, I'm also excited to go with your cousin and brother, the whole family, but I think it's you tha tmakes it so much more special. I want to spend more time with you. I really love you. Simply your presence is enough for me.\""
    },
    {
        header: "August",
        body: "More difficulties arose, and I think this was the hardest month for me. I was hurt and all I could do was sit there and forgive because I understood and knew where you were coming from. I saw your tears, and I could not muster any other words than “it’s okay.”<br><br>But we overcame it again. We kept overcoming the issues we ran into, and we ultimately loved each other even more.",
        footer: "\"i know you're a blessing to your friends and family<br>everything you've told me<br>they love you<br>and i can see it<br>i can tell<br>that your presence makes them happy<br>you should never give up on that\""
    },
    {
        header: "September - 2024",
        body: "This month was just as hard as the previous ones. I kept battling with the uncertainty that arose from our situation, and I just didn’t know what to do. You were coming to California, but I kept getting mixed up in the maze of my emotions, and I couldn’t differentiate what I was feeling. So I made a rash decision. I did things that I typically wouldn’t. I regret not communicating in a more effective manner.<br><br>Yet I still loved you with all my heart. I guess sometimes I still sabotage myself by thinking that it’s better without me in your life. You were a planet and I was your moon, your pull on me was just so strong. Everything about you was so attractive to me. I wanted to grow and help you, simply just to see this wonderful girl prosper.",
        footer: "\"ur actusllt seb<br>stop<br>im gonan die<br>i wish u were therr it actuallt made me cry so bad\""
    },
    {
        header: "Afterword (1)",
        body: "And now, we’re back to that month - October. I’m incredibly thankful for the year you’ve given me, through the highs and lows that we’ve gone through. I don’t think I could have spent it any better.<br><br>Before anything else, I just wanna say that I still love you as much as I have in those months prior. Taking a step back and allowing you to figure yourself out doesn’t dissolve my feelings. But it’s because I love you so much that I want to give you that space and time to thrive on your own, something that you always told me you needed. I had only wished we truly took it slow from the beginning.<br><br>I know time is what you need. So I’m leaving you alone and trying to let you prosper in college with the new people you have surrounded yourself with. Seeing you being busy with your friends fills me with a mysterious sense of fulfillment. I did tell you, didn’t I? I love seeing you laugh and have fun with the people you cherish and hold close. That smile will forever be precious, even if the reason you’re smiling isn’t because of me. I just love being the reason why you have an extra smile or laugh during the day.<br><br>For me, I think it’s possible to love hard but not make everything about you at the same time. I think this is what I’ve been doing. I’m not going to demand that you spend every minute with me, or that you should only talk to me. I encourage you to explore and find your interests, find new things to do and learn about. I love you in these small but noticeable ways.<br><br>You told me that you felt suffocated, so I tried to give you more space than usual. I’m trying to make sure you don’t feel that while you’re exploring your freedom in college. You told me that it looks like I dedicate my entire life to you, how I always respond and might be waiting for your notification. So I tried to be less talkative, less available.",
        footer: ""
    },
    {
        header: "Afterword (2)",
        body: "And I guess how your new life has been is indirectly making it easier to do that. Just looking at our text messages over the last day or so has been sad. The long intervals between texts, saying my name just to say hi, but then leaving me delivered for hours on end. I’ve tried to avoid caring about it because I know you’re just out there enjoying life. But it’s hard to pretend I don’t care about you. It’s hard to pretend that I don’t miss you. Whenever I take a nap or wake up, that facade always comes off and it’s always the same feeling - “I miss Lauren.” It’s hard to pinpoint exactly why it’s like this, but I know I feel it regardless whether or not I try my best to avoid or suppress the feeling. It’s part of the reason why I feel so unwelcome if I were to ever visit you. I don’t know right now if you’d want me to, or if I’m even allowed to. I know you said I was always welcome before, but right now, it doesn’t feel like it.<br><br>I know you're so enjoying your college life right now, but I’d like to spend time with the person who I love and have been talking to online for the past few months a little more, especially because she’s here now, something I’ve been looking forward to for so long. My friends got me a 100 piece clear puzzle for my birthday, and it’s still sealed. I wanted to do it with you and spend time with you in any way I possibly can. Whether it’s locking in, exploring food places, or just having fun playing Roblox games, whether it’s going out with your friends and finding new things to do around the area, whether it’s meeting new people with you and just enjoying each other’s presence, I genuinely don’t mind what it is as long as it’s with you. If possible, won’t you let me spend some more time with my favorite person in the world?",
        footer: "Happy 1 year anniversary. Let's make more cherished memories together in our lives.<br><br>Love,<br>Jason"
    },
];

// Function to display content for the current page
function showPage(index) {
    const page = pages[index];
    content.innerHTML = `
        <h2>${page.header}</h2>
        <p>${page.body}</p>
        <p>${page.footer}</p>
    `;
    // Disable buttons as needed
    prevPageButton.disabled = index === 0; // Disable if first page
    nextPageButton.disabled = index === pages.length - 1; // Disable if last page
}

// Initially hide the letter content
envelope.addEventListener('click', () => {
    if (!opened) {
        flap.classList.toggle('open');
        letter.classList.add('visible');
        opened = true;

        // Wait 2 seconds before enlarging the letter
        setTimeout(() => {
            letter.classList.add('enlarged');
            showPage(currentPage); // Show first page after opening
        }, 2000);
    }
});

// Navigate to the next page
nextPageButton.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage); // Display the next page content
    }
});

// Navigate to the previous page
prevPageButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage); // Display the previous page content
    }
});
