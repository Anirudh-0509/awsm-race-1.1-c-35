class Game {
    constructor(){
        
    }
    getState(){
        var gsref = database.ref('gameState');
        gsref.on("value", function (data){
            gameState = data.val();
        })

    }
    update(state){
        database.ref('/').update({
            gameState:state
        })

    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }

    }    
}