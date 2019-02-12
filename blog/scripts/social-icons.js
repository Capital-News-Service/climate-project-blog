//////////////////////// JAVASCRIPT FOR  /////////////////////

  var app = app || {

    init: function(){

      app.share();

    },

    share: function(){

      $(".icon-twitter").on("click", function(){

        var tweet = "Baltimore Climate and Health Project: Extreme temps pose a serious health threat for people with chronic medical conditions. And climate change is making the problem worse."; //Tweet text
        var url = "https://cnsmaryland.org/interactives/spring-2019/baltimore-climate-temperature-health/blog"; //Interactive URL

        var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
        window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

      });


      $(".icon-facebook").on("click", function(){

        var picture = "https://cnsmaryland.org/interactives/spring-2019/baltimore-climate-temperature-health/blog/images/fb-thumb.png"; //Picture URL
        var title = "Baltimore Climate and Health Project"; //Post title
        var description = "Extreme temperatures pose a serious, long-term health threat for people with chronic medical conditions — and climate change is making the problem worse."; //Post description
        var url = "https://cnsmaryland.org/interactives/spring-2019/baltimore-climate-temperature-health/blog"; //Interactive URL

          var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";
        window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

      });

    }

  }


  $(document).ready(function(){

    app.init();

  });
