console.log("Probando Jquery");

//*********************//
$("#pageLinks > li > a").on("click", function(e) {
    e.preventDefault();
    let url = $(this).attr("href")
    console.log(url);
    window.history.pushState("object", "new url", url);
    loadPage(url)
});
//***/
const loadPage = pageName => {
        console.log(pageName);
        let pageURL = `sites/${pageName}`;
        console.log(pageURL);
        $.ajax({
            url: pageURL,
            success: function(data) {
                $("#main").html(data)
            },
            Error: function() {
                $("#main").text("página no encontrada")
            }
        })
    }
    /***/
window.onpopstate = e => {
    loadNextPage(location.pathname)
}

function loadNextPage(nextPage) {
    let str = nextPage;
    let n = str.lastIndexOf("/")
    let result = str.substring(n + 1)
    console.log(result)
}