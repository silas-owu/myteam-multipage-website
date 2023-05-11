//Function to handle DOM manipulations
$(function() {
    $('#cancel-btn').addClass('hidden');
    $('#add-btn').addClass('hidden');
    const newText= $('<h3 class="text-[#c2f] text-[2rem] border-dashed border-2 border-[#18c]">Hello ! ,Add with plus icon</h3>')
    const $newTeamContainer=  $('<div>').addClass('bg-sacramento w-[69.375rem] h-[38rem]');

    //Event listener for  edit-btn function
    $('#edit-btn').on("click",()=> {
        $('#teams-profile').css('display', 'none');
        $('#teams-header').text('Add your team here');
        $('#cancel-btn').toggleClass('hidden');
        $('#add-btn').toggleClass('hidden');
        $newTeamContainer.css('display','block')
        $newTeamContainer.append(newText)
        $('#teams-container').append($newTeamContainer).css({
            marginTop: '-11.7rem'
        })
    });

    //Eventlistener function to hide newTeamContainer
    $('#cancel-btn').on('click',(event)=>{
        $newTeamContainer.css('display', 'none');
        $('#teams-header').text('Meet the TeaM');
        $('#teams-profile').css('display', 'grid');
        $(event.currentTarget).addClass('hidden');
        $('#add-btn').addClass('hidden');
        $('#teams-container').css({
            marginTop: '-4.7rem'
        });
    });
});