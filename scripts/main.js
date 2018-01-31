const projectObject = {

}

let project = document.querySelectorAll('.project');


// CREATES THE POP-UP OBJECT

let projectSelected = () => {
    let projects = document.querySelectorAll('.project');
    var fixedBody = document.querySelector('[data-body]');
    let mainDiv = document.querySelector('#pop-out-div');

    projects.forEach((project) => {
        project.addEventListener('click', (event) => {
            event.preventDefault();

            let windowPosition = document.documentElement.scrollTop;

            var thePictureContainer = createPictureContainer();
            var thePictureWindow = createPictureWindow ();
            var thePictureX = createPictureX ();
            var scrollLeft = createScrollLeft();
            var scrollRight = createScrollRight();
            var infoDiv = createPopUpDivContainer();
            document.body.setAttribute("style", "overflow:hidden")
            mainDiv.classList.add('fixed');
            mainDiv.setAttribute("style",`top: ${windowPosition}px`)
            mainDiv.appendChild(thePictureContainer).appendChild(thePictureWindow)
            // .appendChild(theImage);
            thePictureWindow.appendChild(infoDiv);
            thePictureContainer.appendChild(thePictureX);
            thePictureContainer.appendChild(scrollLeft);
            thePictureContainer.appendChild(scrollRight);
            xClicked();
        });
    
        project.addEventListener('touchend', (event) => {
            clicked.preventDefault();
    
        });
    })
    
};


function createAnImage (src, alt) {
    var anImage = document.createElement('img');
    anImage.setAttribute('src', src);
    anImage.setAttribute('alt', alt);
    return anImage;
}

function createPictureContainer (topPosition) {
    var pictureContainer = document.createElement('div');
    pictureContainer.classList.add('picture-container');
    return pictureContainer;
}

function createPictureWindow () {
    var pictureWindow = document.createElement('div');
    pictureWindow.classList.add('picture-window');
    return pictureWindow;
}

function createPictureX () {
    var pictureX = document.createElement('div');
    pictureX.classList.add('clickable');
    pictureX.classList.add('picture-x');
    pictureX.innerHTML += "&Cross;";
    return pictureX;
}

function createScrollLeft () {
    var scrollLeft = document.createElement('div');
    scrollLeft.classList.add('clickable');
    scrollLeft.classList.add('scroll');
    scrollLeft.classList.add('scroll-left');
    scrollLeft.innerHTML += "&Lang;";
    return scrollLeft;
}

function createScrollRight () {
    var scrollRight = document.createElement('div');
    scrollRight.classList.add('clickable');
    scrollRight.classList.add('scroll');
    scrollRight.classList.add('scroll-right');
    scrollRight.innerHTML += "&Rang;";
    return scrollRight;
}

function createPopUpDivContainer () {
    var nestedImageContainer = document.createElement('div');
    nestedImageContainer.classList.add('popup-house-info');
    return nestedImageContainer;
}

// LETS YOU EXIT THE POPUP WINDOW
function xClicked () {
    var xContainer = document.querySelector(".picture-container");
    let mainDiv = document.querySelector('#pop-out-div')
    xContainer.addEventListener('click', function(clicked) {
        clicked.preventDefault();
        var pictureContainer = document.querySelector('.picture-container');
        mainDiv.removeChild(pictureContainer);
        document.body.classList.remove('fixed');
        document.body.setAttribute("style", "overflow:visibile")
        mainDiv.setAttribute("style",`top: 0px`)
    });
};

projectSelected();
