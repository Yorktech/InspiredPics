// Write your JavaScript code.


$(document).ready(function() {

    $('#lightbox').on('show.bs.modal',
        function(event) {
            var modal = $(this);
            var picClicked = $(event.relatedTarget);
            var dataURL = picClicked.data('uri');
            //$('.modal-body').load(dataURL);
            var modalImg = document.getElementById("img");
            modalImg.src = dataURL;
            //modal.find('.modal-title').text('New message to ' + recipient);
            //modal.find('.modal-body input').val(recipient);
        });



    //$('.openPopup').on('click',function(){
    //    var dataURL = $(this).attr('data-href');
    //    $('.modal-body').load(dataURL,function(){
    //        $('#myModal').modal({show:true});
    //    });
    //}); 
});

