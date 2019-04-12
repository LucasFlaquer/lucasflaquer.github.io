document.addEventListener("DOMContentLoaded", function() {
  collapseMenu();
  calcProgress();
  fadeProject();
  btnVermais();
  offsetHeight();
}); 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	let header = document.getElementById('header');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
}
function collapseMenu() {
	if (window.innerWidth < 767) {
		let hamburger = document.querySelector('.nav-menu--hamburger');
		let menuItem = document.querySelector('.nav-menu--list');
		let menuList = document.querySelectorAll('.nav-menu--list li');
		hamburger.addEventListener("click",function() {
			hamburger.classList.toggle("active");
			menuItem.classList.toggle("colapsed");
		});
		//close menu on click
		menuList.forEach( function(element, index) {
			element.addEventListener("click", function() {
				hamburger.classList.toggle("active");
				menuItem.classList.toggle("colapsed");
			})
		});
	}
}
function calcProgress() {
	$.getJSON('./js/data/data.json', function(json, textStatus) {
		let languages = json.languages;
		let tools = json.tools;
		let libs = json.libs;
		let langList = document.getElementById('langs');
		let toolsList = document.getElementById('tools');
		let libsList = document.getElementById('libs');
		clearList(langList);
		clearList(libsList);
		clearList(toolsList);
		addItem(languages, langList);
		addItem(tools, toolsList);			
		addItem(libs, libsList);
	});
}
function addItem(obj, list) {
	for (var i = 0; i < obj.length; i++) {
		let li = document.createElement('li');
		let progress = document.createElement('span');
		let name = document.createElement('span');
		li.classList.add("skills--item");
		progress.classList.add("skills--progress");
		name.classList.add('skills--name');
		name.style.width = obj[i].porcentagem+ "%";
		text = document.createTextNode(obj[i].name);
		name.appendChild(text);
		progress.appendChild(name);
		li.appendChild(progress);
		list.appendChild(li);
	}
}
function clearList(list) {

	list.innerHTML = '';
}


function fadeProject() {
	if (window.innerWidth > 768) {
		$(".projects--box").on("mouseenter", function() {
			$(this).find('.projects--content').addClass('zoomIn')
			.removeClass('hidden zoomOut');    	
	  })
	  .on("mouseleave", function() {
	   $('.projects--content').addClass('zoomOut').removeClass('zoomIn');
		});	
	}
}

function btnVermais() {
	if(window.innerWidth < 768) {
		$('.projects--content').addClass('active').removeClass('hidden animated');
	}
}
function offsetHeight() {
	$('.nav-menu--item>a, .footer--item>a').click(function(e) {
		console.log(this);
		var href = $(this).attr('href');
		// e.preventDefault();
		$("body, html").animate({ 
    scrollTop: $(href).offset().top - 48}, 200);
	})
}