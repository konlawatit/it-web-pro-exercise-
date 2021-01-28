const dayInWeek = ["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"]
const months_th = [ "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม" ];
function getDayName(input) {
    // input เป็นเลข 0-6
    // TODO: แปลงเลข 0-6 เป็น วันอาทิตย์ - วันเสาร์

    // hint
    // const daysInWeek = ['วันอาทิตย์', 'วันจันทร์', /*...*/]
    
    return dayInWeek[input]
}

function formatDate(input) {
    // input เป็น Object ในรูปแบบ
    // {
    //     day: 6, // 0=วันอาทิตย์, 1=วันจันทร์, 2=วันอังคาร, ...
    //     date: 15, // วันที่ 1-31
    //     month: 0, // 0=มกราคม, 1=กุมภาพันธ์, ...
    //     year: 2021 // ปี
    // }
    // TODO: แปลง input เป็น String ในรูปแบบ "วันศุกร์ที่ 15 มกราคม พ.ศ. 2564"
    return dayInWeek[input['day']] + "ที่ " + input['date'] + " " + months_th[input['month']] + " พ.ศ. " + (input['year'] + 543)

}
function findTotal(input) {
    // input เป็น array ของตัวเลข
    // TODO: ให้หาผลบวกของเลขทั้งหมดใน input
    return input.reduce((a,b) => a+b, 0)
}

function findMinMax(input) {
    // input เป็น array ของตัวเลข
    // TODO: ให้หาตัวเลขที่มากที่สุดและน้อยที่สุดใน input
    return {
        'min': Math.min(...input),
        'max': Math.max.apply(null, input)
    }
}

function findBMI(input) {
    // กำหนดให้ input เป็น Array ของ Object ในรูปแบบ
    // [
    //     {
    //         name: "ABC DEF", // ชื่อ นามสกุล
    //         height: 167, // ความสูง มีหน่วยเป็น cm
    //         weight: 72 // น้ำหนัก มีหน่วยเป็น kg
    //     },
    //     {
    //         name: "XYZ DEF", // ชื่อ นามสกุล
    //         height: 194, // ความสูง มีหน่วยเป็น cm
    //         weight: 60 // น้ำหนัก มีหน่วยเป็น kg
    //     },
    //     ...
    // ]
    // TODO: ให้คำนวณดัชนีมวลการ (Body Mass Index, bmi) ของแต่ละคน
    // น้ำหนักในหน่วยกิโลกรัม / ความสูงในหน่วยเมตรยกกำลังสอง (ให้ตอบทศนิยมสองตำแหน่ง)
    input.forEach((data) => data.bmi = (data.weight / (data.height / 100)**2).toFixed(2))
    return input
}