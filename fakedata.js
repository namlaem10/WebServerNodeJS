const data = [
  {
    place_visit_name: "Chợ đêm Đà Lạt",
    place_visit_address: "Nguyễn Thị Minh Khai, P.1, TP. Đà Lạt",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTAvMzAvNXQzaGdrYm92aF9jaG9fZGVtX2RhX2xhdF8zX3RyaXBodW50ZXIuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Copy%20of%20cho-dem-da-lat-3.jpeg?sha=a449f05fd88c37d5",
  },
  {
    place_visit_name: "Đường hầm đất sét",
    place_visit_address: "Phường 4, Tp. Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTAvMzAvN3lmaDAzd2ltM19kdW9uZ19oYW1fZGF0X3NldF8yX3RyaXBodW50ZXIuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/duong-ham-dat-set-triphunter-3?sha=ff6f6919cccd6dc5",
  },
  {
    place_visit_name: "Hồ Xuân Hương",
    place_visit_address: "Phường 10, TP Đà Lạt, Lâm Đồng, Việt Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTEvMDEvNGpkZTF2OGJ4a19ob194dWFuX2h1b25nXzVfdHJpcGh1bnRlci5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/ho-xuan-huong-5-triphunter.jpg?sha=ff503758f4dccf06",
  },
  {
    place_visit_name: "Dinh III Bảo Đại",
    place_visit_address: "1 Triệu Việt Vương, P. 4, TP Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTMvMWVya3BoanQyM19Db3B5X29mX2RpbmhfYmFvX2RhaV81LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Copy%20of%20dinh-bao-dai-5.jpg?sha=91d4e7849408a02a",
  },
  {
    place_visit_name: "Thác Datanla",
    place_visit_address: "Đèo Prenn, Tp. Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTEvMDEvMzJpZGl3ZmFuNF90aGFjX2RhdGFubGFfdHJpcGh1bnRlci5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/thac-datanla-triphunter.jpg?sha=70d6187289bf4b18",
  },
  {
    place_visit_name: "Thác Pongour",
    place_visit_address: "Xã Tân Hội, huyện Đức Trọng, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTUvM2lobnltaHd1MF9UaGFfY19Qb25nb3VyXzRfY29weS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Tha%CC%81c%20Pongour%204%20copy.jpg?sha=ec7c81691a8af514",
  },
  {
    place_visit_name: "Thác Voi – chùa Linh Ẩn",
    place_visit_address: "Thị trấn Nam Ban, huyện Lâm Hà, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTUvNWNwODB4eTR0dV9UaGFfY19Wb2lfQ2h1X2FfTGluaF9BX25fMy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Tha%CC%81c%20Voi%20-%20Chu%CC%80a%20Linh%20A%CC%82%CC%89n%203.jpg?sha=166d760c2f7f44d6",
  },
  {
    place_visit_name: "Thung lũng Tình Yêu",
    place_visit_address: "Phường 8, TP Đà Lạt, Lâm Đồng, Việt Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTEvMDEvN2hvMGxmbWFpeV90aHVuZ19sdW5nX3RpbmhfeWV1X3RyaXBodW50ZXIuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/thung-lung-tinh-yeu-triphunter.jpg?sha=aed6364f3c1117e2",
  },
  {
    place_visit_name: "Thung lũng Vàng",
    place_visit_address: "Ankroet, xã Lát, huyện Lạc Dương, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTEvMDEvMWlzeGptcWk4ZF90aHVuZ19sdW5nX3ZhbmdfdHJpcGh1bnRlci5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/thung-lung-vang-triphunter.jpg?sha=4a3c419f97b0491d",
  },
  {
    place_visit_name: "Thác Dambri",
    place_visit_address: "TP Bảo Lộc, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTUvOXNldTMwbGRidF9UaGFfY19EYW1icmlfM19jb3B5LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Tha%CC%81c%20Dambri%203%20copy.jpg?sha=4694468b6275bd01",
  },
  {
    place_visit_name: "Hồ Tuyền Lâm",
    place_visit_address: "Phường 4, TP Đà Lạt, Lâm Đồng, Việt Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTEvMDEvN3E3ZjI5MHdpMF9ob190dXllbl9sYW1fMl90cmlwaHVudGVyLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/ho-tuyen-lam-2-triphunter.jpg?sha=c677cb98bc803f93",
  },
  {
    place_visit_name: "Ga xe lửa Đà Lạt",
    place_visit_address: "Quang Trung, P. 10, TP Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTEvMDQvNjUyeHp6cmJqMF9nYV94ZV9sdWFfZGFfbGF0X3RyaXBodW50ZXIuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/ga-xe-lua-da-lat-triphunter.jpg?sha=304bbe3fe40bdff2",
  },
  {
    place_visit_name: "Vườn hoa thành phố Đà Lạt",
    place_visit_address: "Trần Quốc Toản, Phường 8, Tp. Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTEvMDQvM2s1NHBmN3doal92dW9uX2hvYV90aGFuaF9waG9fZGFfbGF0XzNfdHJpcGh1bnRlci5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/vuon-hoa-thanh-pho-da-lat-3-triphunter.jpg?sha=cd3be59a3b38438e",
  },
  {
    place_visit_name: "Nhà thờ Con Gà",
    place_visit_address: "Phường 4, Tp. Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTEvMDQvM3NyOXpnMDQ2el9uaGFfdGhvX2Nvbl9nYV9kYV9sYXRfdHJpcGh1bnRlci5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/nha-tho-con-ga-da-lat-triphunter.jpg?sha=136ad2c30c4ea8b9",
  },
  {
    place_visit_name: "Phân viện Sinh học Đà Lạt",
    place_visit_address: "116 Xô Viết Nghệ Tĩnh, P. 7, TP Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTEvMDQvN3A1aWZkeW50OF9waGFuX3ZpZW5fc2luaF9ob2NfZGFfbGF0XzNfdHJpcGh1bnRlci5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/phan-vien-sinh-hoc-da-lat-3-triphunter.jpg?sha=a5fbcccd59289249",
  },
  {
    place_visit_name: "Nhà thờ Domaine de Marie",
    place_visit_address: "1 Ngô Quyền, P. 6, TP Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTEvMDQvODI3Z2lkdm04Y19uaGFfdGhvX2RvbWFpbmVfZGVfbWFyaWVfdHJpcGh1bnRlci5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/nha-tho-domaine-de-marie-triphunter.jpg?sha=3b7129ba5ac073f0",
  },
  {
    place_visit_name: "Trường Cao Đẳng Sư Phạm Đà Lạt",
    place_visit_address: "29 Yersin, Phường 10, Tp. Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTQvM29sNHZ1eGYxaF9Db3B5X29mX2Nhb19kYW5nX3N1X3BoYW1fZGFsYXRfMS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Copy%20of%20cao-dang-su-pham-dalat-1.jpg?sha=0a16c1a3daec7be5",
  },
  {
    place_visit_name: "Thiền viện Trúc Lâm",
    place_visit_address: "Phường 10, Tp. Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTEvMDQvN3VpOTFmNjFqd190aGllbl92aWVuX3RydWNfbGFtX2RhX2xhdF90cmlwaHVudGVyLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/thien-vien-truc-lam-da-lat-triphunter.jpg?sha=7a57ac7bb56c2044",
  },
  {
    place_visit_name: "Thác Prenn",
    place_visit_address: "Đèo Prenn, Tp. Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTEvMDQvOGt5NTMwbGd6aF90aGFjX3ByZW5uXzNfdHJpcGh1bnRlci5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/thac-prenn-3-triphunter.jpg?sha=b5d326fa0041d218",
  },
  {
    place_visit_name: "Thác Cam Ly",
    place_visit_address: "Phường 5, Tp. Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTUvNHVrd25yNGEzbF9UaGFfY19DYW1fTHlfMS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Tha%CC%81c%20Cam%20Ly%201.jpg?sha=d22ad99ad756fcc1",
  },
  {
    place_visit_name: "Đồi chè Cầu Đất",
    place_visit_address: "Trường Thọ, Xuân Trường, tp. Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTEvMDQvMXE5OGI5eTJpMV9kb2lfY2hlX2NhdV9kYXRfdHJpcGh1bnRlci5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/doi-che-cau-dat-triphunter.jpg?sha=64db5fda7a7f12b4",
  },
  {
    place_visit_name: "Chùa Linh Phước (Chùa Ve Chai)",
    place_visit_address: "120 Tự Phước, tp. Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTEvMDQvNDB4dTI1Zmo2b19jaHVhX2xpbmhfcGh1b2NfY2h1YV92ZV9jaGFpXzNfdHJpcGh1bnRlci5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/chua-linh-phuoc-chua-ve-chai-3-triphunter.jpg?sha=eb93bd41692528f9",
  },
  {
    place_visit_name: "Làng hoa Vạn Thành",
    place_visit_address: "43 Vạn Hạnh, P. 5, TP Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMTEvMDQvNDFqOG5teDliOF9sYW5nX2hvYV92YW5fdGhhbmhfMV90cmlwaHVudGVyLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/lang-hoa-van-thanh-1-triphunter.jpg?sha=10bacb9ffb014781",
  },
  {
    place_visit_name: "Làng hoa Thái Phiên",
    place_visit_address: "Thái Phiên, Phường 12, TP. Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTUvM2tqZG9uNm5jMV9BQUVBQVFBQUFBQUFBQUpVQUFBQUpETmxNems1TWpSaUxUVXlPVGN0TkRaall5MDRaakV4TFdFME5EQTRZMkptTmpoak5BLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/AAEAAQAAAAAAAAJUAAAAJDNlMzk5MjRiLTUyOTctNDZjYy04ZjExLWE0NDA4Y2JmNjhjNA.jpg?sha=7ec3b30b859822ae",
  },
  {
    place_visit_name: "Làng hoa Hà Đông",
    place_visit_address: "Khu phố Hà Đông, Phường 8, TP. Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTUvOWM3N3Z1YnN0eV9MYV9uZ19ob2FfSGFfb19uZ18zLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/La%CC%80ng%20hoa%20Ha%CC%80%20%C4%90o%CC%82ng%203.jpg?sha=ed7692f27611f695",
  },
  {
    place_visit_name: "Ma Rừng Lữ Quán",
    place_visit_address: "Thôn Đạ Nghịt, xã Lát, huyện Lạc Dương, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTUvMjJhd3lheWV4dV9NYV9SdV9uZ19MdV9RdWFfbl8yLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Ma%20Ru%CC%9B%CC%80ng%20Lu%CC%9B%CC%83%20Qua%CC%81n%202.jpg?sha=7e96988990c88070",
  },
  {
    place_visit_name: "Rừng hoa khô Đà Lạt",
    place_visit_address: "7A/1 Mai Anh Đào, P. 8, TP Đà Lạt, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTUvNWg4YTg4YXQ4Y19ydW5nX2hvYV9kYV9sYXRfMi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/rung-hoa-da-lat-2.jpg?sha=23c58e6174fac0af",
  },
  {
    place_visit_name: "Đồi cỏ hồng",
    place_visit_address: "Đường DT725, Lạc Dương, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTUvNHNjZ2VmeXFlZ19fb19pX2NvX2hvX25nXzIuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/%C4%90o%CC%82%CC%80i%20co%CC%89%20ho%CC%82%CC%80ng%202.jpg?sha=23adf9322ae0fa79",
  },
  {
    place_visit_name: "Trang trại Dalat Milk",
    place_visit_address: "Xã Tu Tra, huyện Đơn Dương, Lâm Đồng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTUvOHRiejdndnFhYV9Ib2FfaHVfb19uZ19kdV9vX25nXzNfY29weS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Hoa%20hu%CC%9Bo%CC%9B%CC%81ng%20du%CC%9Bo%CC%9Bng%203%20copy.jpg?sha=a0b63995b0afff9f",
  },
  {
    place_visit_name: "Nhà thờ Đức Bà",
    place_visit_address: "P. Bến Nghé, Q. 1, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTgvMDcvMDMvejhncXRnZDRmXzlfaHp2cF9jb21wcmVzc29yLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/9_hzvp.jpg?sha=12a79ef40b888a3e",
  },
  {
    place_visit_name: "Chợ Bến Thành",
    place_visit_address: "Phan Bội Châu, P. Bến Thành, Q. 1, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTgvMDQvMTEvNXVzMDJ0eWlvcl9jaG9fYmVuX3RoYW5oX3RyaXBodW50ZXJfcmVzaXplZC5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/cho-ben-thanh-triphunter-resized.jpg?sha=8fea3815657ae673",
  },
  {
    place_visit_name: "Dinh Độc Lập",
    place_visit_address: "135 Nam Kỳ Khởi Nghĩa, P. Bến Thành, Q. 1, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvMWI2ZWU1cm5laF9iZ18xXy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/bg%281%29.jpg?sha=61bfc708045b01c8",
  },
  {
    place_visit_name: "Bảo tàng Lịch sử Việt Nam",
    place_visit_address: "2 Nguyễn Bỉnh Khiêm, P. Bến Nghé, Q. 1, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvNm9vd2xvZHlvcl9uYW1fa3lfbXVzZXVtX21hcmtfb2ZfaW5kb2NoaW5lX2FyY2hpdGVjdHVyZV9Ib19jaGlfbWluaF9jaXR5X3RyYXZlbF9ndWlkZS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/nam-ky-museum-mark-of-indochine-architecture-Ho-chi-minh-city-travel-guide.jpg?sha=2a9608df8bb32e8b",
  },
  {
    place_visit_name: "Bảo tàng Chứng tích Chiến tranh",
    place_visit_address: "28 Võ Văn Tần, Q. 3, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvMjQxNmw3aTA3Nl9pbWFnZV9nYWxsZXJ5LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/image_gallery.jpg?sha=61a90856b42584d3",
  },
  {
    place_visit_name: "Bưu điện trung tâm Sài Gòn",
    place_visit_address: "2 Công xã Paris, P. Bến Nghé, Q. 1, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvM2Z3M3hlbTZ4Yl9SZWRzdm5fQnV1X2RpZW5fU0dfMDMuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Redsvn-Buu-dien-SG-03.jpg?sha=4cdb49fb061be890",
  },
  {
    place_visit_name: "Nhà hát Thành Phố",
    place_visit_address: "7 Lam Sơn, P. Bến Nghé, Q. 1, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvMnJ6dTk1emVxbV9tYXhyZXNkZWZhdWx0LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/maxresdefault.jpg?sha=e158f0b0410541f0",
  },
  {
    place_visit_name: "Trụ sở Ủy ban Nhân dân TP HCM",
    place_visit_address: "86 Lê Thánh Tôn, P. Bến Nghé, Q. 1, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvNXZzeXRlbDd1cV9maWxlXzQ0MTY2NS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/file_441665.jpg?sha=63b4b07440b52eaf",
  },
  {
    place_visit_name: "Bến Bạch Đằng",
    place_visit_address: "Tôn Đức Thắng, P. Bến Nghé, Q. 1, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvOTcyYm9vN3hhMF8xX2Jlbl9iYWNoX2RhbmcuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/1-ben-bach-dang.jpg?sha=3661dae036052e9e",
  },
  {
    place_visit_name: "Phố đi bộ - đường hoa Nguyễn Huệ",
    place_visit_address: "Đường Nguyễn Huệ, P. Bến Nghé, Q. 1, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvNHM4cmR4NTBvYV8zMHBob2RpYm9OSDEuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/30phodiboNH1.jpg?sha=f6f26e6628f30e2b",
  },
  {
    place_visit_name: "Phố đi bộ Bùi Viện",
    place_visit_address: "P. Phạm Ngũ Lão, Q. 1, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvNXA3OW5mOTlxaF9iaWFiZXQuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/biabet.jpg?sha=12bd995331c71489",
  },
  {
    place_visit_name: "Hồ Bán Nguyệt - Cầu Ánh Sao",
    place_visit_address: "Tân Phú, Q. 7, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvMTBmMHN2NndvM19jYXVfYW5oX3Nhb183LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/cau-anh-sao-7.jpg?sha=0c76a1ccc2ef5df5",
  },
  {
    place_visit_name: "Hầm Thủ Thiêm",
    place_visit_address: "Q. 2, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvNWtueXQ4czJreV8yMi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/22.jpg?sha=d0f366d2fa224d63",
  },
  {
    place_visit_name: "Cầu Thủ Thiêm",
    place_visit_address: "Q. 2, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvM3A4bWI4OTY3aF9DYXVUaHVUaGllbUNTTVQ0LnBuZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/CauThuThiemCSMT4.png?sha=867810d66bef3c68",
  },
  {
    place_visit_name: "Chợ Lớn",
    place_visit_address: "Q. 5, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvMnFuNzF0Y2Npdl9kb2NjODJuZ2RvZGFpcGhvMi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/docc82ngdodaipho2.jpg?sha=0c624c8a11481c5b",
  },
  {
    place_visit_name: "Khu Du lịch Văn hóa Suối Tiên",
    place_visit_address: "120 AH1, Tân Phú, Q. 9, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvOWkzeDE0aGJtal9USElFTl9USUVOX01PTjQuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/THIEN-TIEN-MON4.jpg?sha=dbd428ff7cb6bfa4",
  },
  {
    place_visit_name: "Đầm Sen",
    place_visit_address: "3 Hòa Bình, P. 3, Q. 11, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvM2JjN2lmeXJsbF9fbS5TZW4uUGFyay5vcmlnaW5hbC40ODc5LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%C4%90%E1%BA%A7m.Sen.Park.original.4879.jpg?sha=a58a12b04645f690",
  },
  {
    place_visit_name: "Thảo Cầm Viên",
    place_visit_address: "5 Nguyễn Thị Minh Khai, P. Bến Nghé, Q. 1, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvOWp0ZmEyZDE4bl90aGFvX2NhbV92aWVuX3NhaV9nb24uanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/thao-cam-vien-sai-gon.jpg?sha=5c20ba41136eee57",
  },
  {
    place_visit_name: "Chùa Vĩnh Nghiêm",
    place_visit_address: "339 Nam Kỳ Khởi Nghĩa, P. 7, Q. 3, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvNTc0ZzRjYnNtbl9jaHVhX3ZpbmhfbmdoaWVtXzMuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/chua-vinh-nghiem-3.jpg?sha=c1bf8f4f3d86356c",
  },
  {
    place_visit_name: "Khu du lịch Bình Quới",
    place_visit_address: "P. 28, Q. Bình Thạnh, TP Hồ Chí Minh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvODBzaG56bmF2Z19jXzUwMF8zNzVfMTY3NzcyMTVfMDBfaW1hZ2VzX3N0b3JpZXNfMDIwOTEzX2JpbmhxdW9pX18xXy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/c_500_375_16777215_00_images_stories_020913-binhquoi_%281%29.jpg?sha=86a72e652c18c682",
  },
  {
    place_visit_name: "Khu du lịch Tân Cảng",
    place_visit_address: "100 Ung Văn Khiêm, Q. Bình Thạnh, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvMnBjdGJibzVycV92YmIxNDQ0MjA5MTE1X2todV9kdV9saWNoX3Rhbl9jYW5nLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/vbb1444209115_khu-du-lich-tan-cang.jpg?sha=158adab8e79e44d4",
  },
  {
    place_visit_name: "Khu du lịch Văn Thánh",
    place_visit_address: "P. 22, Q. Bình Thạnh, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvMWw0ZW5hcDVzal9LaHVfZHVfbGljaF9WYW5fVGhhbmhfVFBIQ01fMS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Khu%20du%20lich%20Van%20Thanh%20TPHCM_1.jpg?sha=c1f085c5502d55b6",
  },
  {
    place_visit_name: "Cần Giờ",
    place_visit_address: "Huyện Cần Giờ, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvMTdyYjN0dmhvMV9UT1VSX0NBTl9HSU9fREFPX0tISV8xX05HQVlfQ1RZX1pPT01UUkFWRUxfMjAxMjEwODEwNDM0MzQxLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/TOUR-CAN-GIO-DAO-KHI-1-NGAY-CTY-ZOOMTRAVEL_201210810434341.jpg?sha=d6b880b2de7697b0",
  },
  {
    place_visit_name: "Địa đạo Củ Chi",
    place_visit_address: "Ấp Phú Hiệp, xã Phú Mỹ Hưng, huyện Củ Chi, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMjQvMW1nMTJ3ZDBscV9EaWFfZGFvX0N1X0NoaV9sb3RfdG9wXzEwX2NvbmdfdHJpbmhfbmdhbV9uZ29hbl9tdWNfbmhhdF90aGVfZ2lvaS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Dia_dao_Cu_Chi_lot_top_10_cong_trinh_ngam_ngoan_muc_nhat_the_gioi.jpg?sha=eac4f3920834c9f9",
  },
  {
    place_visit_name: "Chợ đêm Bến Thành",
    place_visit_address: "Phan Chu Trinh, P. Bến Thành, Q. 1, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMjEvNDY0OGtmYTE3dl9raGFtX3BoYV9jaG9fZGVtX2Jlbl90aGFuaF82XzZfNjQ4NF8zODA3XzE0NTgyMDIwNjMuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/kham-pha-cho-dem-ben-thanh-6-6-6484-3807-1458202063.jpg?sha=e7ac2981adbe8592",
  },
  {
    place_visit_name: "Bảo tàng tranh 3D Artinus",
    place_visit_address:
      "2 - 4 đường số 9, khu đô thị mới Him Lam, P. Tân Hưng Thuận, Q. 7, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMTgvNXljaWM3N2RvOF8xYl8xNDQwOTYwMDM0LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/1b_1440960034.jpg?sha=3d35a590e33271d1",
  },
  {
    place_visit_name: "Chợ Bình Tây",
    place_visit_address: "P. 2, Q. 6, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMTgvODlwaWFkdGl2OV9jaG9fQmluaF9UYXkyLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/cho-Binh-Tay2.jpg?sha=fc73e4eeb7dc2101",
  },
  {
    place_visit_name: "Công viên Lê Thị Riêng",
    place_visit_address: "875 Cách Mạng Tháng 8, P. 15, Q. 10, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMTgvNnAyZDl5NXBtOF9JTUdfMTA5NjEuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/IMG_10961.jpg?sha=f8dca278f88c5875",
  },
  {
    place_visit_name: "Phố trang trí Hải Thượng Lãn Ông",
    place_visit_address: "Hải Thượng Lãn Ông, Q.5, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMTgvamVxNGJ1cm96X3RyYW5ndHJpdGV0X25kOV9qcGcuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/trangtritet-nd9_jpg.jpg?sha=4be38aa2ad6b3dc7",
  },
  {
    place_visit_name: "Công viên nước Đại Thế Giới",
    place_visit_address: "1106 Võ Văn Kiệt, P. 6, Q. 5, TP HCM",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMTgvMmdibnliOHU1aF9raHVfdnVpX2Nob2lfY29uZ192aWVuX251b2NfZGFpX3RoZV9naW9pXzE0Xy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/khu-vui-choi-cong-vien-nuoc-dai-the-gioi%20%2814%29.jpg?sha=1e48c58913ae0df7",
  },
  {
    place_visit_name: "Nhà cổ Quân Thắng",
    place_visit_address: "77 Trần Phú, P. Minh An, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjQvMWFodG00Y3Z4NV9uaGFfY29fUXVhbl9UaGFuZ18zLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/nha%20co%20Quan%20Thang%203.jpg?sha=4dfc78d2a099cc23",
  },
  {
    place_visit_name: "Nhà cổ Tấn Ký",
    place_visit_address:
      "101 Nguyễn Thái Học, P. Minh An, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjQvNnV5cHF5czd3b19uaGFfY29fdGFuX2t5XzMuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/nha%20co%20tan%20ky%203.jpg?sha=6f1ce15b34eb79f2",
  },
  {
    place_visit_name: "Nhà cổ Phùng Hưng",
    place_visit_address:
      "4 Nguyễn Thị Minh Khai, P. Cẩm Phô, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjQvMjQyYmxod3dicF9uaGFfY29fUGh1bmdfSHVuZ2RzZ3YuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/nha%20co%20Phung%20Hungdsgv.jpg?sha=e08bc84c33523e18",
  },
  {
    place_visit_name: "Nhà cổ Đức An",
    place_visit_address: "129 Trần Phú, P. Minh An, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjQvNWp3c3E4cngwc19DYXB0dXJlLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Capture.JPG?sha=66271c04409c0238",
  },
  {
    place_visit_name: "Nhà cổ Diệp Đồng Nguyên",
    place_visit_address: "80 Nguyễn Thái Học, P. Minh An, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjQva3Q3OThzajJ2X25oYV9jb19kaWVwX2Rvbmdfbmd1eWVuLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/nha%20co%20diep%20dong%20nguyen.jpg?sha=36837c734d877318",
  },
  {
    place_visit_name: "Nhà thờ cổ tộc Trần",
    place_visit_address: "21 Lê Lợi, P. Minh An, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjQvNmVsbHVhMG16cV9oYV9hdHRyX3RyYW5mYW1pbHljaGFwZWwuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/ha-attr-tranfamilychapel.jpg?sha=d299aba6e956b3a8",
  },
  {
    place_visit_name: "Hội quán Phúc Kiến",
    place_visit_address: "46 Trần Phú, P. Minh An, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjQvMTZ0aXk2eXZrcV9ob2lfcXVhbl9waHVjX2tpZW4uanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/hoi-quan-phuc-kien.jpg?sha=2102853238cbf189",
  },
  {
    place_visit_name: "Hội quán Quảng Đông",
    place_visit_address: "176 Trần Phú, P. Minh An, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDUvMjQvMWowc2kwcjJqNV9ob2lfcXVhbl9xdWFuZ19kb25nXzkyMy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/hoi-quan-quang-dong%20923.jpg?sha=25d5138d96a32b36",
  },
  {
    place_visit_name: "Hội quán Triều Châu (Chùa Ông Bổn)",
    place_visit_address:
      "157 Nguyễn Duy Hiệu, P. Sơn Phong, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjQvOGk1a25hYWJwbV9jaHVhX29uZ19raGFjaF9zYW5fZG9uZ19raGFuaF9ob3RlbF8zLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/chua-ong-khach-san-dong-khanh-hotel-3.jpg?sha=9ff6ba95d8040fdc",
  },
  {
    place_visit_name: "Bảo tàng lịch sử văn hóa Hội An",
    place_visit_address:
      "10B Trần Hưng Đạo, P. Sơn Phong, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjQvNHQ4ejhkY3plM19kc2NfMjAwOS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/dsc_2009.jpg?sha=38c0c3c1d1aa34da",
  },
  {
    place_visit_name: "Làng gốm Thanh Hà",
    place_visit_address: "P. Thanh Hà, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjkvN2J0MjcybnE4ZF9sYW5nX2dvbV90aGFuaF9oYV82LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/lang_gom_thanh_ha_6.jpg?sha=351699e3daf9f248",
  },
  {
    place_visit_name: "Làng rau Trà Quế",
    place_visit_address: "Xã Cẩm Hà, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjkveGdheHB0eWo1XzQ4UmF1VHJhUXVlMDQuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/48RauTraQue04.jpg?sha=b8c22459f3a2fa64",
  },
  {
    place_visit_name: "Làng mộc Kim Bồng",
    place_visit_address: "Xã Cẩm Kim, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjkvZDI3NnV0MHJhX2FuaF84Xzc4ODRfMTM5NDI0ODk2Mi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/anh-8-7884-1394248962.jpg?sha=f82153c63d9bae27",
  },
  {
    place_visit_name: "Chùa Cầu",
    place_visit_address:
      "Nguyễn Thị Minh Khai, P. Minh An, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjkvOWlydnQ5NTBuMF9Ib2lfYW5faG9uZXltb29uLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Hoi-an-honeymoon.jpg?sha=4a96a994df31b7f3",
  },
  {
    place_visit_name: "Chùa Ông",
    place_visit_address: "24 Trần Phú, P. Minh An, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjkvOG4yajI1NjlqZF9jaHVhX29uZ19ob2lfYW4uanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/chua-ong-hoi-an.jpg?sha=f83fac7be00d5b49",
  },
  {
    place_visit_name: "Giếng cổ Bá Lễ",
    place_visit_address: "Trần Hưng Đạo, P. Minh An, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjkvNW9wMjB4ZGlfR2llbmdfQmFfTGVfT0RQTy5qcGcuanBlZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Gieng_Ba_Le_ODPO.jpg.jpeg?sha=5f18658e78059fbf",
  },
  {
    place_visit_name: "Biển Cửa Đại",
    place_visit_address: "P. Cửa Đại, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjkvMmlsZXpkdXN6el9uaHVuZ19kaWVtX2R1X2xpY2hfbm9pX3RpZW5nX2NvX25ndXlfY29fYmllbl9tYXRfdmluaF92aWVuLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/nhung-diem-du-lich-noi-tieng-co-nguy-co-bien-mat-vinh-vien.jpg?sha=803f45aed159fad4",
  },
  {
    place_visit_name: "Biển An Bàng",
    place_visit_address: "P. Cẩm An, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjkvNW85aHNkaHEwN180LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/4.jpg?sha=e2d3b00e167f21b4",
  },
  {
    place_visit_name: "Chợ đêm Nguyễn Hoàng",
    place_visit_address: "Nguyễn Hoàng, P. Minh An, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjkvNnhxeTkxOXY5cl9jaG9kZW01LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/chodem5.jpg?sha=5c4e4e92f8f0e855",
  },
  {
    place_visit_name: "Cù lao Chàm",
    place_visit_address: "Xã Tân Hiệp, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjkvNGV2bmpnY2dhM19jdV9sYW9fY2hhX20uanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/cu%CC%80%20lao%20cha%CC%80m.jpg?sha=21346edb60accd29",
  },
  {
    place_visit_name: "Bảo tàng văn hóa dân gian Hội An",
    place_visit_address: "33 Nguyễn Thái Học, P. Minh An, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMjgvM3htdWg5MzR2dl9iYW9fdGFuX3Zhbl9ob2FfaG9pX2FuXzEuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/bao-tan-van-hoa-hoi-an_1.jpg?sha=05aee7234716b140",
  },
  {
    place_visit_name: "Bảo tàng văn hóa Sa Huỳnh",
    place_visit_address: "149 Trần Phú, P. Minh An, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMjgvNDVwZ3A2Y2NnbF9pbnNpZGVfbXVzZXVtb2Zfc2FfaHV5bmhfY3VsdHVyZV9ob2lfYW5fMzM1LmpwZWciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/inside-museumof-sa-huynh-culture-hoi-an-335.jpeg?sha=208a0b365f7baeb9",
  },
  {
    place_visit_name: "Bảo tàng gốm sứ mậu dịch Hội An",
    place_visit_address: "80 Trần Phú, P. Minh An, TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMjgvN2U5bXF3cDh2Y180MzUxMjUwMjQ0XzI1NWZkZWNjY2Vfei5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/4351250244_255fdeccce_z.jpg?sha=2dfa52dc9547edb0",
  },
  {
    place_visit_name: "Phố cổ Hội An",
    place_visit_address: "TP Hội An, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMzAvMTA5NGs2cmx4MF9UcmFpX25naGllbV9kdV9saWNoX2hvaV9hbl9teXRvdXJfMTkuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Trai-nghiem-du-lich-hoi-an-mytour-19.jpg?sha=6b0844623798233d",
  },
  {
    place_visit_name: "KDL sinh thái Nước Mát - Đèo Le",
    place_visit_address: "TL611, xã Quế Long, huyện Quế Sơn, Quảng Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMzAvNG82MXE3cnJsdV9HbmljUVZrcDZWVll1NDkxNkt3eHZNX3hMYXpYVjVpNy5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/GnicQVkp6VVYu4916KwxvM_xLazXV5i7.JPG?sha=97ec0d85657460a6",
  },
  {
    place_visit_name: "Bãi tắm Xuân Thiều",
    place_visit_address: "P. Hòa Hiệp Nam, Q. Liên Chiểu, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDIvOGZucDAwcmZyN19kdV9saWNoX2RhX25hbmdfYmFpX3RhbV94dWFuX3RoaWV1XzAyLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/du-lich-da-nang-bai-tam-xuan-thieu-02.jpg?sha=5dd0ee333d9f0f8b",
  },
  {
    place_visit_name: "Bãi biển Non Nước",
    place_visit_address: "P. Hòa Hải, Q. Ngũ Hành Sơn, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDIvNHp2MDduemg2Yl9pbWFnZXMuanBlZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/images.jpeg?sha=531e5d44d6846016",
  },
  {
    place_visit_name: "Bãi biển Mỹ Khê",
    place_visit_address: "P. Phước Mỹ, Q. Sơn Trà, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDIvMjNsZWNzdnkxeV9iYWlfYmllbl9teV9raGVfNTQyYmMzODViMDhhYi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/bai-bien-my-khe-542bc385b08ab.jpg?sha=82579966c688907d",
  },
  {
    place_visit_name: "Bãi biển Thanh Bình",
    place_visit_address:
      "Đường Nguyễn Tất Thành, P. Thanh Bình, Q. Hải Châu, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDIvN21kaTl2aWkxcl9pbWFnZXNfMV8uanBlZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/images%20%281%29.jpeg?sha=cfdedbb20f418701",
  },
  {
    place_visit_name: "Bãi biển Bắc Mỹ An",
    place_visit_address: "P. Bắc Mỹ An, Q. Ngũ Hành Sơn, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDIvN3BoOWpyNHRiX0JhaV9CaWVuX0JhY19NeV9Bbi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Bai-Bien-Bac-My-An.jpg?sha=1b5405db59cc3991",
  },
  {
    place_visit_name: "Làng đá mỹ nghệ Non Nước",
    place_visit_address:
      "207 Huyền Trân Công Chúa, Hoà Hải, Ngũ Hành Sơn, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDMvMWlqbW5kN29tbl9sYW5nX2RhX215X25naGVfbm9uX251b2NfZGFfbmFuZ18xLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/lang-da-my-nghe-non-nuoc-da-nang-1.jpg?sha=b532d816e2a83d8f",
  },
  {
    place_visit_name: "Bảo tàng Đà Nẵng",
    place_visit_address: "24 Trần Phú, Q. Hải Châu, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDMvM3d1aGE5NXVzMV8zMDY4MTk2LkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/3068196.JPG?sha=0cbd3485b9d876e7",
  },
  {
    place_visit_name: "Ngũ Hành Sơn - Chùa Non Nước",
    place_visit_address: "P. Hòa Hải, Q. Ngũ Hành Sơn, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDMvdGR1dWQxYmxhX25ndWhhbmhzb24uanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/nguhanhson.jpg?sha=fcca2b8a6053a36c",
  },
  {
    place_visit_name: "Bảo tàng nghệ thuật điêu khắc Chăm",
    place_visit_address: "2 Hai Tháng Chín, Q. Hải Châu, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDMvd2xwYWs3Mm1pX2Jhb190YW5nX2RpZXVfa2hhY19jaGFtX3BhLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/bao-tang-dieu-khac-cham-pa.jpg?sha=36e011be447e3bba",
  },
  {
    place_visit_name: "Bà Nà Hills",
    place_visit_address: "Thôn An Sơn, xã Hòa Ninh, huyện Hòa Vang, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTcvMTEvMDIvOG4ya2N4Ynczdl8yMDE0MDgxMTExMDYyNV8xMi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/20140811110625-12.jpg?sha=c14f714e1bc1e2be",
  },
  {
    place_visit_name: "Sân bay trực thăng cũ",
    place_visit_address: "P. Thọ Quang, Q. Sơn Trà, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDUvMTYvNXRtNDU5OHcwMF9zYW5fYmF5X3RydWNfdGhhbmdfY3VfMTk1MDNfMi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/san-bay-truc-thang-cu%2019503-2.jpg?sha=18b08c7dda743804",
  },
  {
    place_visit_name: "Bãi biển Bắc Mỹ An",
    place_visit_address: "P. Bắc Mỹ An, Q. Ngũ Hành Sơn, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDIvN3BoOWpyNHRiX0JhaV9CaWVuX0JhY19NeV9Bbi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Bai-Bien-Bac-My-An.jpg?sha=1b5405db59cc3991",
  },
  {
    place_visit_name: "Bãi biển Thanh Bình",
    place_visit_address:
      "Đường Nguyễn Tất Thành, P. Thanh Bình, Q. Hải Châu, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDIvN21kaTl2aWkxcl9pbWFnZXNfMV8uanBlZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/images%20%281%29.jpeg?sha=cfdedbb20f418701",
  },
  {
    place_visit_name: "Nhà Vọng cảnh",
    place_visit_address: "P. Thọ Quang, Q. Sơn Trà, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTgvMDYvMTIvOGI5NzZiemVneF9uaGFfdm9uZ19jYW5oX0RhX05hbmcuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/nha-vong-canh-Da-Nang.jpg?sha=6cfa90d041776bf4",
  },
  {
    place_visit_name: "Trung tâm hành chính Đà Nẵng",
    place_visit_address: "24 Trần Phú, Q. Hải Châu, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDIvMDEvNWEza2xqMWtpeF90cnVuZ190YW1faGFuaF9jaGluaF9kYV9uYW5nX1RyaXBIdW50ZXJfMS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/trung-tam-hanh-chinh-da-nang-TripHunter-1.jpg?sha=fc2136208380b20b",
  },
  {
    place_visit_name: "Sơn Trà Tịnh Viên",
    place_visit_address:
      "Đường Lê Văn Lương, P. Thọ Quang, Q. Sơn Trà, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDkvMDcvNjdmOWpjNTkwc19fdmlfdGFtX2t5Xy5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/%28vi%20tam%20ky%29.JPG?sha=085de6fd1ff491f4",
  },
  {
    place_visit_name: "Giếng Trời",
    place_visit_address: "Xã Hòa Ninh, huyện Hòa Vang, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDkvMDcvMWlveno2eDk1OV9fSF9OZ19jX1RoYW5oXzEuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/%28H%E1%BB%93%20Ng%E1%BB%8Dc%20Thanh%29%201.jpg?sha=14a060e116d575bd",
  },
  {
    place_visit_name: "Mũi Súng",
    place_visit_address: "P. Thọ Quang, Q. Sơn Trà, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDkvMTYvODR4czFjbXhzbF9tdWlfc3VuZ19zb25fdHJhLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/mui-sung-son-tra.jpg?sha=6e71097e60a3ea33",
  },
  {
    place_visit_name: "Cầu Trần Thị Lý",
    place_visit_address: "Q. Hải Châu, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjkvMmF3N2cxdnFvOV9kb3dubG9hZC5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/download.jpg?sha=207f1b2c59beba82",
  },
  {
    place_visit_name: "Bảo tàng Đà Nẵng",
    place_visit_address: "24 Trần Phú, Q. Hải Châu, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDMvM3d1aGE5NXVzMV8zMDY4MTk2LkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/3068196.JPG?sha=0cbd3485b9d876e7",
  },
  {
    place_visit_name: "Trạm rađa Sơn Trà",
    place_visit_address: "P. Thọ Quang, Q. Sơn Trà, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDkvMDcvNWdja240ZXR1Z19fTWluaF9OZ29fLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%28Minh%20Ngo%29.JPG?sha=47bba0395c20ae69",
  },
  {
    place_visit_name: "Cầu Tiên Sơn",
    place_visit_address: "Q. Hải Châu, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDIvMjFreml4ZHVjZV9DYXVfVHV5ZW5fU29uLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Cau%20Tuyen%20Son.jpg?sha=035e4500e2f02b0e",
  },
  {
    place_visit_name: "Tượng cá chép hóa rồng",
    place_visit_address:
      "Đường Trần Hưng Đạo, P. An Hải Tây, Q. Sơn Trà, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDUvYjh3NGp3emNwXzExMDQ4Nzc4XzYyMTIxNzU5MTM0Mjk2NV83MTExNjk5NTkxNTE3MDIzNzU4X25fMS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/11048778_621217591342965_7111699591517023758_n_1.jpg?sha=1fd5216afcc230b6",
  },
  {
    place_visit_name: "Cầu Thuận Phước",
    place_visit_address: "Q. Hải Châu, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDIvM3BkZGJvYmQwdl9kYV9uYW5nX25vaV9uaHVuZ19jYXlfY2F1X2xhbV9uZW5faHV5ZW5fdGhvYWlfY2F1X3RodWFuX3BodW9jX3R1b2lfdHJlX3ZpZXQuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/da-nang-noi-nhung-cay-cau-lam-nen-huyen-thoai-cau-thuan-phuoc-tuoi-tre-viet.jpg?sha=d0ff1a79c69ad8ca",
  },
  {
    place_visit_name: "Thác nước Hòa Phú Thành",
    place_visit_address: "Km20, QL14G, xã Hòa Phú, huyện Hòa Vang, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDUvM2U2aTF3NHZmOF9DYXB0dXJlLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Capture.JPG?sha=7fb7c6a294cf7b46",
  },
  {
    place_visit_name: "Đình Nại Nam",
    place_visit_address: "Phố Nam Sơn, P. Hòa Cường Bắc, Q. Hải Châu, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDkvMTYvNzFyZHFobTRtOV9fSGlfdV9TU18uSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/%28Hi%E1%BA%BFu%20SS%29.JPG?sha=6b17380eb7928a50",
  },
  {
    place_visit_name: "KDL sinh thái Ngầm Đôi",
    place_visit_address: "QL14G, xã Hòa Phú, huyện Hòa Vang, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDkvMDcvMTZmMzFsbDR3N19fVGhfbmhEdXlfUGhvdG9fLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%28Th%C3%A0nhDuy%20Photo%29.JPG?sha=fe626474b4c3eb5d",
  },
  {
    place_visit_name: "Hồ Hòa Trung",
    place_visit_address: "Xã Hòa Liên, huyện Hòa Vang, Đà Nẵng",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDkvMTYvNTN5N3hqZzBtZl9fUGhfbV9uZ19LaGlfbV8yLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%28Ph%E1%BA%A1m%20%C4%90%C4%83ng%20Khi%C3%AAm%29%202.JPG?sha=073823971518eda4",
  },
  {
    place_visit_name: "Nhà Thờ Chính Tòa Đà Nẵng (Nhà thờ Con Gà)",
    place_visit_address:
      "156 Trần Phú, Hải Châu 1, Q. Hải Châu, Đà Nẵng, Việt Nam",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDIvZG9oN2Y4NXA4X0NhcHR1cmUuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Capture.JPG?sha=a14a7aa3e2e09076",
  },
  {
    place_visit_name: "Bãi Đá Ông Địa",
    place_visit_address: "Phường Hàm Tiến, Tp. Phan Thiết, Tỉnh Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDEvMDMvOHprbmZsOHVrZF9TY3JlZW5fU2hvdF8yMDE2XzAxXzAzX2F0XzguMTguNTVfUE0ucG5nIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Screen%20Shot%202016-01-03%20at%208.18.55%20PM.png?sha=9d8ed4b3fd87e82b",
  },
  {
    place_visit_name: "Đồi Cát Bay",
    place_visit_address: "Khu phố 5, Mũi Né, TP Phan Thiết, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMTcvNnEzemZkMGd3M19waGFuX3RoaWV0X2FuX25nb25fYmllbl9kZXBfMl9pdml2dS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/phan-thiet-an-ngon-bien-dep-2-ivivu.jpg?sha=3b8c94c712c82617",
  },
  {
    place_visit_name: "Làng chài Mũi Né",
    place_visit_address: "Mũi Né, TP Phan Thiết, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMTQvM3p5bHM1M3d0M19JTUdfMjczNi5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/IMG_2736.JPG?sha=9ede5f8d9287083d",
  },
  {
    place_visit_name: "Suối Tiên",
    place_visit_address: "P. Hàm Tiến, TP Phan Thiết, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvMXEybTI5M3Z3cF9uaHVuZ19kaWVtX2R1X2xpY2hfb19tdWlfbmVfMDkuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/nhung-diem-du-lich-o-mui-ne-09.jpg?sha=9e63aa5be9fc17ee",
  },
  {
    place_visit_name: "Ghềnh đá Mũi Né",
    place_visit_address: "Mũi Né, TP Phan Thiết, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMTkvM2FpdHlhbG1zOF9naGVuaF9kYV9tdWlfbmUuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/ghenh-da-mui-ne.jpg?sha=e8c099be89eed7dd",
  },
  {
    place_visit_name: "Hòn Rơm",
    place_visit_address: "Mũi Né, TP Phan Thiết, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMTkvcDVxeWE0dTNzXzExXzdfQmFfaV9hX0hvX25fUm9fbS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/11-7-Ba%CC%83i%20%C4%91a%CC%81%20Ho%CC%80n%20Ro%CC%9Bm.jpg?sha=a10daf946e5a7f7f",
  },
  {
    place_visit_name: "Hòn Ghềnh (Hòn Lao)",
    place_visit_address: "Mũi Né, TP Phan Thiết, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvMTB2aHJnMmx1OV9jb25nX3R5X2R1X2xpY2hfaG9uX2doZW5oX3BoYW5fdGhpZXQuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/cong-ty-du-lich-hon-ghenh-phan-thiet.jpg?sha=6dece51128086049",
  },
  {
    place_visit_name: "Nhóm Đền Tháp Chăm Poshanu-Lầu Ông Hoàng",
    place_visit_address: "Bà Nài, xã Phú Hải",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDUvMjQvMnh4ZGdxbmhzaF9uaG9tX2Rlbl90aGFwX2NoYW1fcG9zaGFudV9sYXVfb25nX2hvYW5nXzE2OF8yLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/nhom-den-thap-cham-poshanu-lau-ong-hoang%20168-2.jpg?sha=392a95da6fca6e6e",
  },
  {
    place_visit_name: "Suối nước Mũi Né",
    place_visit_address: "Mũi Né, TP Phan Thiết, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvOGloNDB0cDgyYV81NTI3NWU1NmEyNjg3LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/55275e56a2687.jpg?sha=03316a103cefedb1",
  },
  {
    place_visit_name: "Bãi Dừa Hàm Tiến",
    place_visit_address: "Mũi Né, TP Phan Thiết, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvMWp5NGMwOGk5el9HYzU5RTNTSlZwNC5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Gc59E3SJVp4.jpg?sha=621649557ced4a54",
  },
  {
    place_visit_name: "Bàu Sen - Bàu Trắng",
    place_visit_address: "Xã Hòa Thắng, huyện Bắc Bình, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvM2ViaGxvY2VuZV9kc2NfNzUwNC5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/dsc_7504.JPG?sha=d80cd8c6f92cf0c2",
  },
  {
    place_visit_name: "Chợ Mũi Né",
    place_visit_address:
      "359 Huỳnh Thúc Kháng, Mũi Né, TP Phan Thiết, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDEvMzEvM3NtZ2d5aDBpMV94U0dnNm9URy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/xSGg6oTG.jpg?sha=b462a46f8dcb9240",
  },
  {
    place_visit_name: "Khu du lịch Tà Cú",
    place_visit_address: "Thị trấn Thuận Nam, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvN3ByZHRhM3RlbF9UaHVtYm5haWxJbWFnZS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/ThumbnailImage.jpg?sha=708cbb83e61b2ff5",
  },
  {
    place_visit_name: "Gành Son",
    place_visit_address: "Xã Chí Công, huyện Tuy Phong, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvem52a3VzYTRiX2JVdVVCQUxxckQzWFNsMk51VGY3bERTTmRjbmFTbWhfLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/bUuUBALqrD3XSl2NuTf7lDSNdcnaSmh_.jpg?sha=4dfdd82ba3d3a073",
  },
  {
    place_visit_name: "Chùa Cổ Thạch",
    place_visit_address: "Xã Chí Công, huyện Tuy Phong, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvbnllMXQzbjR1X2JhaV9kYV9iYXlfbWF1X2R1b2lfY2hhbl9jaHVhX2NvX3RoYWNoX2l2aXZ1XzcuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/bai-da-bay-mau-duoi-chan-chua-co-thach-ivivu-7.jpg?sha=1f9b45bc19d1887f",
  },
  {
    place_visit_name: "Bãi đá 7 màu Cổ Thạch",
    place_visit_address: "Xã Chí Công, huyện Tuy Phong, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvanBxczNybjNlX21lX21hbl9zYWNfZGFfN19tYXVfY29fdGhhY2hfNS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/me-man-sac-da-7-mau-co-thach-5.jpg?sha=daf04351e7b916de",
  },
  {
    place_visit_name: "Cổ Thạch",
    place_visit_address: "Xã Chí Công, huyện Tuy Phong, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvMjd3ajAxNDZpdF9iaWVuX2NvX3RoYWNoXzA1LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/bien-co-thach-05.jpg?sha=80759a229fa247db",
  },
  {
    place_visit_name: "Cù lao Câu",
    place_visit_address: "Xã Phước Thế, huyện Tuy Phong, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvN2kyZ3JoeXl1N19DdV9sYW9fY2F1LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Cu-lao-cau.jpg?sha=26cbda56e49155c1",
  },
  {
    place_visit_name: "Hồ Sông Lòng Sông",
    place_visit_address: "Huyện Tuy Phong, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvNXdjcWJtbXpoMl9DYXB0dXJlLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Capture.JPG?sha=4da16650d5a2b0d5",
  },
  {
    place_visit_name: "Thác Tân Cung",
    place_visit_address: "Huyện Tuy Phong, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvM2s2dHIwZndiaV9IaW5oX1Rhbl9jdW5nX1RhX0hvYW5nXzA0X0ZJTEVtaW5pbWl6ZXJfLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Hinh%20Tan%20cung%20Ta%20Hoang%2004%20%28FILEminimizer%29.jpg?sha=44c61b993bc356c1",
  },
  {
    place_visit_name: "Rừng Tà Hoàng - Thác Yavly",
    place_visit_address: "Xã Phan Dũng, huyện Tuy Phong, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvN3RuZzh1bGkzZF9raGFtX3BoYV9jdW5nX2R1b25nX3RhX25hbmdfcGhhbl9kdW5nX2RpX3F1YV8zX3RpbmhfbGFtX2RvbmdfbmluaF90aHVhbl9iaW5oX3RodWFuXzE0NTc1ODcxNjZfNTZlMTAzZGU3MDlmMC5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/kham-pha-cung-duong-ta-nang-phan-dung-di-qua-3-tinh-lam-dong-ninh-thuan-binh-thuan-1457587166-56e103de709f0.jpg?sha=dc96a9cf96a428c6",
  },
  {
    place_visit_name: "Phan Thiết",
    place_visit_address: "Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTgvMDkvMjcvOTJ0dmozamVhMF9iaWVuX3BoYW5fdGhpZXRfYmluaF90aHVhbl9UcmlwSHVudGVyXzEuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/bien-phan-thiet-binh-thuan-TripHunter-1.jpg?sha=e2c5b07fcc0f2155",
  },
  {
    place_visit_name: "Mũi Né",
    place_visit_address: "Mũi Né, TP Phan Thiết, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDIvMjYvOWhiZzY4dm02N19iaWVuX211aV9uZV9iaW5oX3RodWFuX1RyaXBIdW50ZXJfMS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/bien-mui-ne-binh-thuan-TripHunter-1.jpg?sha=7a429a6d946a4187",
  },
  {
    place_visit_name: "Đảo Phú Quý",
    place_visit_address: "Huyện đảo Phú Quý, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvMmtxNjgzYnowY18xNDUyOTIyMTYzXzNfaG9uX3RyYW5oX2Rhb19waHVfcXV5LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/1452922163-3-hon-tranh-dao-phu-quy.jpg?sha=f079b691ee61583b",
  },
  {
    place_visit_name: "Hồ Đa Mi",
    place_visit_address: "Huyện Hàm Thuận Bắc, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvNTY5cnBncnVucV9qRHdPUjRFTDJpMmo4bGxlUTZNbjRId2J0YW5DZDNWVS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/jDwOR4EL2i2j8lleQ6Mn4HwbtanCd3VU.jpg?sha=5ca1f9e7211d9569",
  },
  {
    place_visit_name: "Hồ Sông Quao",
    place_visit_address: "Huyện Hàm Thuận Bắc, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvMXBoYTg5cWhjOV9fbmhfQW5uaWVfTGVfOC5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/%E1%BA%A3nh%20Annie%20Le%208.JPG?sha=e5dbbebaa5cd0ce1",
  },
  {
    place_visit_name: "Ruộng muối Tuy Phong",
    place_visit_address: "Huyện Tuy Phong, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvMWg0ZzdzcmFnZV9fTkhfSFVVX1RST05HX05HVVlFTi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/%E1%BA%A2NH%20HUU%20TRONG%20NGUYEN.jpg?sha=52a9a12269b8b3d0",
  },
  {
    place_visit_name: "Thác Bà - Núi Ông",
    place_visit_address: "Thị trấn Lạc Tánh, huyện Tánh Linh, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvNXlmN2pjdXhzNl9fbmhfdGFtbmd1XzMuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/%E1%BA%A3nh%20tamngu%203.jpg?sha=a22f15e49b42b0cc",
  },
  {
    place_visit_name: "Đèo Tà Pứa",
    place_visit_address: "ĐT713, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvMmVzOTFkdXN0eV9SajN5RHR5ekhvWEhWVXM4ZnhpMVMwZGZHNExrQ3hDcy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Rj3yDtyzHoXHVUs8fxi1S0dfG4LkCxCs.jpg?sha=b86159a7013d4597",
  },
  {
    place_visit_name: "Thác trượt Tà Pứa",
    place_visit_address: "Huyện Tánh Linh, Bình Thuận",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjYvOGg5MDJ1dWJlMV9vMGJyNE5oMy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/o0br4Nh3.jpg?sha=ba4412f5c0e627fe",
  },
  {
    place_visit_name: "Bản Cát Cát",
    place_visit_address: "Thị trấn Sa Pa, huyện Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTcvNGhidmpjOTdnal9kdV9saWNoX3NhcGE1LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/du-lich-sapa5.jpg?sha=1118595de8c1d824",
  },
  {
    place_visit_name: "Núi Hàm Rồng",
    place_visit_address: "Thị trấn Sa Pa, huyện Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTcvcDlpNzVwYTJxX2ltYWdlMDAxXzRfLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/image001%284%29.jpg?sha=09c6a1f6177de506",
  },
  {
    place_visit_name: "Nhà thờ đá Sa Pa",
    place_visit_address: "Thị trấn Sa Pa, huyện Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTcvOHZ4OGd4OGRqNl9naWFuZ19zaW5oX3NhcGEuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/giang-sinh-sapa.jpg?sha=d83c85a49a2c88fb",
  },
  {
    place_visit_name: "Bãi đá cổ",
    place_visit_address: "Xã Hầu Thào, thị trấn Sa Pa, huyện Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTcvNHN0dXNha3Jzb19pbWdfNDc2My5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/img_4763.jpg?sha=efd616476f8e533b",
  },
  {
    place_visit_name: "Đỉnh Fansipan",
    place_visit_address: "Dãy Hoàng Liên Sơn, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTcvNmF4dDkyOHd3Zl9pbmRvY2hpbmFfdG91cnNfdG9fZmFuc2lwYW5fbW91bnRhaW5fMS5qcGVnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/indochina-tours-to-fansipan-mountain-1.jpeg?sha=4ecdcab1cc5fc0cd",
  },
  {
    place_visit_name: "Bản Tả Phìn",
    place_visit_address: "Thị trấn Sa Pa, huyện Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTcvOGJmaG1hMHU0aV8yMDEuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/201.jpg?sha=6868bfff3c3b6784",
  },
  {
    place_visit_name: "Bản Lao Chải – Tả Van",
    place_visit_address: "Thị trấn Sa Pa, huyện Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTcvbTdveTRtNGZ4X1NjcmVlbl9TaG90XzIwMTZfMDJfMThfYXRfMTEuMjQuMTFfQU1fY29weS5wbmciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Screen%20Shot%202016-02-18%20at%2011.24.11%20AM%20copy.png?sha=2afbd40e5124a121",
  },
  {
    place_visit_name: "Cổng Trời",
    place_visit_address: "Thị trấn Sa Pa, huyện Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDgvMDUvN3ZlaG90YmRmcV9jb25nX3Ryb2lfc2FwYV90cmlwaHVudGVyLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/cong-troi-sapa-triphunter.jpg?sha=2a6f4cd6c3beb107",
  },
  {
    place_visit_name: "Thác Bạc",
    place_visit_address: "QL4D, thị trấn Sa Pa, thị trấn Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTgvN3drMGU2eGIzbF9Db3B5X29mX1RoYV9jX0JhX2MuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Copy%20of%20Tha%CC%81c%20Ba%CC%A3c.jpg?sha=622fa4d83f6d7f7f",
  },
  {
    place_visit_name: "Chợ tình Sa Pa",
    place_visit_address: "Thị trấn Sa Pa, huyện Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTgvNWo3MDVhZGVzN19zYV8xXzEzNDkzNDE4NDhfNDgweDAuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/sa-1-1349341848_480x0.jpg?sha=6475285be1455656",
  },
  {
    place_visit_name: "Chợ phiên Sa Pa",
    place_visit_address: "Thị trấn Sa Pa, huyện Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTgvMWVkMzJnOHU5eV9Db3B5X29mX2Nob19waGllX25fc2FwYV8zLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Copy%20of%20cho%CC%9B%CC%A3%20phie%CC%82n%20sapa%203.jpg?sha=0adb5dd995878af1",
  },
  {
    place_visit_name: "Thung lũng hoa hồng",
    place_visit_address:
      "Xóm 1, Mường Hoa, thị trấn Sa Pa, huyện Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDgvNTFxbjk0ODU0YV9oLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/h.jpg?sha=663e188d910d662a",
  },
  {
    place_visit_name: "Suối nước khoáng Tắc Kô",
    place_visit_address: "Huyện Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDgvM2I3Z3VuOHFjdl9DYXB0dXJlLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Capture.JPG?sha=94b9d07f15c68c42",
  },
  {
    place_visit_name: "Hang Tả Phìn",
    place_visit_address: "Xã Tả Phìn, huyện Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDgvNjBxdDA0bXp3al9oYW5ndGFwaGluMS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/hangtaphin1.jpg?sha=84097e469810ba95",
  },
  {
    place_visit_name: "Lầu Vọng Cảnh",
    place_visit_address: "Huyện Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDgvN3g2bzJnZHNjNl9sYXVfdm9uZ19jYW5oX3NhcGEuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/lau-vong-canh-sapa.jpg?sha=282c004089e9fa89",
  },
  {
    place_visit_name: "Thung lũng Mường Hoa",
    place_visit_address:
      "QL4D, San Sả Hồ, thị trấn Sa Pa, huyện Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDgvc2FuN3k1cDR5XzMuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/3.jpg?sha=5f5b23d62e4847cf",
  },
  {
    place_visit_name: "Bạch Mộc Lương Tử",
    place_visit_address: "Bát Xát, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDkvOTJicHA2ZTZtdF93MmJ2Y1Jsbi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/w2bvcRln.jpg?sha=5a15477d63952bea",
  },
  {
    place_visit_name: "Ngũ Chỉ Sơn",
    place_visit_address: "Xã Tả Giàng Phình, huyện Bát Xát, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDkvNXhseW1jMmFoX1I4Rk5LcnRwalY5bXVjMkc5d29ZTWlyTDlSelN0YmVhX0NvcHkuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/R8FNKrtpjV9muc2G9woYMirL9RzStbea%20-%20Copy.jpg?sha=d443351463ff5465",
  },
  {
    place_visit_name: "Y Tý",
    place_visit_address: "Xã Y Tý, huyện Bát Xát, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDkvOGUxc3E2dDF1Nl9ZejBZZEZOMGxhX2ZfY0VsUVNyYXp3WTV0OGNhTzJmQS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Yz0YdFN0la-f-cElQSrazwY5t8caO2fA.jpg?sha=ad51e69176715ceb",
  },
  {
    place_visit_name: "Dinh Hoàng A Tưởng",
    place_visit_address: "ĐT153, thị trấn Bắc Hà, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDkvOGRheWw3djd2NF9iSEVtZHJVS2paZXo0b1haOWlvVVhzam1fRXhFX3ptWC5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/bHEmdrUKjZez4oXZ9ioUXsjm-ExE_zmX.jpg?sha=e7eb6837f1275222",
  },
  {
    place_visit_name: "Bản Phố",
    place_visit_address: "Bắc Hà, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDkvNmljbGZlZjdmcF9XaHhORUZHRHJsbGJPOGxwbUc2S2Y3ZGlaMGg1c0JUNS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/WhxNEFGDrllbO8lpmG6Kf7diZ0h5sBT5.jpg?sha=a49c050bfc62d7b5",
  },
  {
    place_visit_name: "Si Ma Cai",
    place_visit_address: "Xã Lử Thẩn, huyện Si Ma Cai, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDkvMWJ5b21rcTEyel91cW9xN18xZTNLTjFmTHdlZllfWWIyMEh2N1IzN3ZhXy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/uqoq7_1e3KN1fLwefY_Yb20Hv7R37va-.jpg?sha=0142896be3d7b900",
  },
  {
    place_visit_name: "Núi Cô Tiên",
    place_visit_address: "Thị trấn Mường Khương, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDUvMjIvM251MGtuemN4ZV9udWlfY29fdGllbl83NTg2XzEuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/nui-co-tien%207586-1.jpg?sha=a915c58f2f9d6c8c",
  },
  {
    place_visit_name: "Sa Pa",
    place_visit_address: "Thị trấn Sa Pa, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDkvN2xoeGkxYnQ4Z190NDA4OTgyLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/t408982.jpg?sha=7430743621bf8dc3",
  },
  {
    place_visit_name: "Hang Tiên",
    place_visit_address: "Xã Bảo Nhai, huyện Bắc Hà, Lào Cai",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDkvOGd2Nmw2ZDQyX2R1X2xpY2hfbGFvX2NhaV8xX21pbi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/du-lich-lao-cai-1-min.jpg?sha=0794e9860cdaefb5",
  },
  {
    place_visit_name: "Bạch Dinh",
    place_visit_address: "4 Trần Phú, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTEvMDcvM2JldTBybDZqaV9CYWNoX2RpbmguanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Bach%20dinh.jpg?sha=a8918efd3c9a4a60",
  },
  {
    place_visit_name: "Bãi Sau",
    place_visit_address: "P. Thắng Tam, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMDIvNWMzNjdqbjF1al9CYV9pX1NhdTIuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Ba%CC%83i%20Sau2.jpg?sha=2e8c12f85c60dd5a",
  },
  {
    place_visit_name: "Bãi Trước",
    place_visit_address: "P. 1, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMDIvM3BobjF2NXJ4cV9CYV9pX1RydV9vX2MuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Ba%CC%83i%20Tru%CC%9Bo%CC%9B%CC%81c.jpg?sha=061daebff85a6a99",
  },
  {
    place_visit_name: "Thích Ca Phật Đài",
    place_visit_address: "608 Trần Phú, P. 5, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMDMvOHg1cmYwYmU0aV9TY3JlZW5fU2hvdF8yMDE1XzEyXzAzX2F0XzMuNTQuMTBfUE0ucG5nIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Screen%20Shot%202015-12-03%20at%203.54.10%20PM.png?sha=ec38adff0012c39f",
  },
  {
    place_visit_name: "Tượng Đức Chúa dang tay",
    place_visit_address: "Thùy Vân, P. 2, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMDIvNmRkOHEzN2gyYl9UdV9vX25nX2NodV9hX0tpdG8yLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Tu%CC%9Bo%CC%9B%CC%A3ng%20chu%CC%81a%20Kito2.jpg?sha=f3c55d7b1ce1bfd7",
  },
  {
    place_visit_name: "Hòn Bà",
    place_visit_address: "TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMDIvNmQ1NW80OTMxd19Ib19uX0JhXy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Ho%CC%80n%20Ba%CC%80.jpg?sha=c87fad7d876095ac",
  },
  {
    place_visit_name: "Khu di tích Đình Thần Thắng Tam",
    place_visit_address:
      "79 Hoàng Hoa Thám, P. Thắng Tam, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMDIvNG8yOWRvbHVlc19faV9uaF90aGFfbl9UaGFfbmdfVGFtLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%C4%90i%CC%80nh%20tha%CC%82%CC%80n%20Tha%CC%86%CC%81ng%20Tam.jpg?sha=6419d4552a4d0acd",
  },
  {
    place_visit_name: "Niết Bàn Tịnh Xá",
    place_visit_address: "Hạ Long, P. 2, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMDIvOWQwYjZvN21tdF9OaWVfdF9iYV9uX3RpX25oX3hhXzIuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Nie%CC%82%CC%81t%20ba%CC%80n%20ti%CC%A3nh%20xa%CC%81%202.jpg?sha=4b2f868db5700250",
  },
  {
    place_visit_name: "Chùa Quan Âm Bồ Tát",
    place_visit_address: "10 Trần Phú, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMDIvNDN4aGJ1ZWZycF9DaHVfYV9RdWFuX1RoZV9BX21fQm9fVGFfdC5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Chu%CC%80a%20Quan%20The%CC%82%CC%81%20A%CC%82m%20Bo%CC%82%CC%80%20Ta%CC%81t.jpg?sha=465b8307af81a40d",
  },
  {
    place_visit_name: "Linh Sơn Cổ Tự",
    place_visit_address: "104 Hoàng Hoa Thám, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDEvMTgveHlseXBzZ3lzX1NjcmVlbl9TaG90XzIwMTZfMDFfMTlfYXRfMS4xOC4yOF9BTS5wbmciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Screen%20Shot%202016-01-19%20at%201.18.28%20AM.png?sha=adba1fdfe3ec4537",
  },
  {
    place_visit_name: "Hải đăng Vũng Tàu",
    place_visit_address: "Hải Đăng, phường 2, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMDMvMTc0anBqMHk1aV9oYWlfZGFuZy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/hai%20dang.jpg?sha=c500d94ae7e4a13d",
  },
  {
    place_visit_name: "Bảo tàng vũ khí cổ",
    place_visit_address: "14 Hải Đăng, P. 2, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDEvMTgvNzdncGJrc2Fwcl9TY3JlZW5fU2hvdF8yMDE2XzAxXzE5X2F0XzEuMDUuMTFfQU0ucG5nIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Screen%20Shot%202016-01-19%20at%201.05.11%20AM.png?sha=f77720dcbecaceff",
  },
  {
    place_visit_name: "Đền thờ Đức Thánh Trần Hưng Đạo",
    place_visit_address: "68 Hạ Long, P. 2, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDEvMTgvN21kMzE5endvdV8xMjA4ODI3Nl81MjQ5MzgzMDEwMDkxMzhfMjE5NDQ1ODg5MDc5NDgyNzk1Ml9uLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/12088276_524938301009138_2194458890794827952_n.jpg?sha=79fa9295f3eb1e2f",
  },
  {
    place_visit_name: "Lăng Cá Ông",
    place_visit_address:
      "Hoàng Hoa Thám, P. Thắng Tam, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDEvMTgvODU0ZnYwenUwel8yLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/2.jpg?sha=3d7f5cdbc23e93d1",
  },
  {
    place_visit_name: "Miếu Bà Ngũ Hành",
    place_visit_address:
      "Hoàng Hoa Thám, P. Thắng Tam, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDEvMTgvcmtkeHR2NmRiX1NjcmVlbl9TaG90XzIwMTZfMDFfMTlfYXRfMTIuMDMuMjVfQU0ucG5nIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Screen%20Shot%202016-01-19%20at%2012.03.25%20AM.png?sha=d0ed7c8ef04bdc72",
  },
  {
    place_visit_name: "Khu căn cứ Minh Đạm",
    place_visit_address: "Huyện Đất Đỏ, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvMW50N2ZyODdxb19NaW5oX2FfbV8xLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Minh%20%C4%90a%CC%A3m%201.jpg?sha=ea7211e99ee1f3cb",
  },
  {
    place_visit_name: "Nhà tưởng niệm Võ Thị Sáu",
    place_visit_address: "QL55, huyện Đất Đỏ, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvNWx2aDkwcnFzMV9OaGFfdHVfb19uZ19uaWVfbV9udV9saWVfdF9zaV9hbmhfaHVfbmdfVm9fVGhpX1NhX3VfMi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Nha%CC%80%20tu%CC%9Bo%CC%9B%CC%89ng%20nie%CC%A3%CC%82m%20nu%CC%9B%CC%83%20lie%CC%A3%CC%82t%20si%CC%83%20anh%20hu%CC%80ng%20Vo%CC%83%20Thi%CC%A3%20Sa%CC%81u%202.jpg?sha=e4b3a8de7bf7072b",
  },
  {
    place_visit_name: "Địa đạo Long Phước",
    place_visit_address: "ĐT52, xã Long Phước, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvODJvcmY1cmFoeV9faV9hX2Ffb19Mb25nX1BodV9vX2NfMi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/%C4%90i%CC%A3a%20%C4%91a%CC%A3o%20Long%20Phu%CC%9Bo%CC%9B%CC%81c%202.jpg?sha=47d6d4f13e22a4b2",
  },
  {
    place_visit_name: "Căn cứ núi Dinh",
    place_visit_address: "Xã Tân Hòa, huyện Tân Thành, Bà Rịa – Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvNTNubmVsZnZsX0NhX25fY3VfbnVfaV9EaW5oXzIuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Ca%CC%86n%20cu%CC%9B%CC%81%20nu%CC%81i%20Dinh%202.JPG?sha=49973b1a7d716224",
  },
  {
    place_visit_name: "Suối nước nóng Bình Châu",
    place_visit_address: "QL55, huyện Xuyên Mộc, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvNzc2MzZqNDk2OF9CaV9uaF9DaGFfdV8xLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Bi%CC%80nh%20Cha%CC%82u%201.jpg?sha=eea0309d75d4cae5",
  },
  {
    place_visit_name: "Biển Hồ Tràm",
    place_visit_address: "Huyện Xuyên Mộc, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvNnFyNW5uajRuZF9Ib19UcmFfbV8zLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Ho%CC%82%CC%80%20Tra%CC%80m%203.jpg?sha=3a90754c9a7419f3",
  },
  {
    place_visit_name: "Biển Hồ Cốc",
    place_visit_address: "Huyện Xuyên Mộc, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvMjg5N2QydGEwNV9Ib19Db19jXzEuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Ho%CC%82%CC%80%20Co%CC%82%CC%81c%201.jpg?sha=b632a7b1226d3c2c",
  },
  {
    place_visit_name: "Biển Lộc An",
    place_visit_address: "Xã Lộc An, huyện Đất Đỏ, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvOHUxcWk1N2o0Zl9Mb19jX0FuXzMuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Lo%CC%A3%CC%82c%20An%203.jpg?sha=e4c66302e409221a",
  },
  {
    place_visit_name: "Đình thần Phước Lễ",
    place_visit_address:
      "Bạch Đằng, P. Phước Trung, TP Bà Rịa, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvMTBoZW02OXU4Z19QaHVfb19jX0xlXzEuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Phu%CC%9Bo%CC%9B%CC%81c%20Le%CC%82%CC%83%201.JPG?sha=406d955484bb5634",
  },
  {
    place_visit_name: "Chợ Bà Rịa",
    place_visit_address:
      "Ngô Gia Tự, P. Phước Trung, TP Bà Rịa, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvNjIwMjFmbmdsc19DaG9fQmFfUmlfYV8xLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Cho%CC%9B%CC%A3%20Ba%CC%80%20Ri%CC%A3a%201.jpg?sha=f44ea3b589d8ba02",
  },
  {
    place_visit_name: "Thác Hòa Bình",
    place_visit_address:
      "Đường Thác Sông Ray, ấp 5, xã Hòa Bình, huyện Xuyên Mộc, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvMTF1ZzV1azQ3X1RoYV9jX0hvX2FfQmlfbmhfMS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Tha%CC%81c%20Ho%CC%80a%20Bi%CC%80nh%201.jpg?sha=8c758cd610039fa0",
  },
  {
    place_visit_name: "Gành đá Bình Châu",
    place_visit_address: "Xã Bình Châu, huyện Xuyên Mộc, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvMzFzZG5tY2ZkOF9HYV9uaF9hX0JpX25oX0NoYV91XzMuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Ga%CC%80nh%20%C4%91a%CC%81%20Bi%CC%80nh%20Cha%CC%82u%203.jpg?sha=c70a1a11cd194b8e",
  },
  {
    place_visit_name: "Mũi Nghinh Phong",
    place_visit_address: "2 Hạ Long, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDEvMTgvNGI4bmVqaDhqeV9TY3JlZW5fU2hvdF8yMDE2XzAxXzE5X2F0XzEyLjMxLjQ5X0FNLnBuZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Screen%20Shot%202016-01-19%20at%2012.31.49%20AM.png?sha=95be0a5eac035fc8",
  },
  {
    place_visit_name: "Khu du lịch Hồ Mây",
    place_visit_address: "1A Trần Phú, P. 1, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDcvMDMvNnd0Y2s1cmdsMl9raHVfZHVfbGljaF9ob19tYXlfcGFya190cmlwaHVudGVyLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/khu-du-lich-ho-may-park-triphunter.jpg?sha=1e36023819841ace",
  },
  {
    place_visit_name: "Núi Lớn",
    place_visit_address: "P. 6, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDUvMjQvOGN0ZWw1Mm4xNV9udWlfbG9uXzQwNF8xLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/nui-lon%20404-1.jpg?sha=d7b71eb67da8a3ff",
  },
  {
    place_visit_name: "Biển Hồ Tràm",
    place_visit_address: "Huyện Xuyên Mộc, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvNnFyNW5uajRuZF9Ib19UcmFfbV8zLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Ho%CC%82%CC%80%20Tra%CC%80m%203.jpg?sha=3a90754c9a7419f3",
  },
  {
    place_visit_name: "Linh Sơn Cổ Tự",
    place_visit_address: "104 Hoàng Hoa Thám, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDEvMTgveHlseXBzZ3lzX1NjcmVlbl9TaG90XzIwMTZfMDFfMTlfYXRfMS4xOC4yOF9BTS5wbmciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Screen%20Shot%202016-01-19%20at%201.18.28%20AM.png?sha=adba1fdfe3ec4537",
  },
  {
    place_visit_name: "Căn cứ núi Dinh",
    place_visit_address: "Xã Tân Hòa, huyện Tân Thành, Bà Rịa – Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvNTNubmVsZnZsX0NhX25fY3VfbnVfaV9EaW5oXzIuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Ca%CC%86n%20cu%CC%9B%CC%81%20nu%CC%81i%20Dinh%202.JPG?sha=49973b1a7d716224",
  },
  {
    place_visit_name: "Chùa Hải Vân",
    place_visit_address: "74 Hạ Long, P. 1, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDkvNG54b2t0NjJ4Zl9DYXB0dXJlLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Capture.JPG?sha=c6a0b5466ba4cc6b",
  },
  {
    place_visit_name: "Đảo Long Sơn",
    place_visit_address: "Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDUvMTYvNDBkYnYwcDJxZF9kYW9fbG9uZ19zb25fMTk2MzdfMy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/dao-long-son%2019637-3.jpg?sha=3343114324a8ca77",
  },
  {
    place_visit_name: "Hòn Bà",
    place_visit_address: "TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMDIvNmQ1NW80OTMxd19Ib19uX0JhXy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Ho%CC%80n%20Ba%CC%80.jpg?sha=c87fad7d876095ac",
  },
  {
    place_visit_name: "Bảo tàng vũ khí cổ",
    place_visit_address: "14 Hải Đăng, P. 2, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDEvMTgvNzdncGJrc2Fwcl9TY3JlZW5fU2hvdF8yMDE2XzAxXzE5X2F0XzEuMDUuMTFfQU0ucG5nIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Screen%20Shot%202016-01-19%20at%201.05.11%20AM.png?sha=f77720dcbecaceff",
  },
  {
    place_visit_name: "Chùa Quan Âm Nam Hải",
    place_visit_address:
      "112 Hạ Long, Phường 2, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDUvMTMvN2tmNDR4Zmc1Y19jaHVhX3F1YW5fYW1fbmFtX2hhaV8xX3RyaXBodW50ZXIuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/chua-quan-am-nam-hai-1-triphunter.jpg?sha=c92f1a661b944844",
  },
  {
    place_visit_name: "Biển Lộc An",
    place_visit_address: "Xã Lộc An, huyện Đất Đỏ, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvOHUxcWk1N2o0Zl9Mb19jX0FuXzMuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Lo%CC%A3%CC%82c%20An%203.jpg?sha=e4c66302e409221a",
  },
  {
    place_visit_name: "Đền thờ Đức Thánh Trần Hưng Đạo",
    place_visit_address: "68 Hạ Long, P. 2, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDEvMTgvN21kMzE5endvdV8xMjA4ODI3Nl81MjQ5MzgzMDEwMDkxMzhfMjE5NDQ1ODg5MDc5NDgyNzk1Ml9uLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/12088276_524938301009138_2194458890794827952_n.jpg?sha=79fa9295f3eb1e2f",
  },
  {
    place_visit_name: "Nhà tưởng niệm Võ Thị Sáu",
    place_visit_address: "QL55, huyện Đất Đỏ, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvNWx2aDkwcnFzMV9OaGFfdHVfb19uZ19uaWVfbV9udV9saWVfdF9zaV9hbmhfaHVfbmdfVm9fVGhpX1NhX3VfMi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Nha%CC%80%20tu%CC%9Bo%CC%9B%CC%89ng%20nie%CC%A3%CC%82m%20nu%CC%9B%CC%83%20lie%CC%A3%CC%82t%20si%CC%83%20anh%20hu%CC%80ng%20Vo%CC%83%20Thi%CC%A3%20Sa%CC%81u%202.jpg?sha=e4b3a8de7bf7072b",
  },
  {
    place_visit_name: "Khu di tích Đình Thần Thắng Tam",
    place_visit_address:
      "79 Hoàng Hoa Thám, P. Thắng Tam, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMDIvNG8yOWRvbHVlc19faV9uaF90aGFfbl9UaGFfbmdfVGFtLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%C4%90i%CC%80nh%20tha%CC%82%CC%80n%20Tha%CC%86%CC%81ng%20Tam.jpg?sha=6419d4552a4d0acd",
  },
  {
    place_visit_name: "Khu du lịch Hồ Mây",
    place_visit_address: "1A Trần Phú, P. 1, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDcvMDMvNnd0Y2s1cmdsMl9raHVfZHVfbGljaF9ob19tYXlfcGFya190cmlwaHVudGVyLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/khu-du-lich-ho-may-park-triphunter.jpg?sha=1e36023819841ace",
  },
  {
    place_visit_name: "Nhà úp ngược",
    place_visit_address: "66 Cô Giang, P. 4, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTgvMDYvMjYvNmUydnRldXVqal9uaGFfdXBfbmd1b2NfdnVuZ190YXVfVHJpcEh1bnRlcl8xLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/nha-up-nguoc-vung-tau-TripHunter-1.jpg?sha=f24aa85886d8fb00",
  },
  {
    place_visit_name: "Biển Suối Ồ",
    place_visit_address: "Xã Bình Châu, huyện Xuyên Mộc, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTcvMTAvMTcvN2p4dTRxeXFsa19iaWVuX3N1b2lfb19iYV9yaWFfdnVuZ190YXVfdHJpcGh1bnRlcl9ob2FpX2xlLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/bien-suoi-o-ba-ria-vung-tau-triphunter-hoai-le.JPG?sha=61afe97490701960",
  },
  {
    place_visit_name: "Miếu Bà Ngũ Hành",
    place_visit_address:
      "Hoàng Hoa Thám, P. Thắng Tam, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDEvMTgvcmtkeHR2NmRiX1NjcmVlbl9TaG90XzIwMTZfMDFfMTlfYXRfMTIuMDMuMjVfQU0ucG5nIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Screen%20Shot%202016-01-19%20at%2012.03.25%20AM.png?sha=d0ed7c8ef04bdc72",
  },
  {
    place_visit_name: "Suối nước nóng Bình Châu",
    place_visit_address: "QL55, huyện Xuyên Mộc, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvNzc2MzZqNDk2OF9CaV9uaF9DaGFfdV8xLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Bi%CC%80nh%20Cha%CC%82u%201.jpg?sha=eea0309d75d4cae5",
  },
  {
    place_visit_name: "Chợ Bà Rịa",
    place_visit_address:
      "Ngô Gia Tự, P. Phước Trung, TP Bà Rịa, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMjUvNjIwMjFmbmdsc19DaG9fQmFfUmlfYV8xLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Cho%CC%9B%CC%A3%20Ba%CC%80%20Ri%CC%A3a%201.jpg?sha=f44ea3b589d8ba02",
  },
  {
    place_visit_name: "Bãi Dứa",
    place_visit_address: "P. 2, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTgvMDYvMjYvN3QzMDgycnU5aV9iYWlfZHVhX3Z1bmdfdGF1X1RyaXBIdW50ZXJfMS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/bai-dua-vung-tau-TripHunter-1.jpg?sha=3c5eb7eb98517a6f",
  },
  {
    place_visit_name: "Hải đăng Vũng Tàu",
    place_visit_address: "Hải Đăng, phường 2, TP Vũng Tàu, Bà Rịa - Vũng Tàu",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTUvMTIvMDMvMTc0anBqMHk1aV9oYWlfZGFuZy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/hai%20dang.jpg?sha=c500d94ae7e4a13d",
  },
  {
    place_visit_name: "Vinpearl Land",
    place_visit_address: "Đảo Hòn Tre, Nha Trang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvOGwxeGt4ZTZlYV9Db3B5X29mX1ZpbnBlYXJsXzEuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Copy%20of%20Vinpearl%201.jpg?sha=ae8119bc1d876114",
  },
  {
    place_visit_name: "Hòn Mun",
    place_visit_address: "TP Nha Trang, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvNnJuNDVlaXBnbl9Ib25fTXVuLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Hon-Mun.jpg?sha=74a5f78b535d067e",
  },
  {
    place_visit_name: "Bãi Tranh",
    place_visit_address: "Vĩnh Nguyên, TP Nha Trang, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvOHY5cGtzaG55el9Db3B5X29mX0JhX2lfVHJhbmhfMS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Copy%20of%20Ba%CC%83i%20Tranh%201.jpg?sha=54d62a1f79960116",
  },
  {
    place_visit_name: "Hòn Một",
    place_visit_address: "TP Nha Trang, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvNW15c2Y5bTV0b19Db3B5X29mX0hvX25fTW9fdF8yLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Copy%20of%20Ho%CC%80n%20Mo%CC%A3%CC%82t%202.jpg?sha=6b8b7a01afd7d592",
  },
  {
    place_visit_name: "Chùa Long Sơn",
    place_visit_address:
      "Số 22 đường 23 Tháng 10, P. Phương Sơn, TP Nha Trang, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvMmczZnZqZ3JlZ19Db3B5X29mX0NodV9hX0xvbmdfU29fbl8yLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Copy%20of%20Chu%CC%80a%20Long%20So%CC%9Bn%202.jpg?sha=a6130c60b0478e93",
  },
  {
    place_visit_name: "Tháp Bà Ponagar",
    place_visit_address: "2 Tháng 4, Vĩnh Phước, TP Nha Trang, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvNjIzMjlqN2NfQ29weV9vZl9UaGFfcF9CYV8xLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Copy%20of%20Tha%CC%81p%20Ba%CC%80%201.jpg?sha=aa79a0de698fa29b",
  },
  {
    place_visit_name: "Hồ cá Trí Nguyên",
    place_visit_address: "Hòn Miễu, Vĩnh Nguyên, TP Nha Trang, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjIvN2ZxOHFibGJpaF9ob19jYV90cmlfbmd1eWVfbi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/ho%CC%82%CC%80%20ca%CC%81%20tri%CC%81%20nguye%CC%82n.jpg?sha=129886082b1a7f50",
  },
  {
    place_visit_name: "Hòn Tằm",
    place_visit_address: "TP Nha Trang, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjIvOXNqNTZqY3QyN19Db3B5X29mX0hvX25fVGFfbV8zLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Copy%20of%20Ho%CC%80n%20Ta%CC%86%CC%80m%203.jpg?sha=f3f9280a51928748",
  },
  {
    place_visit_name: "Viện Hải dương học Nha Trang",
    place_visit_address: "Trần Phú, TP Nha Trang, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjIvN2Jkd2Vtd3Q5NV92aWVfbl9oYV9pX2R1X29fbmcuanBlZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/vie%CC%A3%CC%82n%20ha%CC%89i%20du%CC%9Bo%CC%9Bng.jpeg?sha=15ff4e7b89900774",
  },
  {
    place_visit_name: "Hòn Chồng",
    place_visit_address:
      "Khóm Hòn Chồng, P. Vĩnh Phước, TP Nha Trang, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjIvMzZ4aXIxdmhmMl9Db3B5X29mX0hvX25fQ2hvX25nXzMuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Copy%20of%20Ho%CC%80n%20Cho%CC%82%CC%80ng%203.jpg?sha=c6abafabac144c32",
  },
  {
    place_visit_name: "Hòn Lao (Đảo Khỉ)",
    place_visit_address: "TP Nha Trang, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjIvMWdqdHFkcnVmZV9Db3B5X29mX0hvX25fTGFvXzIuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Copy%20of%20Ho%CC%80n%20Lao%202.jpg?sha=86ec8152b00df411",
  },
  {
    place_visit_name: "XQ Sử Quán",
    place_visit_address: "64 Trần Phú, TP.Nha Trang, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjIvOW9yd3JpdDB3X1hRX1N1X1F1YV9uXzMuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/XQ%20Su%CC%9B%CC%89%20Qua%CC%81n%203.jpg?sha=79f80d1e526164c7",
  },
  {
    place_visit_name: "Phố đi bộ - Chợ đêm Nha Trang",
    place_visit_address: "Hùng Vương - Trần Phú, TP Nha Trang, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjIvN252NGcweTI3Nl9QaG9faV9ib19DaG9fZV9tX05oYV9UcmFuZ18xLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Pho%CC%82%CC%81%20%C4%91i%20bo%CC%A3%CC%82%20-%20Cho%CC%9B%CC%A3%20%C4%91e%CC%82m%20Nha%20Trang%201.jpg?sha=091c6f0de87c8a06",
  },
  {
    place_visit_name: "KDL tắm khoáng bùn Trăm Trứng",
    place_visit_address:
      "Nguyễn Tất Thành, xã Phước Đồng, TP Nha Trang, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjIvMjk5azZ6YWpnZV9LaHVfZHVfbGlfY2hfVHJhX21fVHJ1X25nXzIuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Khu%20du%20li%CC%A3ch%20Tra%CC%86m%20Tru%CC%9B%CC%81ng%202.jpg?sha=b53ff90cd074a53b",
  },
  {
    place_visit_name: "Suối khoáng nóng I-Resort Nha Trang",
    place_visit_address:
      "Tổ 19, thôn Xuân Ngọc, xã Vĩnh Ngọc, TP Nha Trang, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjIvN2s3MTltZWZiOV9TdW9faV9raG9hX25nX25vX25nX0lfUmVzb3J0X05oYV9UcmFuZ18yLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Suo%CC%82%CC%81i%20khoa%CC%81ng%20no%CC%80ng%20I-Resort%20Nha%20Trang%202.jpg?sha=720b475cd42f3b9a",
  },
  {
    place_visit_name: "KDL Waterland Suối Thạch Lâm",
    place_visit_address:
      "Thôn Suối Lau 2, xã Suối Cát, huyện Cam Lâm, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjIvNHNnOTN2cXF2eV9XYXRlcmxhbmRfc3VvX2lfVGhhX2NoX0xhX21fMy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Waterland%20suo%CC%82%CC%81i%20Tha%CC%A3ch%20La%CC%82m%203.jpg?sha=7f1a347b5f164afd",
  },
  {
    place_visit_name: "Thành cổ Diên Thành",
    place_visit_address: "Khóm Đông Môn, thị trấn Diên Khánh, tỉnh Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjIvNnBlNzZjNWR6bF9UaGFfbmhfY29fRGllX25fVGhhX25oXzIuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Tha%CC%80nh%20co%CC%82%CC%89%20Die%CC%82n%20Tha%CC%80nh%202.jpg?sha=7b056e53f718bc0d",
  },
  {
    place_visit_name: "Khu du lịch sinh thái Nhân Tâm",
    place_visit_address: "Xã Diên Khánh, huyện Diên Khánh, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDQvMWlpOXo4cGp0bF9raHVfZHVfbGljaF9zaW5oX3RoYWlfbmhhbl90YW1fdGFpX25oYV90cmFuZy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/khu-du-lich-sinh-thai-nhan-tam-tai-nha-trang.jpg?sha=6f4c2114330af0ac",
  },
  {
    place_visit_name: "Bãi biển Đại Lãnh",
    place_visit_address: "Huyện Vạn Ninh, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDQvNTBrd2Z4ajRkZV9fRHVvbmdfVHJpZXVfTGVfLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%28Duong%20Trieu%20Le%29.JPG?sha=5ca4004e61a12c55",
  },
  {
    place_visit_name: "Bãi Dốc Lết",
    place_visit_address: "Huyện Ninh Hòa, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDQvNjJtZzFrd2VieF9fS296bWluYWFfLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%28Kozminaa%29.JPG?sha=e4db61df7cf3ced6",
  },
  {
    place_visit_name: "Văn miếu Diên Khánh",
    place_visit_address:
      "Khóm Phú Lộc Tây, thị trấn Diên Khánh, huyện Diên Khánh, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDQvODc5dHI1MXljOV9fRGFuX0JhbGRpbmlfLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%28Dan%20Baldini%29.JPG?sha=3899e19ae859a6a1",
  },
  {
    place_visit_name: "Đồng muối Hòn Khói",
    place_visit_address: "Huyện Ninh Hòa, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDQvMnRlcDd0eDRxeV9fTmd1eV9uX1ZfUGhfY18uanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/%28Nguy%E1%BB%85n%20V%C5%A9%20Ph%C6%B0%E1%BB%9Bc%29.jpg?sha=874ab426f3e26aed",
  },
  {
    place_visit_name: "Hòn Thị",
    place_visit_address: "Xã Ninh Ích, huyện Ninh Hòa, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDQvNjNxbDlwbXJ4Nl9fUmljaGFyZF9Mb3ppbl8uSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/%28Richard%20Lozin%29.JPG?sha=17a8a78d752c42db",
  },
  {
    place_visit_name: "Chùa Thiên Lộc",
    place_visit_address:
      "Thôn Phú Ân Nam, xã Diên An, huyện Diên Khánh, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDQvMW5yam53cjJ6aV9fVGhfbmhfVEhfTV9WX05fLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%28Th%C3%A0nh%20TH%E1%BA%A8M%20V%C4%82N%29.JPG?sha=afdfc8e524ab97dd",
  },
  {
    place_visit_name: "Am Chúa",
    place_visit_address:
      "Thôn Đại Điền Trung, xã Diên Điền, huyện Diên Khánh, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDQvOXJsZWgxaHZkcl9fSG9haV9OYW1fTGVfLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%28Hoai%20Nam%20Le%29.JPG?sha=ffee654a574e0a5b",
  },
  {
    place_visit_name: "Chùa Linh Sơn",
    place_visit_address:
      "Thôn Hiền Lương, xã Vạn Lương, thị trấn Vạn Giã, huyện Vạn Ninh, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDQvOTB1bWgxNzJ2NF9fcXVhbmdtaW5obnRfLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%28quangminhnt%29.JPG?sha=c7606b586da1f8df",
  },
  {
    place_visit_name: "Mộ Yersin",
    place_visit_address: "Xã Suối Cát, huyện Cam Lâm, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDQvM24xaTFtY2w2dV9fRGFuX0JhZGRpbmlfLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%28Dan%20Baddini%29.JPG?sha=3dd34abacb7ae041",
  },
  {
    place_visit_name: "Chùa Suối Đổ",
    place_visit_address: "Xã Diên Toàn, Huyện Diên Khánh, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDQvM3NoenYzdGM0dF9fZHV5aGFuXy5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/%28duyhan%29.JPG?sha=9a831798863ae2e0",
  },
  {
    place_visit_name: "Mạch nước nóng Hòn Lay",
    place_visit_address:
      "Thôn Hòn Lay, xã Khánh Hiệp, huyện Khánh Vĩnh, Khánh Hòa",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDQvM25jbTRtZGlucF8zM2hvbmxheS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/33honlay.jpg?sha=5bb7ca4290d7b822",
  },
  {
    place_visit_name: "Hoàng Thành Huế (Đại Nội)",
    place_visit_address: "23 Tháng 8, TP Huế, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTgvMDcvMDMvOGl4eDBjOGdmNl9kYWlub2lfY29tcHJlc3Nvci5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/dainoi.JPG?sha=540ce1d70a9ea10e",
  },
  {
    place_visit_name: "Bảo tàng Mỹ thuật Cung đình Huế (Điện Long An)",
    place_visit_address: "3 Lê Trực, TP Huế, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMTkvMndoZWY1bDAyYV80Ml9iaWcuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/42_big.jpg?sha=1f56e59575d8630f",
  },
  {
    place_visit_name: "Núi Ngự Bình (Núi Ngự)",
    place_visit_address: "Phường An Cựu, TP Huế, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvNGcxMTI1emJoaF9udWlfbmd1X2JpbmhfMi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/nui-ngu-binh-2.jpg?sha=ca9e65d5ead127bc",
  },
  {
    place_visit_name: "Đồi Thiên An",
    place_visit_address: "Thị xã Hương Thủy, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvOG9ub2NxZzByZ18yODAyMjAxMjA2NV8xLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/28022012065_1.jpg?sha=0ebb044c2e969de3",
  },
  {
    place_visit_name: "Hồ Thủy Tiên",
    place_visit_address: "Thị xã Hương Thủy, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvMTd4ZTE3a2k0M19kdV9saWNoX2RvaXRoaWVuYW4uanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/du_lich_doithienan.jpg?sha=f7e43e4389cb7c10",
  },
  {
    place_visit_name: "Đồi Vọng Cảnh",
    place_visit_address: "Đường Huyền Trân Công Chúa, TP Huế, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvMzJzOGpjNXhzX2RvaV92b25nX2NhbmguanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/doi-vong-canh.jpg?sha=d7d5e206ee066f9f",
  },
  {
    place_visit_name: "Điện Hòn Chén",
    place_visit_address: "Xã Hương Hồ, thị xã Hương Trà, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvOWJxcDM0dXVpaF9kaWVuX2hvbl9jaGVuX2h1ZV8xXzFfLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/dien_hon_chen_hue_1%281%29.jpg?sha=aaa16035b017d940",
  },
  {
    place_visit_name: "Biển Thuận An",
    place_visit_address: "Thị trấn Thuận An, huyện Phú Vang, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvOXFjbzAxajNvNl9iaW5oX21pbmhfdHJlbl9iaWVuX2dpYW9kdWN2aWV0bmFtLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/binh-minh-tren-bien-giaoducvietnam.jpg?sha=092506bf17b1a39a",
  },
  {
    place_visit_name: "Biển Cảnh Dương",
    place_visit_address: "Xã Lộc Vĩnh, huyện Phú Lộc, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvN3Q3cXNzZDdmXzFfYmFpX2JpZW5fTGFuZ19Dby5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/1-bai-bien-Lang-Co.jpg?sha=3806a7eb1f631947",
  },
  {
    place_visit_name: "Biển Lăng Cô",
    place_visit_address: "Thị trấn Lăng Cô, huyện Phú Lộc, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvMmVwMnN0djdlNl9CaV9uX0xfbmdfQ19IdV8xLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Bi%E1%BB%83n-L%C4%83ng-C%C3%B4-Hu%E1%BA%BF-1.jpg?sha=b0c456c1cb5c2ff2",
  },
  {
    place_visit_name: "Núi Bạch Mã",
    place_visit_address: "Bạch Mã, Phú Lộc, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvNTZyaW9zMXYzNl93ZXIuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/wer.JPG?sha=58edfdb859ff91e4",
  },
  {
    place_visit_name: "Suối khoáng Thanh Tân",
    place_visit_address: "Phong Sơn, Phong Điền, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvNXNpNm9nMnl5eF8xMjQwMDg5Ml85NDgzMDI2OTg1ODcyOTNfNDAyNTI2NzUwMDE5NjcwMTg1OV9uLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/12400892_948302698587293_4025267500196701859_n.jpg?sha=6fe5d8a863ed5d06",
  },
  {
    place_visit_name: "Phá Tam Giang",
    place_visit_address:
      "Huyện Phong Điền, huyện Quảng Điền, huyện Hương Trà, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvOThzZmtlMDEyZ193ZXIuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/wer.JPG?sha=f6f839118b227a28",
  },
  {
    place_visit_name: "Lăng Gia Long",
    place_visit_address: "Hương Thọ, Hương Trà, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvOW54bnlqcm81YV9MX25nX3Z1YV9HaWFfTG9uZ18zLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/L%C4%83ng_vua_Gia_Long_3.JPG?sha=9f01c7b76c677066",
  },
  {
    place_visit_name: "Lăng Khải Định",
    place_visit_address:
      "Khải Định (QL49), xã Thuỷ Bằng, thị xã Hương Thuỷ, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTgvMDQvMTEvM25rdmM0YjllX2xhbmdfa2hhaV9kaW5oX3RyaXBodW50ZXJfcmVzaXplZC5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/lang-khai-dinh-triphunter-resized.jpg?sha=f54000b502a23cc0",
  },
  {
    place_visit_name: "Lăng Minh Mạng",
    place_visit_address: "QL49, Hương Thọ, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvMzFyZWMxZG4wM19MX3VfTWluaF9sX3VfbF9uZ19taW5oX21fbmcuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/L%E1%BA%A7u-Minh-l%C3%A2u-l%C4%83ng-minh-m%E1%BA%A1ng.jpg?sha=268bb6f72dcef6a3",
  },
  {
    place_visit_name: "Lăng Tự Đức",
    place_visit_address:
      "17/69 Lê Ngô Cát, Thủy Xuân, TP Huế, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvNWZlZWpld2I5cl9MYW5nVHVEdWNfSHVlLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/LangTuDuc_Hue.jpg?sha=5090d52f7c8799a8",
  },
  {
    place_visit_name: "Chùa Thiên Mụ",
    place_visit_address: "Hương Hòa, TP Huế, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvM211b3Flb291Y19jaHVhX3RoaWVuX211X3ZpZXRfbmFtMy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/chua-thien-mu-viet-nam3.jpg?sha=c5c48e2a3a395ad6",
  },
  {
    place_visit_name: "Đầm Chuồn",
    place_visit_address: "Phú Vang, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDIvMjAvMWxucThzaXFka19rcGhfZGFtY2h1b25fMS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/kph_damchuon-1.jpg?sha=7e30d7dbb8ad5faa",
  },
  {
    place_visit_name: "Hòn Sơn Chà",
    place_visit_address: "Thị trấn Lăng Cô, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjAvN2g5NHJ2MWZ4MF9fQl9pX09hbmhfLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%28B%C3%B9i%20Oanh%29.jpg?sha=c942d51b2d5e1bae",
  },
  {
    place_visit_name: "Thác Đá Dăm",
    place_visit_address: "Thôn Dương Hòa, Hương Thủy, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTgvMDQvMjAvMnp0ajJ0cGN0Yl90aGFjX2RhX2RhbV90cmlwaHVudGVyLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/thac-da-dam-triphunter.jpg?sha=a3e36413e950a8c2",
  },
  {
    place_visit_name: "Chùa Huyền Không",
    place_visit_address:
      "Thôn Nham Biền, P. Hương Hồ, thị xã Hương Trà, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjAvN2JjZ3o4bnp3MV9DYXB0dXJlLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Capture.JPG?sha=ac37eb6383d217d0",
  },
  {
    place_visit_name: "Làng cổ Phước Tích",
    place_visit_address:
      "Thôn Phước Phú, Phong Hòa, Phong Điền, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjAvNnRsY2V2aXhjbl9odW9uZ3h1YWxhbmdjbzEwLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/huongxualangco10.jpg?sha=7b7bb282d53adeff",
  },
  {
    place_visit_name: "Đan viện Thiên An",
    place_visit_address: "Xã Thủy Bằng, huyện Hương Thủy, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjAvNm5laHh6YjJ2bl83NzY5NTA2MC5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/77695060.jpg?sha=9ed9bdbc8c7b79b7",
  },
  {
    place_visit_name: "Thành phố Huế",
    place_visit_address: "Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDUvMjMvNGcydzU2NnE4dV90aGFuaF9waG9faHVlXzQ0MTAuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/thanh-pho-hue%204410.jpg?sha=dd1868bb657045c8",
  },
  {
    place_visit_name: "Bạch Mã",
    place_visit_address: "Huyện Phú Lộc, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTgvMTIvMjEvMXlxdmN2dGQyd19iYWNoX21hX1RyaXBIdW50ZXJfMDQuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/bach-ma-TripHunter-04.jpg?sha=2fd6e5597b97b801",
  },
  {
    place_visit_name: "Miếu Thái Dương",
    place_visit_address:
      "Làng Thái Dương Hạ, thị trấn Thuận An, huyện Phú Vang, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjAvNHg5MHlhZmtyaV9rdHRfNC4xMl9taWV1YmExX2tpZW50aHVjX3h0a2ouanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/ktt_4.12_mieuba1_kienthuc_xtkj.jpg?sha=4eda82a9a9f064a0",
  },
  {
    place_visit_name: "Thành cổ Trấn Hải",
    place_visit_address:
      "Thôn Hải Thành, thị trấn Thuận An, huyện Phú Vang, Thừa Thiên - Huế",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDcvMjAvMmp4Nzg0a3JiZV9UcmFuX0hhaV90aGFuaF8wMS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Tran%20Hai%20thanh%2001.jpg?sha=3ffe0b2785bee6d7",
  },
  {
    place_visit_name: "Hang Dơi",
    place_visit_address:
      "Khu du lịch Suối Tranh, tỉnh lộ 47, ấp Suối Mây, xã Dương Tơ, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvOXI1MHV5d3A2Zl9mZGcuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/fdg.JPG?sha=fd3dfca812e29d49",
  },
  {
    place_visit_name: "Suối Đá Bàn",
    place_visit_address: "Xã Cửa Dương, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvNHRqeDExdDdzc19waHVxdW9jNC5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/phuquoc4.jpg?sha=d736dd1c266df148",
  },
  {
    place_visit_name: "Suối Đá Ngọn",
    place_visit_address: "Cửa Dương, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvNjczdnZ2Znppcl9zdW9pX2RhX25nb24uanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/suoi-da-ngon.jpg?sha=a7d6856c027284fa",
  },
  {
    place_visit_name: "Bãi Sao",
    place_visit_address: "Thị trấn An Thới, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvMXEwemhhbHU2Y19zZy5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/sg.JPG?sha=8013244aad0e658d",
  },
  {
    place_visit_name: "Bãi Khem",
    place_visit_address: "Thị trấn An Thới, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvMjFocno4ejBjbF9iYWlfa2hlbV81NDMzYTg2MDcyNzAzLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/bai-khem-5433a86072703.jpg?sha=0ac23c88560613ef",
  },
  {
    place_visit_name: "Công viên động vật Vinpearl Safari",
    place_visit_address: "Khu Bãi Dài, xã Gành Dầu, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvdjlhMzJ0eHQwX1ZpbnBlYXJsX1NhZmFyaV9zZV9tYW5nX3RvaV9uaHVuZ190cmFpX25naGllbV9seV90aHVfY2hvX2R1X2toYWNoX21vaV9sdWFfdHVvaS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Vinpearl%20Safari%20se%20mang%20toi%20nhung%20trai%20nghiem%20ly%20thu%20cho%20du%20khach%20moi%20lua%20tuoi.jpg?sha=b6008c8bce505026",
  },
  {
    place_visit_name: "Nhà tù Phú Quốc",
    place_visit_address:
      "350 tỉnh lộ 46, thị trấn An Thới, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvam00bHk0MG5xX2dmZC5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/gfd.JPG?sha=a374c928f3239aa3",
  },
  {
    place_visit_name: "Làng chài Hàm Ninh",
    place_visit_address: "Rạch Hàm, Hàm Ninh, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvOTY1d21laWxzcV9sYW5nX2NoYWlfaGFtX25pbmhfMS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/lang%20chai%20ham%20ninh_1.jpg?sha=47e6a1a88b60fa0e",
  },
  {
    place_visit_name: "Vườn tiêu Khu Tượng",
    place_visit_address: "Cửa Dương, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvOTY3ejNuMmY3dV9jYXlfdGlldV9wcS5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/cay%20tieu%20pq.JPG?sha=ed8b5666f3177e94",
  },
  {
    place_visit_name: "Mũi Gành Dầu",
    place_visit_address: "Xã Gành Dầu, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvN2ZjZ3JlZnk5el9DYXB0dXJlLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Capture.JPG?sha=765ab1e2b5321f1f",
  },
  {
    place_visit_name: "Hòn Thơm",
    place_visit_address:
      "Quần đảo An Thới, xã Hòn Thơm, huyện Phú Quốc, tỉnh Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvaXBrY2s1bGF4X0NhcHR1cmUuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Capture.JPG?sha=980ebcfffa3efccf",
  },
  {
    place_visit_name: "Suối Tranh",
    place_visit_address:
      "Khu du lịch Suối Tranh, tỉnh lộ 47, ấp Suối Mây, xã Dương Tơ, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvNGw1cW11NG94Z19zZGcuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/sdg.JPG?sha=1a5ae30c5201f923",
  },
  {
    place_visit_name: "Nước mắm Thịnh Phát",
    place_visit_address:
      "đường 30, khu phố 1, thị trấn Dương Đông, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvMmE2OTh1M3ExZl9DYXB0dXJlLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Capture.JPG?sha=e7c2bc0ef89e8cf0",
  },
  {
    place_visit_name: "Dinh Cậu",
    place_visit_address:
      "Đường Bạch Đằng, khu phố 2, thị trấn Dương Đông, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvMmJzOGliZngxb19yZHkuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/rdy.JPG?sha=044fe040428f9e93",
  },
  {
    place_visit_name: "Đền thờ Gia Long - Giếng Tiên",
    place_visit_address: "Thị trấn An Thới, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvNnJscnBoMWQxaF9DYXB0dXJlLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Capture.JPG?sha=b5afdb8050c92f85",
  },
  {
    place_visit_name: "Hùng Long Tự (Chùa Sư Muôn)",
    place_visit_address: "Tỉnh lộ 47, Dương Tơ, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjQvNzVtY2ZhaDl0Zl84NDg0NDU2MjAzX2MyYjYwN2QzMDlfYy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/8484456203_c2b607d309_c.jpg?sha=a0e90bf793c6b8d2",
  },
  {
    place_visit_name: "Cơ sở sản xuất ngọc trai Ngọc Hiền",
    place_visit_address: "Ấp Đường Bào, xã Dương Tơ, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjUvNGhpeDZuNXYxb181MzUzMTRfODE1MzQ0MzA1Mjc4MzQzXzgzOTE4NTIxNzcxOTEzMDIyMDRfbi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/535314_815344305278343_8391852177191302204_n.jpg?sha=d5d74eaf1793fde9",
  },
  {
    place_visit_name: "Cơ sở sản xuất ngọc trai Quốc An",
    place_visit_address: "Ấp Đường Bào, xã Dương Tơ, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDUvMjQvMTV6aGFua2ZibF9jb19zb19zYW5feHVhdF9uZ29jX3RyYWlfcXVvY19hbl8xMzgzXzIuUE5HIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/co-so-san-xuat-ngoc-trai-quoc-an%201383-2.PNG?sha=35f87bf24cbd2750",
  },
  {
    place_visit_name: "Chợ đêm Bạch Đằng",
    place_visit_address:
      "Đường Bạch Đằng, thị trấn Dương Đông, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjUvOHhrZWdnMjBhbF8xMjUwODgxNl8xMTUzMDQxNTMxMzgyMDMyXzI5NTI1NzczMTk4MDUxMzI4NzFfbi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/12508816_1153041531382032_2952577319805132871_n.jpg?sha=9113f25941cc4842",
  },
  {
    place_visit_name: "Chùa Hộ Quốc (Thiền viện Trúc Lâm Hộ Quốc)",
    place_visit_address: "Ấp Suối Lớn, xã Dương Tơ, Phú Quốc, tỉnh Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjUvNzRwOTVtMzdxcl9zZGcuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/sdg.JPG?sha=3e88c3c10dda76c3",
  },
  {
    place_visit_name: "Bãi tắm Dương Đông",
    place_visit_address: "Dương Đông, Phú Quốc",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjUvNG1hbzNsZW8wOF9UaGlfdHJhbl9EdW9uZ19Eb25nLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Thi%20tran%20Duong%20Dong.jpg?sha=28f5ad5adc379215",
  },
  {
    place_visit_name: "Mũi Ông Quới",
    place_visit_address: "Cửa Cạn, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjUvN2hlb3A4OHZ1cV9DYXB0dXJlLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Capture.JPG?sha=e786671d2648629a",
  },
  {
    place_visit_name: "Bãi Ngự",
    place_visit_address: "Thị trấn An Thới, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjUvNDEzcHIzMGE0d19kZmguSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/dfh.JPG?sha=14ce7b1ec0f2a682",
  },
  {
    place_visit_name: "Dinh Bà",
    place_visit_address: "Đường Võ Thị Sáu, Dương Đông, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjUvOWluM2pqOTg3dF9mZGcuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/fdg.JPG?sha=f82beffc588ad9a1",
  },
  {
    place_visit_name: "Hồ Dương Đông",
    place_visit_address: "Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjUvMzNhemNrM256al9Ib19EdV9vX25nX29fbmdfUGh1UXVvY19Hb3dkZWUuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Ho%CC%82%CC%80%20Du%CC%9Bo%CC%9Bng%20%C4%90o%CC%82ng%20-%20PhuQuoc%20-%20Gowdee.jpg?sha=9e9581515bb46891",
  },
  {
    place_visit_name: "Đền thờ Nguyễn Trung Trực",
    place_visit_address: "Cửa Cạn, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDgvMTkvOHBhdXQ0c2FfZGVuX3Rob19uZ3V5ZW5fdHJ1bmdfdHJ1Y18zX3RyaXBodW50ZXIuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/den-tho-nguyen-trung-truc-3-triphunter.jpg?sha=b324fbd3d2efab7c",
  },
  {
    place_visit_name: "Hòn Móng Tay",
    place_visit_address:
      "Quần đảo An Thới, xã Hòn Thơm, huyện Phú Quốc, tỉnh Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjYvNDI0dDhpd281bl9kaWFkaWVtYW51b25nX2NvbV9waGF0X2hpZW5faG9hbmdfZGFvX2hvbl9tb25nX3RheV90dXlldF9kZXBfb19raWVuX2dpYW5nYjQzNWJjYzQ2MzU5MzkxMjMyNjk0NDMyMzguanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/diadiemanuong-com-phat-hien-hoang-dao-hon-mong-tay-tuyet-dep-o-kien-giangb435bcc4635939123269443238.jpg?sha=0c93c9aaf1c86ec1",
  },
  {
    place_visit_name: "Hòn Một",
    place_visit_address: "Xã Hòn Thơm, huyện Phú Quốc, tỉnh Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjYvOXFpdnBlb3ZqYl9ob25fbW90X3BodV9xdW9jX2l2aXZ1XzIuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/hon-mot-phu-quoc-ivivu-2.jpg?sha=65efb6f69bfbf66f",
  },
  {
    place_visit_name: "Cảng An Thới",
    place_visit_address: "Tỉnh lộ 46, khu 1, An Thới, Phú Quốc, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMjYvNmZhMjBmbHR3al9DYXB0dXJlLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Capture.JPG?sha=11b29e64aa032df5",
  },
  {
    place_visit_name: "Bến phà Thạnh Thới",
    place_visit_address: "Hà Tiên, Kiên Giang",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDUvMjQvNjNhMXZ5ZGU4NF9iZW5fcGhhX3RoYW5oX3Rob2lfMTQwMy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/ben-pha-thanh-thoi%201403.jpg?sha=dd1183bd86574fb4",
  },
  {
    place_visit_name: "Bãi Cháy",
    place_visit_address: "Bãi Cháy, TP Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvM2R1MDkwdWR6dF9DYXB0dXJlLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Capture.JPG?sha=52d655a8ff6d4b9b",
  },
  {
    place_visit_name: "Hồ Ba Hầm",
    place_visit_address: "Đảo Đầu Bê, vịnh Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvN3k3d2g3cWp5MV9pbWFnZXM3MTQ1MDVfYmFoYW0xLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/images714505_baham1.jpg?sha=a052cc957cae15fa",
  },
  {
    place_visit_name: "Hòn Lư Hương (Đỉnh Hương)",
    place_visit_address: "Vịnh Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvMnZpNzM3bjh3N19kaW5oX2x1X2h1b25nX3ZpbmhfaGFfbG9uZzEuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/dinh%20lu%20huong%20vinh%20ha%20long1.jpg?sha=cc8f8ca2f70b2b93",
  },
  {
    place_visit_name: "Đảo Tuần Châu",
    place_visit_address: "P. Tuần Châu, TP Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTgvMDQvMTEvNWpmd2hjYWU0dF9kYW9fdHVhbl9jaGF1X3RyaXBodW50ZXJfcmVzaXplZC5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/dao-tuan-chau-triphunter-resized.jpg?sha=b22c83ac71f394fb",
  },
  {
    place_visit_name: "Hang Sửng Sốt",
    place_visit_address: "Đảo Bồ Hòn, vịnh Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvNnBjN3U0dDZtb19oYW5nX3N1bmdfc290XzEwMjR4NjgwLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/hang-sung-sot-1024x680.jpg?sha=7fce7aee50f33629",
  },
  {
    place_visit_name: "Đảo Ti Tốp",
    place_visit_address: "Vịnh Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvMnBjcGxqdXl0MF9DYXB0dXJlLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Capture.JPG?sha=8c3d6645d6a0183c",
  },
  {
    place_visit_name: "Động Thiên Cung",
    place_visit_address: "Đảo Vạn Cảnh, Vịnh Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvNHhlemtvbGJ0X2RvbmdfdGhpZW5fY3VuZy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/dong-thien-cung.jpg?sha=0102adf06b131db5",
  },
  {
    place_visit_name: "Hòn Gà Chọi",
    place_visit_address: "Vịnh Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvNDR0bjJ1ZW03ZF8yNS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/25.jpg?sha=d21c21c7b3234f7f",
  },
  {
    place_visit_name: "Hang Đầu Gỗ",
    place_visit_address: "Đảo Đầu Gỗ, vịnh Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvMzRjaHdkN2pmNF9mZGhkaC5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/fdhdh.JPG?sha=e286212aa79a75d6",
  },
  {
    place_visit_name: "Hang Bồ Nâu",
    place_visit_address: "Vịnh Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvaTMzemZnMWR1X0hhbmdfYm9fbmF1MDkuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Hang-bo-nau09.jpg?sha=8f4517c2dff96698",
  },
  {
    place_visit_name: "Đảo Soi Sim",
    place_visit_address: "Vịnh Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvMWxieWg1M203dV9zZGdmLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/sdgf.JPG?sha=8c835369047b6d5d",
  },
  {
    place_visit_name: "Bảo tàng Quảng Ninh",
    place_visit_address:
      "Trần Quốc Nghiễn, P. Bạch Đằng, TP Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvOXAwdW90cjYycF9mZGcuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/fdg.JPG?sha=377957d812472c48",
  },
  {
    place_visit_name: "Cầu Bãi Cháy",
    place_visit_address: "QL18, TP Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvOGx6aHhrbDJnZ18xMDk5NDc1NzAzNl8zNWE1OGZiMDhmX2IuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/10994757036_35a58fb08f_b.jpg?sha=6f97af7917a92e63",
  },
  {
    place_visit_name: "Đền thờ Trần Quốc Nghiễn",
    place_visit_address:
      "Đường Trần Quốc Nghiễn, Hồng Gai, TP.Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvM2d4cDVtcjlpdl8xNjAuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/160.jpg?sha=d11e356cd6f80fb5",
  },
  {
    place_visit_name: "Núi Bài Thơ",
    place_visit_address: "TP Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvOWVubzNpaHBiZ19DYXB0dXJlLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Capture.JPG?sha=ea5c6bb37de44097",
  },
  {
    place_visit_name: "Chùa Long Tiên",
    place_visit_address: "Long Tiên, P. Bạch Đằng, TP Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvNmZ0bjc0YTA2bF9mZGcuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/fdg.JPG?sha=f0c563bdb52bf331",
  },
  {
    place_visit_name: "Động Mê Cung",
    place_visit_address: "Hòn Lỡm Bò, vịnh Hạ Long, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDQvMDcvNnFzODFndGt0eV9kb25nbWVjdW5nXzYuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/dongmecung-6.jpg?sha=f800940b49234a10",
  },
  {
    place_visit_name: "Bãi tắm Minh Châu",
    place_visit_address: "Xã Minh Châu, huyện Vân Đồn, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMjQvMnBxYzlvZmwwNF9naTBLbl9wemdSckdQaFJqN1RfWUY0RkRZMDk1NVVsMi5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/gi0Kn-pzgRrGPhRj7T_YF4FDY0955Ul2.jpg?sha=3deb2ba5102dfa99",
  },
  {
    place_visit_name: "Bãi tắm Sơn Hào",
    place_visit_address: "Xã Quan Lạn, huyện Vân Đồn, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMjQvNDhwYXJjc3p2N19OR1VZRU5EQUNWRTIuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/NGUYENDACVE2.JPG?sha=ecc29f7b3d7acb3e",
  },
  {
    place_visit_name: "Bãi tắm Robinson",
    place_visit_address: "Xã Minh Châu, huyện Vân Đồn, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMjQvMmRqaXdqcWRxNF9TT0lDSEFOTkVMLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/SOICHANNEL.JPG?sha=e47752c88bf227e6",
  },
  {
    place_visit_name: "Bãi tắm Việt - Mỹ",
    place_visit_address: "Xã Quan Lạn, huyện Vân Đồn, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMjQvMTUyeWo4dHQzbF9ET0FOTkdVWUVOVFJPTkcuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/DOANNGUYENTRONG.JPG?sha=863047ede38caecf",
  },
  {
    place_visit_name: "Bãi biển Quan Lạn",
    place_visit_address: "Xã Quan Lạn, huyện Vân Đồn, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMjQvOGY4cjNpeWF4X3ZFcUhMR0c3NzBfSHBMaVFGS0dKVG0zQTVVdlFwRUhKLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/vEqHLGG770-HpLiQFKGJTm3A5UvQpEHJ.jpg?sha=e3bd3dd4ea0524e0",
  },
  {
    place_visit_name: "Chùa Quan Lạn",
    place_visit_address: "Xã Quan Lạn, huyện Vân Đồn, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMjQvNWFkZ3A4azVvZF9OR1VZRU5USEFOSFNPTjIuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/NGUYENTHANHSON2.JPG?sha=cf4f1ea89f4d7148",
  },
  {
    place_visit_name: "Đình Quan Lạn",
    place_visit_address: "Xã Quan Lạn, huyện Vân Đồn, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMjQvMXV3Zm04MGZoMl9OR1VZRU5USEFOSFNPTi5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/NGUYENTHANHSON.JPG?sha=cfa6ededfaa43d99",
  },
  {
    place_visit_name: "Đình thờ Lý Anh Tông",
    place_visit_address: "Xã Minh Châu, huyện Vân Đồn, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTcvMTAvMTkvOW91MDFxazJpNF9kaW5oX3Rob19seV9hbmhfdG9uZ19kYW9fcXVhbl9sYW5fdHJpcGh1bnRlcl8xLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/dinh-tho-ly-anh-tong-dao-quan-lan-triphunter-1.JPG?sha=4f46e546ece6f353",
  },
  {
    place_visit_name: "Cảng Minh Châu",
    place_visit_address: "Xã Minh Châu, huyện Vân Đồn, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTcvMTAvMTkvMnVlZXVia2MyM19jYW5nX21pbmhfY2hhdV9kYW9fcXVhbl9sYW5fdHJpcGh1bnRlcl8yX1RydW5nX0R1Yy5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/cang-minh-chau-dao-quan-lan-triphunter-2-Trung-Duc.JPG?sha=8167a1d448a4000d",
  },
  {
    place_visit_name: "Miếu thờ Trần Khánh Dư",
    place_visit_address: "Xã Quan Lạn, huyện Vân Đồn, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTcvMTAvMTkvMjJ6cW5qMm9ial9taWV1X3Rob190cmFuX2toYW5oX2R1X2Rhb19xdWFuX2xhbl90cmlwaHVudGVyXzMuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/mieu-tho-tran-khanh-du-dao-quan-lan-triphunter-3.JPG?sha=ddf71dad8088ff84",
  },
  {
    place_visit_name: "Chợ Tân Đoài",
    place_visit_address: "Xã Quan Lạn, huyện Vân Đồn, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTcvMTAvMTkvMmh1dXp3aXBobF9jaG9fdGFuX2RvYWlfZGFvX3F1YW5fbGFuX3RyaXBodW50ZXIuSlBHIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/cho-tan-doai-dao-quan-lan-triphunter.JPG?sha=35ccef018ac5628f",
  },
  {
    place_visit_name: "Ghềnh đá Đầu Làng",
    place_visit_address: "Xã Quan Lạn, huyện Vân Đồn, Quảng Ninh",
    place_visit_image: "",
  },
  {
    place_visit_name: "Hải đăng Quan Lạn",
    place_visit_address: "Xã Minh Châu, huyện Vân Đồn, Quảng Ninh",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTcvMTAvMTkvNGdoamJ6Z2tqZl9oYWlfZGFuZ19kYW9fcXVhbl9sYW5fdHJpcGh1bnRlci5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/hai-dang-dao-quan-lan-triphunter.jpg?sha=5291b21d4d2687b9",
  },
  {
    place_visit_name: "Lăng Bác",
    place_visit_address: "Hùng Vương, P. Điện Biên, Q. Ba Đình, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDUvMjUvNXdmeWk2MzdkY190X2lfeHVfbmcuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/t%E1%BA%A3i%20xu%E1%BB%91ng.jpg?sha=c1c742c47201d7a2",
  },
  {
    place_visit_name: "Văn Miếu - Quốc Tử Giám",
    place_visit_address: "P. Văn Miếu, Q. Đống Đa, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDUvMjUvNm9hNGEwNDV1M190X2lfeHVfbmdfMV8uanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/t%E1%BA%A3i%20xu%E1%BB%91ng%20%281%29.jpg?sha=9b68b3263630b836",
  },
  {
    place_visit_name: "Hồ Hoàn Kiếm",
    place_visit_address: "Hàng Trống, Q. Hoàn Kiếm, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDUvMjUvMWZ0YTU0bWttal9UaGFwX1J1YV9naXVhX2xvbmdfaG9fR3VvbS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Thap-Rua-giua-long-ho-Guom.jpg?sha=faa5cadb810aa0a3",
  },
  {
    place_visit_name: "Hoàng thành Thăng Long",
    place_visit_address: "P. Quán Thánh, Q. Ba Đình, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDUvMjUvOHc1dm82eGNpel9ob2FuZ190aGFuaF90aGFuZ19sb25nXzYuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/hoang-thanh-thang-long-6.jpg?sha=a6d8523729a8b130",
  },
  {
    place_visit_name: "Phố cổ Hà Nội (36 phố phường)",
    place_visit_address: "Q. Hoàn Kiếm, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDUvMjYvNTR5N2djYnhkdV9waG9fY28uanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/pho-co.jpg?sha=611fe9792d9939d7",
  },
  {
    place_visit_name: "Chùa Một Cột",
    place_visit_address: "P. Đội Cấn, Q. Ba Đình, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMDIvN2lqMWlhbmg5N19EdV9saWNoX1ZpZXRfTmFtX215dG91cl8xMC5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/Du-lich-Viet-Nam-mytour-10.jpg?sha=024859bb848cfbe9",
  },
  {
    place_visit_name: "Nhà hát múa rối nước Thăng Long",
    place_visit_address: "57B Đinh Tiên Hoàng, Hàng Bạc, Q. Hoàn Kiếm, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMDIvMndiZW92c3A5bV8yX0lNR183MjM1X2NvcHkuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/2-IMG_7235%20copy.jpg?sha=8211b2c56c4008c7",
  },
  {
    place_visit_name: "Chợ hoa Quảng An",
    place_visit_address: "P. Quảng An, Q. Tây Hồ, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMDIvOG9qZjM5bDRhbV9pbWFnZV8xNDM4NzY0NDczXzIwMTUwNDE3XzA0MTAwMC5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/image-1438764473-20150417_041000.jpg?sha=8891f136191c9718",
  },
  {
    place_visit_name: "Cầu Long Biên",
    place_visit_address: "Q. Tây Hồ, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMDIvM2RxMGMxczQ3al9fbmhfbHVvbmdraGF1bGFvLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%E1%BA%A3nh%20luongkhaulao.jpg?sha=3113e9bb0457435d",
  },
  {
    place_visit_name: "Nhà thờ lớn Hà Nội",
    place_visit_address: "40 Nhà Chung, Hàng Trống, Q. Hoàn Kiếm, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTgvMDQvMTEvODliZGxoNWRiZ19uaGFfdGhvX2xvbl9oYV9ub2lfdHJpcGh1bnRlcl9yZXNpemVkLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/nha-tho-lon-ha-noi-triphunter-resized.jpg?sha=6a95ae83435a6dce",
  },
  {
    place_visit_name: "Nhà tù Hỏa Lò",
    place_visit_address: "1 Hỏa Lò, Q. Hoàn Kiếm, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMDIvMTRxYTN1NnRkdV9tbWR2OHFXWGZVekQwN0NnOTd4c2pfRjhBeVNiWEVZbC5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/mmdv8qWXfUzD07Cg97xsj_F8AySbXEYl.jpg?sha=783b47b276376bf9",
  },
  {
    place_visit_name: "Chùa Trấn Quốc",
    place_visit_address: "Thanh Niên, P. Trúc Bạch, Q. Ba Đình, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMDIvNndnNGdsN2htYl9fbmhfa296b19OYWdhaS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/%E1%BA%A3nh%20kozo%20Nagai.jpg?sha=6d76762b72e7d149",
  },
  {
    place_visit_name: "Bảo tàng mỹ thuật Việt Nam",
    place_visit_address: "66 Nguyễn Thái Học, P. Điện Biên, Q. Ba Đình, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMDIvaTdwaDdiNWY1X0NhcHR1cmUuUE5HIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Capture.PNG?sha=80ff382df12734a9",
  },
  {
    place_visit_name: "Bảo tàng Lịch sử Quân sự Việt Nam",
    place_visit_address: "28A Điện Biên Phủ, P. Điện Biên, Q. Ba Đình, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMDIvN3VlbGZjdzI3dV9DYXB0dXJlLlBORyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/Capture.PNG?sha=1b7ed1fc5ac65b6a",
  },
  {
    place_visit_name: "Bảo tàng Hồ Chí Minh",
    place_visit_address: "P. Đội Cấn, Q. Ba Đình, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMDIvNmpybTY0MzVzMl9Ib19DaGlfTWluaF9NdXNldW1fOTUzOTMuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/Ho-Chi-Minh-Museum-95393.jpg?sha=6b7eb9c86abbde8e",
  },
  {
    place_visit_name: "Làng cổ Đường Lâm",
    place_visit_address: "Thị xã Sơn Tây, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTgvMDQvMDYvNTJoNWVkb2gyeV82ajE4dkJMQ1pNZHNGdGZBNFUwWDBvaHpTVWhsNW1lcS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/6j18vBLCZMdsFtfA4U0X0ohzSUhl5meq.jpg?sha=3451d12b07ecbb3a",
  },
  {
    place_visit_name: "Suối Yến - Chùa Hương",
    place_visit_address: "Xã Hương Sơn, huyện Mỹ Đức, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMDIvMmY1ODljcGZ6OV85LmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/9.jpg?sha=bca7360c7b6c1502",
  },
  {
    place_visit_name: "Chùa Tây Phương",
    place_visit_address: "Huyện Thạch Thất, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMDIvOHJ2czR0YWU3bF8zOTM3NTM5Ni5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/39375396.jpg?sha=07a2cab8e6cd1123",
  },
  {
    place_visit_name: "Làng lụa Vạn Phúc Hà Đông",
    place_visit_address: "Q. Hà Đông, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMDIvN3h1OTNsODM4M19sYW5nX2x1YV92YW5fcGh1Yy5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/lang-lua-van-phuc.jpg?sha=49007aa1c31ef899",
  },
  {
    place_visit_name: "Vườn quốc gia Ba Vì",
    place_visit_address: "Huyện Ba Vì, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMDIvOWY4dW0xdGZ0OF9oYnYuanBnIl0sWyJwIiwidGh1bWIiLCIyNjd4MjAwIyJdXQ/hbv.jpg?sha=5b3ae3f4256fbb14",
  },
  {
    place_visit_name: "Làng giấy dó An Cốc",
    place_visit_address: "Làng An Cốc, xã Hồng Minh, huyện Phú Xuyên, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMTgvN3kyeXk4bXBqNF9sYW5nX25naGVfQW5fQ29jLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/lang-nghe-An-Coc.jpg?sha=a12ba1d2dedf2ae2",
  },
  {
    place_visit_name: "Việt Phủ Thành Chương",
    place_visit_address: "Xã Hiền Ninh, huyện Sóc Sơn, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDYvMDIvMXp2bXI0ejRqZF9yd0hfb2dUMFoxdDZ2ckJNVjVQdTdjQVRGNVZMRDdfQS5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/rwH_ogT0Z1t6vrBMV5Pu7cATF5VLD7-A.jpg?sha=ea48b933cef9c20a",
  },
  {
    place_visit_name: "Times City",
    place_visit_address: "458 Phố Minh Khai, Vĩnh Phú, Hai Bà Trưng, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDkvMDYvN3A1bDhkdDl2b190aW1lc19jaXR5XzFfdHJpcGh1bnRlci5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/times-city-1-triphunter.jpg?sha=10fd05a39dba61fe",
  },
  {
    place_visit_name: "Đền Sóc (Đền Thượng)",
    place_visit_address: "Thôn Vệ Linh, xã Phù Linh, huyện Sóc Sơn, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMTgvN2l5dTBrbWhiMl9fb1ZpX3REX25nXy5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/%28%C4%90%C3%A0oVi%E1%BB%87tD%C5%A9ng%29.JPG?sha=9452b113783de227",
  },
  {
    place_visit_name: "Trung tâm triển lãm nghệ thuật đương đại Vincom",
    place_visit_address:
      "Tầng B1-R3, Royal City 72A Nguyễn Trãi, Thanh Xuân, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDkvMDkvODY4aTVpOW5wd190cnVuZ190YW1fdHJpZW5fbGFtX25naGVfdGh1YXRfZHVvbmdfZGFpX3ZpbmNvbV90cmlwaHVudGVyLmpwZyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/trung-tam-trien-lam-nghe-thuat-duong-dai-vincom-triphunter.jpg?sha=1d95f62577177cf3",
  },
  {
    place_visit_name: "Xưởng đúc đồng Ngũ Xã",
    place_visit_address: "15 Hồng Hà, P. Yên Phụ, Q. Tây Hồ, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMDkvOGNibDlqd2tncF9ldC5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/et.JPG?sha=1a73040291ce5594",
  },
  {
    place_visit_name: "Chùa Đại Bi",
    place_visit_address: "Thôn Vệ Linh, xã Phù Linh, huyện Sóc Sơn, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMTgvNjZzbjF0dmV5Ml9fbmdfbmhfLkpQRyJdLFsicCIsInRodW1iIiwiMjY3eDIwMCMiXV0/%28%C4%90%C4%83ng%20%C4%90%E1%BB%8Bnh%29.JPG?sha=10ea10d8efb2d39c",
  },
  {
    place_visit_name: "Đền Đồng Nhân",
    place_visit_address: "12 Hương Viên, P. Đồng Nhân, Q. Hai Bà Trưng, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMTgvNTM1eDRxcTNlc19fTUFYU1RVRElPXy5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/%28MAXSTUDIO%29.JPG?sha=576b1c3d07d4d7b3",
  },
  {
    place_visit_name: "Chùa Non Nước",
    place_visit_address: "Thôn Vệ Linh, xã Phù Linh, huyện Sóc Sơn, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTYvMDgvMTgvNGs5ajkzenVkdF9fbmdfbmhfMy5KUEciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/%28%C4%90%C4%83ng%20%C4%90%E1%BB%8Bnh%29%203.JPG?sha=8348a554dd5cdf47",
  },
  {
    place_visit_name: "Công viên nước Hồ Tây",
    place_visit_address: "614 Lạc Long Quân, Tây Hồ, Hà Nội",
    place_visit_image:
      "https://triphunter.vn/media/W1siZiIsIjIwMTkvMDkvMTMvM3V1YTN5MGFyMl9jb25nX3ZpZW5fbnVvY19ob190YXlfdHJpcGh1bnRlci5qcGciXSxbInAiLCJ0aHVtYiIsIjI2N3gyMDAjIl1d/cong-vien-nuoc-ho-tay-triphunter.jpg?sha=aa2029678cd4b19a",
  },
];
