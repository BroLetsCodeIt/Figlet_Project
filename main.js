import './style.css'
// import './script.js'
document.querySelector('#app').innerHTML = `
<div class="container">
<nav>
  <h2>Figlet House</h2>
  <img src="./images/Emoji.png" alt="hand" />
</nav>
<div class="actual">
  <div class="inputing">
    <input
      class="same"
      id="textenter"
      type="text"
      name="val"
      for="val"
      placeholder="Enter your Text .. E.g. Hello World"

    />
    <button id="val" class="generatebtn">Generate</button>
  </div>
  <div class="generating">
    <!-- <textarea type="text" class="same" readonly value="lsdkfjsldfkjlskdfjlskfjllorem45
      lorem56
       "></textarea> -->
    <textarea name="t" id="t" class="same textarea" readonly></textarea>
  </div>
</div>
</div>
`

