$(document).ready(function(){
    $("#buton").click(function(){
        $("#myModal").modal();
    })
})


$(document).ready(function(){
    $("#closeButtonModal").click(function(){
        $("#myModal").modal('toggle');
    })
})

$(document).ready(function(){
    $(".btn-close").click(function(){
        $("#myModal").modal('toggle');
    })
})
