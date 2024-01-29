function UsersComingSoon() {

  var ele = document.createElement("div");
  ele.classList.add('usersComingSoon'); // see styling in this file, above...
  ele.innerHTML = `
    <div class="comingSoon">
      <h3>Users Coming Soon</h3>
      <p>Our user page is under construction. Check back soon for updates!</p>
    </div>
  `;

  return ele;
}