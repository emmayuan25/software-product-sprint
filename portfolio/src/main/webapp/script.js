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
  const textFromResponse = await responseData.text();

  const msgContainer = document.getElementById('welcome-msg-container');
  msgContainer.innerHTML = textFromResponse;
}