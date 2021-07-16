    fetch("https://restcountries.eu/rest/v2/all", {
      method: "GET"
    })
      .then((data) => {
        return data.json();
      })
      .then((users) => loadUsers(users));
  
  
  function loadUsers(users) {
    const userList = document.createElement("div");
    userList.className = "user-list";
    users.forEach((user) => {
      const userContainer = document.createElement("div");
      userContainer.className = "user-container";
  
      userContainer.innerHTML = `
      <img class="flag"  src=${user.flag}> </img>
      <div>
        <h2 class="countryname">${user.name}</h2>
        </div>
        <div>
        <p class="population" >Population: ${user.population}</p>
        <p class="region"> Region: ${user.region}</p>
        <p class="capital"> Capital: ${user.capital}</p>
      </div>
      `;
  
      userList.append(userContainer);
    });
  
    document.body.append(userList);
  }