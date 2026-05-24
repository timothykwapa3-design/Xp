
<script>
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('ogCart') || '[]');
        document.getElementById('cartCount').textContent = cart.reduce((a,i)=>a+i.qty,0);
    }
    function addToCart(name, price) {
        let cart = JSON.parse(localStorage.getItem('ogCart') || '[]');
        const ex = cart.find(i=>i.name===name);
        if(ex) ex.qty++; else cart.push({name,price,qty:1});
        localStorage.setItem('ogCart', JSON.stringify(cart));
        updateCartCount();
        const btn = event.target;
        btn.textContent='Added ✓'; btn.style.background='#2a7a2a';
        setTimeout(()=>{btn.textContent='Add to Cart';btn.style.background='';},1500);
    }
    updateCartCount();
</script>


<script>
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('ogCart') || '[]');
        document.getElementById('cartCount').textContent = cart.reduce((a, i) => a + i.qty, 0);
    }

    function handleSubmit(btn) {
        document.querySelector('.contact-form').style.display = 'none';
        document.getElementById('successMsg').style.display = 'block';
    }

    updateCartCount();
</script>


<script>
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('ogCart') || '[]');
        document.getElementById('cartCount').textContent = cart.reduce((a, i) => a + i.qty, 0);
    }
    updateCartCount();
</script>

<script>
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('ogCart')||'[]');
        document.getElementById('cartCount').textContent = cart.reduce((a,i)=>a+i.qty,0);
    }
    function addToCart(name,price) {
        let cart = JSON.parse(localStorage.getItem('ogCart')||'[]');
        const ex = cart.find(i=>i.name===name);
        if(ex) ex.qty++; else cart.push({name,price,qty:1});
        localStorage.setItem('ogCart',JSON.stringify(cart));
        updateCartCount();
        const btn=event.target;
        btn.textContent='Added ✓';btn.style.background='#2a7a2a';
        setTimeout(()=>{btn.textContent='Add to Cart';btn.style.background='';},1500);
    }
    function filterProducts(cat,btn) {
        document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.category-group').forEach(g=>{
            g.style.display=(cat==='all'||g.id===cat)?'block':'none';
        });
    }
    updateCartCount();
</script>
