	var lastScrollTop = 0;
	window.addEventListener("scroll", function(){
   		var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   			if (currentScroll > lastScrollTop){
   				 document.getElementById("nav-header").classList.add("scrollon");
                document.getElementsByClassName("lista").style.color= "#333447";
   			} else {
   				  document.getElementById("nav-header").classList.add("scrollon");
   				    if(currentScroll<=3){
   				      document.getElementById("nav-header").classList.remove("scrollon");
   				    }
   			}
   				lastScrollTop = currentScroll;
	}, false);