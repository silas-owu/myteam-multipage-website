document.querySelector('#update-modal').innerHTML = `
    <div class="bg-dark-green bg-opacity-80 h-full pt-[4rem]">
        <div id="exit" class="w-[1.5rem] relative ml-[84rem] mt-8">
            <svg class="stroke-[#fff] hover:stroke-light-coral"  xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
        <div class="w-[55rem] h-[39rem] mx-auto grid grid-cols-2">
            <div class="w-[30rem]">
                <img class="w-[30rem] h-[39rem]" id="update-image" />
            </div>
            <div class=" laptop:flex laptop:flex-col laptop:gap-y-[6.5rem] px-4 pt-[10rem] bg-midnight-green">
                <div class="laptop:flex laptop:flex-col laptop:h-[25rem]  children:bg-midnight-green  laptop:gap-y-1">
                    <input class="pl-1 font-livvic font-bold focus:outline-none h-[3rem] text-[3rem]  text-onahau" placeholder="" type="text" id="user-name"/>
                    <input class="p-1 focus:outline-none h-[2rem] text-[2rem] text-rapture-blue font-livvic font-semibold" type="text" placeholder="" id="role-name"/>
                    <p class="p-2 text-rapture-blue focus:outline-none   h-[8.5rem] text-[1.3rem] leading-1  font-livvic font-semibold" id="experience-input" >
                        3 years in Content strategy and appreciate what developers do
                    </p> 
                    <div class="flex flex-row mx-4 -mt-4 gap-4 bg-none">
                        <a target="_blank" class="update-tw-link hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                                <path fill="#FFF" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"/>
                            </svg>
                        </a>
                        <a target="_blank" class="update-lin-link hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                <path fill="#FFF" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;