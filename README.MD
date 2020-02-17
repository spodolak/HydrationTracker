# Water tacker 

#### _Team week project_, _17th Feb. 2020_

#### By _**Keturah Howard, Dana Luukko, Kristina Hengster Tintor and Stephanie Podolak**_

## Description



## Specifications:


| Specification | Example Input | Example Output |
| ------------- |:-------------:| -------------------:|
| Start new goal tracking | enter name (phil) - start | Welcome phil |
| User selects personal daily goal | please enter your goal | 70 oz |
| assaign water bottle size | What size is your water bottle? | Bottle 1: 30 oz |
| User can add multiple water bottle sizes | *click button for adding another waterbottle size* | Bottle 2: ___  |
| User clicks 'done', gets taken to water tracking page | *click done* | form page closes and water tracking page opens |
| User can log how much water they just drank | *click water button, selects how much they drank* | vis.rep. for reaching goal gets bigger |
| User can see the time stamp of their last water intake | *user is idle* | * in corner * 'last water intake: 1:24 pm'|
| User is congradulated when they reach goal | *user reaches water intake goal* | *confetti, changing colors* 'You did it!!'|
| User's water intake amount is reset to zero at midnight | *time: 11:59* '50oz logged' | *time: 12:00* '0 oz logged'|






## Setup/Installation Requirements

  1. Click on the *clone or download* button of this repository. You can download the project file clicking the **"Download Zip"** button, double clicking the file in downloads, and navigating to the index.html file and double clicking that. *Or*, you can copy the link that pops up when you've clicked the *clone or download* button above this README.md file.
  2. Navigate to your terminal, where you have previously installed git (if you have not done this yet, go ahead and do so now).
  3. In terminal, change your directory to desktop, and then type **"git clone https://github.com/**.
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


## Known Bugs
Currently there are no known bugs. 

## Contact Info 
Currently there sre no known bugs, however, if there are any issues running this website I would love feedback! Please email me at keturah.dev@gmail.com.

## License

This HTML web page is licensed under the MIT license.

## Copyright

Copyright (c) 2020 Keturah Howard, Dana Luukko, Kristina Hengster Tintor and Stephanie Podolak.