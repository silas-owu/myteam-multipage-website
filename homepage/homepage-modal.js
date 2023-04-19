document.querySelector('#homepage-modal').innerHTML=`
    <div class="flex flex-row" >
      <div class="mobile:fixed mobile:inset-0 mobile:h-[43.6875rem] mobile:w-[15.9375rem] mobile:bg-police-blue mobile:ml-auto mobile:flex mobile:flex-col mobile:gap-4  mobile:border-dashed mobile:border-2 mobile:border-[#332b94]" >
          <div class="mobile:w-[11.3rem]  mobile:mt-4 border-solid border-2 border-[#344]">
              <div id="close-btn" class="mobile:w-[1.01625rem] mobile:h-[1.01625rem] mobile:ml-auto ">
                  <img src='../assets/icon-close.svg'/>
              </div>
              <h3 class=" hover:text-light-coral font-livvic font-semibold  text-[#fff] text-[1.125rem] leading-[1.75rem]">home</h3>
              <h3 class=" hover:text-light-coral font-livvic font-semibold text-[#fff] text-[1.125rem] leading-[1.75rem]">about</h3>
              <button class="mt-[2.25rem] hover:bg-[#fff] hover:text-dark-green  border-solid border-[#fff] border-2 rounded-3xl font-livvic font-semibold w-[9.5625rem] h-[3rem] text-[#fff]">contact us</button>
          </div>
          <div class="absolute right-8 w-[12.5rem] h-[12.5rem]">
            <img src='../public/assets/bg-pattern-about-1-mobile-nav-1.svg'/>
          </div>
      </div>
    </div> 
`;



/* <div class="mobile:flex mobile:justify-center mobile:items-center mobile:w-[17rem] mobile:h-[20rem]">
    <div class="mobile:bg-police-blue mobile:border-dashed mobile:border-2 mobile:border-[#332b94] mobile:rounded-lg">
        <div id="modal-options" class="mobile:w-[15rem] mobile:h- mobile:pt-4 mobile:pl-4 mobile:pr-2 mobile:pb-2 mobile:gap-4 border-solid border-2 border-[#344]">
            <div id="close-btn" class="mobile:w-[1.01625rem] mobile:h-[1.01625rem] mobile:ml-auto ">
                <img src='../assets/icon-close.svg'/>
            </div>
            <h3 class="hover:text-light-coral font-livvic font-semibold text-[#fff] text-[1.125rem] leading-[1.75rem]">home</h3>
            <h3 class="hover:text-light-coral font-livvic font-semibold text-[#fff] text-[1.125rem] leading-[1.75rem]">about</h3>
            <button class="mt-[2.25rem] hover:bg-[#fff] hover:text-dark-green border-solid border-[#fff] border-2 rounded-3xl font-livvic font-semibold w-[9.5625rem] h-[3rem] text-[#fff]">contact us</button>
        </div>
    </div>
</div> */


