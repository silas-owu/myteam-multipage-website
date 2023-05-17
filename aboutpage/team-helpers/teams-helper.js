//Function to handle DOM manipulations
$(function() {
    // saveBtn.disabled = true;
    //edit function to show modal
    $('#edit-btn').on('click', ()=>{
        $('#addteam-modal').css('display', 'block');
        $('#teams-header').text('Add your team')
    })

    //addteam-modal close
    $('#close').on('click',()=>{
        $('#addteam-modal').css('display','none');
        $('#teams-header').text('Meet the Team')
    })
    
    //Accepting user's image 
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

    $('.update-btn').on('click', (event)=>{
        const $updateBtnClicked = $(event.currentTarget)
        const updateImage = $updateBtnClicked.closest('.profile').find('.profile-image').attr('src');
        const updateName = $updateBtnClicked.closest('.profile').find('.profile-name').text();
        const updateRole = $updateBtnClicked.closest('.profile').find('p').text();
        const $updateTwitter = $updateBtnClicked.closest('.profile').find('.twitter-update').attr('href');
        const $updateLinkedIn = $updateBtnClicked.closest('.profile').find('.linkedin-update').attr('href');
        
    
        console.log( updateName, updateRole);
        $('#update-image').attr('src', updateImage);
        $('#user-name').val(updateName).prop('readonly', true).addClass('text-[#d11]')
        $('#role-name').val(updateRole).addClass('text-[#d11]')

        $('#update-modal').css('display', 'block');

    });
       

    $('#exit').on('click',()=>{
        $('#update-modal').css('display', 'none');
    })

    //Save button to receive user's input and append to
    //teams-profile content by click
    //Addteammodal Form validation
    const $saveBtn = $('#save-btn');
    const $fullname = $('#full-name');
    const $role = $('#role');
    const $image = $('#user-image');

    const addteamModalValidation = ()=>{
        const $imageInput = $image.attr('src');
        const $fullnameInput = $fullname.val();
        const $roleInput = $role.val();

        if( $fullnameInput === '' || $roleInput === ''  || $imageInput === ''){
            $saveBtn.prop('disabled', true);
        }else{
            $saveBtn.prop('disabled', false);

            let currentIndex = 0;
            $('#save-btn').on('click',()=>{
                let image=$('#user-image').attr('src');
                let $fullname = $('#full-name').val();
                let $role = $('#role').val();
                let twitterLink = $('#twitter-link').val();
                let linkedInLink = $('#linkedin-link').val();
                
                ///assigning input values to their respective elements
                $('.profile-image').eq(currentIndex).attr('src', image)
                $('.profile-name').eq(currentIndex).text($fullname)
                $('.profile-role').eq(currentIndex).text($role);
                $('a.twitter-link').eq(currentIndex).attr('href',twitterLink);
                $('a.linkedIn-link').eq(currentIndex).attr( 'href',linkedInLink);
                currentIndex++;
                // console.log(linkedInLink);
                // console.log($profilename);
                $('#addteam-modal').css('display', 'none');
            })
        }
    }


    $fullname.on('input', addteamModalValidation);
    $role.on('input', addteamModalValidation);
    $image.on('input', addteamModalValidation);

    
    
});

