jQuery(document).ready(function($) {
 // Hide Summary sections initially
$('.summaryheading').hide();
$('#summary').hide();
$('#downloadreport').hide();   
function validateName() {
  var name = $('#name').val();
  if (name.trim().length === 0) {
    $('#name').addClass('error');
    alert('Please enter your name.');
    return false;
  } else {
    $('#name').removeClass('error');
    return true;
  }
}

// Validate email
function validateEmail() {
  var email = $('#email').val();
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email)) {
    $('#email').addClass('error');
    alert('Please enter a valid email address.');
    return false;
  } else {
    $('#email').removeClass('error');
    return true;
  }
}
function validatePhoneNumber() {
  var phoneNumber = $('#phone').val();
  var pattern = /^\d{10}$/;
  if (!pattern.test(phoneNumber)) {
    $('#phone').addClass('error');
    alert('Please enter a valid 10-digit phone number.');
    return false;
  } else {
    $('#phone').removeClass('error');
    return true;
  }
}
  var emailSent = false; // Flag variable to track if the email has been sent


 $("#calculatescore").click(function(e) {
      e.preventDefault(); // Prevent the default form submission
    
   if (validatePhoneNumber() && validateEmail() && validateName()) {
    var name = $('#name').val();
      var phone = $('#phone').val();
      var email = $('#email').val();    
    var workExperience = parseInt($("#work-experience").val())|| 0;
    var canadianExperience = parseFloat($("input[name='canadian-experience']:checked").val())|| 0;
    var fullTimeEmployment = parseFloat($("input[name='full-time-employment']:checked").val())|| 0;
    var educationLevel = parseInt($("#education-level").val())|| 0;
    var educationLocation = parseInt($("#education-location").val())|| 0;
    var languageScore = parseInt($("#language-points").val())|| 0;
    var languageProficiency = parseFloat($("input[name='language-proficiency']:checked").val())|| 0;
    var professionalDesignation = parseInt($("#professional-designation").val())|| 0;
    var hourlyWages = parseInt($("#hourly-wage").val())|| 0;
    var employmentArea = parseInt($("#employment-area").val())|| 0;
    var postSecondaryGraduation = parseFloat($("input[name='post-secondary-graduation']:checked").val())|| 0;
    var workExperienceOutside = parseFloat($("input[name='work-experience-outside']:checked").val())|| 0;

    var newValue = (postSecondaryGraduation === 10 || workExperienceOutside === 10) ? 10 : 0;

    var totalScore = workExperience + canadianExperience + fullTimeEmployment + educationLevel + educationLocation + languageScore + professionalDesignation + languageProficiency + hourlyWages + employmentArea + newValue;
    var totalhumanfactor = workExperience + canadianExperience + fullTimeEmployment + educationLevel + educationLocation + professionalDesignation + languageScore + languageProficiency;
    var totalworkexp = workExperience + canadianExperience + fullTimeEmployment;
    var totaleducation = educationLevel + educationLocation + professionalDesignation;
    var totallang = languageScore + languageProficiency;
    var totaleconomic = hourlyWages + employmentArea + newValue;
    var totalarea = employmentArea + newValue;
    var summary = "<h3>Human Factors - Scored <span id='human-factors-score'>" + totalhumanfactor +"</span> out of 120</h3>";
    summary += "<ul>";
    summary += "<li>Work Experience - Scored <span id='work-experience-score-summary'>" + totalworkexp + "</span> out of 40</li>";
    summary += "<li>Education - Scored <span id='education-score-summary'>" + totaleducation + "</span> out of 40</li>";
    summary += "<li>Language Proficiency - Scored <span id='language-score-summary'>" + totallang + "</span> out of 40</li>";
    summary += "</ul>";
    summary += "<h3>Economic Factors - Scored <span id='economic-factors-score'>" + totaleconomic +"</span> out of 80</h3>";
    summary += "<ul>";
    summary += "<li>Hourly Wage of the B.C. Job Offer - Scored <span id='hourly-wage-score-summary'>" + hourlyWages + "</span> out of 55</li>";
    summary += "<li>Area Within B.C. - Scored <span id='employment-area-score-summary'>" + totalarea + "</span> out of 25</li>";
    summary += "</ul>";
    summary += "<p><strong>Final Score: <span id='final-score'>" + totalScore + "</span></strong> out of 200</p>";
    $('.summaryheading').show();
    $('#summary').show();
    $('#downloadreport').show(); 
    $("#summary").html(summary);

    // Send email if not already sent
    if (!emailSent) {
      var formData = $(this).serialize();

      $.ajax({
        url: ajax_object.ajax_url,
        type: "POST",
        data: {
          action: "customnew_send_email",
          'name':jQuery("#name").val(),
          'lastname':jQuery("#lastname").val(),
            'email':jQuery("#email").val(),
            'mobile':jQuery("#phone").val(),
			workExperience: workExperience,
			canadianExperience: canadianExperience,
			fullTimeEmployment: fullTimeEmployment,
			educationLevel: educationLevel,
			educationLocation: educationLocation,
			languageScore: languageScore,
			professionalDesignation: professionalDesignation,
			languageProficiency: languageProficiency,
			hourlyWages: hourlyWages,
			employmentArea: employmentArea,
			newValue: newValue,
            totalScore: totalScore
        },
        beforeSend: function() {
          // Show loading spinner or disable the button if needed
        },
        success: function(response) {
          // Handle the success response
          console.log(response);
          console.log("Email sent successfully");
          // Set emailSent flag to true after successful email send
          emailSent = true;
        },
        error: function(xhr, status, error) {
          // Handle the error response
          console.error(xhr.responseText);
        },
        complete: function() {
          // Re-enable the button or hide the loading spinner
        },
      });
    }
      }
  });

  $("#downloadreport").click(function() {
    // Generate the report content based on the summary
    var reportContent = $("#summary").html();

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

  // Event handler for input changes
  $("#work-experience, input[name='canadian-experience'], input[name='full-time-employment'], #education-level, #education-location, #professional-designation, #language-points, input[name='language-proficiency'], #hourly-wage, #employment-area, input[name='post-secondary-graduation'], input[name='work-experience-outside']").change(function() {
    var elementId = $(this).attr("id"); // Get the ID of the changed element

    switch (elementId) {
      case "work-experience":
        var workExperience = parseInt($(this).val());
        $("#work-experience-score").text(workExperience);
        break;

      case "education-level":
        var educationLevel = parseInt($(this).val());
        $("#education-level-score").text(educationLevel);
        break;
        
    case "education-location":
        var educationLevel = parseInt($(this).val());
        $("#education-location-score").text(educationLevel);
        break;
        
      case "language-points":
        var languageScore = parseInt($(this).val());
        $("#language-points-score").text(languageScore);
        break;

      case "hourly-wage":
        var hourlyWages = parseInt($(this).val());
        $("#hourly-wage-score").text(hourlyWages);
        break;

      case "employment-area":
        var employmentArea = parseInt($(this).val());
        $("#employment-area-score").text(employmentArea);
        break;

      case "professional-designation":
        var professionalDesignation = parseInt($(this).val());
        $("#professional-designation-score").text(professionalDesignation);
        break;

      default:
        // For radio buttons
        var radioName = $(this).attr("name");
        var radioValue = parseFloat($("input[name='" + radioName + "']:checked").val());
        $("#" + radioName + "-score").text(radioValue);
        break;
    }

    // Calculate the total score
    var workExperience = parseInt($("#work-experience-score").text())|| 0;
    var canadianExperience = parseFloat($("#canadian-experience-score").text())|| 0;
    var fullTimeEmployment = parseFloat($("#full-time-employment-score").text())|| 0;
    var educationLevel = parseInt($("#education-level-score").text())|| 0;
    var educationLocation = parseInt($("#education-location-score").text())|| 0;
    var languageScore = parseInt($("#language-points-score").text())|| 0;
    var languageProficiency = parseFloat($("#language-proficiency-score").text())|| 0;
    var professionalDesignation = parseInt($("#professional-designation-score").text())|| 0;
    var hourlyWages = parseInt($("#hourly-wage-score").text())|| 0;
    var employmentArea = parseInt($("#employment-area-score").text())|| 0;
    var postSecondaryGraduation = parseFloat($("#post-secondary-graduation-score").text())|| 0;
    var workExperienceOutside = parseFloat($("#work-experience-outside-score").text())|| 0;

    var newValue = (postSecondaryGraduation === 10 || workExperienceOutside === 10) ? 10 : 0;

    var totalScore = workExperience + canadianExperience + fullTimeEmployment + educationLevel + educationLocation + languageScore + professionalDesignation + languageProficiency + hourlyWages + employmentArea + newValue;

    $("#total-score").text(totalScore);
  });
});
