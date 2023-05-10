document.querySelector('#teams-section').innerHTML=`

    <div class="laptop:flex laptop:flex-col tablet:overflow-hidden  tablet:flex tablet:flex-col mobile:flex mobile:flex-col mobile:overflow-hidden ">
        <div class=" laptop:relative laptop:left-[-8rem] tablet:-ml-[6.5rem] tablet:mr-auto mobile:-mt-[6.8rem] mobile:-ml-[6.5rem] ">
            <img src='../public/assets/bg-pattern-about-2-contact-1.svg'/>
        </div>
        <div id="edit-btn"  class=" w-[1.5rem]   relative ml-[84rem] mt-2">
            <svg  class="hover:stroke-light-coral stroke-[#fff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
        </div>
        <div id="cancel-btn" class="w-[1.5rem] relative ml-[84rem] mt-8">
            <svg class="stroke-[#fff] hover:stroke-light-coral"  xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
        <div id="add-btn" class="w-6 h-6 relative ml-[84rem] mt-8 avatarplus hover:rapture-blue hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-6 fill-[#fff]">
                <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
            </svg>
        </div>

        <div id="teams-container"  class="border-2 border-dashed border-[#ea5] laptop:mx-[10.3125rem] laptop:mt-[-11.8rem] tablet:mx-[6.125rem] laptop:flex laptop:flex-col laptop:gap-y-12 tablet:flex tablet:flex-col tablet:gap-y-10 tablet:mt-[-6rem] tablet:w-[35.8125rem] tablet:h-[68.6875rem] mobile:h-[117.875rem] mobile:mx-6  mobile:flex mobile:flex-col mobile:gap-y-4 ">
            <h2  id="teams-header"  class="font-livvic text-[#fff] text-[2rem] font-bold text-center mt-[-0.5rem]">Meet the TeaM</h2>
            <div id="teams-profile"  class="laptop:gap-8 laptop:w-[69.375rem] laptop:h-[38rem] laptop:grid laptop:grid-cols-3 tablet:grid tablet:grid-cols-2 tablet:h-[58.6875rem] tablet:gap-x-4 tablet:gap-y-2 mobile:flex mobile:flex-col mobile:gap-y-[1.68rem] chldren:w-[20.4375rem] children:h-[17.5625rem] ">
                <div>
                    <div class="bg-sacramento font-livvic h-[15.8125rem] flex flex-col mobile:teamscontainer ">
                        <img class="avatar" src='../assets/avatar-nikita.jpg'/>
                        <div class="text-center  mobile:mt-4">
                            <h3 class=" text-rapture-blue avatarText ">Nikita Marks</h3>
                            <p class="font-italic text-[#fff]">Founder & CEO</p>
                        </div>
                    </div>
                    <div class="avatarplus hover:rapture-blue hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#012F34" fill-rule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"/>
                        </svg>
                    </div>
                </div>

                <div>
                    <div class="bg-sacramento h-[15.8125rem] flex flex-col font-livvic mobile:teamscontainer ">
                        <img class="avatar" src='../assets/avatar-christian.jpg'/>
                        <div class="text-center  mobile:mt-4">
                            <h3 class=" text-rapture-blue avatarText ">Cristian Duncan</h3>
                            <p class="font-italic text-[#fff]">Co-founder & COO</p>
                        </div>
                    </div>
                    <div class="avatarplus  hover:fill-rapture-blue hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#012F34" fill-rule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"/>
                        </svg>
                    </div>
                </div>

                <div>
                    <div class="bg-sacramento font-livvic flex flex-col h-[15.8125rem] mobile:teamscontainer ">
                        <img class="avatar" src='../assets/avatar-cruz.jpg'/>
                        <div class="text-center  mobile:mt-4">
                            <h3 class=" text-rapture-blue avatarText ">Cruz Hamer</h3>
                            <p class="font-italic text-[#fff]">Co-founder & CTO</p>
                        </div>
                    </div>
                    <div class="avatarplus  hover:fill-rapture-blue hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#012F34" fill-rule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"/>
                        </svg>
                    </div>
                </div>

                <div>
                    <div class="bg-sacramento font-livvic flex flex-col h-[15.8125rem] mobile:teamscontainer ">
                        <img class="avatar" src='../assets/avatar-drake.jpg'/>
                        <div class="text-center  mobile:mt-4">
                            <h3 class=" text-rapture-blue avatarText ">Drake Heaton</h3>
                            <p class="font-italic text-[#fff]">Business Developement Lead</p>
                        </div>
                    </div>
                    <div class="avatarplus  hover:fill-rapture-blue hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#012F34" fill-rule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"/>
                        </svg>
                    </div>
                </div>

                
                <div class="mobile:hidden laptop:hidden">
                    <div class="bg-sacramento font-livvic flex flex-col h-[15.8125rem] mobile:teamscontainer ">
                        <div class="text-center  mt-8">
                            <h3 class=" text-rapture-blue avatarText ">Griffin Wise</h3>
                            <p class="font-italic text-[#fff] w-[14.625rem] mx-auto text-[1rem] font-semibold leading-6">
                                “Unique perspectives shape unique products, 
                                 which is what you need to survive these days.”
                            </p>
                        </div>
                        <div class=" flex flex-row mx-auto mt-4 gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                                <path fill="#FFF" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                <path fill="#FFF" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="avatarplus bg-rapture-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17">
                            <path fill="##012f34" fill-rule="evenodd" d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"/>
                        </svg>
                    </div>
                </div>

                
                <div class="tablet:hidden">
                    <div class="bg-sacramento font-livvic  flex flex-col h-[15.8125rem] mobile:teamscontainer ">
                        <img class="avatar" src='../assets/avatar-griffin.jpg'/>
                        <div class="text-center  mobile:mt-4">
                            <h3 class=" text-rapture-blue avatarText ">Griffin Wise</h3>
                            <p class="font-italic text-[#fff]">Lead Marketing</p>
                        </div>
                    </div>
                    <div class="avatarplus  hover:fill-rapture-blue hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#012F34" fill-rule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"/>
                        </svg>
                    </div>
                </div>

                <div class="mobile:hidden laptop:hidden">
                    <div class="bg-sacramento font-livvic  flex flex-col h-[15.8125rem] mobile:teamscontainer ">
                        <img class="avatar" src='../public/assets/avatar-aden.jpg'/>
                        <div class="text-center  mobile:mt-4">
                            <h3 class=" text-rapture-blue avatarText ">Aden Allen</h3>
                            <p class="font-italic text-[#fff]">Head of Talent</p>
                        </div>
                    </div>
                    <div class="avatarplus hover:bg-rapture-blue hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#012F34" fill-rule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"/>
                        </svg>
                    </div>
                </div>

                <div class="tablet:hidden laptop:flex laptop:flex-col">
                    <div class="bg-sacramento font-livvic flex flex-col h-[15.8125rem] laptop:gap-y-4 mobile:teamscontainer ">
                        <div class="text-center  mobile:mt-8 laptop:flex laptop:flex-col laptop:gap-y-3 laptop:mt-6">
                            <h3 class=" text-rapture-blue avatarText ">Aden Allan</h3>
                            <p class="font-italic text-[#fff] w-[14.625rem] mx-auto text-[1rem] font-semibold leading-6">
                                “Empowered teams create truly amazing products.
                                Set the north star and let them follow it.”
                            </p>
                        </div>
                        <div class="mobile:flex mobile:flex-row mx-auto mobile:mt-4 mobile:gap-4 laptop:flex laptop:flex-row laptop:gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                                <path fill="#FFF" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                <path fill="#FFF" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="avatarplus bg-rapture-blue hover:fill-light-coral hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17">
                            <path fill="##012f34" fill-rule="evenodd" d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <div class="laptop:relative laptop:bottom-[-3rem] laptop:ml-auto tablet:ml-[39rem] mobile:ml-auto">
            <img src='../public/assets/bg-pattern-home-4-about-3.svg'/>
        </div>
    </div>
`;
        
