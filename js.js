const createNav=()=>{
    let nav = document.querySelector('.navbar');
    nav.innerHTML='<div class="nav">
    <img src="file:///C:/Users/Nikhith.R/Pictures/2021-12/IMG_20211231_191542.jpg" class="brand-logo" alt " ">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box " placeholder="search-brand,product">
            <button class="search-btn"><img src="file:///C:/Users/Nikhith.R/Pictures/2022-01/IMG_20220101_191334.jpg" class="search-img" alt="" width="25px" height="25px"></button>           
        </div>
        <a href="#"><img src=" file:///C:/Users/Nikhith.R/Pictures/2022-01/IMG_20220101_192959.jpg" alt="" width="30px" height="30px"></a>
        <a href="#"><img src="file:///C:/Users/Nikhith.R/Pictures/2021-12/cart.png " alt=""></a>
    </div>
    </div>      
<ul class="links-container">
    <li class="link-item"><a href="#" class="link">Home</a></li>
    <li class="link-item"><a href="#" class="link">Women</a></li>
    <li class="link-item"><a href="#" class="link">Men</a></li>
    <li class="link-item"><a href="#" class="link">Kids</a></li>
    <li class="link-item"><a href="#" class="link">Accessories</a></li>
</ul> 
';
}
createNav();