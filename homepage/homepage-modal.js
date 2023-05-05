document.querySelector('#homepage-modal').innerHTML=`
    <div class="mobile:fixed mobile:w-full mobile:h-full mobile:bg-[#000]/60">
        <div class="mobile:px-12 mobile:fixed mobile:inset-0 mobile:w-[15.9375rem] mobile:bg-police-blue mobile:ml-auto mobile:flex mobile:flex-col mobile:gap-[15rem]  mobile:border-dashed mobile:border-2 mobile:border-[#332b94]" >
            <div class="mobile:gap-y-[2.375rem] mobile:w-[11.3rem] mobile: mobile:flex mobile:flex-col   mobile:mt-[3.523125rem]  mobile:h-[17rem]">
                <div id="close-btn" class="mobile:w-[1.01625rem] mobile:h-[1.01625rem] mobile:ml-auto ">
                    <img src='../assets/icon-close.svg'/>
                </div>
                <div class="mobile:flex mobile:flex-col mobile:gap-y-8">
                    <a href="../index.html"><h3 class="cursor-pointer hover:text-light-coral font-livvic font-semibold  text-[#fff] text-[1.125rem] leading-[1.75rem]">home</h3></a>
                    <a href="../aboutpage.html"><h3 class="cursor-pointer hover:text-light-coral font-livvic font-semibold text-[#fff] text-[1.125rem] leading-[1.75rem]">about</h3></a>
                </div>
                <a href="../contact.html"><button class="cursor-pointer mt-[2.25rem] hover:bg-[#fff] hover:text-dark-green  border-solid border-[#fff] border-2 rounded-3xl font-livvic font-semibold w-[9.5625rem] h-[3rem] text-[#fff]">contact us</button></a>
            </div>
            <div class="mobile:mt-[-10.5rem]  mobile:mr-[-10rem] mobile:w-[12.5rem] mobile:h-[12.5rem] mobile:self-end ">
                <img src='../assets/bg-pattern-about-1-mobile-nav-1.svg'/>
            </div>
        </div>
    </div>
    
`;





