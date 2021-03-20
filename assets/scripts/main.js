document.addEventListener(
    'click',
    function (event) {
        // Only fire if the target has id copy
        if (!event.target.matches('#copy')) return;

        if (!navigator.clipboard) {
            // Clipboard API not available
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

