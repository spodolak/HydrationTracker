export class IndividualWaterIntake {
	constructor() {
		//COLLECTED FROM USER
		this.age;
		this.gender;
		this.height;
		this.weight;
		this.caffeineIntake;
		this.activity;
		this.city;
		this.state;
	
		//CALCULATED IN BACK END
		this.bmi;
		this.environmentFactors = 0;
		this.temperature;
		this.humidity;
		this.hydrationGoal = 0; // IN OUNCES
		this.currentHydrationLevel = 0; // IN OUNCES
		this.hydrationGoalCup= 0; // IN CUPS
		this.currentHydrationLevelCup = 0; // IN CUPS
	}

	addUserInput(age, gender, height, weight, caffeineIntake, activity, city, state) {
		this.age = age;
		this.gender = gender;
		this.height = height;
		this.weight = weight;
		this.caffeineIntake = caffeineIntake;
		this.activity = activity;
		this.city = city;
		this.state = state;
	}

	calculateUserBmi(height, weight) {
		this.bmi = +((weight)*703/(height*height)).toFixed(1);
	}

	cupToOunce(cup)	{
		return cup*8;
	}

	calculateHydrationGoal() {
		//GENDER OR BMI FACTORS
		if (this.gender === "male") {
			this.hydrationGoalCup = 13;
		} else if (this.gender === "female") {
			this.hydrationGoalCup = 9;
		} if (this.gender === '') {
			this.calculateUserBmi(this.height, this.weight);
			if ( this.bmi < 25 ) {
				this.hydrationGoalCup = 8;
			} else if ( this.bmi >= 25.0 && this.bmi < 30) {
				this.hydrationGoalCup = 10
			} else if (this.bmi >= 30) {
				this.hydrationGoalCup = 12;
			}
		}
		//AGE FACTORS
		if (this.age < 19 && this.gender === "male") {
			this.hydrationGoalCup -= 2;
		} else if (this.age < 19 && this.gender === "female") {
			this.hydrationGoalCup-- ;
		}
		//CAFFEINE FACTORS
		if (this.caffeineIntake >= 5 ) {
			this.hydrationGoalCup += 5; 
		} else if (this.caffeineIntake >=3 || this.caffeineIntake <= 4) {
			this.hydrationGoalCup += 3;
		} else if (this.caffeineIntake >=1 || this.caffeineIntake <= 2) {
			this.hydrationGoalCup += 1;
		}
		//ACTIVITY FACTORS
		if (this.activity === "true") {
			this.hydrationGoalCup++;
		}
		//ENVIRONMENT FACTORS
		if (this.temperature >= 302) {
			this.hydrationGoalCup++;
		} 
		if (this.temperature >= 302 && this.humidity >= 70) {
			this.hydrationGoalCup += 1;
		}
		if (this.humidity <= 45) {
			this.hydrationGoalCup++;
		}
		this.hydrationGoal = this.cupToOunce(this.hydrationGoalCup);
	}
}