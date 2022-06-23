function RandomNumbers(number) {

    for (i = 0; i < number; i++) {

        tab.push(Math.random() * (100 - 1) + 1);
    }
}

function PlaceItems() {

    for (let number of tab) {

        let item = document.createElement("div");

        box.appendChild(item);
        item.classList.add("item");
        item.style.height = number + "%";
        item.style.width = 400 / tab.length + "%";
    }
}

async function BubbleSort() {

    sort.disabled = true;

    let items = document.querySelectorAll(".item");
    let n = items.length;

    while (n > 1) {
        for (i = 0; i < n - 1; i++) {

            items[i].classList.toggle("chosen");
            items[i + 1].classList.toggle("chosen");

            window.getComputedStyle(items[i]);
            window.getComputedStyle(items[i + 1]);



            if (items[i].offsetHeight > items[i + 1].offsetHeight) {

                await sleep(1);
                let height1 = items[i].offsetHeight;
                let height2 = items[i + 1].offsetHeight;

                items[i].style.height = height2 + "px";
                items[i + 1].style.height = height1 + "px";

                window.getComputedStyle(items[i]);
                window.getComputedStyle(items[i + 1]);
            }

            items[i].classList.toggle("chosen");
            items[i + 1].classList.toggle("chosen");

            window.getComputedStyle(items[i]);
            window.getComputedStyle(items[i + 1]);

        }
        n--;
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let tab = [];

RandomNumbers(100);

PlaceItems();