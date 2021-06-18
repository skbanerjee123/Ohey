var posts = [
	{
		userImg: "https://randomuser.me/api/portraits/men/11.jpg",
		userName: "David Gralse",
		loc: "Alps, Switzerland",
		text: "Spent the last week in the Alpine region. Here's one click from there.",
		mediaLink: "https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg",
	},
	{
		userImg: "https://randomuser.me/api/portraits/women/74.jpg",
		userName: "Gal Wallace",
		loc: "Times Square, New York",
		text: "The Times back at full swing once again...",
		mediaLink: "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
	},
	{
		userImg: "https://randomuser.me/api/portraits/men/13.jpg",
		userName: "Anthony McLaren",
		loc: "Somewhere under the sky",
		text: "No caption for this",
		mediaLink: "https://picsum.photos/900/300"
	},
	{
		userImg: "https://randomuser.me/api/portraits/men/22.jpg",
		userName: "Zizhek Slovek",
		loc: "Norway",
		text: "Its cold out here :|",
		mediaLink: "https://cdn.aizenconsulting.com/img/4159d16351e6416ea6b160aef955aed7e4d90eed"
	},
	{
		userImg: "https://randomuser.me/api/portraits/women/37.jpg",
		userName: "Andrea Sal",
		loc: "Sydney, Australia",
		text: "",
		mediaLink: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg"
	},
	{
		userImg: "https://randomuser.me/api/portraits/women/66.jpg",
		userName: "Alexis Solsta",
		loc: "Los Angeles County, California",
		text: "Back at my hood, chilling life...",
		mediaLink: "https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg"
	},
	{
		userImg: "https://randomuser.me/api/portraits/men/19.jpg",
		userName: "Dan Hugo",
		loc: "Milan, Italy",
		text: "Now its holy. Holy cow!",
		mediaLink: "https://en.unesco.org/creative-cities/sites/default/files/styles/creative_city_940_420/public/milan_1.jpg?itok=8mLyf7P5"
	},
	{
		userImg: "https://randomuser.me/api/portraits/men/99.jpg",
		userName: "John Doe",
		loc: "Ireland",
		text: "That's my homeland mate.",
		mediaLink: "https://www.state.gov/wp-content/uploads/2018/11/Ireland-2109x1406.jpg"
	},
	{
		userImg: "https://randomuser.me/api/portraits/women/94.jpg",
		userName: "Jane Doe",
		loc: "Mumbai, India",
		text: "Woah! Thats beautiful.",
		mediaLink: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/mumbai_pune_maharashtra_shutdo_1200x768.jpeg?YBSdfbrsZWhfCObmyFBbW3_JBw3_d_g4&size=770:433"
	},
];
var postOut = "";
for(var i = 0; i < posts.length; i++) {
	if(posts[i].text === "") {
	postOut += `<div class="card"><div class="user">
      <img src="${posts[i].userImg}" alt="">
      <div>
        <h4>${posts[i].userName}</h4>
        <div class="loc">
          <span class="material-icons-outlined">
            place
          </span><span>${posts[i].loc}</span>
        </div>
      </div>
    </div>
    <hr>
    <div class="media">
      <img src="${posts[i].mediaLink}" alt="">
    </div>
    <hr>
    <div class="footer">
      <button>
        <span class="material-icons-outlined">
          thumb_up
        </span>
      </button>
      <button>
        <span class="material-icons-outlined">
          ios_share
        </span>
      </button>
      <button>
        <span class="material-icons-outlined">
          comment
        </span>
      </button>
    </div></div>`;
	} else {
	postOut += `<div class="card"><div class="user">
      <img src="${posts[i].userImg}" alt="">
      <div>
        <h4>${posts[i].userName}</h4>
        <div class="loc">
          <span class="material-icons-outlined">
            place
          </span><span>${posts[i].loc}</span>
        </div>
      </div>
    </div>
    <hr>
    <div class="text">
      ${posts[i].text}
    </div>
    <div class="media">
      <img src="${posts[i].mediaLink}" alt="">
    </div>
    <hr>
    <div class="footer">
      <button>
        <span class="material-icons-outlined">
          thumb_up
        </span>
      </button>
      <button>
        <span class="material-icons-outlined">
          ios_share
        </span>
      </button>
      <button>
        <span class="material-icons-outlined">
          comment
        </span>
      </button>
    </div></div>`;
	}
}
document.getElementById("feed").innerHTML = postOut;
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})
