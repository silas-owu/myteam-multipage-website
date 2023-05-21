
// $(function() {
//     // saveBtn.disabled = true;
//     //edit function to show modal
//    /*  $('#edit-btn').on('click', ()=>{
//         $('#addteam-modal').css('display', 'block');
//         $('#teams-header').text('Add your team')
//     }) */

//     //addteam-modal close
//     $('#close').on('click',()=>{
//         $('#addteam-modal').css('display','none');
//         $('#teams-header').text('Meet the Team')
//     })
    
//     //Accepting user's image 
//     $('#image-input').on('change',()=>{
//         const imageFile = $('#image-input').prop('files')[0];
//         const reader = new FileReader();

//         reader.addEventListener('load', () => {
//             $('#user-image').attr('src', reader.result);
//           });

//         if(imageFile){
//             reader.readAsDataURL(imageFile);
//         }
//     })

//     $('.update-btn').on('click', (event)=>{
//         const $updateBtnClicked = $(event.currentTarget)
//         // console.log($updateBtnClicked.prev().closest('.profile').find('.profile-image').attr('src'));
//         const updateImage = $updateBtnClicked.prev().closest('.profile').find('.profile-image').attr('src');
//         const updateName = $updateBtnClicked.prev().closest('.profile').find('.profile-name').text();
//         const updateRole = $updateBtnClicked.prev().closest('.profile').find('p').text();
//         const $updateTwitter = $updateBtnClicked.prev().closest('.profile').find('.twitter-update').attr('href');
//         const $updateLinkedIn = $updateBtnClicked.prev().closest('.profile').find('.linkedin-update').attr('href');
        
//         // console.log(updateName);
        
//         $('#update-image').attr('src', updateImage);
//         $('#user-name').val(updateName).prop('readonly', true)
//         $('#role-name').val(updateRole).prop('readonly', true)

//         $('#update-modal').css('display', 'block');

//     });
       

//     $('#exit').on('click',()=>{
//         $('#update-modal').css('display', 'none');
//     })

//     //Save button to receive user's input and append to
//     //teams-profile content by click
//     //Addteammodal Form validation
//     const $saveBtn = $('#save-btn');
//     const $fullname = $('#full-name');
//     const $role = $('#role');
//     const $image = $('#user-image');

//     const addteamModalValidation = ()=>{
//         const imageInput = $image.attr('src');
//         const fullnameInput = $fullname.val();
//         const roleInput = $role.val();

//         if( fullnameInput === '' || roleInput === ''  || imageInput === ''){
//             $saveBtn.prop('disabled', true);
//         }else{
//             $saveBtn.prop('disabled', false);

//             let currentIndex = 0;
//             $('#save-btn').on('click',()=>{
                
//                 let image=$('#user-image').attr('src');
//                 let $fullname = $('#full-name').val();
//                 let $role = $('#role').val();
//                 let twitterLink = $('#twitter-link').val();
//                 let linkedInLink = $('#linkedin-link').val();
                
//                 ///assigning input values to their respective elements
//                 $('.profile-image').eq(currentIndex).attr('src', image)
//                 $('.profile-name').eq(currentIndex).text($fullname)
//                 $('.profile-role').eq(currentIndex).text($role);
//                 $('.twitter-link').eq(currentIndex).attr('href',twitterLink);
//                 $('.linkedIn-link').eq(currentIndex).attr( 'href',linkedInLink);

//                 //emptying the addteam modal form 
//                 image = '';
//                 $fullname = '';
//                 $role = '';
//                 twitterLink = '';
//                 linkedInLink = '';
//                 currentIndex++;
//                 // console.log(linkedInLink);
//                 // console.log($profilename);
//                 $('#addteam-modal').css('display', 'none');
//             })
//         }
//     }

//     $fullname.on('input', addteamModalValidation);
//     $role.on('input', addteamModalValidation);
//     $image.on('input', addteamModalValidation);

    
    
// });

document.addEventListener('DOMContentLoaded', ()=>{
    
    ///EventHandlers for AddteamModal and its functionality
    //edit eventlistener to show addteamModal
    const addteamModal = document.getElementById('addteam-modal');
    const teamsHeader = document.getElementById('teams-header');
    document.getElementById('edit-btn').addEventListener('click',()=>{
        addteamModal.style.display = 'block';
        teamsHeader.textContent = 'Add your team';
    })

    //close event listener for addteamModal
    document.getElementById('close').addEventListener('click',()=>{
        addteamModal.style.display = 'none';
        teamsHeader.textContent = 'Meet the Team';
    })

    //Eventhandler's functionalities for addteamModal form
    //Reading input file from user's desktop
    const formImage = document.getElementById('image-input');
    imageInput.addEventListener('change',()=>{
        let imageFile = imageInput.files[0];
        const reader = new FileReader();
        const userImage = document.getElementById('user-image')
        
        reader.addEventListener('load',()=>{
            userImage.src = reader.result;
        })
        
        if(imageFile){
            reader.readAsDataURL(imageFile);
        }
    });
    
    //Form validation for addTeamModal
    const saveBtn = document.getElementById('save-btn');
    const userImage = document.getElementById('user-image')
    const fullName = document.getElementById('full-name');
    const role = document.getElementById('role');
    const experience = document.getElementById('experience');
    const twitterLink = document.getElementById('twitter-link');
    const linkedinLink = document.getElementById('linkedin-link');
    const teamsForm = document.getElementById('teams-form');

    const resetStyles = () => {
        for (let i = 0; i < teamsForm.children.length; i++) {
          teamsForm.children[i].style.borderBottomColor = '';
        }
        twitterLink.style.borderBottomColor = '';
        linkedinLink.style.borderBottomColor = '';
        userImage.style.border='2px solid #79c8c7'
        saveBtn.style.border = '';
        saveBtn.style.backgroundColor = '';
        saveBtn.style.color = '';
      };

    const errorResponse =()=>{
        for(let i = 0; i < teamsForm.children.length; i++){
            teamsForm.children[i].style.borderBottomColor = '#f67e7e';
        }

       twitterLink.style.borderBottomColor = '#F67E7E';
       linkedinLink.style.borderBottomColor = '#F67E7E';
       userImage.classList.add('border-2','border-light-coral')
       
       saveBtn.style.border = '1px solid #f67e7e';
       saveBtn.style.backgroundColor = 'rgba( 0, 0, 0, 0.05)';
       saveBtn.style.color = '#f67e7e';
    }
      
    
    const addteamModalValidation = ()=>{
         let imageInput = userImage.src;
         let fullNameInput = fullName.value;
         let roleInput = role.value;
         let xpInput = experience.value;
         let twitterInput = twitterLink.value;
         let linkedinInput = linkedinLink.value;
         const teamsForm = document.getElementById('teams-form');

         if( imageInput === '' || fullNameInput === '' || roleInput === ''){
            // saveBtn.onclick = null;
            saveBtn.disabled = true;
            errorResponse();
        } else{
            resetStyles();
            saveBtn.disabled = false;
        }
    }

    saveBtn.addEventListener( 'click', ()=>{
        addteamModalValidation();
        // console.log(saveBtn.disabled);
        if(!saveBtn.disabled){
            let currentIndex = 0;
            let imageInput = userImage.src;
            let fullNameInput = fullName.value;
            let roleInput = role.value;
            let xpInput = experience.value;
            let twitterInput = twitterLink.value;
            let linkedinInput = linkedinLink.value;
            document.querySelector('.profile-image')[currentIndex].setAttribute('src', imageInput);
            document.querySelector('.profile-name')[currentIndex].textContent(fullNameInput);
            document.querySelector('.profile-role')[currentIndex].textContent(roleInput);
            document.querySelector('.twitter-link')[currentIndex].setAttribute('href' ,twitterInput);
            document.querySelector('.twitter-link')[currentIndex].setAttribute('href' ,linkedinInput);

            currentIndex++;
            addteamModal.style.display = 'none';
        }
    })

    fullName.addEventListener('input', resetStyles);
    role.addEventListener('input', resetStyles);
    // // experience.addEventListener('input', addteamModalValidation)
    twitterLink.addEventListener('input', resetStyles);
    linkedinLink.addEventListener('input', resetStyles);
});


