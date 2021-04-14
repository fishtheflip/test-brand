// Общий алгоритм:
// Создаем сначала расписание из рабочих дней , затем исключаем выходные

const daysFilter =(arr)=>{
    // Создал переменные
    // arrWeekdays - для хранения объектов рабочих дней
    // allDays - все дни для дальнейшего сравнения
    // id - id для объектов
     
    const arrWeekdays = [];
    const allDays = ['mon','tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    let id = '';

    // for 
    // в цикле находим все буднии дни
    // если элемент первый, то создается объект, который пушится в массив буднечного расписания
    // со второго объекта начинается проверка на время, если время не совпадает создаем новый объекти пушим в массив

    for(let i = 0; i <= arr.length-1; i++ ){
        let findKey = Object.entries(arr[i])
        if(i === 0){
            id = i;
            let first = {id: id,name: findKey[0][0], time: findKey[0][1]};
            arrWeekdays.push(first);
        } else {
            let findKey = Object.entries(arr[i]);
            if( findKey[0][1] === arrWeekdays[id].time){
                arrWeekdays[id].name = arrWeekdays[id].name +'-'+ findKey[0][0];
            } 
            if(findKey[0][1] !== arrWeekdays[id].time){
                id++;
                let nextData = {id: id,name: findKey[0][0], time: findKey[0][1]};
                arrWeekdays.push(nextData);
            }
        }
    }

    // создаем массив из рабочих дней для сравнения со всеми днями
    const weekDaysKeys = [];
    arr.map((item)=>{
        let key = Object.keys(item);
        weekDaysKeys.push(key[0]);
    });

    // находим выходные дни за счет исключения рабочих дней из всех дней
    // создаем объект с выходными днями
    // возращаем искомый массив
    const weekEndString = allDays.filter(day => !weekDaysKeys.includes(day)).join('-');
    let dayOffId = id + 1;
    const dayOffObj = {id:dayOffId ,name:weekEndString, time:"dayoff"};

    return [...arrWeekdays, dayOffObj];

}

const arr =     
    [
        { "mon": "09:00 - 18:00" },
        { "tue": "09:00 - 18:00" },
        { "wed": "09:00 - 18:00" },
        { "thu": "09:00 - 18:00" },
        { "fri": "09:00 - 18:00" }
    ];  
 const arr2 =   
    [
        { "mon": "09:00 - 18:00" },
        { "tue": "09:00 - 18:00" },
        { "wed": "09:00 - 18:00" },
        { "thu": "09:00 - 18:00" },
        { "fri": "09:00 - 17:00" },
        { "sat": "09:00 - 17:00" }
    ];

const arr3 = 
    [
        { "mon": "09:00 - 17:00" },
        { "tue": "09:00 - 18:00" },
        { "wed": "09:00 - 17:00" },
        { "thu": "09:00 - 18:00" },
    ];




console.log(daysFilter(arr));
console.log(daysFilter(arr2));
console.log(daysFilter(arr3));