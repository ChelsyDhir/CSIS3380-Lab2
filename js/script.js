const contacts = users;
const button = document.getElementById("btn");
const ul = document.getElementsByClassName("contact-list")[0];
const totalContacts = contacts.length;

displayAllContacts();
pagination();
// function getContacts() {
//   for (var i = 0; i < contacts.length; i++) console.log(contacts[i]);
//   return contacts;
// }

function displayAllContacts() {
  //const image = document.getElementsByClassName("avatar")[0];
  //const name = document.getElementsByTagName("h3")[1];
  //const emailSpan = document.getElementsByTagName("span")[0];
  //const joinedSpan = document.getElementsByTagName("span")[1];
  // const details = document.getElementsByTagName('li')[0];
  const title = document.getElementsByTagName("h3")[0];
  title.textContent = `Total: ` + contacts.length;

  // name.innerHtml = "chelsy";
  // console.log(contacts[0].name.textContent = "chelsy");
  // console.log(contacts[0].joined);
  // console.log(contacts[0].image);
  // console.log(name.innerHtml);

  for (var i = 0; i < contacts.length; i++) {
    let content = `<li class="contact-item cf">
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
    //let li = document.createElement("li");
    //li.setAttribute("class", "contact-item cf");

    //image.src = contacts[i].image;
    //name.textContent = contacts[i].name;
    //emailSpan.textContent = contacts[i].email;
    //joinedSpan.textContent = `Joined ` + contacts[i].joined;
    //li = document.createElement("li");
    // ul.appendChild(li);
  }

  // contacts.forEach(contact => {
  //     // image.innerHtml = contact.image;
  //     name.textContent = contact.name;
  //     const thisname = name.textContent;
  //     // email.innerText = contact.email;
  // });
  // console.log(contacts[0].email);
}

// button.addEventListener("click", getContacts);

function btnShow () {
    var paginationUl = document.getElementById("pagination li");
    //  Calculating the how many pages will be needed
    var pages = Math.ceil(contentsNum / showContents); 
    for (var i = 0; i < pages; i++) {
      var li = document.createElement('li');
      li.onclick = (function (j) { return function () {showPage(j);} }(i)); 
  
      // show the specific pages
      var textnode = document.createTextNode(i + 1); 
      li.appendChild(textnode);
      paginationUl.appendChild(li);
    }
  }
  

function pagination() {
  const pageUl = document.getElementById("pagination li");
  const pages = Math.ceil(totalContacts / 10);
    for (var i = 0; i < pages; i++) {
        let li = document.createElement('li');
        var textnode = document.createTextNode(i + 1);
        li.appendChild(textnode);
        pageUl.appendChild(li);
    }
}
