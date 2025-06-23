var person = {
 "SNILS 1": ["Сидоров", "Иван", "Викторович", 13, "мая", 1987, "м", "исполнено"],
 "SNILS 2": ["Ткаченко", "Инна", "Андреевна", 20, "января", 2001, "ж", "медотвод"],
 "SNILS 3": ["Берг", "Марина", "Феликсовна", 7, "ноября", 1972, "ж", "назначено"]       
    };
    console.log(person);

    let SNILS;
    var FirstFunction = function (person, SNILS) {
    SNILS=prompt("Введите SNILS пациента", SNILS);
    infoname=person[SNILS];
    //console.log(infoname);
    alert("Информация о пациенте"+infoname); 
    statusPriv = person[SNILS][7];
    console.log(statusPriv);
    };

    SecondFunction = function (statusPriv, infoname) {
      if (statusPriv === "исполнено") {
        alert("Отказано в прививке" + infoname);
    } else if (statusPriv === "медотвод") {
        alert("Отказано в прививке" + infoname);
    } else {
        alert("Сделать прививку" + infoname);
    }  
    }
    
    ForSecond = FirstFunction(person, SNILS);
    SecondFunction(statusPriv, infoname);

    while (confirm("Продолжить проверку прививочного статуса?")) {
        ForSecond = FirstFunction(person, SNILS);
    SecondFunction(statusPriv, infoname);
    }
    console.log("Сеанс проверки прививочного статуса закончен");
    
