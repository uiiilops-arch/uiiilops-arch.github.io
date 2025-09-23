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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "gray"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(400,500,220,240);
createPlatform(400,380,200,20);
createPlatform(300,610,10,10);
createPlatform(780,350,10,10);
createPlatform(960,320,10,10);
createPlatform(1200,600,10,10);
createPlatform(1280,490,20,10);
createPlatform(1300,355,100,385);


    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 300);


    
    // TODO 4 - Create Cannons
    createCannon("right",150,300)
     createCannon("left",400,650)
     createCannon("right",800,650)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
