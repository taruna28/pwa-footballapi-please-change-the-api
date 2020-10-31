function databasePromise(idb) {
    var dbPromise = idb.open("db_footballpwa", 1, function (upgradeDb) {
        if (!upgradeDb.objectStoreNames.contains("team_favorit")) {
            var indexFavTeam = upgradeDb.createObjectStore("team_favorit", {
                keyPath: "id"
            });
            indexFavTeam.createIndex("nameTeam", "name", {
                unique: false
            });
        }

    });

    return dbPromise;
}