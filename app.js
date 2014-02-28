//================================================================
// Animation Functions
//================================================================

// Show Youtube Functions ========================================

y = function() { PSD.flashingCursor.x = 169; PSD.y.visible = true; };
o = function() { PSD.flashingCursor.x = 179; PSD.o.visible = true; };
u2 = function() { PSD.flashingCursor.x = 188; PSD.u2.visible = true; };
t = function() { PSD.flashingCursor.x = 194; PSD.t.visible = true; };
u = function() { PSD.flashingCursor.x = 204; PSD.u.visible = true; };
b = function() { PSD.flashingCursor.x = 214; PSD.b.visible = true; };
e = function() { PSD.flashingCursor.x = 223; PSD.e.visible = true;  };
moveCursor = function() { PSD["flashingCursor"].animate({properties:{x:345}, curve: "spring(1050,40,1000)"}) };

flashTheCursor = function() { 
//FLASHING CURSOR
	animation1 = new Animation({ view:PSD["flashingCursor"], properties:{opacity:0}, curve: "ease-out", time: 400,});
	animation2 = new Animation({ view:PSD["flashingCursor"], properties:{opacity:1}, curve: "ease-out", time: 400,});
	animation2 = animation1.reverse();

	// Loop the animation
	animation1.on("end", animation2.start);
	animation2.on("end", animation1.start);
	animation1.start();
};

addressBarRedBg = function(){PSD["addressBarRedBg"].animate({properties:{opacity:1}, curve: "ease-in-out", time: 275})};

//Gray Youtube UI Fading out
leftArrowGray = function() { PSD["leftArrowGray"].animate({properties:{opacity:0}, curve: "ease-in", time: 150})};
rightArrowGray = function() { PSD["rightArrowGray"].animate({properties:{opacity:0}, curve: "ease-in", time: 150})} ;
refreshGray = function() { PSD["refreshGray"].animate({properties:{opacity:0}, curve: "ease-in", time: 150})} ;
menuGray = function() { PSD["menuGray"].animate({properties:{opacity:0}, curve: "ease-in", time: 150})} ;
barGray = function() { PSD["barGray"].animate({properties:{opacity:0}, curve: "ease-in", time: 150})} ;

//Red Youtube UI fading in
leftArrowRed = function() { PSD["leftArrowRed"].animate({properties:{opacity:1}, curve: "ease-in", time: 150})};
rightArrowRed = function() { PSD["rightArrowRed"].animate({properties:{opacity:1}, curve: "ease-in", time: 150})} ;
refreshRed = function() { PSD["refreshRed"].animate({properties:{opacity:1}, curve: "ease-in", time: 150})} ;
menuRed = function() { PSD["menuRed"].animate({properties:{opacity:1}, curve: "ease-in", time: 150})} ;
redBar = function() { PSD["redBar"].animate({properties:{opacity:1}, curve: "ease-in", time: 150})} ;


// Moves "youtube" over
moveYouTubeOver = function() {
	PSD["youtubeText"].animate({properties:{x:188}, curve: "ease-in-out", time: 175})
};

//Youtube favIcon appears
favIcon = function() {
	PSD.favIconYoutube.visible = true;
	PSD["favIconYoutube"].animate({properties:{scale:1, opacity:1}, curve: "spring(1250,30,1100)"})
};

//Search youtube for fade in 
searchYoutube = function() { PSD["searchYoutubeFor"].animate({properties:{opacity:1}, curve: "ease-in-out", time: 275}) };



// Focus on address bar - This executes all thefunctions defined above, sequentially.

	activeAddressBar = function() {
	PSD["addressBarFocused"].animate({properties:{opacity:1}, curve: "ease-in", time: 100})
	PSD.flashingCursor.visible = true;
	utils.delay(650, y)
	utils.delay(750, o)
	utils.delay(850, u2)
	utils.delay(975, t)
	utils.delay(1000, u)
	utils.delay(1200, b)
	utils.delay(1350, e)
	utils.delay(2150, moveCursor)
	utils.delay(2150, moveYouTubeOver)
	utils.delay(2190, favIcon)
	utils.delay(2190, searchYoutube)
	utils.delay(2700, flashTheCursor)
	utils.delay(2150, addressBarRedBg)
	utils.delay(2150, leftArrowGray )
	utils.delay(2150, rightArrowGray)	
	utils.delay(2150, refreshGray)
	utils.delay(2150, menuGray)
	utils.delay(2150, barGray)
	utils.delay(2150, leftArrowRed )
	utils.delay(2150, rightArrowRed)	
	utils.delay(2150, refreshRed)
	utils.delay(2150, menuRed)
	utils.delay(2150, redBar)
	
};

//================================================================
// onLoad Global Functions
//================================================================

//Hide Layers onLoad
PSD.favIconYoutube.visible = false;
PSD.y.visible = false;
PSD.o.visible = false;
PSD.u2.visible = false;
PSD.t.visible = false;
PSD.u.visible = false;
PSD.b.visible = false;
PSD.e.visible = false;
PSD.flashingCursor.visible = false;

// Set opacity to 0
PSD.leftArrowRed.opacity = 0;
PSD.rightArrowRed.opacity = 0;
PSD.refreshRed.opacity = 0;
PSD.menuRed.opacity = 0;
PSD.redBar.opacity = 0;
PSD.addressBarFocused.opacity = 0;
PSD.favIconYoutube.opacity = 0;
PSD.addressBarRedBg.opacity = 0;
PSD.searchYoutubeFor.opacity = 0;


// Set size
PSD.favIconYoutube.scale = 0.5;

// Set start poition
PSD.youtubeText.x = 108

//================================================================
// onClick Functions
//================================================================

// Activate address bar on click
PSD.addressBarFocused.on("click", function() {
	activeAddressBar();
})






















