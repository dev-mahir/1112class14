// Age calculator

const ageCal_form = document.getElementById("ageCal-form");
const show_age = document.getElementById("age-result");

ageCal_form.addEventListener("submit", function (e) {
    e.preventDefault();

    let date = this.querySelector("select[name=birthdate]").value;
    let month = this.querySelector("select[name=birthmonth]").value;
    let year = this.querySelector("select[name=birthyear]").value;

    // get current date
    let c_date = new Date();

    let c_dat = c_date.getDate();
    let c_month = c_date.getMonth(); // 0-11
    let c_year = c_date.getFullYear();

    let b_date, b_month, b_year;

    let cm;
    function check_month(month) {
        switch (month) {
            case 0:
                cm = 31;
                break;
            case 1:
                cm = 28;
                break;
            case 2:
                cm = 30;
                break;
            case 3:
                cm = 31;
                break;
            case 4:
                cm = 30;
                break;
            case 5:
                cm = 31;
                break;

            case 6:
                cm = 30;
                break;

            case 7:
                cm = 31;
                break;

            case 8:
                cm = 31;
                break;

            case 9:
                cm = 30;
                break;

            case 10:
                cm = 31;
                break;

            case 11:
                cm = 30;
                break;

            case 12:
                cm = 31;
                break;

            default:
                break;
        }
    }
    check_month(c_month);


    if (c_dat < date) {
        b_date = cm + c_dat - date;
    } else {
        b_date = c_dat - date;
    }

    if (c_month < month) {
        b_month = 12 + c_month + 1 - month;
    } else {
        b_month = c_month + 1 - month;
    }

    if (c_month < month) {
        b_year = c_year - 1 - year;
    } else {
        b_year = c_year - year;
    }


  if( b_month >= 12 ){
      b_month = 12 - b_month;
      b_year = b_year + 1
  }else{
      b_year = b_year;
      b_month = b_month
  }

    show_age.innerHTML = `<p class="show_result">  ${b_year} years ${b_month}  months ${b_date} days</p>`;
});



// Product section 
const add_pro_form = document.getElementById("add-pro-form");
const add_pr_btn = document.getElementById("add-pro-btn");
const close_add_btn = document.getElementById("close-add-pro-form");
const add_product_form = document.querySelector(".add-product-form");
const product_show = document.getElementById("product-show");

add_pr_btn.addEventListener("click", function () {
    add_product_form.style.display = "block";
});
close_add_btn.addEventListener("click", function () {
    add_product_form.style.display = "none";
});


add_pro_form.addEventListener("submit", function (e) {
    e.preventDefault();

    let title = this.querySelector('input[name=title]');
    let image = this.querySelector('input[name=image]');
    let regular_price = this.querySelector('input[name=regu_price]');
    let sale_price = this.querySelector('input[name=sale_price]');
    let discount = this.querySelector('input[name=discount]');



    if( title.value == '' || image.value == '' || regular_price == ''){
        alert('All fields are required');
    }
    else{
        let pro_arr = [];
    if( getData('product')){
        pro_arr = getData('product');
    }else{
        pro_arr = [];
    }

    pro_arr.push({
        title : title.value,
        image : image.value,
        re_price : regular_price.value,
        sale_price : sale_price.value,
        discount : discount.value
    });
    sendData("product", pro_arr);
    getData();
    all_products();
    }
});

function all_products(){
    let all_pro;
    if (dataGet("product")) {
        all_pro = getData('product');
    } else {
        all_pro = [];
    }
    let all_products = '';
    all_pro.map((data) => {
        all_products += `
        <div class="col-lg-4 mt-2">
        <div class="product-content">
          <div class="card">
            <p class="discount">${data.discount}%</p>
            <img class="card-image img-fluid" style="width: 100%; height: 280px; object-fit: cover;" src="${data.image}"  alt="">
            <div class="card-body">
              <h3 class="pro-title">${data.title}</h3>
              <p>Regular price: <span id="r_price">$${data.re_price}</span></p>
              <p>Sale price: <span id="s_price">$${data.sale_price}</span></p>
              <button class="btn btn-success mt-3"> Add to cart</button>
            </div>
          </div>
        </div>
      </div>
        `;
    });
    product_show.innerHTML = all_products;
}
all_products();





// Team member section 

const devs_form = document.getElementById("devs_form");
const devs_area = document.getElementById("devs_area");

devs_form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = this.querySelector('input[name= "name"]');
    let id = this.querySelector('input[name= "id"]');
    let gender = this.querySelector('input[name= "gender"]:checked');
    let skill = this.querySelectorAll('input[name= "skill"]:checked');
    let image = this.querySelector('input[name= "photo"]');

    if (
        name.value == "" ||
        id.value == "" ||
        gender.value == "" ||
        skill == "" ||
        image.value == ""
    ) {
        alert("All fields are required");
    } else {
        let skills_arr = [];

        for (let i = 0; i < skill.length; i++) {
            skills_arr.push(skill[i].value);
        }

        let data_arr;
        if (dataGet("devs")) {
            data_arr = dataGet("devs");
        } else {
            data_arr = [];
        }

        data_arr.push({
            name: name.value,
            id: id.value,
            gender: gender.value,
            skills: skills_arr,
            image: image.value,
        });

        sendData("devs", data_arr);

        allDevs();
    }
});

function allDevs() {
    let all_devs;
    if (dataGet("devs")) {
        all_devs = dataGet("devs");
    } else {
        all_devs = [];
    }
    let showData = "";
    all_devs.map((data) => {
        let lists = "";
        data.skills.map((list) => {
            lists += `<li class="list-group-item">${list}</li>`;
        });
        showData += `
        <div class="col-lg-4 mb-3">
        <div class="card">
          <img style="width: 100%; height: 280px; object-fit: cover;" class="card-img-top" src="${data.image}" alt="team-member">

          <div class="card-body">
            <h3 class="text-center">${data.name}</h3>
          <div class="d-flex justify-content-between info">
            <h4>Id: ${data.id}</h4>
            <h4>Gender: <span>${data.gender}</span></h4>
          </div>
          
          <ol class="list-group list-group-numbered mt-2">
            <span>Skills:</span>
            ${lists}
          </ol>
          </div>
        </div>
      </div>
      `;
    });

    devs_area.innerHTML = showData;
}

allDevs();



