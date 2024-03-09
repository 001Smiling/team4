$(document).ready(function(){
    $('#openTest').click(function () {
        $('#overlay').show();
        $('#question1').show();
    });
    
    $('#closeTest').click(function () {
        $('#overlay').hide();
        $('.question').hide();
        $('#totalCost').text('');
        $('.costtotal').text('');
    });
    
    $('#next1').click(function () {
        var categoryCost = $('input[name="category"]:checked').data('value');
        $('#overlay').data('categoryCost', categoryCost);
    
        var category = $('input[name="category"]:checked').val();
        if (category === 'frontend') {
            $('#question1').hide();
            $('#question2').show();
            $('#questionText').text('Выберите ваши навыки:');
        } else if (category === 'backend') {
            $('#question1').hide();
            $('#question3').show();
        }
        else if (category === 'design') {
            $('#question1').hide();
            $('#question2').hide();
            $('#question3').hide();
            $('#question4').show();
        }
    });
    $('#next5').click(function () {
        $('#question2').hide();
        $('#question6').show();
    });
    $('#next6').click(function () {
        $('#question3').hide();
        $('#question7').show();
    });
    $('#next7').click(function () {
        $('#question4').hide();
        $('#question8').show();
    });
    $('#next11').click(function () {
        $('#question6').hide();
        $('#question11').show();
    });
    $('#next12').click(function () {
        $('#question7').hide();
        $('#question12').show();
    });
    $('#next13').click(function () {
        $('#question8').hide();
        $('#question13').show();
    });
    $('#calculate').click(function () {
        var totalCost = $('#overlay').data('categoryCost');
    
        $('input[name="skill"]:checked').each(function () {
            totalCost += parseInt($(this).data('value'));
        });
        $('#totalCost').text(totalCost);
        $('#question6').hide();
        $('#result').show();
    });
    
    $('#calculate2').click(function () {
        var totalCost = $('#overlay').data('categoryCost');
    
        $('input[name="skill"]:checked').each(function () {
            totalCost += parseInt($(this).data('value'));
        });
        $('.costtotal').text(totalCost);
        $('#question7').hide();
        $('.result2').show();
    });
    $('#calculate3').click(function () {
        var totalCost = $('#overlay').data('categoryCost');
    
        $('input[name="skill"]:checked').each(function () {
            totalCost += parseInt($(this).data('value'));
        });
        $('.costtotal3').text(totalCost);
        $('#question8').hide();
        $('.result3').show();
    });
    });
    $(document).ready(function(){
        $('#openTest2').click(function () {
            $('#overlay').show();
            $('#question1').show();
        });
        
        $('#closeTest').click(function () {
            $('#overlay').hide();
            $('.question').hide();
            $('#totalCost').text('');
            $('.costtotal').text('');
        });
        
        $('#next1').click(function () {
            var categoryCost = $('input[name="category"]:checked').data('value');
            $('#overlay').data('categoryCost', categoryCost);
        
            var category = $('input[name="category"]:checked').val();
            if (category === 'frontend') {
                $('#question1').hide();
                $('#question2').show();
                $('#questionText').text('Выберите ваши навыки:');
            } else if (category === 'backend') {
                $('#question1').hide();
                $('#question3').show();
            }
            else if (category === 'design') {
                $('#question1').hide();
                $('#question2').hide();
                $('#question3').hide();
                $('#question4').show();
            }
        });
        $('#next5').click(function () {
            $('#question2').hide();
            $('#question6').show();
        });
        $('#next6').click(function () {
            $('#question3').hide();
            $('#question7').show();
        });
        $('#next7').click(function () {
            $('#question4').hide();
            $('#question8').show();
        });
        $('#next11').click(function () {
            $('#question6').hide();
            $('#question11').show();
        });
        $('#next12').click(function () {
            $('#question7').hide();
            $('#question12').show();
        });
        $('#next13').click(function () {
            $('#question8').hide();
            $('#question13').show();
        });
        $('#calculate').click(function () {
            var totalCost = $('#overlay').data('categoryCost');
        
            $('input[name="skill"]:checked').each(function () {
                totalCost += parseInt($(this).data('value'));
            });
            $('#totalCost').text(totalCost);
            $('#question6').hide();
            $('#result').show();
        });
        
        $('#calculate2').click(function () {
            var totalCost = $('#overlay').data('categoryCost');
        
            $('input[name="skill"]:checked').each(function () {
                totalCost += parseInt($(this).data('value'));
            });
            $('.costtotal').text(totalCost);
            $('#question7').hide();
            $('.result2').show();
        });
        $('#calculate3').click(function () {
            var totalCost = $('#overlay').data('categoryCost');
        
            $('input[name="skill"]:checked').each(function () {
                totalCost += parseInt($(this).data('value'));
            });
            $('.costtotal3').text(totalCost);
            $('#question8').hide();
            $('.result3').show();
        });
        });