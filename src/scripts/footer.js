const contectTitle = document.querySelector(".title__contacts") 
			const info1 = document.querySelector(".info1") 
			const whoweareTitle = document.querySelector(".title__who-we-are") 
			const info2 = document.querySelector(".info2")
			const ourExperience = document.querySelector(".title__our-experience") 
			const info3 = document.querySelector(".info3")

			contectTitle.onclick = ()=>{
    			info1.classList.toggle('active')
				contectTitle.classList.toggle('title__contacts_active')
			} 
			whoweareTitle.onclick =()=>{
				info2.classList.toggle('active')
				whoweareTitle.classList.toggle('title__who-we-are_active')
			}
			ourExperience.onclick =()=>{
				info3.classList.toggle('active')
				ourExperience.classList.toggle('title__our-experience_active')
			}