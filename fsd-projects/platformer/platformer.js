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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(99, 99, 99)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(480,290,220,20)
createPlatform(500,400,200,400)
createPlatform(300,610,100,20)
createPlatform(150,500,100,20)
createPlatform(480,400,20,20)
createPlatform(700,500,50,20)
createPlatform(900,610,50,20)
createPlatform(1100,500,200,300)



    // TODO 3 - Create Collectables
createCollectable("steve",575,250)
createCollectable("steve",703,700)
createCollectable("steve",1250,450)


    
    // TODO 4 - Create Cannons
createCannon("left",300,1000)
createCannon("bottom",1210,1000)
createCannon("right",800,1000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
