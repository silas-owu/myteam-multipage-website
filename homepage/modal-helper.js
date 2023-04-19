//Using Jquery for homepage modal
//Using jQuery for DOM manipulations

$(function() {
    const $menuBtn = $('#menu-btn');
    const $homepageModal = $('#homepage-modal');
    const  $closeBtn = $('#close-btn');

    $menuBtn.on('click',()=>{
        $homepageModal.css('visibility', 'visible');
    });

    $closeBtn.on('click',()=>{
        $homepageModal.css('visibility','hidden')
    });

    $homepageModal.on('click',(event)=>{
        $(event.currentTarget).css('visibility','hidden')
    });
});