import { IndividualWaterIntake } from "../src/water-intake-calculation";

describe("IndividualWaterIntake", () => {
	let individualWaterIntake;
	beforeEach(function () {
		individualWaterIntake = new IndividualWaterIntake ();
		})
		
	test("should create an object based on user input of age, gender OR height and weight, caffeine intake, activity level and zip code of current location", () => {
		individualWaterIntake.age = 18;
		individualWaterIntake.gender = "female";
		individualWaterIntake.height = 65;
		individualWaterIntake.weight = 150;
		individualWaterIntake.caffeineIntake = 4;
		individualWaterIntake.activity = true;
		individualWaterIntake.location = 92346;
		expect(individualWaterIntake.age).toEqual(18);
		expect(individualWaterIntake.gender).toEqual("female");
		expect(individualWaterIntake.height).toEqual(65);
		expect(individualWaterIntake.weight).toEqual(150);
		expect(individualWaterIntake.caffeineIntake).toEqual(4);
		expect(individualWaterIntake.activity).toEqual(true);
		expect(individualWaterIntake.location).toEqual(92346);
	}); 

	test("should create a method that adds user input to IndividualWaterIntake object", () => {
		individualWaterIntake.addUserInput(55, "male", 70, 200, 1, false, 90210);
		expect(individualWaterIntake.age).toEqual(55);
		expect(individualWaterIntake.gender).toEqual("male");
		expect(individualWaterIntake.height).toEqual(70);
		expect(individualWaterIntake.weight).toEqual(200);
		expect(individualWaterIntake.caffeineIntake).toEqual(1);
		expect(individualWaterIntake.activity).toEqual(false);
		expect(individualWaterIntake.location).toEqual(90210);
	});

	test("should calculate user bmi", () => {
		individualWaterIntake.height = 69;
		individualWaterIntake.weight = 170;
		individualWaterIntake.calculateUserBmi(69, 170);
		expect(individualWaterIntake.bmi).toEqual(25.1)
	});  
	
	test("should calculate hydration goal", () => {
		individualWaterIntake.gender = false;
		individualWaterIntake.height = 67;
		individualWaterIntake.weight = 180;
		individualWaterIntake.age = 25; 
		individualWaterIntake.caffeineIntake = 3;
		individualWaterIntake.activity = true; 		
		individualWaterIntake.temperature = 90;
		individualWaterIntake.humidity = 75;
		individualWaterIntake.calculateHydrationGoal();
		expect(individualWaterIntake.hydrationGoal).toEqual(16);
	});
});