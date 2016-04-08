export default class {
    constructor() {}

    startEdit() {
    	this.file.editedName = this.file.name;
        this.file.editing = true;
    }

    finishEdit(){
    	this.file.editing = false;
    	this.file.editedName = this.file.name;
    }
}
