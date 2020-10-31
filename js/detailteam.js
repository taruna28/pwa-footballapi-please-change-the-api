function resultDetailTeamJSON(data) {
    data = JSON.parse(JSON.stringify(data).replace(/http:/g, 'https:'));
    document.getElementById("a-namaklub").innerHTML = data.name;
    document.getElementById("a-logoklub").src = data.crestUrl;
    document.getElementById("a-name").innerHTML = data.name;
    document.getElementById("a-shortName").innerHTML = data.shortName;
    document.getElementById("a-tla").innerHTML = data.tla;
    document.getElementById("a-address").innerHTML = data.address;
    document.getElementById("a-phone").innerHTML = data.phone;
    document.getElementById("a-website").innerHTML = data.website;
    document.getElementById("a-email").innerHTML = data.email;
    document.getElementById("a-founded").innerHTML = data.founded;
    document.getElementById("a-clubColors").innerHTML = data.clubColors;
    document.getElementById("a-venue").innerHTML = data.venue;
    document.getElementById("a-preloader").innerHTML = '';
}

function resultTeamFav(data) {
    var dataTeamFavHtml = ''
    data.forEach(function (team) {
        dataTeamFavHtml += `
        <div class="col s12 m6 l6">
            <div class="card">
                <div class="card-content blue darken-1">
                    <div center-align>
                        <h5 class="center-align">
                            <span>  
                                <a class="white-text" href="./detail_team.html?id=${team.id}">${team.name}</a>
                            </span>
                        </h5>          
                    </div>
                </div>
            </div>
        </div>
        `
    });

    document.getElementById("a-favorit-load").innerHTML = dataTeamFavHtml;
}