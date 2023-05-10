$(function() {
    
    const newText= $('<h3 class="text-[#c2f] text-[2rem] border-dashed border-2 border-[#18c]">Hello ! I am a new page</h3>')
    const $newTeamContainer=  $('<div>').addClass('bg-sacramento w-[69.375rem] h-[38rem]');
    //Edit teamscontainer function
    $('#edit-btn').on("click",()=> {
        $('#teams-profile').css('display', 'none');
        $('#teams-header').text('Add your team here');
        $newTeamContainer.css('display','block')
        $newTeamContainer.append(newText)
        $('#teams-container').append($newTeamContainer)
    });

    //A function to hide newTeamContainer
    $('#cancel-btn').on('click',()=>{
        $newTeamContainer.css('display', 'none');
        $('#teams-header').text('Meet the TeaM');
        $('#teams-profile').css('display', 'grid');
    });
});