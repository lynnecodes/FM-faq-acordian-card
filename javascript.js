
function bold1() {
   var boldTitle1 = document.getElementById("title1").style.fontWeight ;
 
    if(boldTitle1 == 'normal') {
        document.getElementById("title1").style.fontWeight = 'bold';
    } else {
        document.getElementById("title1").style.fontWeight = 'normal';
    }
}

function bold2() {
    var boldTitle2 = document.getElementById("title2").style.fontWeight ;
  
    if(boldTitle2 == 'normal') {
        document.getElementById("title2").style.fontWeight = 'bold';
    } else {
        document.getElementById("title2").style.fontWeight = 'normal';
    }
}

function bold3() {
var boldTitle3 = document.getElementById("title3").style.fontWeight ;

    if(boldTitle3 == 'normal') {
        document.getElementById("title3").style.fontWeight = 'bold';
    } else {
        document.getElementById("title3").style.fontWeight = 'normal';
    }
}

function bold4() {
var boldTitle4 = document.getElementById("title4").style.fontWeight ;

    if(boldTitle4 == 'normal') {
        document.getElementById("title4").style.fontWeight = 'bold';
    } else {
        document.getElementById("title4").style.fontWeight = 'normal';
    }
}

function bold5() {
    var boldTitle5 = document.getElementById("title5").style.fontWeight ;
    
        if(boldTitle5 == 'normal') {
            document.getElementById("title5").style.fontWeight = 'bold';
        } else {
            document.getElementById("title5").style.fontWeight = 'normal';
        }
    }



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}