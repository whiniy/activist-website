/* .js files add interaction to your website */
var factArray = ["In a survey conducted by Fashion Checker during 2020, it was revealed that over 90% of the brands underpay their workers.", "More than 500 billion dollars worth of clothes are lost every single year due to overproduction and the lack of recycling.", "According to a report by UNICEF, about 170 million children between the ages of 5 and 17 are put to work in the fast fashion industry.", "According to the Clean Clothes Campaign, 80 percent of fast fashion workers are women.", "The fashion industry is a big contributor to pollution and is accounted for more than 10% of the planet's pollution.", "1 in 3 women consider old clothes as clothes that have been worn once or twice.", "Azo dyes are cheap dyes that are used in many fast fashion garments. This toxic chemical can lead to skin absorption, skin irritation, and eye irritation.", "When fast fashion garments are thrown into the wash, microplastics degrade into the wastewater which will reach marine ecosystems to be injected.", "Clothing workers face unsafe and unjust conditions. They regularly recieve verbal and physical abuse as well as the denying of basic human needs.", "There is a constant desire for wanting more garments which can be very triggering as it could induce guilt, anxiety, shame, etc.", "Many brands such as FashionNova and Shein use heavily photoshopped pictures of their models which can eventually lead to younger generations developing insecurities."];

var fact = document.getElementById("clickBTN");
var count = 0;


function generateFact () {
	fact.innerHTML = factArray[count];
	count++;
	if (count == factArray.length) {
		count = 0;
	}
}