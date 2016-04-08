function getSelectedFilesFromFile(file) {
    if (file.folder) {
        var selectedFiles = [];
        for (var i = 0; i < file.children.length; i++) {
            var selectedFilesFromFile = getSelectedFilesFromFile(file.children[i]);
            if (selectedFilesFromFile) {
                selectedFiles = selectedFiles.concat(selectedFilesFromFile);
            }
        }
        return selectedFiles;
    } else {
        if (file.isSelected) {
            return file;
        }
    }
}

export default class {
    constructor($scope) {

    }

    getSelectedFiles() {
        var selectedFiles = [];
        for (var i = 0; i < this.files.length; i++) {

            var selectedFilesFromFile = getSelectedFilesFromFile(this.files[i]);
            if (selectedFilesFromFile) {
                selectedFiles = selectedFiles.concat(selectedFilesFromFile);
            }

            // selectedFiles = selectedFiles.concat(getSelectedFilesFromFile(this.files[i]));
        }
        console.log(selectedFiles);
        return selectedFiles;
    }
}
