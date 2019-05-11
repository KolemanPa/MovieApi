
// $("button.minus-btn").on('click', function(e){
//     console.log("hi");
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());

//     if (value >= 0){
//         value = value -1;
//     } 
//     else {
//         value =0;
//     }
//     $input.val(value);

// });

// $("button.plus-btn").on('click',function(e){
//     console.log("hey");        
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());

//     if (value == 100){
//         value = value +1;
//     }
//     else {
//         value = 100;
//     }
//     $input.val(value);
// });

$(document).ready(function () {

    var hour = new Date().getHours();
    console.log(hour);
    console.log("hey");


    console.log("line 2");
    var httpRequestMovies = new XMLHttpRequest();
    httpRequestMovies.open("get",
        "https://api.themoviedb.org/3/movie/now_playing?page=3&language=en-US&api_key=ad5c12676ca827525a595b9f3614a4a5"
    );
    httpRequestMovies.send();


    $("button.startOrder").click(function () {
        var maxRocket = JSON.parse(httpRequestMovies.responseText);
        var maxFive = maxRocket.count;
        var amntOfMovie = 4;


        for (var i = 0; i < amntOfMovie; i++) {
            var moviesObj = JSON.parse(httpRequestMovies.responseText);
            if (httpRequestMovies.readyState == 4 && httpRequestMovies.status == 200) {
                document.getElementById('row').innerHTML +=
                    "<card source=\"http://image.tmdb.org/t/p/w185/" + moviesObj.results[i].poster_path + "\" text=\"" + moviesObj.results[i].overview + "\" title=\"" + moviesObj.results[i].title + "\"></card>"
                document.getElementById('tableSection').innerHTML +=    
                    "<movietable title=\"" + moviesObj.results[i].title + "\" price=\"9.99\" mtitle=\"" + moviesObj.results[i].title + "\" mid=\"" +moviesObj.results[i].id +"\"></movietable>"

                someVue();

            }
            someVue();

        }
        someVue();


    });




    $("button.minus-btn").click(function(){
        console.log("hi");
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
    
        if (value >= 0){
            value = value -1;
        } 
        else {
            value =0;
        }
        $input.val(value);
    
    });
    
   


});