import { IndividualWaterIntake } from "../src/water-intake-calculation";
import { JestEnvironment } from "@jest/environment";
import { exportAllDeclaration, jsxText } from "@babel/types";

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
});