$(document).ready(function() {
    $(document).ready(function() {
        function checkWidth() {
            if ($(window).width() <= 1280) {
                $(".cat").hide(); // Oculta o .cat
                $(".prod").css("display", "inline-block"); // Exibe o .prod lado a lado
            } else {
                $(".cat").css("display", "inline-block"); // Exibe o .cat lado a lado
                $(".prod").hide(); // Oculta o .prod
            }
        }

        // Executa a função quando a página carrega
        checkWidth();

        // Vincula a função ao redimensionamento da janela
        $(window).resize(function() {
            checkWidth();
        });
    });
});