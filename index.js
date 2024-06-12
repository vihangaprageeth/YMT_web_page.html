
let themeToggler = document.querySelector('.theme-toggler');

themeToggler.onclick = () =>{

   themeToggler.classList.toggle('active');

   if(themeToggler.classList.contains('active')){ document.body.classList.add('active'); }
    else{
       document.body.classList.remove('active');
    }

}

 let theme = document.querySelector('.themes-container');

 document.querySelector('#theme-open').onclick = () =>{
      theme.classList.add('active');
      document.body.style.paddingRight = '350px';
  }

document.querySelector('#theme-close').onclick = () =>{
    theme.classList.remove('active');
    document.body.style.paddingRight = '0px';
}
function color (z){
    var a = getComputedStyle(z);
 var b = a.backgroundColor;
 document.getElementsByTagName('body')[0].style.backgroundColor = b;
 }

 function openFile() {
    var fileInput = document.getElementById('fileInput');
    fileInput.click();

    fileInput.addEventListener('change', function() {
        var file = fileInput.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            var image = document.getElementById('photo');
            image.src = e.target.result;
        };

        reader.readAsDataURL(file);
    });
}



function changeHeadingColor(color) {
    document.getElementById('heading').style.color = color;
    
}

function changeParagraphColor(color) {
    document.getElementById('paragraph').style.color = color;
}







