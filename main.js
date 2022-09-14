      const showInfo2 = () => {
        let y = 0;
        const profileButton2 = document.querySelector("#profile-button");
        const webButton2 = document.querySelector("#web-button");
        const emailButton2 = document.querySelector("#email-button");
        const locationButton2 = document.querySelector("#location-button");
        const text2 = document.querySelector("#text");
		const namecard2 = document.querySelector("#namecard");

		  
        profileButton2.setAttribute("visible", true);
        setTimeout(() => {
          webButton2.setAttribute("visible", true);
        }, 10);
        setTimeout(() => {
          emailButton2.setAttribute("visible", true);
        }, 10);
        setTimeout(() => {
          locationButton2.setAttribute("visible", true);
        }, 10);
		setTimeout(() => {
          namecard2.setAttribute("visible", true);
        }, 10);


        //ポートフォリオ表示部　     
        const showPortfolio2 = (done) => {
        const portfolio2 = document.querySelector("#portfolio-panel2");
        const portfolioLeftButton2 = document.querySelector("#portfolio-left-button2");
        const portfolioRightButton2 = document.querySelector("#portfolio-right-button2");
        const paintandquestPreviewButton2 = document.querySelector("#paintandquest-preview-button2");
		const btn02 = document.getElementById("my_btn02");
	
        let y = 0;
        let currentItem = 0;

        portfolio2.setAttribute("visible", true);

        const showPortfolioItem2 = (item) => {
          for (let i = 0; i <= 2; i++) {
            document.querySelector("#portfolio2-item" + i).setAttribute("visible", i === item);
          }
        }
        const id = setInterval(() => {
          y += 0.008;
          if (y >= 0.6) {
            clearInterval(id);
            portfolioLeftButton2.setAttribute("visible", true);
            portfolioRightButton2.setAttribute("visible", true);
            portfolioLeftButton2.addEventListener('click', () => {
              currentItem = (currentItem + 1) % 3;
              showPortfolioItem2(currentItem);
            });
            portfolioRightButton2.addEventListener('click', () => {
              currentItem = (currentItem - 1 + 3) % 3;
              showPortfolioItem2(currentItem);
            });

            paintandquestPreviewButton2.addEventListener('click', () => {
              paintandquestPreviewButton2.setAttribute("visible", false);
              const testVideo = document.createElement( "video" );
              const canplayWebm = testVideo.canPlayType( 'video/webm; codecs="vp8, vorbis"' );
              if (canplayWebm == "") {
                document.querySelector("#paintandquest-video-link2").setAttribute("src", "#paintandquest-video-mp42");
                document.querySelector("#paintandquest-video-mp42").play();
              } else {
                document.querySelector("#paintandquest-video-link2").setAttribute("src", "#paintandquest-video-webm2");
                document.querySelector("#paintandquest-video-webm2").play();
              }
            });

	
            setTimeout2(() => {
              done();
            }, 500);
          }
          portfolio2.setAttribute("position", "0 " + 0 + " -0.01");
        }, 10);  