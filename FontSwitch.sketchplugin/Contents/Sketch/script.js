@import 'fonts.js';

var font1 = function(c) {
    changeFont(c, fontList.f1);
};

var font2 = function(c) {
    changeFont(c, fontList.f2);
};

var font3 = function(c) {
    changeFont(c, fontList.f3);
};

var font4 = function(c) {
    changeFont(c, fontList.f4);
};

var font5 = function(c) {
    changeFont(c, fontList.f5);
};

var font6 = function(c) {
    changeFont(c, fontList.f6);
};

var font7 = function(c) {
    changeFont(c, fontList.f7);
};

var font8 = function(c) {
    changeFont(c, fontList.f8);
};

var font9 = function(c) {
    changeFont(c, fontList.f9);
};

var font10 = function(c) {
    changeFont(c, fontList.f10);
};

var font11 = function(c) {
    changeFont(c, fontList.f11);
};

var font12 = function(c) {
    changeFont(c, fontList.f12);
};

var font13 = function(c) {
    changeFont(c, fontList.f13);
};

var font14 = function(c) {
    changeFont(c, fontList.f14);
};

var font15 = function(c) {
    changeFont(c, fontList.f15);
};

var font16 = function(c) {
    changeFont(c, fontList.f16);
};

var font17 = function(c) {
    changeFont(c, fontList.f17);
};

var font18 = function(c) {
    changeFont(c, fontList.f18);
};

var legend = function(c) {
    fontLegend();
};

function fontLegend(){
    var app = NSApplication.sharedApplication();
    var i=0;
    var msg = '';
    for(var prop in fontList){
        i++;
        if (i < 10) {
            msg += "shift + ctrl + "+i+" = "+fontList[prop]+"\n";
        }
        if (i > 9) {
            msg += "shift + fn + "+i%10+" = "+fontList[prop]+"\n";
        }
    }
    [app displayDialog:msg withTitle:'Font Switch Shortcuts'];
}

function changeFont(cont,fontChoice){
    var selection = cont.selection;
    
    //iterate layers
    for(var i=0; i<selection.count(); i++){
        var layer = selection[i];

        if (layer.class() === MSTextLayer) {
            var font = NSFont.fontWithName_size(fontChoice, layer.fontSize());
            layer.setFont(font);
            layer.syncTextStyleAttributes();
            layer.adjustFrameToFit();
        }
        
    }
}
