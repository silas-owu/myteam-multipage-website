
document.querySelector('#landing-section').innerHTML = `

  <div class="laptop:flex laptop:flex-col  laptop:mt-[3.875rem] laptop:mx-[10.3125rem] laptop:h-[46.125rem]   mobile:flex mobile:flex-col mobile:mx-4 tablet:w-[43.0625rem] tablet:flex tablet:flex-col  tablet:gap-[9.75rem]">
    <div class=" laptop:grid laptop:grid-rows-[3rem_13.125rem] laptop:gap-y-[8.75rem] tablet:grid tablet:grid-rows-[3rem_13.75rem] tablet:gap-y-[7rem] mobile:h-[20.44rem] mobile:w-[20.44rem] mobile:mx-1 mobile:pr-[0.5rem]  mobile:mt-[3rem] mobile:grid mobile:grid-rows-[5rem_13.125rem] mobile:gap-y-[2.1rem] ">
      <nav class="flex flex-row nav-mobile tablet:items-center">
        <div class="logosize-mobile">
            <img src='../assets/logo.svg'/>
        </div>
        <div class="flex laptop:my-1  laptop:pl-[3rem]  tablet:pl-[3rem] gap-[3rem] mobile:hidden">
          <h3 class="cursor-pointer hover:text-light-coral font-livvic font-semibold la text-[#fff] text-[1.125rem] leading-[1.75rem]">home</h3>
          <a href="aboutpage.html"><h3 class="cursor-pointer hover:text-light-coral font-livvic font-semibold text-[#fff] text-[1.125rem] leading-[1.75rem]">about</h3></a>
        </div>
        <button class="cursor-pointer hover:bg-[#fff] hover:text-dark-green  laptop:ml-[40rem]  tablet:ml-[10.77rem] border-solid border-[#fff] border-2 rounded-3xl font-livvic font-semibold w-[9.5625rem] h-[3rem] text-[#fff] mobile:hidden">contact us</button>
        <div id="menu-btn" class="cursor-pointer mobile:w-[1.25rem] mobile:h-[1.0625rem] mobile:mt-1 tablet:hidden laptop:hidden">
          <img src='../assets/menu-white.svg'/>
        </div>
      </nav>
      <div class="laptop:grid laptop:grid-cols-[39.6875rem_27.8125rem]  tablet:flex tablet:mx-auto tablet:flex-col tablet:gap-[1.5rem] mobile:flex mobile:flex-col mobile:gap-[1rem]">
        <h1 class="laptop:text-[6.25rem] laptop:leading-[6.25rem] laptop:text-left tablet:text-[4rem] tablet:leading-[3.5rem] font-livvic font-bold text-[2.5rem] text-[#fff] leading-[2.5rem] text-center">
          Find the <br> best <span class="text-light-coral">talent</span>
        </h1>
        <div class="laptop:flex laptop:flex-col laptop:items-start laptop:justify-between tablet:w-[28.5625rem] tablet:h-[5.25rem] laptop:text-left ">
          <div class="laptop:w-[3.125rem] laptop:h-1 laptop:bg-[#79C8C7] tablet:hidden mobile:hidden" ></div>
          <p class="laptop:text-[1.125rem] laptop:text-left font-livvic font-semibold text-[#fff] text-[0.9375rem] leading-[1.75rem] text-center mobile:w-[21.5rem]">
            Finding the right people and building high performing teams can be hard.
            Most companies aren’t tapping into the abundance of global talent. 
            We’re about to change that.
          </p> 
        </div>
      </div>
    </div>
    <div class="laptop:self-end laptop:mt-[9rem] tablet:mx-auto  mobile:self-center  mobile:mt-[4rem] mobile:w-[22.375rem] mobile:h-[12.5rem]">
      <img src='../assets/bg-home-pattern.svg'/>
    </div>
    <div class="laptop:absolute laptop:left-[-6.5rem] laptop:top-[16rem] tablet:hidden mobile:hidden">
      <img src='../assets/bg-pattern-home-1.svg'/>
    </div>

  </div>

`

// setupCounter(document.querySelector('#counter'))
