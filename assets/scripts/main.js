document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    konamify("arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightbaenter");
    copyEmail();

    tippy('.job-description', {
        content: 'While Ruby on Rails and Vue.js are my fav\'s. I\'m into learning more.',
        theme: 'light-border',
        arrow: true,
        arrowType: 'round', // or 'sharp' (default)
        animation: 'fade',
    })

    tippy('.interest-learning', {
        content: 'Currently re-doing my roof. Ask me how it\'s going!',
        theme: 'light-border',
        arrow: true,
        arrowType: 'round', // or 'sharp' (default)
        animation: 'fade',
    })

    tippy('.interest-gaming', {
        content: 'I\'m playing Age of Calamity at the moment. I have a lot of strong opinions about how it melds perfectly with BotW.',
        theme: 'light-border',
        arrow: true,
        arrowType: 'round', // or 'sharp' (default)
        animation: 'fade',
    })

    tippy('.interest-writing', {
        content: 'Peg Leg Meg is my daughters plushy puppy with a toilet roll peg leg. She has adventures in shopping trolley pirate ships, cast away islands on the rug in our living room, or stranded at sea when we left her in the car overnight.',
        theme: 'light-border',
        arrow: true,
        arrowType: 'round', // or 'sharp' (default)
        animation: 'fade',
    })

    tippy('.interest-books', {
        content: 'Paul Kalanithi\'s book \'When breath becomes air\' is the latest book I am obsessed with. It really struck me that he sort of \'fell\' into Neurosurgery by following his desire to capture knowledge about where technology intersects spirituality. Again, I have a lot of thoughts on the topic. I\'d love to chat about it.',
        theme: 'light-border',
        arrow: true,
        arrowType: 'round', // or 'sharp' (default)
        animation: 'fade',
    })

    tippy('.interest-food', {
        content: '<a href="https://www.notion.so/batshoes/a2b1dd0ef1f1403f890c733f8a186cb1?v=254fdc1af9624cd58c6911dfee0537d9">This</a> is the \'best of\' from my time in NYC. I am in the process of creating another for Sydney.',
        theme: 'light-border',
        arrow: true,
        arrowType: 'round', // or 'sharp' (default)
        animation: 'fade',
        interactive: true,
    })

    tippy('.contact-build', {
        content: 'I love a side hustle',
        theme: 'light-border',
        arrow: true,
        arrowType: 'round', // or 'sharp' (default)
        animation: 'fade',
    })

    tippy('.contact-highscore', {
        content: 'There was a time I could run the Luigi Raceway in Mario Kart 64 blindfolded in under 2.5 minutes',
        theme: 'light-border',
        arrow: true,
        arrowType: 'round', // or 'sharp' (default)
        animation: 'fade',
    })

    tippy('.contact-story', {
        content: 'Does your child also like to bring their favourite stuffed animal to spaghetti dinners? I have a cautionary tale that will keep even the most beloved fluffy animal at arms length from the saucy noodle monsters of Tah-Bel.',
        theme: 'light-border',
        arrow: true,
        arrowType: 'round', // or 'sharp' (default)
        animation: 'fade',
    })

    tippy('.contact-recommendations', {
        content: '<a href = "https://www.bistecca.com.au/" class="highlight" >Bistecca</a>',
        theme: 'light-border',
        arrow: true,
        arrowType: 'round', // or 'sharp' (default)
        animation: 'fade',
    })

    tippy('.contact-chat', {
        content: 'If you have news about Breath of the Wild 2, I <em>need</em> to speak with you',
        theme: 'light-border',
        arrow: true,
        arrowType: 'round', // or 'sharp' (default)
        animation: 'fade',
    })
});

function copyEmail() {
    document.addEventListener(
        'click',
        function (event) {
            // Only fire if the target has id copy
            if (!event.target.matches('#copy')) return;

            if (!navigator.clipboard) {
                // Clipboar d API not available
                return;
            }
            var text = event.target.innerText;
            try {
                navigator.clipboard.writeText(text);
                document.getElementById('copy').innerText = 'Copied to clipboard!';
                setTimeout(function () {
                    document.getElementById('copy').innerText = 'james.o.middlemiss@gmail.com';
                }, 1200);
            } catch (err) {
                console.error('Failed to copy!', err);
            }
        },
        false
    );

}

function konamify(code) {
    let buffer = [];
    let lastKeyTime = Date.now();

    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();

        const currentTime = Date.now();

        if (currentTime - lastKeyTime > 1000) {
            buffer = [];
        }

        lastKeyTime = currentTime;
        buffer.push(key);
        if (buffer.join('') === code) {
            // Konamified.
            const scroller = document.querySelector('.konamify h3');
            scroller.style.cssText = '-moz-animation: konamify 15s linear infinite; -webkit-animation: konamify 15s linear infinite; animation: konamify 15s linear infinite;';
            // Your Konami Code action here.
        }
    });
}