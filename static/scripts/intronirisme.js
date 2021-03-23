let Path3D = function(id) {
    id -= 1;
    //DOM Element reference
    targetElem = $('.path3D').eq(id);
    //get all children
    let slides = $(targetElem).children('.screen');
    let slidesTransform = [];
    for(let i=0; i < slides.length; i++) {
        //get all children transform data
        slidesTransform.push({
            translation: slides.eq(i).data('translation'),
            rotation: slides.eq(i).data('rotation'),
            scale: slides.eq(i).data('scale')
        });
    };

    //class constructor
    this.construct = function() {
        //place all Screen Elem
        
    };

    this.construct();
};

$(function() {
    $('.path3D').each(function(i) {
        let p3D = new Path3D(i);
    });
});