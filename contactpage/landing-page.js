document.querySelector('#landing-page').innerHTML=`

    <div class=" mobile:flex mobile:flex-col">
        <div class="mobile:w-[20.4375rem] mobile:flex mobile:flex-col mobile:gap-y-[5.1875rem] mobile:h-[65rem] mobile:mx-6  mobile:mt-[3rem]">
            <nav class="flex flex-row nav-mobile tablet:items-center">
                <div class="logosize-mobile">
                    <img src='../assets/logo.svg'/>
                </div>
                <div class="flex laptop:my-1  laptop:pl-[3rem]  tablet:pl-[3rem] gap-[3rem] mobile:hidden">
                    <a href="../index.html"><h3 class="cursor-pointer hover:text-light-coral font-livvic font-semibold la text-[#fff] text-[1.125rem] leading-[1.75rem]">home</h3></a>
                    <a href="../aboutpage.html"><h3 class="cursor-pointer hover:text-light-coral font-livvic font-semibold text-[#fff] text-[1.125rem] leading-[1.75rem]">about</h3></a>
                </div>
                <a href="#"><button class="cursor-pointer hover:bg-[#fff] hover:text-dark-green  laptop:ml-[40rem]  tablet:ml-[10.77rem] border-solid border-[#fff] border-2 rounded-3xl font-livvic font-semibold w-[9.5625rem] h-[3rem] text-[#fff] mobile:hidden">contact us</button></a>
                <div id="menu-btn" class="cursor-pointer mobile:w-[1.25rem] mobile:h-[1.0625rem] mobile:mt-1 tablet:hidden laptop:hidden">
                    <img src='../assets/menu-white.svg'/>
                </div>
            </nav>
            <div class="mobile:flex mobile:flex-col mobile:gap-y-10">
                <div class="font-livvic mobile:flex mobile:flex-col mobile:gap-y-4">
                    <h1 class=" text-[2.5rem] leading-[2.5rem] text-center text-[#fff] font-bold">Contact</h1>
                    <h1 class="text-light-coral text-[2.5rem] leading-[2.5rem] text-center font-bold">Ask us about</h1>
                    <div class=" mobile:flex mobile:flex-col mobile:gap-y-8 mobile:mt-8 text-[#fff]">
                        <div class="mobile:flex mobile:flex-row mobile:gap-4">
                            <img src ='../assets/icon-person.svg'/>
                            <p class="font-bold text-[1.125rem] leading-[1.75rem]">The quality of our talent network</p>
                        </div>
                        <div class="mobile:flex mobile:flex-row mobile:gap-4">
                            <img src ='../assets/icon-cog.svg'/>
                            <p class="font-bold text-[1.125rem] leading-[1.75rem]">The quality of our talent network</p>
                        </div>
                        <div class="mobile:flex mobile:flex-row mobile:gap-4">
                            <img src ='../assets/icon-chart.svg'/>
                            <p class="font-bold text-[1.125rem] leading-[1.75rem]">The quality of our talent network</p>
                        </div>                       
                    </div>
                </div>
                <form method="POST" class="font-livvic font-semibold text-[#fff] text-opacity-60 mobile:flex mobile:flex-col  mobile:gap-y-6 mobile:h-[26.25rem] border-2 border-dashed border-[#4aa]">
                    <input type="text" id="name" name="name" placeholder="Name" class=" h-[2.625rem] bg-transparent border-[#fff]">
                    <input type="email" id="email" name="email" placeholder="Email Address" class=" h-[2.625rem] bg-transparent border-[#fff]">
                    <input type="text" id="company-name" name="company-name" placeholder="Company Name" class=" h-[2.625rem] bg-transparent border-[#fff]">
                    <input type="text" id="name" name="name" placeholder="Title" class=" h-[2.625rem] bg-transparent border-[#fff]">
                    <textarea type="text" name="message" placeholder="Message" rows=4></textarea>
                    <button class="h-[3rem] w-[6.875rem] bg-[#FFF] rounded-[1.5rem] font-semibold text-[1.125rem] leading-[1.75rem] text-deep-jungle-green border-[0.125rem] border-solid border-[#fff]" type="submit">submit</button>
    
                </form>
            </div>  
        </div>
        <img class="mobile:hidden" src='../public/assets/bg-pattern-contact-2.svg'/>
    </div>
`;