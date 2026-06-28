// Pegando as informações dos Botões do site para poder atribuir a eles uma função de abrir os links
const btn_github = document.querySelector(".gradient__btn");
const btn_landing_saas = document.getElementById("btn-landing-saas");
const btn_world_cup = document.getElementById("btn-cup");
const btn_growtask = document.getElementById("btn-growtask");

btn_github.addEventListener("click", () => {
	window.open("https://github.com/mauriciolima2701", "_blank");
});

btn_landing_saas.addEventListener("click", () => {
	window.open(
		"https://github.com/mauriciolima2701/landing-page-saas-week",
		"_blank",
	);
});

btn_world_cup.addEventListener("click", () => {
	window.open("https://github.com/mauriciolima2701/event-nlw-copa", "_blank");
});

btn_growtask.addEventListener("click", () => {
	window.open("https://github.com/mauriciolima2701/growtask-reactjs", "_blank");
});

// Deixando a data do footer sempre atualizada
const year_footer = new Date().getFullYear();

document.getElementById("year").textContent = year_footer;

// Ativando o menu hamburguer para mobile e realizado a abertura e fechamento do menu
// Fiz dessa forma para não usar nenhuma biblioteca de ícones
const menu_icon = document.querySelector(".icon__menu");
const navbar = document.querySelector(".header__navbar");

menu_icon.addEventListener("click", () => {
	navbar.classList.toggle("active");

	if (navbar.classList.contains("active")) {
		menu_icon.innerHTML = "✖";
	} else {
		menu_icon.innerHTML = "&#9776;"; // menu ☰
	}
});

// Fechando o menu ao clicar em uma das opções de menu
const links = document.querySelectorAll(".header__navbar ul li a");

// Percorre os links (lista de menus), ao clicar sobre um link ele fecha o menu
links.forEach((link) => {
	link.addEventListener("click", () => {
		navbar.classList.remove("active");
		menu_icon.innerHTML = "&#9776;"; // menu ☰
	});
});

// Validando o formlário de contato
const form = document.querySelector(".contact__form");

// Customizando a mensagem de erro para o formulário, assim evito utilizar o alert
const message_info = document.getElementById("messages");

function showMessage(text, type) {
	message_info.textContent = text;
	message_info.className = `messages ${type} show`;

	setTimeout(() => {
		message_info.classList.remove("show");
	}, 3500);
}

form.addEventListener("submit", (event) => {
	event.preventDefault(); // Impede o envio do formulário, que a página recarregue
	// Pegando os valores dos inputs e utilizando o método trim para tirar os espaços.
	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();
	const message = document.getElementById("message").value.trim();

	if (!name || !email || !message) {
		// alert("Preencha todos os campos.");
		showMessage("Preencha todos os campos.", "error");
		return;
	}

	// alert("Formulário enviado com sucesso!");
	showMessage("Formulário enviado com sucesso!", "success");

	// Limpa os campos, caso o formulário seja enviado com sucesso
	form.reset();
});
