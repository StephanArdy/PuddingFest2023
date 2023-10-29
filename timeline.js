function showTimeline(timelineId) {
    // Sembunyikan semua timeline terlebih dahulu
    document.getElementById("conferenceTimeline").style.display = "none";
    document.getElementById("workshopTimeline").style.display = "none";
    document.getElementById("hackathonTimeline").style.display = "none";

    // Tampilkan timeline yang sesuai
    document.getElementById(timelineId).style.display = "block";
}

function changeColor(buttonId){

    document.getElementById("button-conference").style.color = "rgb(255, 255, 255)";
    document.getElementById("button-workshop").style.color = "rgb(255, 255, 255)";
    document.getElementById("button-hackathon").style.color = "rgb(255, 255, 255)";

    document.getElementById(buttonId).style.color = "rgb(235,61,122)";
}

  document.getElementById("button-conference").addEventListener("click", function() {
    showTimeline("conferenceTimeline");
    changeColor("button-conference");
  });

  document.getElementById("button-workshop").addEventListener("click", function() {
    showTimeline("workshopTimeline");
    changeColor("button-workshop");

  });

  document.getElementById("button-hackathon").addEventListener("click", function() {
    showTimeline("hackathonTimeline");
    changeColor("button-hackathon");

  });
