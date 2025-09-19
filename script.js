function store() {
  let nav = document.querySelector(".nav");
  nav.innerHTML = `
    <div class="show">
      <footer class="site-footer" aria-label="Footer navigation">
        <div class="footer-inner">
         
          <nav class="footer-col" aria-labelledby="col-">
            <h2 id="col-shop" class="footer-title"></h2>
            <ul class="footer-list">
            <li class = " d "><a href="#">Shop</a></li>
              <li><a href="#">Shop the Latest</a></li>
              <li><a href="#">Mac</a></li>
              <li><a href="#">iPad</a></li>
              <li><a href="#">iPhone</a></li>
              <li><a href="#">Apple Watch</a></li>
              <li><a href="#">Apple Vision Pro</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </nav>

          <!-- Quick Links -->
          <nav class="footer-col" aria-labelledby="col-quick">
            <h5 id="col-quick" class="footer-title"></h5>
            <ul class="footer-list">
             <li class = " g"><a href="#">Quick Links</a></li>
             
              <li><a href="#">Find a Store</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Apple Trade In</a></li>
              <li><a href="#">Financing</a></li>
              <li><a href="#">Personal Setup</a></li>
              <li><a href="#">College Student Offer</a></li>
            </ul>
          </nav>

          <!-- Shop Special Stores -->
          <nav class="footer-col" aria-labelledby="col-special">
            <h2 id="col-special" class="footer-title"></h2>
            <ul class="footer-list">
             <li class="z"><a href="#">Shop Special Stores</a></li>
              <li><a href="#">Certified Refurbished</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Veterans and Military</a></li>
              <li><a href="#">Government</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>`;
  
  setTimeout(() => {
    document.querySelector(".show").classList.add("active");
  }, 10);
}

function closes() {
  let nav = document.querySelector(".nav");
  nav.innerHTML = '';
}
function topclos() {
  let h = window.event.clientY;
  if(h<29){
    document.querySelector(".nav").innerHTML = ""
  }
}
function mac() {
  let nav = document.querySelector(".nav");
  nav.innerHTML = `
    <div class="show">
      <footer class="site-footer" aria-label="Footer navigation">
        <div class="footer-inner">
         
          <nav class="footer-col" aria-labelledby="col-">
            <h2 id="col-shop" class="footer-title"></h2>
            <ul class="footer-list">
            <li class = " d "><a href="#">Explore Mac</a></li>
              <li><a href="#" >Explore All Mac</li>
              <li><a href="#">MacBook Air</a></li>
              <li><a href="#">MacBook Pro</a></li>
              <li><a href="#">iMac</a></li>
              <li><a href="#">Mac mini Watch</a></li>
              <li><a href="#">  Mac Studio</a></li>
              <li><a href="#">Displays</a></li>
            </ul>
          </nav>

          <!-- Quick Links -->
          <nav class="footer-col" aria-labelledby="col-quick">
            <h5 id="col-quick" class="footer-title"></h5>
            <ul class="footer-list">
             <li class = " g"><a href="#">Shop Mac</a></li>
             
              <li><a href="#">Shop Mac</a></li>
              <li><a href="#">Help Me Choose</a></li>
              <li><a href="#">Mac Accessories</a></li>
              <li><a href="#"> Apple Trade In</a></li>
              <li><a href="#">Financing</a></li>
              <li><a href="#">College Student Offer</a></li>
            </ul>
          </nav>

          <!-- Shop Special Stores -->
          <nav class="footer-col" aria-labelledby="col-special">
            <h2 id="col-special" class="footer-title"></h2>
            <ul class="footer-list">
             <li class="z"><a href="#">More from Mac</a></li>
              <li><a href="#">Mac Support</a></li>
              <li><a href="#">macOS Tahoe 26 Preview</a></li>
              <li><a href="#">Apple Intelligence</a></li>
              <li><a href="#">Apps by Apple</a></li>
              <li><a href="#">iCloud+</a></li>
              
              <li><a href="#">Education</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>`;
  
  setTimeout(() => {
    document.querySelector(".show").classList.add("active");
  }, 10);
}

function closes() {
  let nav = document.querySelector(".nav");
  nav.innerHTML = '';
}
function topclos() {
  let h = window.event.clientY;
  if(h<29){
    document.querySelector(".nav").innerHTML = ""
  }
}


function iPad() {
  let nav = document.querySelector(".nav");
  nav.innerHTML = `
    <div class="show">
      <footer class="site-footer" aria-label="Footer navigation">
        <div class="footer-inner">
         
          <nav class="footer-col" aria-labelledby="col-ipad">
            <h2 id="col-ipad" class="footer-title"></h2>
            <ul class="footer-list">
              <li class="d"><a href="#">Explore iPad</a></li>
              <li><a href="#">Explore All iPad</a></li>
              <li><a href="#">iPad Pro</a></li>
              <li><a href="#">iPad Air</a></li>
              <li><a href="#">iPad</a></li>
              <li><a href="#">iPad mini</a></li>
              <li><a href="#">Apple Pencil</a></li>
              <li><a href="#">Keyboards</a></li>
            </ul>
          </nav>

          <!-- Quick Links -->
          <nav class="footer-col" aria-labelledby="col-quick">
            <h5 id="col-quick" class="footer-title"></h5>
            <ul class="footer-list">
              <li class="g"><a href="#">Shop iPad</a></li>
              <li><a href="#">Compare iPad</a></li>
              <li><a href="#">iPad Accessories</a></li>
              <li><a href="#">Apple Trade In</a></li>
              <li><a href="#">Financing</a></li>
              <li><a href="#">College Student Offer</a></li>
            </ul>
          </nav>

          <!-- More from iPad -->
          <nav class="footer-col" aria-labelledby="col-special">
            <h2 id="col-special" class="footer-title"></h2>
            <ul class="footer-list">
              <li class="z"><a href="#">More from iPad</a></li>
              <li><a href="#">iPad Support</a></li>
              <li><a href="#">iPadOS Preview</a></li>
              <li><a href="#">Apple Intelligence</a></li>
              <li><a href="#">Apps by Apple</a></li>
              <li><a href="#">iCloud+</a></li>
              <li><a href="#">Education</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>`;

  setTimeout(() => {
    document.querySelector(".show").classList.add("active");
  }, 10);
}


function iphone() {
  let nav = document.querySelector(".nav");
  nav.innerHTML = `
    <div class="show">
      <footer class="site-footer" aria-label="Footer navigation">
        <div class="footer-inner">
         
          <!-- Explore iPhone -->
          <nav class="footer-col" aria-labelledby="col-iphone">
            <h2 id="col-iphone" class="footer-title"></h2>
            <ul class="footer-list">
              <li class="d"><a href="#">Explore iPhone</a></li>
              <li><a href="#">Explore All iPhone</a></li>
              <li><a href="#">iPhone 16 Pro</a></li>
              <li><a href="#">iPhone 16</a></li>
              <li><a href="#">iPhone 15</a></li>
              <li><a href="#">iPhone 14</a></li>
              <li><a href="#">iPhone SE</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </nav>

          <!-- Quick Links -->
          <nav class="footer-col" aria-labelledby="col-quick">
            <h5 id="col-quick" class="footer-title"></h5>
            <ul class="footer-list">
              <li class="g"><a href="#">Shop iPhone</a></li>
              <li><a href="#">Compare iPhone</a></li>
              <li><a href="#">iPhone Accessories</a></li>
              <li><a href="#">Apple Trade In</a></li>
              <li><a href="#">Financing</a></li>
              <li><a href="#">College Student Offer</a></li>
            </ul>
          </nav>

          <!-- More from iPhone -->
          <nav class="footer-col" aria-labelledby="col-special">
            <h2 id="col-special" class="footer-title"></h2>
            <ul class="footer-list">
              <li class="z"><a href="#">More from iPhone</a></li>
              <li><a href="#">iPhone Support</a></li>
              <li><a href="#">iOS 18 Preview</a></li>
              <li><a href="#">Apple Intelligence</a></li>
              <li><a href="#">Apps by Apple</a></li>
              <li><a href="#">iCloud+</a></li>
              <li><a href="#">Education</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>`;

  setTimeout(() => {
    document.querySelector(".show").classList.add("active");
  }, 10);
}

function watch() {
  let nav = document.querySelector(".nav");
  nav.innerHTML = `
    <div class="show">
      <footer class="site-footer" aria-label="Footer navigation">
        <div class="footer-inner">
         
          <!-- Explore Apple Watch -->
          <nav class="footer-col" aria-labelledby="col-watch">
            <h2 id="col-watch" class="footer-title"></h2>
            <ul class="footer-list">
              <li class="d"><a href="#">Explore Watch</a></li>
              <li><a href="#">Explore All Apple Watch</a></li>
              <li><a href="#">Apple Watch Ultra 2</a></li>
              <li><a href="#">Apple Watch Series 10</a></li>
              <li><a href="#">Apple Watch SE</a></li>
              <li><a href="#">Apple Watch Bands</a></li>
              <li><a href="#">Apple Watch Accessories</a></li>
            </ul>
          </nav>

          <!-- Quick Links -->
          <nav class="footer-col" aria-labelledby="col-quick">
            <h5 id="col-quick" class="footer-title"></h5>
            <ul class="footer-list">
              <li class="g"><a href="#">Shop Apple Watch</a></li>
              <li><a href="#">Compare Apple Watch</a></li>
              <li><a href="#">Apple Watch Studio</a></li>
              <li><a href="#">Apple Trade In</a></li>
              <li><a href="#">Financing</a></li>
              <li><a href="#">College Student Offer</a></li>
            </ul>
          </nav>

          <!-- More from Apple Watch -->
          <nav class="footer-col" aria-labelledby="col-special">
            <h2 id="col-special" class="footer-title"></h2>
            <ul class="footer-list">
              <li class="z"><a href="#">More from Apple Watch</a></li>
              <li><a href="#">Apple Watch Support</a></li>
              <li><a href="#">watchOS 11 Preview</a></li>
              <li><a href="#">Apple Fitness+</a></li>
              <li><a href="#">Apps by Apple</a></li>
              <li><a href="#">iCloud+</a></li>
              <li><a href="#">Education</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>`;

  setTimeout(() => {
    document.querySelector(".show").classList.add("active");
  }, 10);
}

function vision() {
  let nav = document.querySelector(".nav");
  nav.innerHTML = `
    <div class="show">
      <footer class="site-footer" aria-label="Footer navigation">
        <div class="footer-inner">
         
          <!-- Explore Vision -->
          <nav class="footer-col" aria-labelledby="col-explore">
            <h2 id="col-explore" class="footer-title">Explore Vision</h2>
            <ul class="footer-list">
              <li><a href="#">Explore Apple Vision Pro</a></li>
              <li><a href="#">Tech Specs</a></li>
            </ul>
          </nav>

          <!-- Shop Vision -->
          <nav class="footer-col" aria-labelledby="col-shop">
            <h2 id="col-shop" class="footer-title">Shop Vision</h2>
            <ul class="footer-list">
              <li><a href="#">Shop Apple Vision Pro</a></li>
              <li><a href="#">Apple Vision Pro Accessories</a></li>
              <li><a href="#">Book a Demo</a></li>
              <li><a href="#">Financing</a></li>
            </ul>
          </nav>

          <!-- More from Vision -->
          <nav class="footer-col" aria-labelledby="col-more">
            <h2 id="col-more" class="footer-title">More from Vision</h2>
            <ul class="footer-list">
              <li><a href="#">Apple Vision Pro Support</a></li>
              <li><a href="#">AppleCare</a></li>
            </ul>
          </nav>

        </div>
      </footer>
    </div>`;

  setTimeout(() => {
    document.querySelector(".show").classList.add("active");
  }, 10);
}

function airpods() {
  let nav = document.querySelector(".nav");
  nav.innerHTML = `
    <div class="show">
      <footer class="site-footer" aria-label="Footer navigation">
        <div class="footer-inner">

          <!-- Explore AirPods -->
          <nav class="footer-col" aria-labelledby="col-explore">
            <h2 id="col-explore" class="footer-title">Explore AirPods</h2>
            <ul class="footer-list">
              <li><a href="#">Explore All AirPods</a></li>
              <li><a href="#">AirPods 4</a></li>
              <li><a href="#">AirPods Pro 2</a></li>
              <li><a href="#">AirPods Max</a></li>
              <li><a href="#">Compare AirPods</a></li>
            </ul>
          </nav>

          <!-- Shop AirPods -->
          <nav class="footer-col" aria-labelledby="col-shop">
            <h2 id="col-shop" class="footer-title">Shop AirPods</h2>
            <ul class="footer-list">
              <li><a href="#">Shop AirPods</a></li>
              <li><a href="#">AirPods Accessories</a></li>
            </ul>
          </nav>

          <!-- More from AirPods -->
          <nav class="footer-col" aria-labelledby="col-more">
            <h2 id="col-more" class="footer-title">More from AirPods</h2>
            <ul class="footer-list">
              <li><a href="#">AirPods Support</a></li>
              <li><a href="#">AppleCare</a></li>
              <li><a href="#">Hearing Health</a></li>
              <li><a href="#">Apple Music</a></li>
            </ul>
          </nav>

        </div>
      </footer>
    </div>`;

  setTimeout(() => {
    document.querySelector(".show").classList.add("active");
  }, 10);
}

function tiv() {
  let nav = document.querySelector(".nav");
  nav.innerHTML = `
    <div class="show">
      <footer class="site-footer" aria-label="Footer navigation">
        <div class="footer-inner">

          <!-- Explore TV & Home -->
          <nav class="footer-col" aria-labelledby="col-explore">
            <h2 id="col-explore" class="footer-title">Explore TV & Home</h2>
            <ul class="footer-list">
              <li><a href="#">Apple TV 4K</a></li>
              <li><a href="#">HomePod</a></li>
              <li><a href="#">HomePod mini</a></li>
            </ul>
          </nav>

          <!-- Shop TV & Home -->
          <nav class="footer-col" aria-labelledby="col-shop">
            <h2 id="col-shop" class="footer-title">Shop</h2>
            <ul class="footer-list">
              <li><a href="#">Shop Apple TV 4K</a></li>
              <li><a href="#">Shop HomePod mini</a></li>
              <li><a href="#">Shop Siri Remote</a></li>
              <li><a href="#">TV & Home Accessories</a></li>
            </ul>
          </nav>

          <!-- More from TV & Home -->
          <nav class="footer-col" aria-labelledby="col-more">
            <h2 id="col-more" class="footer-title">More from TV & Home</h2>
            <ul class="footer-list">
              <li><a href="#">TV & Home Support</a></li>
              <li><a href="#">AppleCare</a></li>
              <li><a href="#">Apple TV app</a></li>
              <li><a href="#">Apple Music</a></li>
              <li><a href="#">Siri</a></li>
              <li><a href="#">Home app</a></li>
              <li><a href="#">Compatibility</a></li>
            </ul>
          </nav>

        </div>
      </footer>
    </div>`;

  setTimeout(() => {
    document.querySelector(".show").classList.add("active");
  }, 10);
}

function e() {
  let nav = document.querySelector(".nav");
  nav.innerHTML = `        
    <div class="show">
      <footer class="site-footer" aria-label="Footer navigation">
        <div class="footer-inner">

          <!-- Explore Entertainment -->
          <nav class="footer-col" aria-labelledby="col-explore">
            <h2 id="col-explore" class="footer-title">Explore Entertainment</h2>
            <ul class="footer-list">
              <li><a href="#">Apple TV+</a></li>
              <li><a href="#">Apple Music</a></li>
              <li><a href="#">Apple Arcade</a></li>
              <li><a href="#">Apple Fitness+</a></li>
              <li><a href="#">Apple News+</a></li>
              <li><a href="#">Apple Podcasts</a></li>
              <li><a href="#">Apple Books</a></li>
              <li><a href="#">App Store</a></li>
            </ul>
          </nav>

          <!-- Support -->
          <nav class="footer-col" aria-labelledby="col-support">
            <h2 id="col-support" class="footer-title">Support</h2>
            <ul class="footer-list">
              <li><a href="#">Apple TV+ Support</a></li>
              <li><a href="#">Apple Music Support</a></li>
            </ul>
          </nav>

        </div>
      </footer>
    </div>`;

  setTimeout(() => {
    document.querySelector(".show").classList.add("active");
  }, 10);
}

function a() {
  let nav = document.querySelector(".nav");
  nav.innerHTML = `        
    <div class="show">
      <footer class="site-footer" aria-label="Footer navigation">
        <div class="footer-inner">

          <!-- Shop Accessories -->
          <nav class="footer-col" aria-labelledby="col-shop">
            <h2 id="col-shop" class="footer-title">Shop Accessories</h2>
            <ul class="footer-list">
              <li><a href="#">Explore Accessories</a></li>
              <li><a href="#">Shop All Accessories</a></li>
              <li><a href="#">Made by Apple</a></li>
              <li><a href="#">Apple Watch</a></li>
              <li><a href="#">Apple Vision Pro</a></li>
              <li><a href="#">AirPods</a></li>
              <li><a href="#">TV & Home</a></li>
            </ul>
          </nav>

          <!-- Shop by Product -->
          <nav class="footer-col" aria-labelledby="col-product">
            <h2 id="col-product" class="footer-title">Shop by Product</h2>
            <ul class="footer-list">
              <li><a href="#">Mac</a></li>
              <li><a href="#">iPad</a></li>
              <li><a href="#">iPhone</a></li>
              <li><a href="#">Apple Watch</a></li>
              <li><a href="#">Apple Vision Pro</a></li>
            </ul>
          </nav>

        </div>
      </footer>
    </div>`;

  setTimeout(() => {
    document.querySelector(".show").classList.add("active");
  }, 10);
}

function s() {
  let nav = document.querySelector(".nav");
  nav.innerHTML = `        
    <div class="show">
      <footer class="site-footer" aria-label="Footer navigation">
        <div class="footer-inner">

          <!-- Explore Support -->
          <nav class="footer-col" aria-labelledby="col-explore">
            <h2 id="col-explore" class="footer-title">Explore Support</h2>
            <ul class="footer-list">
              <li><a href="#">iPhone</a></li>
              <li><a href="#">Mac</a></li>
              <li><a href="#">iPad</a></li>
              <li><a href="#">Watch</a></li>
              <li><a href="#">Apple Vision Pro</a></li>
              <li><a href="#">AirPods</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">TV</a></li>
            </ul>
          </nav>

          <!-- Get Help -->
          <nav class="footer-col" aria-labelledby="col-help">
            <h2 id="col-help" class="footer-title">Get Help</h2>
            <ul class="footer-list">
              <li><a href="#">Community</a></li>
              <li><a href="#">Genius Bar</a></li>
              <li><a href="#">Repair</a></li>
              <li><a href="#">Get AppleCare</a></li>
              <li><a href="#">Check Coverage</a></li>
            </ul>
          </nav>

          <!-- Helpful Topics -->
          <nav class="footer-col" aria-labelledby="col-topics">
            <h2 id="col-topics" class="footer-title">Helpful Topics</h2>
            <ul class="footer-list">
              <li><a href="#">Billing & Subscriptions</a></li>
              <li><a href="#">Apple Account and Password</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </nav>

        </div>
      </footer>
    </div>`;

  setTimeout(() => {
    document.querySelector(".show").classList.add("active");
  },20);
}
