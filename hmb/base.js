function sortNumber(a, b) {
    return a - b;
}

function d6() {
    return Math.floor(Math.random() * 6) + 1;
}

function decider() {
    return Math.random() >= 0.5;
}

function dice(n) {
    var dice = [];
    for (var i = 0; i < n; i++) {
        dice.push(d6());
    }
	return dice.sort(sortNumber);
}

function lookupResult(chart, roll) {
    switch (roll.length) {
        case 1:
            return chart[roll[0]];
        case 2:
            return chart[roll[0]][roll[1]];
        case 3:
            return chart[roll[0]][roll[1]][roll[2]];
    }
}

function showDeciderDie() {
    $("#extraRollDiv").removeClass('in');
    window.setTimeout(function() {
        $("h4#extraRoll").html("");
        var $h4 = $("h4#decider");
        $h4.removeClass("dd-no");
        if (!decider()) {
            $h4.addClass("dd-no");
        }
        $("#extraRollDiv").addClass('in');
    }, 150);
}

function showMainChart() {
    $("#mainChart, .miniChartDiv, .microChart, #gameDayDiv").removeClass('in').addClass('hidden');
    
    var roll = dice(3);
    var result = lookupResult(MainChart, roll);
    var baserunning = lookupResult(Baserunning, [ roll[0] ]);
    var order = d6();
    var html;
    switch (order) {
        case 1:
            html = roll[0] + "-<span class='text-danger'>" + roll[1] + "</span>-<span class='text-info'>" + roll[2] + "</span>";
            break;
        case 2:
            html = roll[0] + "-<span class='text-info'>" + roll[1] + "</span>-<span class='text-danger'>" + roll[2] + "</span>";
            break;
        case 3:
            html = "<span class='text-danger'>" + roll[0] + "</span>-<span class='text-info'>" + roll[1] + "</span>-" + roll[2];
            break;
        case 4:
            html = "<span class='text-danger'>" + roll[0] + "</span>-" + roll[1] + "-<span class='text-info'>" + roll[2] + "</span>";
            break;
        case 5:
            html = "<span class='text-info'>" + roll[0] + "</span>-<span class='text-danger'>" + roll[1] + "</span>-" + roll[2];
            break;
        case 6:
            html = "<span class='text-info'>" + roll[0] + "</span>-" + roll[1] + "-<span class='text-danger'>" + roll[2] + "</span>";
            break;
    }
    
    
    window.setTimeout(function() {
        var $mainChart = $("#mainChart");
        $mainChart.find("tbody td:eq(0) strong").html(html);
        $mainChart.find("tbody td:eq(1)").html(result[0]);
        $mainChart.find("tbody td:eq(2)").html(result[1]);
        $mainChart.find("tbody td:eq(3)").html(result[2]);
        $mainChart.find("tfoot td:eq(0) small").html(baserunning);
        $mainChart.removeClass('hidden').addClass('in');
    }, 150);
    showDeciderDie();
}


function showMiniChart(heading, headingClass, chart, hideMain, type) {
    if (hideMain) {
        $("#mainChart, .miniChartDiv, #gameDayDiv").removeClass('in').addClass('hidden');
    }
    $(".microChart").removeClass('in').addClass('hidden');

    var roll = dice(2);
    var result = lookupResult(chart, roll);
    var baserunning = lookupResult(MiniBaserunning, [ roll[0] ]);

    var div = type === 'color' ? $("#colorChartDiv") : $("#dramaChartDiv");

    $("h4", div).html(heading).removeClass().addClass(headingClass);
    $("tbody td:eq(0) strong", div).html(roll[0] + "-" + roll[1]);
    $("tbody td:eq(1)", div).html(result);
    $("tfoot td:eq(0) small", div).html(baserunning);
    div.removeClass('hidden').addClass('in');
    showDeciderDie();
}

function showFenceChart() {
    var roll = dice(1);
    var result = lookupResult(Fence, roll);
    var $microFence = $("#microFence");
    $microFence.find("tbody td:eq(0) strong").html(roll[0]);
    $microFence.find("tbody td:eq(1)").html(result[0]);
    $microFence.find("tbody td:eq(2)").html(result[1]);
    $microFence.find("tbody td:eq(3)").html(result[2]);
    $microFence.find("tbody td:eq(4)").html(result[3]);
    $("#microFenceDiv").removeClass('hidden').addClass('in');
    showDeciderDie();
}

function showGloveChart() {
    var goingRoll = dice(1);
    var goingResult = lookupResult(GloveGoing, goingRoll);
    var $microGlove = $("#microGlove");
    $microGlove.find("tbody td:eq(0) strong").html(goingRoll[0]);
    $microGlove.find("tbody td:eq(1)").html(goingResult);
    var leapsRoll = dice(1);
    var leapsResult = lookupResult(GloveLeaps, leapsRoll);
    $microGlove.find("tbody td:eq(2) strong").html(leapsRoll[0]);
    $microGlove.find("tbody td:eq(3)").html(leapsResult);
    $("#microGloveDiv").removeClass('hidden').addClass('in');
    showDeciderDie();
}

function showScorerChart() {
    var roll = dice(1);
    var result = lookupResult(Scorer, roll);
    var $microScorer = $("#microScorer");
    $microScorer.find("tbody td:eq(0) strong").html(roll[0]);
    $microScorer.find("tbody td:eq(1)").html(result);
    $("#microScorerDiv").removeClass('hidden').addClass('in');
    showDeciderDie();
}

function showExtraRoll(num) {
    $("#extraRollDiv").removeClass('in');
    window.setTimeout(function() {
        var roll = dice(num);
        $("h4#extraRoll").html(roll.join("-"));
        var $h4 = $("h4#decider");
        $h4.removeClass("dd-no");
        if (!decider()) {
            $h4.addClass("dd-no");
        }
        $("#extraRollDiv").addClass('in');
    }, 150);
}

function showGameDay(type) {
    $("#mainChart, .miniChartDiv, .microChart, #gameDayDiv").removeClass('in').addClass('hidden');
    var heading = type === 'stormy' ? "Clubhouse Mood: Stormy" : "Clubhouse Mood: Sunny";
    var message = type === 'stormy' ? stormy() : sunny();
    var headingClass = type === 'stormy' ? 'text-info' : 'text-danger';
    var backgroundClass = type === 'stormy' ? 'bg-info' : 'bg-danger';

    window.setTimeout(function() {
        var $gameDayDiv = $("#gameDayDiv");
        $gameDayDiv.find("h5").html(heading).removeClass().addClass(headingClass);
        $gameDayDiv.find("p").html(message).removeClass().addClass(backgroundClass);
        $gameDayDiv.removeClass('hidden').addClass('in');
    }, 150);
}

$(function() {
    
    // Mobile nav -- collapse after clicking button.
    $(".navbar-collapse").collapse({ toggle: false });
    $(".navbar-collapse button").on("click", function() {
        $(".navbar-collapse").collapse('hide');
    });
    
    $(".mainRoll").on("click", function(e) {
        e.preventDefault();
        showMainChart();
    });
    
    $(".rightNowRoll").on("click", function(e) {
        e.preventDefault();
        showMiniChart("Baseball RIGHT NOW!", "text-primary", RightNow, true, 'color');
    });
    $(".experienceRoll").on("click", function(e) {
        e.preventDefault();
        showMiniChart("Player Experience", "text-danger", Experience, true, 'color');
    });
    $(".chemistryRoll").on("click", function(e) {
        e.preventDefault();
        showMiniChart("Team Chemistry", "text-success", Chemistry, true, 'color');
    });
    $(".infieldDramaRoll").on("click", function(e) {
        e.preventDefault();
        showMiniChart("Infield DRAMA!", "", InfieldDrama, false, 'drama');
    });
    $(".outfieldDramaRoll").on("click", function(e) {
        e.preventDefault();
        showMiniChart("Outfield DRAMA!", "", OutfieldDrama, false, 'drama');
    });
    $(".plateDramaRoll").on("click", function(e) {
        e.preventDefault();
        showMiniChart("Plate DRAMA!", "", PlateDrama, false, 'drama');
    });

    $(".fenceRoll").on("click", function(e) {
        e.preventDefault();
        showFenceChart();    
    });
    $(".gloveRoll").on("click", function(e) {
        e.preventDefault();
        showGloveChart();    
    });
    $(".scorerRoll").on("click", function(e) {
        e.preventDefault();
        showScorerChart();    
    });
    $(".ballpark").on("click", function(e) {
        e.preventDefault();
        showMiniChart("BLACK 1 Event Mini-Chart &bull; Ballpark Qualities", "", Ballpark, true, 'color');
    });
    $(".umpireEmpty").on("click", function(e) {
        e.preventDefault();
        showMiniChart("BLUE 1 Event Mini-Chart &bull; Umpire Calls, Bases Empty", "text-primary", UmpireEmpty, true, 'color');
    });
    $(".umpire1st").on("click", function(e) {
        e.preventDefault();
        showMiniChart("BLUE 1 Event Mini-Chart &bull; Umpire Calls, Runner on 1st", "text-primary", Umpire1st, true, 'color');
    });
    $(".umpire2nd").on("click", function(e) {
        e.preventDefault();
        showMiniChart("BLUE 1 Event Mini-Chart &bull; Umpire Calls, Runner on 2nd", "text-primary", Umpire2nd, true, 'color');
    });
    $(".umpire3rd").on("click", function(e) {
        e.preventDefault();
        showMiniChart("BLUE 1 Event Mini-Chart &bull; Umpire Calls, Runner on 3rd", "text-primary", Umpire3rd, true, 'color');
    });
    $(".umpire1st2nd").on("click", function(e) {
        e.preventDefault();
        showMiniChart("BLUE 1 Event Mini-Chart &bull; Umpire Calls, Runner on 1st & 2nd", "text-primary", Umpire1st2nd, true, 'color');
    });
    $(".umpire1st3rd").on("click", function(e) {
        e.preventDefault();
        showMiniChart("BLUE 1 Event Mini-Chart &bull; Umpire Calls, Runner on 1st & 3rd", "text-primary", Umpire1st3rd, true, 'color');
    });
    $(".umpire2nd3rd").on("click", function(e) {
        e.preventDefault();
        showMiniChart("BLUE 1 Event Mini-Chart &bull; Umpire Calls, Runner on 2nd & 3rd", "text-primary", Umpire2nd3rd, true, 'color');
    });
    $(".umpireLoaded").on("click", function(e) {
        e.preventDefault();
        showMiniChart("BLUE 1 Event Mini-Chart &bull; Umpire Calls, Bases Loaded", "text-primary", UmpireLoaded, true, 'color');
    });
    $(".red1black3").on("click", function(e) {
        e.preventDefault();
        showMiniChart("RED 1, BLACK 3 Event Results &bull; Memorable Plays in the Field", "text-danger", Red1Black3, true, 'color');
    });
    $(".red1black5").on("click", function(e) {
        e.preventDefault();
        showMiniChart("RED 1, BLACK 5 Event Results &bull; Balks & Bogeys", "text-danger", Red1Black5, true, 'color');
    });
    $(".extraDie").on("click", function(e) {
        e.preventDefault();
        showExtraRoll(1);    
    });
    $(".extra2Dice").on("click", function(e) {
        e.preventDefault();
        showExtraRoll(2);    
    });
    $(".extra3Dice").on("click", function(e) {
        e.preventDefault();
        showExtraRoll(3);    
    });
    $(".stormy").on("click", function(e) {
        e.preventDefault();
        showGameDay('stormy');
    });
    $(".sunny").on("click", function(e) {
        e.preventDefault();
        showGameDay('sunny');
    });
});
