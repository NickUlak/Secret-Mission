A3D.config = {
  game:{
    forceResolution : true,
    targetRes : [640,480],
    startScene : 'sampleLevel'
  },
  scenes : {
    sampleLevel : {
      rootUrl : './scenes/',
      file : 'SecretMission.babylon',
      onload : function(){

         var patrol = {
           speed: 0.04,
           patrolPoints :[
             {
               gotoPoint:{x:2,y:0,z:-15},
               lookTo:true
             },
             {
               gotoPoint:{x:-7,y:0,z:-17},
               lookTo:true
             },
             {
               gotoPoint:{x:3,y:0,z:-9},
               lookTo:true
             },
           ]
         };
      for(var e in A3D.ActiveGame.mainScene.Enemy){
        var me = A3D.ActiveGame.mainScene.Enemy[e];
        me.makePatrol(patrol);
        me.startPatrol();
      }
      }
    }
  },

    playerSetup : {
      urlRoot : './models/',
      file : 'Assassin.babylon',
      importMeshName:'Assassin',
      boundsSize : {
        x : 0.2,
        y: 0.5,
        z : 0.2
      },
      boundsOffset : {
        x : 0,
        y: 0.9,
        z: 0
      },
      scale : {
        x: 1.0,
        y:1.0,
        z:1.0
      },
      animationsMap : [
        {
          name : 'idle',
          start : 1,
          end : 10
        },
        {
          name : 'running',
          start : 1,
          end : 80
        },
        {
          name : 'walking',
          start : 1,
          end : 80,
          
        }
      ],
      speedAnimationMap : [
        {
          animation : 'idle',
          targetDistance : null,
          speed: 0
        },
        {
          animation : 'walking',
          targetDistance : 0,
          speed : 0.05
        },
        {
          animation : 'running',
          targetDistance : 1,
          speed : 0.08
        }
      ]
    },

    targetSetup : {
      rootUrl : './models/',
      file : 'gototarget1.babylon',
      animationsSetup : [
        {
          name : 'active',
          start: 0,
          end : 100
        }
      ],
      scale : {
        x: 0.03,
        y:0.03,
        z:0.03
      }
    },

    cameraSetup : {
      offset: {
        x:0,
        y:20,
        z: -3
      },
      rotation : {
        x: 1.09,
        y:0,
        z:0
      }
    }
};


function start(){
    new A3D.Game();
    A3D.ActiveGame.test = function (){
      console.log('This is awesome')
    }
    A3D.ActiveGame.run();
    /*
    A3D.ActiveGame._loadScene('./scenes/','SecretMission.babylon',function(){
      myGame.Adventure = new A3D.Module.Adventure(myGame.config);
      myGame.Adventure.loadModule(myGame.scripts);
    });
    */
}

document.addEventListener( "DOMContentLoaded", start, false );
