   const showInfo = () => {
      let y = 0;
    const profileButton = document.querySelector("#profile-button2");
      const webButton = document.querySelector("#web-button2");
      const emailButton = document.querySelector("#email-button2");
      const locationButton = document.querySelector("#location-button2");
      const namecard = document.querySelector("#namecard2");

      profileButton.setAttribute("visible", true);
      setTimeout(() => {
        webButton.setAttribute("visible", true);
      }, 10);
      setTimeout(() => {
        emailButton.setAttribute("visible", true);
      }, 10);
      setTimeout(() => {
        locationButton.setAttribute("visible", true);
      }, 10);
      setTimeout(() => {
        namecard.setAttribute("visible", true);
      }, 10);

   }

      const showPortfolio = (done) => {
      const portfolio = document.querySelector("#panel2");
      const LeftButton = document.querySelector("#left-button2");
      const RightButton = document.querySelector("#right-button2");
      const PreviewButton = document.querySelector("#preview-button2");

      let y = 0;
      let currentItem = 0;

      portfolio.setAttribute("visible", true);

      const showPortfolioItem = (item) => {
        for (let i = 0; i <= 2; i++) {
          document.querySelector("#panel2-item" + i).setAttribute("visible", i === item);
        }
      }
      const id = setInterval(() => {
        y += 0.008;
        if (y >= 0.6) {
          clearInterval(id);
          LeftButton.setAttribute("visible", true);
          RightButton.setAttribute("visible", true);
          LeftButton.addEventListener('click', () => {
            currentItem = (currentItem + 1) % 3;
            showPortfolioItem(currentItem);
          });
          RightButton.addEventListener('click', () => {
            currentItem = (currentItem - 1 + 3) % 3;
            showPortfolioItem(currentItem);
          });

          PreviewButton.addEventListener('click', () => {
            PreviewButton.setAttribute("visible", false);
            const testVideo = document.createElement( "video" );
            const canplayWebm = testVideo.canPlayType( 'video/webm; codecs="vp8, vorbis"' );
            if (canplayWebm == "") {
              document.querySelector("#video-link2").setAttribute("src", "#video-mp4");
              document.querySelector("#video-mp4").play();
            } else {
              document.querySelector("#video-link2").setAttribute("src", "#video-webm");
              document.querySelector("#video-webm").play();
            }
          });

          setTimeout(() => {
            done();
          }, 500);
        }
        portfolio.setAttribute("position", "0 " + 0 + " -0.01");
      }, 10);
    }

    //  Aframeでターゲット0を摘出 
AFRAME.registerComponent('mytarget1', {
      init: function () {
        this.el.addEventListener('targetFound', event => {
          console.log("target found");
//           showAvatar(() => {
            setTimeout(() => {
              showPortfolio(() => {
                setTimeout(() => {
                  showInfo();
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