/* OBJECTIVE 1
let $button = $("<button>Click Me!</button>");
$button.appendTo("body");
$button.click(function () {
    alert("Hey nice person.")
});
*/

/* OBJECTIVE 2
let $button = $("#button");
$button.click( function () {
    let message = $("#text-box").val();
    alert(message);
});
*/

/* OBJECTIVE 3
let $div = $("#div");
$div.hover(function() {
    div.style.backgroundColor = "red";
}, function() {
    div.style.backgroundColor = "black";
});
*/

/* OBJECTIVE 4
let $p = $("#p");
$p.click( function() {
    let $allchar = "0123456789ABCDEF";
    let $randcol = "";

    for (let i = 0; i < 6; i++) {
        $randcol += $allchar[Math.floor(Math.random() * 16)];
    }

    $($p).css("color", "#" + $randcol);
});
*/

/* OBJECTIVE 5
let $button = $("#button");
let $div = $("#div");
$button.click( function() {
    let $span = $("<span>Evan</span>");
    $($span).appendTo($div);
});
*/

let $friends = ["Trey", "Tony", "Russ", "Ray", "Cyro", "Jen", "Dave", "Andy", "Peter", "Russell"];
let $button = $("#button");
let $ul = $("#ul");
$($button).click( function () {
    for (let i = 0; i < $friends.length; i++) {
        let $li = $("<li>" + ($friends[i]) + "</li>");
        $($li).appendTo($ul);
    }
});