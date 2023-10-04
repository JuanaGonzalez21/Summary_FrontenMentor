function datos() {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "data.json", true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      let res = document.querySelector("#card");
      res.innerHTML = "";
      for (let data of datos) {
        res.innerHTML += `
        <section class="summaryResults">
        <div class="divSummay ${data.category}" id="card">
          <section class="sumarySection">
            <img src="${data.icon}" alt="reaction" />
            <p>${data.category}</p>
          </section>
          <p class="summayP">${data.score} <span>/ 100</span></p>
        </div>
        `;
      }
    }
  };
}

datos();
