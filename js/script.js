const contacts = users; // the array
const num = document.getElementsByClassName('pagination li')[0];


const elem = document.getElementsByClassName("contact-list")[0];
const lengthElem = elem.childNodes.length; 

if(lengthElem == 5){
    for (var i = 0; i <= 9; i++) {
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
        //
        const ul = document.getElementsByClassName("contact-list")[0]; // access the main contaner
        ul.insertAdjacentHTML("beforeend", content);
      }
}
    pagination();



function pagination() {
  const totalContacts = contacts.length; // the total number of items in the data array
  const pages = Math.ceil(totalContacts / 10); //4

  const title = document.getElementsByTagName("h3")[0];
  title.textContent = `Total: ` + totalContacts;

  let start = 0;
  let end = 9;

  // call the number of pages

  const pageUl = document.getElementById("pagination li");

  for (var i = 0; i < pages; i++) {
    let li = document.createElement("li");
    li.setAttribute("class", "pagination li");
    li.setAttribute("start", start);
    li.setAttribute("end", end);
    //
    start += 10;
    end += 10;
    //
    li.addEventListener("click", function () {
      start_index = event.target.getAttribute("start");
      end_index = event.target.getAttribute("end");

      // remove the last page
      const ul = document.getElementsByClassName("contact-list")[0]; // access the main contaner
      if (ul) {
        ul.remove();
        const container = document.createElement("ul");
        container.setAttribute("class", "contact-list");
        document
          .getElementsByClassName("page-header cf")[0]
          .appendChild(container);
      }

      // insert the new one
      for (var i = start_index; i <= end_index; i++) {
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
        //
        const ul = document.getElementsByClassName("contact-list")[0]; // access the main contaner
        ul.insertAdjacentHTML("beforeend", content);
      }
    });

    var textnode = document.createTextNode(i + 1);
    li.appendChild(textnode);
    pageUl.appendChild(li);
  }
}




// const contacts = users;
// const button = document.getElementById("btn");
// // const ul = document.getElementsByClassName("contact-list")[0];
// const totalContacts = contacts.length;

// displayContacts(0);
// pagination();

// function displayContacts(currentPage) {
//   const title = document.getElementsByTagName("h3")[0];
//   title.textContent = `Total: ` + contacts.length;

//   for (var i = 0; i < contacts.length; i++) {

//     if(i < currentPage*10 || i >= (currentPage+1)*10){
//         // console.log("none");

//         var content = `<li class="contact-item cf">
//                         <div class="contact-details">
//                             <img class="avatar" src="${contacts[i].image}">
//                             <h3>${contacts[i].name}</h3>
//                             <span class="email">${contacts[i].email}</span>
//                         </div>
//                         <div class="joined-details">
//                             <span class="date">Joined ${contacts[i].joined}</span>
//                     </div>
//                     </li>`;
        
//         // ul.insertAdjacentHTML("beforeend", content);
//         }else{
//             // remove the last page
//             const ul = document.getElementsByClassName("contact-list")[0]; // access the main contaner
//             if (ul) {
//                 ul.remove();
//                 const container = document.createElement("ul");
//                 container.setAttribute("class", "contact-list");
//                 document.getElementsByClassName("page-header cf")[0].appendChild(container);
//             }
//             var content = `<li class="contact-item cf">
//                         <div class="contact-details">
//                             <img class="avatar" src="${contacts[i].image}">
//                             <h3>${contacts[i].name}</h3>
//                             <span class="email">${contacts[i].email}</span>
//                         </div>
//                         <div class="joined-details">
//                             <span class="date">Joined ${contacts[i].joined}</span>
//                     </div>
//                     </li>`;
//         const ch = document.getElementsByClassName("contact-list")[0]; // access the main contaner
//         ch.insertAdjacentHTML("beforeend", content);
//         }
//   }

// }
// function pagination() {
//   const pageUl = document.getElementById("pagination li");
//   const pages = Math.ceil(totalContacts / 10);
//     for (var i = 0; i < pages; i++) {
//         let li = document.createElement("li");
//         li.setAttribute("class", 'pagination li');
//         li.onclick = (function (j) { return function () {displayContacts(j);} }(i)); 
//         var textnode = document.createTextNode(i + 1);
//         li.appendChild(textnode);
//         pageUl.appendChild(li);
//     }
// }










