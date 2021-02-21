const { indexOf } = require("lodash");
const { act } = require("react-dom/test-utils");

var players = [];
var phase = "Start";
var loot = []; //populate later
var shares = [];
var next_phase = [];
var godfather;
var active_players = [];

//Values for status: Alive, Dead, Wounded, Dive
//Values for role: Player, Godfather
//Values for gun: Empty, loaded
//Values for phase: Start, Point, Godfather, Courage, Steal
//Target is index of another player

function createPlayer(playerName, index) {
    var player = {name: playerName, money: 0, diamonds: 0, art: 0, status: "Alive", gun: "Empty", bullets: [0, 0, 0, 0, 0, 1, 1, 1], wounds: 0, target: -1, ready: false};
    players[index] = player;
    next_phase[index] = player.ready;
}

function startGame() {
    phase = "Start";
    for (var i = 0; i < players.length; i++) {
        createPlayer(players[i].name, i);
    }
    godfather = 0;

    while (loot.length != 0) {
        switch(phase) {
            case "Start": 
                for (i = 0; i < 8; i++) {
                    var card = Math.floor(Math.random() * loot.length);
                    shares[i] = loot[card];
                    loot.splice(card, 1);
                }

                var j = 0;
                for (i = 0; i < players.length; i++) {
                    if (players[i].status != "Dead") {
                        active_players[j] = i;
                        j++;
                    }
                }
    
                while (next_phase.indexOf(false) != -1) {
            
                }

                phase = "Godfather";
    
                break;
            case "Godfather":
                players[godfather].ready = false;
                var gf_target = players[godfather].target;

                //prompt godfather to choose target
                var change = players[godfather].target;
                players[change].ready = false;
                players[godfather].target = gf_target;

                var old_target = players[change].target;
                //prompt godfather's target to choose a new target
                if (players[change].target == old_target) {
                    //reprompt them to choose a target
                }

                while (next_phase.indexOf(false) != -1) {
            
                }

                phase = "Point";
            
                break;
            case "Point":
                //reveal who is pointing at who
                //wait for all players to choose action
            
                phase = "Courage";
                break;
            case "Courage":
                for (i = 0; i < active_players.length; i++) {
                      var p = players[active_players[i]]; 
                      var target = players[p].target
                      if (active_players.indexOf(target) != -1) {
                          if (players[p].gun == "Loaded") {
                              players[target].wounds++;
                              if (players[target].wounds == 3) {
                                  players[target].status = "Dead";
                              }
                              else{
                                players[target].status = "Wounded";
                              }
                              
                          }
                      }
                }

                for (i = 0; i < active_players.length; i++) {
                    var p = players[active_players[i]]; 
                    if (players[p].status == "Wounded" || players[p].status == "Dead") {
                        active_players.splice(i, 1);
                    }
                }


                break;
            default:
                break;
        }
    }

}

function chooseBullet(player, bullet) {
    var rm = players[player].bullets.indexOf(bullet);
    players[player].bullets.splice(rm, 1);
    if (bullet == 0) {
        players[player].gun = "Empty";
    }
    else {
        players[player].gun = "Loaded";
    }
    //Wait for user to choose target/prompt user to choose target
}

function chooseTarget(player, target) {
    if (target == player){
        //ask them to rechoose/print error
    }
    players[player].target = target;
    players[player].ready = true;
}

function chooseAction(player, action) {
    if (action == 0) {
        players[player].status = "Dive";
        var index = active_players.indexOf(player);
        active_players.splice(index, 1);
    }
}

function getActivePlayers() {
    for (i = 0; i < active_players.length; i++) {
        //pass this to the front end: active_players[i]
    }
}

function newGodfather(player) {
    var flip = Math.floor(Math.random() * 2);
    if (flip == 1) {
        godfather = player;
    }
}
