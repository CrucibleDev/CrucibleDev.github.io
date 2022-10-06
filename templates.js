window.onload = function(){

    var head = document.getElementById('head');
    var header = document.getElementById('header');
    var footer = document.getElementById('footer');
    
    head.innerHTML = headTemplateHTML;
    header.innerHTML = headerTemplateHTML;
    footer.innerHTML = footerTemplateHTML;
}

var headTemplateHTML = `
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="CSS/crucibleStyle.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
`;

var headerTemplateHTML = `
<nav class="cs-navBar">
    <h1><a href="index.html">Center</a></h1>
    <ul class="linkButtons highlight">
        <li><a href="index.html">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#other">Other</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <ul class="socials">
        <li><a href="#facebook"><i class="fa fa-facebook-official"></i></a></li>
        <li><a href="#pintrest"><i class="fa fa-pinterest-p"></i></a></li>
        <li><a href="#twitter"><i class="fa fa-twitter"></i></a></li>
        <li><a href="#flickr"><i class="fa fa-flickr"></i></a></li>
        <li><a href="#linkedin"><i class="fa fa-linkedin"></i></a></li>
    </ul>
</nav>
`;

var footerTemplateHTML = `
<p>
    About Section
</p>
`;