let count = 0;
let stars = "";

while (count < 10) {
    stars = stars + "⭐"
    count = count + 1
}
document.write(stars); // ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

document.write("<br>" + count); // 10