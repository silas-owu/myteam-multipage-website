document.querySelector('#update-modal').innerHTML = `
    <div class="bg-dark-green bg-opacity-80 h-full pt-[4rem]">
        <div id="exit" class="w-[1.5rem] relative ml-[84rem] mt-8">
            <svg class="stroke-[#fff] hover:stroke-light-coral"  xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
        <div class="w-[55rem] h-[39rem] mx-auto grid grid-cols-2  bg-rapture-blue  children:border-2">
            <div>
                <img id="update-image" />
            </div>
            <div class=" laptop:flex laptop:flex-col laptop:gap-y-[6.5rem] px-4 bg-midnight-green">
                <svg  class="hover:stroke-light-coral stroke-[#fff] w-6 h-6 self-end mt-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                <div class="laptop:flex laptop:flex-col  children:bg-midnight-green gap-y-2 children:border-2 children:border-dashed">
                    <input class="p-2 focus:outline-none h-[6rem] text-[3rem] text-rapture-blue" placeholder="" type="text" id="user-name"/>
                    <input class="p-2 focus:outline-none h-[2.5rem] text-[2.5rem] text-rapture-blue" type="text" placeholder="" id="role-name"/>
                    <textarea class="p-2 focus:outline-none h-[4rem] text-[1.5rem] leading-2 text-dark-green"  type="text" placeholder="" id="experience-input" rows="5" cols="2" ></textarea> 
                    <input class="p-2 focus:outline-none h-[2.5rem] text-[1.5rem] leading-2 text-dark-green" type="text" placeholder="" id="twitter-update"/>
                    <input class="p-2 focus:outline-none h-[2.5rem] text-[1.5rem] leading-2 text-dark-green" type="text" placeholder="" id="linkedIn-update"/>
                    <button class="border-[#fff]  font-bold font-livvic border-2 border-solid text-sacramento rounded-full w-[5rem] mx-auto text-[1rem]">update</button>
                </div>
            </div>
        </div>
    </div>
`;