$(document).ready(() => {
    $('#register').submit((event) => {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/',
            data: $('#register').serialize(),
            dataType: 'json',
            success: (response) => {
                $('#register')[0].reset();

                document.getElementById('check').innerHTML = response.Success;
                setTimeout(() => {
                    document.getElementById('check').innerHTML = '';
                }, 3000);
                if (
                    response.Success == 'You are regestered,You can login now.'
                ) {
                    document.getElementById('msg-box').click();
                }
            },
            error: () => {}
        });
    });
});
