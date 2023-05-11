$(function(){
    $('#add-btn').on('click',(event) => {
        const $addteamModal =$('<div class="w-full h-full bg-dark-green bg-opacity-60">stbatr</div>')
        $('#addteam-modal').append($addteamModal).css('display', 'block');
    });
    $('#addteam-modal').on('click',(event) => {
        $(event.currentTarget).css('display', 'none');
    });
})
