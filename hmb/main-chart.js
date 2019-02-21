var FLAG = ' <span class="glyphicon glyphicon-flag" aria-hidden="true"></span>';
var THUMB = ' <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>';
var EYE = ' <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>';
var FLASH = ' <span class="glyphicon glyphicon-flash" aria-hidden="true"></span>';
var HOURGLASS = ' <span class="glyphicon glyphicon-hourglass" aria-hidden="true"></span>';
var STAR = ' <span class="glyphicon glyphicon-star" aria-hidden="true"></span> ';
var GLASSES = ' <span class="glyphicon glyphicon-sunglasses" aria-hidden="true"></span> ';
var SQUARE = ' <span class="glyphicon glyphicon-th-large" aria-hidden="true"></span> ';

var MainChart = {
    1: {
        1: {
            1: [ "ACE? Ground out to 3B.", "SCRAPPER? Double to RF.", "Home Run to LF!" ],
            2: [ "FLASH? Strikeout!" + EYE, "SAD SACK? Pop out to SS.", "Check with SCORER. <strong>&sect;</strong>" ],
            3: [ "ACE or DYNAMIC? Ground out to 1B.", "SLUGGER? Double to LF." + FLASH, "Single to CF.<br><small>SAD SACK or HR KING strikes out.</small>" ],
            4: [ "FRESH? Ground out to SS.", "SAD SACK or PATIENT? Foul out to C.", "<span class='text-success'>Single to RF.</span>" ],
            5: [ "FRESH? Pop fly to [choice] IF.", "HR KING or SAD SACK? Strikeout!", "Double to LF." ],
            6: [ "FRESH? Strikeout!", "UTILITY or SAD SACK? Ground out to P.", "Single to LF. <strong>&Delta;</strong>" ]
        },
        2: {
            2: [ "WORKMAN? Single to CF.", "CHAMP or WHIFFER? Nubbed IF single to 3B.", "Line out to 3B." ],
            3: [ "Both FLASH and FRESH? Strikeout!", "", "Ground out to SS." + SQUARE ],
            4: [ "CONTROL? Ground out to SS.", "EAGER? Pop out to 1B.", "Base on balls. [ACTIVE steals!]" ],
            5: [ "STRUGGLER? Crack! FENCE!", "PATIENT? Base on balls." + GLASSES, "Ground out to 3B." + THUMB ],
            6: [ "FRESH? Lineout to 2B.", "SAD SACK? Strikeout.", "<span class='text-info'>Single past 2B.</span>" ]
        },
        3: {
            3: [ "", "SLUGGER? Home Run to CF!", "Fly out to LF." ],
            4: [ "GOLD Catcher? Strikeout!" + EYE, "CHAMPION? Bloop single to LF.", "<strong>Outfield DRAMA!</strong>" ],
            5: [ "", "", "<strong>UNUSUAL RESULT.</strong>" ],
            6: [ "ACE? Strikeout!" + EYE, "WHIFFER or COLD? Strikeout!", "<strong>Infield DRAMA!</strong>" ]
        },
        4: {
            4: [ "FLASH? Strikeout!" + GLASSES, "HERO? Single to RF.", "Ground out to SS." + THUMB ],
            5: [ "STRUGGLER? Wild pitch!", "", "Ground out to 1B/3B." + SQUARE ],
            6: [ "FLASH? Strikeout!" + EYE, "CHAMPION? Bloop single to LF.", "Ground out to 2B." + SQUARE ]
        },
        5: {
            5: [ "", "HR KING? Home Run to CF!", "Fly out to CF." ],
            6: [ "", "WHIFFER? Strikeout!", "<strong>Outfield DRAMA!</strong>" ]
        },
        6: {
            6: [ "WORKMAN or GILDED? <span class='text-danger'>Single to LF.</span>", "WHIFFER? Strikeout!", "<span class='text-danger'>Ground out to 3B.</span>" ]
        }
    },
    2: {
        2: {
            2: [ "", "SAD SACK? Fly out to RF." + THUMB, "<span class='text-success'>Double to CF.<br><small>HR KING hits Home Run!</small></span>" ],
            3: [ "WILD? Base on balls." + FLAG, "SLUGGER or UTILITY? Lineout to SS." + THUMB, "Single to LF. [ACTIVE steals!]" ],
            4: [ "Pitching at HOME? Pop out to SS.", "SLUGGER? Double to LF." + FLASH, "<span class='text-info'>Single to RF. [ACTIVE steals!]</span>" ],
            5: [ "STAR? Ground out to [choice] IF.", "SLUGGER or SAD SACK? Pop out, RF." + THUMB, "Single to CF [ACTIVE steals!]" ],
            6: [ "Batter Hit by Pitch? (see below)", "CLEAN UP BATTER? Home Run to RF!", "Fly out to LF." + THUMB ]
        },
        3: {
            3: [ "ACE or STAR? Ground out to SS.", "SLUGGER? Home Run to LF!", "Fly out to CF." ],
            4: [ "Runner(s) on Base? <strong>Plate DRAMA!</strong>", "HOT BATTER? FENCE!", "Pop out to 3B." ],
            5: [ "WILD? Base on balls.", "EAGER? Single thru SS." + THUMB, "Ground out to 2B." + HOURGLASS ],
            6: [ "DB CONTROL or DYNAMIC? Ground out to P, SS.", "PITCHER batting? Strikeout!", "Base on balls." ]
        },
        4: {
            4: [ "ACE? Fly out to CF.", "CHAMPION? Single to CF.", "Ground out to SS." + THUMB ],
            5: [ "", "HERO? Single to LF.", "<span class='text-danger'>Pop out to 2B.</span>" ],
            6: [ "CONTROL? Ground out to P.", "EAGER or SAD SACK? Pop out to 3B.", "Base on balls. [ACTIVE steals!]" ]
        },
        5: {
            5: [ "STAR? Strikeout!" + EYE, "HR KING? Home Run to LF!", "Fly out to LF." ],
            6: [ "STRUGGLER? Single past 1B/3B.", "CHAMPION or PATIENT? Base on Balls.", "<strong>Infield DRAMA!</strong>" ]
        },
        6: {
            6: [ "Runner on first thrown out.", "LEAD-OFF BATTER? Single to CF.", "Fly out to RF." ]
        }
    },
    3: {
        3: {
            3: [ "", "UTILITY or SAD SACK? Foul out to 1B.", "Triple to deep LF.<br><small>HR King hits HR!</small>" ],
            4: [ "ACE or STAR? Pop out to 1B.", "SAD SACK? Line out to SS.", "Single to LF." + FLAG ],
            5: [ "WILD? Base on balls." + FLAG, "SAD SACK? Ground out to 2B.", "Single to RF, Stolen Base. [STOIC holds]" ],
            6: [ "ACE or DYNAMIC? <span class='text-danger'>Fly out to CF.</span>", "SAD SACK, UTILITY or PATIENT? Called 3rd Strike!", "<span class='text-danger'>Single to CF.</span>" ]
        },
        4: {
            4: [ "PROSPECT? Well-hit, FENCE!", "PATIENT? Base on Balls.", "Pop out to 2B." ],
            5: [ "IRON Catcher? Base on Balls.", "GOOD EYE? <span class='text-warning'>Check swing-ball!</span>", "<span class='text-info'>Strikeout.</span>" ],
            6: [ "", "EAGER? Fly out to CF.", "<span class='text-success'>Base on balls. [ACTIVE steals!]</span>" ]
        },
        5: {
            5: [ "STRUGGLER or GILDED? Single to LF.", "CHAMPION? Double to LF. <strong>&Sigma;</strong>", "Ground out to 2B." + THUMB ],
            6: [ "SAME? Strikeout&dagger;", "UTILITY or SAD SACK? Ground out to SS.", "Single down 1B/3B line." ]
        },
        6: {
            6: [ "", "PINCH HITTER? Single to RF.", "Fly out to CF." ]
        }
    },
    4: {
        4: {
            4: [ "", "SCRAPPER? Solid single to LF.", "Double to RF.<br><small>HR KING hits Home Run!</small>" ],
            5: [ "WORKMAN? Double to RF. <strong>&Sigma;</strong>", "PATIENT? Base on Balls.", "Ground out to 1B." ],
            6: [ "STAR? Ground out to 2B.", "SAD SACK, UTILITY or PATIENT? Called 3rd Strike!", "<span class='text-danger'>Single to RF. [ACTIVE steals!]</span>" ]
        },
        5: {
            5: [ "FLASH? Strikeout!" + EYE, "HR KING? Home Run to RF!", "Ground out to 1B." ],
            6: [ "", "PATIENT? Base on Balls.", "<span class='text-success'>Fly Out to CF.</span>" ]
        },
        6: {
            6: [ "CONTROL? Pitch read, single to LF.", "HR KING or SLUGGER? Strikeout!", "Difficult ground out [choice IF]." ]
        }
    },
    5: {
        5: {
            5: [ "ACE or STAR? Deep fly out, RF.", "SCRAPPER? Looping single to CF.", "Home Run to LF!" ],
            6: [ "ACE? Lineout to 3B.", "SAD SACK? Lineout to 1B.", "Double to RF. [ACTIVE steals!] <strong>&Sigma;</strong>" ]
        },
        6: {
            6: [ "WILD? Base on balls.", "GOOD EYE? Foul Tip, still at bat.", "<span class='text-info'>Strikeout.</span>" ]
        }
    },
    6: {
        6: {
            6: [ "ACE? Fly out to RF.", "SAD SACK? Fly out to CF.", "Deep Drive--GLOVE? <strong>&Omega;</strong>" ]
        }
    }
};

Baserunning = {
    1: "1-X-X BASERUNNING: Double play on ground outs." + STAR + "Runners hold on fly outs." + STAR + "Runners advance one base on hits, two bases on doubles. (ACTIVE runners score from second base on any hit; With two outs, ANY runner scores from second on any hit.)",
    2: "2-X-X BASERUNNING: Fielder's choice on ground outs." + STAR + "ACTIVE runner on third base scores on fly outs, others hold." + STAR + "Runners advance one base on singles, two bases on doubles. (ACTIVE runners score from first on doubles, from second on any hit.)",
    3: "3-X-X BASERUNNING: Fielder's choice on ground outs." + STAR + "STOIC Runner on third base holds on fly outs, others score." + STAR + "Runners advance two bases on ANY hit, single or double. See note below if STOIC runner on first base.",
    4: "4-X-X thru 6-X-X BASERUNNING: Runners advance one base on ground outs." + STAR + "Runner on third base scores on fly outs." + STAR + "Runners advance two bases on singles, score on doubles. See note below if STOIC runner on first base.",
    5: "4-X-X thru 6-X-X BASERUNNING: Runners advance one base on ground outs." + STAR + "Runner on third base scores on fly outs." + STAR + "Runners advance two bases on singles, score on doubles. See note below if STOIC runner on first base.",
    6: "4-X-X thru 6-X-X BASERUNNING: Runners advance one base on ground outs." + STAR + "Runner on third base scores on fly outs." + STAR + "Runners advance two bases on singles, score on doubles. See note below if STOIC runner on first base."
};


MiniBaserunning = {
    1: "1-X BASERUNNING: Double play on ground outs." + STAR + "Runners hold on fly outs." + STAR + "Runners advance one base on hits, two bases on doubles. (ACTIVE runners score from second base on any hit; With two outs, ANY runner scores from second on any hit.)",
    2: "2-X BASERUNNING: Fielder's choice on ground outs." + STAR + "ACTIVE runner on third base scores on fly outs, others hold." + STAR + "Runners advance one base on singles, two bases on doubles. (ACTIVE runners score from first on doubles, from second on any hit.)",
    3: "3-X BASERUNNING: Fielder's choice on ground outs." + STAR + "STOIC Runner on third base holds on fly outs, others score." + STAR + "Runners advance two bases on ANY hit, single or double. STOIC runner on first base advances only to second base on single, third base on double.",
    4: "4-X thru 6-X BASERUNNING: Runners advance one base on ground outs." + STAR + "Runner on third base scores on fly outs." + STAR + "Runners advance two bases on singles, score on doubles. STOIC runner on first base advances only to second base on single, third base on double, EXCEPT with two outs.",
    5: "4-X thru 6-X BASERUNNING: Runners advance one base on ground outs." + STAR + "Runner on third base scores on fly outs." + STAR + "Runners advance two bases on singles, score on doubles. STOIC runner on first base advances only to second base on single, third base on double, EXCEPT with two outs.",
    6: "4-X thru 6-X BASERUNNING: Runners advance one base on ground outs." + STAR + "Runner on third base scores on fly outs." + STAR + "Runners advance two bases on singles, score on doubles. STOIC runner on first base advances only to second base on single, third base on double, EXCEPT with two outs."
};
