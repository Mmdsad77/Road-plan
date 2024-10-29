// حذف صفحه بارگذاری پس از چند ثانیه
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loadingScreen").style.display = "none";
    }, 1000); // نمایش انیمیشن بارگذاری برای ۱ ثانیه
});

const routeForm = document.getElementById("routeForm");
const processingMessage = document.getElementById("processingMessage");

routeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // نمایش پیام پردازش
    processingMessage.classList.remove("d-none");

    // شبیه‌سازی پردازش داده‌ها
    setTimeout(() => {
        processingMessage.classList.add("d-none");
        alert("بهترین مسیر با موفقیت محاسبه شد!"); // پیام موفقیت
    }, 2000); // شبیه‌سازی پردازش به مدت ۲ ثانیه
});
