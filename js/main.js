//  4.cho hiển thị thông tin
function showThongTin() {
  var sv = layThongTinNhapVao();
  document.getElementById("spanTenSV").innerText = sv.ten;
  document.getElementById("spanMaSV").innerText = sv.ma;
  document.getElementById("spanLoaiSV").innerText = sv.loai;
  document.getElementById("spanDTB").innerText = sv.tinhDTB();
  document.getElementById("spanXepLoai").innerText = sv.xepLoai();
  console.log("🚀 - showThongTin - sv:", sv);
}
