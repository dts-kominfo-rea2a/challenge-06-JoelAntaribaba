// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// let newArr = [];
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

const bacaData = (fnCallback) => {
  fs.readFile(file1, "utf8", (err, data1) => {
    if (err) {
      console.log(err);
    }

    fs.readFile(file2, "utf8", (err, data2) => {
      if (err) {
        console.log(err);
      }

      fs.readFile(file3, "utf8", (err, data3) => {
        if (err) {
          console.log(err);
        }
        const getJson1 = JSON.parse(data1);
        const getJson2 = JSON.parse(data2);
        const getJson3 = JSON.parse(data3);

        const cvtData1 = getJson1.message;
        const cvtData2 = getJson2[0].message;
        const cvtData3 = getJson3[0].data.message;

        // console.log(getJson1, getJson2, getJson3);
        // console.log(cvtData1, cvtData2, cvtData3);

        let files = new Array(cvtData1, cvtData2, cvtData3);
        let val = files.map((element) => (element.length > 4 ? element.slice(4).trim() : element));

        fnCallback(val);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
