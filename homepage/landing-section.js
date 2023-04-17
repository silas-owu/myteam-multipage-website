
document.querySelector('#landing-section').innerHTML = `

  <div class="mobile:flex mobile:flex-col px-1">
    <div class="mobile:h-[20.44rem] mobile:w-[20.13rem] mobile:mx-auto mobile:mt-[3rem] mobile:grid mobile:grid-rows-[5rem_13.125rem] mobile:gap-y-[2.1rem] ">
      <nav class="flex flex-row justify-between">
        <div class="mobile:h-[2rem] mobile:w-[8rem]">
            <img src='../assets/logo.svg'/>
        </div>
        <div class="mobile:w-[1.25rem] mobile:h-[1.0625rem] mt-1 ">
          <img src='../assets/menu-white.svg'/>
        </div>
      </nav>
      <div class=" mobile:flex mobile:flex-col mobile:gap-[1rem]">
        <h1 class="font-livvic font-bold text-[2.5rem] text-[#fff] leading-[2.5rem] text-center">
          Find the <br> best <span class="text-light-coral">talent</span>
        </h1>
        <p class="font-livvic font-semibold text-[#fff] text-[0.9375rem] leading-[1.75rem] text-center mobile:w-[21.5rem]">
          Finding the right people and building high performing teams can be hard.
          Most companies aren’t tapping into the abundance of global talent. 
          We’re about to change that.
        </p> 
      </div>
      </div>
      <div class="self-center mobile:ml-2 mobile:mt-[0.9rem] mobile:w-[22.375rem] mobile:h-[12.5rem]">
        <img src='../assets/bg-home-pattern.svg' />
      </div>
  </div>
`

// setupCounter(document.querySelector('#counter'))
