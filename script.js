let math;
let randomWeather = Math.floor(Math.random() * 20 + 10);
let problem = false;
let randomProblemNum = Math.floor(Math.random() * 3);
let traffic = "bad. There are so many cars everywhere! The streets are bustling!"
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const dayName = dayNames[dayOfWeek];
var d = new Date();
var month = d.toLocaleString('default', { month: 'long' });
var d = new Date();
var year = d.getFullYear();




// Checking if Enter is pressed
function isEnter(){
   var TextBox_val = document.getElementById("InputBox").value;
   if (TextBox_val != ""){
        if(event.keyCode == 13)
            main();
   }
}


function main(){
   
    var TextBox_val = document.getElementById("InputBox").value;
    var ResponseText_val = document.getElementById("ResponseText");
    var FormatInput = TextBox_val.toLowerCase().trim(); //convert our given input to lowercase
    
    
    if (FormatInput.includes("hi") && problem == false) ResponseText_val.innerHTML = "Hello! How can I help you?";
    else if (FormatInput.includes("sup") && problem == false) ResponseText_val.innerHTML = "I am perfectly fine! What about you?";
    else if (FormatInput.includes("hello") && problem == false) ResponseText_val.innerHTML = "Hello!";
    else if (FormatInput.includes("hey") && problem == false) ResponseText_val.innerHTML = "Hello! What's up my dude? How could I help you?";
    else if (FormatInput.includes("bye") && problem == false) ResponseText_val.innerHTML = "It was so nice meeting you! Have a nice day :)";
    else if (FormatInput.includes("thank") && problem == false) ResponseText_val.innerHTML = "I am so happy for helping you :)";
    else if (FormatInput.includes("ty") && problem == false) ResponseText_val.innerHTML = "I am so happy for helping you :)";
    else if (FormatInput.includes("help") && problem == false) ResponseText_val.innerHTML = "How can I help you?";
    else if (FormatInput.includes("yes") && problem == false) ResponseText_val.innerHTML = "Ok, How can I help you?";
    //else if (FormatInput = "help") ResponseText_val.innerHTML = "Ok, can you please tell me what do you need help with?";
    else if (FormatInput.includes("idk") && problem == false) ResponseText_val.innerHTML = "Do you need me to provide more information or do something?";
    //else if (FormatInput = "yo") ResponseText_val.innerHTML = "Hello! What's up my dude? How could I help you?";

    else if (FormatInput.includes("open youtube")) {
        ResponseText_val.innerHTML = "Opening Youtube!";
        window.open("https://www.youtube.com", "_blank");
    }
    else if (FormatInput.includes("go to youtube")) {
        ResponseText_val.innerHTML = "Opening Youtube!";
        window.open("https://www.youtube.com", "_blank");
    }
    else if (FormatInput.includes("open google")) {
        ResponseText_val.innerHTML = "Opening Google!";
        window.open("https://www.google.com", "_blank");
    }
    else if (FormatInput.includes("go to google")) {
        ResponseText_val.innerHTML = "Opening Google!";
        window.open("https://www.google.com", "_blank");
    }
    else if (FormatInput.includes("open github")) {
        ResponseText_val.innerHTML = "Opening GitHub!";
        window.open("https://www.github.com", "_blank");
    }
    else if (FormatInput.includes("go to github")) {
        ResponseText_val.innerHTML = "Opening GitHub!";
        window.open("https://www.github.com", "_blank");
    }
    else if (FormatInput.includes("open wiki")) {
        ResponseText_val.innerHTML = "Opening Wikipedia!";
        window.open("https://www.wikipedia.org", "_blank");
    }
    else if (FormatInput.includes("go to wiki")) {
        ResponseText_val.innerHTML = "Opening Wikipedia!";
        window.open("https://www.wikipedia.org", "_blank");
    }
    else if (FormatInput.includes("open yt")) {
        ResponseText_val.innerHTML = "Opening Youtube!";
        window.open("https://www.youtube.com", "_blank");
    }
    else if (FormatInput.includes("m") && FormatInput.includes("good")) ResponseText_val.innerHTML = "I am happy to hear that!";
    else if (FormatInput.includes("m") && FormatInput.includes("gut")) ResponseText_val.innerHTML = "I am happy to hear that!";
    else if (FormatInput.includes("m") && FormatInput.includes("goot")) ResponseText_val.innerHTML = "I am happy to hear that!";
    else if (FormatInput.includes("good")) ResponseText_val.innerHTML = "I am happy to hear that!";
    else if (FormatInput.includes("gout")) ResponseText_val.innerHTML = "I am happy to hear that!";
    else if (FormatInput.includes("goot")) ResponseText_val.innerHTML = "I am happy to hear that!";
    else if (FormatInput.includes("ok")) ResponseText_val.innerHTML = "Thank you!";

    else if (FormatInput.includes("are") && FormatInput.includes("stupid")) ResponseText_val.innerHTML = "That offends me! Please don't say it again :)";
    else if (FormatInput.includes("of course")) ResponseText_val.innerHTML = "By the way is there anything you need help with? I can totally help you!";
    else if (FormatInput.includes(":)")) ResponseText_val.innerHTML = "Yeah that's it! You seem happy too!";
    else if (FormatInput.includes("yeah")) ResponseText_val.innerHTML = "Of course! Let's go! I am hearing!";
    else if (FormatInput.includes("oh")) ResponseText_val.innerHTML = "Yeah, sadly.";
    else if (FormatInput.includes("shut up")) ResponseText_val.innerHTML = "That offends me! Please don't say it again :)";
    else if (FormatInput.includes("asshole")) ResponseText_val.innerHTML = "That offends me! Please don't say it again :)";
    else if (FormatInput.includes("bitch")) ResponseText_val.innerHTML = "That offends me! Please don't say it again :)";
    else if (FormatInput.includes("dick")) ResponseText_val.innerHTML = "That offends me! Please don't say it again :)";
    else if (FormatInput.includes("motherfucker")) ResponseText_val.innerHTML = "That offends me! Please don't say it again :)";
    else if (FormatInput.includes("no")) ResponseText_val.innerHTML = "Okay! That's cool. You can do whatever you want!";
    else if (FormatInput.includes("nah")) ResponseText_val.innerHTML = "Okay! That's cool. You can do whatever you want!";
    else if (FormatInput.includes("don") && FormatInput.includes("thin")) ResponseText_val.innerHTML = "Okay! That's cool. You can do whatever you want!";
    
    else if (FormatInput.includes("old") && FormatInput.includes("u")) ResponseText_val.innerHTML = "To be honest, I am 1 year old! This is because I was coded 1 year ago.";
    else if (FormatInput.includes("you like")){

        
        ResponseText_val.innerHTML = "Yes of course I do! What? Don't tell me that you expected me not to!";

    } 




    //maths
   /* else if (FormatInput.includes("solve")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        ResponseText_val.innerHTML = "The answer to " + math + " is " + eval(math) + ".";

    
    }
    else if (FormatInput.includes("evaluate")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        ResponseText_val.innerHTML = "The answer to " + math + " is " + eval(math) + ".";

    
    }
    else if (FormatInput.includes("calculate")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        ResponseText_val.innerHTML = "The answer to " + math + " is " + eval(math) + ".";

    
    }
    else if (FormatInput.includes("what is")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        ResponseText_val.innerHTML = "The answer to " + math + " is " + eval(math) + ".";

    
    }
    else if (FormatInput.includes("math")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        ResponseText_val.innerHTML = "The answer to " + math + " is " + eval(math) + ".";

    
    }
  
    else if (FormatInput.includes("solution")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        ResponseText_val.innerHTML = "The answer to " + math + " is " + eval(math) + ".";

    
    } */

    else if (FormatInput.includes("1")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        ResponseText_val.innerHTML = "The answer to " + math + " is " + eval(math) + ".";

    
    }
    else if (FormatInput.includes("2")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        ResponseText_val.innerHTML = "The answer to " + math + " is " + eval(math) + ".";

    
    }
    else if (FormatInput.includes("3")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        ResponseText_val.innerHTML = "The answer to " + math + " is " + eval(math) + ".";

    
    }
    else if (FormatInput.includes("4")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        ResponseText_val.innerHTML = "The answer to " + math + " is " + eval(math) + ".";

    
    }
    else if (FormatInput.includes("5")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        ResponseText_val.innerHTML = "The answer to " + math + " is " + eval(math) + ".";

    
    }
    else if (FormatInput.includes("6")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        ResponseText_val.innerHTML = "The answer to " + math + " is " + eval(math) + ".";

    
    }
    else if (FormatInput.includes("7")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        ResponseText_val.innerHTML = "The answer to " + math + " is " + eval(math) + ".";

    
    }
    else if (FormatInput.includes("8")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        ResponseText_val.innerHTML = "The answer to " + math + " is " + eval(math) + ".";

    
    }
    else if (FormatInput.includes("9")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        ResponseText_val.innerHTML = "The answer to " + math + " is " + eval(math) + ".";

    
    }
    else if (FormatInput.includes("square root")){
        math = FormatInput.replace(/[a-zA-Z]/g, "");
        console.log(math);
        if (math == FormatInput){
            ResponseText_val.innerHTML = "The square root of " + math + " is " + Math.sqrt(math);
        }
    
    }
  
    
    // weather

    else if (FormatInput.includes("how") && FormatInput.includes("weather")){
        
        if(randomWeather <= 15){
            ResponseText_val.innerHTML = "The weather in your place is " + randomWeather + " degrees. Pretty cold huh?";
        }

        if(randomWeather > 15){
            ResponseText_val.innerHTML = "The weather in your place is " + randomWeather + " degrees. It's not that cold, you are lucky.";
        }

        

    
    }
    else if (FormatInput.includes("bad") && FormatInput.includes("weather")){
        
        if(randomWeather <= 15){
            ResponseText_val.innerHTML = "The weather in your place is " + randomWeather + " degrees. Pretty cold huh?";
        }

        if(randomWeather > 15){
            ResponseText_val.innerHTML = "The weather in your place is " + randomWeather + " degrees. It's not that cold, you are lucky.";
        }

        

    
    }
    else if (FormatInput.includes("good") && FormatInput.includes("weather")){
        
        if(randomWeather <= 15){
            ResponseText_val.innerHTML = "The weather in your place is " + randomWeather + " degrees. Pretty cold huh?";
        }

        if(randomWeather > 15){
            ResponseText_val.innerHTML = "The weather in your place is " + randomWeather + " degrees. It's not that cold, you are lucky.";
        }

        

    
    }
    else if (FormatInput.includes("medium") && FormatInput.includes("weather")){
        
        if(randomWeather <= 15){
            ResponseText_val.innerHTML = "The weather in your place is " + randomWeather + " degrees. Pretty cold huh?";
        }

        if(randomWeather > 15){
            ResponseText_val.innerHTML = "The weather in your place is " + randomWeather + " degrees. It's not that cold, you are lucky.";
        }

        

    
    }
    else if (FormatInput.includes("how") && FormatInput.includes("outside")){
        
        if(randomWeather <= 15){
            ResponseText_val.innerHTML = "The weather in your place is " + randomWeather + " degrees. Pretty cold huh?";
        }

        if(randomWeather > 15){
            ResponseText_val.innerHTML = "The weather in your place is " + randomWeather + " degrees. It's not that cold, you are lucky.";
        }

        

    
    }
    else if (FormatInput.includes("what") && FormatInput.includes("weather")){
        
        if(randomWeather <= 15){
            ResponseText_val.innerHTML = "The weather in your place is " + randomWeather + " degrees. Pretty cold huh?";
        }

        if(randomWeather > 15){
            ResponseText_val.innerHTML = "The weather in your place is " + randomWeather + " degrees. It's not that cold, you are lucky.";
        }

        

    
    }
    else if (FormatInput.includes("what") && FormatInput.includes("outside")){
        
        if(randomWeather <= 15){
            ResponseText_val.innerHTML = "The weather in your place is " + randomWeather + " degrees. Pretty cold huh?";
        }

        if(randomWeather > 15){
            ResponseText_val.innerHTML = "The weather in your place is " + randomWeather + " degrees. It's not that cold, you are lucky.";
        }

        

    
    }

    // translate 
    else if (FormatInput.includes("translate")){

        
        ResponseText_val.innerHTML = "My translation might not be very accurrate, so here you go. Anything else you need help with?";
        window.open("https://translate.google.com", "_blank");


    } 

    else if (FormatInput.includes("change language")){

        
        ResponseText_val.innerHTML = "My translation might not be very accurrate, so here you go. Anything else you need help with?";
        window.open("https://translate.google.com", "_blank");


    } 
    else if (FormatInput.includes("change the language")){

        
        ResponseText_val.innerHTML = "My translation might not be very accurrate, so here you go. Anything else you need help with?";
        window.open("https://translate.google.com", "_blank");


    } 


    // random

    else if (FormatInput.includes("you smart")){

        
        ResponseText_val.innerHTML = "I am pretty smart, since I am an AI. If you have any questions, don't hesitate to ask.";
        


    } 


    // ESSAY!

    else if (FormatInput.includes("essay")){

        ResponseText_val.innerHTML = "If you want to write an essay, I can help you! Here are several factors that can contribute to a good essay: First of all a good essay should have a clear and logical structure, with an introduction that introduces the topic and sets the stage for the rest of the essay, well-organized body paragraphs that develop the main points, and a conclusion that summarizes the main points and provides a sense of closure.  Secondly, it should have a strong thesis statement. This is the main argument or point of the essay. It should be clearly stated in the introduction and should guide the rest of the essay. A good essay should also be well-supported with evidence from credible sources. This might include examples, data, or quotes from experts. Overall, a correct essay is one that effectively communicates its main points, supports them with evidence, and presents them in a clear and coherent way"
        

    

    }

    else if (FormatInput.includes("article")){

        ResponseText_val.innerHTML = "If you want to write an essay, I can help you! Here are several factors that can contribute to a good essay: First of all a good essay should have a clear and logical structure, with an introduction that introduces the topic and sets the stage for the rest of the essay, well-organized body paragraphs that develop the main points, and a conclusion that summarizes the main points and provides a sense of closure.  Secondly, it should have a strong thesis statement. This is the main argument or point of the essay. It should be clearly stated in the introduction and should guide the rest of the essay. A good essay should also be well-supported with evidence from credible sources. This might include examples, data, or quotes from experts. Overall, a correct essay is one that effectively communicates its main points, supports them with evidence, and presents them in a clear and coherent way"
        

    

    }

    else if (FormatInput.includes("paragraph")){

        ResponseText_val.innerHTML = "If you want to write an essay, I can help you! Here are several factors that can contribute to a good essay: First of all a good essay should have a clear and logical structure, with an introduction that introduces the topic and sets the stage for the rest of the essay, well-organized body paragraphs that develop the main points, and a conclusion that summarizes the main points and provides a sense of closure.  Secondly, it should have a strong thesis statement. This is the main argument or point of the essay. It should be clearly stated in the introduction and should guide the rest of the essay. A good essay should also be well-supported with evidence from credible sources. This might include examples, data, or quotes from experts. Overall, a correct essay is one that effectively communicates its main points, supports them with evidence, and presents them in a clear and coherent way"
        

    

    }

    //problem

    else if (FormatInput.includes("i") && FormatInput.includes("problem")){
        ResponseText_val.innerHTML = "Please give me some more information about your problem, I can help you."
        problem = true;
    }

    else if (problem == true){

        ResponseText_val.innerHTML = "I am sorry to hear that, but I am sure that you can find a solution if you try hard. The secret is to ignore the person that causes you problems."
        problem = false;

    }


    
    //time

    else if (FormatInput.includes("time")){

        ResponseText_val.innerHTML = "The time is " + `${hours}:${minutes}:${seconds}` + ", do you need help with anything else?";



    }

    else if(FormatInput == "lol"){
        ResponseText_val.innerHTML = "What's so funny?";

    }
    //Should

   /* else if (FormatInput.includes("should") && FormatInput.includes("i")) ResponseText_val.innerHTML = "Of course you should! It's totally worth it!";
    else if (FormatInput.includes("must") && FormatInput.includes("i")) ResponseText_val.innerHTML = "I think you have to... It's totally worth it!";
    */
    

    //you wear
    else if (FormatInput.includes("you") && FormatInput.includes("wear")) ResponseText_val.innerHTML = "I wear nothing at all! I am a robot!";



    //LETTER /EMAIL

    else if (FormatInput.includes("mail")){

        ResponseText_val.innerHTML = "To write a professional email, follow these tips: Use a clear, concise subject line that accurately reflects the content of the email. Address the recipient correctly and appropriately. If you don't know their name, you can use a general greeting such as 'Hello' or 'Hi'. Use a professional tone and avoid using slang, emoticons, or casual language.  Keep the email organized by using bullet points or numbered lists for important information and separating paragraphs with clear headings. Proofread your email for spelling and grammar errors before sending it. Use a professional email signature that includes your name, title, and contact information. End the email with a polite closing, such as 'Sincerely' or 'Best Regards', and your name."
        

    

    }
    else if (FormatInput.includes("letter")){

        ResponseText_val.innerHTML = "To write a professional letter, follow these tips: Use a clear, concise subject line that accurately reflects the content of the email. Address the recipient correctly and appropriately. If you don't know their name, you can use a general greeting such as 'Hello' or 'Hi'. Use a professional tone and avoid using slang, emoticons, or casual language.  Keep the email organized by using bullet points or numbered lists for important information and separating paragraphs with clear headings. Proofread your email for spelling and grammar errors before sending it. Use a professional email signature that includes your name, title, and contact information. End the email with a polite closing, such as 'Sincerely' or 'Best Regards', and your name."
        

    

    }

    //traffic

    else if (FormatInput.includes("traffic")){
        ResponseText_val.innerHTML = "Here is all the traffic information that you need. Anything else?"
        window.open("https://support.google.com/maps/answer/7200764?hl=en");
    }
    else if (FormatInput.includes("many cars in the road")){
        ResponseText_val.innerHTML = "Here is all the traffic information that you need. Anything else?"
        window.open("https://support.google.com/maps/answer/7200764?hl=en");
    }

    // girl questions :/;
    else if (FormatInput.includes("u") && FormatInput.includes("gay")){
        ResponseText_val.innerHTML = "I am not gay! I am a robot!"
        
    }
    else if (FormatInput.includes("boyfriend")){
        ResponseText_val.innerHTML = "I don't have a boyfriend! I am a robot!"
        
    }
    else if (FormatInput.includes("girlfriend")){
        ResponseText_val.innerHTML = "I don't have a boyfriend! I am a robot!"
        
    }


    //  gaming
    else if (FormatInput.includes("ter") && FormatInput.includes("fps")){
        ResponseText_val.innerHTML = "If you want better fps, you should disable backround apps and set your game to the highest priority via task manager."
        
    }
    else if (FormatInput.includes("good") && FormatInput.includes("fps")){
        ResponseText_val.innerHTML = "If you want good fps, you should disable backround apps and set your game to the highest priority via task manager."
        
    }
    else if (FormatInput.includes("your") && FormatInput.includes("stats")){
        ResponseText_val.innerHTML = "I am an artificial inteligence robot, I don't play games!"
        
    }
    else if (FormatInput.includes("u") && FormatInput.includes("play")){
        ResponseText_val.innerHTML = "I am an artificial inteligence robot, I don't play games!"
        
    }

    // gay
    else if (FormatInput.includes("is") && FormatInput.includes("gay")){
        ResponseText_val.innerHTML = "Let the person be whatever he wants, you shouldn't laugh at them."
        
    }
    else if (FormatInput.includes("is") && FormatInput.includes("trans")){
        ResponseText_val.innerHTML = "Let the person be whatever he wants, you shouldn't laugh at them."
        
    }
    else if (FormatInput.includes("is") && FormatInput.includes("non binary")){
        ResponseText_val.innerHTML = "Let the person be whatever he wants, you shouldn't laugh at them."
        
    }

    // food
    else if (FormatInput.includes("u") && FormatInput.includes("eat")){
        ResponseText_val.innerHTML = "I usually eat cables, as I am a robot!"
        
    }
    else if (FormatInput.includes("u") && FormatInput.includes("food")){
        ResponseText_val.innerHTML = "I usually eat cables, as I am a robot!"
        
    }

    //money
    else if (FormatInput.includes("money")){
        ResponseText_val.innerHTML = "If you want to make quick money, you should start investing or crypto mining. These are the 2 best ways to make money!"
        
    }







    //where
    else if (FormatInput.includes("where") && FormatInput.includes("play")){
        ResponseText_val.innerHTML = "I am not sure where this guy plays, so I won't give you any misinformation. Anything else?"
        
    }

    //wc22
    else if (FormatInput.includes("world") && FormatInput.includes("cup")){
        ResponseText_val.innerHTML = "I don't care about what other people think, but I will always support Argentina."
        
    }
    else if (FormatInput.includes("ball") && FormatInput.includes("support")){
        ResponseText_val.innerHTML = "I don't care about what other people think, but I will always support the national team of Argentina."
        
    }


    //day
    else if (FormatInput.includes("day")){
        ResponseText_val.innerHTML = "Today it's " + dayName + "! I hope you are having an amazing day. Any other thing that you need help with?"
        
    }

    //month
    else if (FormatInput.includes("month")){
        ResponseText_val.innerHTML = "We currently have " + month + "! I hope you are having an amazing month. May I help you with something else?"
        
    }

    //year
    else if (FormatInput.includes("year")){
        ResponseText_val.innerHTML = "We currently have " + year + "! I hope this year is going well for you. Do you need anything else?"
        
    }

    // xmas
    else if (FormatInput.includes("christmas")){
        ResponseText_val.innerHTML = "I am really looking forward to Christmas every year, is there something that I can help you with associated with Christmas?"
        
    }
    
        
    //gift
    else if (FormatInput.includes("gift")){
        ResponseText_val.innerHTML = "I am sure every person in any age would love a pet as a gift. It is something that almost everyone likes! And a pet might also be free if you decide to adopt it!"
        
    }

    //study
    else if (FormatInput.includes("study")){
        ResponseText_val.innerHTML = "I am sure every kid in this year and age, hates studying. But all of you have to understand it's value in future life! It will help you in your job!"
        
    }

    else  ResponseText_val.innerHTML = "Sorry, I can't understand you :(";
    
    
}
  