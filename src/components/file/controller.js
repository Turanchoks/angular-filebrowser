export default class {
    constructor() {}

    startEdit() {
        this.file.editedName = this.file.name;
        this.file.editing = true;
    }

    nameIsChanged(){
        return this.file.editedName !== this.file.name;
    }

    finishEdit(save) {
        if (this.nameIsChanged() && save) {
            this.updateFileName(this.file, this.file.editedName);
        }
        this.file.editing = false;
    }

    updateFileName(file, newName) {
        file.name = newName;
    }

    keyPress(event){
    	if (event.which === 13 || event.which === 27){
    		this.finishEdit(event.which === 13);
    	}
    }
}
