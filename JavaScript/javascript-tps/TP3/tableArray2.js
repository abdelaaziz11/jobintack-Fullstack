// let tab = [1,2,3,4,5,6]
// for (let i = 0; i < tab.length; i++) {
//     console.log("tab[" + i + "] = " + tab[i])
// }


// tab.forEach(function(val, index) {
//     console.log("tab[" + index + "] = " + val)
// })



personnel = [
    {id: 5, name: "Luke Skywalker", pilotingScore: 98, shootingScore: 56, isForceUser: true,},
    {id: 82, name: "Sabine Wren", pilotingScore: 73, shootingScore: 99, isForceUser: false},
    {id: 22, name: "Zeb Orellios", pilotingScore: 20, shootingScore: 59, isForceUser: false},
    {id: 15, name: "Ezra Bridger", pilotingScore: 43, shootingScore: 67, isForceUser: true},
    {id: 11, name: "Caleb Dume", pilotingScore: 71, shootingScore: 85, isForceUser: true},
    ];

    // filter uer force 1
    const forceUser =  personnel.filter(user => user.isForceUser)
    console.log(forceUser)
    // filter uer force 2
    let jediPersonne1 = personnel.filter(function (person)  {
        return person.isForceUser
    })



