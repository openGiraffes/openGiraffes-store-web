let openGiraffes_Stores=["https://storedb.opengiraffes.top/data.json"],openGiraffes_Ratings=["https://opengiraffes-rating.herokuapp.com"],BananaHackers_Stores=["https://banana-hackers.gitlab.io/store-db/data.json","https://bananahackers.github.io/store-db/data.json","https://bananahackers.github.io/data.json"],BananaHackers_Ratings=["https://bhackers.uber.space/srs/v1"];class MultiDatabases{constructor(){window.localStorage.setItem("DatabaseName","openGiraffes Store"),window.localStorage.setItem("DatabaseURLs",JSON.stringify(openGiraffes_Stores)),window.localStorage.setItem("RatingServers",JSON.stringify(openGiraffes_Ratings)),window.localStorage.setItem("QRHeader","opengiraffes:")}openGiraffes(){window.localStorage.setItem("DatabaseName","openGiraffes Store"),window.localStorage.setItem("DatabaseURLs",JSON.stringify(openGiraffes_Stores)),window.localStorage.setItem("RatingServers",JSON.stringify(openGiraffes_Ratings)),window.localStorage.setItem("QRHeader","opengiraffes:")}BananaHackers(){window.localStorage.setItem("DatabaseName","BananaHackers"),window.localStorage.setItem("DatabaseURLs",JSON.stringify(BananaHackers_Stores)),window.localStorage.setItem("RatingServers",JSON.stringify(BananaHackers_Ratings)),window.localStorage.setItem("QRHeader","bhackers:")}}