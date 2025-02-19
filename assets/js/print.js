function printSong() {
    const songContent = document.querySelector('.song').innerHTML;
    const footerContent = document.querySelector('footer p').innerHTML;
    const originalDocument = document.body.innerHTML;
    
    document.body.innerHTML = `
        <article class="song">
            ${songContent}
        </article>
    `;
    
    window.print();
    
    document.body.innerHTML = originalDocument;
    
    // Reattach the event listener after restoring content
    document.querySelector('.print-button').onclick = printSong;
}