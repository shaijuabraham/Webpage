function infoContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `
      <h2>My Info</h2>
      <p>
        This is my Info Content Page  !!! 
        The home and blog and info links should work.
      </p>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele; 
}