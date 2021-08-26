var btn=document.querySelector("#btn")
var textarea=document.querySelector("#txtarea")
var outputdiv=document.querySelector("#outdiv")

var serverurl="https://api.funtranslations.com/translate/morse.json"

function geturl(input)
{
    return serverurl + "?" + "text=" + input
}

function errorhandler(error)
{
    console.log("error occured",error)
    alert("oops!! something went wrong ")
}

function main()
{
    var inputtext=textarea.value;

    fetch(geturl(inputtext))
    .then(response => response.json())
    .then(json => 
    {
        var translatedtext=json.contents.translated;
        outputdiv.innerText=translatedtext;

    })
    .catch(errorhandler)
}

btn.addEventListener("click",main)