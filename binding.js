$(document).ready(function () {
    $('#form-validation').submit(function (e) {
        e.preventDefault();
        var number = $('#number').val();
        var date = $('#date').val();
        var email = $('#email').val();
        var option = $('#selectOption').val();
        if (number.length < 1) {
            $('#error_number').html('Enter number');
        }
        if (date.length < 1) {
            $('#error_date').html('Enter date');
        }
        if (email.length < 1) {
            $('#error_email').html('Enter email');
        }
        if (option.length < 1) {
            $('#error_option').html('Choose option');
        }
        var checkBoxs = $('form [name ="checkbox"]'), check_checkbox = 0, check = 1;
        checkBoxs.each(function () {
            if (this.checked) {
                check_checkbox = 1;
            }
        });

        var radios = $('form [name="radio"]'), checkradio = 0;
        radios.each(function () {
            if (this.checked) {
                checkradio = 1;
            }
        });

        if (!check_checkbox) {
            $('#error_check').html('Choose checkbox');
            check = 0;
        }
        if (!checkradio) {
            $('#error_radio').html('Choose radio');
            check = 0;
        } else {
            $('#error_radio').html('');
        }
        // check number
        $("#number").keyup(function () {
            var number = $('#number').val();
            var numberReg = /^[0-9]+$/;
            var OK = numberReg.exec(number);
            if (!OK)
                alert('Error');
            else {
                if (OK && number != "") {
                    $('#error_number').html('');
                }
            }
        });
        // check date
        $("#date").keyup(function(){
            var span2 = document.getElementById("group-date");
            var regex = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/g;
            var txt = document.getElementById("date").value;
            var p = document.getElementById("error_date");
            p.innerHTML = (regex.test(txt)) ?
                span2.removeChild(span2.childNodes[3]) : document.getElementById("error_date").innerHTML = "Format: 2019-06-20";
        })
        // check email
        $("#email").keyup(function () {
            var email = $('#email').val();
            if ((email.charAt(email.length - 3) != '.')) {
                $('#error_email').html('Enter Email (Example: ngabtt@fabbi.io)');
                document.getElementById("email").focus();
            }
            else {
                if ((email.charAt(email.length - 3) === '.') && email != "") {
                    var span3 = document.getElementById("group-email");
                    span3.removeChild(span3.childNodes[3]);
                }
            }
        })
        // check file
        $("#file").on('change', function(){
            var fileInput = document.getElementById("file");
            // lấy giá trị input theo id
            var filePath = fileInput.value;
            var allowedExtensions = /(\.csv|\.xlsx)$/i;
            // kiểm tra định dạng
            if (!allowedExtensions.exec(filePath)) {
                document.getElementById("error_file").innerHTML = "up load file .csv, .xlxs and size < 5MB";
                fileInput.value = "";
                return false;
            }
            else {
                if (fileInput.files && fileInput.files[0]) {
                    var reader = new FileReader();
                    reader.readAsDataURL(fileInput.files[0]);
                    var span = document.getElementById("group-file");
                    span.removeChild(span.childNodes[3]);
                }
            }
        });
        // check checkbox
        $('form [name *="checkbox"]').change(function () {
            var checkBoxs = $('form [name *="checkbox"]'), check_checkbox = 0, check = 1;
            var count = $('form :input[type="checkbox"]:checked').length;
            checkBoxs.each(function () {
                if (this.checked) {
                    check_checkbox = 1;
                }
            });
            if (!check_checkbox || count < 2) {
                $('#error_check').html('Choose checkbox');
                check = 0;
            } else {
                $('#error_check').html('');
            }
        });
        // check radio
        $('form [name ="radio"]').change(function () {
            var checkBoxs = $('form [name *="radio"]'), check_checkbox = 0, check = 1;
            checkBoxs.each(function () {
                if (this.checked) {
                    check_checkbox = 1;
                }
            });
            if (!check_checkbox) {
                $('#error_radio').html('Choose radio');
                check = 0;
            } else {
                $('#error_radio').html('');
            }
        });
        // check select option
        $('select').on('change', function () {
            var option = this.value;
            if (option != "") {
                $('#error_option').html('');
            }
            else {
                $('#error_option').html('Choose option');
            }
        });
    });
});
