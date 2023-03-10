export const copyText = (text) => {
  const archive = navigator.cliparchive;
  archive
    .writeText(text)
    .then(() => {
      window.toast("클립보드에 복사되었습니다");
    })
    .catch((error) => {
      window.toast(error);
    });
};

export const resize = {
  init: function (outputQuality) {
    this.outputQuality = outputQuality === "undefined" ? 1 : outputQuality;
  },

  photo: function (standard, file, maxSize, outputType, callback) {
    var _this = this;
    const reader = new FileReader();
    reader.onload = function (readerEvent) {
      if (standard === "h") {
        _this.resizeWidth(
          readerEvent.target.result,
          maxSize,
          outputType,
          callback
        );
      } else if (standard === "w") {
        _this.resizeHeight(
          readerEvent.target.result,
          maxSize,
          outputType,
          callback
        );
      }
    };
    reader.readAsDataURL(file);
  },
  // 가로 폭을 resize함
  resizeWidth: function (dataURL, maxSize, outputType, callback) {
    const _this = this;
    const image = new Image();
    image.onload = function (imageEvent) {
      // 이미지를 onload할 때 resize 함
      const canvas = document.createElement("canvas"); //const가 안되길래 let으로 바꿨음
      let width = image.width;
      let height = image.height;

      if (height > maxSize) {
        width *= maxSize / height;
        height = maxSize;
      }
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(image, 0, 0, width, height);
      _this.output(canvas, outputType, callback);
    };
    image.src = dataURL;
  },
  // 세로 높이를 resize함
  resizeHeight: function (dataURL, maxSize, outputType, callback) {
    const _this = this;
    const image = new Image();
    image.onload = function (imageEvent) {
      const canvas = document.createElement("canvas");
      let width = image.width;
      let height = image.height;

      if (width > maxSize) {
        height *= maxSize / width;
        width = maxSize;
      }
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(image, 0, 0, width, height);
      _this.output(canvas, outputType, callback);
    };
    image.src = dataURL;
  },
  output: function (canvas, outputType, callback) {
    switch (outputType) {
      case "object":
        canvas.toBlob(
          function (blob) {
            const obj = {
              blob: blob,
              url: canvas.toDataURL("image/png", 1),
            };
            callback(obj);
          },
          "image/png",
          1
        );
        break;

      case "file":
        canvas.toBlob(
          function () {
            callback(blob);
          },
          "image/png",
          1
        );
        break;

      case "dataURL":
        callback(canvas.toDataURL("image/png", 1));
        break;
    }
  },
};
// // Image Reszie
// export const onResize = () => {
//   const init = (outputQuality) => {
//     this.outputQuality = outputQuality === 'undefined' ? 1 : outputQuality
//   }
//   const photo = (standard, file, maxSize, outputType, callback) => {
//     var _this = this
//     const reader = new FileReader()
//     reader.onload = function (readerEvent) {
//       if (standard === 'h') {
//         _this.resizeWidth(
//           readerEvent.target.result,
//           maxSize,
//           outputType,
//           callback
//         )
//       } else if (standard === 'w') {
//         _this.resizeHeight(
//           readerEvent.target.result,
//           maxSize,
//           outputType,
//           callback
//         )
//       }
//     }
//     reader.readAsDataURL(file)
//   }
//   // 가로 폭을 resize함
//   const resizeWidth = (dataURL, maxSize, outputType, callback) => {
//     const _this = this
//     const image = new Image()
//     image.onload = function (imageEvent) {
//       // 이미지를 onload할 때 resize 함
//       const canvas = document.createElement('canvas') //const가 안되길래 let으로 바꿨음
//       let width = image.width
//       let height = image.height

//       if (height > maxSize) {
//         width *= maxSize / height
//         height = maxSize
//       }
//       canvas.width = width
//       canvas.height = height
//       canvas.getContext('2d').drawImage(image, 0, 0, width, height)
//       _this.output(canvas, outputType, callback)
//     }
//     image.src = dataURL
//   }
//   // 세로 높이를 resize함
//   const resizeHeight = (dataURL, maxSize, outputType, callback) => {
//     const _this = this
//     const image = new Image()
//     image.onload = function (imageEvent) {
//       const canvas = document.createElement('canvas')
//       let width = image.width
//       let height = image.height

//       if (width > maxSize) {
//         height *= maxSize / width
//         width = maxSize
//       }
//       canvas.width = width
//       canvas.height = height
//       canvas.getContext('2d').drawImage(image, 0, 0, width, height)
//       _this.output(canvas, outputType, callback)
//     }
//     image.src = dataURL
//   }
//   const output = (canvas, outputType, callback) => {
//     switch (outputType) {
//       case 'object':
//         canvas.toBlob(
//           function (blob) {
//             const obj = {
//               blob: blob,
//               url: canvas.toDataURL('image/png', 1),
//             }
//             callback(obj)
//           },
//           'image/png',
//           1
//         )
//         break

//       case 'file':
//         canvas.toBlob(
//           function () {
//             callback(blob)
//           },
//           'image/png',
//           1
//         )
//         break

//       case 'dataURL':
//         callback(canvas.toDataURL('image/png', 1))
//         break
//     }
//   }
//   return {
//     // init,
//     photo,
//     resizeWidth,
//     resizeHeight,
//     output,
//   }
// }
