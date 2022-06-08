// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
let newArr = [];
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
  fs.readFile(file1, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const cvtData = JSON.parse(data);
      cvtData.message.slice(5, 10);
    }
  });

  fs.readFile(file2, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const cvtData = JSON.parse(data);
      cvtData[0].message.slice(5, 10);
    }
  });

  fs.readFile(file3, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const cvtData = JSON.parse(data);
      cvtData[0].data.message.slice(5, 10);
    }
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
