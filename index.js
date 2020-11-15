function see_idea(choice){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById('center_div').style.display = 'none';
    let idea_name = '';
    let idea_info = '';
    let idea_image_1 = '';
    let idea_image_2 = '';
    let idea_image_3 = '';
    let idea_section1_title = '';
    let idea_section1 = '';
    let idea_section2_title = '';
    let idea_section2 = '';
    if(choice == 1){
        idea_name = 'Unbiased News Feed App';
        idea_image_1 = '/img/news_image_1.png';
        idea_image_2 = '/img/news_image_2.png';
        idea_image_3 = '/img/news_idea.jpg';
        idea_info = 'This idea is a bit less fleshed out than the tour guide app idea in terms '
            + 'of actual implementation and functionalities. I also personally think this idea '
            + 'will be more complicated to create, due to machine learning complexities and '
            + 'difficulty in attaining news articles through APIs. \n'
            + 'Regardless, here is the premise.';
        idea_section1_title = 'Issues with Media Consumption';
        idea_section1 = 'The general problem to solve is the issue of media echo chambers being '
            + 'formed through our sources of information. When you, say, watch multiple Ben '
            + 'Shapiro videos on YouTube, the video recommendation algorithm will recommend you '
            + 'more videos by him and other conservative pundits. The algorithm follows your '
            + 'interest, and subsequently will encourage you to stay in that community that '
            + 'shares your interest. While this is convenient for the user in, with politics '
            + 'this can result in issues due to the media\'s bias. If you only consume a few '
            + 'similar sources of media, you won’t be getting the full story of situations, '
            + 'and you will constantly be fed information that you want to hear, not necessarily '
            + 'what you need to hear. Since people like to stay within their bubble, they won’t '
            + 'hear the other side, which eventually can lead people to fall into the extreme '
            + 'elements of their political sphere (see <a href="https://www.technologyreview.com/2020/01/29/276000/a-study-of-youtube-comments-shows-how-its-turning-people-onto-the-alt-right/" style="color: #ebc9c9ec;" target="_blank">here</a> for more info).'; 
        idea_section2_title = 'An App To Address the Issues';
        idea_section2 = 'To address these problems, the idea is to develop a mobile app that '
            + 'provides users a host of news articles, acting as a news aggregation source. '
            + 'As users pick and read articles that will fuel their preexisting biases, the '
            + 'app will account for this and begin recommending news articles from more '
            + 'centrist sources. An added functionality could be that users search for specific '
            + 'news events that happened, and the app shows related articles from a broad spectrum '
            + 'of sources. The articles aggregated in the site won\'t be from sources that are not '
            + 'too extreme in their bias. The app would not only serve as a quick "on the go" news '
            + 'app, but also act as a tool to mitigate disinformation reaching the user.';
    }
    if(choice == 2){
        idea_name = 'Realtime Tour Guide App';
        idea_image_1 = '/img/tour_image_1.png';
        idea_image_2 = '/img/tour_image_2.png';
        idea_image_3 = '/img/tour_idea.png';
        idea_info = 'This idea is a mobile application that will virtually track notable locations '
            + 'near the user and provide information to them regarding the locations, in a real-time manner.';
        idea_section1_title = 'App Concept';
        idea_section1 = 'Many tour guide apps are only applicable to certain cities, while for this idea '
            + 'it would be applicable on a nearly worldwide scale, depending on whether the API we employ can '
            + 'retrieve places in the specific area of the user. Users as they walk around learn realtime '
            + 'information about notable locations near the user. They can choose to learn, either textually '
            + 'or audibly, some general information regarding the monument. The goal is to make their visits '
            + 'more enjoyable by providing information easily to them, without them having to look for a small '
            + 'plaque on a statue to understand the monument’s creation. All they need to do '
            + 'is walk around and see the world.';
        idea_section2_title = 'Possible App Implementation Strategy';
        idea_section2 = 'The app will primarily be composed of a map visual, with the users geolocation '
            + 'being tracked and shown to them realtime. Places near the user that are classified as '
            + 'monuments would have geofences set up real time as well, such that when the user '
            + 'enters within a geofence it will trigger an information retrieval regarding the place. '
            + 'Perhaps we could use an API to Google query the location and retrieve the first page '
            + 'that talks about said monument. We could use text to speech to explain to the user the location\'s history and such, ' 
            + 'without having them constantly look down on their phone. To create this app we '
            + 'would need to get the user\'s geolocation, nearby places, and information regarding '
            + 'those places, as well as establish geofences around those places too. To do this I '
            + 'think Mapbox API would be the way to go to facilitate not only the map visual but '
            + 'also handle much of those technical components also. This idea to me seems a bit '
            + 'more practical to create than the news feed idea due to APIs like Mapbox having features '
            + 'that can do much of the functionalities that I explained.';
    }
    document.getElementById('idea_name').innerText = idea_name;
    document.getElementById('idea_info').innerText = idea_info;
    document.getElementById('idea_section1_title').innerText = idea_section1_title;
    document.getElementById('idea_section1').innerHTML = idea_section1;
    document.getElementById('idea_section2_title').innerText = idea_section2_title;
    document.getElementById('idea_section2').innerHTML = idea_section2;
    document.getElementById('idea_image_1').src = idea_image_1;
    document.getElementById('idea_image_2').src = idea_image_2;
    document.getElementById('idea_image_3').src = idea_image_3;
    document.getElementById('center_div_idea').style.display = 'block';
}
function to_me(){
    document.getElementById('center_div').style.display = 'block';
    document.getElementById('center_div_idea').style.display = 'none';
}
function go_home(){
    window.location.href='index.html';
}