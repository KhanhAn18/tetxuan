const ngayEL = document.getElementById('ngay');
const gioEL = document.getElementById('gio');
const phutEL = document.getElementById('phut');
const giayEL = document.getElementById('giay');

const tet_2024 = new Date('Feb 10, 2024');
const mot_ngay = 1 * 24 * 60 * 60 * 1000;

const tinh_thoi_gian = function () {
    
    const hom_nay = new Date();
    const miligiay_conlai = tet_2024.getTime() - hom_nay.getTime();

    const ng = miligiay_conlai / mot_ngay;
    const ngay_con_lai = Math.floor(ng);

    const g = (ng - ngay_con_lai) * 24;
    const gio_con_lai = Math.floor(g);

    const p = (g - gio_con_lai) * 60;
    const phut_con_lai = Math.floor(p);

    const gi = (p - phut_con_lai) * 60;
    const giay_con_lai = Math.floor(gi);

    ngayEL.innerText = ngay_con_lai;
    gioEL.innerText = gio_con_lai;
    phutEL.innerText = phut_con_lai;
    giayEL.innerText = giay_con_lai;
};

setInterval(tinh_thoi_gian, 1000);
// Sử dụng sự kiện onselectstart để ngăn chặn việc chọn văn bản
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});
// Sử dụng sự kiện contextmenu để ngăn chặn hiển thị menu ngữ cảnh khi chuột phải
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});