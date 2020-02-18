export class IndividualWaterIntake {
	constructor() {
		//COLLECTED FROM USER
		this.age;
		this.gender;
		this.height;
		this.weight;
		this.caffeineIntake;
		this.activity;
		this.location;
	
		//CALCULATED IN BACK END
		this.bmi;
		this.environmentFactors = 0;
		this.temperature;
		this.humidity;
		this.hydrationGoal = 0;
		this.currentHydrationLevel = 0;
	}

	addUserInput(age, gender, height, weight, caffeineIntake, activity, location) {
		this.age = age;
		this.gender = gender;
		this.height = height;
		this.weight = weight;
		this.caffeineIntake = caffeineIntake;
		this.activity = activity;
		this.location = location;
	}

	calculateUserBmi(height, weight) {
		this.bmi = +((weight)*703/(height*height)).toFixed(1);
	}

	calculateHydrationGoal() {
		//GENDER OR BMI FACTORS
		if (this.gender === "male") {
			this.hydrationGoal = 13;
		} else if (this.gender === "female") {
			this.hydrationGoal = 9;
		} if (this.gender === false) {
			this.calculateUserBmi(this.height, this.weight);
			if ( this.bmi < 25 ) {
				this.hydrationGoal = 8;
			} else if ( this.bmi >= 25.0 && this.bmi < 30) {
				this.hydrationGoal = 10
			} else if (this.bmi >= 30) {
				this.hydrationGoal = 12;
			}
		}
		//AGE FACTORS
		if (this.age < 19 && this.gender === male) {
			this.hydrationGoal -= 2;
		} else if (this.age < 19 && this.gender === female) {
			this.hydrationGoal-- ;
		}
		//CAFFEINE FACTORS
		if (this.caffeineIntake >= 5 ) {
			this.hydrationGoal += 5; 
		} else if (this.caffeineIntake >=3 || this.caffeineIntake <= 4) {
			this.hydrationGoal += 3;
		} else if (this.caffeineIntake >=1 || this.caffeineIntake <= 2) {
			this.hydrationGoal += 1;
		}
		//ACTIVITY FACTORS
		if (this.activity === true) {
			this.hydrationGoal++;
		}
		//ENVIRONMENT FACTORS
		if (this.temperature >= 85) {
			this.hydrationGoal++;
		} 
		if (this.temperature >= 85 && this.humidity >= 70) {
			this.hydrationGoal += 1;
		}
		if (this.humidity <= 45) {
			this.hydrationGoal++;
		}
	}
}