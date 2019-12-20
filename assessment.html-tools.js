
// function getSelectedItem(selector){
//     var e = document.getElementById(selector);
//     return e.options[e.selectedIndex].text;
// }

function getSelectedItems(selector){
    var e = document.getElementById(selector);

    //All Item
    if (e.options[0].selected){
        return Array.from(e.options)
            .filter(option => option.defaultSelected==false)
            .map(option => option.value);
    }else{
        return Array.from(e.options)
            .filter(option => option.selected)
            .map(option => option.value);

    }
}