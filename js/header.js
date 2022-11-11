const header = document.querySelector("header#header")
header.innerHTML = `
<nav class="navbar navbar-expand-lg">
<div class="container-fluid">
    <a class="navbar-brand" href="index.html">
        <i class="fas fa-film mr-2"></i>
        Catalog-Z
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link nav-link-1 active" aria-current="page" href="index.html">Hình ảnh</a>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-3" href="about.html">Thông tin</a>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-4" href="contact.html">Liên hệ</a>
        </li>
        <li class="nav-item">
            <button class="nav-link nav-link-5"> <a href="login.html">Đăng nhập</a></button>
        </li>
        <li class="nav-item">
            <button class="nav-link nav-link-6"> <a href="register.html">Đăng ký</a></button>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-8" href="wishlist.html"><i class="fa-solid fa-heart"></i></a>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-7" href="shopping-cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
        </li>
        
    </ul>       
    </div>
</div>
</nav>`