document.querySelector("#about-page").innerHTML= `

    <div class="flex flex-col  overflow-hidden">
        <div class="border-2 border-dashed border-[#aea] laptop:mx-[10.3125rem] laptop:h-[20.25rem] laptop:w-[69.375rem] tablet:mt-[4rem] tablet:mx-[2.4375rem]  tablet:flex tablet:gap-y-[5rem] tablet:flex-col tablet:h-[23.75rem] tablet:w-[43.0625rem] mobile:w-[20.44rem] mobile:mx-12 mobile:flex mobile:flex-col mobile:mt-[3rem] mobile:gap-y-20">
            <nav class="flex flex-row nav-mobile tablet:items-center">
                <div class="logosize-mobile">
                    <img src='../assets/logo.svg'/>
                </div>
                <div class="flex laptop:my-1  laptop:pl-[3rem]  tablet:pl-[3rem] gap-[3rem] mobile:hidden">
                    <a href="../index.html"><h3 class="cursor-pointer hover:text-light-coral font-livvic font-semibold la text-[#fff] text-[1.125rem] leading-1.75rem">home</h3></a>
                    <a href="aboutpage.html"><h3 class="cursor-pointer hover:text-light-coral font-livvic font-semibold text-[#fff] text-[1.125rem] leading-[1.75rem]">about</h3></a>
                </div>
                <button class="cursor-pointer hover:bg-[#fff] hover:text-dark-green  laptop:ml-[40rem]  tablet:ml-[10.77rem] border-solid border-[#fff] border-2 rounded-3xl font-livvic font-semibold w-[9.5625rem] h-[3rem] text-[#fff] mobile:hidden">contact us</button>
                <div id="menu-btn" class="cursor-pointer mobile:w-[1.25rem] mobile:h-[1.0625rem] mobile:mt-1 tablet:hidden laptop:hidden">
                    <img src='../assets/menu-white.svg'/>
                </div>
            </nav>

            <div class="font-livvic text-[#fff] text-center tablet:flex tablet:flex-col tablet:h-[15rem] tablet:gap-y-[1.7rem] tablet:w-[28.5625rem] tablet:mx-auto mobile:flex mobile:flex-col mobile:gap-y-4">
                <h1 class=" font-bold text-[2.5rem] leading-[2.5rem]">About</h1>
                <p class="font-semibold leading-[1.75rem] tablet:h-[8.75rem] tablet:w-[27.5625rem] mobile:w-[20.4375rem]">
                    We help companies build dynamic teams made up of top global talent.
                    Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. 
                    We’ll bring those teams to you.
                </p>
            </div>
        </div>
        <img class="w-[12.5rem] h-[12.5rem] mobile:ml-[20.4rem]  tablet:ml-[42rem] tablet:mt-[-5.5rem] laptop:hidden" src='../public/assets/bg-pattern-about-1-mobile-nav-1.svg'/>
    </div>

`;