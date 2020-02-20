# Water tacker 

#### _Team week project_, _17th Feb. 2020_

#### By _**Keturah Howard, Dana Luukko, Kristina Hengster Tintor and Stephanie Podolak**_

## Description



## Specifications:


| Specification | Example Input | Example Output |
| :------------- |:-------------| :-------------------|
| User completes the form with personal information | <p>your name: Phil <p> <p>Your age: 35</p> <p>Select the preferred calculation method:bmi</p> <p>Your height (in inches):100</p> <p>Your weight (in pounds): 160</p> <p>How much coffee do you drink in a day? 1-2</p> <p>Do you lead an active lifestyle?</p> <p>City: Portland</p> <p>State: Oregon| <p>your name: Phil <p> <p>Your age: 35</p> <p>Select the preferred calculation method:bmi</p> <p>Your height (in inches):100</p> <p>Your weight (in pounds): 160</p> <p>How much coffee do you drink in a day? 1-2</p> <p>Do you lead an active lifestyle?</p> <p>City: Portland</p> <p>State: Oregon</p> |
| User submits the form and the Select Personal Goal page is displayed, showing the recommended water intake| User clicks on the "Submit info" button| <p>Page displays:</p> <p>Based on your information, we recommend drinking 96 Oz of water today.</p> |
| <p>User types in the following and submits the form: </p> <p>- Desired water intake goal in oz - can be the recommended goal or a random goal </p> <p>- Size of their water bottle</p>| <p>Enter your daily goal: 96 oz</p> <p>Enter your waterbottle size in oz: 4</p> <p>User clicks on the "Start Tracking!" button</p>| Application collects the information and displays the tracking page|
| In the Tracking Page, user clicks the Add Water button to show the field where they can add how much water they drank | *click the "Add Water" button* | Number input field is displayed along with the add water button |
| User logs how much water they drank in oz and clicks the "add water" button | <p>User types: 5</p> <p>*clicks "add water" button*</p>| Blue indicator in the progress bar increases and text is displayed showing the oz drank so far |
| User is congradulated when they reach goal and the fish appear| User reaches water intake goal | Confetti and a new fish appears in the background along with a message: 'You did it!!' |






## Setup/Installation Requirements

  1. Click on the *clone or download* button of this repository. You can download the project file clicking the **"Download Zip"** button, double clicking the file in downloads, and navigating to the index.html file and double clicking that. *Or*, you can copy the link that pops up when you've clicked the *clone or download* button above this README.md file.
  2. Navigate to your terminal, where you have previously installed git (if you have not done this yet, go ahead and do so now).
  3. In terminal, change your directory to desktop, and then type **git clone https://github.com/**.
  4. When you've pressed enter, my project will be cloned onto your desktop, and now you can change directory into it and type **"code ."** to open the projects files in Visual Studio Code!

_Next, install npm in the project directory_

5. At the root directory for this project, enter the command "npm install"
6. Open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code, enter the command "code ." in the Terminal).
7. Open index.html in a browser of your choice (e.g., Google Chrome).

_Installing you're own API key:_
1. generate your individual API key by signing up for one on [this website](https://developer.betterdoctor.com/)
2. Place your new API in an .env file at the top level of your directory (which you will create through either the terminal by changing directory intp the project and typing 'touch .env' or through right clicking over the project name on the left-heand side of VSCode interface and typing .env). Set it equal to what you'll call it by later- spelling and capitialization all identical. For example, I called it by ${process.env.API\_KEY}, so in my .env file its looks like 'API_KEY = xxxxxxxxxx', where the x's are my key. for your convenience, just set the API reference to the same format in your .env file so you dont have to change it in the doctors.js file.

## Technologies Used

* Git
* HTML
* CSS
* JavaScript
* jQuery
* npm
* webpack
* babel
* ESlint
* Jest
* VS Code
* Bootstrap
* Dotenv
* Foundation
* CodePen
* GSAP - GreenSock

## Known Bugs
Currently there are no known bugs. 

## Contact Info 
Currently there sre no known bugs, however, if there are any issues running this website I would love feedback! Please email me at keturah.dev@gmail.com.

## License

This HTML web page is licensed under the MIT license.

## Copyright

Copyright (c) 2020 Keturah Howard, Dana Luukko, Kristina Hengster Tintor and Stephanie Podolak.