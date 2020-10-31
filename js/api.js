base_url = "https://api.football-data.org/v2/"
function getEpl(){
  var urlParams = new URLSearchParams(window.location.search);
  var idParam = urlParams.get("id");

//   if ("caches" in window) {
//     caches.match(base_url + "competitions/2021/standings").then(response => {
//         if(response){
//             return response.json();
//         }
        
//        })
      
//        .then(data => {
//          var tableStandingsHtml = ""
//         data.standings.forEach(element => {
//             var type = element.type
//           var dataStandings = ""
//           element.table.forEach(row => {
           
//            row = JSON.parse(JSON.stringify(row).replace(/http:/g, 'https:'));
//            dataStandings +=`<tr>
//            <td class="center-align">${row.position}</td>
//            <td class="center-align">
//            <a href="./detail_team.html?id=${row.team.id}">
//                <p class="hide-on-small-only">
//                    <img class ="show-on-medium-and-up show-on-medium-and-down a-img-club-klasemen" src=${row.team.crestUrl}  alt="logo">
//                    ${row.team.name}
//                </p>
//                <p class="hide-on-med-and-up">
//                    <img src=${row.team.crestUrl}  alt="logo" class="a-img-club-klasemen">
//                </p>
//            </a>
//            </td>
//            <td class="center-align">${row.playedGames}</td>
//            <td class="center-align">${row.won}</td>
//            <td class="center-align">${row.draw}</td>
//            <td class="center-align">${row.lost}</td>
//            <td class="center-align">${row.goalsFor}</td>
//            <td class="center-align">${row.goalsAgainst}</td>
//            <td class="center-align">${row.goalDifference}</td>
//            <td class="center-align">${row.points}</td>
//        </tr>`
//           })
       
//           tableStandingsHtml += `
//           <div class="card">
//               <div class="card-content">
//                   <h6 class="a-font-bold a-mb-2">Last Updated: ${convertDate(new Date(data.competition.lastUpdated))}</h6> 
//                   <h6 class="a-font-bold ">type: ${type}</h6> 
//                   <table class="responsive-table striped " >
//                       <thead>
//                       <tr>
//                           <th class="center-align">Position</th>
//                           <th>Team</th>
//                           <th class="center-align">Played</th>
//                           <th class="center-align">Won</th>
//                           <th class="center-align">Draw</th>
//                           <th class="center-align">Lost</th>
//                           <th class="center-align">GF</th>
//                           <th class="center-align">GA</th>
//                           <th class="center-align">GD</th>
//                           <th class="center-align">Points</th>
//                       </tr>
//                       </thead>
//                       <tbody>` + dataStandings + `</tbody>
//                   </table>
//               </div>
//           </div>`
          
       
          
//         });
//         document.getElementById("klasemen-content").innerHTML = tableStandingsHtml;
//        })

//     console.log("cache di window",{urlParams},idParam)
//   }

   if ("caches" in window) {
        caches.match(base_url + "competitions/2021/standings").then(response => {
            if(response){
                data= response.json();
            
             var tableStandingsHtml = ""
            data.standings.forEach(element => {
                var type = element.type
              var dataStandings = ""
              element.table.forEach(row => {
               
               row = JSON.parse(JSON.stringify(row).replace(/http:/g, 'https:'));
               dataStandings +=`<tr>
               <td class="center-align">${row.position}</td>
               <td class="center-align">
               <a href="./detail_team.html?id=${row.team.id}">
                   <p class="hide-on-small-only">
                       <img class ="show-on-medium-and-up show-on-medium-and-down a-img-club-klasemen" src=${row.team.crestUrl}  alt="logo">
                       ${row.team.name}
                   </p>
                   <p class="hide-on-med-and-up">
                       <img src=${row.team.crestUrl}  alt="logo" class="a-img-club-klasemen">
                   </p>
               </a>
               </td>
               <td class="center-align">${row.playedGames}</td>
               <td class="center-align">${row.won}</td>
               <td class="center-align">${row.draw}</td>
               <td class="center-align">${row.lost}</td>
               <td class="center-align">${row.goalsFor}</td>
               <td class="center-align">${row.goalsAgainst}</td>
               <td class="center-align">${row.goalDifference}</td>
               <td class="center-align">${row.points}</td>
           </tr>`
              })
           
              tableStandingsHtml += `
              <div class="card">
                  <div class="card-content">
                      <h6 class="a-font-bold a-mb-2">Last Updated: ${convertDate(new Date(data.competition.lastUpdated))}</h6> 
                      <h6 class="a-font-bold ">type: ${type}</h6> 
                      <table class="responsive-table striped " >
                          <thead>
                          <tr>
                              <th class="center-align">Position</th>
                              <th>Team</th>
                              <th class="center-align">Played</th>
                              <th class="center-align">Won</th>
                              <th class="center-align">Draw</th>
                              <th class="center-align">Lost</th>
                              <th class="center-align">GF</th>
                              <th class="center-align">GA</th>
                              <th class="center-align">GD</th>
                              <th class="center-align">Points</th>
                          </tr>
                          </thead>
                          <tbody>` + dataStandings + `</tbody>
                      </table>
                  </div>
              </div>`
              
           
              
            });
            document.getElementById("klasemen-content").innerHTML = tableStandingsHtml;
        }
    })
     }
      

  fetch(base_url+"competitions/2021/standings",
  {headers:
      {"X-Auth-Token":"d4cde0b660b442ba9ea36fd30bc17268"
      }
  }
)
.then(response => {
 return response.json();
})
// .then(responseJson => {
//  console.log(responseJson);
// })
.then(data => {
  var tableStandingsHtml = ""
 data.standings.forEach(element => {
     var type = element.type
   var dataStandings = ""
   element.table.forEach(row => {
    //<a href="#team?id=${row.team.id}" class="link-to-team"> tandain ini
    row = JSON.parse(JSON.stringify(row).replace(/http:/g, 'https:'));
    dataStandings +=`<tr>
    <td class="center-align">${row.position}</td>
    <td class="center-align">
    <a href="./detail_team.html?id=${row.team.id}">
        <p class="hide-on-small-only">
            <img class ="show-on-medium-and-up show-on-medium-and-down a-img-club-klasemen" src=${row.team.crestUrl}  alt="logo">
            ${row.team.name}
        </p>
        <p class="hide-on-med-and-up">
            <img src=${row.team.crestUrl}  alt="logo" class="a-img-club-klasemen">
        </p>
    </a>
    </td>
    <td class="center-align">${row.playedGames}</td>
    <td class="center-align">${row.won}</td>
    <td class="center-align">${row.draw}</td>
    <td class="center-align">${row.lost}</td>
    <td class="center-align">${row.goalsFor}</td>
    <td class="center-align">${row.goalsAgainst}</td>
    <td class="center-align">${row.goalDifference}</td>
    <td class="center-align">${row.points}</td>
</tr>`
   })

   tableStandingsHtml += `
   <div class="card">
       <div class="card-content">
           <h6 class="a-font-bold a-mb-2">Last Updated: ${convertDate(new Date(data.competition.lastUpdated))}</h6> 
           <h6 class="a-font-bold ">type: ${type}</h6> 
           <table class="responsive-table striped " >
               <thead>
               <tr>
                   <th class="center-align">Position</th>
                   <th>Team</th>
                   <th class="center-align">Played</th>
                   <th class="center-align">Won</th>
                   <th class="center-align">Draw</th>
                   <th class="center-align">Lost</th>
                   <th class="center-align">GF</th>
                   <th class="center-align">GA</th>
                   <th class="center-align">GD</th>
                   <th class="center-align">Points</th>
               </tr>
               </thead>
               <tbody>` + dataStandings + `</tbody>
           </table>
       </div>
   </div>`
   

   
 });
 document.getElementById("klasemen-content").innerHTML = tableStandingsHtml;
 
})


} 



function getMatchLeague() {
    //kenapa musti dikasih promise baru bisa muncul
    //mungkin karena definisi promise = janji, promise akan memberikan hasil ketika hasil sudah didapat dan immediatly return dengan invoke ()
    return new Promise(function (resolve, reject) {
        
        if ('caches' in window) {
            caches.match(base_url+`competitions/2021/matches?status=SCHEDULED&limit=20`)
            .then(function (response) {
                if (response) {
                    response.json()
                    .then(function (data) {
                        resultMatchJSON(data);
                        resolve(console.log("ini data"));
                    });
                }
            });
        }

        fetch(base_url+`competitions/2021/matches?status=SCHEDULED&limit=20`,
        {headers:
            {"X-Auth-Token":"d4cde0b660b442ba9ea36fd30bc17268"
            }
        }
      ).then(function (response) {
        if (response) {
            response.json()
            .then(function (data) {
                resultMatchJSON(data);
                resolve(console.log("ini data 2"));

            });
        }
        
    });
    })




        function resultMatchJSON(data) {
            var JadwalHTML = ''
            data.matches.forEach(function (match) {
              JadwalHTML += `
                  <div >
                  <div class="card">
                    <div class="card-content">
                      <div center-align>
                        <h5 class="center-align">Matchday : ${match.matchday}</h5>
                        <div class="center-align">Kick Off : ${convertDate(new Date(match.utcDate))}</div>
                  
                        <div class="row" style="margin:20px">
                          <div class="col s5 m5 l5">
                            <span class="blue-text">  ${match.homeTeam.name}</span>
                          </div>
                          <div class="col s2 ">
                            VS
                          </div>
                          <div class="col s5 m5 l5">
                            <span class="blue-text">  ${match.awayTeam.name}</span>
                          </div>
                        </div>
                      
                      </div>
                    </div>
                  </div>
                </div>`
            });
            //tandain dulu
            document.getElementById("jadwal-content").innerHTML = JadwalHTML;
          }
        }




    function getDetailTeamById() {
        return new Promise(function (resolve, reject) {
            var urlParams = new URLSearchParams(window.location.search);
            // https://developer.mozilla.org/en-US/docs/Web/API/Location/search
            var idParam = urlParams.get("id");
            // var idParam = 5
            console.log(idParam);
            var dataSquadHTML = ''
            var tableSquadHTML = ''
            if ("caches" in window) {
                caches.match("https://api.football-data.org/v2/teams/"+ idParam).then(function (response) {
                    if (response) {
                        response.json().then(function (data) {
                            console.log(data);
                            resultDetailTeamJSON(data)
                            data.squad.forEach(function (squad, index) {
                                dataSquadJSON = squad;
                                dataSquadHTML += `
                                <tr>
                                    <td> ${squad.name}</a></td>
                                    <td >${squad.position}</td>
                                </tr>`
                            });
                            tableSquadHTML += `<table><tbody> ${dataSquadHTML}  </tbody></table>`
                            document.getElementById("squad").innerHTML = tableSquadHTML;
                            resolve(data);
                        });
                    }
                });
            }
    
            
            fetch("https://api.football-data.org/v2/teams/"+ idParam,
            {headers:
                {"X-Auth-Token":"d4cde0b660b442ba9ea36fd30bc17268"
                }
            }
          ). then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log(data);
                    resultDetailTeamJSON(data)
                    dataTeamJSON = data;
                    data.squad.forEach(function (squad, index) {
                        dataSquadJSON = squad;
                        dataSquadHTML += `
                        <tr>
                            <td>${index+1}. </td>
                            <td>${squad.name}</a></td>
                            <td>${squad.position}</td>
                        </tr>`
                    });
                    tableSquadHTML += `
                    <table>
                        <thead>
                            <tr>
                                <td class="a-font-bold">No</td>
                                <td class="a-font-bold">Name</td>
                                <td class="a-font-bold">Position</td>
                            </tr>
                        </thead>
                        <tbody> ${dataSquadHTML}  </tbody>
                    </table>`
    
                    document.getElementById("squad").innerHTML = tableSquadHTML;
                    resolve(data);
                })
            }
        });
                                   
    
        });

        
   
   
    }