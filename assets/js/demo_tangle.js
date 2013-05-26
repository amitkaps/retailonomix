function setUpTangle () {

	var tangle = new Tangle (document.getElementById("cCalc"), {
		initialize: function () {
			this.cookies = 3;
			this.caloriesPerCookie = 50;
			this.dailyCalories = 2100;
		},
		update: function () {
			this.calories = this.cookies * this.caloriesPerCookie;
			this.dailyPercent = 100 * this.calories / this.dailyCalories;
		}
	});
}
