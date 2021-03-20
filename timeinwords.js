function timeInWords(h, m) {
    let time = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine']
    let minut = ""
    let topast = ""
    if (m == 1 || 60 - m == 1) {
        minut = "minute "
    }
    else {
        minut = "minutes "
    }
    if (m > 30) {
        topast = "to "
    }
    else {
        topast = "past "
    }
    let string = ""
    if (m == 0) {
        string += time[h] + " o' clock"
    }
    else if (m % 30 == 0 && m < 60) {
        string += "half past " + time[h]
    }
    else if (m % 15 == 0 && m < 60) {
        string += "quarter "
        if (m > 30) {
            string += topast + time[h+1]
        }
        else {
            string += topast + time[h]
        }
       
    }
    else if (m < 30) {
        string += time[m] + " " + minut + topast + time[h]
    }
    else if (m < 60) {
        string += time[60 - m] + " " + minut + topast + time[h + 1]
    }
    return string
}