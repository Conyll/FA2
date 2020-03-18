function functionStart(){
    window.str1 = "";
    window.score = 0
    window.level = 1
    document.getElementById("Line").innerHTML = str1;
    window.alreadyUsed = []

    if (level === 1){
        window.threeLetter = ["COL", "COS", "COT", "COY", "HOT", "HOY", "LOT", "LOY", "OIL", "SOH", "SOL", "SOT", "SOY", "TOT", "TOY"]
        window.fourLetter = ["CLOT", "CLOY", "COIL", "COLS", "COLT", "COSH", "COST", "COSY", "COTS", "HOLS", "HOLT", "HOLY", "HOST", "HOTS", "LOCH", "LOCI", "LOST", "LOTH", "LOTI", "LOTS", "OILS", "OILY", "OTIC", "SCOT", "SHOT", "SILO", "SLOT", "SOIL", "TOIL", "TOSH", "TOTS", "TOYS"]
        window.fiveLetter = ["CLOTH", "CLOTS", "COILS", "COLTS", "CYTOL", "HOIST", "HOTLY", "LITHO", "LOCHS", "LOTIC", "OCTYL", "SLOTH", "STOIC", "THIOL", "TOILS"]
        window.sixLetter = ["CLOTHS", "COSILY", "COSTLY"]
        window.sevenLetter = ["COLTISH"]
        window.eightLetter = ["CYSTOLITH"]
        window.nineLetter = []
        window.easterEggs = ["YOSHI", "HOTTY", "THOT", "THOTS"]
        minScore = 50
        window.zero = "O"
        window.one = "L"
        window.two = "T"
        window.three = "T"
        window.four = "I"
        window.five = "C"
        window.six = "S"
        window.seven = "H"
        window.eight = "Y"
        document.getElementById("0").innerHTML = zero;
        document.getElementById("1").innerHTML = one;
        document.getElementById("2").innerHTML = two;
        document.getElementById("3").innerHTML = three;
        document.getElementById("4").innerHTML = four;
        document.getElementById("5").innerHTML = five;
        document.getElementById("6").innerHTML = six;
        document.getElementById("7").innerHTML = seven;
        document.getElementById("8").innerHTML = eight;
    }

    window.shownScore = score + " / " + minScore
    document.getElementById("scoreLine").innerHTML = shownScore;
}

function function0(){
    var str2 = zero;
    window.str3 = str1 + str2
    window.str1 = str3;
    document.getElementById("Line").innerHTML = str1;
}

function function1(){
    var str2 = one;
    window.str3 = str1 + str2
    window.str1 = str3;
    document.getElementById("Line").innerHTML = str1;
}
  
function function2(){
    var str2 = two;
    window.str3 = str1 + str2
    window.str1 = str3;
    document.getElementById("Line").innerHTML = str1;
}
  
function function3(){
    var str2 = three;
    window.str3 = str1 + str2
    window.str1 = str3;
    document.getElementById("Line").innerHTML = str1;
}
  
function function4(){
    var str2 = four;
    window.str3 = str1 + str2
    window.str1 = str3;
    document.getElementById("Line").innerHTML = str1;
}
  
function function5(){
    var str2 = five;
    window.str3 = str1 + str2
    window.str1 = str3;
    document.getElementById("Line").innerHTML = str1;
}
  
function function6(){
    var str2 = six;
    window.str3 = str1 + str2
    window.str1 = str3;
    document.getElementById("Line").innerHTML = str1;
}

function function7(){
    var str2 = seven;
    window.str3 = str1 + str2
    window.str1 = str3;
    document.getElementById("Line").innerHTML = str1;
}

function function8(){
    var str2 = eight;
    window.str3 = str1 + str2
    window.str1 = str3;
    document.getElementById("Line").innerHTML = str1;
}

function functionEnter(){
    if (alreadyUsed.includes(str1)) {
        var noNo = str1 + " has already been used! You can't cheat the system!";
        document.getElementById("answer").innerHTML = noNo;
    }
    
    else if (threeLetter.includes(str1)){
        alreadyUsed.push(str1)
        var correct = str1 + " is a word! Three points have been added to your score!";
        document.getElementById("answer").innerHTML = correct;
        window.score1 = score + 3;
        window.score = score1;
        window.shownScore = score + " / " + minScore
        document.getElementById("scoreLine").innerHTML = shownScore;
    }  

    else if (fourLetter.includes(str1)){
        alreadyUsed.push(str1)
        var correct = str1 + " is a word! Four points have been added to your score!";
        document.getElementById("answer").innerHTML = correct;
        window.score1 = score + 4;
        window.score = score1;
        window.shownScore = score + " / " + minScore
        document.getElementById("scoreLine").innerHTML = shownScore;
    }

    else if (fiveLetter.includes(str1)){
        alreadyUsed.push(str1)
        var correct = str1 + " is a word! Five points have been added to your score!";
        document.getElementById("answer").innerHTML = correct;
        window.score1 = score + 5;
        window.score = score1;
        window.shownScore = score + " / " + minScore
        document.getElementById("scoreLine").innerHTML = shownScore;
    }

    else if (sixLetter.includes(str1)){
        alreadyUsed.push(str1)
        var correct = str1 + " is a word! Six points have been added to your score!";
        document.getElementById("answer").innerHTML = correct;
        window.score1 = score + 6;
        window.score = score1;
        window.shownScore = score + " / " + minScore
        document.getElementById("scoreLine").innerHTML = shownScore;
    }

    else if (sevenLetter.includes(str1)){
        alreadyUsed.push(str1)
        var correct = str1 + " is a word! Seven points have been added to your score!";
        document.getElementById("answer").innerHTML = correct;
        window.score1 = score + 7;
        window.score = score1;
        window.shownScore = score + " / " + minScore
        document.getElementById("scoreLine").innerHTML = shownScore;
    }

    else if (eightLetter.includes(str1)){
        alreadyUsed.push(str1)
        var correct = str1 + " is a word! Eight points have been added to your score!";
        document.getElementById("answer").innerHTML = correct;
        window.score1 = score + 8;
        window.score = score1;
        window.shownScore = score + " / " + minScore
        document.getElementById("scoreLine").innerHTML = shownScore;
    }

    else if (nineLetter.includes(str1)){
        alreadyUsed.push(str1)
        var correct = str1 + " is a word! Nine points have been added to your score!";
        document.getElementById("answer").innerHTML = correct;
        window.score1 = score + 9;
        window.score = score1;
        window.shownScore = score + " / " + minScore
        document.getElementById("scoreLine").innerHTML = shownScore;
    }
    
    else if (easterEggs.includes(str1)){
        alreadyUsed.push(str1)
        if (str1 === "YOSHI"){
            var correct = "YOSHI!";
            document.getElementById("answer").innerHTML = correct;
        }
        else if (str1 === "LOL"){
            var correct = "ROFL!";
            document.getElementById("answer").innerHTML = correct;
        }
        else if (str1 === "LOLCAT"){
            var correct = "NYAH!";
            document.getElementById("answer").innerHTML = correct;
        }
        else if (str1 === "CONYLL"){
            var correct = "Wow! That's a pretty cool name! How'd you think of that? You must be seriously attracted to that name!";
            document.getElementById("answer").innerHTML = correct;
            window.score1 = score + 25;
            window.score = score1;
        }
        else if (str1 === "HOTTY"){
            var correct = "I am? Thankyou!";
            document.getElementById("answer").innerHTML = correct;
        }
        else if (str1 === "GUNIT"){
            var correct = "G - UNIT";
            document.getElementById("answer").innerHTML = correct;
        }
        else if (str1 === "THOT"){
            var correct = "THOT VS THE SLAYER";
            document.getElementById("answer").innerHTML = correct;
            window.score1 = score - 21;
            window.score = score1;
        }
        else if (str1 === "THOTS"){
            var correct = "THE THOT HAS RECEIVED REINFORCEMENTS!";
            document.getElementById("answer").innerHTML = correct;
            window.score1 = score - 20;
            window.score = score1;
        }
        window.score1 = score + 25;
        window.score = score1;
        window.shownScore = score + " / " + minScore
        document.getElementById("scoreLine").innerHTML = shownScore;
    }

    else {
        var noNo = "Unfortunately, " + str1 + " is not a word. So, no points!"
        document.getElementById("answer").innerHTML = noNo;
    }

    window.str1 = "";
    document.getElementById("Line").innerHTML = str1;

    if (score >= minScore) {
        window.winner = "Congratulations! You have beaten this level!"
        document.getElementById("win").innerHTML = winner;
        window.nextLevel = "Next"
        document.getElementById("Next").innerHTML = nextLevel;
        if (level === 1){
            window.level = 2
            window.stoppy = 1
        }
        else if (level === 2){
            window.level = 3
        }
        else if (level === 3){
            window.level = 4
            window.secret = 1
            window.winner = "Holy Obi-Wan Kenoli! You have beaten all three levels! Well diddily done!"
            document.getElementById("win").innerHTML = winner;
        }
    }
}

function functionNext(){
    if (level === 2){
        window.threeLetter = ["GNU", "GUN", "GUT", "LEU", "LUG", "LUR", "NUT", "RUE", "RUG", "RUN", "RUT", "TAU", "TUG", "TUN", "URN"]
        window.fourLetter = ["AGUE", "ARUI", "AUNT", "ETUI", "GAUL", "GAUR", "GENU", "GLUE", "GLUT", "GUAN", "GUAR", "GULA", "GULE", "GURN", "IGLU", "LIEU", "LUGE", "LUNA", "LUNE", "LUNG", "LURE", "LUTE", "RUGA", "RUIN", "RULE", "RUNE", "RUNG", "RUNT", "TRUE", "TRUG", "TULE", "TUNA", "TUNE", "TUNG", "TURN", "UGLI", "ULNA", "UNAI", "UNIT", "UREA", "URGE"]
        window.fiveLetter = ["ARGUE", "AUGER", "GAULT", "GAUNT", "GLUTE", "GRUEL", "GRUNT", "GUILE", "GUILT", "GULAR", "INULA", "INURE", "LUGER", "LUNAR", "LUNGE", "LUNGI", "RUTIN", "TUNER", "TURIN", "ULNAR", "ULTRA", "UNITE", "UNLIT", "UNRIG", "UNTIE", "UNTIL", "URATE", "URIAL", "URINE", "UTERI", "UTILE"]
        window.sixLetter = ["AIRGUN", "AUGITE", "AUNTIE", "ENGLUT", "GLUTEN", "GUINEA", "GUITAR", "GUNITE", "LAGUNE", "LANGUR", "LINGUA", "LUNATE", "LUNGER", "LURING", "LUTEIN", "LUTING", "NATURE", "NEURAL", "NUTRIA", "RITUAL", "RULING", "RUNLET", "RUTILE", "TRIUNE", "TUAREG", "TUGELA", "UGLIER", "UNREAL", "UNTIER", "URGENT", "URINAL"]
        window.sevenLetter = ["ALUNITE", "GUANTER", "GRANULE", "GRUNTLE", "LANGUET", "NEUTRAL", "RUINATE", "TAURINE", "TEGULAR", "UNALERT", "URINATE"]
        window.eightLetter = ["LIGATURE", "TENURIAL"]
        window.nineLetter = ["GRANULITE"]
        window.easterEggs = ["GUNIT"]
        minScore = 75
        window.zero = "U"
        window.one = "N"
        window.two = "G"
        window.three = "R"
        window.four = "I"
        window.five = "A"
        window.six = "L"
        window.seven = "T"
        window.eight = "E"
        document.getElementById("0").innerHTML = zero;
        document.getElementById("1").innerHTML = one;
        document.getElementById("2").innerHTML = two;
        document.getElementById("3").innerHTML = three;
        document.getElementById("4").innerHTML = four;
        document.getElementById("5").innerHTML = five;
        document.getElementById("6").innerHTML = six;
        document.getElementById("7").innerHTML = seven;
        document.getElementById("8").innerHTML = eight;
        if (stoppy === 1){
            window.score = 0
            window.shownScore = score + " / " + minScore
            document.getElementById("scoreLine").innerHTML = shownScore;
            window.winner = ""
            document.getElementById("win").innerHTML = winner;
            window.nextLevel = ""
            document.getElementById("Next").innerHTML = nextLevel;
            var correct = ""
            document.getElementById("answer").innerHTML = correct;
            window.stoppyMcstop = stoppy + 1
            window.stoppy = stoppyMcstop
        }
    }

    if (level === 3){
        window.threeLetter = ["AIL", "ALL", "ALT", "COL", "ILL", "LAC", "LAT", "LAY", "LIN", "LIT", "LOT", "NIL", "OIL", "TIL"]
        window.fourLetter = ["ACYL", "ALIT", "ALLY", "ALTO", "ANIL", "CALL", "CALO", "CILL", "CLAN", "CLAY", "CLIT", "CLON", "CLOT", "CLOY", "COAL", "COIL", "COLA", "COLT", "COLY", "ILLY", "INLY", "LACY", "LAIC", "LAIN", "LATI", "LILO", "LILT", "LILY", "LINO", "LINT", "LINY", "LION", "LOAN", "LOCA", "LOCI", "LOIN", "LOTA", "LOTI", "LYON", "NAIL", "NILL", "NOIL", "OILY", "OLLA", "ONLY", "TAIL", "TALC", "TALI", "TALL", "TILL", "TOIL", "TOLA", "TOLL", "YILL"]
        window.fiveLetter = ["ALLOT", "ALLOY", "ALOIN", "ATOLL", "CLINT", "COALY", "COLIN", "COLLY", "INLAY", "ITALY", "LAITY", "LATIN", "LAYIN", "LILAC", "LINAC", "LINTY", "LLANO", "LOCAL", "LOTIC", "LOYAL", "LYTIC", "NICOL", "NOILY", "NOTAL", "OCTAL", "OCTYL", "ONLAY", "TALLY", "TALON", "TICAL", "TOLAN", "TOLYL", "TONAL"]
        window.sixLetter = ["ALIYOT", "ALNICO", "CATLIN", "CITOLA", "CLINAL", "CLONAL", "COITAL", "LACILY", "LATINO", "LINTOL", "LITANY", "OILCAN", "TALION", "TINCAL"]
        window.sevenLetter = ["ACYLION", "ANTICLY", "TONALLY"]
        window.eightLetter = ["COITALLY", "LOCALITY"]
        window.nineLetter = ["ONTICALLY", "TONICALLY"]
        window.easterEggs = ["LOL", "LOLCAT", "CONYLL"]
        minScore = 100
        window.zero = "L"
        window.one = "A"
        window.two = "C"
        window.three = "Y"
        window.four = "T"
        window.five = "O"
        window.six = "L"
        window.seven = "I"
        window.eight = "N"
        document.getElementById("0").innerHTML = zero;
        document.getElementById("1").innerHTML = one;
        document.getElementById("2").innerHTML = two;
        document.getElementById("3").innerHTML = three;
        document.getElementById("4").innerHTML = four;
        document.getElementById("5").innerHTML = five;
        document.getElementById("6").innerHTML = six;
        document.getElementById("7").innerHTML = seven;
        document.getElementById("8").innerHTML = eight;
        if (stoppy = 2){
            window.score = 0
            window.shownScore = score + " / " + minScore
            document.getElementById("scoreLine").innerHTML = shownScore;
            window.winner = ""
            document.getElementById("win").innerHTML = winner;
            window.nextLevel = ""
            document.getElementById("Next").innerHTML = nextLevel;
            var correct = ""
            document.getElementById("answer").innerHTML = correct;
            window.stoppyMcstop = stoppy + 1
            window.stoppy = stoppyMcstop
        }
    }

    if (level === 4){
        minScore = "Super Sick Lad"
        window.zero = ":)"
        window.one = "C"
        window.two = "O"
        window.three = "N"
        window.four = "G"
        window.five = "R"
        window.six = "A"
        window.seven = "T"
        window.eight = "S"
        document.getElementById("0").innerHTML = zero;
        document.getElementById("1").innerHTML = one;
        document.getElementById("2").innerHTML = two;
        document.getElementById("3").innerHTML = three;
        document.getElementById("4").innerHTML = four;
        document.getElementById("5").innerHTML = five;
        document.getElementById("6").innerHTML = six;
        document.getElementById("7").innerHTML = seven;
        document.getElementById("8").innerHTML = eight;
        if (stoppy = 3){
            window.score = "You are a"
            window.shownScore = score + " / " + minScore
            document.getElementById("scoreLine").innerHTML = shownScore;
            window.winner = ""
            document.getElementById("win").innerHTML = winner;
            window.nextLevel = ""
            document.getElementById("Next").innerHTML = nextLevel;
            var correct = ""
            document.getElementById("answer").innerHTML = correct;
            window.stoppyMcstop = stoppy + 1
            window.stoppy = stoppyMcstop
            if (secret === 1){
                window.winner = "Wow so cool! Very goodly done! Extremely amaze!"
                document.getElementById("win").innerHTML = winner;
                window.secret = 2
            }
            else if (secret === 2){
                window.winner = "Wow you found the sacred texts!"
                document.getElementById("win").innerHTML = winner;
                window.secret = 3
            }
            else if (secret === 3){
                window.winner = "OMGoodness you found the super sacred texts!"
                document.getElementById("win").innerHTML = winner;
                window.secret = 4
            }
            else if (secret === 4){
                window.winner = "Holy-Ness the super duper sacred texts!"
                document.getElementById("win").innerHTML = winner;
                window.secret = 5
            }
            else if (secret === 5){
                window.winner = "Ok there's no more texts."
                document.getElementById("win").innerHTML = winner;
                window.secret = 6
            }
            else if (secret === 6){
                window.winner = ""
                document.getElementById("win").innerHTML = winner;
                window.secret = 7
            }
            else if (secret === 7){
                window.winner = "None at all"
                document.getElementById("win").innerHTML = winner;
                window.secret = 8
            }
            else if (secret === 8){
                window.winner = ""
                document.getElementById("win").innerHTML = winner;
                window.secret = 9
            }
            else if (secret === 9){
                window.winner = "Why are you still looking?"
                document.getElementById("win").innerHTML = winner;
                window.secret = 10
            }
            else if (secret === 10){
                window.winner = "You know what? I'm just gonna give you a blank face"
                document.getElementById("win").innerHTML = winner;
                window.secret = 11
            }
            else if (secret === 11){
                window.winner = ":|"
                document.getElementById("win").innerHTML = winner;
                window.secret = 12
            }
            else if (secret === 12){
                window.winner = ":|"
                document.getElementById("win").innerHTML = winner;
                window.secret = 13
            }
            else if (secret === 13){
                window.winner = ">:|"
                document.getElementById("win").innerHTML = winner;
            }
        }
    }
}