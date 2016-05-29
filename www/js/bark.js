var BARK_ADDUSER = 0;
var BARK_EDITUSER = 1;
var BARK_REMOVEUSER = 2;

var BARK_ADDITEM = 3;
var BARK_EDITITEM = 4;
var BARK_REMOVEITEM = 5;

var BARK_ADDORDER = 6;
var BARK_EDITORDER = 7;
var BARK_REMOVEORDER = 8;

var BARK_CHANGESETTINGS = 9;

var BARK_GETUSER = 10;
var BARK_GETITEM = 11;
var BARK_GETORDER = 12;

var BARK_GETITEMSINGREDIENTS = 13;
var BARK_CONNECTITEMTOINGREDIENT = 14;
var BARK_SETORDERCOMPLETE = 15;
var BARK_ADJUSTPRICEOFITEM = 16;
var BARK_UPDATEMENUVER = 17;
var BARK_TESTARRAYPASSING = 18;
var BARK_PUSHORDERTODRIVER = 19;


// document.getElementById('user_username_input').addEventListener('keyup', function(e){
//    if(barkGetUser(e.srcElement.value) != false){
//       alert('match found!');
//    }
// });
   function clearResponse(){
      $("#responseTextbox").html("");
   }

   function objectifyFields(fieldsAry){
      var obj = {};
      // var fields = ['user_username_input', 'user_password_input', 'user_email_input',
      //               'user_address1_input', 'user_address2_input', 'user_city_input', 'user_state_input',
      //               'user_zip_input', 'user_phone_input', 'item_name_input',
      //               'item_description_input', 'item_price_input', 'item_isIngredient_input',
      //               'category_id_input', 'item_id_input', 'ingredient_item_id_input'];
      // var fieldsAry = [];
      //
      // for (var i = 0; i < fields.length; i++){
      //    console.log("trying to get " + fields[i] + "'s value");
      //    var iteration = document.getElementById(fields[i]).value;
      //    console.log("   success");
      //    if( (typeof iteration != "undefined") && (iteration != null) && (iteration != "") ){
      //       fieldsAry[fieldsAry.length] = fields[i];
      //    }
      // }
      // console.log("fields" + fields);
      console.log("fieldsAry: " + fieldsAry);

      for(var i = 0; i < fieldsAry.length; i++){
         obj[fieldsAry[i]] = document.getElementById(fieldsAry[i]).value;
      }

      console.log(obj);
      return obj;
   }

   function barkSwitchboard(request, ary){
         request = parseInt(request);
      var xhr = new XMLHttpRequest();
      var url = 'http://www.hydrogenstudios.com/JamesValenti/workin/intentionallyTerribleDirectoryName/bark_new/bark.php';
      var barkObject = objectifyFields(ary);
      console.log("request: " + request);

      switch(request){
         case BARK_ADDUSER:
            console.log("I am in BARK_ADDUSER");
            xhr.open('POST', url, true);
            var data = new FormData();
            data.append("bark_method", BARK_ADDUSER);
            data.append("user_username_input", barkObject.user_username_input);
            data.append("user_password_input", barkObject.user_password_input);
            data.append("user_email_input", barkObject.user_email_input);
            data.append("user_address1_input", barkObject.user_address1_input);
            data.append("user_address2_input", barkObject.user_address2_input);
            data.append("user_city_input", barkObject.user_city_input);
            data.append("user_state_input", barkObject.user_state_input);
            data.append("user_zip_input", barkObject.user_zip_input);
            data.append("user_phone_input", barkObject.user_phone_input);

            xhr.onload = function () {
               console.log(this.responseText);
               $("#responseTextbox").html(this.responseText);
            };
            xhr.send(data);
            break;

         case BARK_EDITUSER:
            console.log("I am in BARK_EDITUSER");
            xhr.open('POST', url, true);
            var data = new FormData();

            data.append('bark_method', BARK_EDITUSER);

            for(var prop in barkObject){
               data.append(prop, barkObject[prop]);
            }

            xhr.onload = function () {
               console.log(this.responseText);
               $("#responseTextbox").html(this.responseText);
            };
            xhr.send(data);
            break;

         case BARK_REMOVEUSER:
            console.log("I am in BARK_REMOVEUSER");
            xhr.open('POST', url, true);
            var data = new FormData();
            data.append("bark_method", BARK_REMOVEUSER);
            data.append("user_username_input", barkObject.user_username_input);
            xhr.onload = function(){
               console.log(this.responseText);
               $("#responseTextbox").html(this.responseText);
            };
            xhr.send(data);
            break;

         case BARK_ADDITEM:
            console.log("I am in BARK_ADDITEM");
            xhr.open('POST', url, true);
            var data = new FormData();
            data.append("bark_method", BARK_ADDITEM);
            data.append("item_name_input", barkObject.item_name_input);
            data.append("item_description_input", barkObject.item_description_input);
            data.append("item_price_input", barkObject.item_price_input);
            data.append("item_isIngredient_input", barkObject.item_isIngredient_input);
            data.append("category_id_input", barkObject.category_id_input);

            xhr.onload = function () {
               console.log(this.responseText);
               $("#responseTextbox").html(this.responseText);
            };
            xhr.send(data);
            break;

         case BARK_EDITITEM:
            console.log("I am in BARK_EDITITEM");
            xhr.open('POST', url, true);
            var data = new FormData();

            data.append('bark_method', BARK_EDITITEM);

            for(var prop in barkObject){
               data.append(prop, barkObject[prop]);
            }

            console.log("xhr: ");
               console.table(xhr);
            console.log("data: ");
               console.table(data);
            xhr.onload = function () {
               console.log(this.responseText);
               $("#responseTextbox").html(this.responseText);
            };
            xhr.send(data);
            break;

         case BARK_REMOVEITEM:
            console.log("I am in BARK_REMOVEITEM");
            xhr.open('POST', url, true);
            var data = new FormData();
            data.append("bark_method", BARK_REMOVEITEM);
            data.append("item_name_input", barkObject.item_name_input);
            xhr.onload = function(){
               console.log(this.responseText);
               $("#responseTextbox").html(this.responseText);
            };
            xhr.send(data);
            break;

         case BARK_ADDORDER:
            //TODO:Add this
            conole.log("I am in BARK_ADDORDER");
            xhr.open("POST", url, true);
            var data = new FormData();
            data.append("bark_method", BARK_ADDORDER);
            data.append("user_id_input", barkObject.user_id_input);
            break;

         case BARK_EDITORDER:
         console.log("I am in BARK_EDITORDER");
         xhr.open('POST', url, true);
         var data = new FormData();

         data.append('bark_method', BARK_EDITORDER);

         for(var prop in barkObject){
            data.append(prop, barkObject[prop]);
         }

         xhr.onload = function () {
            console.log(this.responseText);
            $("#responseTextbox").html(this.responseText);
         };
         xhr.send(data);
            break;

         case BARK_REMOVEORDER:
            console.log("I am in BARK_REMOVEORDER");
            xhr.open('POST', url, true);
            var data = new FormData();
            data.append("bark_method", BARK_REMOVEORDER);
            data.append("order_id_input", barkObject.order_id_input);
            xhr.onload = function(){
               console.log(this.responseText);
               $("#responseTextbox").html(this.responseText);
            };
            break;

         case BARK_CHANGESETTINGS:
            barkChangeSettings(barkObject);
            break;

         case BARK_GETUSER:
            var xhr = new XMLHttpRequest();

            var userid = barkObject.user_username_input;
            url += "?bark_method=10&user_username_input=" + userid;
               console.log(url);
            xhr.open('GET', url, true);
            xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
            
            xhr.onload = function () {
               console.log(this.responseText);
               $("#responseTextbox").html(this.responseText);
            };
            xhr.send();
            break;

         case BARK_GETITEM:
            var xhr = new XMLHttpRequest();
            var itemid = barkObject.item_id_input;
            url += "?bark_method=11&item_id_input=" + itemid;
               console.log(url);
            xhr.open('GET', url, true);

            xhr.onload = function () {
               console.log(this.responseText);
               $("#responseTextbox").html(this.responseText);
            };
            xhr.send();
            break;

         case BARK_GETORDER:
            var xhr = new XMLHttpRequest();
            var orderid = barkObject.order_id_input;
            url += "?bark_method=12&order_id_input=" + orderid;
               console.log(url);
            xhr.open('GET', url, true);

            xhr.onload = function () {
               console.log(this.responseText);
               $("#responseTextbox").html(this.responseText);
            };
            xhr.send();
            break;

         case BARK_TESTARRAYPASSING:
            xhr.open("POST", url, true);

            var theAry = new Array('aryItem1', 'aryItem2', 'AryItem3');
            var theSecondAry = new Array("aryItem4", "aryItem5", "aryItem6");
            var obj = {'firstAry': theAry, 'secondAry': theSecondAry};
            console.log("obj is :");
            console.table(obj);
            console.log("stringed is: ");
            console.log(JSON.stringify(obj));

            var data = new FormData();
            data.append("bark_method", BARK_TESTARRAYPASSING);
            data.append("theArray", JSON.stringify(obj));

            xhr.onload = function () {
               console.log(this.responseText);
               $("#responseTextbox").html(this.responseText);
               var parsedObj = JSON.parse(this.responseText);
               console.log("parsedObj: ");
               console.table(parsedObj);
            };

            xhr.send(data);
            break;

         default:
            console.log("I have defaulted");
            break;
      }
   }

   //
   //END OF SWITCHBOARD
   //
