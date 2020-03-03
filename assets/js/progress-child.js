$('#pay').click(function() {

    var timerId, percent;
  
    // reset progress bar
    percent = 0;
    $('#pay').attr('disabled', true);
    $('#load').css('width', '0px');
    $('#load').addClass('progress-bar-striped');
  
    timerId = setInterval(function() {
  
      // increment progress bar
      percent += 5;
      $('#load').css('width', percent + '%');
      $('#load').html(percent + '%');
  
  
      if (percent >= 100) {
        clearInterval(timerId);
        $('#pay').attr('disabled', false);
        $('#load').removeClass('progress-bar-striped');
        $('#load').html('payment complete');
      }
    }, 200);
  });