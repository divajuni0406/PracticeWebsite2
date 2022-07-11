let listProducts = document.querySelector(".list-products");
for (let i = 1; i <= 3; i++) {
  listProducts.innerHTML += `<div class="box-img">
                                <img src="img/Vector${i}.png" alt="">
                                <hr>
                                <div class="title-img">
                                    <h2>Title Of Articles</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>`;
}

let content = [
  {
    value: `
    <div class="container-img">
        <img src="img/selective-focus-photography-of-green-leaf-plants-on-brown-1105017 1.png" alt="">
    </div> 
    <div class="container-text">
        <h1 id="title-text">ABOUT</h1>
        <hr>
        <p id="paragraf">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
            the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing
            software like Aldus Page Maker including versions of Lorem Ipsum.
            </p>
    </div>`,
  },
];

content.forEach((val) => {
  document.querySelector(".container-content").innerHTML = val.value;
});
