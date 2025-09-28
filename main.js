
let currentDifficulty = null;
let currentNum = null;
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let time = 0;

const questions = {
    easy: [
        {question: "How much percentage of Earth’s surface is covered by water?", options: ["51%", "61%", "91%", "71%"], correct: 3},
        {question: "What was Martin Luther King Jr's famous speech commonly referred to as?", options: ["I have a dream", "Freedom Fighters", "Dead and Evil", "Rise Up"], correct: 0},
        {question: "Who directed the film 'Schindler’s List'?", options: ["Steven Spielberg", "Martin Scorsese", "Michael Jackson", "Christopher Nolan"], correct: 0},
        {question: "In the film 'The Shawshank Redemption,' what is the name of the main character played by Tim Robbins?", options: ["Andy Dufresne", "Red", "Ellis Boyd 'Red' Redding", "Warden Norton"], correct: 0},
        {question: "Who won the Academy Award for Best Actress for her role in 'La La Land'?", options: ["Emma Stone", "Meryl Streep", "Jennifer Lawrence", "Natalie Portman"], correct: 0},
        {question: "Which is the highest-grossing animated film of all time?", options: ["Toy Story 4", "Avatar", "Frozen 2", "The Lion King"], correct: 3},
        {question: "In which year was the first Academy Awards ceremony held?", options: ["1927", "1932", "1929", "1951"], correct: 2},
        {question: "Who played Jack Dawson in 'Titanic'?", options: ["Leonardo DiCaprio", "Tom Hanks", "Brad Pitt", "Matt Damon"], correct: 0},
        {question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2},
        {question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: 1},
        {question: "In which year did the Titanic sink?", options: ["1905", "1912", "1920", "1931"], correct: 1},
        {question: "Which is the largest planet in our solar system?", options: ["Mars", "Jupiter", "Saturn", "Venus"], correct: 1},
        {question: "Two countries have enclaves in Italy. Which ones?", options: ["Argentina and Paraguay", "Austria and Germany", "San Marino and Vatican City", "Azerbaijan and Armenia"], correct: 2},
        {question: "What is the capital of Japan?", options: ["Beijing", "Tokyo", "Seoul", "Bangkok"], correct: 1},
        {question: "What is the currency of Australia?", options: ["Euro", "Dollar", "Peso", "Yen"], correct: 1},
        {question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1},
        {question: "What is the largest ocean on Earth?", options: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"], correct: 2},
        {question: "Who was the first elected President of the United States?", options: ["Barack Obama", "John Adams", "George Washington", "Abraham Lincoln"], correct: 2},
        {question: "What is the largest mammal in the world?", options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"], correct: 1},
        {question: "Who wrote 'To Kill a Mockingbird'?", options: ["J.K. Rowling", "Harper Lee", "Sam Smith", "F Scott Fitzgerald"], correct: 1},
        {question: "Which famous scientist developed the theory of relativity?", options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"], correct: 2},
        {question: "In which year did World War II end?", options: ["1943", "1945", "1950", "1939"], correct: 1},
        {question: "Which is the largest desert in the world?", options: ["Sahara Desert", "Gobi Desert", "Antarctica", "Arctic Desert"], correct: 2},
        {question: "Capital of Morocco?", options: ["New York", "Casablanca", "Fes", "Rabat"], correct: 3},
        {question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Gold", "Osmium", "Ozone"], correct: 0},
        {question: "What is 5 x 6?", options: ["11", "25", "30", "35"], correct: 2},
        {question: "What is the freezing point of water?", options: ["0°C", "100°C", "32°C", "50°C"], correct: 0},
        {question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Korea", "Thailand"], correct: 1},
        {question: "Which gas do humans need to breathe?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"], correct: 1},
        {question: "What color is a ripe banana?", options: ["Red", "Green", "Yellow", "Blue"], correct: 2},
        {question: "What is 12 ÷ 4?", options: ["2", "3", "4", "5"], correct: 1},
        {question: "Which animal is known as 'Man’s Best Friend'?", options: ["Cat", "Dog", "Horse", "Rabbit"], correct: 1},
        {question: "How many days are in a leap year?", options: ["364", "365", "366", "367"], correct: 2},
        {question: "What do bees make?", options: ["Milk", "Honey", "Wax", "Oil"], correct: 1},
        {question: "How many continents are there?", options: ["5", "6", "7", "8"], correct: 2},
        {question: "Which fruit is known as the King of Fruits?", options: ["Apple", "Banana", "Mango", "Orange"], correct: 2},
        {question: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], correct: 0},
        {question: "Which shape has three sides?", options: ["Square", "Triangle", "Rectangle", "Pentagon"], correct: 1}
    ],
    medium: [
        {question: "What is the name of the 1994 film directed by Quentin Tarantino?", options: ["Reservoir Dogs", "Pulp Fiction", "Jackie Brown", "Kill Bill"], correct: 1},
        {question: "In 'Jurassic Park' (1993), which dinosaur is shown first?", options: ["Tyrannosaurus Rex", "Velociraptor", "Triceratops", "Brachiosaurus"], correct: 3},
        {question: "Which 1995 film directed by Bryan Singer involves a mysterious murder?", options: ["Reservoir Dogs", "The Usual Suspects", "Se7en", "Heat"], correct: 1},
        {question: "What 1999 sci-fi film directed by the Wachowskis explored simulated reality?", options: ["Inception", "The Truman Show", "The Matrix", "Dark City"], correct: 2},
        {question: "Who directed 'Fight Club'?", options: ["Quentin Tarantino", "David Fincher", "Martin Scorsese", "Christopher Nolan"], correct: 1},
        {question: "Which 1998 drama explored racism and redemption starring Edward Norton?", options: ["Pulp Fiction", "American History X", "Heat", "Crash"], correct: 1},
        {question: "Which 1994 film by Robert Zemeckis won Best Picture?", options: ["Pulp Fiction", "Schindler's List", "Forrest Gump", "The Shawshank Redemption"], correct: 2},
        {question: "What is the only mammal capable of true flight?", options: ["Flying fox", "Colugo", "Flying squirrel", "Bat"], correct: 3},
        {question: "Which animal has the largest brain relative to body size?", options: ["Elephant", "Sperm whale", "Dolphin", "Gorilla"], correct: 2},
        {question: "Which bird mimics chainsaws?", options: ["Mockingbird", "Lyrebird", "Parrot", "Starling"], correct: 1},
        {question: "What is the boiling point of water at sea level?", options: ["90°C", "100°C", "110°C", "120°C"], correct: 1},
        {question: "What is the square root of 144?", options: ["10", "11", "12", "13"], correct: 2},
        {question: "Which element has the symbol 'Na'?", options: ["Nitrogen", "Sodium", "Neon", "Nickel"], correct: 1},
        {question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correct: 2},
        {question: "What is the chemical formula for water?", options: ["H2", "O2", "H2O", "CO2"], correct: 2},
        {question: "Which blood type is universal donor?", options: ["A", "B", "AB", "O-"], correct: 3},
        {question: "Which country invented pizza?", options: ["France", "USA", "Italy", "Greece"], correct: 2},
        {question: "Which ocean is the smallest?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], correct: 3},
        {question: "How many bones in the adult human body?", options: ["202", "206", "210", "212"], correct: 1},
        {question: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Quartz"], correct: 2},
        {question: "Which Shakespeare play features Romeo and Juliet?", options: ["Hamlet", "Macbeth", "Romeo and Juliet", "King Lear"], correct: 2},
        {question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], correct: 2},
        {question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], correct: 1},
        {question: "Which part of the plant carries out photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"], correct: 2},
        {question: "What is the chemical symbol for Gold?", options: ["Gd", "Go", "Au", "Ag"], correct: 2},
        {question: "Which scientist discovered gravity?", options: ["Galileo", "Newton", "Einstein", "Copernicus"], correct: 1},
        {question: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"], correct: 2},
        {question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"], correct: 2},
        {question: "Which instrument measures earthquakes?", options: ["Barometer", "Seismograph", "Thermometer", "Hygrometer"], correct: 1},
        {question: "Which desert covers much of Northern Africa?", options: ["Gobi", "Sahara", "Kalahari", "Atacama"], correct: 1}
    ],
    hard: [
        {question: "When were the first Winter Olympic Games held?", options: ["1954", "1890", "1924", "1974"], correct: 2},
        {question: "Which language has the longest alphabet?", options: ["Russian", "Japanese", "Hindi", "Khmer"], correct: 3},
        {question: "In what country was the first paper money used?", options: ["Greece", "Turkey", "China", "Iran"], correct: 2},
        {question: "What was the first toy advertised on television?", options: ["Barbie", "Dominoes", "Polly Pocket", "Mr. Potato Head"], correct: 3},
        {question: "Which African country has the most pyramids?", options: ["Egypt", "Sudan", "Uganda", "Ethiopia"], correct: 1},
        {question: "Who started the Protestant Reformation?", options: ["John Calvin", "Martin Luther", "William Tyndale", "John Knox"], correct: 1},
        {question: "Who was the first Roman emperor?", options: ["Caligula", "Nero", "Augustus", "Tiberius"], correct: 2},
        {question: "What was the first state established in the USA?", options: ["Pennsylvania", "New York", "Delaware", "Rhode Island"], correct: 2},
        {question: "Which river is the longest that flows only in one country?", options: ["Amazon", "Ganges", "Nile", "Yangtze"], correct: 3},
        {question: "Which continent is home to Iguazu Falls?", options: ["Asia", "South America", "Australia", "Africa"], correct: 1},
        {question: "Who was the US president during the Cuban Missile Crisis?", options: ["Kennedy", "Eisenhower", "Johnson", "Nixon"], correct: 0},
        {question: "Which event triggered World War I?", options: ["Archduke Franz Ferdinand assassination", "German invasion of Belgium", "Sinking of Lusitania", "Naval blockade of Britain"], correct: 0},
        {question: "Which plague devastated Europe in the 1300s?", options: ["The Great Plague", "The Black Death", "The Reckoning", "The Final Plague"], correct: 1},
        {question: "Which city is home to the Brandenburg Gate?", options: ["Vienna", "Zurich", "Berlin", "Salzburg"], correct: 2},
        {question: "Who signed all 3 documents that freed America from British rule?", options: ["George Washington", "Thomas Jefferson", "Alexander Hamilton", "Benjamin Franklin"], correct: 3},
        {question: "Which country invented gunpowder?", options: ["China", "India", "Germany", "Egypt"], correct: 0},
        {question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Mars", "Uranus"], correct: 1},
        {question: "What is the currency of Switzerland?", options: ["Euro", "Dollar", "Franc", "Pound"], correct: 2},
        {question: "Which scientist proposed the heliocentric theory?", options: ["Galileo", "Copernicus", "Kepler", "Newton"], correct: 1},
        {question: "What is the capital of Mongolia?", options: ["Astana", "Tashkent", "Ulaanbaatar", "Bishkek"], correct: 2},
        {question: "Which war was fought between the North and South regions of the US?", options: ["Revolutionary War", "Civil War", "Cold War", "World War I"], correct: 1},
        {question: "What is the oldest written language still in use?", options: ["Latin", "Sanskrit", "Chinese", "Greek"], correct: 2},
        {question: "Which country built the first railways?", options: ["USA", "Germany", "UK", "France"], correct: 2},
        {question: "What was the Apollo 11 mission famous for?", options: ["First manned Moon landing", "Mars landing", "First space station", "Sputnik launch"], correct: 0},
        {question: "Which organ in the body produces insulin?", options: ["Liver", "Pancreas", "Kidney", "Heart"], correct: 1},
        {question: "What is the chemical symbol for Uranium?", options: ["Ur", "Un", "U", "Um"], correct: 2},
        {question: "Which ocean is the deepest?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], correct: 1},
        {question: "What year did the Berlin Wall fall?", options: ["1985", "1987", "1989", "1991"], correct: 2},
        {question: "Who was known as the Iron Lady?", options: ["Margaret Thatcher", "Angela Merkel", "Indira Gandhi", "Golda Meir"], correct: 0},
        {question: "What is the largest moon of Saturn?", options: ["Europa", "Titan", "Ganymede", "Callisto"], correct: 1}
    ]
};


function selectDifficulty(diff) {
    document.querySelectorAll('.diffBtn').forEach(btn => btn.classList.remove('btn-selected'));
    event.target.classList.add('btn-selected');
    currentDifficulty = diff;
    
    // Update difficulty color in results
    const difficultyElement = document.getElementById('resDifficulty');
    difficultyElement.className = '';
    if (diff === 'easy') {
        difficultyElement.classList.add('difficulty-easy');
    } else if (diff === 'medium') {
        difficultyElement.classList.add('difficulty-medium');
    } else {
        difficultyElement.classList.add('difficulty-hard');
    }
    difficultyElement.textContent = diff.charAt(0).toUpperCase() + diff.slice(1);
}

function selectNum(num) {
    document.querySelectorAll('.numBtn').forEach(btn => btn.classList.remove('btn-selected'));
    event.target.classList.add('btn-selected');
    currentNum = num;
}

function startQuiz() {
    if (!currentDifficulty || !currentNum) {
        alert('Please select difficulty and number of questions.');
        return;
    }
    const allQuestions = questions[currentDifficulty];
    selectedQuestions = shuffle([...allQuestions]).slice(0, currentNum);
    currentQuestionIndex = 0;
    score = 0;
    time = 0;
    showPage('quizPage');
    loadQuestion();
    startTimer();
    document.getElementById('score').innerText = score + '/' + currentNum;
    updateProgressBar();
}

function loadQuestion() {
    document.getElementById('quizNum').innerText = currentQuestionIndex + 1;
    document.getElementById('questionText').innerText = selectedQuestions[currentQuestionIndex].question;
    
    // Clear previous options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    // Create new option buttons
    selectedQuestions[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'btn option-btn';
        button.innerText = option;
        button.onclick = () => onAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    document.getElementById('next').disabled = true;
    updateProgressBar();
}

function onAnswer(selectedIndex) {
    const correctIndex = selectedQuestions[currentQuestionIndex].correct;
    const optionBtns = document.querySelectorAll('.option-btn');
    
    optionBtns.forEach((btn, index) => {
        btn.disabled = true;
        if (index === correctIndex) {
            btn.classList.add('correct');
            btn.innerHTML = `<i class="bi bi-check-circle-fill me-2"></i>${btn.innerText}`;
        }
        if (index === selectedIndex && index !== correctIndex) {
            btn.classList.add('incorrect');
            btn.innerHTML = `<i class="bi bi-x-circle-fill me-2"></i>${btn.innerText}`;
        }
    });
    
    if (selectedIndex === correctIndex) {
        score++;
    }
    
    document.getElementById('score').innerText = score + '/' + currentNum;
    document.getElementById('next').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentNum) {
        loadQuestion();
    } else {
        stopTimer();
        showResults();
    }
}

function showResults() {
    document.getElementById('resDifficulty').innerText = currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1);
    document.getElementById('resScore').innerText = score + '/' + currentNum;
    document.getElementById('resTime').innerText = formatTime(time);
    
    const messageElement = document.getElementById('resMessage');
    if (score >= currentNum / 2) {
        messageElement.className = 'good-message';
        messageElement.innerText = 'Excellent Work!';
    } else {
        messageElement.className = 'bad-message';
        messageElement.innerText = 'Keep Practicing!';
    }
    
    showPage('resultsPage');
}

function restart() {
    currentDifficulty = null;
    currentNum = null;
    document.querySelectorAll('.btn-selected').forEach(btn => btn.classList.remove('btn-selected'));
    showPage('startPage');
}

function startTimer() {
    timerInterval = setInterval(() => {
        time++;
        document.getElementById('time').innerText = formatTime(time);
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return mins + ':' + secs;
}

function showPage(pageId) {
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('quizPage').style.display = 'none';
    document.getElementById('resultsPage').style.display = 'none';
    document.getElementById(pageId).style.display = 'block';
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex) / currentNum) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
