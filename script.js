function result() {
  let score = 0;
    if (document.getElementById("cor_1").checked) {
        score++;
    }
    if (document.getElementById("cor_2").checked) {
        score++;
    }
    if (document.getElementById("cor_3").checked) {
        score++;
    }
    let box2 = document.querySelector(".box2")
   let  scores = document.getElementById("scores")
    
   scores.textContent = " Your Score :" +" "+score;
    
}