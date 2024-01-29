"use strict";

function dropDownFW({
    dropHeaderClass = "dropHeader",
    dropContentClass = "dropContent",
    showClass = "show",
    hideClass = "hide"
}) {


    // ------------------------------------------------------------------------
    // Private functions related to hiding and showing drop down menus. 

    function hide(ele) {
        ele.classList.remove(showClass);
        ele.classList.add(hideClass);
    }

    function show(ele) {
        ele.classList.remove(hideClass);
        ele.classList.add(showClass);
    }

    function hideSubMenusExcept(ele) {
        var dropContentList = document.getElementsByClassName(dropContentClass);
        for (var i = 0; i < dropContentList.length; i++) {
            if (ele !== dropContentList[i]) {
                hide(dropContentList[i]);
            }
        }
    }

    // This event handler will run any time the user clicks anywhere on the page. 
    // 
    // If a MenuHeader is clicked, the associated SubMenu is toggled (hidden/shown). 
    // Otherwise (when click is anywhere else), all SubMenus are closed.
    window.onclick = function (event) {

        var clickedEle = event.target; // this is the DOM element (anywhere on page) that was clicked.
        // console.log("clickedEle on next line");
        // console.log(clickedEle);

        // if the clicked element is a MenuHeader, it will have a custom property 
        // that indicates the associated SubMenu.

        if (clickedEle.classList.contains(dropHeaderClass)) {

            var subMenu = clickedEle.parentElement.getElementsByClassName(dropContentClass)[0];

                // console.log("SubMenu associated with MenuHeader (on next line):");
                // console.log(subMenu);

                if (subMenu.classList.contains(showClass)) {
                    hide(subMenu);
                } else {
                    show(subMenu);
                }

                hideSubMenusExcept(subMenu);

            } else { // the element they clicked was not a MenuHeader, so close all SubMenus. 

                // console.log("clicked ele is not a MenuHeader");
                hideSubMenusExcept(null); // hide all SubMenus
            }
        }; // window.onclick function 

    } // dropDownFW function