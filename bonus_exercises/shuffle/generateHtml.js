const generateImgsDiv = (arrImages) => {
    let divArr= [];
    for (var i = 0; i < arrImages.length; i++){
        divArr.push(`   <img id="${arrImages[i]}" src="http://localhost:8000/cards/${arrImages[i] + '.png'}" width="200">`)
    }
    //when done wrap the arr with the <div> and </div> tags
    divArr.unshift(`<div id="hand">`)
    divArr.push("</div>")
    //console.log(divArr.join('\n'))
    return divArr.join('\n')
}

module.exports = {
    generateImgsDiv: generateImgsDiv
}