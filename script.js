document.querySelector('.customBtn').addEventListener('click',(e)=>{
    e.currentTarget.innerHTML = '<span class="submit-spinner "></span> Loading…';
    e.currentTarget.setAttribute('disabled', true);
    e.currentTarget.classList.add('customBtnDisabled');
})