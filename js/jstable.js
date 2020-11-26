// $(function addLine()
// {
//     var newtr=$("<tr></tr>");
//     $("#tasktb").append(newtr);
//     for(var i=0;i<3;i++)
//     {
//         var newtd=$("<td></td>").text("新栏目数据");

//     }
    
    
// })
function addLine()
{
    var newtr = document.getElementById("tasktr").cloneNode();
    document.getElementById("tasktb").appendChild(newtr);
}
function removeLine()
{

}