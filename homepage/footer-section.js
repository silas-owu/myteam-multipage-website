document.querySelector('#footer-section').innerHTML= `

    <div class="footer-mobile tablet:flex tablet:flex-col tablet:py-[3.5rem] tablet:mx-auto tablet:w-[43.0675rem] tablet:gap-y-8 laptop:flex laptop:flex-row laptop:w-[69.375rem] laptop:justify-between  laptop:gap-6">
        <div class=" footerSection1-mobile tablet:flex tablet:flex-row tablet:justify-between laptop:flex laptop:flex-row laptop:gap-[7.8125rem]">
            <div class=" flex flex-col mobile:gap-y-4 mobile:mx-auto mobile:mt-[1rem]  tablet:gap-y-[3.3125rem] laptop:gap-y-[1.5625rem]">
                <div class="laptop:w-[10rem] laptop:h-10 w-[6rem] h-[1.5rem] mobile:mx-auto">
                    <img src='../assets/logo.svg'/>
                </div>
                <div class="flex flex-row mobile:gap-8 tablet:gap-3 laptop:gap-10">
                    <h2 class="font-livvic text-[#fff] font-semibold text-[1.125rem] leading-[1.75rem] hover:text-light-coral cursor-pointer">home</h2>
                    <a href="./aboutpage.html"><h2 class="font-livvic text-[#fff] font-semibold text-[1.125rem] leading-[1.75rem]  hover:text-light-coral cor-pointer">about</h2>
                </div>
            </div>
            <div class="footerSection2-mobile font-livvic font-semibold text-[0.9375rem] text-[#fff] leading-[1.5625rem]  tablet:text-right laptop:self-center">
                <p class="opacity-[60%] text-[0.9375rem]">987 Hilcrest Lane</p>
                <p class="opacity-[60%]">Irvine,CA</p>
                <p class="opacity-[60%]">California 92714</p>
                <p class="opacity-[60%]">Call Us: 949-833-7432</p>
            </div>
        </div>
        <div class=" mobile:footerSection3-mobile  tablet:flex tablet:flex-row tablet:justify-between laptop:flex laptop:flex-col laptop:gap-y-12 ">
            <div class="footerSvgElement-mobile tablet:flex tablet:flex-row gap-4 tablet:items-center laptop:flex laptop:flex-row laptop:self-end ">
                <div>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path  class="hover:fill-light-coral" fill="#FFF" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path class="hover:fill-light-coral" fill="#FFF" d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                    </svg>
                </div>
                <div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                        <path class="hover:fill-light-coral" fill="#FFF" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"/>
                    </svg>
                </div>
            </div>
            <p class="font-livvic font-semibold text-[#fff] opacity-[60%]">Copyright 2020.All Rights Reserved</p>
        </div>
    </div>
`