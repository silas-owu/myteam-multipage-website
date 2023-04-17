
document.querySelector('#landing-section').innerHTML = `

  <div class="laptop:mt-[3.875rem] laptop:mx-[10.3125rem] h-[46.125rem]  border-dashed border-[#edd] border-2 children:border-dashed children:border-[#4dd] children:border-2 mobile:flex mobile:flex-col px-1 tablet:w-[43.0625rem] tablet:flex tablet:flex-col tablet:gap-[9.75rem]">
    <div class=" grid grid-rows-[3rem_12.5rem] gap-y-[8.75rem] tablet:grid tablet:grid-rows-[3rem_13.75rem] tablet:gap-y-[7rem] mobile:h-[20.44rem] mobile:w-[20.13rem] mobile:mx-auto mobile:mt-[3rem] mobile:grid mobile:grid-rows-[5rem_13.125rem] mobile:gap-y-[2.1rem] ">
      <nav class="flex flex-row tablet:items-center mobile:justify-between">
        <div class="mobile:h-[2rem] mobile:w-[8rem]">
            <img src='../assets/logo.svg'/>
        </div>
        <div class="flex pl-[3rem] gap-[3rem] mobile:hidden">
          <h3 class="font-livvic font-semibold items text-[#fff] text-[1.125rem] leading-[1.75rem]">home</h3>
          <h3 class="font-livvic font-semibold text-[#fff] text-[1.125rem] leading-[1.75rem]">about</h3>
        </div>
        <button class=" ml-[10.3rem] border-solid border-[#fff] border-2 rounded-3xl font-livvic font-semibold w-[9.5625rem] h-[3rem] text-[#fff] mobile:hidden">contact us</button>
        <div class="mobile:w-[1.25rem] mobile:h-[1.0625rem] mobile:mt-1 tablet:hidden hidden">
          <img src='../assets/menu-white.svg'/>
        </div>
      </nav>
      <div class="laptop:grid laptop:grid-cols-[39.6875rem_27.8125rem]  tablet:flex tablet:mx-auto tablet:flex-col tablet:gap-[2rem] mobile:flex mobile:flex-col mobile:gap-[1rem]">
        <h1 class="laptop:text-[6.25rem] laptop:leading-[6.25rem] laptop:text-left tablet:text-[4rem] tablet:leading-[3.5rem] font-livvic font-bold text-[2.5rem] text-[#fff] leading-[2.5rem] text-center">
          Find the <br> best <span class="text-light-coral">talent</span>
        </h1>
        <div class="border-dashed border-2 border-[#fff] tablet:w-[28.5625rem] tablet:h-[5.25rem] laptop:text-left ">
          <div class="laptop:w-[3.125rem] h-1" laptop:bg-[#79C8C7] tablet:hidden mobile:hidden"></div>
          <p class="laptop:text-[1.125rem] laptop:text-left font-livvic font-semibold text-[#fff] text-[0.9375rem] leading-[1.75rem] text-center mobile:w-[21.5rem]">
            Finding the right people and building high performing teams can be hard.
            Most companies aren’t tapping into the abundance of global talent. 
            We’re about to change that.
          </p> 
        </div>
      </div>
    </div>
    <div class="self-center mobile:ml-2 mobile:mt-[4rem] mobile:w-[22.375rem] mobile:h-[12.5rem]">
      <img src='../assets/bg-home-pattern.svg' />
    </div>
  </div>
`

// setupCounter(document.querySelector('#counter'))
