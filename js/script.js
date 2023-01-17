const contacts = users;
const button = document.getElementById("btn");
const totalContacts = contacts.length;

displayAllContacts();

// function getContacts() {
//   for (var i = 0; i < contacts.length; i++) console.log(contacts[i]);
//   return contacts;
// }

function displayAllContacts() {
  const ul = document.getElementsByClassName("contact-list")[0];
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

function pagination() {
  const numbers = `<div class="pagination">
            <ul id="pagination li"></ul> </div>`;

}
