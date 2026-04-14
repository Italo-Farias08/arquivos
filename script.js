document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const salao = document.getElementById("salao").value;
  const numero = document.getElementById("numero").value;
  const email = document.getElementById("email").value;
  const mensagem = `Novo pedido de Agenda Digital
Nome: ${nome}
Salão: ${salao}
WhatsApp: ${numero}
Email: ${email}`;
  const seuNumero = "5581991204180"; 
  const url = `https://wa.me/${seuNumero}?text=${encodeURIComponent(mensagem)}`;
  window.location.href = url;
});