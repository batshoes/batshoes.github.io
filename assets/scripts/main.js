document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    konamify("arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightbaenter");
    copyEmail();

    tippy('.job-description', {
        content: 'Hello - Light',
        theme: 'light',
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