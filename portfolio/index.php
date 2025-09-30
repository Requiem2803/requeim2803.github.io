<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Home</title>
    <link href="styles.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Double:wght@100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body>
    
    <?php include "nav.php" ?>    

    <header>
    <div id="header-text">
    <h1 id="my-name">My Name is Ryan Coombe</h1>
    <h2 id="my-job">I'm a Web Developer</h2>
    </div>
    <img class="csharp-image" src="img/CSharp.jpg" alt="in image featurimg a stylised C# logo">
    <p>Scroll Down <br></p>
    <span class="icon-down-arrow"></span>
    </header>
        
<span class="icon-menu"></span>
    <main>
        <div class="code-container">
            <div class="snippet-1">
                <img src="img/build.webp">
                <h3>Project One</h3>
                <p><a href="#">View Project <span class="icon-right-arrow"></span></a></p>
            </div>
            <div class="snippet-2">
                <img src="img/build.webp">
                <h3>Project Two</h3>
                <p><a href="#">View Project <span class="icon-right-arrow"></span></a></p>
            </div>
            <div class="snippet-3">
                <img src="img/build.webp">
                <h3>Project Three</h3>
                <p><a href="#">View Project <span class="icon-right-arrow"></span></a></p>
            </div>
            <div class="snippet-4">
                <img src="img/build.webp">
                <h3>Project Four</h3>
                <p><a href="#">View Project <span class="icon-right-arrow"></span></a></p>
            </div>
            <div class="snippet-5">
                <img src="img/build.webp">
                <h3>Project Five</h3>
                <p><a href="#">View Project <span class="icon-right-arrow"></span></a></p>
            </div>
            <div class="snippet-6">
                <img src="img/build.webp">
                <h3>Project Six</h3>
                <p><a href="#">View Project <span class="icon-right-arrow"></span></a></p>
            </div>
        </div>

        <form id="message-form" method="POST" action="submit.php">
        <div class="contact" id="contact">
            
            <div class="contact text">
            <h3>Get In Touch</h3>
            <p>A whole bunch of placeholder text.</p>
            <h4>07943 000607</h4>
            <h5>ryan.coombe2003@gmail.com</h5>
            <p>Another whole bunch of placeholder text.</p>
            </div>
            
            <div class="contact-inputs-name">
                <input class="required" type="text" name="fname" id="fname" placeholder="First Name*">
                <input class="required" type="text" name="lname" id="lname" placeholder="Last Name*">
            </div>
            <div class="contact-inputs-message">
                <input class="required" type="text" name="email" id="email" placeholder="Email Address*">
                <input type="text" name="subject" id="subject" placeholder="Subject">
                <input type="text" name="message" id="message" placeholder="Message">
                
            </div>
            <button id="submit-button" type="submit">Submit</button>
        </div>
        </form>
        <a href="#">
        <div class="btt">
        <span class="icon-up-arrow"></span>
        <p>Back to top</p>
        </div>
        </a>
        
    </main>
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/transition.js"></script>
    <script src="js/textEffect.js"></script>
    <script src="js/form.js"></script>
    <script src="js/sidebar.js"></script>
</body>
</html>