document.querySelector('#footer-section').innerHTML= `
    <div class="mobile:px-[1.5rem] mobile:py-[4.125rem] mobile:w-[20.4375rem] mobile:gap-y-7 mobile:h-[18.875rem] mobile:border-dashed mobile:border-2 mobile:border-[#5aa] mobile:flex mobile:flex-col">
        <div class=" mobile:flex mobile:flex-col mobile:gap-y-6">
            <div class="w-[6rem] h-[1.5rem]">
                <img src='../assets/logo.svg'/>
            </div>
            <div class="mobile:flex mobile:flex-row mobile:justify-between">
                <h2 class="font-livvic text-[#fff]">home</h2>
                <h2 class="font-livvic text-[#fff]">about</h2>
            </div>
        </div>
        <div class="mobile:h-[6.25rem] mobile:text-center font-livvic font-semibold text-[0.9375rem] leading-[1.5625rem]">
            <p  class="opacity-[60%]">987 Hilcrest Lane</p>
            <p class="opacity-[60%]">Irvine,CA</p>
            <p class="opacity-[60%]">California 92714</p>
            <p class="opacity-[60%]" >Call Us: 949-833-7432</p>
        </div>
        <div class="mobile:flex mobile:flex-col mobile:gap-y-4">
            <div class="mobile:flex mobile:flex-row mobile:justify-evenly">
                <div><img src='../public/assets/icon-facebook.svg'/></div>
                <div><img src='../public/assets/icon-pinterest.svg'/></div>
                <div><img src='../public/assets/icon-twitter.svg'/></div>
            </div>
            <p class=" opacity-[60%]">Copyright 2020.All Rights Reserved</p>
        </div>
    </div>
`