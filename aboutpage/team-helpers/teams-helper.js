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


  /*   $('#update-btn').on('click',()=>{
        const $username = $('.profile-name').text()
        $('#update-modal').css('display', 'block');
        $('#user-name').text($username)
    })
 */
    const $updateBtnAll = $('.update-btn');
    const $updateModal = $('#update-modal');
    const $image = $('#update-image');  
    const $role = $('#role');
    const $experienceInput = $('#experience-input');
    const $twitterUpdate = $('#twitter-update');
    const $linkedinUpdate = $('#linkedin-update');

    $updateBtnAll.each(()=>{
        const button = $(this);

        button.on('click',function(){
            const $updateImage = button.closet('.profile-image').attr('src');
            const $updateName = button.find('.profile-name').text();
            const $updateRole = button.find('.profile-role').text();
            const $updateTwitter = button.find('.twitter-update').attr('href')
            const $updateLinkedIn = button.find('.linkedIn-update').attr('href')

            $('#update-image').attr('src',$updateImage);
            $('#user-name').val($updateName)
            $('#role-name').val($updateRole)

            $('#update-modal').hide();
        })
    })

    $('#exit').on('click',()=>{
        $('#update-modal').css('display', 'none');
    })

        let currentIndex = 0;
    //Save button to receive user's input and append to
    // teams-profile content by click
    $('#save-btn').on('click',(event)=>{
        //receive user'input
        let image=$('#user-image').attr('src');
        let fullname = $('#full-name').val();
        let role = $('#role').val();
        let twitterLink = $('.twitter-link').val();
        let linkedInLink = $('.linkedin-link').val();
        
        ///assigning input values to their respective elements
        $('.profile-image').eq(currentIndex).attr('src', image)
        $('.profile-name').eq(currentIndex).text(fullname)
        $('.profile-role').eq(currentIndex).text(role);
        $('a.twitter-link').eq(currentIndex).attr('href',twitterLink);
        $('a.linkedIn-link').eq(currentIndex).attr( 'href',linkedInLink);
        currentIndex++;
        // console.log($profilename);
            // console.log(linkedInLink);
        $('#addteam-modal').css('display', 'none');
    })
    
});

