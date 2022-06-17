// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
    ['Born and Raised in Shenzhen, China', 'Have a 960+ day Duolingo streak but do not speak a third language', 'I Love Nature', 'Considering moving to NYC because driving is not necessary there', 'My family has a Shiba Inu, he is turning 2 this summer!'];
  
  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  
  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
  
function changeSlideImg() {
  const images = 
    [
      'images/hobby-pic1.JPG',
      'images/hobby-pic2.JPEG',
      'images/hobby-pic3.jpg'
    ]
  
  // Pick a random image.
  const getImg = images[Math.floor(Math.random() * images.length)];
  
  // Add it to the page.
  const setImg = document.getElementById('slideImg');
  
  setImg.src = getImg;
}
  

// Fetches welcome message and add to front page
async function showWelcomeMsg() {
  const responseData = await fetch('/hello');
  const textFromResponse = await responseData.json();

  const msgContainer = document.getElementById('welcome-msg-container');
  
  console.log(textFromResponse[1]);

  const getMsg = textFromResponse[Math.floor(Math.random() * textFromResponse.length)];

  msgContainer.innerHTML = getMsg;
}

// Toggle Tab
function toggleMarkerTab() {
  var button = document.getElementById("addMarkerBtn");
  button.onclick = () => {
      var divForm = document.getElementById('createMarkerForm');
      console.log(divForm);
      console.log(divForm.style);
      if(divForm.style.display !== 'none') {
          divForm.style.display = 'none';
      } else {
          divForm.style.display = 'block';
      }
  }
}
toggleMarkerTab();
// Map
let map;
function initMap() {
  const LALatLng = { lat: 34.0522, lng: -118.2437 };

  // initilize map centered at LA  
  map = new google.maps.Map(document.getElementById("map"), {
    center: LALatLng,
    zoom: 1,
  });
  // default set the map to tilt to 45 degrees  
  map.setTilt(45);

  // default markers     
  addMarkers (
    map, 34.0522, -118.2437, 'Los Angeles',
    'I go to school at USC, which is near downtown los angeles', 'Here is where I\'m currently located!'
  );
  addMarkers (
    map, 22.5429, 114.0596, 'Shenzhen',
    'Shenzhen is one of the largest cities in China. Located in the Southeast bay of Asia, Shenzhen is known for being a fast-growing city that attracts young people and companies from all over the world. It is also where I was born and raised.', 'Aug 12, 2021'
  );
  addMarkers (
      map, -13.5320, -71.9675, 'Cuzco',
      'I visited Cuzco last month. It was my first time visiting South America and it brought a lot of surprises. Peru is a beautiful country and hikes there were amazing. I would love to go back in the future.', 'May 27, 2022'
  );

  console.log("map is loaded");
}

function addMarkers(map, lat, lng, title, description, date) {
  const marker = new google.maps.Marker ({
    position: {lat: lat, lng: lng},
    map: map,
    title: title
  });

  const descriptionString = 
    '<div class="infoContent">' + 
    '<h2 class="infoTitle">' +
    title +
    '</h2>' +
    '<p class="infoDescription">' +
    description +
    '</p>' +
    '<p class="lastVisitedDate">' +
    'Last visited: ' +
    date +
    '</p>' +
    '</div>';

  const infoWindow = new google.maps.InfoWindow({content: descriptionString});
  marker.addListener('click', () => {
      infoWindow.open(map, marker);
  });
}

window.initMap = initMap;