$(function(){
    $('#add-btn').on('click',(event) => {
        const $addteamModal =$('<div class="w-full h-full bg-dark-green bg-opacity-60 text-[#fff]">stbatr</div>')
        const $addteamCard = $('<div class=" mx-auto mt-[4rem] bg-police-blue w-[12.5rem] h-[12.5rem] text-[#eab]">This is where you add your details</div>')
        $addteamModal.append($addteamCard);
        $('#addteam-modal').append($addteamModal).css({
            display:'block',

        });

    });
    $('#addteam-modal').on('click',(event) => {
        $(event.currentTarget).css('display', 'none');
    });
})
