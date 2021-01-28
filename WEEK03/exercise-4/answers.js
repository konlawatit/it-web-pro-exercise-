function mapToSquare (input) {
    // TODO ใช้ .map สร้าง array ที่เป็นเลขยกกำลังสองของ input
    return input.map(value => value**2)
}

function convertTemperature (input) {
    // TODO: ให้แปลงอุณหภูมิจาก °F เป็น °C โดยใช้ฟังก์ชัน .map()
    function fah_to_celsius (fah) {
        let cel = (fah - 32) * 5 / 9
        return Number(cel.toFixed(1))
    }
    return input.map(value => {
        value["temperature"] = fah_to_celsius(value.temperature)
        return value
    })
    // input.map(value => value["temperature"] = fah_to_celsius(value.temperature))
    // return input
}

function filterEvenNumber (input) {
    // TODO: filter input เอาเลขคู่เท่านั้น
    return input.filter(value => value % 2 === 0)
}

function filterAgeRange (input) {
    // TODO: กรอง input.people ตามช่วงอายุ
   return input.people.filter(val =>  input.min < val.age && val.age < input.max)
}

function removeByFilter (input) {
    // TODO: ลบ Object ใน Array ด้วยการ filter
    return input.people.filter(val => input.removeId !== val.id)
}