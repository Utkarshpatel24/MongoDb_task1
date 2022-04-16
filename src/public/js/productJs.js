console.log("hello'");

var count =0;
var variationFieldCount = 0;
// var fields;
// var additionalField = [];
function add()
{
    if(count < 0)
    count =0;

    // console.log("add");
    // count++;
    var fields =""
    // for(i=1;i<=count;i++)
    // {
        fields =`<div id="additionalField-${count}"><label class="p-2" >Label Name ${count} <input type="text" name="l_name${count}" ></label>
         <label class="p-2" >Label Value ${count}<input type="text" name="l_value${count}" ></label></div>`;
    // }
    // fields += `<input name="metaCount" value="${count}" style="display:none">`;
    // // console.log(count);
    // document.getElementById('additionalFields').innerHTML=fields;
    count++;
    document.getElementById('additionalFields').innerHTML+=fields;

}
function subtract()
{
    // count--;
    // var fields ="";
    // for(i=1;i<=count;i++)
    // {
    //     fields +=`<label class="p-2">Label Name ${i} <input type="text" name="l_name${i}" ></label>
    //     <label class="p-2">Label Value ${i}<input type="text" name="l_value${i}" ></label>`;
    // }
    // fields += `<input name="metaCount" value="${count}" style="display:none">`;
    // // console.log(count);
    // document.getElementById('additionalFields').innerHTML=fields;
    // console.log("subtract");
    if(count < 0)
    count =0;
    document.getElementById("additionalField-"+(--count)).remove();
}
// function addVariationField()
// {
//     variationFieldCount++;
//     var variationFields = "";
//     for(i=1;i<=variationFieldCount;i++)
//     {
//         variationFields +=`<div class="d-flex justify-content-around"><label class="p-2">Attribute Name ${i} <input type="text" name="a_name${i}" ></label>
//         <label class="p-2">Attribute Value ${i}<input type="text" name="a_value${i}" ></label>
//         <label class="p-2">Price ${i} <input type="text" name="a_price${i}" ></label>
//         </div>`;
//     }
//     variationFields += `<input name="variationCount" value="${variationFieldCount}" style="display:none">`;
//     // console.log(variationFieldCount);
//     document.getElementById('variationFields').innerHTML=variationFields;

// }
// function subtractVariationField()
// {
//     variationFieldCount--;
//     var variationFields = "";
//     for(i=1;i<=variationFieldCount;i++)
//     {
//         variationFields +=`<div class="d-flex justify-content-around"><label class="p-2">Attribute Name ${i} <input type="text" name="a_name${i}" ></label>
//         <label class="p-2">Attribute Value ${i}<input type="text" name="a_value${i}" ></label>
//         <label class="p-2">Price ${i} <input type="text" name="a_price${i}" ></label>
//         </div>`;
//     }
//     variationFields += `<input name="variationCount" value="${variationFieldCount}" style="display:none">`;
//     // console.log(variationFieldCount);
//     document.getElementById('variationFields').innerHTML=variationFields;


// }


function addVariationField()
{
    console.log("reached");
    if(variationFieldCount < 0)
    variationFieldCount = 0;

    var variationFields = "";
 
    variationFields =`<div class="d-flex justify-content-around" id="variation-${variationFieldCount}"><label class="p-2">Variation Name ${variationFieldCount} <input type="text" name="a_name${variationFieldCount}" ></label>
    <div class="d-flex justify-content-around">
    
    </div>
    <label class="p-2">Attribute Value ${variationFieldCount}<input type="text" name="a_value${variationFieldCount}" ></label>
    <label class="p-2">Price ${variationFieldCount} <input type="text" name="a_price${variationFieldCount}" ></label>
    </div>`;
  
    variationFieldCount++;
    document.getElementById('variationFields').innerHTML+=variationFields;
    
}

function subtractVariationField()
{
    if(variationFieldCount < 0)
    variationFieldCount = 0;
 document.getElementById("variation-"+(--variationFieldCount)).remove();
}
function addFieldInVariationField()
{
    var v_add = "";


}
function subtractFieldFromVariationField()
{

}