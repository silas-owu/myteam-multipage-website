$(function() {
    const $titleID = $('#role');
    const $messageID = $('#message');
    const $submitBtn = $('#submit');
    const $form = $('#form');

    
    $submitBtn.on('click',function(event){
        // event.preventDefault();
        $titleID.val() === '' ? 
            $titleID.next('p').length === 0 
            && $titleID.after('<p class="text-[#F67E7E] font-bold font-italic text-[0.625rem] leading-[0.8125rem]">This field is required</p>').addClass('placeholder-light-coral border-b-light-coral')
        :$titleID.next('p').removeClass('placeholder-light-coral');
    });

    $submitBtn.on('click',function(event){
        // event.preventDefault();
        $messageID.val() === '' ? 
            $messageID.next('p').length === 0
            && $messageID.after('<p class="text-[#F67E7E] font-bold font-italic text-[0.625rem] leading-[0.8125rem]">This field is required</p>').addClass('placeholder-light-coral border-b-light-coral').attr('placeholder', 'Insert your message here')
        :$messageID.next('p').removeClass('placeholder-light-coral');
    });

    
})