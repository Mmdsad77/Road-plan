// حذف صفحه بارگذاری پس از چند ثانیه
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loadingScreen").style.display = "none";
    }, 2000); // نمایش انیمیشن بارگذاری برای ۲ ثانیه
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
        alert("بهترین مسیر با موفقیت محاسبه شد!");
    }, 1500); // شبیه‌سازی پردازش به مدت ۱.۵ ثانیه
});