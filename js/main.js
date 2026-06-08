const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach((link) => {
    const linkPage = link.getAttribute("href").split("#")[0];

    if (linkPage === currentPage) {
        link.classList.add("is-active");
    }
});

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-question");

if (questionEl && optionsEl && resultEl && nextBtn) {

    const questions = [
        {
            question: "Qual tecnologia define a estrutura de uma página web?",
            answers: [
                {
                    text: "HTML",
                    description: "Organiza títulos, textos, links, imagens e seções da página.",
                    correct: true
                },
                {
                    text: "CSS",
                    description: "Cuida principalmente da aparência visual da página."
                },
                {
                    text: "Planilha",
                    description: "Serve para organizar dados, cálculos e tabelas."
                },
                {
                    text: "Navegador",
                    description: "É o programa usado para acessar sites e aplicações web."
                }
            ]
        },
        {
            question: "Qual tecnologia é responsável pela aparência visual de uma página web?",
            answers: [
                {
                    text: "HTML",
                    description: "Estrutura o conteúdo."
                },
                {
                    text: "CSS",
                    description: "Define cores, fontes e layout da página.",
                    correct: true
                },
                {
                    text: "JavaScript",
                    description: "Adiciona interatividade."
                },
                {
                    text: "Servidor",
                    description: "Armazena os arquivos do site."
                }
            ]
        },
        {
            question: "Qual tecnologia é usada para adicionar interatividade a um site?",
            answers: [
                {
                    text: "HTML",
                    description: "Estrutura a página."
                },
                {
                    text: "CSS",
                    description: "Define a aparência."
                },
                {
                    text: "JavaScript",
                    description: "Permite criar animações e interações.",
                    correct: true
                },
                {
                    text: "Banco de Dados",
                    description: "Armazena informações."
                }
            ]
        },
        {
            question: "Qual é a principal função de uma planilha eletrônica?",
            answers: [
                {
                    text: "Criar apresentações",
                    description: "Existem ferramentas específicas para isso."
                },
                {
                    text: "Editar imagens",
                    description: "Programas de edição são mais adequados."
                },
                {
                    text: "Organizar dados e realizar cálculos",
                    description: "Planilhas são usadas para controle e análise de informações.",
                    correct: true
                },
                {
                    text: "Criar páginas web",
                    description: "Essa não é sua principal finalidade."
                }
            ]
        },
        {
            question: "O que caracteriza uma senha segura?",
            answers: [
                {
                    text: "Utilizar apenas números simples",
                    description: "Senhas simples são mais fáceis de descobrir."
                },
                {
                    text: "Usar informações pessoais",
                    description: "Isso pode facilitar ataques."
                },
                {
                    text: "Criar uma senha longa com letras, números e símbolos",
                    description: "Essa é uma das melhores práticas de segurança.",
                    correct: true
                },
                {
                    text: "Usar a mesma senha em todos os sites",
                    description: "Isso aumenta os riscos em caso de vazamento."
                }
            ]
        },
        {
            question: "O que é armazenamento em nuvem?",
            answers: [
                {
                    text: "Guardar arquivos apenas no computador",
                    description: "Isso é armazenamento local."
                },
                {
                    text: "Salvar arquivos em servidores acessíveis pela internet",
                    description: "Permite acessar os dados de vários dispositivos.",
                    correct: true
                },
                {
                    text: "Imprimir documentos automaticamente",
                    description: "Não possui relação com a nuvem."
                },
                {
                    text: "Compactar arquivos",
                    description: "É uma função diferente."
                }
            ]
        },
        {
            question: "Qual é uma boa prática de organização digital?",
            answers: [
                {
                    text: "Salvar tudo na área de trabalho",
                    description: "Isso dificulta a organização."
                },
                {
                    text: "Misturar arquivos pessoais e profissionais",
                    description: "Pode causar confusão."
                },
                {
                    text: "Utilizar nomes claros para arquivos e pastas",
                    description: "Facilita encontrar documentos rapidamente.",
                    correct: true
                },
                {
                    text: "Excluir arquivos aleatoriamente",
                    description: "Pode causar perda de informações importantes."
                }
            ]
        }
    ];

    let currentQuestion = 0;

    function loadQuestion() {
        const q = questions[currentQuestion];

        questionEl.textContent = q.question;
        optionsEl.innerHTML = "";

        resultEl.classList.remove("is-visible");
        resultEl.textContent = "";

        nextBtn.style.display = "none";

        q.answers.forEach((answer) => {
            const button = document.createElement("button");

            button.className = "quiz-option";
            button.type = "button";

            button.innerHTML = `
                <h3>${answer.text}</h3>
                <p>${answer.description}</p>
            `;

            button.addEventListener("click", () => {
                resultEl.textContent = answer.correct
                    ? "✅ Resposta correta!"
                    : "❌ Resposta incorreta.";

                resultEl.classList.add("is-visible");
                nextBtn.style.display = "inline-flex";
            });

            optionsEl.appendChild(button);
        });
    }

    nextBtn.addEventListener("click", () => {
        currentQuestion++;

        if (currentQuestion >= questions.length) {
            questionEl.textContent = "Parabéns! Você concluiu o quiz.";
            optionsEl.innerHTML = "";
            resultEl.textContent = "";
            nextBtn.style.display = "none";
            return;
        }

        loadQuestion();
    });

    loadQuestion();
}