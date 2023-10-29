var value1, value2;

function getValueId(id) {
    if (id=='input1') {
        value1 = (document.getElementById('input1').value);
        console.log("Giá trị từ ô input 1:", value1);
    } else if (id === 'input2') {
        value2 = (document.getElementById('input2').value);
        console.log("Giá trị từ ô input 2:", value2);
    }
    console.log(typeof(value1));

    if (isNaN(value1) ) {
        document.getElementById('answer').innerHTML = (`Giá trị ở ô Số thứ nhất không phải là số <br>`);
    } if (isNaN(value2)) {
        document.getElementById('answer').innerHTML = (`Giá trị ở ô Số thứ hai không phải là số <br>`) ;
    }
    if (value1.trim()==="") {
        document.getElementById('answer').innerHTML = (`Bạn chưa nhập giá trị ô thứ nhất <br>`) ;
    }
    if (value2.trim()==="") {
        document.getElementById('answer').innerHTML = (`Bạn chưa nhập giá trị ô thứ hai <br>`) ;
    }
}



function getCheckedPosition() {
    document.getElementById('answer').innerHTML = "";
    if (isNaN(value1)) {
        document.getElementById('answer').innerHTML = (`Giá trị ở ô Số thứ nhất không phải là số <br>`);
    }
    if (isNaN(value2)) {
        document.getElementById('answer').innerHTML = (`Giá trị ở ô Số thứ hai không phải là số <br>`) ;
    }
    if (value1.trim()==="") {
        document.getElementById('answer').innerHTML = (`Bạn chưa nhập giá trị ô thứ nhất <br>`) ;
    }
    if (value2.trim()==="") {
        document.getElementById('answer').innerHTML = (`Bạn chưa nhập giá trị ô thứ hai <br>`) ;
    }
    var radios = document.querySelectorAll('input[type="radio"][name="calc"]');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            // alert("Vị trí đã chọn: " + (i + 1)); // +1 để bắt đầu từ vị trí 1 thay vì 0
            if (i==0&&!isNaN(value1)&&!isNaN(value2)&&value1.trim()!==""&&value2.trim()!=="") {
                document.getElementById('result').value=parseFloat(value1)+parseFloat(value2);
            } else if (i==1&&!isNaN(value1)&&!isNaN(value2)&&value1.trim()!==""&&value2.trim()!=="") {
                document.getElementById('result').value=parseFloat(value1)-parseFloat(value2);
            } else if (i==2&&!isNaN(value1)&&!isNaN(value2)&&value1.trim()!==""&&value2.trim()!=="") {
                document.getElementById('result').value=parseFloat(value1)*parseFloat(value2);
            }
            else if (i==3&&!isNaN(value1)&&!isNaN(value2)&&value1.trim()!==""&&value2.trim()!=="") {
                document.getElementById('result').value=parseFloat(value1)/parseFloat(value2);
            }
            return; // Kết thúc hàm sau khi tìm thấy ô radio đã chọn
        }
        
    }
    document.getElementById('answer').innerHTML += (`Bạn chưa chọn phép tính <br>`);
}







