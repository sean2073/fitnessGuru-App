var quotes = [
    { quote: "Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity", author:"John F. Kennedy"},
    { quote: "Take care of your body. It's the only place you have to live.", author:"Jim Rohn"},
    { quote: "To enjoy the glow of good health, you must exercise.", author: "Gene Tunney"},
    { quote: "The purpose of training is to tighten up the slack, toughen the body, and polish the spirit.", author: "Morihei Ueshiba"},
    { quote: "I'm not in the best shape, but I want to prove to myself I can do something that seems insurmountable and inspire others by showing them no matter where they are in their fitness goals, they can do it, too.", author: "Ruben Studdard"},
    { quote: "Reading is to the mind what exercise is to the body.", author: "Joseph Addison"},
    { quote: "Time and health are two precious assets that we don't recognize and appreciate until they have been depleted.", author: "Denis Waitley"},
    { quote: "Walking is the best possible exercise. Habituate yourself to walk very far.", author: "Thomas Jefferson"},
    { quote: "The human body is the best picture of the human soul.", author: "Ludwig Wittgenstein"},
    { quote: "Exercise to stimulate, not to annihilate. The world wasn't formed in a day, and neither were we. Set small goals and build upon them.", author: "Lee Haney"},
    { quote: "True enjoyment comes from activity of the mind and exercise of the body; the two are ever united.", author: "Wilhelm von Humboldt"},
    { quote: "Swimming is normal for me. I'm relaxed. I'm comfortable, and I know my surroundings. It's my home.", author: "Michael Phelps"},
    { quote: "Bodybuilding is much like any other sport. To be successful, you must dedicate yourself 100% to your training, diet and mental approach.", author: "Arnold Schwarzenegger"},
    { quote: "Jogging is very beneficial. It's good for your legs and your feet. It's also very good for the ground. If makes it feel needed.", author: "Charles M. Schulz"},
    { quote: "I think I have just evolved as a person, as a human being. I like fitness. It's an important part of my everyday life, and I enjoy and endorse a healthy lifestyle.", author: "Karisma Kapoor"},
    { quote: "Exercise is done against one's wishes and maintained only because the alternative is worse.", author: "George A. Sheehan"},
    { quote: "I don't smoke, don't drink much, and go to the gym five times a week. I live a healthy lifestyle and feel great. I can run a marathon, you know.", author: "Sarah Michelle Gellar"},
    { quote: "Leave all the afternoon for exercise and recreation, which are as necessary as reading. I will rather say more necessary because health is worth more than learning.", author: "Thomas Jefferson"},
    { quote: "Health is the thing that makes you feel that now is the best time of the year.", author: "Franklin Pierce Adams"},
    { quote: "The mind is the most important part of achieving any fitness goal. Mental change always comes before physical change.", author: "Matt McGorry"},
    { quote: "Practice puts brains in your muscles.", author: "Sam Snead"},
    { quote: "Health is the vital principle of bliss, and exercise, of health.", author: "James Thomson"},
    { quote: "Resting for me is fitness training.", author: "Jenson Button"},
    { quote: "You need to eat normally and healthfully, and you need to exercise. I'm so passionate about this because I think people spend their lives not happy in their bodies.", author: "Courtney Thorne-Smith"},
    { quote: "Almost 70 per cent of your fitness battle is won the day you realise what your body needs and when. I've made my own diets, and I decide for myself what works for me.", author: "Arjun Rampal"},
    { quote: "I attend to my fitness. I go the gym every day and try to maintain my physical fitness; without that, it is tough to take challenges on the chess board.", author: "Viswanathan Anand"},
    { quote: "In terms of fitness and battling through cancer, exercise helps you stay strong physically and mentally.", author: "Grete Waitz"},
    { quote: "Never hurry. Take plenty of exercise. Always be cheerful. Take all the sleep you need. You may expect to be well.", author: "James Freeman Clarke"},
    { quote: "I'm French, so I'm quite lazy about exercising, and I smoke. But I do love going for a run in the morning with my dog. That's all.", author: "Eva Green"},
    { quote: "You must also give mental and physical fitness priority.", author: "Jim Otto"},
    { quote: "Once you are over 30, 35 years old, I think everyone should get down to the gym and start moving again.", author: "Warren Cuccurullo"},
    { quote: "It's been a long road back to health and fitness for me. I am just glad to have been given the opportunity to do what I love most.", author: "Jonah Lomu"},
    { quote: "Personally, I need a high level of physical fitness in order to feel at ease.", author: "Jurgen Klinsmann"},
    { quote: "Number one, like yourself. Number two, you have to eat healthy. And number three, you've got to squeeze your buns. That's my formula.", author: "Richard Simmons"},
    { quote: "A muscle is like a car. If you want it to run well early in the morning, you have to warm it up.", author: "Florence Griffith Joyner"},
    { quote: "I like to embrace natural beauty. I try to get at least 8 hours of sleep, drinking a lot of water and exercising.", author: "Tia Mowry"},
    { quote: "When I'm on the road, I'll break my exercise into a cardio session and a weights session.", author: "Robert Irvine"},
    { quote: "Cycling keeps me lean and I need to stay in shape, especially as I still like eating chocolate and ice-cream! I like to go mountain biking too. Running is also good; it's what we were designed to do as humans, so it comes naturally.", author: "Mark Webber"},
    { quote: "In the midst of these hard times it is our good health and good sleep that are enjoyable.", author: "Knute Nelson"},
    { quote: "My wife and I work out together almost every day. It's just a great way to spend time together. We're going to run a marathon together later this year, and that's one more goal that we'll accomplish as husband and wife.", author: "Bill Rancic"},
    { quote: "You can always improve your fitness if you keep training.", author: "Pastor Maldonado"},
    { quote: "A vigorous five-mile walk will do more good for an unhappy but otherwise healthy adult than all the medicine and psychology in the world.", author: "Paul Dudley White"},
    { quote: "You gotta have a body.", author: "Jayne Mansfield"},
    { quote: "I have been through various fitness regimes. I used to run about five miles a day and I did aerobics for a while.", author: "Sting"},
    { quote: "I think exercise tests us in so many ways, our skills, our hearts, our ability to bounce back after setbacks. This is the inner beauty of sports and competition, and it can serve us all well as adult athletes.", author: "Peggy Fleming"},
    { quote: "15 minutes a day! Give me just this and I'll prove I can make you a new man.", author: "Charles Atlas"},
    { quote: "Tactics, fitness, stroke ability, adaptability, experience, and sportsmanship are all necessary for winning.", author: "Fred Perry"},
    { quote: "Fitness needs to be perceived as fun and games or we subconsciously avoid it.", author: "Alan Thicke"},
    { quote: "What you want is to rev up your metabolism so that you are burning fat and calories, not preserving fat and calories.", author: "Kathy Freston"},
    { quote: "I feel if I'm healthy and happy, I look good. With a good mixture of fitness and healthy food I always feel great!", author: "Candice Swanepoel"},
    { quote: "I try and maintain a little bit of fitness, man.", author: "Frank Bruno"},
    { quote: "I'm 33 now and I seem to have hit a fitness plane. Shifting the wobbly bits isn't as easy as it used to be.", author: "Matthew Rhys"},
    { quote: "With fitness, I do Bikrams hot yoga. The gym that I have in my building is amazing. I love to do cardio and weights there.", author: "Shay Mitchell"},
    { quote: "I personally love to run outdoor fitness trails. I love the meditative value I get when out alone, challenging myself to run faster and higher.", author: "Laurieann Gibson"},
    { quote: "I think a basic level of fitness can help the body cope with all manner of incidents.", author: "Richard Hammond"},
    { quote: "I'm such a fitness freak that I eat so plain, it's gross. I have oatmeal in the morning and then I have chicken breasts and vegetables and spinach shakes.", author: "Jake Shears"},
    { quote: "I am concentrating on my fitness levels so that I don't look old.", author: "Sonu Nigam"},
    { quote: "To keep my back from getting stiff, I have a strict regime every morning of stretching and do yoga once a week and Pilates. 'Strictly Come Dancing' in 2008 was great for my fitness.", author: "Cherie Lunghi"},
    { quote: "I took up boxing as a fitness thing. I got obsessed, and I would go every day when I wasn't working. It's just an insane sport when you get into it.", author: "Lena Headey"},
    { quote: "In my judgment, physical fitness is basic to all forms of excellence and to a strong, confident nation.", author: "Robert Kennedy"},
	{ quote: "Muscles come and go; flab lasts.", author: "Bill Vaughan"},
	{ quote: "Exercise is labor without weariness.", author: "Samuel Johnson"}
];

var currentQuote = -1;

function qLogic(data, element) {
	console.important("Health Quotes:");
	var whatToDo = data.split("-")[0];

	if(whatToDo == "spawn" || whatToDo == "spawn_welecome"){
		var this_PopUp;

		//any quotePopup(s) spawned?
	 	var popUps = document.getElementsByClassName("quotePopup");

	    while(popUps.length > 1){
	        popUps[1].parentNode.removeChild(popUps[1]);
	    }

		//if a quotePopup exists lets use it (empty it)
		if(popUps[0]){
			this_PopUp = popUps[0];
			$( ".quotePopup .quote p" ).html("");
			$( ".quotePopup .quote .author" ).html("");
		}

		//if no quotePopup exists, create one
		this_PopUp = qConstructor(whatToDo);

		//run next quote logic just to be safe
		qLogic("next");
	}
	if (whatToDo == "hide") {
		element.parentNode.parentNode.parentNode.parentNode.className ="quotePopup";
	}
	if (whatToDo == "next" || whatToDo == "previous") {
		//what is our current quote #?
		//if -1, spawn any random #
		if(currentQuote == -1){
			qLogic("random");
		}else{
			if(whatToDo == "next"){
				if(currentQuote < quotes.length){ currentQuote +=1;
				}else{ currentQuote = 0; }
			}else if (whatToDo == "previous"){
				if(currentQuote > 0){ currentQuote -=1;
				}else{ currentQuote = quotes.length; }
			}
		}
		console.log("quote update to #: " + currentQuote);
		qLogic("update");
	}
	
	if(whatToDo == "random"){
		currentQuote = Math.floor(Math.random() * quotes.length);
	}

	if(whatToDo == "update"){
		$( ".quotePopup .quote p" ).html(quotes[currentQuote].quote);
		$( ".quotePopup .quote .author" ).html(quotes[currentQuote].author);
	}
}

function qConstructor(spawnType) {
	var container = document.createElement("div");
	container.className = "quotePopup open";

		// WITHININ CONTAINER

		var content = document.createElement("div");
		content.className = "content";
		container.appendChild( content ) ;

			// WITHININ CONTENT

			if(spawnType == "spawn_welecome"){
				var welcome = document.createElement("div");
				welcome.className = "welcome";
				content.appendChild( welcome ) ;
			}

			var logo_txt = document.createElement("div");
			logo_txt.className = "logo-txt";
			content.appendChild( logo_txt ) ;

			var quote = document.createElement("div");
			quote.className = "quote";
			content.appendChild( quote ) ;

				//WITHIN QUOTE

				var nav = document.createElement("div");
				nav.className = "nav";
				quote.appendChild( nav ) ;

					//WITHIN NAV
					var d = document.createElement("div");
					nav.appendChild( d ) ;

					var b = document.createElement("button");
					b.onclick = function () { qLogic("hide", this);};
					nav.appendChild( b ) ;

				var quotePlace = document.createElement("p");
				quote.appendChild( quotePlace ) ;

				var author = document.createElement("div");
				author.className = "author";
				quote.appendChild( author ) ;

				var moreQuotes = document.createElement("div");
				moreQuotes.className = "more";
				quote.appendChild( moreQuotes ) ;

					//WITHIN MORE
					var previousQuote = document.createElement("a");
						previousQuote.onclick = function () { qLogic("previous", this);};
						var leftArrow = document.createElement("i");
						leftArrow.className = "fa fa-arrow-left";
						previousQuote.appendChild( leftArrow ) ;
					moreQuotes.appendChild( previousQuote ) ;

					var nextQuote = document.createElement("a");
						nextQuote.onclick = function () { qLogic("next", this);};
						var rightArrow = document.createElement("i");
						rightArrow.className = "fa fa-arrow-right";
						nextQuote.appendChild( rightArrow ) ;
					moreQuotes.appendChild( nextQuote ) ;


		var footer = document.createElement("div");
		footer.className = "footer";
		container.appendChild( footer ) ;

	document.body.appendChild( container ) ;
}

console.important = function( msg){
	console.log( '%c%s %s %s', 'color: white; font-size: large; font-weight: bold; background-color: rgba(0,0,0,0.5)', '', msg, '');
}

$(function() {	
	qLogic("spawn_welecome");
});