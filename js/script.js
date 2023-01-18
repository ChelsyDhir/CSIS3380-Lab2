const contacts = users;
const button = document.getElementById("btn");
const ul = document.getElementsByClassName("contact-list")[0];
const totalContacts = contacts.length;

displayContacts(0);
pagination();

function displayContacts(currentPage) {
  const title = document.getElementsByTagName("h3")[0];
  title.textContent = `Total: ` + contacts.length;

  for (var i = 0; i < contacts.length; i++) {

    if(i < currentPage*10 || i >= (currentPage+1)*10){
        console.log("none");
        var content = `<li class="contact-item cf">
                        <div class="contact-details">
                            <img class="avatar" src="${contacts[i].image}">
                            <h3>${contacts[i].name}</h3>
                            <span class="email">${contacts[i].email}</span>
                        </div>
                        <div class="joined-details">
                            <span class="date">Joined ${contacts[i].joined}</span>
                    </div>
                    </li>`;
        
        // ul.insertAdjacentHTML("beforeend", content);
            // contacts[i].style.display = "none";
        }else{
            console.log("chelsy");
            var content = `<li class="contact-item cf">
                        <div class="contact-details">
                            <img class="avatar" src="${contacts[i].image}">
                            <h3>${contacts[i].name}</h3>
                            <span class="email">${contacts[i].email}</span>
                        </div>
                        <div class="joined-details">
                            <span class="date">Joined ${contacts[i].joined}</span>
                    </div>
                    </li>`;
        ul.insertAdjacentHTML("beforeend", content);
        
            // contacts[i].style.display = "block";
        }
  }

}
function pagination() {
  const pageUl = document.getElementById("pagination li");
  const pages = Math.ceil(totalContacts / 10);
    for (var i = 0; i < pages; i++) {
        let li = document.createElement("li");
        li.setAttribute("class", 'pagination li');
        li.onclick = (function (j) { return function () {displayAllContacts(j);} }(i)); 
        var textnode = document.createTextNode(i + 1);
        li.appendChild(textnode);
        pageUl.appendChild(li);
    }
}
