window.addEventListener('DOMContentLoaded' , ()=>{
	const burger = document.querySelector('.burger');
	const contactInfo = document.querySelector('.contact__info');
	const close = document.querySelector('.close');
	burger.addEventListener('click' , function (){
		contactInfo.classList.add('active')
		if (contactInfo.classList.contains('modal__close')){
			contactInfo.classList.remove('modal__close');
			contactInfo.classList.add('modal__open');
		}else {
			contactInfo.classList.add('modal__open');
		}
	});
	close.addEventListener('click' , function(){
		if (contactInfo.classList.contains('modal__open') || contactInfo.classList.contains('active') ){
			contactInfo.classList.remove('active');
			contactInfo.classList.remove('modal__open');
			contactInfo.classList.add('modal__close');
		}else {
			contactInfo.classList.add('modal__close');
		}
	});
});