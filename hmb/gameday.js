var NON_ISSUE = '[non-issue]';
var DICE = ' <span class="glyphicon glyphicon-unchecked" aria-hidden="true"></span> ';

function stormy() {
    switch (d6()) {
        case 1:
            return stormyFrontOffice();
        case 2:
            return stormyMedia();
        case 3:
            return stormyTeamTrainer();
        case 4:
            return stormyBattingCoach();
        case 5:
            return stormyPitchingCoach();
        case 6:
            return injury();
    }
}

function sunny() {
    switch (d6()) {
        case 1:
            return sunnyBattingCoach();
        case 2:
            return sunnyPitchingCoach();
        case 3:
            return sunnyTeamTrainer();
        case 4:
            return sunnyFrontOffice();
        case 5:
            return sunnyLocalMedia();
        case 6:
            return injury();
    }
}

function sunnyBattingCoach() {
    function sunnyBattingCoachStarter() {
        switch (d6()) {
            case 1:
                return "1B or RF [use decider die].";
            case 2:
                return "2B or CF [use decider die].";
            case 3:
                return "3B or LF [use decider die].";
            case 4:
                return "SS or C [use decider die].";
            case 5:
                return "Designated HOT batter.";
            case 6:
                return "Designated COLD batter.";
        }
    }

    function sunnyBattingCoachMinor() {
        switch (d6()) {
            case 1:
                return "GOODEYE, this game.";
            case 2:
                return "CHAMPION, this game.";
            case 3:
                return "HOT, this game.";
            case 4:
                return "HERO, this game.";
            case 5:
                return "ICON, this game.";
            case 6:
                return "DELTA RATING, this game.";
        }
    }

    function sunnyBattingCoachMajor() {
        switch (d6()) {
            case 1:
                return "GOODEYE, TFN.";
            case 2:
                return "CHAMPION, TFN.";
            case 3:
                return "HOT, TFN.";
            case 4:
                return "HERO, TFN.";
            case 5:
                return "ICON, TFN.";
            case 6:
                return "DELTA RATING, TFN.";
        }
    }

    function sunnyBattingCoachReserve() {
        switch (d6()) {
            case 1:
            case 2:
                return "Reserve OF.";
            case 3:
            case 4:
            case 5:
                return "Reserve IF.";
            case 6:
                return "Reserve C.";
        }
    }

    var message;
    switch (d6()) {
        case 1:
            message = "Minor perk with starter. " + sunnyBattingCoachStarter() + " " + sunnyBattingCoachMinor();
            break;
        case 2:
            message = "Major perk with starter. " + sunnyBattingCoachStarter() + " " + sunnyBattingCoachMajor();
            break;
        case 3:
            message = "Minor perk with reserve. " + sunnyBattingCoachReserve() + " " + sunnyBattingCoachMinor();
            break;
        case 4:
            message = "Major perk with reserve. " + sunnyBattingCoachReserve() + " " + sunnyBattingCoachMajor();
            break;
        default:
            message = NON_ISSUE;
    }
    
    return "Batting Coach: " + message;
}

function sunnyPitchingCoach() {
    function sunnyPitchingCoachStarter() {
        switch (d6()) {
            case 1:
            case 2:
                return "Today's starter.";
            case 3:
            case 4:
                return "Last game's starter.";
            case 5:
            case 6:
                return "Next game's starter.";
        }
    }

    function sunnyPitchingCoachMinor() {
        switch (d6()) {
            case 1:
                return "CONTROL, this game.";
            case 2:
                return "STAR, this game.";
            case 3:
                return "HOT, this game.";
            case 4:
                return "ICON, this game.";
            case 5:
                return "FRESH, this game.";
            case 6:
                return "ACE, this game.";
        }
    }

    function sunnyPitchingCoachMajor() {
        switch (d6()) {
            case 1:
                return "CONTROL, TFN.";
            case 2:
                return "STAR, TFN.";
            case 3:
                return "HOT, TFN.";
            case 4:
                return "ICON, TFN.";
            case 5:
                return "FRESH, TFN.";
            case 6:
                return "FLASH, TFN.";
        }
    }

    function sunnyPitchingCoachReserve() {
        switch (d6()) {
            case 1:
            case 2:
                return "Most-used reliever.";
            case 3:
            case 4:
                return "Last-used reliever.";
            case 5:
            case 6:
                return "Least-used reliever.";
        }
    }

    var message;
    switch (d6()) {
        case 1:
            message = "Minor perk with starter. " + sunnyPitchingCoachStarter() + " " + sunnyPitchingCoachMinor();
            break;
        case 2:
            message = "Major perk with starter. " + sunnyPitchingCoachStarter() + " " + sunnyPitchingCoachMajor();
            break;
        case 3:
            message = "Minor perk with reliever. " + sunnyPitchingCoachReserve() + " " + sunnyPitchingCoachMinor();
            break;
        case 4:
            message = "Major perk with reliever. " + sunnyPitchingCoachReserve() + " " + sunnyPitchingCoachMajor();
            break;
        default:
            message = NON_ISSUE;
    }

    return "Pitching Coach: " + message;
}

function sunnyTeamTrainer() {
    var message;

    function sunnyTeamTrainerPitcherPerk() {
        switch (d6()) {
            case 1:
            case 2:
                return "FRESH";
            case 3:
            case 4:
                return "HOT";
            case 5:
            case 6:
                return "HAPPY";
        }
    }

    function sunnyTeamTrainerPitcher() {
        switch (d6()) {
            case 1:
                return "Today's starter-minor perk. " + sunnyTeamTrainerPitcherPerk() + " entire game.";
            case 2:
                return "Last game's starter-minor perk. " + sunnyTeamTrainerPitcherPerk() + " entire game.";
            case 3:
                return "Next game's starter-minor perk. " + sunnyTeamTrainerPitcherPerk() + " entire game.";
            case 4:
                return "Today's starter-major perk. " + sunnyTeamTrainerPitcherPerk() + ", TFN.";
            case 5:
                return "Last game's starter-minor perk. " + sunnyTeamTrainerPitcherPerk() + ", TFN.";
            case 6:
                return "Next game's starter-minor perk. " + sunnyTeamTrainerPitcherPerk() + ", TFN.";
        }
    }

    function sunnyTeamTrainerBatterPerk() {
        switch (d6()) {
            case 1:
            case 2:
            case 3:
                return "HOT";
            case 4:
            case 5:
            case 6:
                return "HAPPY";
        }
    }

    function sunnyTeamTrainerNonPitcher() {
        switch (d6()) {
            case 1:
            case 2:
                return "Infielder, minor perk. " + sunnyTeamTrainerBatterPerk() + ", this game.";
            case 3:
            case 4:
                return "Infielder, major perk. " + sunnyTeamTrainerBatterPerk() + ", TFN.";
            case 5:
                return "Outfielder, minor perk. " + sunnyTeamTrainerBatterPerk() + ", this game.";
            case 6:
                return "Outfielder, major perk. " + sunnyTeamTrainerBatterPerk() + ", TFN.";
        }
    }

    function sunnyTeamTrainerReliever() {
        switch (d6()) {
            case 1:
                return "Reliever most used, minor perk. " + sunnyTeamTrainerPitcherPerk() + " entire game.";
            case 2:
                return "Reliever most used, major perk. " + sunnyTeamTrainerPitcherPerk() + ", TFN.";
            case 3:
                return "Reliever least used, minor perk. " + sunnyTeamTrainerPitcherPerk() + " entire game.";
            case 4:
                return "Reliever least used, major perk. " + sunnyTeamTrainerPitcherPerk() + ", TFN.";
            case 5:
                return "Reliever last used, minor perk. " + sunnyTeamTrainerPitcherPerk() + " entire game.";
            case 6:
                return "Reliever last used, major perk. " + sunnyTeamTrainerPitcherPerk() + ", TFN.";
        }
    }

    function sunnyTeamTrainerReserve() {
        switch (d6()) {
            case 1:
            case 2:
                return "Reserve infielder, minor perk. " + sunnyTeamTrainerBatterPerk() + ", this game.";
            case 3:
            case 4:
                return "Reserve infielder, major perk. " + sunnyTeamTrainerBatterPerk() + ", TFN.";
            case 5:
                return "Reserve outfielder, minor perk. " + sunnyTeamTrainerBatterPerk() + ", this game.";
            case 6:
                return "Reserve outfielder, major perk. " + sunnyTeamTrainerBatterPerk() + ", TFN."
        }
    }

    switch (d6()) {
        case 1:
            message = "Perk with starter pitcher. " + sunnyTeamTrainerPitcher();
            break;
        case 2:
            message = "Perk with starter, non-pitcher. " + sunnyTeamTrainerNonPitcher();
            break;
        case 3:
            message = "Perk with relief pitcher. " + sunnyTeamTrainerReliever();
            break;
        case 4:
            message = "Perk with reserve, non-pitcher. " + sunnyTeamTrainerReserve();
            break;
        default:
            message = NON_ISSUE;
    }

    return "Team Trainer: " + message;
}

function sunnyPerk() {
    switch (d6()) {
        case 1:
        case 2:
        case 3:
            return "HAPPY";
        case 4:
        case 5:
        case 6:
            return "HOT";
    }
}

function sunnyFrontOfficeOrLocalMedia() {
    var message;
    switch (d6()) {
        case 1:
            message = "Minor perk with player. " + player() + " " + sunnyPerk() + ", this game.";
            break;
        case 2:
            message = "Major perk with player. " + player() + " " + sunnyPerk() + ", TFN.";
            break;
        case 3:
            message = "Minor perk with manager. ";
            message += [
                "Choice SEMI quality to HOT batter, this game.",
                "Choice SEMI to SP, this game.",
                "No COLD batter, this game.",
                "Remove quality, choice player, this game.",
                "HARMONY, this game.",
                "HARMONY, this game."
            ][d6() - 1];
            break;
        case 4:
            message = "Major perk with manager. ";
            message += [
                "No COLD batter, TFN.",
                "Two HOT batters, TFN.",
                "Add SEMI quality to choice player, TFN.",
                "Choice player HAPPY, TFN.",
                "HARMONY, TFN.",
                "HARMONY, TFN."
            ][d6() - 1];
            break;
        default:
            message = NON_ISSUE;
    }

    return message;
}

function sunnyFrontOffice() {
    return "Front Office: " + sunnyFrontOfficeOrLocalMedia();
}

function sunnyLocalMedia() {
    return "Local Media: " + sunnyFrontOfficeOrLocalMedia();
}

function player() {
    var player;
    var choices;
    switch (d6()) {
        case 1:
        case 3:
            choices = ["1B", "2B", "3B", "SS", "C", "(choice)"];
            player = "Starting " + choices[d6() - 1];
            break;
        case 2:
            choices = ["RF", "RF", "CF", "CF", "LF", "LF"];
            player = "Starting " + choices[d6() - 1];
            break;
        case 4:
            choices = ["1B", "2B", "3B", "SS", "C", "(choice)"];
            player = "Reserve " + choices[d6() - 1];
            break;
        case 5:
        case 6:
            choices = ["Today's Starter.", "Last game's Starter.", "Next game's Starter.", "Last-used reliever.", "Most-used Reliever.", "Least-used Reliever."];
            player = "Pitcher: " + choices[d6() - 1];
            break;
    }
    return player;
}

function stormyFrontOffice() {
    var message;
    var prefix = "";
    var player;
    var choices;
    var issue;
    switch (d6()) {
        case 1:
            prefix = "Minor issue with player: ";
            player = player();
            issue = d6() <= 3 ? "UNHAPPY, this game." : "COLD, this game.";
            message = prefix + player + " " + issue;
            break;
        case 2:
            prefix = "Major issue with player: ";
            player = player();
            issue = d6() <= 3 ? "UNHAPPY, TFN." : "COLD, TFN.";
            message = prefix + player + " " + issue;
            break;
        case 3:
            prefix = "Minor issue with manager: ";
            choices = [
                "No HOT batter this game.",
                DICE + " batter scratched from lineup.",
                DICE + " batter scratched from lineup.",
                "No HOME advantage, this game.",
                "DISSONANT, this game.",
                "DISSONANT, this game."
            ];
            message = prefix + choices[d6() - 1];
            break;
        case 4:
            prefix = "Major issue with manager: ";
            choices = [
                "No HOT batter TFN.",
                DICE + " batter scratched from lineup.",
                "No HOME advantage, TFN.",
                "No HOME advantage, TFN.",
                "DISSONANT, TFN.",
                "DISSONANT, TFN."
            ];
            message = prefix + choices[d6() - 1];
            break;
        default:
            message = NON_ISSUE;
    }
    return "Front Office: " + message;
}

function stormyMedia() {
    var message;
    var prefix;
    var player;
    var choices;
    var issue;
    switch (d6()) {
        case 1:
            prefix = "Minor issue with player: ";
            player = player();
            issue = d6() <= 3 ? "UNHAPPY, this game." : "COLD, this game.";
            message = prefix + player + " " + issue;
            break;
        case 2:
            prefix = "Major issue with player: ";
            player = player();
            issue = d6() <= 3 ? "UNHAPPY, TFN." : "COLD, TFN.";
            message = prefix + player + " " + issue;
            break;
        case 3:
            prefix = "Minor issue with manager: ";
            choices = [
                DICE + " batter scratched from lineup.",
                "No HOME advantage, this game.",
                "No HOME advantage, this game.",
                "No HOME advantage, this game.",
                "DISSONANT, this game.",
                "DISSONANT, this game."
            ];
            message = prefix + choices[d6() - 1];
            break;
        case 4:
            prefix = "Major issue with manager: ";
            choices = [
                "No HOT batter TFN.",
                "No HOME advantage, TFN.",
                "No HOME advantage, TFN.",
                "DISSONANT, TFN.",
                "DISSONANT, TFN.",
                "DISSONANT, TFN."
            ];
            message = prefix + choices[d6() - 1];
            break;
        default:
            message = NON_ISSUE;
    }
    return "Media: " + message;
}

function stormyTeamTrainer() {
    function stormyTeamTrainerMajor() {
        switch (d6()) {
            case 1:
            case 2:
                return "Short-term injury, " + d6() + " games.";
            case 3:
                return "Injury TFN.";
            case 4:
                var d2 = d6() + d6();
                return "Medium-term injury, " + d2 + " games.";
            case 5:
                var dx2 = d6() * d6();
                return "Medium-term injury, " + dx2 + " games.";
            case 6:
                var d3 = d6() + d6() * d6();
                return "Long-term injury " + d3 + " games.";
        }
    }

    function stormyTeamTrainerMinorPitcher() {
        return [
            "WILD this game.",
            "WORKMAN this game.",
            "IRON this game.",
            "NOT FRESH this game.",
            "STRUGGLER this game.",
            "not available this game."
        ][d6() - 1];
    }

    function stormyTeamTrainerMinorHitter() {
        return [
            "WHIFFER this game.",
            "IRON this game.",
            "UTILITY this game.",
            "STOIC this game.",
            "not available this game.",
            "not available this game."
        ][d6() - 1];
    }


    var message;
    var prefix;
    var player;
    var choices;
    var issue;
    var d;
    switch (d6()) {
        case 1:
            prefix = "Issue with starter pitcher.";
            choices = [
                "Today's starter-minor issue.",
                "Last game's starter-minor issue.",
                "Next game's starter-minor issue.",
                "Today's starter-major issue.",
                "Last game's starter-major issue.",
                "Next game's starter-major issue."
            ];
            d = d6();
            player = choices[d - 1];
            if (d <= 3) {
               issue = stormyTeamTrainerMinorPitcher();
            } else {
               issue = stormyTeamTrainerMajor();
            }
            message = prefix + " " + player + " " + issue;
            break;
        case 2:
            prefix = "Issue with starter, non-pitcher.";
            choices = [
                "Infielder, minor issue.",
                "Infielder, minor issue.",
                "Infielder, major issue.",
                "Infielder, major issue.",
                "Outfielder, minor issue.",
                "Outfielder, major issue."
            ];
            d = d6();
            player = choices[d - 1];
            if (d == 1 || d == 2 || d == 5) {
                issue = stormyTeamTrainerMinorHitter();
            } else {
                issue = stormyTeamTrainerMajor();
            }
            message = prefix + " " + player + " " + issue;
            break;
        case 3:
            prefix = "Issue with non-starter, pitcher.";
            choices = [
                "Reliever most used, minor issue.",
                "Reliever most used, major issue.",
                "Reliever least used, minor issue.",
                "Reliever least used, major issue.",
                "Reliever used last game, minor issue.",
                "Reliever used last game, major issue."
            ];
            d = d6();
            player = choices[d - 1];
            if (d == 1 || d == 3 || d == 5) {
                issue = stormyTeamTrainerMinorPitcher();
            } else {
                issue = stormyTeamTrainerMajor();
            }
            message = prefix + " " + player + " " + issue;
            break;
        case 4:
            prefix = "Issue with non-starter, non-pitcher.";
            choices = [
                "Reserve Infielder, minor issue.",
                "Reserve Infielder, minor issue.",
                "Reserve Infielder, major issue.",
                "Reserve Infielder, major issue.",
                "Reserve Outfielder, minor issue.",
                "Reserve Outfielder, major issue."
            ];
            d = d6();
            player = choices[d - 1];
            if (d == 1 || d == 2 || d == 5) {
                issue = stormyTeamTrainerMinorHitter();
            } else {
                issue = stormyTeamTrainerMajor();
            }
            message = prefix + " " + player + " " + issue;
            break;
        default:
            message = NON_ISSUE;
    }
    return "Team Trainer: " + message;
}

function stormyBattingCoach() {
    function stormyBattingCoachStarter() {
        switch (d6()) {
            case 1:
                return "1B or RF.";
            case 2:
                return "2B or CF.";
            case 3:
                return "3B or LF.";
            case 4:
                return "SS or C.";
            case 5:
                return "Designated HOT batter.";
            case 6:
                return "Designated COLD batter.";
        }
    }

    function stormyBattingCoachMinor() {
        switch (d6()) {
            case 1:
                return "WHIFFER, this game.";
            case 2:
                return "UTILITY, this game.";
            case 3:
                return "COLD, this game.";
            case 4:
                return "UNHAPPY, this game.";
            case 5:
                return "SAD SACK, this game.";
            case 6:
                return "EAGER, this game.";
        }
    }

    function stormyBattingCoachMajor() {
        switch (d6()) {
            case 1:
                return "WHIFFER, TFN.";
            case 2:
                return "UTILITY, TFN.";
            case 3:
                return "COLD, TFN.";
            case 4:
                return "SAD SACK, TFN.";
            case 5:
                return "EAGER, TFN.";
            case 6:
                return "DELTA RATING, TFN.";
        }
    }

    function stormyBattingCoachReserve() {
        switch (d6()) {
            case 1:
            case 2:
                return "Reserve OF.";
            case 3:
            case 4:
            case 5:
                return "Reserve OF.";
            case 6:
                return "Reserve C.";
        }
    }

    var message;
    switch (d6()) {
        case 1:
            message = "Minor issue with starter.";
            message += " " + stormyBattingCoachStarter() + " " + stormyBattingCoachMinor();
            break;
        case 2:
            message = "Major issue with starter.";
            message += " " + stormyBattingCoachStarter() + " " + stormyBattingCoachMajor();
            break;
        case 3:
            message = "Minor issue with reserve.";
            message += " " + stormyBattingCoachReserve() + " " + stormyBattingCoachMinor();
            break;
        case 4:
            message = "Major issue with reserve.";
            message += " " + stormyBattingCoachReserve() + " " + stormyBattingCoachMinor();
            break;
        default:
            message = NON_ISSUE;
    }
    return "Batting Coach: " + message;
}

function stormyPitchingCoach() {
    var message;

    function stormyPitchingCoachStarter() {
        switch (d6()) {
            case 1:
            case 2:
                return "Today's starter.";
            case 3:
            case 4:
                return "Last game's starter.";
            case 5:
            case 6:
                return "Next game's starter.";
        }
    }

    function stormyPitchingCoachMinor() {
        switch (d6()) {
            case 1:
                return "WILD, this game.";
            case 2:
                return "WORKMAN, this game.";
            case 3:
                return "COLD, this game.";
            case 4:
                return "UNHAPPY, this game.";
            case 5:
                return "NOT FRESH, this game.";
            case 6:
                return "STRUGGLER, this game.";
        }
    }

    function stormyPitchingCoachMajor() {
        switch (d6()) {
            case 1:
                return "WILD, TFN.";
            case 2:
                return "WORKMAN, TFN.";
            case 3:
                return "COLD, TFN.";
            case 4:
                return "UNHAPPY, TFN.";
            case 5:
                return "NOT FRESH, TFN.";
            case 6:
                return "STRUGGLER, TFN.";
        }
    }

    function stormyPitchingCoachReliever() {
        switch (d6()) {
            case 1:
            case 2:
                return "Most-used reliever.";
            case 3:
            case 4:
                return "Last-used reliever.";
            case 5:
            case 6:
                return "Least-used reliever.";
        }
    }

    switch (d6()) {
        case 1:
            message = "Minor issue with starter.";
            message += " " + stormyPitchingCoachStarter() + " " + stormyPitchingCoachMinor();
            break;
        case 2:
            message = "Major issue with starter.";
            message += " " + stormyPitchingCoachStarter() + " " + stormyPitchingCoachMajor();
            break;
        case 3:
            message = "Minor issue with reliever.";
            message += " " + stormyPitchingCoachReliever() + " " + stormyPitchingCoachMinor();
            break;
        case 4:
            message = "Major issue with reliever.";
            message += " " + stormyPitchingCoachReliever() + " " + stormyPitchingCoachMajor();
            break;
        default:
            message = NON_ISSUE;
    }
    return "Pitching Coach: " + message;
}

function injury() {
    var player;
    var games;
    var catcher = "";

    function injuryOutfielder() {
        switch (d6()) {
            case 1:
            case 2:
                return "RF";
            case 3:
            case 4:
                return "CF";
            case 5:
            case 6:
                return "LF";
        }
    }

    function injuryInfielder() {
        switch (d6()) {
            case 1:
                return "1B";
            case 2:
                return "2B";
            case 3:
                return "3B";
            case 4:
                return "SS";
            case 5:
                return "C";
            case 6:
                return "DH";
        }
    }

    function injuryGamesPitcher() {
        switch (d6()) {
            case 1:
            case 2:
                return "this game";
            case 3:
                return "this game and next start";
            case 4:
                return "this game and next " + d6() + " starts";
            case 5:
            case 6:
                return injuryMajorInjury();
        }
    }

    function injuryGamesBatter() {
        switch (d6()) {
            case 1:
            case 2:
                return "1 game";
            case 3:
            case 4:
                return d6() + " games";
            case 5:
                var d2 = d6() + d6();
                return d2 + " games";
            case 6:
                return injuryMajorInjury();
        }
    }

    function injuryMajorInjury() {
        switch (d6()) {
            case 1:
            case 2:
                return "TFN";
            case 3:
            case 4:
                var g2 = d6() * d6() * 2;
                return g2 + " games";
            case 5:
            case 6:
                var g3 = d6() * d6() * 3;
                return g3 + " games";
        }
    }

    switch (d6()) {
        case 1:
            player = "Starting Pitcher";
            games = injuryGamesPitcher();
            catcher = "Also, catcher must sit out this game.";
            break;
        case 2:
            if (d6() <= 3) {
                player = "Starting Pitcher";
                games = injuryGamesPitcher();
            } else {
                player = injuryOutfielder();
                games = injuryGamesBatter();
            }
            break;
        case 3:
            player = injuryOutfielder();
            games = injuryGamesBatter();
            catcher = "Also, catcher must sit out this game.";
            break;
        case 4:
            player = injuryInfielder();
            games = injuryGamesBatter();
            break;
        case 5:
            player = injuryInfielder();
            games = injuryGamesBatter();
            catcher = "Also, catcher must sit out this game.";
            break;
        case 6:
            player = injuryInfielder();
            games = injuryGamesBatter();
            break;
    }
    return "Injury: " + player + " out for " + games + ". " + catcher;
}
