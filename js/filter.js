const worksCards = document.querySelectorAll('.works__card');

const worksFilterContainer = document.querySelector('.works__filter');

worksFilterContainer.addEventListener('click' , e =>{

	let filterClass = e.target.dataset['name'];
	 worksCards.forEach(e =>{
		e.classList.remove('hide')
		if (!e.classList.contains(filterClass) && filterClass !== 'all'){
			e.classList.add('hide')
		};
	 });

});