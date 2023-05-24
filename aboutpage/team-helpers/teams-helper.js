document.addEventListener('DOMContentLoaded', ()=>{
    // console.log(window.innerWidth)
         //Prevent eventlisteners from working
     //on tablet and mobile screens
      //Update profile Form/Profile preview event handlers
    const updateBtns = document.querySelectorAll('.update-btn')
    const updateBtnClickHandler=(event)=>{
        document.getElementById('update-modal').style.display = 'block';
        const updateBtnClick = event.currentTarget;
        
        const updateImage = updateBtnClick.previousElementSibling
            .closest('.profile')
            .querySelector('.profile-image')
            .getAttribute('src');

        const updateName = updateBtnClick.previousElementSibling
            .closest('.profile')
            .querySelector('.profile-name')
            .textContent;

        const updateRole = updateBtnClick.previousElementSibling
            .closest('.profile')
            .querySelector('.profile-role')
            .textContent;

        // const updateXp = updateBtnClick.previousElementSibling
        //     .closest('.profile')
        //     .querySelector('.experience-input')
        //     .textContent;

        const updateTwitter = updateBtnClick.previousElementSibling
            .closest('.profile')
            .querySelector('.twitter-link')
            .getAttribute('href');

        const updateLinkedIn = updateBtnClick.previousElementSibling
            .closest('.profile')
            .querySelector('.linkedIn-link')
            .getAttribute('href');
        
        document.getElementById('update-image').setAttribute('src', updateImage);
        document.getElementById('user-name').value = updateName;
        document.getElementById('user-name').readOnly = true;
        
        document.getElementById('role-name').value = updateRole;
        document.getElementById('role-name').readOnly = true;
        
        document.getElementById('update-tw-link').setAttribute('href', updateTwitter);
        document.getElementById('update-lin-link').setAttribute('href', updateLinkedIn);
        console.log(document.getElementById('update-lin-link'));
    }

     if( window.innerWidth <= 769){
        updateBtns.forEach(updateBtn =>{
            updateBtn.disabled = true;
            updateBtn.removeEventListener('click', updateBtnClickHandler);
         })
     }else{
        updateBtns.forEach(updateBtn =>{
            updateBtn.disabled = false;
            updateBtn.addEventListener('click', updateBtnClickHandler);
        })
    }




    
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
    const imageInput = document.getElementById('image-input');
    imageInput.addEventListener('change',()=>{
        let imageFile = imageInput.files[0];
        const reader = new FileReader();
        // const userImage = document.getElementById('user-image')
        
        reader.addEventListener('load',()=>{
            userImage.src = reader.result;
        })
        
        if(imageFile){
            reader.readAsDataURL(imageFile);
        }
    });
    
    //Form validation for addTeamModal
     //Form validation for addTeamModal
     //Note to self: Form Validation works fine but the saveBtn can't reassigned input val
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
        userImage.style.border ='2px solid #F67E7E';        
        saveBtn.style.border = '1px solid #f67e7e';
        saveBtn.style.backgroundColor = 'rgba( 0, 0, 0, 0.05)';
        saveBtn.style.color = '#f67e7e';
     }
       
 
     let currentIndex = 0;
     saveBtn.addEventListener( 'click', ()=>{
        //  addteamModalValidation();
        //  saveBtn.disabled = false;
        //  console.log(saveBtn.disabled);
        let imageInput = userImage.src;
        let fullNameInput = fullName.value;
        let roleInput = role.value;
        let xpInput = experience.value;
        let twitterInput = twitterLink.value;
        let linkedinInput = linkedinLink.value;

        if( imageInput === '' || fullNameInput === '' || roleInput === ''){
            errorResponse();
            saveBtn.disabled = true;
        } else{
            saveBtn.disabled = false;
            // console.log(saveBtn.disabled);
            resetStyles();
            document.querySelectorAll('.profile-image')[currentIndex].setAttribute('src', imageInput);
            document.querySelectorAll('.profile-name')[currentIndex].textContent = fullNameInput;
            document.querySelectorAll('.profile-role')[currentIndex].textContent = roleInput;
            document.getElementByAll('experience-input').textContent = xpInput
            document.querySelectorAll('.twitter-link')[currentIndex].setAttribute('href' ,twitterInput);
            document.querySelectorAll('.twitter-link')[currentIndex].setAttribute('href' ,linkedinInput);
            currentIndex++;
            addteamModal.style.display = 'none';

            // Clear the input fields
            userImage.src = '';
            fullName.value = '';
            role.value = '';
            experience.value = '';
            twitterLink.value = '';
            linkedinLink.value = ''; 
        }
     })
 
     fullName.addEventListener('input', resetStyles);
     role.addEventListener('input', resetStyles);
     // // experience.addEventListener('input', addteamModalValidation)
     twitterLink.addEventListener('input', resetStyles);
     linkedinLink.addEventListener('input',resetStyles); 
     
     let twitterInput = twitterLink.value;
     let linkedinInput = linkedinLink.value;
     const urlRegex = /^(http|https):\/\/[^ "]+$/;
     twitterLink.addEventListener('input', function() {     
         twitterInput.trim();   
        if (!urlRegex.test(twitterInput)){
          alert('Invalid LinkedIn URL');
          return;
        }
      });
      
     linkedinLink.addEventListener('input', function() {
        linkedinInput.trim();        
        if (!urlRegex.test(linkedinInput)) {
          alert('Invalid LinkedIn URL');
          return;
        }
      });

     ///////////////////////////////////////////////////
    document.getElementById('exit').addEventListener('click',()=>{
        document.getElementById('update-modal').style.display = 'none';
    })
});


