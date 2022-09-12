console.log("ACTIVE");
let contacts = [];
let addressContacts = "contacts";
let searchValue = "";

function persistData() {
  window.localStorage.setItem(addressContacts, JSON.stringify(contacts));
}

function deleteContact(index) {
  contacts.splice(index, 1);
  persistData();
  render();
}

function render() {
  const contactsId = "contacts-list";
  const contactsList = document.createElement("ul");

  if (document.querySelector(`#${contactsId}`)) {
    document.querySelector(`#${contactsId}`).remove();
  }

  contactsList.id = contactsId;

  contacts
    .filter((singleContact) => {
      return (
        singleContact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        singleContact.phone.includes(searchValue)
      );
    })
    .forEach((singleContact, index) => {
      const contactEl = document.createElement("li");
      const buttons = document.createElement("div");
      const nameEl = document.createElement(
        singleContact.isInEdit ? "input" : "p"
      );
      const phoneEl = document.createElement(
        singleContact.isInEdit ? "input" : "a"
      );
      const deleteBtn = document.createElement("button");
      const favoriteBtn = document.createElement("button");
      const editBtn = document.createElement("button");

      if (singleContact.isInEdit) {
        contactEl.className = singleContact.isInEdit ? "editor" : "";
      } else if (singleContact.isFavorite) {
        contactEl.className = singleContact.isFavorite ? "favorite" : "";
      }

      phoneEl.href = `tel:${singleContact.phone}`;
      deleteBtn.textContent = "X";
      deleteBtn.classList = "delete";
      favoriteBtn.textContent = singleContact.isFavorite ? "-" : "+";
      favoriteBtn.classList = singleContact.isFavorite
        ? "buttons--fav"
        : "buttons--no-fav";
      editBtn.textContent = singleContact.isInEdit ? "Save" : "Edit";
      editBtn.className = singleContact.isInEdit ? "inEditing" : "edit";
      buttons.classList = "buttons";

      if (singleContact.isInEdit) {
        nameEl.type = "text";
        phoneEl.type = "tel";
        nameEl.value = singleContact.name;
        phoneEl.value = singleContact.phone;
        nameEl.id = "nameI";
        phoneEl.id = "phoneI";
        buttons.id = "isEditing";
      } else {
        nameEl.textContent = singleContact.name;
        phoneEl.textContent = singleContact.phone;
      }

      deleteBtn.addEventListener("click", () => deleteContact(index));

      favoriteBtn.addEventListener("click", () => {
        contacts[index].isFavorite = !contacts[index].isFavorite;
        persistData();
        render();
      });

      editBtn.addEventListener("click", (e) => {
        if (singleContact.isInEdit) {
          contacts[index].name = nameEl.value;
          contacts[index].phone = phoneEl.value;
        }
        contacts[index].isInEdit = !contacts[index].isInEdit;
        persistData();
        render();
      });

      buttons.append(editBtn, favoriteBtn, deleteBtn);
      contactEl.append(nameEl, phoneEl, buttons);
      contactsList.append(contactEl);
    });
  document.querySelector(".address--book").append(contactsList);
}

document.querySelector("#search").addEventListener("input", (e) => {
  searchValue = e.target.value;
  render();
});

document.querySelector("#new-address").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const newContact = Object.assign(Object.fromEntries(formData), {
    isFavorite: false,
    isInEdit: false,
  });
  contacts = contacts.concat(newContact);

  persistData();
  e.target.reset();
  render();
});

window.addEventListener("DOMContentLoaded", () => {
  const persistedData = window.localStorage.getItem(addressContacts);

  if (persistedData) {
    contacts = JSON.parse(persistedData);
    render();
  }
});
