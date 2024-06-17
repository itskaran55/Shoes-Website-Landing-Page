let tgbtn = document.querySelector('.togglebtn')
// let tgbtnicn = document.querySelector('.togglebtn i');
let dropdown = document.querySelector('.dropdown')
let loader = document.getElementById('preloader')
let header = document.querySelector('.header');
let secondheader = document.querySelector('.secondheader');
let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
let txtBtn = document.querySelector('.txtBtn');
let mainimg = document.querySelector('.mainimg');

window.addEventListener("load",() => {
    setTimeout(function(){
        loader.style.display = "none";

        //header
        setTimeout(function(){
            // header.style.opacity = "0";
            // header.style.transform = "translateY(100%)";
            header.style.opacity = "1";
            header.style.transform = "translateY(0%)";
        },500)

        //Subheader 
        setTimeout(function(){
            secondheader.style.opacity = "1";
            secondheader.style.transform = "translateY(0%)";
        },500)

        //Text1 
        setTimeout(function(){
            text1.style.opacity = "1";
            text1.style.transform = "translateX(0%)";
        },500)

        //Text2 
        setTimeout(function(){
            text2.style.opacity = "1";
            text2.style.transform = "translateX(0%)";
        },500)

        //txtBtn 
        setTimeout(function(){
            txtBtn.style.opacity = "1";
            txtBtn.style.transform = "translateX(0%)";
        },500)

        //mainimg 
        setTimeout(function(){
            mainimg.style.opacity = "1";
        },500)

    },1500);
});

//Next page scrolling

// document.addEventListener('DOMContentLoaded', () => {
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {
//         threshold: 0.1
//     });

//     document.querySelectorAll('.hero2, .page2 .pagetext2, .page2 .pageproduct2 .p1, .page2 .pageproduct2 .p2').forEach(el => {
//         observer.observe(el);
//     });
// });


tgbtn.onclick = function () {
    dropdown.classList.toggle('open')

    // let isOpen = dropdown.classList.contains('open')

    // tgbtnicn.classList = isOpen ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'
}


//Fetch Data

async function fetchShoeProducts() {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=shoes`);

        if (!response.ok) {
            throw new Error(`Can't able to fecth ${response.status}`)
        }

        let data = await response.json()
        // console.log(`Data : ${data}`);

        if (data.products && data.products.length > 0) {
            data.products.forEach((product, index) => {
                if (index === 0) {
                    let title = document.querySelector('.title');
                    let price = document.querySelector('.price');
                    title.innerHTML = `${product.title}`;
                    price.innerHTML = `$${product.price}`;

                    //for shoes image
                    document.querySelector('.img1').src = `${product.images[1]}`
                    document.querySelector('.img1').alt = `${product.title}`

                } else if (index === 1) {
                    let title2 = document.querySelector('.title2');
                    let price2 = document.querySelector('.price2');
                    title2.innerHTML = `${product.title}`;
                    price2.innerHTML = `$${product.price}`;

                    //for shoes image
                    document.querySelector('.img2').src = `${product.images[1]}`
                    document.querySelector('.img2').alt = `${product.title}`
                }
            });
        } else {
            console.log('No shoe products found.');
        }


    } catch (error) {
        console.error('Error:', error);
    }
}

fetchShoeProducts();

async function fetchpopularShoes() {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=shoes`);

        if (!response.ok) {
            throw new Error(`Can't able to fecth ${response.status}`)
        }

        let data = await response.json()

        if (data.products && data.products.length > 0) {
            data.products.forEach((product, index) => {
                if (index === 0) {
                    document.querySelector('.pshoe1').src = `${product.thumbnail}`
                    let title = document.querySelector('.populattitle1')
                    let price = document.querySelector('.poplarprice1')

                    title.innerHTML = `${product.title}`
                    price.innerHTML = `$ ${product.price}`
                }
                else if (index === 1) {
                    document.querySelector('.pshoe2').src = `${product.thumbnail}`
                    let title = document.querySelector('.populattitle2')
                    let price = document.querySelector('.poplarprice2')

                    title.innerHTML = `${product.title}`
                    price.innerHTML = `$ ${product.price}`
                }
                else if (index === 2) {
                    document.querySelector('.pshoe3').src = `${product.thumbnail}`
                    let title = document.querySelector('.populattitle3')
                    let price = document.querySelector('.poplarprice3')

                    title.innerHTML = `${product.title}`
                    price.innerHTML = `$ ${product.price}`
                }
                else if (index === 3) {
                    document.querySelector('.pshoe4').src = `${product.thumbnail}`
                    let title = document.querySelector('.populattitle4')
                    let price = document.querySelector('.poplarprice4');

                    title.innerHTML = `${product.title}`
                    price.innerHTML = `$ ${product.price}`
                }
            });
        }
        else {
            console.log('No shoes found..!');
        }
    }

    catch (error) {
        console.error(`Error : ${error}`)
    }
}

fetchpopularShoes()


async function fetchmorepopularShoes() {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=shoes`);

        if (!response.ok) {
            throw new Error(`Can't fetch data, status: ${response.status}`)
        }

        let data = await response.json();

        const elementClasses = [
            { img: '.shoesImg1', title: '.populattitles1', price: '.poplarprices1' },
            { img: '.shoesImg2', title: '.populattitles2', price: '.poplarprices2' },
            { img: '.shoesImg3', title: '.populattitles3', price: '.poplarprices3' },
            { img: '.shoesImg4', title: '.populattitles4', price: '.poplarprices4' },
        ];

        if (data.products && data.products.length > 0) {
            data.products.forEach((product, index) => {
                if (index < elementClasses.length) {
                    document.querySelector(elementClasses[index].img).src = product.images[3];
                    document.querySelector(elementClasses[index].title).innerHTML = product.title;
                    document.querySelector(elementClasses[index].price).innerHTML = `$ ${product.price}`;
                }
            });
        } else {
            console.log('No shoes found..!');
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

fetchmorepopularShoes();


// frequently Asked Questions

document.addEventListener("DOMContentLoaded",() => {
    const faqItem = document.querySelectorAll('.faqItem')

    faqItem.forEach(item => {
        const question = item.querySelector('.faqQuestion');
        const answer = item.querySelector('.faq-answer');
        const arrow = item.querySelector('.arrow');

        question.addEventListener('click',() => {
            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
});