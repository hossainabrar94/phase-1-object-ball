//console.log(gameObject());

function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: [
                "black", 
                "white",
            ],
            players: {
                    "Alan Anderson": {
                        number: 0,
                        shoe: 16,
                        points: 22,
                        rebounds: 12,
                        assists: 12,
                        steals: 3,
                        blocks: 1,
                        slamDunks: 1,
                    },	                
                    "Reggie Evans":	{
                        number: 30,
                        shoe: 14,
                        points: 12,
                        rebounds: 12,
                        assists: 12,
                        steals: 12,
                        blocks: 12,
                        slamDunks: 7,
                    },
                    "Brook Lopez": {
                        number: 11,
                        shoe: 17,
                        points: 17,
                        rebounds: 19,
                        assists: 10,
                        steals: 3,
                        blocks: 8,
                        slamDunks: 5,
                    }, 
                    "Mason Plumlee": {
                        number: 1,
                        shoe: 19,
                        points: 26,
                        rebounds: 12,
                        assists: 6,
                        steals: 3,
                        blocks: 8,
                        slamDunks: 5,
                    },
                    "Jason Terry": {
                        number: 31,
                        shoe: 15,
                        points: 19,
                        rebounds: 2,
                        assists: 2,
                        steals: 4,
                        blocks: 11,
                        slamDunks: 1,
                    },
                },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: [
                "Turquoise", 
                "Purple",
            ],
            players: {
                    "Jeff Adrien": {
                        number: 4,
                        shoe: 18,
                        points: 10,
                        rebounds: 1,
                        assists: 1,
                        steals: 2,
                        blocks: 7,
                        slamDunks: 2,
                    },	                
                    "Bismak Biyombo":	{
                        number: 0,
                        shoe: 16,
                        points: 12,
                        rebounds: 4,
                        assists: 7,
                        steals: 7,
                        blocks: 15,
                        slamDunks: 10,
                    },
                    "DeSagna Diop": {
                        number: 2,
                        shoe: 14,
                        points: 24,
                        rebounds: 12,
                        assists: 12,
                        steals: 4,
                        blocks: 5,
                        slamDunks: 5,
                    }, 
                    "Ben Gordon": {
                        number: 8,
                        shoe: 15,
                        points: 33,
                        rebounds: 3,
                        assists: 2,
                        steals: 1,
                        blocks: 1,
                        slamDunks: 0,
                    },
                    "Brendan Haywood": {
                        number: 33,
                        shoe: 15,
                        points: 6,
                        rebounds: 12,
                        assists: 12,
                        steals: 22,
                        blocks: 5,
                        slamDunks: 12,
                    },
                },
        },
    }
};

function numPointsScored(playerName){
    let game = gameObject()
    for(let key in game){
        let teams = game[key]
        console.log(teams)
        for(let key in teams){
            let player = teams[key]
            console.log(player)
            for(let key in player){
                if(key === playerName){
                    console.log(player[playerName].points)
                }    
            }
        }
    }    
}

function shoeSize(playerName){
    let game = gameObject()
    for(let key in game){
        let teams = game[key]
        console.log(teams)
        for(let key in teams){
            let player = teams[key]
            console.log(player)
            for(let key in player){
                if(key === playerName){
                    console.log(player[playerName].shoe)
                }    
            }
        }
    }    
}

function teamColors(teamNames){
    let game = gameObject()
    for(let key in game){
        let teams = game[key]
        for(let key in teams){
            if(teams[key]===teamNames){
                console.log(teams.colors)
            }
        }
    }        
}

function teamNames(){
    let game = gameObject()
    let teamArray = []
    for(let key in game){
        let teams = game[key]
        teamArray.push(teams.teamName) /* Question: why is it that bracket notation does not work for teamName here? */
    } 
    console.log(teamArray)       
}

function playerNumbers(teamNames){
    let game = gameObject()
    let jerseyArray = []
    for(let key in game){ /* This key is home/away */
        let teamsObj = game[key]
        if(teamsObj.teamName === teamNames){
            for(let key in teamsObj){ /* This key is  */
                if(key==="players"){
                    let player = teamsObj[key]
                    for(let key in player){
                        jerseyArray.push(player[key].number)
                    }
                }       
            }
        }
    }    
    console.log(jerseyArray)
}

function playerStats(playerName){
        let game = gameObject()
        for(let key in game){
            let teams = game[key]
            for(let key in teams){
                let player = teams[key]
                for(let key in player){
                    if(key === playerName){
                        console.log(player[playerName])
                    }    
                }
            }
        }    
}

function bigShoeRebounds(){
    let game = gameObject()
    let shoeArray = []
    let biggest
    for(let key in game){ 
        let teamsObj = game[key]
        for(let key in teamsObj){ 
            if(key==="players"){
                let player = teamsObj[key]
                for(let key in player){
                    shoeArray.push(player[key].shoe)
                }
            }       
        }
    } 
    biggest = Math.max(...shoeArray)
    for(let key in game){ 
    let teamsObj = game[key]
        for(let key in teamsObj){ 
            if(key==="players"){
                let player = teamsObj[key]
                for(let key in player){
                    if(player[key].shoe === biggest){
                        console.log(player[key].rebounds)
                    }
                }
            }       
        }
    } 
}

function mostPointsScored(){
    let game = gameObject()
    let mostArray = []
    let most
    for(let key in game){ 
        let teamsObj = game[key]
        for(let key in teamsObj){ 
            if(key==="players"){
                let player = teamsObj[key]
                for(let key in player){
                    mostArray.push(player[key].points)
                }
            }       
        }
    } 
    most = Math.max(...mostArray)
    for(let key in game){ 
    let teamsObj = game[key]
        for(let key in teamsObj){ 
            if(key==="players"){
                let player = teamsObj[key]
                for(let key in player){
                    if(player[key].points === most){
                        console.log(key)
                    }
                }
            }       
        }
    } 
};

/*function winningTeam(){
    let game = gameObject()
    let sumPoints = []
    let team1 = []
    for(let key in game){ 
        let teamsObj = game[key]
        for(let key in teamsObj){ 
            if(key==="players"){
                let player = teamsObj[key]
                for(let key in player){
                    sumPoints.push(player[key].points)
                }
            }       
        }
        team1.push(sumPoints)
    } 
}
*/