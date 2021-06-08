function factory_movie(title){
    return {
        get_title : function() {
            return title;
        },
        set_title : function(_title) {
            
            if (typeof _title === 'String')
                alert("���ڿ��� �Է��ϼ���.")
            
            title = _title;
        }
    }
}

ghost = factory_movie('Ghost');
matrix = factory_movie('Matrix');

alert(ghost.get_title());
alert(matrix.get_title());

ghost.set_title(123);

alert(ghost.get_title());
