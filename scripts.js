$('#exampleFormControlInput1').on('click', function (e) {  
    e.preventDefault;

    html2canvas(document.querySelector("#imageCap")).then(canvas => {

        
        $.ajax({
            type: "post",
            url: "https://localhost:7040/api/Images",
            data: {
                strImageBase64: canvas.toDataURL()
            },
            success: function (response) {
                console.log("doneeee");
            },
            error: function () {  
                console.log("error");
            }
        });
    });
});