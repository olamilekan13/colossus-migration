var first, second, third, fourth, fourthb, fifth, sixth, seventh, eighth, ninth;
     function SendEmail(x)
	{
     
		var data = {
			'action': 'snip_send_Email_action',
			'name':jQuery("#txt-user-Name").val(),
            'lastname':jQuery("#txt-user-lastname").val(),
            'email':jQuery("#txt-user-Email").val(),
           'mobile':jQuery("#txt-user-Mobile").val(),
		   'q1':jQuery("#education option:selected").text(), 
		   'q2':jQuery("#language_en option:selected").text(),
           'q2b':jQuery("#language_enfr option:selected").text(),
		   'q3':jQuery("#age option:selected").text(),
		   'q4':jQuery("input[name='full-time']:checked").val(),
		   'q5':jQuery("input[name='past-five-exp']:checked").val(),
		   'q6':jQuery("input[name='exp-sask1']:checked").val(),
		   'q7':jQuery("input[name='past-six-exp']:checked").val(),
		   'q8':jQuery("input[name='exp-sask']:checked").val(),
		   'q9':jQuery("input[name='family-relative']:checked").val(),
		   'results':x
            //'mobile':'+'+countrycode +' '+$("#txt-user-Mobile").val()
		           };
		jQuery.post('../wp-admin/admin-ajax.html', data, function(response) {
           
			if(response){
			    jQuery(".loader_image").css("display", "none");
			     var total = first + second + third + forth + forthb + fifth + sixth + seventh + eighth + ninth;
            var final_data1=first;
            var final_data2=second + third + forth + forthb;
            var final_data3=fifth + sixth + seventh + eighth;
            var final_data4=ninth;
            
            
            var finanl_data = "<p>Education and Training: " +final_data1+ "</p><p>Language Ability: " +final_data2+ "</p><p>Skilled Work Experience: " +final_data3+ "</p><p>Close Family Relative in Saskatchewan: " +final_data4+ "</p><h4>Total: "+total+"</h4><br/>";
            
             document.getElementById("TotalScore").innerHTML =
                "<h2>Your Results</h2><br/> <strong>" + finanl_data + "</strong> You are eligible for Saskatchwan Immigration Nominee Program.\n Contact one of our immigration experts and start your Process today."
              //jQuery("#TotalScore").html('<p>Please check your Email to find the calculated score.</p>');
              
              jQuery(".loader_image").css("display", "none");
              
			}
    });
      
	
	}

    jQuery(document).on("change", function total() {
        first = document.getElementById("age").value;
        if (first == "under18") {
            first = 00;
            document.getElementById("AgeScore").innerHTML = "Score 0";
        } else if (first == "18to21") {
            first = 08;
            document.getElementById("AgeScore").innerHTML = "Score 8";
        } else if (first == "22to34") {
            first = 12;
            document.getElementById("AgeScore").innerHTML = "Score 12";
        } else if (first == "35to45") {
            first = 10;
            document.getElementById("AgeScore").innerHTML = "Score 10";
        } else if (first == "46and50") {
            first = 08;
            document.getElementById("AgeScore").innerHTML = "Score 8";
        } else if (first == "50over") {
            first = 00;
            document.getElementById("AgeScore").innerHTML = "Score 0";
        } else {
            first = 00;
        }
        second = document.getElementById("education").value;
        if (second == "MasterPhD") {
            second = 23;
            document.getElementById("EducationScore").innerHTML = "Score 23";
        } else if (second == "Bachelor") {
            second = 20;
            document.getElementById("EducationScore").innerHTML = "Score 20";
        } else if (second == "Trade") {
            second = 20;
            document.getElementById("EducationScore").innerHTML = "Score 20";
        } else if (second == "2yr-degree") {
            second = 15;
            document.getElementById("EducationScore").innerHTML = "Score 15";
        } else if (second == "1yr-degree") {
            second = 12;
            document.getElementById("EducationScore").innerHTML = "Score 12";
        } else {
            second = 00;
        }
        third = jQuery("[name=full-time]:checked").val();
        if (third == "Yes") {
            third = 05;
            document.getElementById("FullTimeScore").innerHTML = "Score 05";
        } else {
            third = 00;
            document.getElementById("FullTimeScore").innerHTML = "Score 00";
        }
        forth = document.getElementById("language_en").value;
        if (forth == "8") {
            forth = 20;
            document.getElementById("LanguageScore").innerHTML = "Score 20";
        } else if (forth == "7") {
            forth = 18;
            document.getElementById("LanguageScore").innerHTML = "Score 18";
        } else if (forth == "6") {
            forth = 16;
            document.getElementById("LanguageScore").innerHTML = "Score 16";
        } else if (forth == "5") {
            forth = 14;
            document.getElementById("LanguageScore").innerHTML = "Score 14";
        } else if (forth == "4") {
            forth = 12;
            document.getElementById("LanguageScore").innerHTML = "Score 12";
        } else {
            forth = 0;
            document.getElementById("LanguageScore").innerHTML = "Score 00";
        }
        forthb = document.getElementById("language_enfr").value;
        if (forthb == "8") {
            forthb = 10;
            document.getElementById("LanguageScoreb").innerHTML = "Score 10";
        } else if (forthb == "7") {
            forth = 8;
            document.getElementById("LanguageScoreb").innerHTML = "Score 8";
        } else if (forthb == "6") {
            forth = 6;
            document.getElementById("LanguageScoreb").innerHTML = "Score 6";
        } else if (forthb == "5") {
            forth = 4;
            document.getElementById("LanguageScoreb").innerHTML = "Score 4";
        } else if (forthb == "4") {
            forthb = 2;
            document.getElementById("LanguageScoreb").innerHTML = "Score 2";
        } else {
            forthb = 0;
            document.getElementById("LanguageScoreb").innerHTML = "Score 00";
        }
        fifth = jQuery("[name=past-five-exp]:checked").val();
        if (fifth == "1") {
            fifth = 02;
            document.getElementById("PastFiveScore").innerHTML = "Score 02";
        } else if (fifth == "2") {
            fifth = 04;
            document.getElementById("PastFiveScore").innerHTML = "Score 04";
        } else if (fifth == "3") {
            fifth = 06;
            document.getElementById("PastFiveScore").innerHTML = "Score 06";
        } else if (fifth == "4") {
            fifth = 08;
            document.getElementById("PastFiveScore").innerHTML = "Score 08";
        } else if (fifth == "5") {
            fifth = 10;
            document.getElementById("PastFiveScore").innerHTML = "Score 10";
        } else {
            fifth = 00;
        }
        sixth = jQuery("[name=past-six-exp]:checked").val();
        if (sixth == "1") {
            sixth = 00;
            document.getElementById("PastSixScore").innerHTML = "Score 00";
        } else if (sixth == "2") {
            sixth = 02;
            document.getElementById("PastSixScore").innerHTML = "Score 02";
        } else if (sixth == "3") {
            sixth = 03;
            document.getElementById("PastSixScore").innerHTML = "Score 03";
        } else if (sixth == "4") {
            sixth = 04;
            document.getElementById("PastSixScore").innerHTML = "Score 04";
        } else if (sixth == "5") {
            sixth = 05;
            document.getElementById("PastSixScore").innerHTML = "Score 05";
        } else {
            sixth = 00;
        }
        seventh = jQuery("[name=exp-sask]:checked").val();
        if (seventh == "Yes") {
            seventh = 05;
            document.getElementById("ExpSaskScore").innerHTML = "Score 05";
        } else {
            seventh = 00;
            document.getElementById("ExpSaskScore").innerHTML = "Score 00";
        }
        
        ninth = jQuery("[name=exp-sask1]:checked").val();
        if (ninth == "Yes") {
            ninth = 30;
            document.getElementById("ExpSaskScore1").innerHTML = "Score 30";
        } else {
            ninth = 00;
            document.getElementById("ExpSaskScore1").innerHTML = "Score 00";
        }
        
        eighth = jQuery("[name=family-relative]:checked").val();
        if (eighth == "Yes") {
            eighth = 20;
            document.getElementById("FamilyRelativeScore").innerHTML = "Score 20";
        } else {
            eighth = 00;
            document.getElementById("FamilyRelativeScore").innerHTML = "Score 00";
        }
        
        var additionalPoint = sixth+seventh+eighth;
        if(ninth==30)
        {
            sixth =00;
            seventh=00;
            eighth=00;
        }
        if(additionalPoint<30 && ninth==30)
        {
            sixth =00;
            seventh=00;
            eighth=00;
            ninth =30;
        }
        
    });
    function total2()
    {
   var phoneNumber=jQuery.trim(jQuery('#txt-user-Mobile').val());
   var phoneno = /^\d{10}$/;
   var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   var emailID = jQuery.trim(jQuery('#txt-user-Email').val());
   if(phoneNumber.match(phoneno))
	     {
	         
	     } 
	     else
	     {
	       alert("Invalid Phone Number...");  
	     }
	      if(emailID.match(mailformat))
	      {
	          
	      }
	      else
	      {
	          alert("Invalid Email...");
	      }
        if(jQuery.trim(jQuery('#txt-user-Name').val()) === ''){
      alert('Please Enter Your Name..!');
       document.getElementById('txt-user-Name').style.border = "solid 1px red";
         jQuery('#txt-user-Name').focus();
   }
    else if(jQuery.trim(jQuery('#txt-user-Email').val()) === ''){
      alert('Please Enter Your Email..!');
        document.getElementById('txt-user-Email').style.border = "solid 1px red";
         jQuery('#txt-user-Email').focus();
   }
    
     else if(jQuery.trim(jQuery('#txt-user-Mobile').val()) === ''){
      alert('Please Enter Your Mobile Number..!');
        document.getElementById('txt-user-Mobile').style.border = "solid 1px red";
        jQuery('#txt-user-Mobile').focus();
   }
	 else {
	     if(phoneNumber.match(phoneno) && emailID.match(mailformat))
	     {
			 
			 jQuery(".loader_image").css("display", "none");
			 setTimeout(function(){ 
			     //jQuery("#process").css("display", "none");
			    total1();
			     
			 }, 500);
	     } 	 
			
      }
    }
    
    function total1() {
        var total = first + second + third + forth + forthb + fifth + sixth + seventh + eighth + ninth;
        var final_data1=first;
        var final_data2=second + third + forth + forthb;
        var final_data3=fifth + sixth + seventh + eighth;
        var final_data4=ninth;
        var finalscore = final_data1 + final_data2 + final_data3 + final_data4;
        
        var finanl_data = "Education and Training: " +final_data1+ "<br/>Language Ability: " +final_data2+ "<br/>Skilled Work Experience: " +final_data3+ "<br/>Close Family Relative in Saskatchewan: " +final_data4+ "<br/>Total: "+finalscore+"<br/>";
        
        if (total < 60) {
            var result = (document.getElementById("TotalScore").innerHTML =
                "<h2>Sorry,</h2> your SINP scores are <strong>" +
                finanl_data +
                "</strong> you are not eligible for Saskatchwan Immigration Nominee program. You need minimum 60 points to be eligible for the program. \n Know more about how to increase your Scores here..");
           // document.getElementById("TotalScore").style.display = "block";
            setTimeout(function(){ SendEmail(result);  }, 500);
            localStorage.setItem("objectToPass", result);
            
        } else {
           // document.getElementById("TotalScore").style.display = "block";
            var result = (document.getElementById("TotalScore").innerHTML =
                "<h2>Congratulations!</h2><br/> <h3>Your scores are</h3><br/> <strong>" + finanl_data + "</strong> You are eligible for Saskatchwan Immigration Nominee Program.\n Contact one of our immigration experts and start your Process today.");
            //SendEmail(result);
            setTimeout(function(){ SendEmail(result);  }, 500);
            document.getElementById("TotalScore").style.display = "block";
			//   document.getElementById("downloadreport2").style.display = "block";
            jQuery("#downloadreport2").css("display","block");
            localStorage.setItem("objectToPass", result);
            
        }
    }
    
          jQuery(document).ready(function(){

  jQuery("#downloadreport2").click(function() {
    // Generate the report content based on the summary
    var reportContent = jQuery("#TotalScore").html();

    // Set the appropriate headers for downloading
    var blob = new Blob([reportContent], { type: "text/html;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "report.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
});