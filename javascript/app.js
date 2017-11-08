const gitHubIcon = "./img/githubIcon.png";

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
		link:"https://friend-finder-etc.herokuapp.com",
		github:"https://github.com/YETC7/Burger-Eater",
		description:"Application that creates, reads and update data on a mysql server.",
		creator:"Sole Developer",
		img:"./img/Burger-Eater.PNG"
	},

	{
		title:"FriendFinder",
		link:"https://news-scraper-etc.herokuapp.com",
		github:"https://github.com/YETC7/News-Scraper",
		description:"Compares users' input in attempt to match users together. Uses node, express, and mysql.",
		creator:"Sole Developer",
		img:"./img/Friend-Finder.PNG"
	},

];

// let $divRow = $("<div>");

// let $divItem = $("<div>").addClass("col-lg-4 col-sm-6 portfolio-item");
// let $divCard = $("<div>").addClass("card h-100");
// let $a1 = $("<a>").addClass("text-center").attr("href","https://news-scraper-etc.herokuapp.com");
// let $img = $("<img>").addClass("card-img-top").attr("src","https://news-scraper-etc.herokuapp.com");
// let $divBody = $("<div>").addClass("card-body");
// let $h4 = $("<h4>").addClass("card-title");
// let $a2 = $("<a>").attr("href","https://news-scraper-etc.herokuapp.com").text("News-Scraper");
// let $pText = $("<p>").addClass("card-text").text("Website that scrapes from a news source and allows users to comment on them.");
// let $pDeveloper = $("<p>").text("Sole Developer");

// $divItem.append($divCard);
// $divCard.append($a1);
// $a1.html('<img class="card-img-top" src="./img/News-Scraper.PNG" alt="">');
// $divCard.append($divBody);
// $divBody.append($h4);
// $h4.append($a2);
// $divBody.append($pText);
// $divBody.append($pDeveloper);

// $("#container").prepend($divItem);

let $divRow = $("<div>").addClass("row");

for(let i = 0; i<apps.length; i++) {
	let $divItem = $("<div>").addClass("col-lg-4 col-sm-6 portfolio-item");

	$($divItem).html(
	`
		<div class="card h-100">
			<a class="text-center" href="${apps[i].link}"><img class="card-img-top" src="${apps[i].img}" alt=""></a>
			<div class="card-body">
				<h4 class="card-title">
					<a href="${apps[i].link}">${apps[i].title}</a>
				</h4>
				<p class="card-text">${apps[i].description}</p>
				<p>${apps[i].creator}</p>
			</div>
		</div>
	`);

	$divRow.append($divItem);
}

$("#container").append($divRow);

