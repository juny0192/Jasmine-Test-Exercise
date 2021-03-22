
describe("server helper test", function () {

    it("should create new td from its value and append to tr with append(tr, value)", function(){
        let newTr = document.createElement("tr");
        
        appendTd(newTr, "test");
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual("test")
        
    });
    
    it("should create new delete button and append to tr with append(tr)", function(){
        let newTr = document.createElement("tr");
    
        appendDeleteBtn(newTr)
        
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual("X");

    });

})
