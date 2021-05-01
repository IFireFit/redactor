tinymce.init({
    selector: '#mytextarea',
    plugins: 'advlist autolink lists link image charmap print preview hr anchor pagebreak code'

  });
let out = document.querySelector(".out");
let btn = document.querySelector("button");
let text = document.querySelector("#mytextarea");
btn.onclick = function() {
    let data = tinymce.get("mytextarea").getContent();
    let data1 = tinymce.get("mytextarea").getContent({format:"text"});
    console.log(data, data1);
    out.innerHTML = data;
}