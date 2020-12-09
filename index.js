const readlineSync = require("readline-sync");
const chalk = require('chalk');

let userName;
let score = 0;

const marvelQuestions=[{
    question:"WHERE IS WAKANDA LOCATED?  ",
    options: ['South America','Parallel Universe','Africa','Norway'],
    answer: "Africa",
},{
    question:"THOR’S HAMMER MJÖLNIR IS MADE OF METAL FROM THE HEART OF A DYING WHAT? ",
    options: ['Asteroid','Comet','Star','Black Hole'],
    answer: "Star",
},{
    question:"WHAT IS THE NAME OF THE VILLAIN IN ANT-MAN?  ",
    options: ['Scorpion','Yellowjacket','Hornet','Serpent'],
    answer: "Yellowjacket",
},{
    question:"WHAT IS THE NAME OF THE SET OF DOCUMENTS THAT REGULATE THE ACTIVITIES OF ENHANCED PERSONS? ",
    options: ['Sokovia Records','Wakanda Records','Stark Records','Paris Records'],
    answer: "Sokovia Records",
},{
    question:"WHAT IS THE NAME OF STAR-LORD/PETER QUILL’S MOTHER? ",
    options: ['Margaret','Meredith','Madeline','Matilda'],
    answer: 'Meredith',
},{
    question:"WHICH OF THE FOLLOWING IS NOT ON CAPTAIN AMERICA’S TO-DO LIST IN CAPTAIN AMERICA: THE WINTER SOLDIER? ",
    options: ['Disco','Thai Food','Miracle on Ice','Moon landing'],
    answer: "Miracle on Ice",
},{
    question:"IN ANT-MAN, SCOTT LANG IS FIRED FROM HIS JOB DOING WHAT? ",
    options: ['Scooping ice cream','Selling T-shirts','Bagging groceries','Making coffee'],
    answer: "Scooping ice cream",
},{
    question:"WHAT “ONE THING ON EARTH” IS PEPPER POTTS ALLERGIC TO? ",
    options: ['Blueberries','Raspberries','Grapes','Strawberries'],
    answer: "Strawberries",
},{
    question:"WHAT DO HAWKEYE AND BLACK WIDOW REMEMBER “VERY DIFFERENTLY”? ",
    options: ['Budapest','Wakanda','The Bifrost Bridge Event','The Klaw Incident'],
    answer: "Budapest",
},]

const friendsQuestions = [{
    question:"For a brief amount of time, Joey and Chandler weren't roommates. Who replaces Joey as Chandler's new roommate? ",
    options: ['Drunk Bobby','Eddie','Russ','Tracy'],
    answer: "Eddie",
},{
    question:"What did Ross name his pet monkey?  ",
    options: ['Marcella','Marcel','Marciel','Macarena'],
    answer: "Marcel",
},{
    question:"Rachel-Monica are up against Chandler-Joey in a show-style game contest. The competition is getting tough the girls have bet their apartment while the boys vow to_____ if they lose ",
    options: ['Teach them how to play poker.','Give away the rooster and the duck','Gift them their recliners','All of the above'],
    answer: "Give away the rooster and the duck",
},{
    question:"We all know that Joey's soulmate was his recliner. Do you happen to remember his precious chair's name? ",
    options: ['Rosette','Rose','Rosita','Rossalie'],
    answer: "Rosita",
},{
    question:"Rachel and Chandler are obsessed with this New York Style cheesecake which was for their neighbour, Mrs. Braverman. Which bakery accidentally delivers the cheesecake to Chandler's address? ",
    options: ['Mamma\'s Little Bakery','The Cheesecake Factory','Granny\'s Cafe','IHOP'],
    answer: "Mamma\'s Little Bakery",
},{
    question:"So Phoebe officially changes her name to Princess Consuela Banana Hammock and 'inspired' by this Mike changes his name to? ",
    options: ['Shit Head','Crap Bag','Prince Carppity Bull','Mr. Consuela Banana Hammock'],
    answer: "Crap Bag",
},{
    question:"How many times has Ross Geller been married and divorced? ",
    options: ['Married thrice, two divorces, one annulment','Married and divorced thrice','Married thrice, two divorces and a separation','TBH, I have lost count'],
    answer: "Married and divorced thrice",
},{
    question:"While discussing her worst Thanksgiving, Monica reveals that she 'accidentally' cuts off Chandler's toe in the past. Would you happen to remember what she was cooking for him? ",
    options: ['Mac n cheese','Beef Trifle','Monica\'s famous lasagna','Mockolate'],
    answer: "Mac n cheese",
},]


userName = readlineSync.question("What is your name ? ");
// user must be provided with a list of quizes to choose from
const quizChoice = readlineSync.keyIn(chalk.cyan(`Welcome ${userName}, which quiz would you like to play?\n1. F.R.I.E.N.D.S\n2. Marvel\n\n`),{limit:'$<1-2>'});

// iterates througth the arrayOfQuestions and asks the question and validates the answer accordingly
const askQuestion = (questions) => {
    for(let i=0; i < questions.length; i++){
        const userInput = readlineSync.keyIn(`${chalk.bgWhite.black.bold(`Question ${i + 1}/${questions.length}`)}\n${questions[i].question}\n${questions[i].options.map((option, index)=>`${index + 1}. ${option}\n`).join('')}`,{limit: '$<1-4>'});

        // compares the select option value with the right answer
        if(questions[i].options[userInput - 1] == questions[i].answer){
            console.log(chalk.bgCyan.bold('You\'re correct!!\n'));
            score += 1;
        }else{
            console.log(chalk.bgRed.bold('You\'re wrong!!\n'));
        }		
    }  

    console.log("You're final score is: ", score," out of ", questions.length);
    if(questions.length - 2 < score){
        console.log('You just made a new highscore!!!!');
        if(+quizChoice === 1){
            console.log(chalk.bgGreen.black.bold('Congratulations, you are a certified, true F.R.I.E.N.D.S fan! Now go celebrate by buying some Coffee in Central Perk.'))
        }else if(+quizChoice === 2){
            console.log(chalk.bgGreen.black.bold('Congratulations, you are a certified, true Marvel Cinematic Universe fan! Now go celebrate by buying some Vibranium.'))
        }
    }
}

// takes the arrayOfQuestions
askQuestion(+quizChoice === 1?friendsQuestions:+quizChoice===2?marvelQuestions:null);



// exists the code
process.exit(0);