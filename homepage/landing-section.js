
document.querySelector('#landing-section').innerHTML = `

  <div class="mobile:flex mobile:flex-col px-1 tablet:w-[43.0625rem] tablet:flex tablet:flex-col tablet:gap-[9.75rem]  tablet:children:border-dashed tablet:children:border-[2px] tablet:children:border-[#edd]">
    <div class="tablet:grid tablet:grid-rows-[3rem_13.75rem] tablet:gap-y-[7rem] mobile:h-[20.44rem] mobile:w-[20.13rem] mobile:mx-auto mobile:mt-[3rem] mobile:grid mobile:grid-rows-[5rem_13.125rem] mobile:gap-y-[2.1rem] ">
      <nav class="flex flex-row tablet:items-center mobile:justify-between">
        <div class="mobile:h-[2rem] mobile:w-[8rem]">
            <img src='../assets/logo.svg'/>
        </div>
        <div class="flex pl-[3rem] gap-[3rem] mobile:hidden">
          <h3 class="font-livvic font-semibold items text-[#fff] text-[1.125rem] leading-[1.75rem]">home</h3>
          <h3 class="font-livvic font-semibold text-[#fff] text-[1.125rem] leading-[1.75rem]">about</h3>
        </div>
        <button class=" ml-[10.3rem] border-solid border-[#fff] border-2 rounded-3xl font-livvic font-semibold w-[9.5625rem] h-[3rem] text-[#fff] mobile:hidden">contact us</button>
        <div class="mobile:w-[1.25rem] mobile:h-[1.0625rem] mobile:mt-1 tablet:hidden">
          <img src='../assets/menu-white.svg'/>
        </div>
      </nav>
      <div class="tablet:flex tablet:mx-auto tablet:flex-col tablet:gap-[1.5rem] mobile:flex mobile:flex-col mobile:gap-[1rem]">
        <h1 class="tablet:text-[4rem] tablet:leading-[3.5rem] font-livvic font-bold text-[2.5rem] text-[#fff] leading-[2.5rem] text-center">
          Find the <br> best <span class="text-light-coral">talent</span>
        </h1>
        <p class="tablet:w-[28.5625rem] tablet:h-[5.25rem] font-livvic font-semibold text-[#fff] text-[0.9375rem] leading-[1.75rem] text-center mobile:w-[21.5rem]">
          Finding the right people and building high performing teams can be hard.
          Most companies aren’t tapping into the abundance of global talent. 
          We’re about to change that.
        </p> 
      </div>
    </div>
    <div class="self-center mobile:ml-2 mobile:mt-[1.2rem] mobile:w-[22.375rem] mobile:h-[12.5rem]">
      <img src='../assets/bg-home-pattern.svg' />
    </div>
  </div>
`

// setupCounter(document.querySelector('#counter'))
