$(function() {
    const $menuBtn = $('#menu-btn');
    const $aboutpageModal = $('#aboutpage-modal');
    const $closeBtn = $('#close-btn');

    $menuBtn.on('click',() => {
        $aboutpageModal.css('visibility', 'visible');
    });

    $closeBtn.on('click',() => {
        $aboutpageModal.css('visibility', 'hidden');
    });

});