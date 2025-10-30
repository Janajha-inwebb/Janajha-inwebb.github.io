$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
  
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();
//I TURNED OFF GRID BECAUSE IT MAKES GAME EXTRA GLITCHY

    // TODO 2 - Create Platforms
createPlatform(300,700,200,20, "#CD5D67")
createPlatform(500,600,200,20, "#CD5D67")
createPlatform(350, 500, 100,20, "#CD5D67")
createPlatform(250,450, 100, 20, "#CD5D67")
createPlatform(100,175,50, 325,"#CD5D67")
createPlatform(150,400,65,20,"#CD5D67")
createPlatform(499,600,5,120,"#CD5D67")
createPlatform(150,215,65,20,"#CD5D67")
createPlatform(300,320,65,20,"#CD5D67")
createPlatform(488,200,100,20,"#CD5D67")
createPlatform(648,200,100,20,"#CD5D67")
createPlatform(588,350,75,10, "#CD5D67")
createPlatform(700,400,100,20,"#CD5D67")
createPlatform(747,100,5,120, "#CD5D67")
createPlatform(1000,300,100,20,"#CD5D67")
createPlatform(1000,500,100,20,"#CD5D67")


createPlatform(1050,625,100,20, "#CD5D67")
createPlatform(1200,200,100,20, "#CD5D67")
createPlatform(750,200,100,20,"#CD5D67")


    // TODO 3 - Create Collectables
createCollectable("steve", 100, 140);
createCollectable("diamond",1235,160)
createCollectable("database",773,160)
createCollectable("grace", 500,700)
// createCollectable()
// createCollectable("Diamond", 130, 150)

    
    // TODO 4 - Create Cannons
createCannon("right",750,3000);
createCannon("right",245, 1100);
createCannon("top",375, 2400);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
