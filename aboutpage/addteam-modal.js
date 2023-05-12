$(function(){
    $('#add-btn').on('click',() => {
        
    });

    //This is removed and it belongs to the add button eventlistener
    //uncomment the addmodal eventlistener, when done designing 
    //addteam-card
    const $addteamModal =$('<div class="w-full h-full bg-dark-green bg-opacity-60 text-[#fff] pt-[6rem] block=="></div>')
    const $addteamCard = $(`
    <div class="grid grid-cols-2 mx-auto children:border-2  bg-midnight-green w-[66rem] h-[40rem] text-[#eab]">
        <div class=" children:border-2 px-6 py-10">
            <div class="h-[35rem] flex flex-col gap-y-11">
                <div class="mx-auto border-2 rounded-full w-[9.6rem] h-[9.6rem]">
                
                </div>
                <div class="h-[22.5rem] border-2">
                    <form class="flex flex-col gap-y-4 children:h-[2.9rem] children:bg-midnight-green children:focus-outline-none children:border-b children:border-deep-jungle-green">
                        <input/>
                        <input/>
                        <input/>
                        <input/>
                        <input/>
                        <input/>
                    </form>
                </div>
            </div>
        </div>
        <div id="">right</div>
    </div>`);
    $addteamModal.append($addteamCard);
    $('#addteam-modal').append($addteamModal).css({
        display:'block',
          
    });
    /* $('#addteam-modal').on('click',(event) => {
        $(event.currentTarget).css('display', 'none');
    }); */
})
