/**
 * Created by irahavoi on 6/1/2015.
 */
var memo = (function(){
    function updateTotal(){
        var total = $("div.memo:visible").length;

        $("#totalMemos").html(total);
    }
    //Public API:
    return {
        init : function(){
            $("div div.recycle").click(function(e){
                console.log('removing a memo')
                $(e.target).closest("div.memo").fadeOut();
                updateTotal();
            });

            updateTotal();
        }
    }
})();

memo.init();
