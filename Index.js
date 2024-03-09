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
    });
    
    $('#calculate').click(function () {
        var totalCost = $('#overlay').data('categoryCost');
    
        $('input[name="skill"]:checked').each(function () {
            totalCost += parseInt($(this).data('value'));
        });
        $('#totalCost').text(totalCost);
        $('#question2').hide();
        $('#result').show();
    });
    
    $('#calculate2').click(function () {
        var totalCost = $('#overlay').data('categoryCost');
    
        $('input[name="skill"]:checked').each(function () {
            totalCost += parseInt($(this).data('value'));
        });
        $('.costtotal').text(totalCost);
        $('#question3').hide();
        $('.result2').show();
    });
    
    });document.querySelector('.btn').addEventListener('mouseover', function() {
    this.textContent = 'Нажми на меня';
});

document.querySelector('.btn').addEventListener('mouseout', function() {
    this.textContent = 'Узнать больше';
});


