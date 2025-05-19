function func() {
    let a = document.getElementById("n1").value;
    let b = document.getElementById("n2").value;
    let resposta = fetch('/soma' , {
        method: 'post',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({a,b})
     }
    );
    let valor = resposta.json();
    document.getElementById("resultado").innerHTML = valor;
}