const apps = [
	{
		title:"News-Scraper",
		link:"https://news-scraper-etc.herokuapp.com",
		github:"",
		description:"Website that scrapes from a news source and allows users to comment on them.",
		creator:"Sole Developer",
		img:"./img/News-Scraper.PNG"
	},

];

let $divRow = $("<div>");

let $divItem = $("<div>").addClass("col-lg-4 col-sm-6 portfolio-item");
let $divCard = $("<div>").addClass("card h-100");
let $a1 = $("<a>").attr("href","https://news-scraper-etc.herokuapp.com");
let $img = $("img").addClass("card-img-top").attr("src","https://news-scraper-etc.herokuapp.com");
let $divBody = $("<div>").addClass("card-body");
let $h4 = $("<h4>").addClass("card-title");
let $a2 = $("<a>").attr("href","https://news-scraper-etc.herokuapp.com").text("News-Scraper");
let $pText = $("<p>").addClass("card-text").text("Website that scrapes from a news source and allows users to comment on them.");
let $pDeveloper = $("<p>").text("Sole Developer");



