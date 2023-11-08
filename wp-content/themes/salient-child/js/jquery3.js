 function SendEmail(x)
	{
	   if(document.getElementById('adaptability1').checked == true) {
		    
			document.getElementById('res_adaptability_score_text').value = document.getElementById('res_adaptability_score_text').value + " <br> " + jQuery("#adaptability1").attr('alt');
		}
		if(document.getElementById('adaptability2').checked == true) {
		
	    	document.getElementById('res_adaptability_score_text').value = document.getElementById('res_adaptability_score_text').value + " <br> " + jQuery("#adaptability2").attr('alt');
		}
		if(document.getElementById('adaptability3').checked == true) {
			document.getElementById('res_adaptability_score_text').value = document.getElementById('res_adaptability_score_text').value + " <br> " + jQuery("#adaptability3").attr('alt');
		}
		if(document.getElementById('adaptability4').checked == true) {
			document.getElementById('res_adaptability_score_text').value = document.getElementById('res_adaptability_score_text').value + " <br> " + jQuery("#adaptability4").attr('alt');
		}
		if(document.getElementById('adaptability5').checked == true) {
			document.getElementById('res_adaptability_score_text').value = document.getElementById('res_adaptability_score_text').value + " <br> " + jQuery("#adaptability5").attr('alt');
		}
		if(document.getElementById('adaptability6').checked == true) {
			document.getElementById('res_adaptability_score_text').value = document.getElementById('res_adaptability_score_text').value + " <br> " + jQuery("#adaptability6").attr('alt');
		}
	  if(document.getElementById('adaptability7').checked == true) {
			     document.getElementById('res_adaptability_score_text').value = document.getElementById('res_adaptability_score_text').value + " <br> " + jQuery("#adaptability7").attr('alt');
		} 
     
		var data = {
			'action': 'skilled_worker_send_Email_action',
			'name':jQuery("#txt-user-Name").val(),
			'lastname':jQuery("#txt-user-lastname").val(),
            'email':jQuery("#txt-user-Email").val(),
           'mobile':jQuery("#txt-user-Mobile").val(),
		   'q1':jQuery("input[name='edureading']:checked").val(),
		   'q2':jQuery("input[name='eduwriting']:checked").val(),
		   'q3':jQuery("input[name='edulistening']:checked").val(),
		   'q4':jQuery("input[name='eduspeak']:checked").val(),
		   'q5':jQuery("input#res_arrange1_emp_score_text").val(),
		   'q6':jQuery("input#res_edu_text").val(),
		   'q7':jQuery("input#res_exp_score_text").val(),
		   'q8':jQuery("input#res_age_score_text").val(),
		   'q9':jQuery("input#res_adaptability_score_text").val(),
		   'q10':jQuery("input#res_arrange_emp_score_text").val(),
		   
		   'results':x
            //'mobile':'+'+countrycode +' '+$("#txt-user-Mobile").val()
		           };
		jQuery.post('../wp-admin/admin-ajax.html', data, function(response) {
           
			if(response){
         
		 jQuery("#res_adaptability_score_text").css("display","block");
                document.getElementById('txt-user-Name').style.border = "solid 1px #ccc";
              document.getElementById('txt-user-Email').style.border = "solid 1px #ccc";
              document.getElementById('txt-user-Mobile').style.border = "solid 1px #ccc";
              jQuery(".loader_image").css("display", "none");
             //jQuery("#process").css("display", "none");
             // jQuery("#result-data").html('<p>Please check your Email to find the calculated score.</p>');
                var engSkills = parseFloat(document.getElementById('tot_eng_skills').value);
  var arrange1Score = parseFloat(document.getElementById('res_arrange1_emp_score').value);
  var eduScore = parseFloat(document.getElementById('res_edu').value);
  var expScore = parseFloat(document.getElementById('res_exp_score').value);
  var ageScore = parseFloat(document.getElementById('res_age_score').value);
  var adaptabilityScore = parseFloat(document.getElementById('res_adaptability_score').value);
  var arrangeEmpScore = parseFloat(document.getElementById('res_arrange_emp_score').value);

  var totalScore = engSkills + arrange1Score + eduScore + expScore + ageScore + adaptabilityScore + arrangeEmpScore;
  
     var final_data = "<h2 class='summaryheading'>Your Results</h2>";
     final_data += "<p><strong>First official language - Scored " + engSkills +"</strong></p>";
    final_data += "<p><strong>Second official language - Scored " + arrange1Score +"</strong></p>";
    final_data += "<p><strong>Education - Scored " + eduScore +"</strong></p>";
    final_data += "<p><strong>Experience - Scored " + expScore +"</strong></p>";
   final_data += "<p><strong>Age - Scored " + ageScore +"</p>";
   final_data += "<p<strong>>Adaptability - Scored " + adaptabilityScore +"</strong></p>";
   final_data += "<p><strong>Arranged Employment in Canada - Scored " + arrangeEmpScore +"</strong></p>";
    final_data += "<h4><strong>Final Score: <span id='final-score'>" + totalScore + "</strong></h4>";
 
    jQuery('#result-data').hide();
    jQuery("#result-data").html(final_data);
    jQuery("#result-data").css("display","block");
    jQuery("#downloadreport1").css("display","block");
    console.log("Email send successfully");
			}
    });
      
	
	}

	function check_edu(s, t) {
		document.getElementById('res_education_div').innerHTML = s;
		document.getElementById('res_edu').value = s;
		document.getElementById('res_edu_text').value = t;

             
	}
	
	
	function check_arrange_score(s,t)
	{
		document.getElementById('res_arrange_score_div').innerHTML = s;
		document.getElementById('res_arrange_emp_score_text').value = t;
		document.getElementById('res_arrange_emp_score').value = s;

	}
		function check_arrange1_score(s,t)
	{
		document.getElementById('res_arrange1_score_div').innerHTML = s;
		document.getElementById('res_arrange1_emp_score_text').value = t;
		document.getElementById('res_arrange1_emp_score').value = s;

	}

	function cal_score() {
		var t = parseFloat(document.getElementById('res_eng_reading').value) + parseFloat(document.getElementById('res_eng_writing').value) + parseFloat(document.getElementById('res_eng_listening').value) + parseFloat(document.getElementById('res_eng_speacking').value);
		document.getElementById('tot_eng_skills').value = t;
	
		return t;
	}

	function check_eng_reading(s) {
		document.getElementById('res_eng_reading').value = s;
		document.getElementById('res_english_div').innerHTML = cal_score();
	
	}

	function check_eng_writing(s) {
		document.getElementById('res_eng_writing').value = s;
		document.getElementById('res_english_div').innerHTML = cal_score();
	
	}

	function check_eng_listening(s) {
		document.getElementById('res_eng_listening').value = s;
		document.getElementById('res_english_div').innerHTML = cal_score();
	
	}

	function check_eng_speaking(s) {
		document.getElementById('res_eng_speacking').value = s;
		document.getElementById('res_english_div').innerHTML = cal_score();
	
	}

	function check_experience(s) {
		var s_text = jQuery('option:selected', s).attr('alt');
		var s = jQuery(s).val();
		if(s != '') {
			document.getElementById('res_exp_div').innerHTML = s;
		} else {
			document.getElementById('res_exp_div').innerHTML = '0';
		}
		document.getElementById('res_exp_score').value = s;
		document.getElementById('res_exp_score_text').value = s_text;
	
	}

	function check_score_age(s) {
		var s_text = jQuery('option:selected', s).attr('alt');
		var s = jQuery(s).val();
		if(s != '') {
			document.getElementById('res_age_score_div').innerHTML = s;
		} else {
			document.getElementById('res_age_score_div').innerHTML = '0';
		}
		document.getElementById('res_age_score').value = s;
		document.getElementById('res_age_score_text').value = s_text;
	
	}

	function check_adaptability_score(el) {
		var txt = jQuery(el).attr('alt');
		var t = 0;
		if(document.getElementById('adaptability1').checked == true) {
			t = t + 5;
			document.getElementById('res_adaptability_score_text').value = document.getElementById('res_adaptability_score_text').value + " <br> " + txt;
		}
		if(document.getElementById('adaptability2').checked == true) {
			t = t + 5;
			document.getElementById('res_adaptability_score_text').value = document.getElementById('res_adaptability_score_text').value + " <br> " + txt;
		}
		if(document.getElementById('adaptability3').checked == true) {
			t = t + 5;
			document.getElementById('res_adaptability_score_text').value = document.getElementById('res_adaptability_score_text').value + " <br> " + txt;
		}
		if(document.getElementById('adaptability4').checked == true) {
			t = t + 10;
			document.getElementById('res_adaptability_score_text').value = document.getElementById('res_adaptability_score_text').value + " <br> " + txt;
		}
		if(document.getElementById('adaptability5').checked == true) {
			t = t + 5;
			document.getElementById('res_adaptability_score_text').value = document.getElementById('res_adaptability_score_text').value + " <br> " + txt;
		}
		if(document.getElementById('adaptability6').checked == true) {
			t = t + 5;
			document.getElementById('res_adaptability_score_text').value = document.getElementById('res_adaptability_score_text').value + " <br> " + txt;
		}
	  if(document.getElementById('adaptability7').checked == true) {
			t = t + 5;
	        document.getElementById('res_adaptability_score_text').value = document.getElementById('res_adaptability_score_text').value + " <br> " + txt;
		}
		
		if(t>10)
		{
			t = 10;
		}
		document.getElementById('res_adaptability_score').value = t;
		document.getElementById('res_adaptability_score_div').innerHTML = t;

	}
	
// Global variable to track if the email has been sent
var emailSent = false;

function cal_final_score() {
  if (emailSent) {
    console.log("Email has already been sent. Not sending again.");
    return;
  }

  var engSkills = parseFloat(document.getElementById('tot_eng_skills').value);
  var arrange1Score = parseFloat(document.getElementById('res_arrange1_emp_score').value);
  var eduScore = parseFloat(document.getElementById('res_edu').value);
  var expScore = parseFloat(document.getElementById('res_exp_score').value);
  var ageScore = parseFloat(document.getElementById('res_age_score').value);
  var adaptabilityScore = parseFloat(document.getElementById('res_adaptability_score').value);
  var arrangeEmpScore = parseFloat(document.getElementById('res_arrange_emp_score').value);

  var totalScore = engSkills + arrange1Score + eduScore + expScore + ageScore + adaptabilityScore + arrangeEmpScore;
  document.getElementById('total_score_calculated').innerHTML = totalScore;

  var final_data = "First official language: " + engSkills +
    "<br/>Second official language: " + arrange1Score +
    "<br/>Education: " + eduScore +
    "<br/>Experience: " + expScore +
    "<br/>Age: " + ageScore +
    "<br/>Adaptability: " + adaptabilityScore +
    "<br/>Arranged Employment in Canada: " + arrangeEmpScore +
    "<br/>Total: " + totalScore;

  // Assuming SendEmail returns a promise
  SendEmail(final_data)
    .then(function() {
      emailSent = true;
      console.log("Email sent successfully.");
    })
    .catch(function(error) {
      console.error("Error sending email:", error);
    });
}

	
jQuery("#process").click(function(){	
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
	          jQuery(".loader_image").css("display", "block");
			 setTimeout(function(){ 
			     //jQuery("#process").css("display", "none");
			     cal_final_score(); 
			     
			 }, 500);
			// jQuery("#result-data").css("display","block");
	     } 
			 
      }
      });
      jQuery(document).ready(function(){

  jQuery("#downloadreport1").click(function() {
    // Generate the report content based on the summary
    var reportContent = jQuery("#result-data").html();

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