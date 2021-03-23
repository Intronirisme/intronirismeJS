let path3D = function(id) {
    id -= 1;
    let originalChild = $('.path3D').eq(id).children();
    let slidesTransform = [];
    originalChild.forEach(function(item) {
        //get all transform data
        slidesTransform.push({
            translation: item.data('translation'),
            rotation: item.data('rotation'),
            scale: item.data('scale')
        })
    });
    let attr {
        targetElem: $('.path3D').eq(id)
    };
};