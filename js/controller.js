function layThongTinNhapVao() {
  // 1.lấy thông tin => gán vào biến
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var loai = document.getElementById("loaiSV").value;
  var toan = document.getElementById("txtDiemToan").value * 1;
  var van = document.getElementById("txtDiemVan").value * 1;

  //    2.tạo object + tính 
  var sv = {
    ma: ma,
    ten: ten,
    loai: loai,
    toan: toan,
    van: van,
    tinhDTB: function () {
      var dtb = (this.toan + this.van) / 2;
      return dtb;
    },
    xepLoai: function () {
      var dtb = this.tinhDTB();
      if (dtb > 5) {
        return "Đạt";
      } else {
        return "Không Đạt";
      }
    },
  };
//   3. nhớ trả giá trị ra
  return sv;
}
