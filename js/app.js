let currentHour = moment().hour();

if (currentHour < 6) {
	$("#greeting").text("Hello fellow night owl");
}

else if (currentHour < 12) {
	$("#greeting").text("Good Morning");
}

else if (currentHour < 18) {
	$("#greeting").text("Good Afternoon");
}

else {
	$("#greeting").text("Good Evening");
}

const apps = [
	{
		title:"News-Scraper",
		link:"https://news-scraper-etc.herokuapp.com",
		github:"https://github.com/YETC7/News-Scraper",
		description:"Website that scrapes from a news source and allows users to comment on them.",
		creator:"Sole Developer",
		img:"./img/News-Scraper.PNG"
	},

	{
		title:"Flash-Roulette",
		link:"https://flash-roulette-meed.herokuapp.com/",
		github:"https://github.com/edricwong28/Flash-Roulette",
		description:"A game of Flash Roulette.",
		creator:"Co-Developer (Back-end)",
		img:"./img/Roulette_Home.PNG"
	},

	{
		title:"Sequelized-Burger",
		link:"https://burger-eater-sequelize-etc.herokuapp.com/",
		github:"https://github.com/YETC7/Sequelized-Burger",
		description:"A page that changes with user interaction that uses Sequelize.",
		creator:"Sole Developer",
		img:"./img/Burger-Eater.PNG"
	},

	{
		title:"Burger-Eater",
		link:"https://burger-eater-etc.herokuapp.com",
		github:"https://github.com/YETC7/Burger-Eater",
		description:"Application that creates, reads and update data on a mysql server.",
		creator:"Sole Developer",
		img:"./img/Burger-Eater.PNG"
	},

	{
		title:"Friend-Finder",
		link:"https://friend-finder-etc.herokuapp.com",
		github:"https://github.com/YETC7/FriendFinder",
		description:"Compares users' input in attempt to match users together. Uses node, express, and mysql.",
		creator:"Sole Developer",
		img:"./img/Friend-Finder.PNG"
	},

	{
		title:"Bamazon",
		link:"https://github.com/YETC7/Bamazon",
		github:"https://github.com/YETC7/Bamazon",
		description:"An Amazon-like client that uses MySQL and Node.js.",
		creator:"Sole Developer",
		img:"./img/Node-Icon.png"
	},

	{
		title:"Flashcard-Generator",
		link:"https://github.com/YETC7/Flashcard-Generator",
		github:"https://github.com/YETC7/Flashcard-Generator",
		description:"A javascript application that creates basics and cloze-deleted flashcards.",
		creator:"Sole Developer",
		img:"./img/Node-Icon.png"
	},

	{
		title:"liri-node-app",
		link:"https://github.com/YETC7/liri-node-app",
		github:"https://github.com/YETC7/liri-node-app",
		description:"Language Interpretation and Recognition Interface. Uses node to take user input to output data.",
		creator:"Sole Developer",
		img:"./img/Node-Icon.png"
	},

	{
		title:"Train-Scheduler",
		link:"https://yetc7.github.io/Train-Scheduler/",
		github:"https://github.com/YETC7/Train-Scheduler",
		description:"Creating a basic train schedule that uses java and firebase.",
		creator:"Sole Developer",
		img:"./img/Train-Scheduler.PNG"
	},

	{
		title:"Right Here, Right Now",
		link:"https://conditionschange.github.io/Right-Here-Right-Now/",
		github:"https://github.com/ConditionsChange/Right-Here-Right-Now",
		description:"User is bored and looking for something to do. User inputs location and something they might be interested in doing. Using various APIs, the app will pull up events, restaurants, movies, and other interesting happening in the area. It will also pull up the weather so that user can appropriately plan.",
		creator:"Co-Developer",
		img:"./img/Right-Here-Right-Now.PNG"
	},

	{
		title:"GifTastic",
		link:"https://yetc7.github.io/GifTastic/",
		github:"https://github.com/YETC7/GifTastic",
		description:"Creating a website that displays gifs based on keywords using java and API.",
		creator:"Sole Developer",
		img:"./img/GifTastic.png"
	},

	{
		title:"TriviaGame",
		link:"https://yetc7.github.io/TriviaGame/",
		github:"https://github.com/YETC7/TriviaGame",
		description:"Trivia Game using jQuery.",
		creator:"Sole Developer",
		img:"./img/Trivia-Game-Home.PNG"
	},

	{
		title:"Hangman-Game",
		link:"https://yetc7.github.io/Hangman-Game/",
		github:"https://github.com/YETC7/Hangman-Game",
		description:"User plays hangman with the computer.",
		creator:"Sole Developer",
		img:"./img/Hangman.PNG"
	},

	{
		title:"Paper-RPG",
		link:"https://yetc7.github.io/Paper-RPG/",
		github:"https://github.com/YETC7/Paper-RPG",
		description:"Interactive game using jquery.",
		creator:"Sole Developer",
		img:"./img/Paper-RPG.PNG"
	},

	{
		title:"Psychic-Game",
		link:"https://yetc7.github.io/Psychic-Game/",
		github:"https://github.com/YETC7/Psychic-Game",
		description:"User tries to guess what letter the computer has picked.",
		creator:"Sole Developer",
		img:"./img/Psychic-Game.PNG"
	},

];

for(let i = 0; i<apps.length; i++) {
	let $divItemHead = $("<div>").addClass("aplicationHead");

	$($divItemHead).html(
	`
		<div class="card headCard">
			<div class="card-header">
				<ul class="nav nav-tabs card-header-tabs">
					<li class="nav-item">
				    	<a class="nav-link" href="${apps[i].link}" target="_blank">App</a>
				    </li>

				    <li class="nav-item">
				    	<a class="nav-link" href="${apps[i].github}" target="_blank">Github</a>
				    </li>
				</ul>
			</div>
			<a class="text-center" href="${apps[i].link}" target="_blank"><img id="headAppImg" class="card-img-top" src="${apps[i].img}" alt=""></a>
			<div class="card-body">
				<h4 class="card-title">
					<a href="${apps[i].link}" target="_blank">${apps[i].title}</a>
				</h4>
				<p class="card-text">${apps[i].description}</p>
				<p class="info-text">${apps[i].creator}</p>
				<!-- <a class="githubIcon pull-left" href="${apps[i].github}" target="_blank"><img width="30px" height="auto" src="./img/githubIcon.png" alt=""></a> -->
			</div>
		</div>
	`);

	let $divItemNav = $("<div>").addClass("applicationNav");

	$($divItemNav).html(
	`
		<div class="card h-100 navCard">
			<img id="navAppImg" class="card-img-top" src="${apps[i].img}" alt="">
			<div class="card-body">
				<h4 class="card-title">${apps[i].title}</h4>
			</div>
		</div>
	`);

	$("#appShow").append($divItemHead);
	$("#appsContainer").append($divItemNav);
}



$("#appShow").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '#appsContainer'
});

$("#appsContainer").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '#appShow',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 5000
});
