var largeFontSizeBtn = document.querySelector(".bigFont");
var normalFontSizeBtn = document.querySelector(".normalFont");
var elements=document.querySelector(".info");

function BigFontSize()
{
    elements.classList.add("Font");
}
function normalFontSize()
{
    elements.classList.remove("Font");
}

largeFontSizeBtn.onclick = BigFontSize;
normalFontSizeBtn.onclick = normalFontSize;