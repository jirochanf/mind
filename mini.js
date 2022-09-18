      const showPortfolio = (done) => {
      const portfolio = document.querySelector("#panel");
      const PreviewButton = document.querySelector("#preview-button");

      let y = 0;
      let currentItem = 0;

      portfolio.setAttribute("visible", true);

      const showPortfolioItem = (item) => {
        for (let i = 0; i <= 2; i++) {
          document.querySelector("#panel-item" + i).setAttribute("visible", i === item);
        }
      }
      const id = setInterval(() => {
        y += 0.008;
        if (y >= 0.6) {
          clearInterval(id);
 
          PreviewButton.addEventListener('click', () => {
            PreviewButton.setAttribute("visible", false);
            const testVideo = document.createElement( "video" );
            const canplayWebm = testVideo.canPlayType( 'video/webm; codecs="vp8, vorbis"' );
            if (canplayWebm == "") {
              document.querySelector("#video-link").setAttribute("src", "#video-mp4");
              document.querySelector("#video-mp4").play();
            } else {
              document.querySelector("#video-link").setAttribute("src", "#video-webm");
              document.querySelector("#video-webm").play();
            }
          });

          setTimeout(() => {
            done();
          }, 50);
        }
        portfolio.setAttribute("position", "0 " + 0 + " -0.01");
      }, 10);
    }

    //  Aframeでターゲット0を摘出 
AFRAME.registerComponent('mytarget', {
      init: function () {
        this.el.addEventListener('targetFound', event => {
          console.log("target found");
//           showAvatar(() => {
            setTimeout(() => {
              showPortfolio(() => {
                setTimeout(() => {
                }, 600);
              });
            }, 600);
//           });
        });
        this.el.addEventListener('targetLost', event => {
          console.log("target found");
        });
        //this.el.emit('targetFound');
      }
    });