eventDownloadDocument() {
      // let filename = attach.filename;
      // let extension = filename.substring(filename.length - 4);

      var fileLink = document.createElement("a"); //Create <a>
      fileLink.href = "data:image/png;base64," + data; //Base64 Goes here
      fileLink.download = fileName; //File name Here
      fileLink.click();
    }