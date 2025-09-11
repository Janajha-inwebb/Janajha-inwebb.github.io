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
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(300,700,200,20, "red")
createPlatform(500,600,200,20, "red")
createPlatform(350, 500, 100,20, "red")
createPlatform(250,450, 100, 20, "red")
createPlatform(100,175,50, 325,"red")
createPlatform(150,400,65,20)
createPlatform(499,600,5,120,"red")
createPlatform(150,215,65,20)
createPlatform(300,320,65,20)
createPlatform(488,200,100,20,"red")
createPlatform(648,200,100,20,"red")
createPlatform(588,350,75,10, "red")
createPlatform(700,400,100,20,"red")
createPlatform(750,100,5,100,"red")
createPlatform(1000,300,100,20,"red")
createPlatform(1000,500,100,20,"red")
createPlatform()



    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
