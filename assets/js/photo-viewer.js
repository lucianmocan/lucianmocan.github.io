(() => {
    const links = document.querySelectorAll('[data-photo-viewer], [data-photo-details]');
    if (!links.length || typeof HTMLDialogElement === 'undefined') return;
    const icon = path => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${path}</svg>`;
    const dialog = document.createElement('dialog');
    dialog.className = 'photo-viewer';
    dialog.setAttribute('aria-labelledby', 'photo-viewer-title');
    dialog.innerHTML = `
        <button class="photo-viewer-close" type="button" aria-label="Close photo" autofocus>${icon('<path d="M6 6l12 12M18 6L6 18"/>')}</button>
        <img class="photo-viewer-image" alt="">
        <div class="photo-viewer-info">
            <h2 id="photo-viewer-title"></h2><p class="photo-viewer-date"></p>
            <dl></dl>
            <div class="photo-histogram" hidden>
                <div class="photo-histogram-title">RGB histogram</div>
                <canvas width="512" height="128" role="img" aria-label="Red, green, and blue pixel frequencies, from dark tones on the left to bright tones on the right"></canvas>
                <div class="photo-histogram-scale"><span>Shadows</span><span>Highlights</span></div>
            </div>
        </div>`;
    document.body.append(dialog);
    const image = dialog.querySelector('img');
    const close = dialog.querySelector('.photo-viewer-close');
    const histogram = dialog.querySelector('.photo-histogram');
    let opener;
    let previousOverflow;

    function drawHistogram() {
        try {
            // Sample the displayed image at a bounded resolution.
            const sample = document.createElement('canvas');
            const scale = Math.min(1, 512 / Math.max(image.naturalWidth, image.naturalHeight));
            sample.width = Math.max(1, Math.round(image.naturalWidth * scale));
            sample.height = Math.max(1, Math.round(image.naturalHeight * scale));
            const context = sample.getContext('2d', { willReadFrequently: true });
            context.drawImage(image, 0, 0, sample.width, sample.height);
            const pixels = context.getImageData(0, 0, sample.width, sample.height).data;
            const bins = Array.from({ length: 3 }, () => new Uint32Array(256));
            for (let i = 0; i < pixels.length; i += 4) {
                for (let channel = 0; channel < 3; channel++) bins[channel][pixels[i + channel]]++;
            }
            const peak = Math.max(1, ...bins.flatMap(channel => Array.from(channel)));
            const canvas = histogram.querySelector('canvas');
            const chart = canvas.getContext('2d');
            chart.clearRect(0, 0, canvas.width, canvas.height);
            chart.globalCompositeOperation = 'screen';
            ['#ee7777', '#80bd88', '#7e9fe6'].forEach((color, channel) => {
                chart.beginPath();
                chart.moveTo(0, canvas.height);
                bins[channel].forEach((count, index) => {
                    chart.lineTo(index * canvas.width / 255, canvas.height - count / peak * (canvas.height - 6));
                });
                chart.lineTo(canvas.width, canvas.height);
                chart.closePath();
                chart.fillStyle = color;
                chart.globalAlpha = 0.35;
                chart.fill();
                chart.strokeStyle = color;
                chart.globalAlpha = 0.85;
                chart.lineWidth = 1.5;
                chart.stroke();
            });
            histogram.hidden = false;
        } catch {
            histogram.hidden = true;
        }
    }
    image.addEventListener('load', drawHistogram);
    image.addEventListener('error', () => { histogram.hidden = true; });
    links.forEach(trigger => trigger.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        opener = trigger;
        const link = trigger.matches('[data-photo-viewer]')
            ? trigger : trigger.closest('figure').querySelector('[data-photo-viewer]');
        histogram.hidden = true;
        image.src = link.href;
        image.alt = link.querySelector('img').alt;
        dialog.querySelector('h2').textContent = link.dataset.location;
        dialog.querySelector('.photo-viewer-date').textContent = link.dataset.date;
        const metadata = dialog.querySelector('dl');
        metadata.replaceChildren();
        for (const [label, key] of [['Camera', 'camera'], ['Lens', 'lens'], ['Exposure', 'exposure'], ['Local time', 'time']]) {
            if (!link.dataset[key]) continue;
            const group = document.createElement('div');
            const term = document.createElement('dt');
            const value = document.createElement('dd');
            term.textContent = label;
            value.textContent = link.dataset[key];
            group.append(term, value);
            metadata.append(group);
        }
        previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        dialog.showModal();
        close.focus();
    }));
    close.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
        if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
        document.body.style.overflow = previousOverflow;
        opener?.focus({ preventScroll: true });
    });
})();
