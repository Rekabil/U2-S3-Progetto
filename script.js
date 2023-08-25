function postAd(event) {
  event.preventDefault();
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    body: JSON.stringify({
      name: `${document.getElementById("title").value}`,
      imageUrl: `${document.getElementById("imgUrl").value}`,
      description: `${document.getElementById("desc").value}`,
      price: `${document.getElementById("price").value}`,
      brand: `${document.getElementById("brand").value}`,
    }),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjI4M2MwMzRmZjAwMTQwM2Y1NGQiLCJpYXQiOjE2OTI5NTExNzEsImV4cCI6MTY5NDE2MDc3MX0.Ouzrt_nTU38lQEiSNa8Ahu3wqb7V5sfuEzvUA-lOy6U",
      "Content-Type": "application/json",
    },
  })
    .then((responseobj) => responseobj.json())
    .then((response) => console.log(JSON.stringify(response)))
    .catch((error) => {
      alert("Unexpected error Maybe you forgot something");
    });
}

function modify(event) {
  localStorage.setItem("id", event.id);
  window.location.href = "/change.html";
}
function info(event) {
  localStorage.setItem("id", event.id);
  window.location.href = "/moreinfo.html";
}

function modifyAD(event) {
  event.preventDefault();
  const id = localStorage.getItem("id");
  if (confirm("Are you sure you want to modify the Ad?")) {
    fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
      method: "PUT",
      body: JSON.stringify({
        name: `${document.getElementById("title").value}`,
        imageUrl: `${document.getElementById("imgUrl").value}`,
        description: `${document.getElementById("desc").value}`,
        price: `${document.getElementById("price").value}`,
        brand: `${document.getElementById("brand").value}`,
      }),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjI4M2MwMzRmZjAwMTQwM2Y1NGQiLCJpYXQiOjE2OTI5NTExNzEsImV4cCI6MTY5NDE2MDc3MX0.Ouzrt_nTU38lQEiSNa8Ahu3wqb7V5sfuEzvUA-lOy6U",
        "Content-Type": "application/json",
      },
    })
      .then((responseobj) => responseobj.json())
      .then((response) => console.log(JSON.stringify(response)));
  }
}

function goBack(event) {
  event.preventDefault();
  window.location.href = `/index.html`;
}

function removeAD(event) {
  event.preventDefault();
  const id = localStorage.getItem("id");
  if (confirm("Are you sure you wanna DELETE the Ad?")) {
    fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjI4M2MwMzRmZjAwMTQwM2Y1NGQiLCJpYXQiOjE2OTI5NTExNzEsImV4cCI6MTY5NDE2MDc3MX0.Ouzrt_nTU38lQEiSNa8Ahu3wqb7V5sfuEzvUA-lOy6U",
        "Content-Type": "application/json",
      },
    })
      .then((responseobj) => responseobj.json())
      .then((response) => {
        window.location.href = "/index.html";
      })
      .catch((error) => console.log(error));
  }
}

function resetForm(event) {
  event.preventDefault();
  if (confirm("Are you sure you wanna RESET the form?")) {
    const title = document.getElementById("title");
    title.value = "";
    const img = document.getElementById("imgUrl");
    img.value = "";
    const desc = document.getElementById("desc");
    desc.value = "";
    const price = document.getElementById("price");
    price.value = "";
    const brand = document.getElementById("brand");
    brand.value = "";
  }
}
