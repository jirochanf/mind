   const showInfo2 = () => {
      let y = 0;
    const profileButton2 = document.querySelector("#profile-button2");
      const webButton2 = document.querySelector("#web-button2");
      const emailButton2 = document.querySelector("#email-button2");
      const locationButton2 = document.querySelector("#location-button2");
      const namecard2 = document.querySelector("#namecard2");

      profileButton2.setAttribute("visible", true);
      setTimeout2(() => {
        webButton2.setAttribute("visible", true);
      }, 10);
      setTimeout2(() => {
        emailButton2.setAttribute("visible", true);
      }, 10);
      setTimeout2(() => {
        locationButton2.setAttribute("visible", true);
      }, 10);
      setTimeout2(() => {
        namecard2.setAttribute("visible", true);
      }, 10);

   }

      const showPortfolio2 = (done) => {
      const portfolio2 = document.querySelector("#panel2");
      const LeftButton2 = document.querySelector("#left-button2");
      const RightButton2 = document.querySelector("#right-button2");
      const PreviewButton2 = document.querySelector("#preview-button2");

      let y = 0;
      let currentItem = 0;

      portfolio2.setAttribute("visible", true);

      const showPortfolioItem2 = (item) => {
        for (let i = 0; i <= 2; i++) {
          document.querySelector("#panel2-item" + i).setAttribute("visible", i === item);
        }
      }
      const id = setInterval(() => {
        y += 0.008;
        if (y >= 0.6) {
          clearInterval(id);
          LeftButton2.setAttribute("visible", true);
          RightButton2.setAttribute("visible", true);
          LeftButton2.addEventListener('click', () => {
            currentItem = (currentItem + 1) % 3;
            showPortfolioItem2(currentItem);
          });
          RightButton2.addEventListener('click', () => {
            currentItem = (currentItem - 1 + 3) % 3;
            showPortfolioItem(currentItem);
          });

          PreviewButton2.addEventListener('click', () => {
            PreviewButton2.setAttribute("visible", false);
            const testVideo = document.createElement( "video" );
            const canplayWebm = testVideo.canPlayType( 'video/webm; codecs="vp8, vorbis"' );
            if (canplayWebm == "") {
              document.querySelector("#video-link2").setAttribute("src", "#video2-mp4");
              document.querySelector("#video2-mp4").play();
            } else {
              document.querySelector("#video-link2").setAttribute("src", "#video2-webm");
              document.querySelector("#video2-webm").play();
            }
          });

          setTimeout2(() => {
            done();
          }, 500);
        }
        portfolio2.setAttribute("position", "0 " + 0 + " -0.01");
      }, 10);
    }

    //  Aframeでターゲット0を摘出 
AFRAME.registerComponent('mytarget1', {
      init: function () {
        this.el.addEventListener('targetFound', event => {
          console.log("target found");
//           showAvatar(() => {
//            setTimeout2(() => {
              showPortfolio2(() => {
//                setTimeout2(() => {
                  showInfo2();
//                }, 600);
              });
//            }, 600);
//           });
        });
        this.el.addEventListener('targetLost', event => {
          console.log("target lost");
        });
        //this.el.emit('targetFound');
      }
    });