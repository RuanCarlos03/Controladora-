let todasascarteiras = [];

function adicionarcarteira() {
    let nomedigitado = document.getElementById("nome-carteira").value;
    
    
    let novacarteira = { id: Date.now(), nome: nomedigitado, saldo: 0 };
    
    todasascarteiras.push(novacarteira);
    console.table(todasascarteiras);
    
  
    atualizartarefa();
}

function removertarefa() {
    let certeza = confirm("Deseja mesmo apagar a última carteira?");
    if (certeza == true) {
        todasascarteiras.pop();
        atualizartarefa(); // 
    } else {
        console.log("Ufa! Exclusão cancelada.");
    }
} 

function atualizartarefa() {
    let localdalista = document.getElementById("sequisersim");
    localdalista.innerHTML = ""; // 

    
    todasascarteiras.forEach(function(item) {
        localdalista.innerHTML += `
            <div class="card-carteira">
                <p><strong>${item.nome}</strong> - R$ ${item.saldo}</p>
                <button onclick="depositar(${item.id})">Depositar +</button>
                 <button onclick="sacar(${item.id})">Sacar </button>
            </div>
        `;
    });
} 

function depositar(idrecebido) {
    let valor = prompt("Quanto deseja depositar?");
    valor = parseFloat(valor);
    
    if (valor > 0) {
        
        let carteira = todasascarteiras.find(item => item.id == idrecebido);
        
        if (carteira) {
            carteira.saldo += valor; 
            atualizartarefa();       
        }
    }
    function sacar (idrecebido) {
        let valor = prompt("Quanto deseja sacar?");
        valor=parseFloat(valor);

        let carteira = todasascarteiras.find(item => item.id == idrecebido);
    
 if (carteira) { 
        if (valor <= carteira.saldo && valor > 0) { 
            carteira.saldo -= valor; 
            atualizartarefa(); 
        } else {
            alert("Operação inválida! Verifique se você tem saldo suficiente.");
        }
    }
}
}