function getResponse() {
  var input = document.getElementById("input").value;
  var output = document.getElementById("output");
  // Aturan-aturan sederhana berdasarkan input pengguna
  if (input.toLowerCase().indexOf("depok - banjar") !== -1) {
    output.innerHTML = "06:15 - 18:00";
  } else if (input.toLowerCase().indexOf("bogor - ciamis") !== -1) {
    output.innerHTML = "06:00 - 17:50";
  } else if (input.toLowerCase().indexOf("bogor - tasikmalaya") !== -1) {
    output.innerHTML =
      "07:30 - 19:00";
  } else if ( input.toLowerCase().indexOf("tanggerang - ciamis") !== -1) {
    output.innerHTML = "05:45 - 17:30";
  } else if (input.toLowerCase().indexOf("jakarta - palembang") !== -1) {
    output.innerHTML = "03:40 - 20:50";
  } else if (input.toLowerCase().indexOf("depok - tasikmalaya") !== -1) {
    output.innerHTML = "06:40 - 17:50";
  } else if (input.toLowerCase().indexOf("jakarta - bandung") !== -1) {
    output.innerHTML = "07:10 - 14:30";
  } else {
    output.innerHTML = "Maaf, tidak ada rute perjalanan ini, mungkin bisa yang lain";
  }
}
