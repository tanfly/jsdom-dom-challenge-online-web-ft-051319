const counterDisplay = document.getElementById("counter")

const commentForm = document.getElementById("comment-form")
const commentDisplay = document.getElementById("list")


let i = 0;
    
let countIncr = setInterval(function() {
    {
    counterDisplay.innerText = i;
    i++
    }
}, 1000);
    


document.addEventListener("click", function(e){
    let click_id = e.target.id
    let integer = parseInt(counterDisplay.innerText, 10);
    switch(click_id) {
        case "-":
            counterDisplay.innerText = (integer -= 1)
            break;
        case "+":
            counterDisplay.innerText = (integer += 1)
            break;
        case "<3":
            let likes = document.getElementsByClassName("likes");
        
            likes[0].innerHTML += `
            <li>
            ${counterDisplay.innerText} has been liked ${click_id.click.count} time(s)
            </li>
            `
            break;
        case "pause":
            if (e.target.innerText == "resume"){
                clearInterval(countIncr);
            }
            else if (click_id.innerText == "pause"){
                setInterval(countIncr, 1000);
            }
            break;
    }
})

commentForm.addEventListener("submit", function(e){
    e.preventDefault()
    const getnewComment = document.getElementsByTagName("inputs");
    const newComment = getnewComment[0].value

    commentDisplay.innerHTML += `
    <p> 
    ${newComment} 
    </p>
    `

})