//Function to handle DOM manipulations
$(function() {
    $('#edit-btn').on('click', ()=>{
        $('#addteam-modal').css('display', 'block');
        $('#teams-header').text('Add your team')
    })

    $('#close').on('click',()=>{
        $('#addteam-modal').css('display','none');
        $('#teams-header').text('Meet the Team')
    })
    
    $('#image-input').on('change',()=>{
        const imageFile = $('#image-input').prop('files')[0];
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            $('#user-image').attr('src', reader.result);
          });

        if(imageFile){
            reader.readAsDataURL(imageFile);
        }
    })

    //Save button to receive user's input and append to
    // teams-profile content by click
    $('#save-btn').on('click',()=>{
        //conditions:
        $('#full-name').val() === '' || $('#role').val() === ''
        $('user-image').attr('src') === ''

        $submitBtn.on('click',function(event){
            $titleID.val() === '' ? 
                ( $titleID.next('p').length === 0 
                && $titleID.after('<p class="text-[#F67E7E] font-bold font-italic text-[0.625rem] leading-[0.8125rem]">This field is required</p>').addClass('placeholder-light-coral border-b-light-coral'),
                event.preventDefault())
            :$titleID.next('p').removeClass('placeholder-light-coral');
        });
        //receive user'input
        let image=$('#user-image').attr('src');
        let fullname = $('#full-name').val();
        let role = $('#role').val();
        let twitterLink = $('#twitter-link').val();
        let linkedInLink = $('#linkedin-link').val();

        ///assigning input values to their respective elements
        const $profilename = $('.profile-name').eq(0).text(fullname)
        console.log($profilename);
    })
    
});


// const file = $imageInput[0].files[0];
// const reader = new FileReader();

// reader.addEventListener('load', function() {
//   // set the src attribute of the img element to the data URL
//   $imagePreview.attr('src', reader.result);
// });

// if (file) {
//   // read the file as a data URL
//   reader.readAsDataURL(file);
// }
// })
// $('#addteam-modal').css('display', 'none');
//Eventlistener function to hide newTeamContainer
// const newteamContainer = (event)=>{
//     $newTeamContainer.css('display', 'none');
//     $('#teams-header').text('Meet the TeaM');
//     $('#teams-profile').css('display', 'grid');
//     $(event.currentTarget).addClass('hidden');
//     $('#add-btn').addClass('hidden');
//     $('#teams-container').css({
//         marginTop: '-4.7rem'
//     });
// };
// $('#cancel-btn').on('click', newteamContainer)