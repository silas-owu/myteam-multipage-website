document.querySelector('#landing-page').innerHTML=`

    <div class=" mobile:flex mobile:flex-col  overflow-hidden">
        <img class="mobile:hidden relative laptop:top-[14.3rem] left-[-8rem]  tablet:top-[11rem]" src='../assets/bg-pattern-about-2-contact-1.svg'/>
        <div class="laptop:flex laptop:flex-col laptop:gap-y-[7.5rem]  laptop:mx-[10.3125rem]  laptop:mt-[-10rem] tablet:mt-[-12.5rem] mobile:w-[20.4375rem] mobile:flex mobile:flex-col mobile:mx-12 mobile:gap-y-[5.1875rem] mobile:h-[65rem]   mobile:mt-[3rem] tablet:flex tablet:flex-col tablet:gap-y-28">
            <nav class="flex flex-row nav-mobile tablet:items-center tablet:w-[43.0625rem] tablet:mx-10 ">
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
            <div class="laptop:flex laptop:flex-row laptop:justify-between tablet:flex tablet:flex-col tablet:w-[33.875rem] tablet:mx-[7.0625rem]  tablet:gap-y-16 mobile:flex mobile:flex-col mobile:gap-y-10 ">
                <div class="laptop:flex laptop:flex-col laptop:gap-y-10 tablet:gap-y-5 font-livvic flex flex-col mobile:gap-y-4">
                    <h1 class="laptop:text-left tablet:text-[4rem] text-[2.5rem] leading-[2.5rem] text-center text-[#fff] font-bold">Contact</h1>
                    <h1 class="laptop:text-left text-light-coral tablet:text-[2rem] tablet:leading-[3rem] text-[2.5rem] leading-[2.5rem] text-center font-bold">Ask us about</h1>
                    <div class="gap-y-6 flex flex-col mobile:gap-y-8 mobile:mt-8 text-[#fff]">
                        <div class="contact-avatar mobile:flex mobile:flex-row mobile:gap-4">
                            <img src ='../assets/icon-person.svg'/>
                            <p class="font-bold text-[1.125rem] leading-[1.75rem]">The quality of our talent network</p>
                        </div>
                        <div class="contact-avatar mobile:flex mobile:flex-row mobile:gap-4">
                            <img src ='../assets/icon-cog.svg'/>
                            <p class="font-bold text-[1.125rem] leading-[1.75rem] ">Usage & Implementation of our software</p>
                        </div>
                        <div class="contact-avatar mobile:flex mobile:flex-row mobile:gap-4">
                            <img src ='../assets/icon-chart.svg'/>
                            <p class="font-bold text-[1.125rem] leading-[1.75rem]">How we help drive innovation</p>
                        </div>                       
                    </div>
                </div>
                <form action="https://formsubmit.co/84e30eee1810ac99fe1f6c25d53ba07e" method="POST" class="laptop:w-[33.875rem] laptop:gap-y-6 tablet:h-[26.25rem] font-livvic font-semibold text-[#fff] text-opacity-60 flex flex-col  tablet:gap-y-10 mobile:gap-y-4 mobile:h-[26.25rem] ">
                    <input type="text" id="name" name="name" placeholder="Name"required  class=" h-[2.625rem] bg-[#000] bg-opacity-10 p-4 focus:outline-none">
                    <input type="email" id="email" name="email" placeholder="Email Address"required  class=" h-[2.625rem] bg-[#000] border-[#fff] p-4 bg-opacity-10 focus:outline-none">
                    <input type="text" id="company-name" name="company-name" placeholder="Company Name" required  class=" h-[2.625rem] bg-[#000] bg-opacity-10 border-[#fff] p-4 focus:outline-none">
                    <input type="text" id="title" name="name" placeholder="Title" class="h-[2.625rem] bg-[#000] bg-opacity-10 border-[#fff] p-4 focus:outline-none">
                    <textarea type="text" id="message" name="message" placeholder="Message" rows=4 class="bg-[#000] bg-opacity-10 p-4 focus:outline-none"></textarea>
                    <button class="h-[3rem] w-[6.875rem] bg-[#FFF] rounded-[1.5rem] font-semibold text-[1.125rem] mobile:mt-8 leading-[1.75rem] text-deep-jungle-green border-[0.125rem] border-solid border-[#fff]" type="submit">submit</button>
                </form>
            </div>  
        </div>
        <img class="w-[14.0625rem] h-[12.5rem]  bottom-[2.3rem] left-[7rem] relative laptop:bottom-[3.9rem] laptop:left-[8rem] laptop:ml-auto tablet:ml-auto tablet:right-[-7rem] tablet:bottom-9" src='../assets/bg-pattern-contact-2.svg'/>
    </div>
`;